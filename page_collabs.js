const SVG_SIZES = {
  tripleS: { width: '50%', height: 'auto' },
  aTeam:   { width: '50%', height: 'auto' },
  twice:   { width: '50%', height: 'auto' },
  bTeam:   { width: '50%', height: 'auto' }
};

const IMAGES = {
  tripleS: { href: 'https://i.ibb.co/wNKd5swr/triple-S.png',          w: 4893, h: 3267 },
  aTeam:   { href: 'https://i.ibb.co/sdRRcTJB/osu-collab-b-team.png',  w: 11520, h: 2560 },
  twice:   { href: 'https://i.ibb.co/WNkZL9zv/twice.png',              w: 925,  h: 694 },
  bTeam:   { href: 'https://i.ibb.co/twg6JmT0/osu-collab-b-team.png',  w: 9600, h: 2560 }
};

const osu = id => `https://osu.ppy.sh/users/${id}`;
const kp = slug => `https://kprofiles.com/${slug}/`;

// Rows: [x%, y%, width%, height%, href, title]
const AREAS = {
  tripleS: [
    [1.25, 18.27, 13.59, 24.12, osu(12520770), 'LAN3XU5'],
    [15.78, 20.37, 12.66, 21.31, osu(38290122), 'beasavage551'],
    [29.53, 16.86, 11.88, 21.31, osu(24911136), 'serioslydude'],
    [43.28, 16.16, 12.19, 21.08, osu(19637339), 'Paraliyzed_evo'],
    [55.94, 16.16, 14.69, 24.36, osu(18160118), 'Senko Nyan'],
    [70.78, 18.27, 12.81, 22.25, osu(16216834), 'BambooHattedKim'],
    [84.84, 15.93, 12.5, 22.01, osu(14798021), 'stoneperson56'],
    [1.41, 48.71, 13.59, 22.95, osu(14918628), 'rraire'],
    [17.34, 50.82, 12.5, 21.55, osu(29898207), 'Duosion'],
    [31.72, 45.43, 11.72, 21.08, osu(33306913), 'ShinySpheal'],
    [45.94, 42.39, 12.5, 21.78, osu(18079646), 'Unshatter'],
    [60.47, 45.67, 11.41, 20.61, osu(38371673), 'BakedB'],
    [75.47, 47.07, 14.69, 24.36, osu(15231305), 'waffcore'],
    [5.47, 74.71, 12.5, 22.25, osu(20861744), 'Shr7mp'],
    [26.72, 70.49, 14.84, 24.59, osu(19459179), 'Bloqqy88'],
    [48.12, 70.96, 12.66, 22.01, osu(19122614), 'TFKaiyo'],
    [65, 71.43, 12.34, 22.01, osu(15683513), '_Rusty'],
    [79.84, 74.47, 12.19, 21.08, osu(36084892), 'AutumnSnow'],
    [2.03, 17.33, 8.44, 4.45, kp('yoon-seoyeon-triples-profile-facts'), 'Yoon Seoyeon'],
    [19.06, 17.1, 7.03, 3.51, kp('jeong-hyerin-triples-profile-facts'), 'Jeong Hyerin'],
    [40.63, 11.94, 9.06, 5.39, kp('kim-chaeyeon-triples-profile-facts'), 'Kim Chaeyeon'],
    [30.63, 13.35, 6.41, 3.75, kp('lee-jiwoo-triples-profile-facts'), 'Lee Jiwoo'],
    [62.34, 13.11, 8.28, 3.75, kp('kim-yoo-yeon-my-teenage-girl-profile-and-facts'), 'Kim YooYeon'],
    [77.97, 14.75, 7.34, 4.92, kp('kim-soomin-triples-profile-facts'), 'Kim Soomin'],
    [87.03, 12.18, 9.69, 4.45, kp('kim-nakyoung-triples-profile-facts'), 'Kim Nakyoung'],
    [1.25, 45.9, 6.25, 3.04, kp('gong-yubin-triples-profile-facts'), 'Gong Yubin'],
    [20, 47.78, 5.63, 3.51, kp('kaede-triples-profile-and-facts'), 'Kaede'],
    [27.66, 42.62, 7.66, 4.68, kp('seo-dahyun-triples-profile-and-facts'), 'Seo Dahyun'],
    [47.5, 39.58, 7.03, 3.98, kp('kotone-triples-profile-and-facts'), 'Kotone'],
    [63.28, 41.45, 6.56, 3.98, kp('kwak-yeonji-triples-profile-and-facts'), 'Kwak Yeonji'],
    [83.75, 44.5, 4.53, 3.51, kp('nien-triples-profile-facts'), 'Nien'],
    [2.66, 72.13, 7.66, 4.45, kp('park-sohyun-profile-and-facts'), 'Park Sohyun'],
    [34.22, 68.15, 5.47, 3.51, kp('zhou-xin-yu-profile-facts'), 'Xinyu'],
    [46.72, 68.38, 5.16, 3.98, kp('mayu-triples-profile-facts'), 'Mayu'],
    [62.19, 70.49, 5.31, 4.68, kp('lynn-triples-profile'), 'Lynn'],
    [81.41, 71.43, 7.5, 3.28, kp('joo-bin-triples-profile-and-facts'), 'Joo Bin']
  ],
  aTeam: [
    [0, 0, 19.25, 100, osu(33306913), 'ShinySpheal'],
    [15.18, 0, 20.97, 100, osu(19637339), 'Paraliyzed_evo'],
    [31.77, 0, 20.81, 100, osu(38371673), 'BakedB'],
    [48.36, 0, 20.97, 100, osu(14798021), 'stoneperson56'],
    [64.95, 0, 20.5, 100, osu(24911136), 'serioslydude'],
    [81.69, 0, 18.31, 100, osu(15683513), '_Rusty']
  ],
  twice: [
    [6.56, 6.67, 17.81, 22.92, osu(18160118), 'Senko Nyan'],
    [0, 26.25, 36.36, 73.75, osu(15683513) + '/osu', '_Rusty'],
    [26.25, 7.08, 17.97, 28.33, osu(18079646), 'Unshatter'],
    [46.09, 7.92, 14.53, 30.21, osu(36887371), 'Hundreko'],
    [36.56, 32.71, 22.81, 67.29, osu(19637339), 'Paraliyzed_evo'],
    [60.78, 7.71, 16.09, 33.13, osu(5400025), 'ShizuFlame'],
    [59.53, 38.13, 34.84, 61.88, osu(29898207), 'Duosion'],
    [77.03, 6.88, 22.97, 31.04, osu(16216834), 'suisei1'],
    [82.66, 29.17, 17.34, 70.83, osu(12520770), 'LAN3XU5']
  ],
  bTeam: [
    [0, 0, 19.84, 100, osu(19637339), 'Paraliyzed_evo'],
    [20, 0, 19.69, 100, osu(18079646), 'Unshatter'],
    [39.69, 0, 20.16, 100, osu(29898207), 'Duosion'],
    [60, 0, 20, 100, osu(18160118), 'Senko Nyan'],
    [80, 0, 20, 100, osu(16216834), 'suisei1']
  ]
};

