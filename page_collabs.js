const SVG_SIZES = {
  svg1: { width: '50%', height: 'auto' },
  svg2: { width: '50%', height: 'auto' }
};

function createSVGElement(tag, attrs = {}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
  return el;
}

function createClickableRect(href, rectAttrs, titleText) {
  const a = createSVGElement('a', { href });
  const rect = createSVGElement('rect', { ...rectAttrs, fill: 'transparent' });
  const title = createSVGElement('title');
  title.textContent = titleText;
  
  rect.appendChild(title);
  a.appendChild(rect);
  return a;
}

//6USC IL OT9 Collab
function createFirstSVG() {
  const svg = createSVGElement('svg', {
    viewBox: '0 0 925 694',
    width: SVG_SIZES.svg1.width,
    preserveAspectRatio: 'xMidYMid meet'
  });
  
  if (SVG_SIZES.svg1.height !== 'auto') {
    svg.setAttribute('height', SVG_SIZES.svg1.height);
  }

  const image = createSVGElement('image', {
    href: 'https://i.ibb.co/mCTq5YjM/twice.png',
    x: '0',
    y: '0',
    width: '925',
    height: '694'
  });
  svg.appendChild(image);

  const areas = [
    { href: 'https://osu.ppy.sh/users/18160118', x: '6.56%', y: '6.67%', width: '17.81%', height: '22.92%', title: 'Senko Nyan' },
    { href: 'https://osu.ppy.sh/users/15683513', x: '0%', y: '26.25%', width: '36.36%', height: '73.75%', title: '_Rusty' },
    { href: 'https://osu.ppy.sh/users/18079646', x: '26.25%', y: '7.08%', width: '17.97%', height: '28.33%', title: 'Unshatter' },
    { href: 'https://osu.ppy.sh/users/36887371', x: '46.09%', y: '7.92%', width: '14.53%', height: '30.21%', title: 'Hundreko' },
    { href: 'https://osu.ppy.sh/users/19637339', x: '36.56%', y: '32.71%', width: '22.81%', height: '67.29%', title: 'Paraliyzed_evo' },
    { href: 'https://osu.ppy.sh/users/5400025', x: '60.78%', y: '7.71%', width: '16.09%', height: '33.13%', title: 'ShizuFlame' },
    { href: 'https://osu.ppy.sh/users/29898207', x: '59.53%', y: '38.13%', width: '34.84%', height: '61.88%', title: 'Duosion' },
    { href: 'https://osu.ppy.sh/users/16216834', x: '77.03%', y: '6.88%', width: '22.97%', height: '31.04%', title: 'suisei1' },
    { href: 'https://osu.ppy.sh/users/12520770', x: '82.66%', y: '29.17%', width: '17.34%', height: '70.83%', title: 'LAN3XU5' }
  ];

  areas.forEach(area => {
    const clickable = createClickableRect(
      area.href,
      { x: area.x, y: area.y, width: area.width, height: area.height },
      area.title
    );
    svg.appendChild(clickable);
  });

  return svg;
}

// 6USC IL Collab B Team
function createSecondSVG() {
  const svg = createSVGElement('svg', {
    viewBox: '0 0 9600 2560',
    width: SVG_SIZES.svg2.width,
    preserveAspectRatio: 'xMidYMid meet'
  });
  
  if (SVG_SIZES.svg2.height !== 'auto') {
    svg.setAttribute('height', SVG_SIZES.svg2.height);
  }

  const image = createSVGElement('image', {
    href: 'https://i.ibb.co/n8nVPzyW/osu-collab-b-team.png',
    x: '0',
    y: '0',
    width: '9600',
    height: '2560'
  });
  svg.appendChild(image);

  const areas = [
    { href: 'https://osu.ppy.sh/users/19637339', x: '0%', y: '0%', width: '19.84%', height: '100%', title: 'Paraliyzed_evo' },
    { href: 'https://osu.ppy.sh/users/18079646', x: '20%', y: '0%', width: '19.69%', height: '100%', title: 'Unshatter' },
    { href: 'https://osu.ppy.sh/users/29898207', x: '39.69%', y: '0%', width: '20.16%', height: '100%', title: 'Duosion' },
    { href: 'https://osu.ppy.sh/users/18160118', x: '60%', y: '0%', width: '20%', height: '100%', title: 'Senko Nyan' },
    { href: 'https://osu.ppy.sh/users/16216834', x: '80%', y: '0%', width: '20%', height: '100%', title: 'suisei1' }
  ];

  areas.forEach(area => {
    const clickable = createClickableRect(
      area.href,
      { x: area.x, y: area.y, width: area.width, height: area.height },
      area.title
    );
    svg.appendChild(clickable);
  });

  return svg;
}

function generate(main = document.getElementById('content')) {
  const wrapper1 = document.createElement('div');
  wrapper1.style.display = 'flex';
  wrapper1.style.justifyContent = 'center';
  wrapper1.style.marginBlock = '10px';

  const wrapper2 = document.createElement('div');
  wrapper2.style.display = 'flex';
  wrapper2.style.flexDirection = 'column';
  wrapper2.style.alignItems = 'center';
  wrapper2.style.marginBottom = '10px';

  const h2 = document.createElement('h2');
  h2.textContent = '6USC IL B TEAM!!!';
  h2.style.color = 'var(--clrs-magenta)';
  h2.style.marginBottom = '10px';

  const svg1 = createFirstSVG();
  const svg2 = createSecondSVG();

  wrapper1.appendChild(svg1);
  wrapper2.appendChild(h2);
  wrapper2.appendChild(svg2);

  main.appendChild(wrapper1);
  main.appendChild(wrapper2);
}