const PROJECT_IMGS_MAP = [
  "card1.png","card2.png","card3.png","card4.png","card5.png","card6.png",
  "card7.png","card8.png","card9.png","card10.png","card11.png","card12.png",
];

const PROJECTS = [
  { title:'AeroSat-1: CubeSat Attitude Control System', dept:'Avionics & GNC', year:'2024', status:'completed', cat:'avionics', icon:'fa-satellite', desc:'Full ADCS design for a 1U CubeSat including magnetorquer coils, sun sensor integration, and PID-based attitude stabilisation. Simulated in MATLAB & Simulink. The system achieved ±2° pointing accuracy in simulation, validated against GMAT propagator outputs.', tags:['MATLAB','Simulink','ADCS','PID Control','Magnetorquer','CubeSat'], team:[{init:'A',name:'Arjun Mehta',role:'ADCS Lead'},{init:'P',name:'Priya Nair',role:'Simulation'},{init:'R',name:'Rohan Kapoor',role:'Software'},{init:'S',name:'Sneha Pillai',role:'Hardware'},{init:'T',name:'Tarun Bose',role:'Testing'}] },
  { title:'Solid Rocket Motor Design & Static Fire Test', dept:'Propulsion', year:'2024', status:'completed', cat:'propulsion', icon:'fa-rocket', desc:'End-to-end design of a 250 N solid propellant motor — grain geometry, nozzle sizing, and a successful static fire on a custom-built test stand. Achieved within 6% of predicted thrust curve over 2.8 s burn time.', tags:['OpenMotor','Nozzle CFD','KNSB Propellant','Static Fire','Thrust Curve'], team:[{init:'K',name:'Kiran Das',role:'Propulsion Lead'},{init:'S',name:'Suresh Kumar',role:'Nozzle Design'},{init:'V',name:'Varsha Iyer',role:'Test Operations'},{init:'M',name:'Mohan Reddy',role:'Safety'}] },
  { title:'NACA 2412 Wing Aerodynamic Analysis', dept:'CFD & Aerodynamics', year:'2023', status:'completed', cat:'cfd', icon:'fa-wind', desc:'High-fidelity CFD analysis of the NACA 2412 airfoil across AoA 0–20°. CL & CD curves validated against published wind tunnel data. Used k-ω SST turbulence model. Results within 4% of experimental data.', tags:['OpenFOAM','k-ω SST','Airfoil','Lift/Drag','Validation','Paraview'], team:[{init:'M',name:'Meena Rajan',role:'CFD Lead'},{init:'D',name:'Dev Sharma',role:'Mesh Generation'},{init:'L',name:'Lakshmi T.',role:'Post-Processing'}] },
  { title:'Composite Panel FEA Under Launch Loads', dept:'Structures', year:'2024', status:'completed', cat:'structures', icon:'fa-cube', desc:'FEA of a carbon fibre composite panel under combined axial, shear, and pressure launch loads using ANSYS. Optimised layup sequence achieved the target factor of safety with a 21% weight saving over an all-aluminium baseline.', tags:['ANSYS','Carbon Fibre','FEA','Composite Layup','Buckling Analysis'], team:[{init:'T',name:'Tanvi Joshi',role:'Structures Lead'},{init:'N',name:'Nikhil Patel',role:'Modelling'},{init:'B',name:'Bharat Singh',role:'Analysis'}] },
  { title:'Low-Cost Flight Computer for Sounding Rockets', dept:'Avionics Software', year:'2023', status:'completed', cat:'software', icon:'fa-microchip', desc:'Raspberry Pi-based flight computer with barometric altitude, GPS, and 9-DOF IMU. Custom Python firmware handles real-time telemetry logging at 50 Hz, apogee detection, and recovery system deployment trigger.', tags:['Python','Raspberry Pi','IMU','GPS','Barometer','Telemetry'], team:[{init:'J',name:'Jai Krishnan',role:'Firmware'},{init:'L',name:'Leena Menon',role:'Hardware Integration'}] },
  { title:'Orbital Trajectory Optimisation Tool', dept:'GNC', year:'2024', status:'completed', cat:'gnc', icon:'fa-location-crosshairs', desc:'Python tool to compute and visualise optimal Hohmann transfer, bi-elliptic, and plane-change manoeuvres. Outputs delta-v budget tables, interactive 3D orbit plots, and a mission report PDF. Used by 3 subsequent student teams.', tags:['Python','SciPy','Plotly','Orbital Mechanics','Hohmann Transfer'], team:[{init:'H',name:'Harish Nair',role:'Algorithm Lead'},{init:'G',name:'Gauri Shah',role:'Visualisation'},{init:'F',name:'Fahad Ansari',role:'Testing'}] },
  { title:'Performance Study of Green Propellants', dept:'R&D / Research', year:'2022', status:'completed', cat:'research', icon:'fa-flask', desc:'Comparative study of HAN-based and AF-M315E ionic liquid propellants vs. hydrazine using NASA CEA for thermochemical analysis. Evaluated Isp, storage safety, handling requirements, and regulatory aspects for student CubeSat use.', tags:['NASA CEA','HAN Propellant','Isp Analysis','Green Propulsion','Safety'], team:[{init:'C',name:'Chetan More',role:'Research Lead'},{init:'E',name:'Esha Verma',role:'CEA Simulation'}] },
  { title:'CubeSat EPS PCB Design & Simulation', dept:'Avionics', year:'2023', status:'completed', cat:'avionics', icon:'fa-bolt', desc:'Full 4-layer PCB design for a CubeSat electrical power system: solar MPPT with SPV1040, LiPo battery charge controller, 3.3 V/5 V/unregulated bus outputs, and I²C housekeeping telemetry. Verified in LTSpice before tape-out.', tags:['KiCad','LTSpice','MPPT','SPV1040','PCB Design','I²C'], team:[{init:'Q',name:'Qasim Ali',role:'PCB Design Lead'},{init:'W',name:'Wren Thomas',role:'Simulation'},{init:'X',name:'Xena Pillai',role:'Testing'},{init:'Y',name:'Yash Mehta',role:'Documentation'}] },
  { title:'Pintle Injector Design for Bipropellant Engine', dept:'Propulsion', year:'2023', status:'completed', cat:'propulsion', icon:'fa-fire-flame-curved', desc:'Design, CFD analysis, and cold-flow testing of a pintle injector for a LOX/ethanol engine. ANSYS Fluent VOF simulation characterised spray cone angle and mixing efficiency. Cold-flow matched simulation within 8%.', tags:['ANSYS Fluent','VOF Simulation','Pintle Injector','LOX/Ethanol','Cold Flow'], team:[{init:'Z',name:'Zain Siddiqui',role:'Injector Design'},{init:'Y',name:'Yashika Rao',role:'CFD Analysis'},{init:'O',name:'Omar Khan',role:'Cold Flow Test'}] },
  { title:'Topology Optimised Satellite Bracket', dept:'Structures', year:'2022', status:'completed', cat:'structures', icon:'fa-layer-group', desc:'Applied ANSYS topology optimisation to a satellite mounting bracket under 3-axis launch loads. Achieved 38% mass reduction vs. baseline aluminium design while maintaining required factor of safety. Prototype 3D printed and load-tested.', tags:['ANSYS','Topology Optimisation','3D Printing','Weight Reduction','Bracket'], team:[{init:'U',name:'Uday Prakash',role:'Design Lead'},{init:'I',name:'Indira Sen',role:'Optimisation'},{init:'O',name:'Omkar Jain',role:'Manufacturing'}] },
  { title:'Ground Station Dashboard for CubeSat Telemetry', dept:'Software', year:'2024', status:'completed', cat:'software', icon:'fa-satellite-dish', desc:'Full-stack real-time web dashboard for CubeSat telemetry. FastAPI backend handles serial/UDP radio frames, decodes CCSDS packets, and streams to a React frontend via WebSocket. Live charts for temperature, power, and attitude data.', tags:['FastAPI','React','WebSocket','CCSDS','Python','Telemetry'], team:[{init:'E',name:'Elan Murugan',role:'Backend'},{init:'R',name:'Riya Choudhary',role:'Frontend'}] },
  { title:'Supersonic De Laval Nozzle Flow Analysis', dept:'CFD', year:'2022', status:'completed', cat:'cfd', icon:'fa-gauge-high', desc:'ANSYS Fluent density-based solver simulation of flow through a converging-diverging De Laval nozzle at design and off-design back pressures. Captured normal shock location vs. NPR and compared against 1D isentropic theory — within 3%.', tags:['ANSYS Fluent','Density-Based Solver','Shock Waves','Mach Number','Nozzle'], team:[{init:'F',name:'Farhan Sheikh',role:'CFD Lead'},{init:'G',name:'Gita Ramesh',role:'Meshing'},{init:'H',name:'Hitesh Joshi',role:'Post-Processing'}] },
];

