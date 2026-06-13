/* PromptUndo — main app */
const { useState, useEffect, useMemo, useRef, useDeferredValue } = React;

// ── Scroll reveal wrapper ────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '', tag = 'div' }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return; }
    const el = ref.current; if (!el) return;
    // already in view on mount?
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) { setSeen(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    // safety: never leave content stuck hidden
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
    const fallback = setTimeout(run, 2200); // never leave a number stuck at 0
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Reusable copy button (card secondary) ────────────────────────────────────
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const onClick = (e) => {
    e.stopPropagation();
    navigator.clipboard && navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <button className={'pa-btn pa-btn-ghost' + (copied ? ' is-copied' : '')} onClick={onClick}>
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

// ── Prompt card ───────────────────────────────────────────────────────────────
function PromptCard({ prompt, category, index, onOpen }) {
  const blanks = (prompt.prompt.match(/\[([A-Z0-9_ ]+)\]/g) || []);
  const count = new Set(blanks.map(b => b.replace(/[\[\]]/g, '').trim())).size;
  return (
    <Reveal delay={(index % 9) * 55}>
      <article className="pa-card" onClick={() => onOpen(prompt)}>
        <div className="pa-card-top">
          <span className="pa-cat-chip">
            <span className="pa-cat-chip-icon"><Icon name={category.id} size={15} /></span>
            {category.name}
          </span>
          <span className="pa-blanks-tag"><Icon name="brackets" size={12} /> {count}</span>
        </div>
        <h3 className="pa-card-title">{prompt.title}</h3>
        <p className="pa-card-desc">{prompt.desc}</p>
        <div className="pa-card-preview"><span className="pa-card-preview-label">PROMPT</span>{prompt.prompt}</div>
        <div className="pa-card-tags">
          {prompt.tags.slice(0, 3).map(t => <span key={t} className="pa-tag">#{t}</span>)}
        </div>
        <div className="pa-card-actions">
          <button className="pa-btn pa-btn-primary" onClick={(e) => { e.stopPropagation(); onOpen(prompt); }}>
            <Icon name="wand" size={15} /> Customize
          </button>
          <CopyButton text={prompt.prompt} />
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
            <span className="pa-pill-count">{counts[c.id] || 0}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero({ query, setQuery, total }) {
  const chips = ['Free forever', 'No login', 'Hinglish-friendly', '₹0'];
  return (
    <header className="pa-hero">
      <div className="pa-aurora"><span className="pa-aurora-a" /><span className="pa-aurora-b" /><span className="pa-aurora-c" /></div>
      <div className="pa-hero-inner">
        <div className="pa-hero-copy">
          <span className="pa-eyebrow"><Icon name="spark" size={13} /> <strong style={{ fontWeight: 700 }}>{total}+</strong>&nbsp;free prompts · no sign-up</span>
          <h1 className="pa-hero-title">
            Stop fighting with AI.<br />
            <span className="pa-hero-title-2">Just copy a prompt that works.</span>
          </h1>
          <p className="pa-hero-sub">
            A free library of fill-in-the-blank AI prompts for India’s creators and small businesses.
            Pick one, add your details, copy, paste into ChatGPT, Claude or Gemini. That’s the whole thing.
          </p>

          <div className="pa-search">
            <span className="pa-search-icon"><Icon name="search" size={20} /></span>
            <input className="pa-search-input" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search “Reel hook”, “Diwali sale”, “caption”…" />
            {query
              ? <button className="pa-search-clear" onClick={() => setQuery('')} aria-label="Clear"><Icon name="close" size={13} /></button>
              : <kbd className="pa-search-kbd">12K+</kbd>}
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

// ── Credibility strip ──────────────────────────────────────────────────────────
function Stats() {
  const items = [
    { n: 12000, s: '+', label: 'ready-to-use prompts' },
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
        <h2 className="pa-section-title">Tools we’d actually recommend</h2>
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
      <p className="pa-tools-note">Some links are affiliate links — they keep PromptUndo free forever, at no cost to you.</p>
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
          <p className="pa-footer-mission">A free, forever-open library of AI prompts for India’s creators and small businesses.</p>
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
      <div className="pa-footer-bar">© 2026 PromptUndo · Copy, fill, paste, done.</div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const { CATEGORIES, PROMPTS, TOOLS, STEPS, HINTS } = window.PA;
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [openPrompt, setOpenPrompt] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const PAGE = 60;
  const [limit, setLimit] = useState(PAGE);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const catMap = useMemo(() => { const m = {}; CATEGORIES.forEach(c => m[c.id] = c); return m; }, []);
  const counts = useMemo(() => {
    const c = { all: PROMPTS.length };
    PROMPTS.forEach(p => { c[p.cat] = (c[p.cat] || 0) + 1; });
    return c;
  }, []);

  // Build a lowercased search index ONCE (not per keystroke) so typing stays
  // smooth even across 12k+ prompts. Each entry caches what we search against.
  const searchIndex = useMemo(() => {
    const hints = HINTS || {};
    const re = /\[([A-Z0-9_ ]+)\]/g;
    return PROMPTS.map(p => {
      const title = p.title.toLowerCase();
      const tags = p.tags.join(' ').toLowerCase();
      const cat = catMap[p.cat] ? catMap[p.cat].name.toLowerCase() : '';
      // also index each blank's example hint (so "diwali" finds [FESTIVAL] prompts,
      // "hinglish" finds tone blanks, "₹499" finds price blanks, etc.)
      let hintText = '';
      const seen = new Set();
      let m; re.lastIndex = 0;
      while ((m = re.exec(p.prompt)) !== null) {
        const tok = m[1];
        if (seen.has(tok)) continue;
        seen.add(tok);
        const h = hints[tok];
        if (h && h.hint) hintText += ' ' + h.hint;
      }
      const hay = title + ' ' + p.desc.toLowerCase() + ' ' + tags + ' ' + cat + ' ' +
        p.prompt.toLowerCase() + ' ' + hintText.toLowerCase();
      return { p, title, tags, hay };
    });
  }, [catMap]);

  // Defer the heavy filter so the input never lags while you type (React keeps
  // showing the previous results until the new ones are ready).
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    // multi-word keyword search across title, description, tags, category AND the
    // full prompt text — every word must match (AND), so "diwali caption" narrows.
    const words = deferredQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const scored = [];
    for (let i = 0; i < searchIndex.length; i++) {
      const it = searchIndex[i];
      if (activeCat !== 'all' && it.p.cat !== activeCat) continue;
      if (!words.length) { scored.push({ p: it.p, s: 0 }); continue; }
      let ok = true;
      for (const w of words) { if (!it.hay.includes(w)) { ok = false; break; } }
      if (!ok) continue;
      // light relevance score: title/tag hits rank above body-only hits
      let s = 0;
      for (const w of words) { if (it.title.includes(w)) s += 3; if (it.tags.includes(w)) s += 2; }
      scored.push({ p: it.p, s });
    }
    if (words.length) scored.sort((a, b) => b.s - a.s); // best matches first
    return scored.map(x => x.p);
  }, [deferredQuery, activeCat, searchIndex]);

  // reset how many are shown whenever the result set changes
  useEffect(() => { setLimit(PAGE); }, [deferredQuery, activeCat]);
  const visible = filtered.slice(0, limit);
  const stale = query !== deferredQuery; // true for the brief moment results are catching up

  return (
    <div id="top">
      <nav className={'pa-nav' + (scrolled ? ' is-scrolled' : '')}>
        <div className="pa-nav-inner">
          <div className="pa-logo"><span className="pa-logo-mark"><Icon name="spark" size={16} /></span> PromptUndo</div>
          <div className="pa-nav-links">
            <a href="#how">How it works</a>
            <a href="#tools">Tools</a>
            <span className="pa-nav-free"><Icon name="infinity" size={13} /> Free forever</span>
          </div>
        </div>
      </nav>

      <Hero query={query} setQuery={setQuery} total={12000} />
      <Stats />
      <CategoryBar categories={CATEGORIES} counts={counts} active={activeCat} onSelect={setActiveCat} />

      <main className="pa-main">
        <div className="pa-results-bar">
          <span className="pa-results-count">
            <strong>{filtered.length}</strong> {filtered.length === 1 ? 'prompt' : 'prompts'}
            {activeCat !== 'all' && <span className="pa-results-cat"> in {catMap[activeCat].name}</span>}
            {query && <span className="pa-results-cat"> for “{query}”</span>}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="pa-empty">
            <div className="pa-empty-icon"><Icon name="search" size={26} /></div>
            <h3 className="pa-empty-title">No prompts match that yet</h3>
            <p className="pa-empty-text">Try a broader keyword — or browse all 16 categories.</p>
            <button className="pa-btn pa-btn-primary" onClick={() => { setQuery(''); setActiveCat('all'); }}>
              <Icon name="all" size={15} /> Show all prompts
            </button>
          </div>
        ) : (
          <>
            <div className="pa-grid" style={{ opacity: stale ? 0.55 : 1, transition: 'opacity .15s ease' }}>
              {visible.map((p, i) => (
                <PromptCard key={p.id} prompt={p} category={catMap[p.cat]} index={i} onOpen={setOpenPrompt} />
              ))}
            </div>
            {filtered.length > limit && (
              <div style={{ textAlign: 'center', marginTop: 28 }}>
                <button className="pa-btn pa-btn-ghost" style={{ display: 'inline-flex', flex: 'none', padding: '0 22px' }}
                  onClick={() => setLimit(l => l + PAGE)}>
                  <Icon name="layers" size={15} /> Show more ({filtered.length - limit} left)
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
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
