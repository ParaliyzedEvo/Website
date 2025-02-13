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
		function fadeOut(element, duration = 500) {
			element.style.transition = `opacity ${duration}ms ease-out`;
			element.style.opacity = 0;
			setTimeout(() => {
				element.style.display = 'none';
			}, duration);
		}
		
		function fadeIn(element, duration = 500, displayStyle = 'block') {
			element.style.opacity = 0; 
			element.style.display = displayStyle;
			element.style.transition = `opacity ${duration}ms ease-in`;
			setTimeout(() => {
				element.style.opacity = 1;
			}, 50);
		}

		const contentWrapper = document.createElement('div');
		contentWrapper.style.display = 'flex';
		contentWrapper.style.justifyContent = 'center';
		contentWrapper.style.alignItems = 'center';
		contentWrapper.style.height = 'auto';
		contentWrapper.style.position = 'relative';
		contentWrapper.style.flexDirection = 'column';
		ctn.appendChild(contentWrapper);
	
		const lottietxtPlayer = document.createElement('dotlottie-player');
		lottietxtPlayer.id = 'lottietxtPlayer';
		lottietxtPlayer.src = "https://git.paraliyzed.net/logotxt.json";
		lottietxtPlayer.style.width = "auto";
		lottietxtPlayer.style.height = "auto";
		lottietxtPlayer.style.background = "transparent";
		lottietxtPlayer.setAttribute('speed', "1");
		lottietxtPlayer.setAttribute('direction', "1");
		lottietxtPlayer.setAttribute('playMode', "normal");
		//lottietxtPlayer.setAttribute('controls', "");
		lottietxtPlayer.style.opacity = '0';
		lottietxtPlayer.style.zIndex = '20';
		contentWrapper.appendChild(lottietxtPlayer);
	
		const lottiePlayer = document.createElement('dotlottie-player');
		lottiePlayer.id = 'lottiePlayer';
		lottiePlayer.src = "https://git.paraliyzed.net/logo.json";
		lottiePlayer.style.width = "auto";
		lottiePlayer.style.height = "auto";
		lottiePlayer.style.background = "transparent";
		lottiePlayer.setAttribute('speed', "0.5");
		lottiePlayer.setAttribute('direction', "1");
		lottiePlayer.setAttribute('playMode', "normal");
		lottiePlayer.setAttribute('autoplay', "");
		//lottiePlayer.setAttribute('controls', "");
		contentWrapper.appendChild(lottiePlayer);
	
		const logotxtImg = document.createElement('img');
		logotxtImg.src = '/img/logo_text.svg';
		logotxtImg.id = 'mainTitle';
		logotxtImg.classList.add('mainObject');
		logotxtImg.style.display = 'none';
		logotxtImg.style.zIndex = '20';
		contentWrapper.appendChild(logotxtImg);
		logotxtImg.draggable = false;
	
		const logoImg = document.createElement('img');
		logoImg.src = '/img/russian.png';
		logoImg.width = 256;
		logoImg.height = 256;
		logoImg.classList.add('mainObject');
		logoImg.style.display = 'none';
		contentWrapper.appendChild(logoImg);
		logoImg.draggable = false;
	
		//const skipButton = document.createElement('button');
		//skipButton.textContent = "Skip Animation";
		//skipButton.style.position = "absolute";
		//skipButton.style.top = "10px";
		//skipButton.style.right = "10px";
		//skipButton.style.zIndex = "1000";
		//skipButton.addEventListener('click', () => {
		//	lottiePlayer.style.display = 'none';
		//	lottietxtPlayer.play()
		//	lottietxtPlayer.style.display = 'block';
		//	logoImg.style.display = 'block';
		//	skiptxtButton.style.display = 'block';
		//	skipButton.remove();
		//});
		//contentWrapper.appendChild(skipButton);
	
		//const skiptxtButton = document.createElement('button');
		//skiptxtButton.textContent = "Skip Animation";
		//skiptxtButton.style.position = "absolute";
		//skiptxtButton.style.top = "10px";
		//skiptxtButton.style.right = "10px";
		//skiptxtButton.style.zIndex = "1000";
		//skiptxtButton.style.display = 'none';
		//skiptxtButton.addEventListener('click', () => {
		//	lottietxtPlayer.style.display = 'none';
		//	logotxtImg.style.display = 'block';
		//	skiptxtButton.remove();
		//});
		//contentWrapper.appendChild(skiptxtButton);
	
		lottiePlayer.addEventListener('complete', () => {
			fadeOut(lottiePlayer, 500);
			setTimeout(() => {
				fadeIn(logoImg, 500);
			  }, 500);
			setTimeout(() => {
				fadeIn(lottietxtPlayer, 1000);
			}, 1500);
			setTimeout(() => {
				lottietxtPlayer.play();
			}, 1200);
			skiptxtButton.style.display = 'block';
			//skipButton.remove();
		});
	
		lottietxtPlayer.addEventListener('complete', () => {
			lottietxtPlayer.freeze();
		});
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
			'https://open.spotify.com/embed/track/0RYHqnmtNRfbYxP6Dn8Vse?utm_source=generator',
			'https://open.spotify.com/embed/track/1M6VHCglQ2PLWeAsyhgEUH?utm_source=generator',
			'https://open.spotify.com/embed/track/6SjxVgMjH3b3AI4wVviZfi?utm_source=generator',
			'https://open.spotify.com/embed/track/3PM4cZMctdMliKHEFLXgLH?utm_source=generator'
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