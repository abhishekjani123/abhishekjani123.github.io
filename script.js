/* ===== ABHISHEK JANI — TERMINAL RESUME SCRIPT ===== */

// ===== DATA =====
const DATA = {
  name: 'Abhishek Jani',
  location: 'New Brunswick, NJ',
  email: 'abhishekjani075@gmail.com',
  github: 'https://github.com/abhishekjani123',
  linkedin: 'https://www.linkedin.com/in/abhishekjani075/',

  about: [
    'MS Computer Science student at Rutgers University (GPA: 3.78/4.0).',
    'Software Engineer specializing in distributed systems, cloud infrastructure,',
    'and machine learning. Based in New Brunswick, NJ.',
    '',
    'I build fault-tolerant systems, serverless pipelines, and ML-powered applications.',
    'Passionate about the intersection of systems thinking and applied AI.',
  ],

  experience: [
    {
      company: 'Attention Group LLC',
      role: 'Software Engineering Intern',
      period: 'Jun 2025 – Dec 2025',
      location: 'Remote / New Jersey, USA',
      highlights: [
        'Shipped Node.js/Express + MongoDB backend with 30+ REST endpoints at 2K+ req/min, 99.9% uptime',
        'Built image-generation workflow using React hooks, OpenCV, and Matplotlib',
        'OAuth 2.0 Twitter API integration — reduced login errors by 85% (<2% failure rate)',
      ]
    },
    {
      company: 'Sophos',
      role: 'Technical Support Engineer – L1',
      period: 'Aug 2023 – May 2024',
      location: 'India',
      highlights: [
        'Resolved 200+ technical incidents (IPSec, SSL VPN, VoIP, firmware failover)',
        'Reduced resolution time by 18%, first-response time by 15%',
        '95% customer satisfaction rating, 100+ knowledge base articles',
      ]
    },
    {
      company: 'Ganpat University',
      role: 'Research Intern',
      period: 'Jan 2023 – May 2023',
      location: 'Gujarat, India',
      highlights: [
        'Improved image classification by 25% on EMOTIC dataset (AlexNet + VGG19 hybrid CNN)',
        'Achieved 73.6% validation accuracy on emotion recognition',
      ]
    }
  ],

  projects: [
    {
      name: 'Sentinel — AI-Powered Network Health Monitor',
      tech: ['FastAPI', 'React Flow', 'Gemini AI', 'SSE', 'Python'],
      desc: 'Real-time observability platform with z-score anomaly detection (2.0σ), Gemini AI root cause analysis, and React Flow service dependency graph.',
      link: 'github.com/abhishekjani123/sentinel'
    },
    {
      name: 'Adaptive Reverse-Proxy Load Balancer',
      tech: ['Python', 'aiohttp', 'Flask', 'Plotly.js', 'Docker'],
      desc: 'HTTP proxy with Round-Robin, SMA, EWMA routing — 35% tail latency reduction, 60% latency improvement via persistent connection pooling.',
      link: 'github.com/abhishekjani123/DIS---Adaptive-Reverse-Proxy-Load-Balancer'
    },
    {
      name: 'Runbook Ranger (AWS Auto-Remediation Bot)',
      tech: ['AWS Lambda', 'Step Functions', 'EventBridge', 'CDK', 'Python'],
      desc: 'Serverless self-healing system with MTTR minutes→seconds. Resource locking, idempotency keys, Runbooks-as-Code engine.',
      link: 'github.com/madil786110/RunBook-Ranger'
    },
    {
      name: 'Data Reliability Guardrails',
      tech: ['Python', 'PSI', 'Schema Validation', 'Data Contracts'],
      desc: 'Fault-tolerant pipeline validation enforcing Schema/Freshness/Distribution contracts with <5ms latency, 98% automated detection.',
      link: 'github.com/madil786110/data-reliability-guardrails'
    },
    {
      name: 'ADE Detection with Explainable Counterfactuals',
      tech: ['BioBERT', 'Hugging Face', 'PyTorch', 'NLP', 'RxNorm API'],
      desc: 'BioBERT fine-tuned on 11,914 clinical sentences — 95.6% F1. Counterfactual analysis: 76.5% prediction flip in ADE-positive cases.',
      link: 'github.com/patelshrey40/Revolutionizing-Clinical-Safety-Explainable-AI-for-Adverse-Drug-Event-Detection'
    }
  ],

  skills: {
    'Languages': ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'C'],
    'Web & Frameworks': ['Node.js', 'Express', 'React', 'Next.js', 'Flask', 'Django', 'FastAPI'],
    'ML / AI': ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'BioBERT', 'OpenCV', 'MediaPipe', 'NumPy', 'Pandas'],
    'Cloud & DevOps': ['AWS Lambda', 'Step Functions', 'EventBridge', 'CDK', 'Docker', 'Prometheus', 'Grafana'],
    'Databases': ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'ChromaDB'],
    'Networking': ['TCP/IP', 'HTTP/HTTPS', 'WebSockets', 'SSE', 'Load Balancing', 'Reverse Proxy', 'IPSec'],
    'Tools': ['Git', 'Linux', 'REST API', 'OAuth 2.0'],
    'Architecture': ['Distributed Systems', 'Microservices', 'Serverless', 'CI/CD', 'Fault Tolerance']
  },

  education: [
    {
      degree: 'Master of Science, Computer Science',
      school: 'Rutgers University',
      gpa: '3.78 / 4.0',
      period: 'Sep 2024 – May 2026',
      location: 'New Brunswick, NJ'
    },
    {
      degree: 'Bachelor of Technology, Computer Engineering',
      school: 'Ganpat University',
      gpa: '8.97 / 10',
      period: 'Jul 2019 – May 2023',
      location: 'Gujarat, India'
    }
  ],

  honors: [
    {
      title: 'Amazon ML Summer School',
      org: 'Amazon',
      date: 'Jul 2022',
      desc: 'Selected participant — Supervised Learning, DNNs, Probabilistic Graphical Models, Reinforcement Learning, Causal Inference.'
    },
    {
      title: 'Sophos Certified Engineer',
      org: 'Sophos',
      date: 'Sep 2023',
      desc: 'Certified in Sophos Firewall v19.5, v20.0 and MDR. Expertise in network security protocols.'
    }
  ]
};

