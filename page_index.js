function generate() {
    const ctn = document.getElementById('content');
	{
		const textElement = document.createElement('div');
		textElement.style.justifyContent = 'center';
		textElement.style.alignItems = 'center';
		textElement.style.fontSize = '12px';
		textElement.style.fontFamily = 'Ubuntu, sans-serif';

		const adLink = document.createElement('a');
		adLink.href = 'https://discord.gg/rkURq6wVTU';
		adLink.target = '_blank';

		const adImg = document.createElement('img');
		adImg.src = '/img/horizontalbannerA.png';
		adImg.classList.add('mainObject');
		adImg.style.width = '872px';
		adImg.style.height = '108px';
		adImg.style.maxWidth = 'none';
		adImg.style.objectFit = 'unset';
		adImg.style.display = 'block';
		adImg.draggable = false;

		adLink.appendChild(adImg);
		ctn.appendChild(adLink);
		
		const usedText = document.createTextNode('Used ');
		textElement.appendChild(usedText);
		
		const anchor = document.createElement('a');
		anchor.href = 'https://sbrstrkkdwmdr.github.io';
		anchor.textContent = "Saberstrike's website";
		anchor.style.fontSize = "12px"
		anchor.id = 'niger';
		textElement.appendChild(anchor);
		
		const templateText = document.createTextNode(' as a template for mine');
		textElement.style.marginTop = '7px';
		textElement.appendChild(templateText);
		ctn.append(textElement);
	}
	{
		function fadeOut(element, duration = 500) {
			element.style.transition = `opacity ${duration}ms ease-out`;
			element.style.opacity = 0;
			requestAnimationFrame(() => {
				setTimeout(() => {
					element.style.display = 'none';
				}, duration);
			});
		}
		
		function fadeIn(element, duration = 500, displayStyle = 'block') {
			element.style.opacity = 0;
			element.style.display = displayStyle;
			element.style.transition = `opacity ${duration}ms ease-in`;
			requestAnimationFrame(() => {
				setTimeout(() => {
					element.style.opacity = 1;
				});
			});
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
		lottietxtPlayer.setAttribute('preload', 'none');
		lottietxtPlayer.id = 'lottietxtPlayer';
		lottietxtPlayer.src = "https://git.paraliyzed.net/logotxt.json";
		lottietxtPlayer.style.width = "auto";
		lottietxtPlayer.style.height = "auto";
		lottietxtPlayer.classList.add('mainObject');
		lottietxtPlayer.style.background = "transparent";
		lottietxtPlayer.setAttribute('speed', "1");
		lottietxtPlayer.setAttribute('direction', "1");
		lottietxtPlayer.setAttribute('playMode', "normal");
		lottietxtPlayer.style.opacity = '0';
		lottietxtPlayer.style.zIndex = '20';
		contentWrapper.appendChild(lottietxtPlayer);
	
		const lottiePlayer = document.createElement('dotlottie-player');
		lottiePlayer.setAttribute('preload', 'none');
		lottiePlayer.id = 'lottiePlayer';
		lottiePlayer.src = "https://git.paraliyzed.net/logo.json";
		lottiePlayer.style.width = "400px";
		lottiePlayer.style.height = "400px";
		lottiePlayer.classList.add('mainObject');
		lottiePlayer.style.background = "transparent";
		lottiePlayer.setAttribute('speed', "0.5");
		lottiePlayer.setAttribute('direction', "1");
		lottiePlayer.setAttribute('playMode', "normal");
		lottiePlayer.setAttribute('autoplay', "");
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
		logoImg.src = '/img/lara.png';
		logoImg.width = 256;
		logoImg.height = 256;
		logoImg.classList.add('mainObject');
		logoImg.style.display = 'none';
		contentWrapper.appendChild(logoImg);
		logoImg.draggable = false;

		const skipButton = document.createElement('button');
		skipButton.classList.add('skipbutton');
		skipButton.innerText = 'Skip';
		skipButton.style.position = 'absolute';
		skipButton.style.top = '20px';
		skipButton.style.right = '20px';
		skipButton.style.padding = '10px 20px';
		skipButton.style.fontSize = '16px';
		skipButton.style.cursor = 'pointer';
		contentWrapper.appendChild(skipButton);

		function skipAnimations() {
			lottiePlayer.style.display = 'none';
			lottietxtPlayer.style.display = 'none';
			logoImg.style.display = 'block';
			logoImg.style.opacity = '1';
			logotxtImg.style.display = 'block';
			logotxtImg.style.opacity = '1';
			skipButton.remove();
		}

		skipButton.addEventListener('click', skipAnimations);

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
			skipButton.style.display = 'none';
			lottiePlayer.removeEventListener('complete', handleComplete);
		});
		lottietxtPlayer.addEventListener('complete', () => {
			lottietxtPlayer.freeze();
			lottietxtPlayer.removeEventListener('complete', handleComplete);
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
            img.src = './img/social/' + social.icon.replace('.png', `_${lightdark}.png`);
            item.append(img)
            socialSection.append(item);
            // item.addEventListener('mouseover', e => {
            //     img.src = '/img/social/white/' + social.icon;
            // });
            // item.addEventListener('mouseout', e => {
            //     img.src = '/img/social/' + social.icon;
            // });
			item.draggable = false;
            img.draggable = false;
        })
        ctn.append(socialSection)
    }
	{
        const pages = [
            {
                name: 'osu! skins',
                img: '/skins/img/main.jpg',
                url: '/skins',
                keepRatio: false,
                pixel: false,
            },
            {
                name: 'Portfolio',
                img: '/img/icons/page.png',
                url: '/portfolio.html',
                keepRatio: true,
                pixel: true,
            },
            {
                name: 'Other',
                img: '/img/icons/page.png',
                url: '/other.html',
                keepRatio: true,
                pixel: true,
            },
            {
                name: 'Search',
                img: '/img/icons/search_dark.png',
                url: '/search.html',
                keepRatio: true,
                pixel: false,
            },
			{
                name: 'Song Dump',
                img: '/img/social/spotify_dark.png',
                url: 'miscc/song_dump.html',
                keepRatio: true,
                pixel: true,
            }
        ]
        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('itemGrid');
        pages.forEach(page => {
            const a = document.createElement('a');
            a.href = page.url;
            const item = document.createElement('section');
            item.className = 'item';
            const h2 = document.createElement('h2');
            h2.className = 'itemName';
            h2.innerText = page.name;
            const img = document.createElement('img');
            img.src = page.img;
            img.className = "itemPreviewImage"
            if (page.keepRatio) {
                img.style.width = '256px';
				img.style.height = '256px'
            }
            if (page.pixel) {
                img.style.imageRendering = 'pixelated'
            }
            item.append(h2, img);
            a.append(item);
            pagesDiv.append(a);
        })
        const margin = document.createElement('div');
        margin.style.marginTop = '250px';
        ctn.append(margin, pagesDiv)
    }
}

