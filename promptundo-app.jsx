/* PromptUndo — main app */
const { useState, useEffect, useMemo, useRef, useDeferredValue } = React;

function fmtBig(n) {
  if (n >= 100000) return (n / 100000).toFixed(1).replace(/\.0$/, '') + 'L';
  if (n >= 1000) return Math.round(n / 1000) + 'K';
  return String(n);
}

// ── Scroll reveal wrapper ────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '', tag = 'div' }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return; }
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) { setSeen(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    const fallback = setTimeout(() => setSeen(true), 2000);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  const Tag = tag;
  return <Tag ref={ref} className={'reveal ' + (seen ? 'in ' : '') + className} style={{ transitionDelay: delay + 'ms' }}>{children}</Tag>;
}

// ── Count-up number ──────────────────────────────────────────────────────────
function CountUp({ end, suffix = '', dur = 1200 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(end); return; }
    const el = ref.current; if (!el) return;
    let started = false;
    const run = () => {
      if (started) return; started = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const e2 = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * e2));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) { run(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { run(); io.disconnect(); } });
    }, { threshold: 0.5 });
    io.observe(el);
    const fallback = setTimeout(run, 2200);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Copy button with ripple ──────────────────────────────────────────────────
function CopyButton({ text, onCopy, label }) {
  const [copied, setCopied] = useState(false);
  const [ripple, setRipple] = useState(false);
  const onClick = (e) => {
    e.stopPropagation();
    navigator.clipboard && navigator.clipboard.writeText(text);
    setCopied(true);
    setRipple(true);
    setTimeout(() => setRipple(false), 520);
    setTimeout(() => setCopied(false), 1400);
    onCopy && onCopy();
  };
  return (
    <button
      className={'pa-btn pa-btn-ghost pa-copy-btn' + (copied ? ' is-copied' : '') + (ripple ? ' is-rippling' : '')}
      onClick={onClick}
    >
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      {label ? (copied ? 'Copied' : label) : (copied ? 'Copied' : 'Copy')}
    </button>
  );
}

// ── AI tool options ───────────────────────────────────────────────────────────
const AI_TOOLS = [
  { name: 'ChatGPT',    url: 'https://chatgpt.com/',              color: '#10A37F', sym: 'G' },
  { name: 'Claude',     url: 'https://claude.ai/',                color: '#D97706', sym: 'C' },
  { name: 'Gemini',     url: 'https://gemini.google.com/',        color: '#4285F4', sym: '✦' },
  { name: 'Grok',       url: 'https://x.com/i/grok',             color: '#9333EA', sym: 'X' },
  { name: 'Perplexity', url: 'https://www.perplexity.ai/',        color: '#20B2AA', sym: 'P' },
  { name: 'Copilot',    url: 'https://copilot.microsoft.com/',    color: '#0078D4', sym: 'M' },
];