const THEMES = ['default', 'dracula', 'solarized', 'nord'];
const THEME_COLORS = {
  default: '#1a1a2e',
  dracula: '#282a36',
  solarized: '#002b36',
  nord: '#2e3440'
};

// ===== PANE STATE =====
const panes = {
  primary: {
    outputEl: null,
    inputEl: null,
    promptEl: null,
    history: [],
    historyIndex: -1,
    snakeActive: false,
    snakeInstance: null
  },
  secondary: {
    outputEl: null,
    inputEl: null,
    promptEl: null,
    history: [],
    historyIndex: -1,
    snakeActive: false,
    snakeInstance: null
  }
};

let activePane = 'primary';
let currentTheme = localStorage.getItem('terminal-theme') || 'default';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Hook up DOM elements
  panes.primary.outputEl = document.getElementById('output-primary');
  panes.primary.inputEl = document.getElementById('input-primary');
  panes.primary.promptEl = document.getElementById('prompt-primary');

  panes.secondary.outputEl = document.getElementById('output-secondary');
  panes.secondary.inputEl = document.getElementById('input-secondary');
  panes.secondary.promptEl = document.getElementById('prompt-secondary');

  // Apply saved theme
  applyTheme(currentTheme);

  // Welcome banner
  printWelcome('primary');

  // Input handlers
  setupInput('primary');
  setupInput('secondary');

  // Split pane buttons
  document.getElementById('btn-split-h').addEventListener('click', splitHorizontal);
  document.getElementById('btn-split-v').addEventListener('click', splitVertical);

  // Dot buttons
  document.getElementById('btn-close').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  document.getElementById('btn-minimize').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  });

  // Focus management
  document.addEventListener('click', e => {
    if (!e.target.closest('.terminal-input')) {
      const paneEl = e.target.closest('.terminal-pane');
      if (paneEl) {
        const id = paneEl.id === 'pane-primary' ? 'primary' : 'secondary';
        activePane = id;
        panes[id].inputEl.focus();
      }
    }
  });

  // Auto-focus primary
  panes.primary.inputEl.focus();
});

