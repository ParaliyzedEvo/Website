
const defpages = [
    {
        name: 'Home',
        url: 'index.html',
        icon: 'dir.png',
    },
    {
        name: 'Portfolio',
        url: 'portfolio.html',
        icon: 'page.png',
    },
    {
        name: 'Other',
        url: 'other.html',
        icon: 'page.png',
    },
    // skins
    {
        name: 'osu! Skins',
        url: 'skins',
        icon: 'dir.png',
    },
    {
        name: 'Paraliyzed Skins',
        url: 'skins/main',
        icon: 'dir.png',
    },
    {
        name: 'Paraliyzed V24',
        url: 'skins/main/01.html',
        icon: 'page.png',
    },
    {
        name: 'Paraliyzed DT v2',
        url: 'skins/main/02.html',
        icon: 'page.png',
    },
    {
        name: 'Paraliyzed Instafade V5',
        url: 'skins/main/03.html',
        icon: 'page.png',
    },
    {
        name: 'Paraliyzed with Reedkussy Cursor V7',
        url: 'skins/main/04.html',
        icon: 'page.png',
    },
    {
        name: 'Paraliyzed with Whitecat Cursor V7',
        url: 'skins/main/05.html',
        icon: 'page.png',
    },
    {
        name: 'Tuyu Skins',
        url: 'skins/tuyu',
        icon: 'dir.png',
    },
    {
        name: 'Tuyu V2',
        url: 'skins/tuyu/01.html',
        icon: 'page.png',
    },
    {
        name: 'Tuyu Instafade V2',
        url: 'skins/tuyu/02.html',
        icon: 'page.png',
    },
    {
        name: 'Other Skins',
        url: 'skins/other.html',
        icon: 'page.png',
    },
    {
        name: 'Skin Websites',
        url: 'skins/skin-sites.html',
        icon: 'page.png',
    },
    // projects
    {
        name: 'Projects',
        url: 'projects',
        icon: 'dir.png',
    },
    {
        name: 'Conversions',
        url: 'projects/conversions',
        icon: 'page.png',
    },
    {
        name: 'SSoB',
        url: 'projects/ssob_docs',
        icon: 'dir.png',
    },
    {
        name: 'Commands',
        url: 'projects/ssob_docs/commands.html',
        icon: 'page.png',
    },
    {
        name: 'Types',
        url: 'projects/ssob_docs/types.html',
        icon: 'page.png',
    },
]

/**
 * @param {number} level 
 * @param {string} cd 
 * @param {string} cur 
 */
function genSideNav(level, cd, cur) {
    const sidenav = document.getElementById('sidebar');
    const list = document.createElement('ul');
    list.id = 'sidenavList';
    sidenav.append(list);

    const normalizePath = (path) => (path && !path.startsWith('/') ? '/' + path : path);

    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }

    let pages = defpages;
    if (cd) {
        pages = defpages.slice().filter(x => x.url.startsWith(cd)
            && (x.url.split('/').length < level + 2 ||
                (x.url.split('/').length <= level + 2 && x.url.endsWith('index.html')))
        );
    } else {
        pages = defpages.slice().filter(x =>
            !x.url.includes('/')
            || (x.url.includes('/') && x.url.split('/').length <= 2 && x.url.includes('index.html'))
        );
    }

    if (level > 0) {
        const aWrap = document.createElement('a');
        aWrap.href = '/index.html';
        const item = document.createElement('li');
        item.className = 'sidebarItem';
        const img = document.createElement('img');
        img.src = '/img/icons/exit.png';
        const text = document.createElement('span');
        text.innerText = '';
        item.append(img, text);
        aWrap.append(item);
        list.append(aWrap);
    }

    pages.forEach(page => {
        const aWrap = document.createElement('a');
        const item = document.createElement('li');
        item.classList.add('sidebarItem');
        aWrap.href = normalizePath(subs + page.url);

        if (page.url === cur) {
            page.icon = page.icon.includes('dir') ? 'dir_current.png' : 'page_current.png';
            item.classList.add('sidebarItemActive');
        } else if (page.url === `${cd}/index.html` || page.url === '/index.html' || page.url === cd) {
            page.icon = page.icon.includes('dir') ? 'dir_index.png' : 'page_index.png';
        }

        const img = document.createElement('img');
        img.src = '/img/icons/' + page.icon;
        const text = document.createElement('span');
        text.innerText = page.name;

        if (page.url.split('/').length > level && !(page.url === `${cd}/index.html` || page.url === '/index.html')) {
            item.classList.add('sidebarChildItem');
        }

        text.classList.add('mono');
        item.append(img, text);
        aWrap.append(item);
        list.append(aWrap);
    });
}