function createSVGElement(tag, attrs = {}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
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

function createImageMapSVG(key) {
  const { href, w, h } = IMAGES[key];
  const size = SVG_SIZES[key];

    const svg = createSVGElement('svg', {
      class: 'collabSvg',
      viewBox: `0 0 ${w} ${h}`,
      width: size.width,
      preserveAspectRatio: 'xMidYMid meet'
    });

  if (size.height !== 'auto') {
    svg.setAttribute('height', size.height);
  }

  svg.appendChild(createSVGElement('image', { href, x: '0', y: '0', width: w, height: h }));

  AREAS[key].forEach(([x, y, width, height, link, title]) => {
    svg.appendChild(createClickableRect(
      link,
      { x: `${x}%`, y: `${y}%`, width: `${width}%`, height: `${height}%` },
      title
    ));
  });

  return svg;
}

function createSection(key, headingText) {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.alignItems = 'center';
  wrapper.style.marginBlock = '10px';

  if (headingText) {
    const h2 = document.createElement('h2');
    h2.textContent = headingText;
    h2.style.color = 'var(--clrs-magenta)';
    h2.style.marginBottom = '10px';
    wrapper.appendChild(h2);
  }

  wrapper.appendChild(createImageMapSVG(key));
  return wrapper;
}

function createSpoilerbox(title, children = [], startOpen = false) {
  const DURATION = '300ms';
  const EASE = 'ease-in-out';

  const box = document.createElement('div');
  box.style.margin = '20px auto';
  box.style.textAlign = 'center';

  // Header (just text, no background)
  const header = document.createElement('button');
  header.type = 'button';
  header.style.display = 'inline-flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'center';
  header.style.gap = '8px';
  header.style.padding = '4px 8px';
  header.style.border = '0';
  header.style.background = 'none';
  header.style.cursor = 'pointer';
  header.style.fontFamily = 'inherit';
  header.style.fontSize = '1em'; // same as the default h2 size
  header.style.fontWeight = 'bold';
  header.style.color = 'var(--clrs-magenta)';
  header.style.opacity = '0.85';
  header.style.transition = `opacity ${DURATION} ${EASE}`;
  header.addEventListener('mouseenter', () => header.style.opacity = '1');
  header.addEventListener('mouseleave', () => header.style.opacity = '0.85');

  // Arrow (rotates when open)
  const arrow = createSVGElement('svg', { viewBox: '0 0 24 24', width: '14', height: '14' });
  arrow.appendChild(createSVGElement('path', {
    d: 'M8 4l8 8-8 8',
    fill: 'none',
    stroke: 'var(--clrs-magenta)',
    'stroke-width': '3',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }));
  arrow.style.flexShrink = '0';
  arrow.style.transition = `transform ${DURATION} ${EASE}`;

  const label = document.createElement('span');
  label.textContent = title;
  label.style.color = 'var(--clrs-magenta)';

  header.appendChild(arrow);
  header.appendChild(label);
  box.appendChild(header);

  // Body (animated via grid rows 0fr -> 1fr, no background)
  const body = document.createElement('div');
  body.style.display = 'grid';
  body.style.gridTemplateRows = '0fr';
  body.style.transition = `grid-template-rows ${DURATION} ${EASE}`;

  const inner = document.createElement('div');
  inner.style.overflow = 'hidden';
  inner.style.minHeight = '0';

  children.forEach(child => inner.appendChild(child));
  body.appendChild(inner);
  box.appendChild(body);

  let open = false;
  const setOpen = value => {
    open = value;
    body.style.gridTemplateRows = open ? '1fr' : '0fr';
    arrow.style.transform = open ? 'rotate(90deg)' : 'rotate(0deg)';
  };
  header.addEventListener('click', () => setOpen(!open));
  setOpen(startOpen);

  return box;
}

function generate(main = document.getElementById('content')) {
  // Mobile override: full width under 700px (matches your CSS breakpoint)
  const style = document.createElement('style');
  style.textContent = `
    @media only screen and (max-width: 700px) {
      .collabSvg { width: 100% !important; }
    }
  `;
  document.head.appendChild(style);

  // Current collab
  main.appendChild(createSection('tripleS'));
  main.appendChild(createSection('aTeam', '6USC ILLINOIS A TEAM!!!'));

  // [box=Past Collabs]
  main.appendChild(createSpoilerbox('Past Collabs', [
    createSection('twice'),
    createSection('bTeam', '6USC ILLINOIS B TEAM!!!')
  ]));
}