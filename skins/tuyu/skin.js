const skins = [
    {
        id: '01',
        name: 'TUYU V2',
        date_start: '10-19-2022',
        date_end: 'Present',
        description: 'My tuyu skin I made for myself :p',
        url: 'https://www.mediafire.com/folder/i8dbmo4kji8s6/TUYU+Skins',
        video_url: 'https://www.youtube.com/embed/_xvM9tE7YoI',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/nnq7lb5g295a6a1/-_%2523_TUYU_%2523_-.osk/file',
                image_url: '../img/06.jpg',
                isGameplay: true,
            },
            {
                name: 'Song select',
                url: '',
                image_url: '../img/06/3 - T1JamCd.jpg',
                isGameplay: false,
            },
            {
                name: 'Mod select',
                url: '',
                image_url: '../img/06/2 - kQ6uUz7.jpg',
                isGameplay: false,
            },
            {
                name: 'Ranking panel',
                url: '',
                image_url: '../img/06/5 - JXg00Xs.jpg',
                isGameplay: false,
            },
			{
                name: 'Pass',
                url: '',
                image_url: '../img/06/1 - nbQGwiY.jpg',
                isGameplay: false,
            },
			{
                name: 'Fail',
                url: '',
                image_url: '../img/06/4 - oV1XqFg.jpg',
                isGameplay: false,
            },
			{
                name: 'Spinner',
                url: '',
                image_url: '../img/06/6 - CVFVzjI.jpg',
                isGameplay: false,
            },
			{
                name: 'Skip',
                url: '',
                image_url: '../img/06/7 - X5bITvk.jpg',
                isGameplay: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Idk V1',
                        desc: 'I forgot💀💀💀 V1 (I made the original like 3 years ago',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Idk V2',
                        desc: 'I forgot💀💀💀 V2 (I made the original like 3 years ago',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: 'Idk V3',
                        desc: 'I forgot💀💀💀 V3 (I made the original like 3 years ago',
                    },
                ]
            }
        ]
    },
    {
        id: '02',
        name: 'TUYU Instafade V2',
        date_start: '10-19-2022',
        date_end: 'Present',
        description: 'My tuyu skin I made for myself :p',
        url: 'https://www.mediafire.com/folder/i8dbmo4kji8s6/TUYU+Skins',
        video_url: 'https://www.youtube.com/embed/XozH7aJFAKw',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/4grb7htryywi2n6/-_%2523_TUYU_Instafade_%2523_-.osk/file',
                image_url: '../img/07.jpg',
                isGameplay: true,
            },
            {
                name: 'Song select',
                url: '',
                image_url: '../img/07/2 - qww0QNU.jpg',
                isGameplay: false,
            },
            {
                name: 'Mod select',
                url: '',
                image_url: '../img/06/1 - MiMPSx6.jpg',
                isGameplay: false,
            },
            {
                name: 'Ranking panel',
                url: '',
                image_url: '../img/06/3 - n6LHbP6.jpg',
                isGameplay: false,
            },
			{
                name: 'Pass',
                url: '',
                image_url: '../img/06/7 - UWzVVSa.jpg',
                isGameplay: false,
            },
			{
                name: 'Fail',
                url: '',
                image_url: '../img/06/8 - oV1XqFg.jpg',
                isGameplay: false,
            },
			{
                name: 'Spinner',
                url: '',
                image_url: '../img/06/4 - hG9WKIm.jpg',
                isGameplay: false,
            },
			{
                name: 'Skip',
                url: '',
                image_url: '../img/06/5 - RNo0LNr.jpg',
                isGameplay: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Idk V1',
                        desc: 'I forgot💀💀💀 V1 (I made the original like 3 years ago',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Idk V2',
                        desc: 'I forgot💀💀💀 V2 (I made the original like 3 years ago',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: 'Idk V3',
                        desc: 'I forgot💀💀💀 V3 (I made the original like 3 years ago',
                    },
                ]
            }
        ]
    }
]

