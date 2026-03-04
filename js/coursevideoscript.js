/* ── VIDEO PLAY/PAUSE ── */
let playing = false, pct = 0, timer;
const playBtn = document.getElementById('playBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressFill = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const currentTime = document.getElementById('currentTime');
const currentTime2 = document.getElementById('currentTime2');
const totalSecs = 31 * 60;

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function togglePlay() {
  playing = !playing;
  const pauseIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>`;
  const playIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
  const pauseBig = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#222"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>`;
  const playBig = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#222"><polygon points="5,3 19,12 5,21"/></svg>`;

  playBtn.innerHTML = playing ? pauseBig : playBig;
  playPauseBtn.innerHTML = playing ? pauseIcon : playIcon;

  if (playing) {
    timer = setInterval(() => {
      pct = Math.min(pct + (100 / (totalSecs * 10)), 100);
      progressFill.style.width = pct + '%';
      progressThumb.style.left = pct + '%';
      const elapsed = (pct / 100) * totalSecs;
      currentTime.textContent = formatTime(elapsed);
      currentTime2.textContent = `${formatTime(elapsed)} / 31:00`;
      if (pct >= 100) { clearInterval(timer); playing = false; }
    }, 100);
  } else {
    clearInterval(timer);
  }
}

playBtn.addEventListener('click', togglePlay);
playPauseBtn.addEventListener('click', togglePlay);

/* ── PROGRESS BAR CLICK ── */
document.getElementById('progressBar').addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  pct = ((e.clientX - rect.left) / rect.width) * 100;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  const elapsed = (pct / 100) * totalSecs;
  currentTime.textContent = formatTime(elapsed);
  currentTime2.textContent = `${formatTime(elapsed)} / 31:00`;
});

/* ── SPEED ── */
const speeds = ['1x', '1.25x', '1.5x', '2x'];
let speedIdx = 0;
function cycleSpeed(btn) {
  speedIdx = (speedIdx + 1) % speeds.length;
  btn.textContent = speeds[speedIdx];
}

/* ── ACTION PILLS ── */
function toggleAction(btn) {
  btn.classList.toggle('active');
}

/* ── EXPAND DESCRIPTION ── */
function expandDesc() {
  document.getElementById('descMore').style.display = 'none';
  document.getElementById('descExtra').style.display = 'block';
}

/* ── LIKE COMMENT ── */
function toggleLikeComment(btn) {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '👍 Liked' : '👍 Like';
}

/* ── REPLY BOX TOGGLE ── */
function toggleReplyBox(commentId) {
  const box = document.getElementById('reply-' + commentId);
  const isOpen = box.style.display === 'block';
  // close all reply boxes first
  document.querySelectorAll('.reply-box').forEach(b => b.style.display = 'none');
  document.querySelectorAll('.reply-btn').forEach(b => b.classList.remove('replied'));
  if (!isOpen) {
    box.style.display = 'block';
    box.querySelector('input').focus();
    // highlight the reply button
    box.closest('.comment-body').querySelector('.reply-btn').classList.add('replied');
  }
}

/* ── POST REPLY ── */
function postReply(btn, commentId) {
  const input = btn.previousElementSibling;
  const text = input.value.trim();
  if (!text) return;
  const repliesList = document.getElementById('replies-' + commentId);
  const reply = document.createElement('div');
  reply.className = 'reply-item';
  reply.innerHTML = `
    <div class="reply-avatar">A</div>
    <div class="reply-body comment-body">
      <div class="comment-name">You <span>Just now</span></div>
      <div class="comment-text">${text}</div>
      <div class="comment-actions">
        <button class="comment-action like-btn" onclick="toggleLikeComment(this)">👍 Like</button>
      </div>
    </div>`;
  repliesList.appendChild(reply);
  input.value = '';
  // hide reply box after posting
  document.getElementById('reply-' + commentId).style.display = 'none';
  document.querySelectorAll('.reply-btn').forEach(b => b.classList.remove('replied'));
}

/* ── ADD COMMENT ── */
let commentCount = 3;
function addComment() {
  const input = document.getElementById('commentInput');
  const text = input.value.trim();
  if (!text) return;
  commentCount++;
  document.getElementById('commentCount').textContent = `(${commentCount})`;
  const list = document.getElementById('commentList');
  const cid = 'ci' + commentCount;
  const item = document.createElement('div');
  item.className = 'comment-item';
  item.id = cid;
  item.style.animation = 'fadeUp .3s ease';
  item.innerHTML = `
    <div class="comment-user-avatar" style="background:var(--yellow);color:var(--black);">A</div>
    <div class="comment-body">
      <div class="comment-name">You <span>Just now</span></div>
      <div class="comment-text">${text}</div>
      <div class="comment-actions">
        <button class="comment-action like-btn" onclick="toggleLikeComment(this)">👍 Like</button>
        <button class="comment-action reply-btn" onclick="toggleReplyBox('${cid}')">↩ Reply</button>
      </div>
      <div class="reply-box" id="reply-${cid}" style="display:none;">
        <div class="reply-input-row">
          <div class="comment-avatar" style="width:26px;height:26px;font-size:12px;">A</div>
          <input class="comment-input" type="text" placeholder="Write a reply..."/>
          <button class="comment-submit" onclick="postReply(this, '${cid}')">Post</button>
        </div>
      </div>
      <div class="replies-list" id="replies-${cid}"></div>
    </div>`;
  list.prepend(item);
  input.value = '';
}