// ===== THEME =====
function applyTheme(theme) {
  currentTheme = theme;
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('terminal-theme', theme);
}

// ===== SPLIT PANES =====
function splitHorizontal() {
  const layout = document.getElementById('terminal-layout');
  const divider = document.getElementById('pane-divider');
  const secondary = document.getElementById('pane-secondary');

  layout.classList.remove('split-vertical');
  divider.style.display = 'block';
  secondary.style.display = 'flex';

  if (!panes.secondary.outputEl.dataset.initialized) {
    panes.secondary.outputEl.dataset.initialized = 'true';
    printWelcome('secondary');
  }

  panes.secondary.inputEl.focus();
  activePane = 'secondary';
}

function splitVertical() {
  const layout = document.getElementById('terminal-layout');
  const divider = document.getElementById('pane-divider');
  const secondary = document.getElementById('pane-secondary');

  layout.classList.add('split-vertical');
  divider.style.display = 'block';
  secondary.style.display = 'flex';

  if (!panes.secondary.outputEl.dataset.initialized) {
    panes.secondary.outputEl.dataset.initialized = 'true';
    printWelcome('secondary');
  }

  panes.secondary.inputEl.focus();
  activePane = 'secondary';
}

// ===== WELCOME BANNER =====
function printWelcome(pane) {
  const banner = `
<div class="welcome-banner">
<pre>
    ___    __    __    _      __         __  
   /   |  / /_  / /_  (_)____/ /_  ___  / /__
  / /| | / __ \\/ __ \\/ / ___/ __ \\/ _ \\/ //_/
 / ___ |/ /_/ / / / / (__  ) / / /  __/ ,<   
/_/  |_/_.___/_/ /_/_/____/_/ /_/\\___/_/|_|  
</pre>
<div class="welcome-line" style="color:var(--text)">Welcome to <span style="color:var(--yellow);font-weight:700">Abhishek Jani's</span> interactive terminal resume.</div>
<div class="welcome-line" style="color:var(--text-dim)">Type <span style="color:var(--green);font-weight:700">help</span> to see available commands. Use ↑↓ for history.</div>
<div class="welcome-line" style="color:var(--text-dim)">Theme: <span style="color:var(--cyan)">${currentTheme}</span> · Location: <span style="color:var(--pink)">New Brunswick, NJ</span></div>
</div>`;
  appendHTML(pane, banner);
}

// ===== INPUT SETUP =====
function setupInput(pane) {
  const input = panes[pane].inputEl;

  input.addEventListener('keydown', e => {
    if (panes[pane].snakeActive) return;

    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      if (cmd) {
        panes[pane].history.unshift(cmd);
        panes[pane].historyIndex = -1;
        printCmd(pane, cmd);
        handleCommand(pane, cmd.toLowerCase().split(/\s+/));
      } else {
        appendLine(pane, '');
      }
      input.value = '';
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (panes[pane].historyIndex < panes[pane].history.length - 1) {
        panes[pane].historyIndex++;
        input.value = panes[pane].history[panes[pane].historyIndex];
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (panes[pane].historyIndex > 0) {
        panes[pane].historyIndex--;
        input.value = panes[pane].history[panes[pane].historyIndex];
      } else {
        panes[pane].historyIndex = -1;
        input.value = '';
      }
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.value.toLowerCase();
      const allCmds = Object.keys(COMMANDS);
      const matches = allCmds.filter(c => c.startsWith(partial));
      if (matches.length === 1) {
        input.value = matches[0];
      } else if (matches.length > 1) {
        appendLine(pane, matches.join('  '), 'output-info');
      }
    }

    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      panes[pane].outputEl.innerHTML = '';
    }

    if (e.ctrlKey && e.key === 'c') {
      appendLine(pane, '^C', 'output-error');
      input.value = '';
    }
  });

  input.addEventListener('focus', () => {
    activePane = pane;
  });
}