const whFactor = 25
const width = 16 * whFactor;
const height = 9 * whFactor;

function showSkin(id) {

    let doc = document.getElementById('skin');
    let skin = skins.find(skin => skin.id === id);
    /*     let header = document.getElementsByTagName('header');
        header.item(0).innerHTML = `
    <h1> ${skin.name}</h1>
    <p >
    ${skin.date_start} --- ${skin.date_end}
    </p>
    ` */
    // main page set up
    {
        const h1 = document.createElement('h1');
        h1.innerText = skin.name;
        h1.className = 'pageTitle'
        const subtxt = document.createElement('p');
        subtxt.innerText = skin.date_start + ' --- ' + skin.date_end;
        if (skin.description) {
            subtxt.innerText += '\n' + skin.description;
        }
        subtxt.className = 'pageTitleSubText'
        const titleDiv = document.createElement('div');
        titleDiv.id = 'skinName';
        titleDiv.className = 'pageTitle'
        titleDiv.append(h1, subtxt);
        doc.append(titleDiv);

        const p1 = document.createElement("p");
        p1.id = 'mainDlContainer'
        const a1 = document.createElement("a");
        a1.rel = "noopener noreferrer";
        a1.className = "dl mainDownload";
        a1.href = skin.url;
        a1.innerText = "Download Link";
        p1.appendChild(a1);
        doc.appendChild(p1);
    }

    // create skin grid
    const skingrid = document.createElement('div');
    skingrid.className = "itemGrid";

    // create youtube preview
    {
        const itemYoutubePreview = document.createElement('section');
        itemYoutubePreview.className = "item";
        const p1 = document.createElement("p");
        p1.id = "youtubePreview";
        p1.className = "itemName";
        p1.innerText = "Youtube Preview";
        const iframe1 = document.createElement('iframe');
        iframe1.width = width;
        iframe1.height = height;
        iframe1.src = skin.video_url;
        iframe1.title = "Skin video preview";
        // iframe1.frameBorder = "0";
        iframe1.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe1.allowFullscreen = true;
        itemYoutubePreview.append(p1, iframe1);
        skingrid.append(itemYoutubePreview);
    }

    // create image list
    let previewIndex = 0;
    for (let i = 0; i < skin.images.length; i++) {
        const image = skin.images[i];
        const itemImage = document.createElement('section');
        itemImage.className = "item";
        const p1 = document.createElement('p');
        p1.id = image.name;
        p1.className = "itemName";
        p1.innerText = image.name;
        const img1 = document.createElement('img');
        img1.src = `${image.image_url}`;
        img1.alt = "Skin screenshot - " + image.name;
        img1.width = width;
        img1.height = height;
        itemImage.append(p1, img1);

        img1.addEventListener('click', e => {
            previewIndex = skin.images.indexOf(image);
            createPreview(image);
        });
        skingrid.appendChild(itemImage);
    };
    doc.appendChild(skingrid);

    let curprevimg = '';

    // add special preview image functionality
    const previewer = document.createElement('div');
    previewer.id = "previewDiv";

    const previewerButtonLink = document.createElement('a');
    previewerButtonLink.className = "dl previewButton";
    previewerButtonLink.id = "dlButton";
    previewerButtonLink.innerText = "download";
    previewerButtonLink.rel = "noopener noreferrer";
    previewerButtonLink.target = "_blank";

    const previewSwitchers = document.createElement('div');
    previewSwitchers.className = 'imageSwitcher';
    const previewButtonPrevious = document.createElement('a');
    const previewButtonNext = document.createElement('a');
    previewButtonNext.innerHTML = "Next &raquo;";
    previewButtonPrevious.innerHTML = "&laquo; Prev";
    previewButtonPrevious.className = "previewButton";
    previewButtonPrevious.id = "previewPrevious";
    previewButtonNext.className = "previewButton";
    previewButtonNext.id = "previewNext";
    previewSwitchers.append(previewButtonPrevious, previewButtonNext);

    const previewimg = document.createElement('img');
    previewimg.width = 960;
    previewimg.height = 540;
    previewer.append(previewerButtonLink, previewimg, previewSwitchers);
    previewer.style.display = 'none';

    const previewbg = document.createElement('div');
    previewbg.id = "previewOverlay";
    previewbg.style.display = 'none';

    const mainBody = document.getElementsByTagName('body')[0]
    mainBody.append(previewer, previewbg);

    previewbg.addEventListener('click', e => {
        previewer.style.display = 'none';
        previewbg.style.display = 'none';
    });
    previewButtonPrevious.addEventListener('click', e => {
        previewIndex--;
        if (previewIndex < 0) {
            previewIndex = skin.images.length - 1;
        }
        createPreview(skin.images[previewIndex]);
    });
    previewButtonNext.addEventListener('click', e => {
        previewIndex++;
        if (previewIndex >= skin.images.length) {
            previewIndex = 0;
        }
        createPreview(skin.images[previewIndex]);
    });
    previewimg.addEventListener('click', e => {
        window.open(curprevimg, '_blank')
    });
    function createPreview(image) {
        curprevimg = `../img/${image.image_url}`
        previewimg.src = curprevimg;

        if (image.isGameplay) {
            previewerButtonLink.href = image.url;
            previewerButtonLink.innerText = "Download \"" + image.name + '"';
        } else {
            previewerButtonLink.href = skin.url;
            previewerButtonLink.innerText = "Download Skin";
        }
        previewer.style.display = 'block';
        previewbg.style.display = 'block';
    }

    if (skin.sources) {
        const div = document.getElementById('sources');
        const header = document.createElement('h2');
        header.innerText = 'Sources';
        div.append(header);
        skin.sources.forEach(category => {
            const sourceCat = document.createElement('div');
            const catName = document.createElement('h3');
            catName.innerText = category.name;
            const table = document.createElement('table');
            table.className = 'sourcetable';
            category.items.forEach(item => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                name.innerHTML = item.name;
                const desc = document.createElement('td');
                desc.innerHTML = item.desc.replaceAll('\n', '<br>');
                row.append(name, desc);
                table.append(row);
            })
            sourceCat.append(catName, table);
            div.append(sourceCat);
        });
    }
}