function genSideButton(level) {
    let show = true;
    const sidenav = document.getElementById('sidebar');
    let list = document.getElementById('sidenavList');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    if (devicePixelRatio > 1) {
        show = false
    }
    {
        const sideButton = document.createElement('div');
        sideButton.id = 'sidebarButton'
        sideButton.addEventListener('click', () => {
            show = displaySide(show, list, sidenav);
        });
        const sideButtonImgOffset = document.createElement('span');
        sideButtonImgOffset.id = 'sideButtonImgOffset'
        const sideButtonImg = document.createElement('img');
        sideButtonImg.src = '/img/icons/sidebarButton.png';
        sideButtonImg.id = 'sideButtonImg';
        sideButton.append(sideButtonImgOffset, sideButtonImg);
        sidenav.append(sideButton);
    }
    let ctn = document.getElementById('content');
    ctn.style.left = sidenav.offsetWidth + 'px';
    show = displaySide(show, list, sidenav);
}

/**
 * 
 * @param {boolean} show 
 * @param {HTMLULElement} list 
 * @param {HTMLDivElement} sidebar
 * @returns 
 */
function displaySide(show, list, sidebar) {
    let ctn = document.getElementById('content');
    let button = document.getElementById('sidebarButton');
    let big = sidebar.offsetWidth + 3;
    if (show) {
        sidebar.style.transform = `translateX(0)`
        ctn.style.transform = `translateX(0)`
        ctn.style.width = `calc(98vw - ${big + button.offsetWidth}px)`
    } else {
        let t = big - sidebar.offsetWidth + button.offsetWidth + button.offsetWidth;
        sidebar.style.transform = `translateX(-${list.clientWidth}px)`
        ctn.style.transform = `translateX(-${list.clientWidth}px)`
        ctn.style.width = `calc(98vw - ${t}px)`
    }
    return !show;
}

/**
 * @param {number} level 
 * @param {string} cd 
 * @param {string} cur 
 */
function genPage(level, cd, cur) {
    genSideNav(level, cd, cur);
    genSocials(level);
    genTitle(level, cur);
    genSideButton(level);
}

const socials = [
    {
        icon: 'discord.png',
        url: 'https://discord.gg/XVhf65BvUT'
    },
    {
        icon: 'mail.png',
        url: 'mailto:business@paraliyzed.com'
    },
    {
        icon: 'github.png',
        url: 'https://github.com/Paraliyzedevo',
    },
	{
        icon: 'instagram.png',
        url: 'https://www.instagram.com/paraliyzed_evo/',
    },
	{
        icon: 'musescore.png',
        url: 'https://musescore.com/paraliyzed_evo',
    },
	{
        icon: 'osu.png',
        url: 'https://osu.ppy.sh/users/19637339',
    },
	{
        icon: 'reddit.png',
        url: 'https://www.reddit.com/user/Paraliyzed_evo/',
    },
	{
        icon: 'soundcloud.png',
        url: 'https://soundcloud.com/bestosuplayer',
    },
	{
        icon: 'spotify.png',
        url: 'https://open.spotify.com/user/andreivillaro',
    },
	{
        icon: 'steam.png',
        url: 'https://steamcommunity.com/id/Paraliyzed_evo/',
    },
	{
        icon: 'tiktok.png',
        url: 'https://www.tiktok.com/@worstosuplayer',
    },
	{
        icon: 'tip.png',
        url: 'https://www.reddit.com/user/Paraliyzed_evo/',
    },
	{
        icon: 'twitch.png',
        url: 'https://twitch.tv/Paraliyzed_evo',
    },
	{
        icon: 'twitter.png',
        url: 'https://twitter.com/Light_Bushi',
    },
    {
        icon: 'youtube.png',
        url: 'https://www.youtube.com/@BestOsuPlayer',
    }
]

/**
 * @param {number} level 
 */
function genSocials(level) {
    const section = document.getElementById('socialLinks');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    socials.forEach(social => {
        const item = document.createElement('a');
        item.className = 'socialItem';
        item.href = social.url;
        const img = document.createElement('img');
        img.src = '/img/social/' + social.icon;
        img.className = 'socialItemImg';
        item.append(img)
        section.append(item);
    })
}

/**
 * @param {number} level 
 * @param {string} cur 
 */
function genTitle(level, cur) {
    const main = document.getElementById('addressBar');
    let subs = '';
    for (let i = 0; i < level; i++) {
        subs += '../';
    }
    if (subs == ''){
        subs = './'
    }
    let arr = [
        {
            text: 'HOME',
            url: '/index.html',
        }
    ];
    if (cur.includes('/')) {
        const split = cur.split('/');
        for (let i = 0; i < split.length; i++) {
            arr.push({
                text: split[i],
                url: subs + split.slice(0, i + 1).join('/')
            })
        }
    } else {
        arr.push({
            text: cur,
            url: cur
        });
    }
    arr = arr.filter(x => x.text != 'index.html');
    arr.forEach(url => {
        if (url.text != 'HOME') {
            const slash = document.createElement('span');
            slash.innerText = '/';
            slash.classList.add('mono');
            main.append(slash)
        }
        const item = document.createElement('a');
        item.innerText = url.text.replace('.html', '');
        item.href = url.url;
        item.classList.add('mono');

        main.append(item);
    });
    main.style.marginLeft =
        'calc(' +
        document.getElementById('sidebar').offsetWidth + 'px - ' + document.getElementById('socialLinks').clientWidth + 'px + 640px)'
}