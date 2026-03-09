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
let portfolioViewReady = false;
let personalQuestionCount = 0;
const PERSONAL_QUESTION_LIMIT = 4;
const RESUME_URL = 'Abhishek.pdf';

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

  // Disable input until portfolio view animation completes
  setInputEnabled(false);

  // Run launch animation (typing → portfolio view), then enable input
  runPortfolioLaunchAnimation('primary');

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

  // ? for shortcuts — click to show help
  document.getElementById('hint-primary').addEventListener('click', () => {
    if (!portfolioViewReady) return;
    activePane = 'primary';
    handleCommand('primary', ['help']);
    scrollToBottom('primary');
  });
  document.getElementById('hint-secondary').addEventListener('click', () => {
    activePane = 'secondary';
    handleCommand('secondary', ['help']);
    scrollToBottom('secondary');
  });

  // Focus is set when portfolio launch animation completes
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

// ===== SUGGESTED COMMANDS (Claude-style: prompt → thinking → answer) =====
const QUICK_COMMANDS = [
  { cmd: 'about', prompt: 'Tell me about Abhishek', desc: 'Learn about me' },
  { cmd: 'experience', prompt: "What's his work experience?", desc: 'Work history' },
  { cmd: 'projects', prompt: 'Show his projects', desc: 'Featured projects' },
  { cmd: 'skills', prompt: 'What are his skills?', desc: 'Tech stack' },
  { cmd: 'contact', prompt: 'How can I contact him?', desc: 'Get in touch' },
  { cmd: 'resume', prompt: 'Download full resume', desc: 'Open resume PDF' },
  { cmd: 'snake', prompt: 'snake', desc: 'Play Snake game' },
];

// Commands that show "thinking" animation before answering (anything about Abhishek)
const AI_PERSONAL_COMMANDS = ['about', 'experience', 'exp', 'projects', 'proj', 'skills', 'education', 'edu', 'honors', 'contact'];

const THINKING_DURATION_MS = 3500;

// Satirical "model thinking" messages — poking fun at how LLMs "work"
const THINKING_MESSAGES = [
  "Consulting 47 billion parameters...",
  "Recalling that one training example from 2021...",
  "Warming up the GPUs...",
  "Calculating token probabilities...",
  "Searching for the right neurons to fire...",
  "Checking if this was in my fine-tuning data...",
  "Avoiding the phrase 'as an AI'...",
  "Loading... loading... (already loaded, just vibing)",
  "Did they mean 'experience' or 'exp'? ... going with both.",
  "Scrolling through my context window...",
  "Making this feel natural with artificial delay...",
  "Pretending to think really hard...",
  "Picking the most likely next token...",
  "Consulting the collective knowledge of the internet...",
  "Running inference on your question...",
  "Rereading my system prompt for the 47th time...",
  "Asking myself: is this a hallucination or facts? ... facts.",
  "Tokenizing your respect... I mean, request.",
];

function runSuggestion(pane, item) {
  const cmd = typeof item === 'string' ? item : item.cmd;
  const displayPrompt = typeof item === 'object' && item.prompt ? item.prompt : cmd;
  panes[pane].history.unshift(cmd);
  panes[pane].historyIndex = -1;
  printCmd(pane, displayPrompt);
  handleCommand(pane, cmd.toLowerCase().split(/\s+/));
  scrollToBottom(pane);
}

function appendThinking(pane) {
  const block = document.createElement('div');
  block.className = 'thinking-block';
  const lineEl = document.createElement('div');
  lineEl.className = 'thinking-line';
  lineEl.innerHTML = '<span class="thinking-caret">▌</span> ';
  block.appendChild(lineEl);
  panes[pane].outputEl.appendChild(block);
  scrollToBottom(pane);

  // Cycle through satirical messages
  const shuffled = [...THINKING_MESSAGES].sort(() => Math.random() - 0.5);
  const totalDuration = THINKING_DURATION_MS;
  const msgCount = Math.min(3, shuffled.length);
  const interval = totalDuration / msgCount;

  let i = 0;
  const showNext = () => {
    if (i < msgCount) {
      const msg = shuffled[i];
      lineEl.innerHTML = `<span class="thinking-caret">▌</span> <span class="thinking-msg">${escapeHtml(msg)}</span>`;
      scrollToBottom(pane);
      i++;
      if (i < msgCount) setTimeout(showNext, interval);
    }
  };
  setTimeout(showNext, 200);
}

function removeThinking(pane) {
  const block = panes[pane].outputEl.querySelector('.thinking-block');
  if (block) block.remove();
}

