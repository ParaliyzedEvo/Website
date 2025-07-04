const customSongs = [
    {
        name: "CRAZY (feat. PinkPantheress) English Ver.)",
        type: "mpeg",
        src: "/img/CRAZY (feat. PinkPantheress) English Ver.).mp3"
    },
    {
        name: "DECO＊27 - 初嵐 feat. 初音ミク",
        type: "mpeg",
        src: "/img/DECO＊27 - 初嵐 feat. 初音ミク [L7BxD7HHWl4].mp3"
    },
    {
        name: "Rabbit Hole ⧸ Pure Pure ＂ラビットホール＂ 4K Edit Full Version feat. @channelcaststation",
        type: "mpeg",
        src: "/img/Rabbit Hole ⧸ Pure Pure ＂ラビットホール＂ 4K Edit Full Version feat. @channelcaststation [zVRDUtJXCrQ].mp3"
    },
    {
        name: "mesmerizer 25 people",
        type: "mpeg",
        src: "/img/mesmerizer 25 people.mp3"
    }
    //{
    //    name: "Manually Added Spotify Song",
    //    url: "https://open.spotify.com/embed/track/7fRrTyKvE4Skh93v97gtcU"
    //}
];

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
    filterInput.placeholder = 'Filter songs...';
    filterInput.style.width = '300px';
    filterInput.style.fontSize = '16px';
    filterInput.style.padding = '8px 12px';
    filterInput.addEventListener('input', e => renderSongs(e.target.value));
    filterWrapper.appendChild(filterInput);

    const songContainer = document.createElement('div');
    songContainer.id = 'skinshere';

    main.appendChild(filterWrapper);
    main.appendChild(songContainer);

    Papa.parse('https://git.paraliyzed.net/lock_in.csv', {
        header: true,
        download: true,
        complete: function(results) {
            const raw = results.data;
            const csvSongs = raw
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

            window.dumpSongs = [...csvSongs, ...customSongs];
            renderSongs();
        }
    });
}

function renderSongs(filter = '') {
    const container = document.getElementById('skinshere');
    container.innerHTML = '';
    const search = filter.toLowerCase();

    const songs = (window.dumpSongs || []).filter(song => {
        return song.name.toLowerCase().includes(search);
    });

    const grid = document.createElement('div');
    grid.className = 'itemGrid';

    songs.forEach((song, index) => {
        setTimeout(() => {
            const card = createSongCard(song);
            grid.appendChild(card);
        }, index * 100);
    });

    container.appendChild(grid);
}

function createSongCard(song) {
    const isSpotify = song.url && (() => {
        try {
            const url = new URL(song.url);
            const allowedHosts = ['open.spotify.com', 'embed.open.spotify.com'];
            return allowedHosts.includes(url.host);
        } catch (e) {
            return false;
        }
    })();
    const isAudio = song.type && song.src;

    let card;

    if (isSpotify) {
        card = document.createElement('a');
        card.className = 'item';
        card.href = song.url.replace('/embed/', '/');
        card.target = '_blank';
        card.style.textDecoration = 'none';
        card.style.color = 'inherit';
    } else {
        card = document.createElement('div');
        card.className = 'item';
    }

    const content = document.createElement('section');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.padding = '10px';

    const title = document.createElement('h2');
    title.className = 'itemName';
    title.innerText = song.name;
    title.style.textAlign = 'center';

    content.appendChild(title);

    if (isSpotify) {
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
        content.appendChild(iframe);
    } else if (isAudio) {
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.style.display = 'block';
        audio.style.marginBottom = '20px';

        const source = document.createElement('source');
        source.src = song.src;
        source.type = `audio/${song.type}`;
        audio.appendChild(source);

        content.appendChild(audio);
    }

    card.appendChild(content);
    return card;
}