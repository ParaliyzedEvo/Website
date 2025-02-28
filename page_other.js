const peripherals = {
    Tablet: [
        {
            name: 'Wacom One CTL-472',
            url: 'https://www.amazon.com/Wacom-CTL-472-N-Small-Creative-Tablet/dp/B07N525974',
            other: '',
        },
		{
            name: 'Tablet Cover - ',
            url: '',
            other: '',
        },
		{
            name: 'Image',
            url: 'img/CTL-472 Cover.png',
            other: 'I used',
        },
		{
            name: 'Store',
            url: 'https://foxbox.io/collections/tablet-covers',
            other: 'where I bought the cover',
        },
		
    ],
    Mouse: [
        {
            name: 'Logitech G502 X GAMING MOUSE',
            url: 'https://www.amazon.com/Logitech-Lightspeed-Wireless-Gaming-Mouse/dp/B092CRH1RX?th=1',
            other: '',
        },
    ],
    Keyboard: [
		{
            name: 'HyperX 60 Alloy Origins',
            url: 'https://hyperx.com/products/hyperx-alloy-origins-60-mechanical-gaming-keyboard?variant=42344887353501',
            other: ' | (No longer using, made a custom keyboard)',
        },
		{
            name: 'Hyper X Red Switches',
            url: '',
            other: '',
        },
		{
            name: 'Wooting UwU',
            url: 'https://wooting.io/configurator/wooting-uwu?model=RGB+Stealth&quantity=1&addon=45493564014876',
            other: ' | (Only using for osu!)',
        },
		{
            name: '',
            url: '',
            other: '',
        },
        {
            name: 'Custom keyboard - ',
            url: '',
            other: '',
        },
        {
            name: 'EPOMAKER TH66 Pro',
            url: 'https://epomaker.com/products/epomaker-th66-kit',
            other: ' | Hotswappable 65%',
        },
        {
            name: 'HaluHalo V2 Switches',
            url: 'https://dangkeebs.com/products/haluhalo-v2',
            other: ' | 63.5g',
        },
        {
            name: 'Domikey SA ABS Doubleshot Keycaps',
            url: 'https://www.amazon.com/Domikey-doubleshot-keycap-Black-Keyboard/dp/B08CJQP9CW?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A32H3UGH5DPP70&th=1',
            other: ' | Black on Black',
        },
    ],
    Audio: [
        {
            name: 'ONIKUMA K10',
            url: 'https://www.walmart.com/ip/ONIKUMA-K10-Gaming-Headset-Stereo-Bass-Surround-RGB-Noise-Cancelling-Over-Ear-Headphones-Mic-for-PS4-Xbox-One-PC-Nintendo-Switch-Tablet-Smartphone/220300193',
            other: ' | (No longer using thank god)',
        },
        {
            name: 'MASSDROP X SENNHEISER HD 6XX',
            url: 'https://drop.com/buy/massdrop-sennheiser-hd6xx',
            other: '',
        },
		{
            name: 'FIFINE K688',
            url: 'https://www.amazon.com/FIFINE-Microphone-Voice-Over-Windscreen-Amplitank-K688/dp/B0B8SNVK5K',
            other: '',
        },
        {
            name: 'Scarlett Solo [3rd Gen]',
            url: 'https://us.focusrite.com/products/scarlett-solo-3rd-gen',
            other: '',
        },
    ],
    Monitor: [
        {
            name: 'ASUS TUF Gaming VG249QM1A',
            url: 'https://www.viewsonic.com/au/products/lcd/VX2458-P-MHD.php',
            other: ' | Main, 270hz, IPS Panel, 23.8"/60.452cm',
        },
        {
            name: 'LG 22MN430M-23ML44B',
            url: 'https://www.lg.com/us/monitors/lg-24ml44b-b-led-monitor',
            other: ' | Secondary, 144Hz, TN Panel, 27"/68.58cm',
        },
    ],
    Webcam: [
        {
            name: 'EMEET C960',
            url: 'https://emeet.com/products/webcam-c960',
            other: ' | Using as facecam',
        },
		{
            name: 'GoPro HERO8',
            url: 'https://www.amazon.com/GoPro-HERO8-Black-Waterproof-Stabilization/dp/B08C7FBW4N?th=1',
            other: ' | Using as handcam',
        },
    ],
}