const CAT_ICONS = {
  propulsion: 'fa-rocket', avionics: 'fa-satellite', structures: 'fa-cube',
  software: 'fa-microchip', cfd: 'fa-wind', gnc: 'fa-location-crosshairs', research: 'fa-flask'
};
const CAT_GRADIENTS = {
  avionics:   'linear-gradient(135deg,#000814,#001440)',
  propulsion: 'linear-gradient(135deg,#0a0a0a,#1a0800)',
  structures: 'linear-gradient(135deg,#0a000a,#180018)',
  software:   'linear-gradient(135deg,#000a0a,#001818)',
  cfd:        'linear-gradient(135deg,#080014,#0f0030)',
  gnc:        'linear-gradient(135deg,#001008,#003018)',
  research:   'linear-gradient(135deg,#0a0800,#201800)'
};
const CAT_BADGE_CLASS = {
  avionics: 'bb-avionics', propulsion: 'bb-propulsion', structures: 'bb-structures',
  software: 'bb-software', cfd: 'bb-cfd', gnc: 'bb-gnc', research: 'bb-research'
};

/* ── DROPDOWN ── */
function toggleDropdown(e) {
  e.preventDefault();
  document.querySelector('.dropdown-menu').classList.toggle('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.dropdown')) document.querySelector('.dropdown-menu').classList.remove('open');
});