// ===== COMMAND ROUTER =====
const COMMANDS = {
  help: cmdHelp,
  about: cmdAbout,
  experience: cmdExperience,
  exp: cmdExperience,
  projects: cmdProjects,
  proj: cmdProjects,
  skills: cmdSkills,
  education: cmdEducation,
  edu: cmdEducation,
  honors: cmdHonors,
  contact: cmdContact,
  theme: cmdTheme,
  clear: cmdClear,
  cls: cmdClear,
  snake: cmdSnake,
  whoami: cmdWhoami,
  pwd: cmdPwd,
  ls: cmdLs,
  date: cmdDate,
  echo: cmdEcho,
  neofetch: cmdNeofetch,
  exit: cmdExit,
  back: cmdExit,
  home: cmdExit,
};

function handleCommand(pane, parts) {
  const cmd = parts[0];
  const args = parts.slice(1);

  if (cmd in COMMANDS) {
    COMMANDS[cmd](pane, args);
  } else if (cmd === '') {
    // nothing
  } else {
    appendLine(pane, `command not found: ${cmd}. Type 'help' for available commands.`, 'output-error');
  }

  scrollToBottom(pane);
}

// ===== COMMANDS =====

function cmdHelp(pane) {
  const html = `
<div class="cmd-section">
  <div class="cmd-header">// AVAILABLE COMMANDS</div>
  <table class="help-table">
    <tr><td>help</td><td>Show this help menu</td></tr>
    <tr><td>about</td><td>About Abhishek</td></tr>
    <tr><td>experience</td><td>Work experience & internships</td></tr>
    <tr><td>projects</td><td>Featured projects</td></tr>
    <tr><td>skills</td><td>Technical skills breakdown</td></tr>
    <tr><td>education</td><td>Academic background</td></tr>
    <tr><td>honors</td><td>Awards & certifications</td></tr>
    <tr><td>contact</td><td>Contact information</td></tr>
    <tr><td>theme [name]</td><td>Switch theme (default/dracula/solarized/nord)</td></tr>
    <tr><td>neofetch</td><td>System info display</td></tr>
    <tr><td>snake</td><td>Play Snake 🐍</td></tr>
    <tr><td>clear</td><td>Clear the terminal</td></tr>
    <tr><td>exit / home</td><td>Return to portfolio</td></tr>
  </table>
  <div style="color:var(--text-dim);font-size:0.8rem;margin-top:8px">
    Tip: Use ↑↓ for history · Tab for autocomplete · Ctrl+L to clear
  </div>
</div>`;
  appendHTML(pane, html);
}

function cmdAbout(pane) {
  const html = `
<div class="cmd-section">
  <div class="cmd-header">// ABOUT</div>
  ${DATA.about.map(l => `<div class="output-line" style="color:var(--text)">${l || '&nbsp;'}</div>`).join('')}
</div>`;
  appendHTML(pane, html);
}

function cmdExperience(pane) {
  let html = `<div class="cmd-section"><div class="cmd-header">// EXPERIENCE</div>`;
  DATA.experience.forEach((e, i) => {
    html += `
<div class="cmd-row">
  <div class="cmd-title">${e.company}</div>
  <div class="cmd-subtitle">${e.role} · ${e.period}</div>
  <div class="cmd-detail" style="color:var(--text-dim)">📍 ${e.location}</div>
  <ul style="margin:6px 0 0 14px;color:var(--text);font-size:0.83rem;line-height:1.7">
    ${e.highlights.map(h => `<li>${h}</li>`).join('')}
  </ul>
</div>`;
    if (i < DATA.experience.length - 1) html += '<hr class="cmd-divider">';
  });
  html += `</div>`;
  appendHTML(pane, html);
}

