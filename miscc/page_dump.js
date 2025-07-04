function generate() {
    const main = document.querySelector('#content');

    const filterWrapper = document.createElement('div');
    filterWrapper.id = 'filterinput';
    filterWrapper.style.display = 'flex';
    filterWrapper.style.justifyContent = 'center';
    filterWrapper.style.margin = '20px 0';
    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.id = 'songSearch';
    filterInput.placeholder = 'Song Search';
    filterInput.addEventListener('input', e => renderSongs(e.target.value));
    filterWrapper.appendChild(filterInput);

    const songContainer = document.createElement('div');
    songContainer.id = 'skinshere';

    main.appendChild(filterWrapper);
    main.appendChild(songContainer);

    Papa.parse('lock_in.csv', {
        header: true,
        download: true,
        complete: function(results) {
            const raw = results.data;
            window.dumpSongs = raw
                .map(entry => {
                    const trackUri = entry["Track URI"];
                    const trackName = entry["Track Name"];
                    if (!trackUri || !trackUri.startsWith("spotify:track:")) return null;
                    const trackId = trackUri.split(':')[2];
                    return {
                        name: trackName,
                        url: `https://open.spotify.com/embed/track/${trackId}`
                    };
                })
                .filter(Boolean);
            renderSongs();
        }
    });
}

function renderSongs(filter = '') {
    const container = document.getElementById('skinshere');
    container.innerHTML = '';
    const search = filter.toLowerCase();
    const songs = (window.dumpSongs || []).filter(song => song.name.toLowerCase().includes(search));

    const grid = document.createElement('div');
    grid.className = 'itemGrid';

    function createSongCard(song) {
        const card = document.createElement('a');
        card.className = 'item';
        card.href = song.url.replace('/embed/', '/');
        card.target = '_blank';
        card.style.textDecoration = 'none';
        card.style.color = 'inherit';

        const content = document.createElement('section');
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.alignItems = 'center';
        content.style.padding = '10px';

        const title = document.createElement('h2');
        title.className = 'itemName';
        title.innerText = song.name;
        title.style.textAlign = 'center';

        const iframe = document.createElement('iframe');
        iframe.src = song.url;
        iframe.width = '300';
        iframe.height = '152';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        iframe.loading = 'lazy';
        iframe.style.borderRadius = '12px';
        iframe.style.display = 'block';
        iframe.style.marginBottom = '20px';

        content.appendChild(title);
        content.appendChild(iframe);
        card.appendChild(content);

        return card;
    }

    songs.forEach((song, index) => {
    setTimeout(() => {
        const card = createSongCard(song);
        grid.appendChild(card);
    }, index * 100); // space out by 100ms each
    });

    container.appendChild(grid);
}