const pcparts = {
    CPU: [
        {
            name: 'AMD Ryzen 7 7700X',
            url: 'https://www.amazon.com/AMD-7700X-16-Thread-Unlocked-Processor/dp/B0BBHHT8LY',
            other: '',
        },
    ],
    GPU: [
        {
            name: 'ASUS ROG STRIX 1080 OC',
            url: 'https://www.amazon.com/ASUS-GeForce-Strix-Graphic-STRIX-GTX1080-O8G-GAMING/dp/B01GRRRRLO?th=1',
            other: '',
        },
    ],
    Motherboard: [
        {
            name: 'Gigabyte B650 GAMING X AX V2',
            url: 'https://www.amazon.com/GIGABYTE-B650-GAMING-AX-V2/dp/B0CTTY491F',
            other: '',
        },
    ],
    RAM: [
        {
            name: 'Corsair Vengeance RGB 32 GB (2x16 GB)',
            url: 'https://www.amazon.com/CORSAIR-VENGEANCE-6000MHz-Compatible-Computer/dp/B0CJ8ZJPF3',
            other: '',
        },
    ],
    Storage: [
        {
            name: 'WD Blue',
            url: 'https://www.amazon.com/WD-Blue-Internal-Solid-State/dp/B0792LL46V',
            other: ' | (1TB)',
        },
        {
            name: 'WD Blue',
            url: 'https://www.amazon.com/Blue-NAND-500GB-SSD-WDS500G2B0A/dp/B073SBZ8YH',
            other: ' | (500GB)',
        },
        {
            name: 'INLAND Professional',
            url: 'https://www.crucial.com/products/ssd/crucial-p5-ssd',
            other: ' | (256GB)',
        },
		{
            name: 'WD BLACK SN770',
            url: 'https://www.amazon.com/WD_BLACK-SN770-Internal-Gaming-Solid/dp/B09QV5KJHV?th=1',
            other: ' | (2TB)',
        },
    ],
    PSU: [
        {
            name: 'MPG A650GF',
            url: 'https://www.amazon.com/MSI-MPG-Power-Supply-PSU/dp/B08PDV45F8',
            other: '',
        },
    ],
    Cooler: [
        {
            name: 'Lian Li Galahad II Trinity',
            url: 'https://www.amazon.com/Lian-Li-GA2T36INB-Galahad-Trinity/dp/B0CDF2HZH4?th=1',
            other: '',
        },
    ],
    Case: [
        {		
            name: 'Phanteks XT PRO ULTRA',
            url: 'https://www.amazon.com/Phanteks-Mid-Tower-Included-Performance-Tempered/dp/B0CT5V2XJK',
            other: '',
        },
    ],
}

const software = {
    Recording: [
        {
            name: 'OBS Studio',
            url: 'https://obsproject.com',
            other: '',
        },
        {
            name: 'Danser',
            url: 'https://github.com/Wieku/danser-go/',
            other: '',
        },
        {
            name: 'Xbox Game Bar',
            url: '',
		other: ' | (No longer using)',
        },
    ],
    'Video Editing': [
        {
            name: 'FFmpeg',
            url: 'https://github.com/BtbN/FFmpeg-Builds/releases',
            other: '',
        },
        {
            name: 'DaVinci Resolve 19',
            url: 'https://www.blackmagicdesign.com/products/davinciresolve',
            other: ' | Main software for hardcore editing/doing something cinematic',
        },
		{
            name: 'Adobe Premiere Pro',
            url: 'https://www.adobe.com/products/premiere.html',
            other: ' | Used when I\'m doing some quick edits',
        },
		{
            name: 'Adobe After Effects',
            url: 'https://www.adobe.com/products/aftereffects.html',
            other: ' | Used for when I need a lot of special effects',
        },
    ],
    'Drawing/Photo Editing': [
		{
            name: 'Photoshop',
            url: 'https://www.adobe.com/products/photoshop.html',
            other: ' | Main way for me to edit photos',
        },
        {
            name: 'GIMP',
            url: 'https://www.gimp.org/',
            other: ' | Only used when I\'m mad at Adobe',
        },
        {
            name: 'Microsoft Paint',
            url: '',
            other: ' | Used for funny ahhh drawings',
        },
    ],
    'Tablet Drivers': [
        {
            name: 'OTD',
            url: 'https://github.com/OpenTabletDriver/OpenTabletDriver',
            other: 'Open Tablet Driver',
        },
		{
            name: 'Wacom Drivers',
            url: 'https://cdn.wacom.com/u/productsupport/drivers/win/professional/WacomTablet_6.4.6-1.exe',
            other: ' | (No longer using)',
        },
    ],
    'PP Counters': [
        {
            name: 'Danser built-in pp counter',
            url: '',
            other: '',
        },
        {
            name: 'Tosu',
            url: 'https://tosu.app/',
            other: '',
        },
        {
            name: 'StreamCompanion',
            url: 'https://github.com/Piotrekol/StreamCompanion',
            other: ' | (No longer using)',
        },
		{
            name: 'gosumemory',
            url: 'https://github.com/l3lackShark/gosumemory',
            other: ' | (No longer using)',
        },
    ],
    'IDE': [
		{
            name: 'Visual Studio',
            url: 'https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Professional&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false',
            other: '',
        },
        {
            name: 'Visual Studio Code',
            url: 'https://code.visualstudio.com/',
            other: '',
        },
        {
            name: 'Notepad++',
            url: 'https://notepad-plus-plus.org/downloads/',
            other: '',
        },
		{
            name: 'Windows Notepad',
            url: '',
            other: ' | (No longer using)',
        },
    ],
    Other: [
        {
            name: 'Streamelements',
            url: 'https://streamelements.com/',
            other: '',
        },
		{
            name: 'KeyOverlay',
            url: 'https://github.com/Blondazz/KeyOverlay',
            other: ' | Main Key Counter',
        },
        {
            name: 'JKPS',
            url: 'https://osu.ppy.sh/community/forums/topics/1356687',
            other: ' | Secondary Key Counter',
        },
    ],
}
const links = [
    {
        name: 'The 5 Stack GC Archive',
        url: 'misc/gc',
        other: '',
    },
	{
        name: 'My Youtube Playlist :)',
        url: 'misc/playlist',
        other: ' | For me and for me only lol',
    },
    {
        name: 'Dream PC',
        url: 'https://pcpartpicker.com/list/LjBBv4',
        other: ' | PC I\'m wanting to upgrade too but I\'m broke (pls donate money by using the tip link at the homepage)',
    },
	{
        name: 'Minecraft 1.8.8 Online',
        url: '/mc',
        other: '',
    },
    {
        name: 'Slope',
        url: '/slope',
        other: '',
    },
	{
        name: 'SAO Easter Egg Website',
        url: 'sao',
        other: ' | Archive of the SAO 52.68.96.58 easter egg website',
    },
	{
        name: 'Lethal Company Modpack',
        url: 'https://thunderstore.io/c/lethal-company/p/Paraliyzed/Pick_Up_the_Sheriff_for_Me_Baby/',
        other: ' | (Deprecated)',
    },
	{
        name: 'Minecraft Texture Pack (Java) ',
        url: 'https://drive.google.com/file/d/1ZzVVVehxXOoEeZt9EZrQiTaiNMYB56Hr/view?usp=sharing',
        other: ' | (Updated every once in a blue moon)',
    }
];
const playstyle = {
    things: {
        Mouse: `Palm grip, 
1000 DPI
`,
        Tablet: `Pen grip, hover (switched 11-26-2022).
72x54mm (old)
70x52mm (also old)
67x49mm
`,
        Keyboard: `Using keys A and D on Wooting UwU.
Index+ring tapping.
Single tapping plus alt tapping with bursts/streams.
`,
    },
    image: [
        'img/stuff/tablet.png',
        'img/stuff/tablet2.png',
		'img/stuff/tablet3.png',
		'img/stuff/tablet4.png',
    ]
}