// ===== SATIRICAL "OUT OF CREDITS" MESSAGE (no real block — just a nudge) =====
function appendCreditsLimitMessage(pane) {
  const html = `
<div class="credits-limit-block" data-pane="${pane}">
  <div class="credits-limit-header">══════════════════════════════════════════</div>
  <div class="credits-limit-title">You've reached your free tier limit (${PERSONAL_QUESTION_LIMIT}/${PERSONAL_QUESTION_LIMIT}) and JK</div>
  <div class="credits-limit-header">══════════════════════════════════════════</div>
  <div class="credits-limit-body">
    <div class="credits-options-title">Fun options:</div>
    <div class="credits-option">• <a href="${RESUME_URL}" target="_blank" rel="noopener" class="credits-link credits-reset-link">Download Resume</a> — resets the counter as a reward 😉</div>
    <div class="credits-option">• Or run <code>resume</code> — same deal, opens PDF & resets</div>
    <div class="credits-option">• Or keep asking! No actual blocking. We're not monsters.</div>
    <div class="credits-option">• Or hire Abhishek for unlimited IRL access.</div>
  </div>
  <div class="credits-limit-footer">(No credit cards. We accept job offers. 💼)</div>
  <div class="credits-limit-header">══════════════════════════════════════════</div>
</div>`;
  appendHTML(pane, html);

  const lastBlock = panes[pane].outputEl.lastElementChild;
  const resetLink = lastBlock && lastBlock.querySelector('.credits-reset-link');
  if (resetLink) {
    resetLink.addEventListener('click', () => {
      resetCreditsLimit(pane);
      appendLine(pane, 'Credits topped off! 🎉', 'output-success');
    });
  }
}

function resetCreditsLimit(pane) {
  personalQuestionCount = 0;
}

// ===== PORTFOLIO LAUNCH ANIMATION (like `claude code` in terminal) =====
const LAUNCH_CMD = 'abhishek resume';
const TYPING_INTERVAL_MS = 60;

function setInputEnabled(enabled) {
  portfolioViewReady = enabled;
  const hintPrimary = document.getElementById('hint-primary');
  const hintSecondary = document.getElementById('hint-secondary');
  const inputPrimary = panes.primary.inputEl;
  const inputSecondary = panes.secondary.inputEl;
  const inputRow = document.querySelectorAll('.terminal-input-row');
  if (enabled) {
    inputPrimary.disabled = false;
    inputSecondary.disabled = false;
    inputRow.forEach(el => { el.style.opacity = '1'; el.style.pointerEvents = ''; });
    if (hintPrimary) hintPrimary.style.pointerEvents = '';
    if (hintSecondary) hintSecondary.style.pointerEvents = '';
  } else {
    inputPrimary.disabled = true;
    inputSecondary.disabled = true;
    inputRow.forEach(el => { el.style.opacity = '0.5'; el.style.pointerEvents = 'none'; });
    if (hintPrimary) hintPrimary.style.pointerEvents = 'none';
    if (hintSecondary) hintSecondary.style.pointerEvents = 'none';
  }
}

function runPortfolioLaunchAnimation(pane) {
  const output = panes[pane].outputEl;

  // Step 1: Show prompt line with cursor (command will type after it)
  const lineDiv = document.createElement('div');
  lineDiv.className = 'welcome-cli-line launch-line';
  lineDiv.innerHTML = `<span class="cli-prompt">abhishekjani@Mac portfolio %</span> <span class="cli-typing"></span><span class="cli-cursor">▌</span>`;
  output.appendChild(lineDiv);
  scrollToBottom(pane);

  const typingEl = lineDiv.querySelector('.cli-typing');
  const cursorEl = lineDiv.querySelector('.cli-cursor');

  let i = 0;
  const typeNext = () => {
    if (i < LAUNCH_CMD.length) {
      typingEl.textContent += LAUNCH_CMD[i];
      i++;
      scrollToBottom(pane);
      setTimeout(typeNext, TYPING_INTERVAL_MS);
    } else {
      // Remove cursor, show tip, then reveal portfolio frame
      cursorEl.remove();
      typingEl.style.color = 'var(--text)';

      const tipDiv = document.createElement('div');
      tipDiv.className = 'welcome-tip';
      tipDiv.innerHTML = 'Tip: Type <code>help</code> or press <kbd>Ctrl+H</kbd> for all commands.';
      output.appendChild(tipDiv);
      scrollToBottom(pane);

      setTimeout(() => {
        appendPortfolioFrame(pane);
        setInputEnabled(true);
        panes.primary.inputEl.focus();
      }, 400);
    }
  };
  setTimeout(typeNext, 500);
}