function cmdProjects(pane) {
  let html = `<div class="cmd-section"><div class="cmd-header">// PROJECTS</div>`;
  DATA.projects.forEach((p, i) => {
    html += `
<div class="cmd-row">
  <div class="cmd-title">${p.name}</div>
  <div style="margin:4px 0">${p.tech.map(t => `<span class="cmd-tag">${t}</span>`).join('')}</div>
  <div class="cmd-detail">${p.desc}</div>
  <div style="margin-top:4px"><span style="color:var(--text-dim);font-size:0.78rem">→ ${p.link}</span></div>
</div>`;
    if (i < DATA.projects.length - 1) html += '<hr class="cmd-divider">';
  });
  html += `</div>`;
  appendHTML(pane, html);
}

function cmdSkills(pane) {
  let html = `<div class="cmd-section"><div class="cmd-header">// SKILLS</div>`;
  Object.entries(DATA.skills).forEach(([cat, items]) => {
    html += `
<div class="skills-group">
  <div class="skills-group-name">${cat}</div>
  <div class="skills-list">${items.join('  ·  ')}</div>
</div>`;
  });
  html += `</div>`;
  appendHTML(pane, html);
}

function cmdEducation(pane) {
  let html = `<div class="cmd-section"><div class="cmd-header">// EDUCATION</div>`;
  DATA.education.forEach(e => {
    html += `
<div class="cmd-row">
  <div class="cmd-title">${e.degree}</div>
  <div class="cmd-subtitle">${e.school} · ${e.period}</div>
  <div class="cmd-field">
    <span class="cmd-key">GPA</span>
    <span class="cmd-val">${e.gpa}</span>
  </div>
  <div class="cmd-field">
    <span class="cmd-key">Location</span>
    <span class="cmd-val">${e.location}</span>
  </div>
</div>`;
  });
  html += `</div>`;
  appendHTML(pane, html);
}

function cmdHonors(pane) {
  let html = `<div class="cmd-section"><div class="cmd-header">// HONORS & CERTIFICATIONS</div>`;
  DATA.honors.forEach((h, i) => {
    html += `
<div class="cmd-row">
  <div class="cmd-title">🏆 ${h.title}</div>
  <div class="cmd-subtitle">${h.org} · ${h.date}</div>
  <div class="cmd-detail">${h.desc}</div>
</div>`;
    if (i < DATA.honors.length - 1) html += '<hr class="cmd-divider">';
  });
  html += `</div>`;
  appendHTML(pane, html);
}

function cmdContact(pane) {
  const html = `
<div class="cmd-section">
  <div class="cmd-header">// CONTACT</div>
  <div class="cmd-field"><span class="cmd-key">Email</span><span class="cmd-val" style="color:var(--yellow)">${DATA.email}</span></div>
  <div class="cmd-field"><span class="cmd-key">LinkedIn</span><span class="cmd-val" style="color:var(--cyan)">${DATA.linkedin}</span></div>
  <div class="cmd-field"><span class="cmd-key">GitHub</span><span class="cmd-val" style="color:var(--green)">${DATA.github}</span></div>
  <div class="cmd-field"><span class="cmd-key">Location</span><span class="cmd-val">${DATA.location}</span></div>
</div>`;
  appendHTML(pane, html);
}

function cmdTheme(pane, args) {
  if (!args[0]) {
    let html = `<div class="cmd-section">
  <div class="cmd-header">// THEMES</div>
  <div class="theme-list">`;
    THEMES.forEach(t => {
      html += `
    <div class="theme-item">
      <div class="theme-swatch" style="background:${THEME_COLORS[t]}"></div>
      <span class="theme-name">${t}</span>
      ${t === currentTheme ? '<span class="theme-current">← current</span>' : ''}
    </div>`;
    });
    html += `</div><div class="cmd-detail" style="margin-top:8px">Usage: <span style="color:var(--green)">theme [name]</span></div></div>`;
    appendHTML(pane, html);
    return;
  }

  const name = args[0].toLowerCase();
  if (THEMES.includes(name)) {
    applyTheme(name);
    appendLine(pane, `Theme switched to: ${name}`, 'output-success');
  } else {
    appendLine(pane, `Unknown theme: ${name}. Options: ${THEMES.join(', ')}`, 'output-error');
  }
}

function cmdClear(pane) {
  panes[pane].outputEl.innerHTML = '';
}

function cmdWhoami(pane) {
  appendLine(pane, DATA.name, 'output-success');
}

