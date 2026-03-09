/* ── STARFIELD ── */
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function initStars() {
  stars = [];
  for (let i = 0; i < 160; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.4 + 0.1,
      dir: Math.random() > 0.5 ? 1 : -1
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.alpha += s.speed * 0.01 * s.dir;
    if (s.alpha >= 1 || s.alpha <= 0.1) s.dir *= -1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas(); initStars(); drawStars();
window.addEventListener('resize', () => { resizeCanvas(); initStars(); });

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => revealObserver.observe(r));

/* ── STEP CONNECTORS ANIMATE ── */
const connectors = document.querySelectorAll('.step-connector');
const connectorObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('animated'), i * 300 + 200);
  });
}, { threshold: 0.5 });
connectors.forEach(c => connectorObserver.observe(c));

/* ── STEP CLICK EXPAND ── */
function showStep(idx) {
  document.querySelectorAll('.step-box').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.step-desc').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

/* ── STAT COUNTER ANIMATION ── */
const statCards = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.textContent.includes('%') ? '%' : '+';
      let count = 0;
      const step = Math.ceil(target / 50);
      const interval = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count + suffix;
        if (count >= target) clearInterval(interval);
      }, 30);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statCards.forEach(s => statObserver.observe(s));

/* ── BACK TO TOP ── */
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.classList.toggle('visible', window.scrollY > 300);
});