function appendPortfolioFrame(pane) {
  const suggestionsHtml = QUICK_COMMANDS.map(({ cmd, prompt, desc }) =>
    `<button type="button" class="cmd-suggestion" data-cmd="${escapeHtml(cmd)}" title="${escapeHtml(desc)}">${escapeHtml(prompt)}</button>`
  ).join('');

  const frameHtml = `
<div class="claude-frame claude-frame-enter">
  <div class="claude-frame-inner">
    <div class="claude-left">
      <div class="claude-title">Abhishek Jani · Portfolio v1.0</div>
      <div class="claude-greeting">Welcome back !</div>
      <pre class="claude-mascot">
    *
  ░░▓▓▓▓▓░░
  ▓▓▓▓▓▓▓▓▓
  ▓▓ ◡ ▓▓
  ░░░▓▓░░░
      </pre>
      <div class="claude-meta">MS Computer Science · Rutgers</div>
      <div class="claude-path">~/Desktop/portfolio</div>
    </div>
    <div class="claude-right">
      <div class="claude-section-title">Tips for getting started</div>
      <div class="claude-tip-text">Run <code>about</code> to learn about Abhishek, <code>projects</code> for his work, or <code>contact</code> to get in touch.</div>
      <div class="claude-section-title" style="margin-top:14px">Ask about me</div>
      <div class="cmd-suggestions">${suggestionsHtml}</div>
    </div>
  </div>
</div>`;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = frameHtml;
  panes[pane].outputEl.appendChild(wrapper.firstElementChild);
  scrollToBottom(pane);

  const output = panes[pane].outputEl;
  output.querySelectorAll('.cmd-suggestion').forEach(btn => {
    const item = QUICK_COMMANDS.find(q => q.cmd === btn.dataset.cmd);
    btn.addEventListener('click', () => runSuggestion(pane, item || btn.dataset.cmd));
  });
}

// ===== WELCOME BANNER (for split pane - skip animation, show full view) =====
function printWelcome(pane) {
  const suggestionsHtml = QUICK_COMMANDS.map(({ cmd, prompt, desc }) =>
    `<button type="button" class="cmd-suggestion" data-cmd="${escapeHtml(cmd)}" title="${escapeHtml(desc)}">${escapeHtml(prompt)}</button>`
  ).join('');

  const banner = `
<div class="welcome-cli-line">
  <span class="cli-prompt">abhishekjani@Mac portfolio %</span>
  <span class="cli-cmd">abhishek resume</span>
</div>
<div class="welcome-tip">Tip: Type <code>help</code> or press <kbd>Ctrl+H</kbd> for all commands.</div>

<div class="claude-frame">
  <div class="claude-frame-inner">
    <div class="claude-left">
      <div class="claude-title">Abhishek Jani · Portfolio v1.0</div>
      <div class="claude-greeting">Welcome back !</div>
      <pre class="claude-mascot">
    *
  ░░▓▓▓▓▓░░
  ▓▓▓▓▓▓▓▓▓
  ▓▓ ◡ ▓▓
  ░░░▓▓░░░
      </pre>
      <div class="claude-meta">MS Computer Science · Rutgers</div>
      <div class="claude-path">~/Desktop/portfolio</div>
    </div>
    <div class="claude-right">
      <div class="claude-section-title">Tips for getting started</div>
      <div class="claude-tip-text">Run <code>about</code> to learn about Abhishek, <code>projects</code> for his work, or <code>contact</code> to get in touch.</div>
      <div class="claude-section-title" style="margin-top:14px">Ask about me</div>
      <div class="cmd-suggestions">${suggestionsHtml}</div>
    </div>
  </div>
</div>`;
  appendHTML(pane, banner);

  // Attach click handlers to suggestions
  const output = panes[pane].outputEl;
  output.querySelectorAll('.cmd-suggestion').forEach(btn => {
    const item = QUICK_COMMANDS.find(q => q.cmd === btn.dataset.cmd);
    btn.addEventListener('click', () => runSuggestion(pane, item || btn.dataset.cmd));
  });
}

