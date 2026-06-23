// ================================================================
//  render.js — 렌더링 로직 (data.js의 데이터를 HTML로 변환)
//  일반적으로 이 파일은 수정하지 않아도 됩니다.
// ================================================================

const HIGHLIGHT_AUTHOR = 'An, S.';

// ── 유틸 ─────────────────────────────────────────────────────────
function hl(authors) {
  return authors.replace(
    new RegExp(HIGHLIGHT_AUTHOR.replace('.', '\\.'), 'g'),
    `<span class="pub-highlight">${HIGHLIGHT_AUTHOR}</span>`
  );
}
function el(tag, cls, html) {
  return `<${tag}${cls ? ` class="${cls}"` : ''}>${html}</${tag}>`;
}

// ── 네비게이션 ───────────────────────────────────────────────────
function renderNav() {
  const items = [
    { href: '#about',         label: 'About' },
    { href: '#experience',    label: 'Experience' },
    { href: '#education',     label: 'Education' },
    { href: '#publications',  label: 'Publications' },
    { href: '#awards',        label: 'Awards' },
    { href: '#presentations', label: 'Presentations' },
    { href: '#reviews',       label: 'Reviews' },
    { href: '#cv',            label: 'CV' },
  ];
  document.getElementById('nav-links').innerHTML = items
    .map(i => `<li><a class="nav-link" href="${i.href}">${i.label}</a></li>`)
    .join('');
}

// ── 히어로 ───────────────────────────────────────────────────────
function renderHero() {
  document.getElementById('hero-photo').src = PROFILE.photo;
  document.getElementById('hero-photo').alt = `${PROFILE.name} profile photo`;

  const links = PROFILE.links
    .map(l => `<a class="hero-link" href="${l.url}" target="_blank" rel="noopener">
      <i class="${l.icon}"></i> ${l.label}
    </a>`)
    .join('');

  document.getElementById('hero-info').innerHTML = `
    <h1 class="hero-name">${PROFILE.name}</h1>
    <p class="hero-title">
      ${PROFILE.title}<br>
      ${PROFILE.lab.name}<br>
      <span style="font-size:0.9em;opacity:0.85;">${PROFILE.institution}</span>
    </p>
    <p class="hero-email"><span class="hero-email-label">EMAIL:</span> ${PROFILE.email}</p>
    <div class="hero-links">${links}</div>
  `;
}

// ── About ────────────────────────────────────────────────────────
function renderAbout() {
  const tags = PROFILE.interests
    .map(i => `<li class="tag">${i}</li>`)
    .join('');

  document.getElementById('about').innerHTML = `
    <h2 class="section-title">About</h2>
    <p>${ABOUT}</p>
    <p class="interests-label">Research Interests:</p>
    <ul class="tag-list">${tags}</ul>
  `;
}

// ── 타임라인 (경력/학력 공통) ────────────────────────────────────
function renderTimeline(id, title, items) {
  const rows = items.map(item => `
    <li class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-subtitle">${item.subtitle.replace(/\n/g, '<br>')}</p>
      </div>
    </li>
  `).join('');

  document.getElementById(id).innerHTML = `
    <h2 class="section-title">${title}</h2>
    <ul class="timeline">${rows}</ul>
  `;
}

// ── 논문 ─────────────────────────────────────────────────────────
function pubBadge(type) {
  const map = { journal: 'Journal', conference: 'Conference', workshop: 'Workshop', domestic: 'Domestic' };
  return `<span class="pub-badge ${type}">${map[type]}</span>`;
}

function pubLinks(links) {
  if (!links.length) return '';
  const btns = links.map(l =>
    `<a class="btn-link" href="${l.url}" target="_blank" rel="noopener">
      <i class="${l.icon}"></i> ${l.label}
    </a>`
  ).join('');
  return `<div class="pub-links">${btns}</div>`;
}