function generate() {
    const periDiv = document.getElementById('periDiv');
    for (const [key, value] of Object.entries(peripherals)) {
        itemsLink(key, periDiv, value)
    }
    const pcDiv = document.getElementById('pcDiv');
    for (const [key, value] of Object.entries(pcparts)) {
        itemsLink(key, pcDiv, value)
    }
    const sofDiv = document.getElementById('sofDiv');
    for (const [key, value] of Object.entries(software)) {
        itemsLink(key, sofDiv, value)
    }
    const linkDiv = document.getElementById('linkDiv');
    if (linkDiv) {
        itemsLink('', linkDiv, links, false);
    }
    const playDiv = document.getElementById('playDiv');
    for (const [key, value] of Object.entries(playstyle.things)) {
        const title = document.createElement('h3');
        title.innerHTML = key;
        playDiv.append(title);
        const x = document.createElement('li');
        x.innerHTML = value;
        playDiv.append(x);
    }
    (() => {
        const title = document.createElement('h3');
        title.innerHTML = 'Tablet Settings';
        playDiv.append(title);
    })();
    for (const image of playstyle.image) {
        const imeji = document.createElement('img');
        imeji.src = image;
        playDiv.append(imeji);
    }
    {
		const spacer = document.createElement('div'); 
		spacer.style.height = "calc(152px + 69px)";
		spacer.style.width = '100%';
		spacer.style.display = 'block';
		playDiv.appendChild(spacer);
	}
}

/**
 * @param {string} name
 * @param {HTMLDivElement} elem 
 * @param {{
 * name: string,
 * url: string,
 * other: string,
 * }[]} items
 */
function itemsLink(name, elem, items) {
    const title = document.createElement('h3');
    title.innerHTML = name;
    elem.append(title);

    for (const item of items) {
        const x = document.createElement('li')
        if (item.url.length > 2) {
            const url = document.createElement('a');
            url.innerHTML = item.name;
            url.href = item.url;
            url.classList.add("itemLink")
            url.style.fontSize = '16px'
            x.append(url);
        } else {
            x.innerHTML = item.name;
        }
        x.innerHTML += item.other.length > 1 ? ' ' + item.other : '';
        x.style.fontSize = '16px'
        elem.append(x);
    }
}

onavitems = [
    {
        name: 'Peripherals',
        url: '#peripherals',
    },
    {
        name: 'PC Parts',
        url: '#pc',
    },
    {
        name: 'Setup',
        url: '#setup',
    },
    {
        name: 'Software',
        url: '#software',
    },
    {
        name: 'Playstyle',
        url: '#playstyle',
    },
]