/* ── COUNTER ANIMATION ── */
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10), suffix = el.dataset.suffix || '', duration = 1400, start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(easeOutCubic(p) * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else {
      el.textContent = target + suffix;
      el.style.animation = 'counterPop .35s cubic-bezier(.22,.68,0,1.6)';
      el.addEventListener('animationend', () => el.style.animation = '', { once: true });
    }
  }
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.counter').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
[document.querySelector('.hero-stats-row'), document.querySelector('.stats-banner')].forEach(el => {
  if (el) counterObserver.observe(el);
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── BENTO CARD STAGGER ── */
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('seen')) {
      entry.target.classList.add('seen');
      const cards = [...document.querySelectorAll('.bcard:not(.hidden):not(.bcard-stat)')];
      const idx = cards.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), Math.max(0, idx) * 28);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });
document.querySelectorAll('.bcard:not(.bcard-stat)').forEach(c => { c.classList.remove('visible'); cardObserver.observe(c); });
document.querySelectorAll('.bcard-stat').forEach(c => c.classList.add('visible'));

/* ── FILTERS ── */
let activeCat = 'all', activeYear = 'all';
function setFilter(type, value, btn) {
  if (type === 'cat') activeCat = value;
  if (type === 'year') activeYear = value;
  document.querySelectorAll(`[data-filter-type="${type}"]`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}
function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.bcard[data-cat]');
  let visible = 0;
  cards.forEach(card => {
    const catMatch  = activeCat === 'all'  || card.dataset.cat === activeCat;
    const yearMatch = activeYear === 'all' || card.dataset.year === activeYear;
    const kw = (card.dataset.keywords || '') + ' ' + (card.querySelector('.bcard-title')?.textContent || '').toLowerCase();
    const searchMatch = q === '' || kw.toLowerCase().includes(q);
    if (catMatch && yearMatch && searchMatch) { card.classList.remove('hidden'); visible++; }
    else card.classList.add('hidden');
  });
  document.getElementById('resultsCount').innerHTML = `<strong>${visible}</strong> project${visible !== 1 ? 's' : ''}`;
  document.getElementById('noResults').classList.toggle('visible', visible === 0);
  let i = 0;
  document.querySelectorAll('.bcard[data-cat]:not(.hidden)').forEach(card => {
    card.classList.remove('visible');
    const delay = i++ * 28;
    setTimeout(() => card.classList.add('visible'), delay + 20);
  });
}