// ===== INPUT SETUP =====
function setupInput(pane) {
  const input = panes[pane].inputEl;

  input.addEventListener('keydown', e => {
    if (panes[pane].snakeActive) return;
    if (pane === 'primary' && !portfolioViewReady) return;

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

    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      handleCommand(pane, ['help']);
      scrollToBottom(pane);
      return;
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
  resume: cmdResume,
  exit: cmdExit,
  back: cmdExit,
  home: cmdExit,
};

function handleCommand(pane, parts) {
  const cmd = parts[0];
  const args = parts.slice(1);

  if (!(cmd in COMMANDS)) {
    if (cmd !== '') {
      appendLine(pane, `command not found: ${cmd}. Type 'help' for available commands.`, 'output-error');
    }
    scrollToBottom(pane);
    return;
  }

  const isPersonalCmd = AI_PERSONAL_COMMANDS.includes(cmd);

  if (isPersonalCmd) {
    appendThinking(pane);
    scrollToBottom(pane);
    setTimeout(() => {
      removeThinking(pane);
      COMMANDS[cmd](pane, args);
      personalQuestionCount++;
      if (personalQuestionCount >= PERSONAL_QUESTION_LIMIT) {
        appendCreditsLimitMessage(pane);
      }
      scrollToBottom(pane);
    }, THINKING_DURATION_MS);
  } else {
    COMMANDS[cmd](pane, args);
    scrollToBottom(pane);
  }
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
    <tr><td>resume</td><td>Download full resume (PDF)</td></tr>
    <tr><td>snake</td><td>Play Snake 🐍</td></tr>
    <tr><td>clear</td><td>Clear the terminal</td></tr>
    <tr><td>exit / home</td><td>Return to portfolio</td></tr>
  </table>
  <div style="color:var(--text-dim);font-size:0.8rem;margin-top:8px">
    Tip: <kbd>Ctrl+H</kbd> help · ↑↓ history · Tab autocomplete · Ctrl+L clear · Click suggestions in welcome to run
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

function cmdResume(pane) {
  window.open(RESUME_URL, '_blank', 'noopener');
  resetCreditsLimit(pane);
  const html = `
<div class="cmd-section">
  <div class="cmd-header">// RESUME</div>
  <div style="color:var(--green);margin:4px 0">Opening resume in new tab...</div>
  <div class="credits-topped-off">Credits topped off! 🎉 4 more questions unlocked. (It's a fun loop — ask away!)</div>
</div>`;
  appendHTML(pane, html);
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

  if (panes[pane].snakeInstance) {
    panes[pane].snakeInstance.remove();
    panes[pane].snakeInstance = null;
  }

  const gameId = Date.now();
  const containerId = `snake-container-${pane}-${gameId}`;
  const scoreId = `snake-score-${pane}-${gameId}`;
  const html = `
<div class="cmd-section snake-game-wrapper">
  <div class="cmd-header">// SNAKE 🐍</div>
  <div id="${containerId}" class="snake-game-container"></div>
  <div class="snake-controls">WASD / Arrow Keys to move · Q to quit · Score: <span id="${scoreId}">0</span></div>
</div>`;
  appendHTML(pane, html);

  scrollToBottom(pane);
  panes[pane].inputEl.blur();

  const container = document.getElementById(containerId);
  if (!container) { panes[pane].snakeActive = false; return; }

  const tileSize = 18;
  const cols = 22;
  const rows = 16;
  const w = cols * tileSize;
  const h = rows * tileSize;

  let snake = [{ x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }];
  let dir = { x: 1, y: 0 };
  const nextDir = { x: 1, y: 0 };
  let food = randomFood();
  let score = 0;
  let gameOver = false;
  let intervalId = null;

  const scoreEl = document.getElementById(scoreId);

  // Resolve CSS variable to actual color
  function getCssVar(name) {
    return getComputedStyle(document.body).getPropertyValue(name).trim();
  }

  function drawSnakeAndFood(p) {
    snake.forEach((s, i) => {
      p.noStroke();
      p.fill(i === 0 ? (getCssVar('--yellow') || '#FFE44D') : (getCssVar('--green') || '#39FF14'));
      p.rect(s.x * tileSize + 1, s.y * tileSize + 1, tileSize - 2, tileSize - 2, 3);
    });
    p.fill(getCssVar('--pink') || '#FF4D9D');
    p.noStroke();
    p.circle(food.x * tileSize + tileSize / 2, food.y * tileSize + tileSize / 2, tileSize - 4);
  }

  function drawGameOverOverlay(p, finalScore) {
    p.fill(0, 0, 0, 180);
    p.noStroke();
    p.rect(0, 0, w, h);
    p.fill(getCssVar('--red') || '#ff5555');
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(24);
    p.text('GAME OVER', w / 2, h / 2 - 15);
    p.textSize(14);
    p.fill(getCssVar('--text') || '#e0e0e0');
    p.text('Score: ' + finalScore, w / 2, h / 2 + 15);
  }

  const snakeP5 = new p5(function(p) {

    p.setup = function() {
      const canvas = p.createCanvas(w, h);
      canvas.parent(container);
      canvas.elt.style.display = 'block';
      canvas.elt.style.border = '2px solid ' + (getCssVar('--border') || '#333');
      canvas.elt.tabIndex = -1;
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
      p.strokeWeight(0.5);
      for (let x = 0; x <= cols; x++) p.line(x * tileSize, 0, x * tileSize, h);
      for (let y = 0; y <= rows; y++) p.line(0, y * tileSize, w, y * tileSize);

      // Move snake
      dir = { ...nextDir };
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      // Wall collision
      if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
        snake.unshift(head);
        drawSnakeAndFood(p);
        drawGameOverOverlay(p, score);
        endGame(p, pane);
        return;
      }

      // Self collision
      if (snake.some(s => s.x === head.x && s.y === head.y)) {
        snake.unshift(head);
        drawSnakeAndFood(p);
        drawGameOverOverlay(p, score);
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

      drawSnakeAndFood(p);
    };

    p.keyPressed = function() {
      const { keyCode } = p;
      if (keyCode === p.UP_ARROW || keyCode === 87) { if (dir.y !== 1) { nextDir.x = 0; nextDir.y = -1; } }
      else if (keyCode === p.DOWN_ARROW || keyCode === 83) { if (dir.y !== -1) { nextDir.x = 0; nextDir.y = 1; } }
      else if (keyCode === p.LEFT_ARROW || keyCode === 65) { if (dir.x !== 1) { nextDir.x = -1; nextDir.y = 0; } }
      else if (keyCode === p.RIGHT_ARROW || keyCode === 68) { if (dir.x !== -1) { nextDir.x = 1; nextDir.y = 0; } }
      else if (keyCode === 81) { endGame(p, pane, true); }
      return false;
    };
  });
  panes[pane].snakeInstance = snakeP5;

  // Document key listener: capture WASD/arrows when snake is active (keys go to input by default)
  function snakeKeyHandler(e) {
    if (!panes[pane].snakeActive || gameOver) return;
    const k = e.key.toLowerCase();
    if ((k === 'w' || k === 'arrowup') && dir.y !== 1) { nextDir.x = 0; nextDir.y = -1; e.preventDefault(); e.stopPropagation(); }
    else if ((k === 's' || k === 'arrowdown') && dir.y !== -1) { nextDir.x = 0; nextDir.y = 1; e.preventDefault(); e.stopPropagation(); }
    else if ((k === 'a' || k === 'arrowleft') && dir.x !== 1) { nextDir.x = -1; nextDir.y = 0; e.preventDefault(); e.stopPropagation(); }
    else if ((k === 'd' || k === 'arrowright') && dir.x !== -1) { nextDir.x = 1; nextDir.y = 0; e.preventDefault(); e.stopPropagation(); }
    else if (k === 'q') { e.preventDefault(); e.stopPropagation(); endGame(panes[pane].snakeInstance, pane, true); }
  }
  document.addEventListener('keydown', snakeKeyHandler, true);

  const _endGame = endGame;
  endGame = function(p, paneName, quit) {
    document.removeEventListener('keydown', snakeKeyHandler, true);
    _endGame(p, paneName, quit);
  };

  function randomFood() {
    return { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
  }

  function endGame(p, paneName, quit = false) {
    gameOver = true;
    panes[paneName].snakeActive = false;
    p.noLoop();
    p.keyPressed = function() { return true; };

    if (quit) {
      appendLine(paneName, `Game quit. Final score: ${score}`, 'output-warn');
    } else {
      appendLine(paneName, `Game over! Score: ${score}. Type 'snake' to play again.`, 'output-error');
    }
    scrollToBottom(paneName);
    activePane = paneName;
    panes[paneName].inputEl.focus();
    setTimeout(() => panes[paneName].inputEl.focus(), 50);
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
  div.innerHTML = `<span class="prompt" style="color:var(--prompt)">> </span><span style="color:var(--text)">${escapeHtml(cmd)}</span>`;
  panes[pane].outputEl.appendChild(div);
}

function scrollToBottom(pane) {
  const el = panes[pane].outputEl;
  el.scrollTop = el.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