// ── Prompt card ───────────────────────────────────────────────────────────────
function PromptCard({ prompt, category, index, onOpen, isSaved, onSave, onCopy }) {
  const blanks = (prompt.prompt.match(/\[([A-Z0-9_ ]+)\]/g) || []);
  const count = new Set(blanks.map(b => b.replace(/[\[\]]/g, '').trim())).size;
  const wordCount = prompt.prompt.trim().split(/\s+/).length;
  const [showAI, setShowAI] = useState(false);
  const aiRef = useRef(null);

  useEffect(() => {
    if (!showAI) return;
    function onOut(e) { if (aiRef.current && !aiRef.current.contains(e.target)) setShowAI(false); }
    document.addEventListener('mousedown', onOut);
    return () => document.removeEventListener('mousedown', onOut);
  }, [showAI]);

  function launchAI(url, name) {
    navigator.clipboard?.writeText(prompt.prompt);
    window.open(url, '_blank', 'noopener,noreferrer');
    onCopy && onCopy('Copied! Paste in ' + name + ' ↗');
    setShowAI(false);
  }

  return (
    <Reveal delay={(index % 9) * 55}>
      <article className="pa-card" onClick={() => onOpen(prompt)}>
        <div className="pa-card-top">
          <span className="pa-cat-chip">
            <span className="pa-cat-chip-icon"><Icon name={category.id} size={15} /></span>
            {category.name}
          </span>
          <div className="pa-card-top-right">
            <span className="pa-blanks-tag"><Icon name="brackets" size={12} /> {count}</span>
            <button
              className={'pa-save-btn' + (isSaved ? ' is-saved' : '')}
              onClick={e => { e.stopPropagation(); onSave(prompt); }}
              title={isSaved ? 'Remove from saved' : 'Save prompt'}
              aria-label={isSaved ? 'Unsave' : 'Save'}
            >
              {isSaved ? '♥' : '♡'}
            </button>
          </div>
        </div>
        <h3 className="pa-card-title">{prompt.title}</h3>
        <p className="pa-card-desc">{prompt.desc}</p>
        <div className="pa-card-preview">
          <span className="pa-card-preview-label">PROMPT</span>
          {prompt.prompt}
        </div>
        <div className="pa-card-footer">
          <div className="pa-card-tags">
            {prompt.tags.slice(0, 3).map(t => <span key={t} className="pa-tag">#{t}</span>)}
          </div>
          <span className="pa-word-count">{wordCount}w</span>
        </div>
        <div className="pa-card-actions">
          <button className="pa-btn pa-btn-primary" onClick={e => { e.stopPropagation(); onOpen(prompt); }}>
            <Icon name="wand" size={15} /> Customize
          </button>
          <CopyButton text={prompt.prompt} onCopy={() => onCopy && onCopy('Prompt copied ✓')} />
          <div className="pa-ai-wrap" ref={aiRef} onClick={e => e.stopPropagation()}>
            <button
              className={'pa-btn pa-ai-btn' + (showAI ? ' is-open' : '')}
              onClick={() => setShowAI(v => !v)}
              title="Try in an AI tool"
            >
              {'✦ Try AI'} <span className="pa-ai-chevron">{'▾'}</span>
            </button>
            {showAI && (
              <div className="pa-ai-dropdown">
                {AI_TOOLS.map(t => (
                  <button key={t.name} className="pa-ai-option" onClick={() => launchAI(t.url, t.name)}>
                    <span className="pa-ai-dot" style={{ background: t.color + '22', color: t.color }}>
                      {t.sym}
                    </span>
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// ── Category pills (sticky) ───────────────────────────────────────────────────
function CategoryBar({ categories, counts, active, onSelect }) {
  return (
    <div className="pa-catbar">
      <div className="pa-catbar-inner">
        {categories.map(c => (
          <button key={c.id} className={'pa-pill' + (active === c.id ? ' is-active' : '')} onClick={() => onSelect(c.id)}>
            <Icon name={c.id} size={15} className="pa-pill-icon" />
            <span>{c.name}</span>
            <span className="pa-pill-count">{fmtBig(counts[c.id] || 0)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero({ query, setQuery, totalLabel, categories, activeCat, onSetCat, searchRef, onSearchKey }) {
  const chips = ['Free forever', 'No login', 'Hinglish-friendly', '₹0'];
  return (
    <header className="pa-hero">
      <div className="pa-aurora"><span className="pa-aurora-a" /><span className="pa-aurora-b" /><span className="pa-aurora-c" /></div>
      <div className="pa-hero-inner">
        <div className="pa-hero-copy">
          <span className="pa-eyebrow">
            <Icon name="spark" size={13} /> <strong style={{ fontWeight: 700 }}>{totalLabel}+</strong>&nbsp;free prompts &middot; no sign-up
          </span>
          <h1 className="pa-hero-title">
            Stop fighting with AI.<br />
            <span className="pa-hero-title-2">Just copy a prompt that works.</span>
          </h1>
          <p className="pa-hero-sub">
            A free library of fill-in-the-blank AI prompts for India&apos;s creators and small businesses.
            Pick one, add your details, copy, paste into ChatGPT, Claude or Gemini. That&apos;s the whole thing.
          </p>

          <div className="pa-search">
            <span className="pa-search-icon"><Icon name="search" size={20} /></span>
            <input
              ref={searchRef}
              className="pa-search-input"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={onSearchKey}
              placeholder='Search "Reel hook", "Diwali sale", "caption"...'
              aria-label="Search prompts"
            />
            {query
              ? <button className="pa-search-clear" onClick={() => setQuery('')} aria-label="Clear search"><Icon name="close" size={13} /></button>
              : <kbd className="pa-search-kbd">/ to search</kbd>}
          </div>

          <div className="pa-quick-cats" role="group" aria-label="Quick category filter">
            <button
              className={'pa-quick-cat' + (activeCat === 'all' ? ' is-active' : '')}
              onClick={() => onSetCat('all')}
            >
              All
            </button>
            {categories.filter(c => c.id !== 'all').map(c => (
              <button
                key={c.id}
                className={'pa-quick-cat' + (activeCat === c.id ? ' is-active' : '')}
                onClick={() => onSetCat(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="pa-trust">
            {chips.map((c, i) => (
              <span key={c} className="pa-trust-chip"><Icon name={TRUST_ICON[i]} size={14} />{c}</span>
            ))}
          </div>
        </div>

        <div className="pa-hero-demo"><HeroDemo /></div>
      </div>
    </header>
  );
}

// ── Stats strip ────────────────────────────────────────────────────────────────
function Stats() {
  const items = [
    { n: window.PA.VIRTUAL_TOTAL, s: '+', label: 'ready-to-use prompts' },
    { n: 16, s: '', label: 'creator categories' },
    { n: 0, s: '', label: 'logins or sign-ups' },
    { n: 0, s: '', label: 'rupees, forever', prefix: '₹' },
  ];
  return (
    <Reveal>
      <div className="pa-stats">
        {items.map((it, i) => (
          <div className="pa-stat" key={i}>
            <span className="pa-stat-n">{it.prefix || ''}<CountUp end={it.n} suffix={it.s} /></span>
            <span className="pa-stat-l">{it.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

// ── How it works ────────────────────────────────────────────────────────────────
function HowItWorks({ steps }) {
  return (
    <section className="pa-section pa-section-tint" id="how">
      <Reveal><div className="pa-section-head">
        <span className="pa-kicker">The flow</span>
        <h2 className="pa-section-title">From blank page to posted in four steps</h2>
        <p className="pa-section-sub">No prompt-engineering degree required.</p>
      </div></Reveal>
      <div className="pa-steps">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="pa-step">
              <div className="pa-step-num">0{i + 1}</div>
              <div className="pa-step-icon"><Icon name={STEP_ICON[i]} size={22} /></div>
              <h3 className="pa-step-title">{s.title}</h3>
              <p className="pa-step-text">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Tools ─────────────────────────────────────────────────────────────────────
function Tools({ tools }) {
  return (
    <section className="pa-section" id="tools">
      <Reveal><div className="pa-section-head">
        <span className="pa-kicker">The kit</span>
        <h2 className="pa-section-title">Tools we&apos;d actually recommend</h2>
        <p className="pa-section-sub">Everything you need to make, sell, and grow.</p>
      </div></Reveal>
      <div className="pa-tools">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 70}>
            <a className="pa-tool" href={t.url} target="_blank" rel="noopener noreferrer">
              <div className="pa-tool-icon"><Icon name={TOOL_ICON[t.name] || 'spark'} size={22} /></div>
              <div className="pa-tool-main">
                <div className="pa-tool-top">
                  <span className="pa-tool-name">{t.name}</span>
                  <span className="pa-tool-badge">{t.badge}</span>
                </div>
                <p className="pa-tool-blurb">{t.blurb}</p>
              </div>
              <span className="pa-tool-arrow"><Icon name="arrowUpRight" size={16} /></span>
            </a>
          </Reveal>
        ))}
      </div>
      <p className="pa-tools-note">Some links are affiliate links &mdash; they keep PromptUndo free forever, at no cost to you.</p>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="pa-footer">
      <div className="pa-footer-inner">
        <div className="pa-footer-brand">
          <div className="pa-logo"><span className="pa-logo-mark"><Icon name="spark" size={16} /></span> PromptUndo</div>
          <p className="pa-footer-mission">A free, forever-open library of AI prompts for India&apos;s creators and small businesses.</p>
        </div>
        <div className="pa-footer-col">
          <span className="pa-footer-h">Explore</span>
          <a href="#top">All prompts</a>
          <a href="#how">How it works</a>
          <a href="#tools">Tools</a>
        </div>
        <div className="pa-footer-col">
          <span className="pa-footer-h">The promise</span>
          <span className="pa-footer-promise"><Icon name="infinity" size={15} /> Free forever</span>
          <span className="pa-footer-promise"><Icon name="shield" size={15} /> No sign-up, no email wall</span>
          <span className="pa-footer-promise"><TriFlag w={17} /> Made in India</span>
        </div>
      </div>
      <div className="pa-footer-bar">&copy; 2026 PromptUndo &middot; Copy, fill, paste, done.</div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const pa = window.PA || {};
  const CATEGORIES = pa.CATEGORIES || [];
  const PROMPTS = pa.PROMPTS || [];
  const BLUEPRINTS = pa.BLUEPRINTS || [];
  const NICHES = pa.NICHES || [];
  const HINTS = pa.HINTS || {};
  const TOOLS = pa.TOOLS || [];
  const STEPS = pa.STEPS || [];
  const VIRTUAL_TOTAL = pa.VIRTUAL_TOTAL || PROMPTS.length;

  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [openPrompt, setOpenPrompt] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const PAGE = 60;
  const [limit, setLimit] = useState(PAGE);

  // ── Dark mode ─────────────────────────────────────────────────────────────
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem('pa_theme');
      if (s) return s === 'dark';
    } catch(e) {}
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    try { localStorage.setItem('pa_theme', dark ? 'dark' : 'light'); } catch(e) {}
  }, [dark]);

  // ── Saved prompts ─────────────────────────────────────────────────────────
  const [savedPrompts, setSavedPrompts] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pa_saved') || '[]'); } catch(e) { return []; }
  });
  const savedIds = useMemo(() => new Set(savedPrompts.map(p => p.id)), [savedPrompts]);
  const [showSaved, setShowSaved] = useState(false);

  function toggleSave(prompt) {
    setSavedPrompts(prev => {
      const exists = prev.some(p => p.id === prompt.id);
      const next = exists
        ? prev.filter(p => p.id !== prompt.id)
        : [...prev, { id: prompt.id, title: prompt.title, desc: prompt.desc, prompt: prompt.prompt, tags: prompt.tags, cat: prompt.cat }];
      try { localStorage.setItem('pa_saved', JSON.stringify(next)); } catch(e) {}
      return next;
    });
  }

  // ── Toast ─────────────────────────────────────────────────────────────────
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);
  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2200);
  }

  // ── Refs for scroll + search ──────────────────────────────────────────────
  const resultsRef = useRef(null);
  const searchInputRef = useRef(null);

  function onSearchKey(e) {
    if (e.key === 'Enter') {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (e.key === 'Escape') setQuery('');
  }

  // / key to focus search
  useEffect(() => {
    function onKey(e) {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ── Donation state ────────────────────────────────────────────────────────
  const TIP_UPI = 'vaibhavvarunmr@okicici';
  const TIP_PHONE = '9745340983';
  const TIP_PRESETS = [10, 20, 30];
  const [tipPhase, setTipPhase] = useState('idle');
  const [tipSel, setTipSel] = useState(20);
  const [tipCustom, setTipCustom] = useState('');
  const [tipCoins, setTipCoins] = useState([]);
  const [tipCopied, setTipCopied] = useState('');
  const tipAmount = tipCustom ? (parseInt(tipCustom, 10) || 0) : tipSel;

  function makeTipCoins() {
    return Array.from({ length: 34 }, (_, i) => ({
      id: i,
      x: 2 + Math.random() * 94,
      size: 36 + Math.random() * 28,
      dur: 1.5 + Math.random() * 1.8,
      delay: Math.random() * 2.4,
      r: (Math.random() > 0.5 ? 1 : -1) * (280 + Math.random() * 440),
      drift: (Math.random() - 0.5) * 130,
      type: Math.random() > 0.72 ? 'star' : 'coin',
    }));
  }

  function tipPay() {
    if (tipAmount < 1) return;
    try { localStorage.setItem('pa_tip', JSON.stringify({ amt: tipAmount, ts: Date.now() })); } catch(e) {}
    window.location.href = 'upi://pay?pa=' + TIP_UPI + '&pn=PromptUndo&am=' + tipAmount + '&cu=INR&tn=Tip%20for%20PromptUndo';
  }

  function tipCopyText(text, key) {
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setTipCopied(key);
    setTimeout(() => setTipCopied(''), 1800);
  }

  const totalLabel = fmtBig(VIRTUAL_TOTAL);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function checkReturn() {
      if (document.visibilityState !== 'visible') return;
      let raw;
      try { raw = localStorage.getItem('pa_tip'); } catch(e) { return; }
      if (!raw) return;
      try {
        const { amt, ts } = JSON.parse(raw);
        localStorage.removeItem('pa_tip');
        if (Date.now() - ts < 600000) {
          setTipSel(amt);
          setTipCoins(makeTipCoins());
          setTipPhase('celebrate');
        }
      } catch(e) { try { localStorage.removeItem('pa_tip'); } catch(e2) {} }
    }
    checkReturn();
    document.addEventListener('visibilitychange', checkReturn);
    return () => document.removeEventListener('visibilitychange', checkReturn);
  }, []);

  const catMap = useMemo(() => { const m = {}; CATEGORIES.forEach(c => m[c.id] = c); return m; }, []);

  const counts = useMemo(() => {
    const bpPerCat = {};
    BLUEPRINTS.forEach(bp => { bpPerCat[bp.cat] = (bpPerCat[bp.cat] || 0) + 1; });
    const c = { all: VIRTUAL_TOTAL };
    PROMPTS.forEach(p => { c[p.cat] = (c[p.cat] || 0) + 1; });
    CATEGORIES.forEach(cat => {
      if (cat.id === 'all') return;
      c[cat.id] = (c[cat.id] || 0) + (bpPerCat[cat.id] || 0) * NICHES.length;
    });
    return c;
  }, []);

  const authoredIndex = useMemo(() => {
    const hints = HINTS || {};
    const re = /\[([A-Z0-9_ ]+)\]/g;
    return PROMPTS.map(p => {
      const title = p.title.toLowerCase();
      const tags = p.tags.join(' ').toLowerCase();
      let hintText = '';
      const seen = new Set();
      let m; re.lastIndex = 0;
      while ((m = re.exec(p.prompt)) !== null) {
        const tok = m[1];
        if (seen.has(tok)) continue; seen.add(tok);
        const h = hints[tok];
        if (h && h.hint) hintText += ' ' + h.hint;
      }
      const hay = title + ' ' + p.desc.toLowerCase() + ' ' + tags + ' ' +
        p.prompt.toLowerCase() + ' ' + hintText.toLowerCase();
      return { p, title, tags, hay };
    });
  }, []);

  const bpIndex = useMemo(() => BLUEPRINTS.map(bp => ({
    bp,
    hay: (bp.title + ' ' + bp.desc + ' ' + bp.body + ' ' + bp.tags.join(' ')).toLowerCase(),
    title: bp.title.toLowerCase(),
    tags: bp.tags.join(' ').toLowerCase(),
  })), []);

  const deferredQuery = useDeferredValue(query);

  const { authoredFiltered, matchedBPs, effectiveNiches } = useMemo(() => {
    const words = deferredQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);

    const af = [];
    for (const it of authoredIndex) {
      if (activeCat !== 'all' && it.p.cat !== activeCat) continue;
      if (!words.length) { af.push({ p: it.p, s: 0 }); continue; }
      let ok = true;
      for (const w of words) { if (!it.hay.includes(w)) { ok = false; break; } }
      if (!ok) continue;
      let s = 0;
      for (const w of words) { if (it.title.includes(w)) s += 3; if (it.tags.includes(w)) s += 2; }
      af.push({ p: it.p, s });
    }
    if (words.length) af.sort((a, b) => b.s - a.s);

    const bps = [];
    for (const it of bpIndex) {
      if (activeCat !== 'all' && it.bp.cat !== activeCat) continue;
      if (!words.length) { bps.push(it.bp); continue; }
      let ok = true;
      for (const w of words) { if (!it.hay.includes(w)) { ok = false; break; } }
      if (ok) bps.push(it.bp);
    }

    let effectiveNiches;
    if (!words.length) {
      effectiveNiches = NICHES;
    } else {
      const hits = NICHES.filter(n => words.some(w =>
        n[1].toLowerCase().includes(w) || n[2].toLowerCase().includes(w)
      ));
      effectiveNiches = hits.length > 0 ? hits : NICHES;
    }

    return { authoredFiltered: af, matchedBPs: bps, effectiveNiches };
  }, [deferredQuery, activeCat, authoredIndex, bpIndex]);

  useEffect(() => { setLimit(PAGE); }, [deferredQuery, activeCat]);

  const totalFiltered = authoredFiltered.length + matchedBPs.length * effectiveNiches.length;
  const stale = query !== deferredQuery;

  const visible = useMemo(() => {
    const result = [];
    for (const { p } of authoredFiltered) {
      if (result.length >= limit) break;
      result.push(p);
    }
    let remaining = limit - result.length;
    let done = false;
    for (let bi = 0; bi < matchedBPs.length && !done; bi++) {
      const bp = matchedBPs[bi];
      for (let ni = 0; ni < effectiveNiches.length && !done; ni++) {
        const n = effectiveNiches[ni];
        if (remaining <= 0) { done = true; break; }
        result.push({
          id: 'vbp-' + bp.id + '-' + n[0],
          cat: bp.cat,
          title: bp.title + ' — ' + n[1],
          desc: bp.desc.replace(/\{NAME\}/g, n[1]).replace(/\{LABEL\}/g, n[2]).replace(/\{AUD\}/g, n[3]),
          prompt: bp.body.replace(/\{NAME\}/g, n[1]).replace(/\{LABEL\}/g, n[2]).replace(/\{AUD\}/g, n[3]),
          tags: bp.tags.concat([n[0]]),
        });
        remaining--;
      }
    }
    return result;
  }, [authoredFiltered, matchedBPs, effectiveNiches, limit]);

  // Saved view filter
  const savedVisible = showSaved ? savedPrompts.filter(p => {
    if (activeCat !== 'all' && p.cat !== activeCat) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q) || (p.tags || []).some(t => t.toLowerCase().includes(q));
  }) : null;

  const displayPrompts = savedVisible !== null ? savedVisible : visible;
  const displayTotal = savedVisible !== null ? savedVisible.length : totalFiltered;

  function switchCat(id) {
    setActiveCat(id);
    setShowSaved(false);
  }

  return (
    <div id="top">
      <nav className={'pa-nav' + (scrolled ? ' is-scrolled' : '')}>
        <div className="pa-nav-inner">
          <div className="pa-logo">
            <span className="pa-logo-mark"><Icon name="spark" size={16} /></span> PromptUndo
          </div>
          <div className="pa-nav-links">
            <a href="#how">How it works</a>
            <a href="#tools">Tools</a>
            {savedPrompts.length > 0 && (
              <button
                className={'pa-nav-saved' + (showSaved ? ' is-active' : '')}
                onClick={() => {
                  const next = !showSaved;
                  setShowSaved(next);
                  if (next) setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                }}
              >
                {'♥ Saved ' + savedPrompts.length}
              </button>
            )}
            <button
              className="pa-dark-btn"
              onClick={() => setDark(v => !v)}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={dark ? 'Light mode' : 'Dark mode'}
            >
              {dark ? '☀' : '☽'}
            </button>
            <button className="tip-nav-btn" onClick={() => setTipPhase('open')}>
              {'❤️ Donate'}
            </button>
            <span className="pa-nav-free"><Icon name="infinity" size={13} /> Free forever</span>
          </div>
        </div>
      </nav>

      <Hero
        query={query}
        setQuery={setQuery}
        totalLabel={totalLabel}
        categories={CATEGORIES}
        activeCat={activeCat}
        onSetCat={switchCat}
        searchRef={searchInputRef}
        onSearchKey={onSearchKey}
      />
      <Stats />
      <CategoryBar categories={CATEGORIES} counts={counts} active={activeCat} onSelect={switchCat} />

      <main className="pa-main" ref={resultsRef}>
        <div className="pa-results-bar">
          {showSaved && (
            <button className="pa-back-btn" onClick={() => setShowSaved(false)}>
              {'← All prompts'}
            </button>
          )}
          <span className="pa-results-count">
            <strong>{displayTotal > 9999 ? fmtBig(displayTotal) + '+' : displayTotal}</strong>
            {' '}{displayTotal === 1 ? 'prompt' : 'prompts'}
            {showSaved && ' saved'}
            {!showSaved && activeCat !== 'all' && <span className="pa-results-cat"> in {catMap[activeCat] && catMap[activeCat].name}</span>}
            {query && <span className="pa-results-cat"> for &ldquo;{query}&rdquo;</span>}
          </span>
        </div>

        {displayTotal === 0 ? (
          <div className="pa-empty">
            <div className="pa-empty-icon"><Icon name="search" size={26} /></div>
            <h3 className="pa-empty-title">{showSaved ? 'No saved prompts match' : 'No prompts match that yet'}</h3>
            <p className="pa-empty-text">{showSaved ? 'Try a broader search or clear category filter.' : 'Try a broader keyword — or browse all 16 categories.'}</p>
            <button className="pa-btn pa-btn-primary" onClick={() => { setQuery(''); setActiveCat('all'); setShowSaved(false); }}>
              <Icon name="all" size={15} /> {showSaved ? 'Show all saved' : 'Show all prompts'}
            </button>
          </div>
        ) : (
          <>
            <div className="pa-grid" style={{ opacity: stale ? 0.55 : 1, transition: 'opacity .15s ease' }}>
              {displayPrompts.map((p, i) => (
                <PromptCard
                  key={p.id}
                  prompt={p}
                  category={catMap[p.cat] || CATEGORIES[0]}
                  index={i}
                  onOpen={setOpenPrompt}
                  isSaved={savedIds.has(p.id)}
                  onSave={toggleSave}
                  onCopy={showToast}
                />
              ))}
            </div>
            {!showSaved && displayTotal > limit && (
              <div style={{ textAlign: 'center', marginTop: 28 }}>
                <button
                  className="pa-btn pa-btn-ghost"
                  style={{ display: 'inline-flex', flex: 'none', padding: '0 22px' }}
                  onClick={() => setLimit(l => l + PAGE)}
                >
                  <Icon name="layers" size={15} /> Show more
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <HowItWorks steps={STEPS} />
      <Tools tools={TOOLS} />
      <Footer />

      {openPrompt && (
        <CustomizeModal prompt={openPrompt} category={catMap[openPrompt.cat]} onClose={() => setOpenPrompt(null)} />
      )}

      {/* ── Donation modal ───────────────────────────────────────────── */}
      {tipPhase === 'open' && (
        <div className="tip-backdrop" onClick={() => setTipPhase('idle')}>
          <div className="tip-card" onClick={e => e.stopPropagation()}>
            <button className="tip-close" onClick={() => setTipPhase('idle')}>{'✕'}</button>
            <div className="tip-header">
              <span className="tip-emoji">{'☕'}</span>
              <h2>{'Buy me a chai'}</h2>
              <p>{'PromptUndo is free forever. If it saved you time, a small tip keeps it alive!'}</p>
            </div>
            <p className="tip-pick-label">{'Pick an amount'}</p>
            <div className="tip-amounts">
              {TIP_PRESETS.map(p => (
                <button key={p}
                  className={'tip-amount-btn' + (tipSel === p && !tipCustom ? ' is-active' : '')}
                  onClick={() => { setTipSel(p); setTipCustom(''); }}>
                  {'₹'}{p}
                </button>
              ))}
            </div>
            <div className="tip-custom">
              <span className="tip-rupee">{'₹'}</span>
              <input className="tip-custom-input" type="number" min="1" step="1"
                placeholder="Custom amount" value={tipCustom}
                onChange={e => setTipCustom(e.target.value.replace(/\D/g, ''))} />
            </div>
            <button className="tip-pay-btn" onClick={tipPay} disabled={tipAmount < 1}>
              {'🎉 Buy Happiness — ₹'}{tipAmount || '—'}
            </button>
            <div className="tip-upi-row">
              <div className="tip-upi-box">
                <span className="tip-upi-label">{'UPI ID'}</span>
                <span className="tip-upi-value">{TIP_UPI}</span>
                <button className="tip-copy-btn" onClick={() => tipCopyText(TIP_UPI, 'upi')}>
                  {tipCopied === 'upi' ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <div className="tip-upi-box">
                <span className="tip-upi-label">{'GPay / PhonePe'}</span>
                <span className="tip-upi-value">{TIP_PHONE}</span>
                <button className="tip-copy-btn" onClick={() => tipCopyText(TIP_PHONE, 'phone')}>
                  {tipCopied === 'phone' ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <p className="tip-fine">{'Tap the button → UPI opens → pay → come back here for a surprise 🎊'}</p>
          </div>
        </div>
      )}

      {/* ── Coin celebration ──────────────────────────────────────────── */}
      {tipPhase === 'celebrate' && (
        <div className="tip-celebration" onClick={() => setTipPhase('idle')}>
          {tipCoins.map(c => (
            <span key={c.id}
              className={'tip-particle' + (c.type === 'star' ? ' is-star' : '')}
              style={{
                left: c.x + '%',
                '--size': c.size + 'px',
                '--dur': c.dur + 's',
                '--delay': c.delay + 's',
                '--r': c.r + 'deg',
                '--drift': c.drift + 'px',
              }}>
              {c.type === 'star' ? '✦' : '₹'}
            </span>
          ))}
          <div className="tip-thankyou">
            <span className="tip-big-heart">{'❤️'}</span>
            <h2>{"You're incredible!"}</h2>
            <p className="tip-sent">{'₹'}{tipAmount}{' received · Thank you 🙏'}</p>
            <p className="tip-sub-msg">{'This keeps PromptUndo free for everyone in India'}</p>
            <button className="tip-dismiss" onClick={e => { e.stopPropagation(); setTipPhase('idle'); }}>
              {'Keep exploring prompts →'}
            </button>
          </div>
        </div>
      )}

      {/* ── Toast notification ────────────────────────────────────────── */}
      {toast && <div className="pa-toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