document.getElementById('commentInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addComment();
});

/* ── VOLUME ── */
let volume = 0.75; // 0 to 1
let muted = false;
let prevVolume = 0.75;
const volumeBar = document.getElementById('volumeBar');
const volumeFill = document.getElementById('volumeFill');
const volumeThumb = document.getElementById('volumeThumb');
const volIcon = document.getElementById('volIcon');

function setVolume(v) {
  volume = Math.min(1, Math.max(0, v));
  volumeFill.style.width = (volume * 100) + '%';
  volumeThumb.style.left = (volume * 100) + '%';
  updateVolIcon();
}

function updateVolIcon() {
  if (muted || volume === 0) {
    volIcon.innerHTML = `<polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
  } else if (volume < 0.5) {
    volIcon.innerHTML = `<polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
  } else {
    volIcon.innerHTML = `<polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
  }
}

function toggleMute() {
  muted = !muted;
  if (muted) {
    prevVolume = volume;
    volumeFill.style.width = '0%';
    volumeThumb.style.left = '0%';
  } else {
    setVolume(prevVolume);
  }
  updateVolIcon();
}

// Click on volume bar
volumeBar.addEventListener('click', (e) => {
  const rect = volumeBar.getBoundingClientRect();
  const v = (e.clientX - rect.left) / rect.width;
  muted = false;
  setVolume(v);
});

// Drag on volume bar
let draggingVol = false;
volumeBar.addEventListener('mousedown', () => draggingVol = true);
document.addEventListener('mousemove', (e) => {
  if (!draggingVol) return;
  const rect = volumeBar.getBoundingClientRect();
  const v = (e.clientX - rect.left) / rect.width;
  muted = false;
  setVolume(v);
});
document.addEventListener('mouseup', () => draggingVol = false);

/* ── DOUBLE-CLICK FULLSCREEN ── */
const videoWrap = document.querySelector('.video-player-wrap');
const dblFlash = document.getElementById('dblFlash');

videoWrap.addEventListener('dblclick', () => {
  toggleFullscreen();
  dblFlash.textContent = document.fullscreenElement ? '⛶' : '⛶';
  dblFlash.classList.add('show');
  setTimeout(() => dblFlash.classList.remove('show'), 500);
});

/* ── FULLSCREEN ── */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    videoWrap.requestFullscreen && videoWrap.requestFullscreen();
  } else {
    document.exitFullscreen && document.exitFullscreen();
  }
}

document.addEventListener('fullscreenchange', () => {
  const isFs = !!document.fullscreenElement;
  document.getElementById('fsIcon').innerHTML = isFs
    ? `<polyline points="4,14 10,14 10,20"/><polyline points="20,10 14,10 14,4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/>`
    : `<polyline points="15,3 21,3 21,9"/><polyline points="9,21 3,21 3,15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>`;
});

/* ── SEEK 10s ── */
function seekBy(secs) {
  const elapsed = (pct / 100) * totalSecs;
  const newElapsed = Math.min(totalSecs, Math.max(0, elapsed + secs));
  pct = (newElapsed / totalSecs) * 100;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  currentTime.textContent = formatTime(newElapsed);
  currentTime2.textContent = `${formatTime(newElapsed)} / 31:00`;
}

/* ── QUALITY SELECTOR ── */
function toggleQualityDropdown() {
  document.getElementById('qualityDropdown').classList.toggle('open');
}

function setQuality(q, el) {
  document.querySelectorAll('.quality-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('qualityBtn').textContent = q;
  document.getElementById('qualityDropdown').classList.remove('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.quality-wrap')) {
    document.getElementById('qualityDropdown').classList.remove('open');
  }
});

/* ── CHAPTER MARKERS — click to seek ── */
document.querySelectorAll('.chapter-marker').forEach(marker => {
  marker.addEventListener('click', (e) => {
    e.stopPropagation();
    pct = parseFloat(marker.style.left);
    progressFill.style.width = pct + '%';
    progressThumb.style.left = pct + '%';
    const elapsed = (pct / 100) * totalSecs;
    currentTime.textContent = formatTime(elapsed);
    currentTime2.textContent = `${formatTime(elapsed)} / 31:00`;
  });
});

/* ── BACK TO TOP ── */
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.classList.toggle('visible', window.scrollY > 300);
});
