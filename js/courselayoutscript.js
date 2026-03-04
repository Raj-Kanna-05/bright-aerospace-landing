// Week accordion
function toggleWeek(el) {
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.week-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) el.classList.add('open');
}

// Simulated video play
let playing = false, pct = 0, timer;
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.innerHTML = playing
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="#222"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="#222"><polygon points="5,3 19,12 5,21"/></svg>`;

  if (playing) {
    timer = setInterval(() => {
      pct = Math.min(pct + 0.1, 100);
      progress.style.width = pct + '%';
      if (pct >= 100) { clearInterval(timer); playing = false; }
    }, 186);
  } else {
    clearInterval(timer);
  }
});
