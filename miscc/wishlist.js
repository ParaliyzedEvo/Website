const PROXY = 'https://proxy.paraliyzed.net/?url=';

const WISHLIST_API = PROXY + encodeURIComponent(
    'https://biasroom.com/api/wishlist?userId=cmicqgr910000jp04siot2kuw&page=1&sortBy=newest'
);
const PRICE_API = (id, status) => PROXY + encodeURIComponent(
    `https://biasroom.com/api/photocards/${id}/listings?status=${status}`
);

const PAGE_SIZE = 30;
const PRICE_CACHE_KEY = 'wishlistPriceCache';
const PRICE_CACHE_TTL = 12 * 60 * 60 * 1000; // 12h, so we're not re-hitting the price endpoint for every card on every visit

let allItems = [];
let filteredItems = [];
let currentPage = 1;
let memberSelectEl = null;
const filters = { group: '', member: '', album: '', event: '', other: '' };

function generate() {
    injectStyles();
    fetch(WISHLIST_API)
        .then(r => r.json())
        .then(data => {
            allItems = (data.wishlistItems || [])
                .map(w => w.photocard)
                .filter(Boolean);
            buildFilters();
            applyFilters();
        })
        .catch(err => {
            console.error('wishlist fetch failed', err);
            document.getElementById('photocardshere').innerHTML =
                '<p>Couldn\'t load the wishlist right now.</p>';
        });
}

/* ---------- filters ---------- */

function buildFilters() {
    const groups = uniqueSorted(allItems.map(p => p.group && p.group.name));
    const albums = uniqueSorted(
        allItems.filter(p => p.origin === 'Album').map(p => p.album && p.album.title)
    );
    const events = uniqueSorted(
        allItems.filter(p => p.origin === 'Event').map(p => p.event && p.event.title)
    );
    const others = uniqueSorted(
        allItems.filter(p => p.origin === 'Other').map(p => p.other && p.other.title)
    );

    const container = document.getElementById('filterinput');
    container.innerHTML = '';
    container.appendChild(makeGroupSelect(groups));

    memberSelectEl = makeMemberSelect();
    container.appendChild(memberSelectEl);

    container.appendChild(makeSelect('album', 'All Albums', albums));
    container.appendChild(makeSelect('event', 'All Events', events));
    container.appendChild(makeSelect('other', 'All Others', others));
}

function makeGroupSelect(groups) {
    const sel = document.createElement('select');
    sel.className = 'filterSelect';
    sel.id = 'filter-group';

    const def = document.createElement('option');
    def.value = '';
    def.textContent = 'All Groups';
    sel.appendChild(def);

    groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
        filters.group = sel.value;
        filters.member = ''; // previous member pick may not belong to the new group
        currentPage = 1;
        rebuildMemberSelect();
        applyFilters();
    });

    return sel;
}

function makeMemberSelect() {
    const members = uniqueSorted(
        allItems
            .filter(p => !filters.group || (p.group && p.group.name === filters.group))
            .map(p => p.member && (p.member.stage_name || p.member.name))
    );
    return makeSelect('member', 'All Members', members);
}

function rebuildMemberSelect() {
    const fresh = makeMemberSelect();
    memberSelectEl.replaceWith(fresh);
    memberSelectEl = fresh;
}

function makeSelect(key, defaultLabel, options) {
    const sel = document.createElement('select');
    sel.className = 'filterSelect';
    sel.id = 'filter-' + key;

    const def = document.createElement('option');
    def.value = '';
    def.textContent = defaultLabel;
    sel.appendChild(def);

    options.forEach(o => {
        const opt = document.createElement('option');
        opt.value = o;
        opt.textContent = o;
        sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
        filters[key] = sel.value;
        currentPage = 1;
        applyFilters();
    });

    return sel;
}