/* ── FILTER RIPPLE ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const r = document.createElement('span'), rect = this.getBoundingClientRect(), size = Math.max(rect.width, rect.height);
    r.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;background:rgba(250,219,15,.4);transform:scale(0);animation:rippleOut .5s ease forwards;`;
    this.appendChild(r);
    r.addEventListener('animationend', () => r.remove());
  });
});

/* ── LIKE BUTTON ── */
function toggleLike(btn) {
  const isLiked = btn.classList.contains('liked');
  const countEl = btn.querySelector('.like-count');
  const heartEl = btn.querySelector('.like-heart');
  const base    = parseInt(btn.dataset.count, 10);
  btn.classList.toggle('liked', !isLiked);
  countEl.textContent = isLiked ? base : base + 1;
  heartEl.textContent = isLiked ? '♡' : '♥';
  btn.classList.remove('pop');
  void btn.offsetWidth;
  btn.classList.add('pop');
  btn.addEventListener('animationend', () => btn.classList.remove('pop'), { once: true });
}

/* ── PROJECT DETAIL MODAL ── */
function openModal(idx) {
  const p = PROJECTS[idx];
  const imgEl = document.getElementById('modalImg');
  const imgUrl = PROJECT_IMGS_MAP[idx] || '';
  if (imgUrl) {
    imgEl.src = 'image/' + imgUrl;
    imgEl.style.display = 'block';
    document.getElementById('modalVisual').style.background = CAT_GRADIENTS[p.cat] || '#000';
  } else {
    imgEl.style.display = 'none';
    document.getElementById('modalVisual').style.background = CAT_GRADIENTS[p.cat] || '#000';
  }
  document.getElementById('modalIcon').className = `modal-visual-icon fa-solid ${p.icon}`;
  document.getElementById('modalVisualLabel').textContent = p.cat.toUpperCase();
  document.getElementById('modalDept').textContent = p.dept;
  document.getElementById('modalYear').textContent = p.year;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;
  const statusEl = document.getElementById('modalStatus');
  statusEl.textContent = p.status.charAt(0).toUpperCase() + p.status.slice(1);
  statusEl.className = 'modal-status-tag ' + p.status;
  document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modalTeam').innerHTML = p.team.map(m => `<div class="modal-member"><div class="modal-avatar">${m.init}</div><div class="modal-member-info"><strong>${m.name}</strong><span>${m.role}</span></div></div>`).join('');
  document.getElementById('projectModal').dataset.idx = idx;
  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('projectModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});
function shareProject() {
  const idx = document.getElementById('projectModal').dataset.idx, p = PROJECTS[idx];
  const url = `https://brightaerospace.in/projects?id=${idx}&title=${encodeURIComponent(p.title)}`;
  try { navigator.clipboard.writeText(url); }
  catch (e) { const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
  showToast('<i class="fa-solid fa-link"></i> Project link copied!');
}

/* ── SUBMIT MODAL ── */
let currentStep = 1, formTags = [], memberCount = 1;

function openSubmitModal() { resetSubmitForm(); document.getElementById('submitModal').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeSubmitModal() { document.getElementById('submitModal').classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('submitModal').addEventListener('click', function (e) {
  if (e.target === this) closeSubmitModal();
});

function resetSubmitForm() {
  currentStep = 1; formTags = []; memberCount = 1;
  ['f-title', 'f-dept', 'f-desc', 'tagInput'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.querySelectorAll('input[name="f-cat"]').forEach(r => r.checked = false);
  document.querySelectorAll('input[name="f-status"]').forEach(r => r.checked = false);
  document.getElementById('f-year').value = '';
  document.getElementById('tagContainer').innerHTML = '';
  document.getElementById('teamMembersContainer').innerHTML = `<div class="team-member-row" id="member-row-0"><div class="form-group"><label>Full Name <span class="req">*</span></label><input type="text" class="form-control member-name" placeholder="e.g. Arjun Mehta"/></div><div class="form-group"><label>Role / Contribution</label><input type="text" class="form-control member-role" placeholder="e.g. ADCS Lead, CFD Analysis…"/></div><button class="remove-member-btn" onclick="removeMember(0)" style="visibility:hidden;margin-top:22px;">×</button></div>`;
  document.querySelectorAll('.form-error').forEach(e => e.style.display = 'none');
  document.querySelectorAll('.form-group.has-error').forEach(g => g.classList.remove('has-error'));
  document.getElementById('submitSuccess').classList.remove('show');
  document.getElementById('submitSteps').style.display = 'flex';
  document.getElementById('submitModalFooter').style.display = 'flex';
  updateStepUI();
}

function updateStepUI() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`step-panel-${i}`).classList.toggle('active', i === currentStep);
    const ind = document.getElementById(`step-indicator-${i}`);
    ind.classList.remove('active', 'done');
    if (i === currentStep) ind.classList.add('active');
    else if (i < currentStep) ind.classList.add('done');
  }
  document.getElementById('currentStepLabel').textContent = currentStep;
  document.getElementById('btnPrev').style.display = currentStep > 1 ? 'inline-flex' : 'none';
  document.getElementById('btnNext').innerHTML = currentStep === 3
    ? '<i class="fa-solid fa-paper-plane"></i> Publish Project'
    : 'Continue <i class="fa-solid fa-arrow-right"></i>';
}

function nextStep() {
  if (currentStep === 1 && !validateStep1()) return;
  if (currentStep === 2 && !validateStep2()) return;
  if (currentStep === 3) { submitProject(); return; }
  if (currentStep === 2) buildReview();
  currentStep++;
  updateStepUI();
  document.getElementById('submitModalBody').scrollTop = 0;
}
function prevStep() {
  if (currentStep > 1) { currentStep--; updateStepUI(); document.getElementById('submitModalBody').scrollTop = 0; }
}

function validateStep1() {
  let ok = true;
  const title  = document.getElementById('f-title').value.trim();
  const dept   = document.getElementById('f-dept').value.trim();
  const desc   = document.getElementById('f-desc').value.trim();
  const year   = document.getElementById('f-year').value;
  const cat    = document.querySelector('input[name="f-cat"]:checked');
  const status = document.querySelector('input[name="f-status"]:checked');
  setFieldError('fg-title', !title);
  setFieldError('fg-dept',  !dept);
  setFieldError('fg-desc',  desc.length < 30);
  if (!cat)    { document.getElementById('cat-error').style.display    = 'block'; ok = false; } else { document.getElementById('cat-error').style.display    = 'none'; }
  if (!status) { document.getElementById('status-error').style.display = 'block'; ok = false; } else { document.getElementById('status-error').style.display = 'none'; }
  if (!year) setFieldError('fg-year', true); else setFieldError('fg-year', false);
  if (formTags.length === 0) { document.getElementById('tag-error').style.display = 'block'; ok = false; } else { document.getElementById('tag-error').style.display = 'none'; }
  if (!title || !dept || desc.length < 30 || !year || !cat || !status || formTags.length === 0) ok = false;
  return ok;
}
function validateStep2() {
  const hasName = [...document.querySelectorAll('.member-name')].some(n => n.value.trim().length > 0);
  document.getElementById('team-error').style.display = hasName ? 'none' : 'block';
  return hasName;
}
function setFieldError(groupId, hasError) {
  const g = document.getElementById(groupId);
  if (!g) return;
  g.classList.toggle('has-error', hasError);
}

/* ── TAG INPUT ── */
function handleTagInput(e) {
  if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(); }
  if (e.key === 'Backspace' && e.target.value === '' && formTags.length > 0) removeTag(formTags.length - 1);
}
function handleTagType(e) {
  const v = e.target.value;
  if (v.endsWith(',')) { e.target.value = v.slice(0, -1); addTag(); }
}
function addTag() {
  const input = document.getElementById('tagInput'), val = input.value.trim().replace(/,/g, '');
  if (!val || formTags.includes(val)) { input.value = ''; return; }
  formTags.push(val); renderTags(); input.value = '';
  if (formTags.length > 0) document.getElementById('tag-error').style.display = 'none';
}
function removeTag(idx) { formTags.splice(idx, 1); renderTags(); }
function renderTags() {
  document.getElementById('tagContainer').innerHTML = formTags.map((t, i) =>
    `<span class="input-tag">${t}<button type="button" onclick="removeTag(${i})">×</button></span>`
  ).join('');
}

/* ── TEAM MEMBERS ── */
function addMember() {
  const id = memberCount++, tc = document.getElementById('teamMembersContainer'), div = document.createElement('div');
  div.className = 'team-member-row'; div.id = `member-row-${id}`;
  div.innerHTML = `<div class="form-group"><label>Full Name <span class="req">*</span></label><input type="text" class="form-control member-name" placeholder="e.g. Priya Nair"/></div><div class="form-group"><label>Role / Contribution</label><input type="text" class="form-control member-role" placeholder="e.g. Simulation, Testing…"/></div><button class="remove-member-btn" onclick="removeMember(${id})" style="margin-top:22px;">×</button>`;
  tc.appendChild(div); updateRemoveButtons();
}
function removeMember(id) { const el = document.getElementById(`member-row-${id}`); if (el) el.remove(); updateRemoveButtons(); }
function updateRemoveButtons() {
  const rows = document.querySelectorAll('.team-member-row');
  rows.forEach(row => { const btn = row.querySelector('.remove-member-btn'); if (btn) btn.style.visibility = rows.length > 1 ? 'visible' : 'hidden'; });
}

/* ── REVIEW ── */
function buildReview() {
  const cat    = document.querySelector('input[name="f-cat"]:checked')?.value    || '';
  const status = document.querySelector('input[name="f-status"]:checked')?.value || '';
  document.getElementById('rv-title').textContent = document.getElementById('f-title').value.trim();
  document.getElementById('rv-meta').textContent  = `${document.getElementById('f-dept').value.trim()} · ${document.getElementById('f-year').value} · ${cat.toUpperCase()} · ${status}`;
  document.getElementById('rv-desc').textContent  = document.getElementById('f-desc').value.trim();
  document.getElementById('rv-tags').innerHTML    = formTags.map(t => `<span class="review-tag">${t}</span>`).join('');
  const members = [...document.querySelectorAll('.team-member-row')]
    .map(row => ({ name: row.querySelector('.member-name').value.trim(), role: row.querySelector('.member-role').value.trim() }))
    .filter(m => m.name);
  document.getElementById('rv-team').innerHTML = members.map(m =>
    `<div class="review-member"><div class="review-avatar">${m.name[0].toUpperCase()}</div><div class="review-member-text">${m.name}${m.role ? `<span>— ${m.role}</span>` : ''}</div></div>`
  ).join('');
}

/* ── SUBMIT PROJECT ── */
function submitProject() {
  const title  = document.getElementById('f-title').value.trim();
  const dept   = document.getElementById('f-dept').value.trim();
  const desc   = document.getElementById('f-desc').value.trim();
  const year   = document.getElementById('f-year').value;
  const cat    = document.querySelector('input[name="f-cat"]:checked').value;
  const status = document.querySelector('input[name="f-status"]:checked').value;
  const members = [...document.querySelectorAll('.team-member-row')]
    .map(row => ({
      init: (row.querySelector('.member-name').value.trim()[0] || '?').toUpperCase(),
      name: row.querySelector('.member-name').value.trim(),
      role: row.querySelector('.member-role').value.trim()
    })).filter(m => m.name);

  const newProject = { title, dept, year, status, cat, icon: CAT_ICONS[cat] || 'fa-rocket', desc, tags: [...formTags], team: members };
  PROJECTS.push(newProject);
  const newIdx = PROJECTS.length - 1;

  const avatarsHTML = members.slice(0, 3).map(m => `<div class="bcard-avatar">${m.init}</div>`).join('');
  const tagsHTML    = formTags.slice(0, 4).map(t => `<span class="bcard-tag">${t}</span>`).join('');

  const cardDiv = document.createElement('div');
  cardDiv.className = 'bcard bc6 bcard-compact';
  cardDiv.dataset.cat      = cat;
  cardDiv.dataset.year     = year;
  cardDiv.dataset.keywords = [title, dept, ...formTags].join(' ').toLowerCase();
  cardDiv.innerHTML = `
    <div class="bcard-vis" style="background:${CAT_GRADIENTS[cat] || '#000'};">
      <div class="bcard-vis-dots"></div>
      <i class="bcard-vis-icon fa-solid ${CAT_ICONS[cat] || 'fa-rocket'}"></i>
      <span class="bcard-vis-label">${cat}</span>
      <span class="bcard-status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
    <div class="bcard-body">
      <div class="bcard-badge ${CAT_BADGE_CLASS[cat] || 'bb-avionics'}"><span class="bcard-badge-dot"></span>${dept}</div>
      <div class="bcard-title">${title}</div>
      <div class="bcard-desc">${desc.slice(0, 160)}${desc.length > 160 ? '…' : ''}</div>
      <div class="bcard-tags">${tagsHTML}</div>
    </div>
    <div class="bcard-footer">
      <div class="bcard-team"><div class="bcard-avatars">${avatarsHTML}</div><span class="bcard-team-label">${members.length} member${members.length !== 1 ? 's' : ''}</span></div>
      <div class="bcard-actions">
        <button class="bcard-like" data-count="0" onclick="toggleLike(this)"><span class="like-heart">♡</span><span class="like-count">0</span></button>
        <button class="bcard-view" onclick="openModal(${newIdx})">View <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>`;

  const grid = document.getElementById('projectsGrid');
  const noResults = document.getElementById('noResults');
  grid.insertBefore(cardDiv, noResults);
  requestAnimationFrame(() => requestAnimationFrame(() => cardDiv.classList.add('visible')));

  document.getElementById('submitSteps').style.display = 'none';
  document.getElementById('submitModalFooter').style.display = 'none';
  for (let i = 1; i <= 3; i++) document.getElementById(`step-panel-${i}`).classList.remove('active');
  document.getElementById('submitSuccess').classList.add('show');

  initCardEffect(cardDiv);
  applyFilters();
}

/* ── TOAST ── */
let toastTimer;
function showToast(html) {
  const toast = document.getElementById('toast');
  toast.innerHTML = html;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ── SCROLL TO FOOTER ── */
function scrollToFooter() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  setTimeout(() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }), 50);
}