function renderPublications() {
  const groups = [
    { label: 'Journal Articles',      types: ['journal'],     ids: ['J'] },
    { label: 'International Conferences', types: ['conference', 'workshop'], ids: ['C'] },
    { label: 'Domestic Conferences',  types: ['domestic'],    ids: ['D'] },
  ];

  // 필터 버튼 카운트
  const total   = PUBLICATIONS.length;
  const journals = PUBLICATIONS.filter(p => p.type === 'journal').length;
  const confs    = PUBLICATIONS.filter(p => p.type === 'conference').length;
  const workshops= PUBLICATIONS.filter(p => p.type === 'workshop').length;
  const domestic = PUBLICATIONS.filter(p => p.type === 'domestic').length;

  const filters = `
    <div class="pub-filters">
      <button class="pub-filter active" data-filter="all">All <span class="filter-count">${total}</span></button>
      <button class="pub-filter" data-filter="journal">Journal <span class="filter-count">${journals}</span></button>
      <button class="pub-filter" data-filter="conference">Conference <span class="filter-count">${confs}</span></button>
      <button class="pub-filter" data-filter="workshop">Workshop <span class="filter-count">${workshops}</span></button>
      <button class="pub-filter" data-filter="domestic">Domestic <span class="filter-count">${domestic}</span></button>
    </div>
  `;

  let cards = '';
  groups.forEach(g => {
    const items = PUBLICATIONS.filter(p => g.types.includes(p.type));
    if (!items.length) return;
    cards += `<h3 class="pub-group-title" data-group="${g.types[0]}">
      ${g.label} <span class="pub-group-count">(${items.length})</span>
    </h3>`;
    items.forEach(p => {
      const noteBadge = p.note
        ? `<span class="pub-badge" style="background:#fef3c7;color:#92400e;border:1px solid #fcd34d;margin-left:0.25rem;">${p.note}</span>`
        : '';
      const abbrBadge = p.abbr
        ? `<span class="pub-badge" style="background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;margin-left:0.25rem;font-family:var(--font-mono);">${p.abbr}</span>`
        : '';
      cards += `
        <div class="pub-card" data-type="${p.type}">
          <div class="pub-number">${p.id}</div>
          <div>
            ${pubBadge(p.type)}${abbrBadge}${noteBadge}
            <p class="pub-title">${p.title}</p>
            <p class="pub-authors">${hl(p.authors)}</p>
            <p class="pub-venue pub-meta">${p.venue} · ${p.year}</p>
            ${pubLinks(p.links)}
          </div>
        </div>
      `;
    });
  });

  const legend = `
    <p style="margin-top:1.5rem;font-size:0.78rem;color:var(--color-text-muted);font-family:var(--font-mono);">
      * Co-first author &nbsp;&nbsp; † Co-corresponding author
    </p>
  `;

  document.getElementById('publications').innerHTML = `
    <h2 class="section-title">Publications</h2>
    ${filters}
    ${cards}
    ${legend}
  `;

  // 필터 이벤트
  document.querySelectorAll('.pub-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pub-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.pub-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.type === filter) ? '' : 'none';
      });
      document.querySelectorAll('.pub-group-title').forEach(g => {
        g.style.display = (filter === 'all' || filter === g.dataset.group) ? '' : 'none';
      });
    });
  });
}

// ── 수상 ─────────────────────────────────────────────────────────
function renderAwards() {
  const rows = AWARDS.map(a => `
    <li class="award-item">
      <span class="award-year">${a.year}</span>
      <span class="award-desc">${a.desc}</span>
    </li>
  `).join('');

  document.getElementById('awards').innerHTML = `
    <h2 class="section-title">Awards &amp; Honors</h2>
    <ul class="award-list">${rows}</ul>
  `;
}

// ── 발표 ─────────────────────────────────────────────────────────
function renderPresentations() {
  const rows = PRESENTATIONS.map(p => `
    <li class="presentation-item">
      <span class="presentation-year">${p.year}</span>
      <div class="presentation-body">
        <p class="presentation-title">${p.title}</p>
        <p class="presentation-venue">${p.venue}</p>
      </div>
    </li>
  `).join('');

  document.getElementById('presentations').innerHTML = `
    <h2 class="section-title">Presentations</h2>
    <ul class="presentation-list">${rows}</ul>
  `;
}

// ── 리뷰 서비스 ──────────────────────────────────────────────────
function renderReviews() {
  const rows = REVIEWS.map(r => `<li class="review-item">${r}</li>`).join('');
  document.getElementById('reviews').innerHTML = `
    <h2 class="section-title">Review Services</h2>
    <ul class="review-list">${rows}</ul>
  `;
}

// ── CV 뷰어 ──────────────────────────────────────────────────────
function renderCV() {
  document.getElementById('cv').innerHTML = `
    <h2 class="section-title">CV</h2>
    <div class="cv-toolbar">
      <a class="btn-cv-download" href="assets/SionAn_CV.pdf" download>
        <i class="fas fa-download"></i> Download PDF
      </a>
    </div>
    <div class="cv-viewer">
      <object data="assets/SionAn_CV.pdf" type="application/pdf" width="100%" height="100%">
        <embed src="assets/SionAn_CV.pdf" type="application/pdf" width="100%" height="100%">
      </object>
    </div>
  `;
}

// ── 푸터 ─────────────────────────────────────────────────────────
function renderFooter() {
  document.getElementById('footer-text').textContent = `Last updated: ${PROFILE.lastUpdated}`;
}

// ── 스크롤 & 네비 활성화 ─────────────────────────────────────────
function initScroll() {
  const NAVBAR_H = 64;

  function easeInOutExpo(t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }

  function animateScroll(targetY) {
    const startY = window.scrollY;
    const dist   = targetY - startY;
    let startTime = null;
    let running = true;

    function step(ts) {
      if (!running) return;
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / 480, 1);
      window.scrollTo(0, startY + dist * easeInOutExpo(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      animateScroll(target.getBoundingClientRect().top + window.scrollY - NAVBAR_H - 16);
    });
  });

  // 활성 nav 링크
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));

  // 스크롤 시 navbar 그림자
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── 초기화 ───────────────────────────────────────────────────────
function init() {
  renderNav();
  renderHero();
  renderAbout();
  renderTimeline('experience', 'Research Experience', EXPERIENCE);
  renderTimeline('education', 'Education', EDUCATION);
  renderPublications();
  renderAwards();
  renderPresentations();
  renderReviews();
  renderCV();
  renderFooter();
  initScroll();
}

document.addEventListener('DOMContentLoaded', init);