function genList() {
    let grid = document.getElementsByClassName("itemGrid")[0];
    let sk = skins.slice().reverse();
    sk.forEach(skin => {
        if (skin.ignore) {

        } else {
            const section = document.createElement('section');
            section.className = 'item';
            const name = document.createElement('h2');
            name.className = 'itemName';
            name.innerText = skin.name
            const desc = document.createElement('p');
            desc.className = 'itemDescription'
            desc.innerText = skin.date_start + ' --- ' + skin.date_end;
            if (skin.desc) {
                desc.innerText += '<br>' + skin.desc;
            }
            const dl = document.createElement('a');
            dl.className = 'dl'
            dl.href = skin.url;
            dl.target = '_blank';
            dl.innerText = 'Download';
            const div = document.createElement('div');
            div.style.display = 'inline-block';
            const skPage = document.createElement('a');
            skPage.href =
                !isNaN(skin.id) ?
                    './' + skin.id + '.html' :
                    skin.url;
            skPage.target = '_self';
            const previewImg = document.createElement('img');
            previewImg.src = '../img/' + skin.images[0].image_url;
            previewImg.alt = skin.name + ': ' + skin.images[0].name;
            previewImg.width = width;
            previewImg.height = height;

            skPage.append(previewImg)
            div.append(skPage)

            section.append(name, desc, dl, div);
            grid.append(section);
        }
    })
}

function image(text) {
    return {
        fullsize: text.replace('.jpg', '_full.jpg'),
        preview: text.replace('.jpg', '_preview.jpg')
    }
}