async function insertSongOfTheDay() {
  const response = await fetch('https://git.paraliyzed.net/music.txt');
  const text = await response.text();

  const links = text.split('\n').map(line => line.trim()).filter(Boolean);
  const tried = new Set();

  const itemGrid = document.querySelector('.itemGrid');
  const itemYoutubePreview = document.createElement('section');
  itemYoutubePreview.className = "item";

  const p1 = document.createElement("p");
  p1.id = "youtubePreview";
  p1.className = "itemName";
  p1.innerText = "Song of the Day";

  itemYoutubePreview.appendChild(p1);
  itemGrid.appendChild(itemYoutubePreview);

  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function getTodaySeed() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    return Number(`${yyyy}${mm.toString().padStart(2, '0')}${dd.toString().padStart(2, '0')}`);
  }

  async function canEmbed(videoId) {
	const url = `https://www.youtube.com/get_video_info?video_id=${videoId}&el=detailpage`;

	try {
		const res = await fetch(url);
		if (!res.ok) return false;

		const text = await res.text();
		const params = new URLSearchParams(text);

		const playerResponse = JSON.parse(params.get("player_response"));
		const status = playerResponse.playabilityStatus;

		return status.status === "OK";
	} catch (e) {
		console.warn("Embed check failed:", e);
		return false;
	}
	}

  async function tryEmbed() {
    if (tried.size === links.length) {
      p1.innerText = "No embeddable YouTube videos available today 😢";
      return;
    }

    const available = links.filter(link => !tried.has(link));
    const seed = getTodaySeed();
    const randIndex = Math.floor(seededRandom(seed + tried.size) * available.length);
    const randomLink = available[randIndex];
    tried.add(randomLink);

    const match = randomLink.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
    if (!match) {
      await tryEmbed();
      return;
    }

    const videoId = match[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    if (await canEmbed(videoId)) {
      const iframe = document.createElement('iframe');
      iframe.className = "itemPreviewImage";
      iframe.src = embedUrl;
      iframe.title = "Song preview";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      const oldIframe = itemYoutubePreview.querySelector('iframe');
      if (oldIframe) oldIframe.remove();

      itemYoutubePreview.appendChild(iframe);
    } else {
      console.warn(`Embedding disabled: ${randomLink}`);
      await tryEmbed();
    }
  }

  await tryEmbed();
}