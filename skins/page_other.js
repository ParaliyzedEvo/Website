const skins = [
    {
        name: 'WhiteCat (1.0)',
        url: 'https://osu.ppy.sh/community/forums/topics/986201?n=1',
        img: 'https://i.ppy.sh/cdf26d9fdc38d5dd5ba1c8fdfb8bed19fb26f03d/68747470733a2f2f696d6775722d617263686976652e7070792e73682f695065336d33532e6a7067',
        modes: ['osu'],
    },
    {
        name: 'Lycoris Recoil - Kurumi',
        url: 'https://www.reddit.com/r/OsuSkins/comments/wn2fbw/std_only_lycoris_recoil_kurumi_osuskin/',
        img: 'https://i.postimg.cc/02RBhcwv/N6rDs8s.jpg',
        modes: ['osu'],
    },
    {
        name: '[Hololive EN] Mori Calliope 森美声',
        url: 'https://www.reddit.com/r/CalliopeMori/comments/lj33w7/calli_osu_skin_in_case_you_play_osu/',
        img: 'https://i.postimg.cc/mhWTPq4Z/B1n0N96.jpg',
        modes: ['osu'],
    },
    {
        name: '-#KW-! If there was an endpoint.',
        url: 'https://osu.ppy.sh/community/forums/topics/1672096?n=1',
        img: 'https://i.postimg.cc/3xDbSR2q/bP17ks9.png',
        modes: ['osu'],
    },
    {
        name: 'Koifish',
        url: 'https://drive.google.com/drive/u/1/folders/18t7KxG2scQgm43DW930cSmaUXbYEpCdK',
        img: 'https://i.postimg.cc/W3QnxRg7/koi.jpg',
        modes: ['osu'],
    },
]

function generate() {
    const ctn = document.getElementById('content');

    const main = document.createElement('div');
    main.classList.add('itemGrid');
    skins.forEach(skin => {
        const a = document.createElement('a');
        a.href = skin.url;
        const item = document.createElement('section');
        item.className = 'item';
        const h2 = document.createElement('h2');
        h2.className = 'itemName';
        h2.innerText = skin.name;
        const img = document.createElement('img');
        img.src = skin.img.replace('.jpg', '_preview.jpg');
        img.width = '400';
        img.height = '225';
        const modeIcons = document.createElement('div');
        modeIcons.className = 'itemModes'
        for (const mode of skin.modes) {
            const img = document.createElement('img');
            img.src = '/img/modes/' + mode + '.png'
            img.className = 'itemMode'
            modeIcons.append(img);
        }

        item.append(h2, img, modeIcons);
        a.append(item);
        main.append(a);
    })
    ctn.append(main)
    {
		const spacer = document.createElement('div'); 
		spacer.style.height = "calc(152px + 69px)";
		spacer.style.width = '100%';
		spacer.style.display = 'block';
		ctn.appendChild(spacer);
	}

}