/* ── PARALLAX ── */
const heroEl = document.querySelector('.projects-hero');
window.addEventListener('scroll', () => {
  if (heroEl) heroEl.style.backgroundPositionY = window.scrollY * 0.28 + 'px';
}, { passive: true });

/* ── CARD TILT EFFECTS ── */
const SMOOTH = 'opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1), box-shadow .6s cubic-bezier(.16,1,.3,1), filter .5s ease';
const TILT   = 'opacity .6s cubic-bezier(.16,1,.3,1), box-shadow .18s ease, filter .5s ease';

function initCardEffect(card) {
  if (card.classList.contains('bcard-stat')) return;
  if (!card.querySelector('.bcard-shine')) {
    const shine = document.createElement('div'); shine.className = 'bcard-shine'; card.appendChild(shine);
  }
  if (!card.querySelector('.bcard-texture')) {
    const tex = document.createElement('div'); tex.className = 'bcard-texture'; card.appendChild(tex);
  }
  card.addEventListener('mouseenter', function () {
    this.style.transition = SMOOTH;
    this.style.transform  = 'translateY(-20px) scale(1.025) perspective(900px)';
    this.style.boxShadow  = '0 8px 16px rgba(0,0,0,0.08), 0 20px 50px rgba(0,0,0,0.15), 0 40px 80px rgba(0,0,0,0.08), 0 0 0 1.5px rgba(250,219,15,0.6)';
  });
  card.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * -5, tiltY = ((x - cx) / cx) * 5;
    const shadowX = ((x - cx) / cx) * 12, shadowY = ((y - cy) / cy) * 10;
    this.style.transition = TILT;
    this.style.transform  = `translateY(-20px) scale(1.025) perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    this.style.boxShadow  = `${shadowX * .3}px ${shadowY * .3 + 18}px 40px rgba(0,0,0,0.14), ${shadowX * .7}px ${shadowY * .7 + 34}px 70px rgba(0,0,0,0.09), 0 0 0 1.5px rgba(250,219,15,0.6)`;
    const shine = this.querySelector('.bcard-shine');
    if (shine) shine.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.22) 0%, transparent 58%)`;
  });
  card.addEventListener('mouseleave', function () {
    this.style.transition = SMOOTH;
    this.style.transform  = '';
    this.style.boxShadow  = '';
    const shine = this.querySelector('.bcard-shine');
    if (shine) shine.style.background = '';
  });
}

(function initAllCards() {
  const grid = document.getElementById('projectsGrid');
  document.querySelectorAll('.bcard').forEach(initCardEffect);

  const gridMutObs = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(n => { if (n.classList?.contains('bcard')) initCardEffect(n); }));
  });
  gridMutObs.observe(grid, { childList: true });

  grid.addEventListener('mouseenter', () => grid.classList.add('has-hover'));
  grid.addEventListener('mouseleave', () => {
    grid.classList.remove('has-hover');
    document.querySelectorAll('.bcard').forEach(c => {
      c.style.transform = ''; c.style.boxShadow = '';
      const s = c.querySelector('.bcard-shine'); if (s) s.style.background = '';
    });
  });
})();