function uniqueSorted(arr) {
    return Array.from(new Set(arr.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function applyFilters() {
    filteredItems = allItems.filter(p => {
        if (filters.group && (!p.group || p.group.name !== filters.group)) return false;
        if (filters.member) {
            const name = p.member && (p.member.stage_name || p.member.name);
            if (name !== filters.member) return false;
        }
        if (filters.album && (p.origin !== 'Album' || !p.album || p.album.title !== filters.album)) return false;
        if (filters.event && (p.origin !== 'Event' || !p.event || p.event.title !== filters.event)) return false;
        if (filters.other) {
            const name = p.other && p.other.title;
            if (p.origin !== 'Other' || name !== filters.other) return false;
        }
        return true;
    });
    renderPage();
}

/* ---------- rendering ---------- */

function renderPage() {
    const container = document.getElementById('photocardshere');
    container.innerHTML = '';

    const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filteredItems.slice(start, start + PAGE_SIZE);

    const grid = document.createElement('div');
    grid.className = 'itemGrid itemHomeGrid';
    container.appendChild(grid);

    if (!pageItems.length) {
        const empty = document.createElement('p');
        empty.textContent = 'Nothing matches those filters.';
        grid.appendChild(empty);
    }

    pageItems.forEach(p => grid.appendChild(buildCard(p)));

    renderPagination(container, totalPages);
}

function buildCard(p) {
    const card = document.createElement('div');
    card.className = 'item itemHomeWidth';

    const link = document.createElement('a');
    link.className = 'itemAsLink';
    link.href = `https://biasroom.com/browse?modal=photocard&id=${p.id}`;
    link.target = '_blank';
    link.rel = 'noopener';

    const img = document.createElement('img');
    img.className = 'itemPreviewImage';
    img.loading = 'lazy';
    img.src = p.watermarked_image_url || p.image_url || '';
    img.alt = p.name || '';
    link.appendChild(img);

    const name = document.createElement('div');
    name.className = 'itemName';
    const groupName = p.group ? p.group.name : '';
    const memberName = p.member ? (p.member.stage_name || p.member.name) : '';
    name.textContent = [groupName, memberName].filter(Boolean).join(' - ') || 'Group PC';

    const desc = document.createElement('p');
    desc.className = 'searchItemDescription';
    desc.textContent = p.name || '';

    const priceEl = document.createElement('p');
    priceEl.className = 'pageTertiaryTitleYellow';
    priceEl.textContent = 'Loading price...';

    card.appendChild(link);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(priceEl);

    getPrice(p.id).then(res => {
        priceEl.textContent = res.median != null ? res.formatted : 'No listings found';
    });

    return card;
}

function renderPagination(container, totalPages) {
    const pag = document.createElement('div');
    pag.style.textAlign = 'center';
    pag.style.margin = '20px 0';

    const prev = document.createElement('button');
    prev.className = 'skipbutton';
    prev.textContent = 'Prev';
    prev.disabled = currentPage <= 1;
    prev.addEventListener('click', () => {
        currentPage--;
        renderPage();
        window.scrollTo(0, 0);
    });

    const label = document.createElement('span');
    label.style.margin = '0 15px';
    label.textContent = `Page ${currentPage} of ${totalPages}`;

    const next = document.createElement('button');
    next.className = 'skipbutton';
    next.textContent = 'Next';
    next.disabled = currentPage >= totalPages;
    next.addEventListener('click', () => {
        currentPage++;
        renderPage();
        window.scrollTo(0, 0);
    });

    pag.appendChild(prev);
    pag.appendChild(label);
    pag.appendChild(next);
    container.appendChild(pag);
}

/* ---------- prices ---------- */

function getPrice(photocardId) {
    const cache = readCache();
    const cached = cache[photocardId];
    if (cached && Date.now() - cached.ts < PRICE_CACHE_TTL) {
        return Promise.resolve(cached.data);
    }

    return fetchListings(photocardId, 'sold')
        .then(listings => (listings.length ? listings : fetchListings(photocardId, 'listed')))
        .then(listings => {
            const result = computeMedian(listings);
            cache[photocardId] = { ts: Date.now(), data: result };
            writeCache(cache);
            return result;
        })
        .catch(() => ({ median: null, formatted: 'N/A' }));
}

function fetchListings(photocardId, status) {
    return fetch(PRICE_API(photocardId, status))
        .then(r => r.json())
        .then(d => d.listings || []);
}

function computeMedian(listings) {
    const priced = listings.filter(l => typeof l.price_usd_value === 'number');
    if (!priced.length) return { median: null, formatted: 'N/A' };

    const sorted = priced.slice().sort((a, b) => a.price_usd_value - b.price_usd_value);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2
        ? sorted[mid].price_usd_value
        : (sorted[mid - 1].price_usd_value + sorted[mid].price_usd_value) / 2;

    return { median, formatted: 'USD ' + median.toFixed(2) };
}

function readCache() {
    try {
        return JSON.parse(localStorage.getItem(PRICE_CACHE_KEY)) || {};
    } catch (e) {
        return {};
    }
}

function writeCache(cache) {
    try {
        localStorage.setItem(PRICE_CACHE_KEY, JSON.stringify(cache));
    } catch (e) {
        /* storage full/blocked, not fatal — just no caching this session */
    }
}

function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .filterSelect {
            background-color: var(--bg-aside);
            color: var(--basic-text);
            border: 2px solid var(--border);
            padding: 10px 15px;
            margin: 5px;
            font-size: 16px;
            border-radius: 3px;
            min-width: 180px;
            cursor: pointer;
        }
        .filterSelect:hover {
            border-color: var(--highlightAlt);
        }
    `;
    document.head.appendChild(style);
}