const bsrc = "/img/used/"
const used = {
    cs: {
        name: 'C#',
        src: bsrc + "cs.svg"
    },
    njs: {
        name: 'NodeJS',
        src: bsrc + "nodejs.svg"
    },
    py: {
        name: 'Python',
        src: bsrc + "python.svg"
    },
    ts: {
        name: 'Typescript',
        src: bsrc + "typescript.svg"
    },
}

const portfolioItems = [
    {
        name: 'Flowabot (fork)',
        img: 'https://camo.githubusercontent.com/379986162bc5e11f493fdedf42a999c9171dcee108a5aa1d1abe35e7375d9be2/68747470733a2f2f692e696d6775722e636f6d2f576f4a344476652e706e67',
        url: 'https://github.com/ParaliyzedEvo/flowabot',
        used: [used.ts, used.njs],
        pixelArt: false,
    },
    {
        name: 'Website',
        img: 'img/portfolio/website.png',
        url: 'https://github.com/ParaliyzedEvo/website',
        used: [used.ts],
        pixelArt: false,
    },
    {
        name: 'Crush',
        img: 'https://avatars.githubusercontent.com/u/107338855?v=4',
        url: 'https://github.com/ParaliyzedEvo/crush',
        used: [used.py],
        pixelArt: false,
    },
    {
        name: 'Simulation',
        img: 'https://avatars.githubusercontent.com/u/107338855?v=4',
        url: 'https://github.com/ParaliyzedEvo/simulation',
        used: [used.py],
        pixelArt: false,
    },
    {
        name: 'Full Stack AI Image Generator',
        img: 'https://avatars.githubusercontent.com/u/107338855?v=4',
        url: 'https://github.com/ParaliyzedEvo/Full-Stack-AI-Image-Generator',
        used: [used.py],
        pixelArt: false,
        longName: true,
    }
]

function generatePortfolio() {
    const ctn = document.getElementById('content');
    {
        const h1 = document.createElement('h1');
        h1.innerText = 'Portfolio';
        h1.classList.add('pageTitle');
        const p = document.createElement('p');
        p.innerText = 'A list of projects that I have worked on/am currently working on';
        p.classList.add('pageTitleSubText');
        ctn.append(h1, p);
    }

    const itemContainer = document.createElement('section')
    itemContainer.id = 'items';
    portfolioItems.forEach(item => {
        const elem = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h2');

        elem.className = 'portfolioItem'
        img.src = item.img;
        if (item.pixelArt) {
            img.classList.add('pixelArt')
        }
        title.innerText = item.name;
        title.className = 'portfolioName';
        if (item.longName) {
            title.classList.add('portfolioNameLong')
        }
        const content = document.createElement('div');
        content.className = 'portfolioContent';

        content.append(img)
        if (item.used && item.used.length > 0) {
            const temp = document.createElement('div');
            item.used.forEach((thing) => {
                const div = document.createElement("div");
                div.className = "tooltipContainer"
                const img = document.createElement("img");
                img.src = thing.src
                const tooltip = document.createElement("span");
                tooltip.className = "tooltipText"
                tooltip.innerHTML = thing.name;
                div.append(img, tooltip)
                temp.append(div)
            })
            temp.className = "usedStuff"
            content.append(temp);
        }
        elem.append(title, content)
        // elem.addEventListener('click', e => {
        //     previewIndex = portfolioItems.indexOf(item);
        //     createPreview(item)
        // })
        const a = document.createElement('a');
        a.href = item.url;
        a.append(elem);
        itemContainer.append(a);
    });
    ctn.append(itemContainer);

    const spacer = document.createElement('div'); 
		spacer.style.height = "calc(152px + 69px)";
		spacer.style.width = '100%';
		spacer.style.display = 'block';
		ctn.appendChild(spacer);
}