function cmdPwd(pane) {
  appendLine(pane, '/home/abhishek/portfolio', 'output-info');
}

function cmdLs(pane) {
  const files = [
    { name: 'about/', color: 'var(--cyan)' },
    { name: 'experience/', color: 'var(--cyan)' },
    { name: 'projects/', color: 'var(--cyan)' },
    { name: 'skills/', color: 'var(--cyan)' },
    { name: 'education/', color: 'var(--cyan)' },
    { name: 'resume.pdf', color: 'var(--yellow)' },
    { name: 'README.md', color: 'var(--text)' },
  ];
  const html = `<div style="display:flex;flex-wrap:wrap;gap:16px;margin:4px 0">${files.map(f => `<span style="color:${f.color};font-weight:700">${f.name}</span>`).join('')}</div>`;
  appendHTML(pane, html);
}

function cmdDate(pane) {
  appendLine(pane, new Date().toString(), 'output-info');
}

function cmdEcho(pane, args) {
  appendLine(pane, args.join(' ') || '', 'output-line');
}

function cmdExit(pane) {
  appendLine(pane, 'Redirecting to portfolio...', 'output-warn');
  setTimeout(() => { window.location.href = 'index.html'; }, 800);
}

function cmdNeofetch(pane) {
  const html = `
<div class="cmd-section" style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start">
  <pre style="color:var(--cyan);font-size:0.72rem;line-height:1.3;flex-shrink:0">
   ___   ____
  / _ \\ |  __|
 / /_\\ \\| |__
 \\___  |____/
      \\/
  </pre>
  <div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">User</span><span class="cmd-val">${DATA.name}</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">Role</span><span class="cmd-val">Software Engineer · MS CS @ Rutgers</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">Location</span><span class="cmd-val">${DATA.location}</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">Shell</span><span class="cmd-val">terminal.html</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">Theme</span><span class="cmd-val">${currentTheme}</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">Languages</span><span class="cmd-val">Python · JS · Java · C++</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">Cloud</span><span class="cmd-val">AWS · Docker · Prometheus</span></div>
    <div class="cmd-field"><span class="cmd-key" style="color:var(--cyan)">GPA</span><span class="cmd-val">3.78 / 4.0</span></div>
    <div style="margin-top:10px;display:flex;gap:6px">
      ${['var(--red)', 'var(--yellow)', 'var(--green)', 'var(--cyan)', 'var(--pink)', 'var(--text)'].map(c => `<div style="width:20px;height:20px;background:${c};border-radius:2px"></div>`).join('')}
    </div>
  </div>
</div>`;
  appendHTML(pane, html);
}

