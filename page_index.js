function generate() {
    const ctn = document.getElementById('content');
	{
		const textElement = document.createElement('div');
		textElement.innerHTML = '<span style="color: var(--clrs-red);">(IMPORTANT)</span>';
		textElement.style.display = 'flex';
		textElement.style.justifyContent = 'center';
		textElement.style.alignItems = 'center';
		textElement.style.fontSize = '25px';
		textElement.style.fontFamily = 'Ubuntu, sans-serif';
		ctn.append(textElement);
	}
	{
		const textElement = document.createElement('div');
		textElement.innerHTML = 'Any issues regarding on the pages content or things not loading in properly or the styling is js off, I already know as I\'m redoing my entire website. Please bear with me.';
		textElement.style.display = 'flex';
		textElement.style.justifyContent = 'center';
		textElement.style.alignItems = 'center';
		textElement.style.fontSize = '18px';
		textElement.style.fontFamily = 'Ubuntu, sans-serif';
		ctn.append(textElement);
	}
	{
		const textElement = document.createElement('div');
		textElement.style.justifyContent = 'center';
		textElement.style.alignItems = 'center';
		textElement.style.fontSize = '12px';
		textElement.style.fontFamily = 'Ubuntu, sans-serif';
		
		const usedText = document.createTextNode('Used ');
		textElement.appendChild(usedText);
		
		const anchor = document.createElement('a');
		anchor.href = 'https://sbrstrkkdwmdr.github.io';
		anchor.textContent = "Saberstrike's website";
		anchor.style.fontSize = "12px"
		anchor.id = 'niger';
		textElement.appendChild(anchor);
		
		const templateText = document.createTextNode(' as a template for mine');
		textElement.style.marginTop = '23px';
		textElement.appendChild(templateText);
		ctn.append(textElement);
	}
    {
        const img = document.createElement('img')
        img.src = '/img/logo_text.svg'
        img.id = 'mainTitle'
        img.classList.add('mainObject');
        ctn.append(img);
		img.draggable = false;
    }
	{
        const img = document.createElement('img');
        img.width = 256;
        img.height = 256;
        img.src = '/img/russian.png'
        img.classList.add('mainObject')
        ctn.append(img);
		img.draggable = false;
    }
	{
		const textElement = document.createElement('div');
		textElement.style.justifyContent = 'center';
		textElement.style.alignItems = 'center';
		textElement.style.fontSize = '14px';
		textElement.style.fontFamily = 'Ubuntu, sans-serif';
		
		const usedText = document.createTextNode('If you have encounter any bugs/issues on my wesbite please open a new issue ');
		textElement.appendChild(usedText);
		
		const anchor = document.createElement('a');
		anchor.href = 'https://github.com/ParaliyzedEvo/Website/issues';
		anchor.textContent = "here";
		anchor.style.fontSize = "14px"
		anchor.id = 'niger';
		textElement.appendChild(anchor);
		
		const templateText = document.createTextNode(' and I will reply as soon as I can');
		textElement.style.marginTop = '15px';
		textElement.style.marginBottom = '25px';
		textElement.appendChild(templateText);
		ctn.append(textElement);
	}
    {
        const socialSection = document.createElement('section');
        socialSection.id = 'socialSection';
        socials.forEach(social => {
            const item = document.createElement('a');
            item.className = 'indexSocialItem';
            item.href = social.url;
            const img = document.createElement('img');
            img.src = '/img/social/' + social.icon;
            item.append(img)
            socialSection.append(item);
            item.addEventListener('mouseover', e => {
                img.src = '/img/social/white/' + social.icon;
            });
            item.addEventListener('mouseout', e => {
                img.src = '/img/social/' + social.icon;
            });
			item.draggable = false;
            img.draggable = false;
        })
        ctn.append(socialSection)
    }
	{
		const container = document.getElementById('content');

		const osuHeading = document.createElement('div');
		osuHeading.innerHTML = 'Random osu! songs<br>';
		osuHeading.style.marginTop = '100px';
		osuHeading.style.textAlign = 'left';
		container.appendChild(osuHeading);
		
		const osuSongs = [
			{ src: '/img/DECO＊27 - 初嵐 feat. 初音ミク [L7BxD7HHWl4].mp3', type: 'audio/mpeg' },
			{ src: '/img/Rabbit Hole ⧸ Pure Pure ＂ラビットホール＂ 4K Edit Full Version feat. @channelcaststation [zVRDUtJXCrQ].mp3', type: 'audio/mpeg' },
			{ src: '/img/mesmerizer 25 people.mp3', type: 'audio/mpeg' },
		];

		osuSongs.forEach(song => {
			const audioElement = document.createElement('audio');
			audioElement.controls = true;

			const sourceElement = document.createElement('source');
			sourceElement.src = song.src;
			sourceElement.type = song.type;

			audioElement.appendChild(sourceElement);
			audioElement.style.display = 'block';
			audioElement.style.marginLeft = '0';
			container.appendChild(audioElement);
		});

		const osuSpotifyTracks = [
			'https://open.spotify.com/embed/track/47lKHyMERKqbCwYVw4ytTz?utm_source=generator',
			'https://open.spotify.com/embed/track/2nKzhen7U2hJqZSKJcg8Ei?utm_source=generator',
		];

		osuSpotifyTracks.forEach(src => {
			const osuSpotify = document.createElement('iframe');
			osuSpotify.style.borderRadius = '12px';
			osuSpotify.src = src;
			osuSpotify.width = '300';
			osuSpotify.height = '152';
			osuSpotify.frameBorder = '0';
			osuSpotify.allowFullscreen = true;
			osuSpotify.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
			osuSpotify.loading = 'lazy';
			osuSpotify.style.display = 'block';
			osuSpotify.style.marginLeft = '0';
			container.appendChild(osuSpotify);
		});
		container.appendChild(document.createElement('br'));
		container.appendChild(document.createElement('br'));

		const nonOsuHeading = document.createElement('div');
		nonOsuHeading.innerHTML = 'Random non-osu! songs<br>';
		nonOsuHeading.style.textAlign = 'left';
		container.appendChild(nonOsuHeading);

		const nonOsuSongs = [
			{ src: '/img/CRAZY (feat. PinkPantheress) English Ver.).mp3', type: 'audio/mpeg' },
		];

		nonOsuSongs.forEach(song => {
			const audioElement = document.createElement('audio');
			audioElement.controls = true;

			const sourceElement = document.createElement('source');
			sourceElement.src = song.src;
			sourceElement.type = song.type;

			audioElement.appendChild(sourceElement);
			audioElement.style.display = 'block';
			audioElement.style.marginLeft = '0';
			container.appendChild(audioElement);
		});

		const nonOsuSpotifyTracks = [
			'https://open.spotify.com/embed/track/5tqZJUHEuqdN12RZVq2l9p?utm_source=generator',
			'https://open.spotify.com/embed/track/0RYHqnmtNRfbYxP6Dn8Vse?utm_source=generator',
			'https://open.spotify.com/embed/track/1M6VHCglQ2PLWeAsyhgEUH?utm_source=generator',
			'https://open.spotify.com/embed/track/6SjxVgMjH3b3AI4wVviZfi?utm_source=generator',
			'https://open.spotify.com/embed/track/3PM4cZMctdMliKHEFLXgLH?utm_source=generator',
			'https://open.spotify.com/embed/track/7GX5flRQZVHRAGd6B4TmDO?utm_source=generator',
			'https://open.spotify.com/embed/track/3WattXYKPa1N4sDqTvSrLS?utm_source=generator'

		];

		nonOsuSpotifyTracks.forEach(src => {
			const nonOsuSpotify = document.createElement('iframe');
			nonOsuSpotify.style.borderRadius = '12px';
			nonOsuSpotify.src = src;
			nonOsuSpotify.width = '300';
			nonOsuSpotify.height = '152';
			nonOsuSpotify.frameBorder = '0';
			nonOsuSpotify.allowFullscreen = true;
			nonOsuSpotify.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
			nonOsuSpotify.loading = 'lazy';
			nonOsuSpotify.style.textAlign = 'left';
			nonOsuSpotify.style.display = 'block';
			nonOsuSpotify.style.marginLeft = '0';
			container.appendChild(nonOsuSpotify);
		});
	}
}