// ===== SNAKE GAME =====
function cmdSnake(pane) {
  if (panes[pane].snakeActive) {
    appendLine(pane, 'Snake already running! Press Q to quit.', 'output-warn');
    return;
  }

  panes[pane].snakeActive = true;

  const containerId = `snake-container-${pane}`;
  const html = `
<div class="cmd-section">
  <div class="cmd-header">// SNAKE 🐍</div>
  <div id="${containerId}" class="cmd-section"></div>
  <div class="snake-controls">WASD / Arrow Keys to move · Q to quit · Score: <span id="snake-score-${pane}">0</span></div>
</div>`;
  appendHTML(pane, html);

  scrollToBottom(pane);

  const container = document.getElementById(containerId);
  const tileSize = 18;
  const cols = 22;
  const rows = 16;
  const w = cols * tileSize;
  const h = rows * tileSize;

  let snake = [{ x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }];
  let dir = { x: 1, y: 0 };
  let nextDir = { x: 1, y: 0 };
  let food = randomFood();
  let score = 0;
  let gameOver = false;
  let intervalId = null;

  const scoreEl = document.getElementById(`snake-score-${pane}`);

  // Resolve CSS variable to actual color
  function getCssVar(name) {
    return getComputedStyle(document.body).getPropertyValue(name).trim();
  }

  const snakeP5 = new p5(function(p) {
    panes[pane].snakeInstance = snakeP5;

    p.setup = function() {
      const canvas = p.createCanvas(w, h);
      canvas.parent(containerId);
      canvas.style('display', 'block');
      p.noSmooth();
      p.frameRate(8);
    };

    p.draw = function() {
      if (gameOver) return;

      const bg = getCssVar('--bg-pane') || '#0f0f1a';
      const snakeColor = getCssVar('--green') || '#39FF14';
      const foodColor = getCssVar('--pink') || '#FF4D9D';
      const borderColor = getCssVar('--border') || '#333355';
      const headColor = getCssVar('--yellow') || '#FFE44D';

      p.background(bg);

      // Grid
      p.stroke(borderColor);
      p.strokeWeight(0.3);
      for (let x = 0; x <= cols; x++) p.line(x * tileSize, 0, x * tileSize, h);
      for (let y = 0; y <= rows; y++) p.line(0, y * tileSize, w, y * tileSize);

      // Move snake
      dir = nextDir;
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      // Wall collision
      if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
        endGame(p, pane);
        return;
      }

      // Self collision
      if (snake.some(s => s.x === head.x && s.y === head.y)) {
        endGame(p, pane);
        return;
      }

      snake.unshift(head);

      // Food
      if (head.x === food.x && head.y === food.y) {
        score++;
        if (scoreEl) scoreEl.textContent = score;
        food = randomFood();
        p.frameRate(Math.min(8 + score, 18));
      } else {
        snake.pop();
      }

      // Draw snake
      snake.forEach((s, i) => {
        p.noStroke();
        p.fill(i === 0 ? headColor : snakeColor);
        p.rect(s.x * tileSize + 1, s.y * tileSize + 1, tileSize - 2, tileSize - 2, 3);
      });

      // Draw food
      p.fill(foodColor);
      p.noStroke();
      p.circle(food.x * tileSize + tileSize / 2, food.y * tileSize + tileSize / 2, tileSize - 4);
    };

    p.keyPressed = function() {
      const { keyCode } = p;
      // Arrow keys
      if (keyCode === p.UP_ARROW || keyCode === 87) { if (dir.y !== 1) nextDir = { x: 0, y: -1 }; }
      else if (keyCode === p.DOWN_ARROW || keyCode === 83) { if (dir.y !== -1) nextDir = { x: 0, y: 1 }; }
      else if (keyCode === p.LEFT_ARROW || keyCode === 65) { if (dir.x !== 1) nextDir = { x: -1, y: 0 }; }
      else if (keyCode === p.RIGHT_ARROW || keyCode === 68) { if (dir.x !== -1) nextDir = { x: 1, y: 0 }; }
      else if (keyCode === 81) { // Q
        endGame(p, pane, true);
      }
      return false; // prevent default scrolling
    };
  });

  function randomFood() {
    return { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
  }

  function endGame(p, paneName, quit = false) {
    gameOver = true;
    panes[paneName].snakeActive = false;
    p.noLoop();
    p.remove();

    if (quit) {
      appendLine(paneName, `Game quit. Final score: ${score}`, 'output-warn');
    } else {
      appendLine(paneName, `Game over! Score: ${score}. Type 'snake' to play again.`, 'output-error');
    }
    panes[paneName].inputEl.focus();
    scrollToBottom(paneName);
  }
}

// ===== OUTPUT HELPERS =====
function appendLine(pane, text, className = 'output-line') {
  const div = document.createElement('div');
  div.className = className;
  div.textContent = text;
  panes[pane].outputEl.appendChild(div);
  scrollToBottom(pane);
}

function appendHTML(pane, html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  panes[pane].outputEl.appendChild(div);
  scrollToBottom(pane);
}

function printCmd(pane, cmd) {
  const div = document.createElement('div');
  div.className = 'output-line output-cmd';
  div.innerHTML = `<span class="prompt" style="color:var(--prompt)">abhishek@portfolio:~$ </span><span style="color:var(--text)">${escapeHtml(cmd)}</span>`;
  panes[pane].outputEl.appendChild(div);
}

function scrollToBottom(pane) {
  const el = panes[pane].outputEl;
  el.scrollTop = el.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
