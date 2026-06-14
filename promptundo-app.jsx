/* PromptUndo — main app  */
const { useState, useEffect, useMemo, useRef, useDeferredValue } = React;

// ── XP System ─────────────────────────────────────────────────────────────────
const XP_CONFIG = {
  copy: 10,
  save: 5,
  customize: 15,
  donate: 50,
  levelUp: 100,
};

const LEVEL_THRESHOLDS = [0, 100, 250, 450, 700, 1000, 1350, 1750, 2200, 2700];
const LEVEL_EMOJIS = ['🌱', '🌿', '🍀', '🌾', '🌳', '🌲', '🏆', '⭐', '✨', '🚀'];

function getLevelFromXP(xp) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i;
  }
  return 0;
}

function getXPForLevel(level) {
  return LEVEL_THRESHOLDS[Math.min(level, LEVEL_THRESHOLDS.length - 1)] || 0;
}

function getNextLevelXP(level) {
  return LEVEL_THRESHOLDS[Math.min(level + 1, LEVEL_THRESHOLDS.length - 1)] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmtBig(n) {
  if (n >= 100000) return (n / 100000).toFixed(1).replace(/\.0$/, '') + 'L';
  if (n >= 1000) return Math.round(n / 1000) + 'K';
  return String(n);
}

function seededHash(str) {
  let h = 0;
  const s = String(str);
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h) % 100;
}

function loadStreak() {
  try {
    const today = new Date().toDateString();
    const last = localStorage.getItem('pa_sday');
    const cnt = parseInt(localStorage.getItem('pa_scnt') || '0', 10);
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const next = last === today ? cnt : last === yesterday ? cnt + 1 : 1;
    if (last !== today) {
      localStorage.setItem('pa_sday', today);
      localStorage.setItem('pa_scnt', String(next));
    }
    return next;
  } catch(e) { return 1; }
}

// ── Static data ───────────────────────────────────────────────────────────────
const AI_TOOLS = [
  { name: 'ChatGPT',    urlQ: 'https://chatgpt.com/?q=',              color: '#10A37F', sym: 'G' },
  { name: 'Claude',     urlQ: 'https://claude.ai/new?q=',             color: '#D97706', sym: 'C' },
  { name: 'Gemini',     urlQ: 'https://gemini.google.com/app?q=',     color: '#4285F4', sym: '✦' },
  { name: 'Grok',       urlQ: 'https://x.com/i/grok?text=',           color: '#9333EA', sym: 'X' },
  { name: 'Perplexity', urlQ: 'https://www.perplexity.ai/?q=',        color: '#20B2AA', sym: 'P' },
  { name: 'Copilot',    urlQ: 'https://copilot.microsoft.com/?q=',    color: '#0078D4', sym: 'M' },
];

const PACKS = [
  { id: 'reel-hooks',  name: 'Reel Hook Starter',     emoji: '🎯', desc: 'Stop-the-scroll openers for Reels & Shorts', query: 'hook reel',            cat: 'all', free: true,  count: 12, color: '#FF6B6B' },
  { id: 'festival',    name: 'Festival Campaign Kit',  emoji: '🪔', desc: 'Diwali, Holi, Eid, Christmas campaigns',      query: 'festival diwali holi', cat: 'all', free: true,  count: 18, color: '#F59E0B' },
  { id: 'starter',     name: 'First Post Starter',     emoji: '🌱', desc: 'For beginners — fill & post in 2 min',        query: 'caption beginner',     cat: 'all', free: true,  count: 8,  color: '#10B981' },
  { id: 'dtc-ads',     name: 'D2C Ads Masterkit',      emoji: '💰', desc: 'High-converting ad copies for Indian D2C',    query: 'ad sales product',     cat: 'all', free: false, price: 99,  count: 25, color: '#8B5CF6' },
  { id: 'freelancer',  name: 'Freelancer Client Pack', emoji: '💼', desc: 'Win clients, proposals, handle objections',   query: 'client proposal email', cat: 'all', free: false, price: 99,  count: 20, color: '#3B82F6' },
  { id: 'wedding',     name: 'Wedding Planner Pro',    emoji: '💍', desc: 'Captions, ads, pitches for wedding biz',      query: 'wedding event',        cat: 'all', free: false, price: 149, count: 30, color: '#EC4899' },
];

const SPONSORED_SLOT = {
  id: '__sponsored_1__',
  cat: 'ads',
  title: 'Design your post in 30 seconds with Canva AI',
  desc: 'Turn any prompt into a ready-to-post design. Sponsored by Canva.',
  prompt: 'Create a professional social media post for [BRAND NAME] about [TOPIC]. Make it visually appealing with [COLOR THEME] and include a clear call-to-action for [GOAL].',
  tags: ['design', 'social', 'canva'],
  isSponsored: true,
  sponsorName: 'Canva',
  sponsorUrl: 'https://canva.com',
  sponsorCta: 'Try Canva Free →',
};

// ── XP Bar Component ─────────────────────────────────────────────────────────
function XPBar({ xp, level }) {
  const nextLevelXP = getNextLevelXP(level);
  const currentLevelXP = getXPForLevel(level);
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  return (
    <div className="pa-xp-bar">
      <div className="pa-xp-fill" style={{ width: progress + '%' }} />
    </div>
  );
}

// ── XP Pop Animation Component ────────────────────────────────────────────────
function XPPop({ x, y, amount, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 800);
    return () => clearTimeout(timer);
  }, [onDone]);
  return <div className="pa-xp-pop" style={{ left: x + 'px', top: y + 'px' }}>{'+' + amount + ' XP'}</div>;
}

// ── Level Up Celebration ──────────────────────────────────────────────────────
function LevelUpCelebration({ level, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 2800);
    return () => clearTimeout(timer);
  }, [onDismiss]);
  return (
    <div className="pa-level-up">
      <div className="pa-level-up-emoji">{LEVEL_EMOJIS[level] || '⭐'}</div>
      <div className="pa-level-up-text">{'Level ' + level + ' Unlocked!'}</div>
      <div className="pa-level-up-sub">{'Keep exploring to reach the next level'}</div>
    </div>
  );
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '', tag = 'div' }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return; }
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) { setSeen(true); return; }
    const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }); }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    const fb = setTimeout(() => setSeen(true), 2000);
    return () => { io.disconnect(); clearTimeout(fb); };
  }, []);
  const Tag = tag;
  return <Tag ref={ref} className={'reveal ' + (seen ? 'in ' : '') + className} style={{ transitionDelay: delay + 'ms' }}>{children}</Tag>;
}

// ── Count-up ──────────────────────────────────────────────────────────────────
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
      const tick = t => { const p = Math.min(1, (t - t0) / dur); setVal(Math.round(end * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    };
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) { run(); return; }
    const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { run(); io.disconnect(); } }); }, { threshold: 0.5 });
    io.observe(el);
    const fb = setTimeout(run, 2200);
    return () => { io.disconnect(); clearTimeout(fb); };
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Copy button with ripple ───────────────────────────────────────────────────
function CopyButton({ text, onCopy, label, onXP, ref: btnRef }) {
  const [copied, setCopied] = useState(false);
  const [ripple, setRipple] = useState(false);
  const localRef = useRef(null);
  const onClick = e => {
    e.stopPropagation();
    navigator.clipboard && navigator.clipboard.writeText(text);
    setCopied(true); setRipple(true);
    setTimeout(() => setRipple(false), 520);
    setTimeout(() => setCopied(false), 1400);
    onCopy && onCopy();
    if (onXP) onXP(10, localRef.current);
  };
  return (
    <button ref={localRef} className={'pa-btn pa-btn-ghost pa-copy-btn' + (copied ? ' is-copied' : '') + (ripple ? ' is-rippling' : '')} onClick={onClick}>
      <Icon name={copied ? 'check' : 'copy'} size={15} />
      {copied ? 'Copied' : (label || 'Copy')}
    </button>
  );
}

// ── Daily Streak Banner ───────────────────────────────────────────────────────
function DailyBanner({ prompt, streak, catMap, onOpen, onDismiss }) {
  if (!prompt) return null;
  const cat = catMap[prompt.cat];
  return (
    <div className="pa-daily">
      <div className="pa-daily-inner">
        <div className="pa-daily-left">
          <span className="pa-daily-fire">{'🔥'}</span>
          <div>
            <div className="pa-daily-label">Prompt of the Day</div>
            <div className="pa-daily-streak">
              {streak > 1 ? streak + '-day streak' : 'Day 1 — start your streak!'}
            </div>
          </div>
        </div>
        <div className="pa-daily-mid">
          {cat && <span className="pa-daily-cat">{cat.name}</span>}
          <span className="pa-daily-title">{prompt.title}</span>
        </div>
        <div className="pa-daily-right">
          <button className="pa-btn pa-btn-primary pa-btn-sm" onClick={() => onOpen(prompt)}>
            {'Open →'}
          </button>
          <button className="pa-daily-close" onClick={onDismiss} aria-label="Dismiss">{'✕'}</button>
        </div>
      </div>
    </div>
  );
}

// ── Recently Viewed Tray ──────────────────────────────────────────────────────
function RecentTray({ recent, catMap, onOpen, onClear }) {
  if (!recent.length) return null;
  return (
    <div className="pa-recent-tray">
      <span className="pa-recent-label">{'⏱ Recent'}</span>
      <div className="pa-recent-items">
        {recent.map(p => (
          <button key={p.id} className="pa-recent-chip" onClick={() => onOpen(p)} title={p.title}>
            <span className="pa-recent-dot" />
            <span className="pa-recent-text">{p.title}</span>
          </button>
        ))}
      </div>
      <button className="pa-recent-clear" onClick={onClear} title="Clear history">{'✕'}</button>
    </div>
  );
}

// ── Pack Card ─────────────────────────────────────────────────────────────────
function PackCard({ pack, unlocked, onUnlockClick, onActivate }) {
  const isOpen = pack.free || unlocked;
  return (
    <div className="pa-pack-card" style={{ '--pack-color': pack.color }}>
      <div className="pa-pack-top">
        <span className="pa-pack-emoji">{pack.emoji}</span>
        <span className={'pa-pack-badge' + (pack.free ? ' is-free' : '')}>{pack.free ? 'Free' : '₹' + pack.price}</span>
      </div>
      <h3 className="pa-pack-name">{pack.name}</h3>
      <p className="pa-pack-desc">{pack.desc}</p>
      <div className="pa-pack-count">
        <span className="pa-pack-dot" /> {pack.count} prompts
      </div>
      {isOpen ? (
        <button className="pa-btn pa-btn-primary" style={{ width: '100%', marginTop: 'auto' }} onClick={() => onActivate(pack)}>
          {'Explore Pack →'}
        </button>
      ) : (
        <>
          <div className="pa-pack-lock">{'🔒 Premium Pack'}</div>
          <button className="pa-btn pa-btn-primary" style={{ width: '100%' }} onClick={() => onUnlockClick(pack)}>
            {'Unlock for ₹' + pack.price}
          </button>
        </>
      )}
    </div>
  );
}

// ── Packs View ────────────────────────────────────────────────────────────────
function PacksView({ packs, unlocked, onUnlockClick, onActivate, onBack }) {
  return (
    <div className="pa-packs-section">
      <div className="pa-packs-head">
        <button className="pa-back-btn" onClick={onBack}>{'← Back to prompts'}</button>
        <h2 className="pa-packs-title">Prompt Collections</h2>
        <p className="pa-packs-sub">Curated packs for specific goals. Free packs open instantly — no sign-up.</p>
      </div>
      <div className="pa-packs-grid">
        {packs.map(pack => (
          <PackCard key={pack.id} pack={pack} unlocked={unlocked.has(pack.id)} onUnlockClick={onUnlockClick} onActivate={onActivate} />
        ))}
      </div>
    </div>
  );
}

// ── Pack Unlock Modal ─────────────────────────────────────────────────────────
function PackUnlockModal({ pack, onClose, onUnlocked }) {
  const TIP_UPI = 'vaibhavvarunmr@okicici';
  const [phase, setPhase] = useState('pay');
  const [txnId, setTxnId] = useState('');
  const [cpd, setCpd] = useState(false);

  function copyUPI() {
    navigator.clipboard?.writeText(TIP_UPI);
    setCpd(true); setTimeout(() => setCpd(false), 1800);
  }

  function handlePay() {
    window.location.href = 'upi://pay?pa=' + TIP_UPI + '&pn=PromptUndo&am=' + pack.price + '&cu=INR&tn=Unlock%20' + encodeURIComponent(pack.name);
  }

  function handleVerify() {
    if (!txnId.trim()) return;
    setPhase('verifying');
    setTimeout(() => { setPhase('done'); onUnlocked(pack.id); }, 2000);
  }

  return (
    <div className="tip-backdrop" onClick={onClose}>
      <div className="tip-card" onClick={e => e.stopPropagation()}>
        <button className="tip-close" onClick={onClose}>{'✕'}</button>

        {phase === 'pay' && (
          <>
            <div className="tip-header">
              <span className="tip-emoji">{pack.emoji}</span>
              <h2>{'Unlock ' + pack.name}</h2>
              <p>{pack.desc}</p>
            </div>
            <div className="pa-unlock-meta">
              {'₹' + pack.price + ' · One-time · Unlock forever · ' + pack.count + ' prompts'}
            </div>
            <button className="tip-pay-btn" onClick={handlePay}>
              {'Pay ₹' + pack.price + ' via UPI'}
            </button>
            <div className="tip-upi-row" style={{ marginTop: 14 }}>
              <div className="tip-upi-box">
                <span className="tip-upi-label">{'UPI ID'}</span>
                <span className="tip-upi-value">{TIP_UPI}</span>
                <button className="tip-copy-btn" onClick={copyUPI}>{cpd ? '✓' : 'Copy'}</button>
              </div>
            </div>
            <div className="pa-txn-row">
              <input className="pa-input" placeholder="Enter UPI transaction ID after paying" value={txnId} onChange={e => setTxnId(e.target.value)} style={{ flex: 1 }} />
              <button className="pa-btn pa-btn-primary" onClick={handleVerify} disabled={!txnId.trim()}>{'Verify'}</button>
            </div>
            <p className="tip-fine">{'Pay → come back → paste transaction ID → unlock instantly'}</p>
          </>
        )}

        {phase === 'verifying' && (
          <div className="pa-unlock-verifying">
            <div className="pa-spinner" />
            <p>{'Verifying payment...'}</p>
          </div>
        )}

        {phase === 'done' && (
          <div className="pa-unlock-done">
            <span className="pa-unlock-check">{'✅'}</span>
            <h2>{pack.name + ' unlocked!'}</h2>
            <p>{'All ' + pack.count + ' prompts are now available to you forever.'}</p>
            <button className="pa-btn pa-btn-primary" style={{ display: 'inline-flex', flex: 'none', padding: '0 28px', marginTop: 20 }} onClick={onClose}>
              {'Explore Pack →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Badge Modal ───────────────────────────────────────────────────────────────
function BadgeModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const siteUrl = 'https://prompt-engineer-sage.vercel.app';
  const code = '<a href="' + siteUrl + '" target="_blank" rel="noopener"><img src="' + siteUrl + '/badge.svg" alt="Made with PromptUndo" height="24" /></a>';

  function copyCode() {
    navigator.clipboard?.writeText(code);
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="tip-backdrop" onClick={onClose}>
      <div className="tip-card" style={{ maxWidth: 460 }} onClick={e => e.stopPropagation()}>
        <button className="tip-close" onClick={onClose}>{'✕'}</button>
        <div className="tip-header">
          <span className="tip-emoji">{'🏷️'}</span>
          <h2>{'Built with PromptUndo'}</h2>
          <p>{'Add this badge to your website, portfolio, or client deliverables.'}</p>
        </div>
        <div className="pa-badge-preview">
          <span className="pa-badge-widget">{'⚡ Made with PromptUndo'}</span>
        </div>
        <pre className="pa-badge-code">{code}</pre>
        <button
          className={'pa-btn pa-btn-primary' + (copied ? ' is-copied' : '')}
          onClick={copyCode}
          style={{ width: '100%', marginTop: 14 }}
        >
          <Icon name={copied ? 'check' : 'copy'} size={15} />
          {copied ? 'Copied!' : 'Copy embed code'}
        </button>
        <p className="tip-fine">{'This badge links back to PromptUndo — helps us grow and stay free 🙏'}</p>
      </div>
    </div>
  );
}

// ── Prompt Card ───────────────────────────────────────────────────────────────
function PromptCard({ prompt, category, index, onOpen, isSaved, onSave, onCopy, onXP }) {
  const blanks = (prompt.prompt.match(/\[([A-Z0-9_ ]+)\]/g) || []);
  const count = new Set(blanks.map(b => b.replace(/[\[\]]/g, '').trim())).size;
  const wordCount = prompt.prompt.trim().split(/\s+/).length;
  const score = seededHash(prompt.id);
  const popBadge = score > 85 ? 'trending' : score > 68 ? 'popular' : null;
  const [showAI, setShowAI] = useState(false);
  const aiRef = useRef(null);

  useEffect(() => {
    if (!showAI) return;
    const onOut = e => { if (aiRef.current && !aiRef.current.contains(e.target)) setShowAI(false); };
    document.addEventListener('mousedown', onOut);
    return () => document.removeEventListener('mousedown', onOut);
  }, [showAI]);

  function launchAI(tool) {
    const encoded = encodeURIComponent(prompt.prompt);
    window.open(tool.urlQ + encoded, '_blank', 'noopener,noreferrer');
    onCopy && onCopy('Opened ' + tool.name + ' — prompt auto-filled ↗');
    setShowAI(false);
  }

  function sharePrompt(e) {
    e.stopPropagation();
    const text = prompt.title + '\n\n' + prompt.prompt + '\n\nGet 12K+ free AI prompts → prompt-engineer-sage.vercel.app';
    if (navigator.share) {
      navigator.share({ title: prompt.title, text }).catch(() => {});
    } else {
      window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
      onCopy && onCopy('Opening WhatsApp ↗');
    }
  }

  if (prompt.isSponsored) {
    return (
      <Reveal delay={(index % 9) * 55}>
        <a className="pa-card pa-card-sponsored" href={prompt.sponsorUrl} target="_blank" rel="noopener noreferrer sponsored">
          <div className="pa-card-top">
            <span className="pa-sponsored-label">{'Sponsored · ' + prompt.sponsorName}</span>
          </div>
          <h3 className="pa-card-title">{prompt.title}</h3>
          <p className="pa-card-desc">{prompt.desc}</p>
          <div className="pa-card-preview">
            <span className="pa-card-preview-label">{'SAMPLE PROMPT'}</span>
            {prompt.prompt}
          </div>
          <div className="pa-card-actions" style={{ marginTop: 'auto', paddingTop: 14 }}>
            <span className="pa-btn pa-btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              {prompt.sponsorCta}
            </span>
          </div>
        </a>
      </Reveal>
    );
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
            {popBadge && (
              <span className={'pa-pop-badge is-' + popBadge}>
                {popBadge === 'trending' ? '🔥 Trending' : '⚡ Popular'}
              </span>
            )}
            <span className="pa-blanks-tag"><Icon name="brackets" size={12} /> {count}</span>
            <button className={'pa-save-btn' + (isSaved ? ' is-saved' : '')} onClick={e => { e.stopPropagation(); onSave(prompt); if (onXP && !isSaved) onXP(5, e.target); }} title={isSaved ? 'Unsave' : 'Save'}>
              {isSaved ? '♥' : '♡'}
            </button>
            <button className="pa-share-btn" onClick={sharePrompt} title="Share prompt">
              {'↗'}
            </button>
          </div>
        </div>
        <h3 className="pa-card-title">{prompt.title}</h3>
        <p className="pa-card-desc">{prompt.desc}</p>
        <div className="pa-card-preview">
          <span className="pa-card-preview-label">{'PROMPT'}</span>
          {prompt.prompt}
        </div>
        <div className="pa-card-footer">
          <div className="pa-card-tags">
            {prompt.tags.slice(0, 3).map(t => <span key={t} className="pa-tag">{'#' + t}</span>)}
          </div>
          <span className="pa-word-count">{wordCount}{'w'}</span>
        </div>
        <div className="pa-card-actions">
          <button className="pa-btn pa-btn-primary" onClick={e => { e.stopPropagation(); onOpen(prompt); if (onXP) onXP(15, e.target); }}>
            <Icon name="wand" size={15} /> {'Customize'}
          </button>
          <CopyButton text={prompt.prompt} onCopy={() => onCopy && onCopy('Prompt copied ✓')} onXP={onXP} />
          <div className="pa-ai-wrap" ref={aiRef} onClick={e => e.stopPropagation()}>
            <button className={'pa-btn pa-ai-btn' + (showAI ? ' is-open' : '')} onClick={() => setShowAI(v => !v)}>
              {'✦ Try AI'} <span className="pa-ai-chevron">{'▾'}</span>
            </button>
            {showAI && (
              <div className="pa-ai-dropdown">
                {AI_TOOLS.map(t => (
                  <button key={t.name} className="pa-ai-option" onClick={() => launchAI(t)}>
                    <span className="pa-ai-dot" style={{ background: t.color + '22', color: t.color }}>{t.sym}</span>
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

// ── Category bar (sticky) ─────────────────────────────────────────────────────
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

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ query, setQuery, totalLabel, categories, activeCat, onSetCat, searchRef, onSearchKey }) {
  const chips = ['Free forever', 'No login', 'Hinglish-friendly', '₹0'];
  return (
    <header className="pa-hero">
      <div className="pa-aurora"><span className="pa-aurora-a" /><span className="pa-aurora-b" /><span className="pa-aurora-c" /></div>
      <div className="pa-hero-inner">
        <div className="pa-hero-copy">
          <span className="pa-eyebrow"><Icon name="spark" size={13} /> <strong style={{ fontWeight: 700 }}>{totalLabel}+</strong>&nbsp;{'free prompts · no sign-up'}</span>
          <h1 className="pa-hero-title">
            {'Stop fighting with AI.'}<br />
            <span className="pa-hero-title-2">{'Just copy a prompt that works.'}</span>
          </h1>
          <p className="pa-hero-sub">
            {'A free library of fill-in-the-blank AI prompts for India\'s creators and small businesses. Pick one, add your details, copy, paste. That\'s it.'}
          </p>
          <div className="pa-search">
            <span className="pa-search-icon"><Icon name="search" size={20} /></span>
            <input ref={searchRef} className="pa-search-input" value={query} onChange={e => setQuery(e.target.value)} onKeyDown={onSearchKey} placeholder={'Search "Reel hook", "Diwali sale", "caption"...'} aria-label="Search prompts" />
            {query
              ? <button className="pa-search-clear" onClick={() => setQuery('')} aria-label="Clear"><Icon name="close" size={13} /></button>
              : <kbd className="pa-search-kbd">{'/ to search'}</kbd>}
          </div>
          <div className="pa-quick-cats" role="group" aria-label="Quick category filter">
            <button className={'pa-quick-cat' + (activeCat === 'all' ? ' is-active' : '')} onClick={() => onSetCat('all')}>{'All'}</button>
            {categories.filter(c => c.id !== 'all').map(c => (
              <button key={c.id} className={'pa-quick-cat' + (activeCat === c.id ? ' is-active' : '')} onClick={() => onSetCat(c.id)}>{c.name}</button>
            ))}
          </div>
          <div className="pa-trust">
            {chips.map((c, i) => <span key={c} className="pa-trust-chip"><Icon name={TRUST_ICON[i]} size={14} />{c}</span>)}
          </div>
        </div>
        <div className="pa-hero-demo"><HeroDemo /></div>
      </div>
    </header>
  );
}

// ── Stats ─────────────────────────────────────────────────────────────────────
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

// ── How it works ──────────────────────────────────────────────────────────────
function HowItWorks({ steps }) {
  return (
    <section className="pa-section pa-section-tint" id="how">
      <Reveal><div className="pa-section-head">
        <span className="pa-kicker">{'The flow'}</span>
        <h2 className="pa-section-title">{'From blank page to posted in four steps'}</h2>
        <p className="pa-section-sub">{'No prompt-engineering degree required.'}</p>
      </div></Reveal>
      <div className="pa-steps">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="pa-step">
              <div className="pa-step-num">{'0' + (i + 1)}</div>
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
        <span className="pa-kicker">{'The kit'}</span>
        <h2 className="pa-section-title">{'Tools we\'d actually recommend'}</h2>
        <p className="pa-section-sub">{'Everything you need to make, sell, and grow.'}</p>
      </div></Reveal>
      <div className="pa-tools">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 70}>
            <a className="pa-tool" href={t.url} target="_blank" rel="noopener noreferrer">
              <div className="pa-tool-icon"><Icon name={TOOL_ICON[t.name] || 'spark'} size={22} /></div>
              <div className="pa-tool-main">
                <div className="pa-tool-top"><span className="pa-tool-name">{t.name}</span><span className="pa-tool-badge">{t.badge}</span></div>
                <p className="pa-tool-blurb">{t.blurb}</p>
              </div>
              <span className="pa-tool-arrow"><Icon name="arrowUpRight" size={16} /></span>
            </a>
          </Reveal>
        ))}
      </div>
      <p className="pa-tools-note">{'Some links are affiliate links — they keep PromptUndo free forever, at no cost to you.'}</p>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer({ onBadge }) {
  return (
    <footer className="pa-footer">
      <div className="pa-footer-inner">
        <div className="pa-footer-brand">
          <div className="pa-logo"><span className="pa-logo-mark"><Icon name="spark" size={16} /></span>{' PromptUndo'}</div>
          <p className="pa-footer-mission">{'A free, forever-open library of AI prompts for India\'s creators and small businesses.'}</p>
          <button className="pa-badge-link" onClick={onBadge}>{'🏷️ Add "Made with PromptUndo" badge'}</button>
        </div>
        <div className="pa-footer-col">
          <span className="pa-footer-h">{'Explore'}</span>
          <a href="#top">{'All prompts'}</a>
          <a href="#how">{'How it works'}</a>
          <a href="#tools">{'Tools'}</a>
        </div>
        <div className="pa-footer-col">
          <span className="pa-footer-h">{'The promise'}</span>
          <span className="pa-footer-promise"><Icon name="infinity" size={15} />{'Free forever'}</span>
          <span className="pa-footer-promise"><Icon name="shield" size={15} />{'No sign-up, no email wall'}</span>
          <span className="pa-footer-promise"><TriFlag w={17} />{'Made in India'}</span>
        </div>
      </div>
      <div className="pa-footer-bar">{'© 2026 PromptUndo · Copy, fill, paste, done.'}</div>
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

  // ── XP System ───────────────────────────────────────────────────────────────
  const [xp, setXP] = useState(() => {
    try { return parseInt(localStorage.getItem('pa_xp') || '0', 10); } catch(e) { return 0; }
  });
  const currLevel = getLevelFromXP(xp);
  const [xpPopups, setXpPopups] = useState([]);
  const [levelUpShow, setLevelUpShow] = useState(false);
  const [levelUpLevel, setLevelUpLevel] = useState(0);

  function addXP(amount, fromElement) {
    const oldLevel = getLevelFromXP(xp);
    const newXP = xp + amount;
    const newLevel = getLevelFromXP(newXP);

    setXP(newXP);
    try { localStorage.setItem('pa_xp', String(newXP)); } catch(e) {}

    if (fromElement) {
      const rect = fromElement.getBoundingClientRect();
      const popId = Math.random();
      setXpPopups(prev => [...prev, { id: popId, x: rect.left + rect.width / 2, y: rect.top, amount }]);
      setTimeout(() => {
        setXpPopups(prev => prev.filter(p => p.id !== popId));
      }, 800);
    }

    if (newLevel > oldLevel) {
      setLevelUpLevel(newLevel);
      setLevelUpShow(true);
    }
  }

  // ── Dark mode ─────────────────────────────────────────────────────────────
  const [dark, setDark] = useState(() => {
    try { const s = localStorage.getItem('pa_theme'); if (s) return s === 'dark'; } catch(e) {}
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
      const next = exists ? prev.filter(p => p.id !== prompt.id)
        : [...prev, { id: prompt.id, title: prompt.title, desc: prompt.desc, prompt: prompt.prompt, tags: prompt.tags, cat: prompt.cat }];
      try { localStorage.setItem('pa_saved', JSON.stringify(next)); } catch(e) {}
      return next;
    });
  }

  // ── Streak + Daily prompt ─────────────────────────────────────────────────
  const [streak] = useState(() => loadStreak());
  const [dailyDismissed, setDailyDismissed] = useState(() => {
    try { return localStorage.getItem('pa_ddm') === new Date().toDateString(); } catch(e) { return false; }
  });
  function dismissDaily() {
    try { localStorage.setItem('pa_ddm', new Date().toDateString()); } catch(e) {}
    setDailyDismissed(true);
  }
  const dailyPrompt = useMemo(() => {
    if (!PROMPTS.length) return null;
    const seed = Math.floor(Date.now() / 86400000);
    return PROMPTS[seed % PROMPTS.length];
  }, [PROMPTS]);

  // ── Recently viewed ───────────────────────────────────────────────────────
  const [recentPrompts, setRecentPrompts] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pa_recent') || '[]'); } catch(e) { return []; }
  });
  function addRecent(prompt) {
    setRecentPrompts(prev => {
      const filtered = prev.filter(p => p.id !== prompt.id);
      const next = [{ id: prompt.id, title: prompt.title, cat: prompt.cat }, ...filtered].slice(0, 5);
      try { localStorage.setItem('pa_recent', JSON.stringify(next)); } catch(e) {}
      return next;
    });
  }
  function clearRecent() {
    setRecentPrompts([]);
    try { localStorage.removeItem('pa_recent'); } catch(e) {}
  }

  // ── Packs ─────────────────────────────────────────────────────────────────
  const [showPacks, setShowPacks] = useState(false);
  const [openPackModal, setOpenPackModal] = useState(null);
  const [unlockedPacks, setUnlockedPacks] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('pa_unlocked') || '[]')); } catch(e) { return new Set(); }
  });
  function unlockPack(id) {
    setUnlockedPacks(prev => {
      const next = new Set(prev); next.add(id);
      try { localStorage.setItem('pa_unlocked', JSON.stringify([...next])); } catch(e) {}
      return next;
    });
  }
  function activatePack(pack) {
    setQuery(pack.query.split(' ')[0]);
    setActiveCat('all');
    setShowPacks(false);
    setShowSaved(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }

  // ── Badge ─────────────────────────────────────────────────────────────────
  const [showBadge, setShowBadge] = useState(false);

  // ── Toast ─────────────────────────────────────────────────────────────────
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);
  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2200);
  }

  // ── Refs ──────────────────────────────────────────────────────────────────
  const resultsRef = useRef(null);
  const searchInputRef = useRef(null);

  function onSearchKey(e) {
    if (e.key === 'Enter') resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (e.key === 'Escape') setQuery('');
  }

  useEffect(() => {
    const onKey = e => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault(); searchInputRef.current?.focus();
      }
    };
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
      id: i, x: 2 + Math.random() * 94, size: 36 + Math.random() * 28,
      dur: 1.5 + Math.random() * 1.8, delay: Math.random() * 2.4,
      r: (Math.random() > 0.5 ? 1 : -1) * (280 + Math.random() * 440),
      drift: (Math.random() - 0.5) * 130, type: Math.random() > 0.72 ? 'star' : 'coin',
    }));
  }
  function tipPay() {
    if (tipAmount < 1) return;
    try { localStorage.setItem('pa_tip', JSON.stringify({ amt: tipAmount, ts: Date.now() })); } catch(e) {}
    window.location.href = 'upi://pay?pa=' + TIP_UPI + '&pn=PromptUndo&am=' + tipAmount + '&cu=INR&tn=Tip%20for%20PromptUndo';
  }
  function tipCopyText(text, key) {
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setTipCopied(key); setTimeout(() => setTipCopied(''), 1800);
  }

  const totalLabel = fmtBig(VIRTUAL_TOTAL);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    function checkReturn() {
      if (document.visibilityState !== 'visible') return;
      let raw; try { raw = localStorage.getItem('pa_tip'); } catch(e) { return; }
      if (!raw) return;
      try {
        const { amt, ts } = JSON.parse(raw);
        localStorage.removeItem('pa_tip');
        if (Date.now() - ts < 600000) { setTipSel(amt); setTipCoins(makeTipCoins()); setTipPhase('celebrate'); addXP(50); }
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
    CATEGORIES.forEach(cat => { if (cat.id === 'all') return; c[cat.id] = (c[cat.id] || 0) + (bpPerCat[cat.id] || 0) * NICHES.length; });
    return c;
  }, []);

  const authoredIndex = useMemo(() => {
    const hints = HINTS || {};
    const re = /\[([A-Z0-9_ ]+)\]/g;
    return PROMPTS.map(p => {
      const title = p.title.toLowerCase(); const tags = p.tags.join(' ').toLowerCase();
      let hintText = ''; const seen = new Set(); let m; re.lastIndex = 0;
      while ((m = re.exec(p.prompt)) !== null) { const tok = m[1]; if (seen.has(tok)) continue; seen.add(tok); const h = hints[tok]; if (h && h.hint) hintText += ' ' + h.hint; }
      const hay = title + ' ' + p.desc.toLowerCase() + ' ' + tags + ' ' + p.prompt.toLowerCase() + ' ' + hintText.toLowerCase();
      return { p, title, tags, hay };
    });
  }, []);

  const bpIndex = useMemo(() => BLUEPRINTS.map(bp => ({
    bp, hay: (bp.title + ' ' + bp.desc + ' ' + bp.body + ' ' + bp.tags.join(' ')).toLowerCase(),
    title: bp.title.toLowerCase(), tags: bp.tags.join(' ').toLowerCase(),
  })), []);

  const deferredQuery = useDeferredValue(query);

  const { authoredFiltered, matchedBPs, effectiveNiches } = useMemo(() => {
    const words = deferredQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const af = [];
    for (const it of authoredIndex) {
      if (activeCat !== 'all' && it.p.cat !== activeCat) continue;
      if (!words.length) { af.push({ p: it.p, s: 0 }); continue; }
      let ok = true; for (const w of words) { if (!it.hay.includes(w)) { ok = false; break; } }
      if (!ok) continue;
      let s = 0; for (const w of words) { if (it.title.includes(w)) s += 3; if (it.tags.includes(w)) s += 2; }
      af.push({ p: it.p, s });
    }
    if (words.length) af.sort((a, b) => b.s - a.s);

    const bps = [];
    for (const it of bpIndex) {
      if (activeCat !== 'all' && it.bp.cat !== activeCat) continue;
      if (!words.length) { bps.push(it.bp); continue; }
      let ok = true; for (const w of words) { if (!it.hay.includes(w)) { ok = false; break; } }
      if (ok) bps.push(it.bp);
    }

    let effectiveNiches;
    if (!words.length) { effectiveNiches = NICHES; }
    else { const hits = NICHES.filter(n => words.some(w => n[1].toLowerCase().includes(w) || n[2].toLowerCase().includes(w))); effectiveNiches = hits.length > 0 ? hits : NICHES; }

    return { authoredFiltered: af, matchedBPs: bps, effectiveNiches };
  }, [deferredQuery, activeCat, authoredIndex, bpIndex]);

  useEffect(() => { setLimit(PAGE); }, [deferredQuery, activeCat]);

  const totalFiltered = authoredFiltered.length + matchedBPs.length * effectiveNiches.length;
  const stale = query !== deferredQuery;

  const visible = useMemo(() => {
    const result = [];
    for (const { p } of authoredFiltered) { if (result.length >= limit) break; result.push(p); }
    let remaining = limit - result.length; let done = false;
    for (let bi = 0; bi < matchedBPs.length && !done; bi++) {
      const bp = matchedBPs[bi];
      for (let ni = 0; ni < effectiveNiches.length && !done; ni++) {
        const n = effectiveNiches[ni]; if (remaining <= 0) { done = true; break; }
        result.push({ id: 'vbp-' + bp.id + '-' + n[0], cat: bp.cat, title: bp.title + ' — ' + n[1], desc: bp.desc.replace(/\{NAME\}/g, n[1]).replace(/\{LABEL\}/g, n[2]).replace(/\{AUD\}/g, n[3]), prompt: bp.body.replace(/\{NAME\}/g, n[1]).replace(/\{LABEL\}/g, n[2]).replace(/\{AUD\}/g, n[3]), tags: bp.tags.concat([n[0]]) });
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
    return p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q);
  }) : null;

  // Inject sponsored slot at position 7
  const displayBase = savedVisible !== null ? savedVisible : visible;
  const displayPrompts = useMemo(() => {
    if (showSaved || query || activeCat !== 'all' || displayBase.length < 6) return displayBase;
    const r = [...displayBase]; r.splice(6, 0, SPONSORED_SLOT); return r;
  }, [displayBase, showSaved, query, activeCat]);

  const displayTotal = savedVisible !== null ? savedVisible.length : totalFiltered;

  function handleOpenPrompt(p) {
    // don't track sponsored slot
    if (!p.isSponsored) addRecent(p);
    setOpenPrompt(p);
  }

  function switchCat(id) { setActiveCat(id); setShowSaved(false); setShowPacks(false); }

  return (
    <div id="top">
      {/* ── XP Bar ──────────────────────────────────────────────────────── */}
      <XPBar xp={xp} level={currLevel} />

      {/* ── XP Popups ───────────────────────────────────────────────────── */}
      {xpPopups.map(pop => (
        <XPPop key={pop.id} x={pop.x} y={pop.y} amount={pop.amount} onDone={() => {}} />
      ))}

      {/* ── Level Up Celebration ────────────────────────────────────────── */}
      {levelUpShow && <LevelUpCelebration level={levelUpLevel} onDismiss={() => setLevelUpShow(false)} />}

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className={'pa-nav' + (scrolled ? ' is-scrolled' : '')}>
        <div className="pa-nav-inner">
          <div className="pa-logo"><span className="pa-logo-mark"><Icon name="spark" size={16} /></span>{' PromptUndo'}</div>
          <div className="pa-nav-links">
            <a href="#how">{'How it works'}</a>
            <a href="#tools">{'Tools'}</a>
            <button className={'pa-nav-packs' + (showPacks ? ' is-active' : '')} onClick={() => { setShowPacks(v => !v); setShowSaved(false); }}>
              {'📦 Packs'}
            </button>
            {savedPrompts.length > 0 && (
              <button className={'pa-nav-saved' + (showSaved ? ' is-active' : '')} onClick={() => { const n = !showSaved; setShowSaved(n); setShowPacks(false); if (n) setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); }}>
                {'♥ Saved ' + savedPrompts.length}
              </button>
            )}
            <button className="pa-dark-btn" onClick={() => setDark(v => !v)} title={dark ? 'Light mode' : 'Dark mode'}>
              {dark ? '☀' : '☽'}
            </button>
            <button className="tip-nav-btn" onClick={() => setTipPhase('open')}>{'❤️ Donate'}</button>
            <span className="pa-nav-free"><Icon name="infinity" size={13} />{' Free forever'}</span>
          </div>
        </div>
      </nav>

      <Hero query={query} setQuery={setQuery} totalLabel={totalLabel} categories={CATEGORIES} activeCat={activeCat} onSetCat={switchCat} searchRef={searchInputRef} onSearchKey={onSearchKey} />

      {/* ── Daily streak banner ──────────────────────────────────────────── */}
      {!dailyDismissed && !showPacks && (
        <DailyBanner prompt={dailyPrompt} streak={streak} catMap={catMap} onOpen={handleOpenPrompt} onDismiss={dismissDaily} />
      )}

      <Stats />
      <CategoryBar categories={CATEGORIES} counts={counts} active={activeCat} onSelect={switchCat} />

      {/* ── Packs view ───────────────────────────────────────────────────── */}
      {showPacks ? (
        <div className="pa-main">
          <PacksView packs={PACKS} unlocked={unlockedPacks} onUnlockClick={setOpenPackModal} onActivate={activatePack} onBack={() => setShowPacks(false)} />
        </div>
      ) : (
        <main className="pa-main" ref={resultsRef}>
          <div className="pa-results-bar">
            {showSaved && (
              <button className="pa-back-btn" onClick={() => setShowSaved(false)}>{'← All prompts'}</button>
            )}
            <span className="pa-results-count">
              <strong>{displayTotal > 9999 ? fmtBig(displayTotal) + '+' : displayTotal}</strong>
              {' '}{displayTotal === 1 ? 'prompt' : 'prompts'}
              {showSaved && ' saved'}
              {!showSaved && activeCat !== 'all' && catMap[activeCat] && <span className="pa-results-cat">{' in ' + catMap[activeCat].name}</span>}
              {query && <span className="pa-results-cat">{' for "' + query + '"'}</span>}
            </span>
          </div>

          {displayTotal === 0 ? (
            <div className="pa-empty">
              <div className="pa-empty-icon"><Icon name="search" size={26} /></div>
              <h3 className="pa-empty-title">{showSaved ? 'No saved prompts match' : 'No prompts match that yet'}</h3>
              <p className="pa-empty-text">{showSaved ? 'Try clearing filters.' : 'Try a broader keyword — or browse all 16 categories.'}</p>
              <button className="pa-btn pa-btn-primary" onClick={() => { setQuery(''); setActiveCat('all'); setShowSaved(false); }}>
                <Icon name="all" size={15} />{' Show all prompts'}
              </button>
            </div>
          ) : (
            <>
              <div className="pa-grid" style={{ opacity: stale ? 0.55 : 1, transition: 'opacity .15s ease' }}>
                {displayPrompts.map((p, i) => (
                  <PromptCard key={p.id} prompt={p} category={catMap[p.cat] || CATEGORIES[0]} index={i} onOpen={handleOpenPrompt} isSaved={savedIds.has(p.id)} onSave={toggleSave} onCopy={showToast} onXP={addXP} />
                ))}
              </div>
              {!showSaved && displayTotal > limit && (
                <div style={{ textAlign: 'center', marginTop: 28 }}>
                  <button className="pa-btn pa-btn-ghost" style={{ display: 'inline-flex', flex: 'none', padding: '0 22px' }} onClick={() => setLimit(l => l + PAGE)}>
                    <Icon name="layers" size={15} />{' Show more'}
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      )}

      <HowItWorks steps={STEPS} />
      <Tools tools={TOOLS} />
      <Footer onBadge={() => setShowBadge(true)} />

      {/* ── Recently viewed tray ─────────────────────────────────────────── */}
      <RecentTray recent={recentPrompts} catMap={catMap} onOpen={handleOpenPrompt} onClear={clearRecent} />

      {/* ── Modals ───────────────────────────────────────────────────────── */}
      {openPrompt && !openPrompt.isSponsored && (
        <CustomizeModal prompt={openPrompt} category={catMap[openPrompt.cat] || CATEGORIES[0]} onClose={() => setOpenPrompt(null)} />
      )}
      {openPackModal && (
        <PackUnlockModal pack={openPackModal} onClose={() => setOpenPackModal(null)} onUnlocked={id => { unlockPack(id); setOpenPackModal(null); }} />
      )}
      {showBadge && <BadgeModal onClose={() => setShowBadge(false)} />}

      {/* ── Donation modal ───────────────────────────────────────────────── */}
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
                <button key={p} className={'tip-amount-btn' + (tipSel === p && !tipCustom ? ' is-active' : '')} onClick={() => { setTipSel(p); setTipCustom(''); }}>{'₹'}{p}</button>
              ))}
            </div>
            <div className="tip-custom">
              <span className="tip-rupee">{'₹'}</span>
              <input className="tip-custom-input" type="number" min="1" step="1" placeholder="Custom amount" value={tipCustom} onChange={e => setTipCustom(e.target.value.replace(/\D/g, ''))} />
            </div>
            <button className="tip-pay-btn" onClick={tipPay} disabled={tipAmount < 1}>{'🎉 Buy Happiness — ₹'}{tipAmount || '—'}</button>
            <div className="tip-upi-row">
              <div className="tip-upi-box">
                <span className="tip-upi-label">{'UPI ID'}</span>
                <span className="tip-upi-value">{TIP_UPI}</span>
                <button className="tip-copy-btn" onClick={() => tipCopyText(TIP_UPI, 'upi')}>{tipCopied === 'upi' ? '✓ Copied' : 'Copy'}</button>
              </div>
              <div className="tip-upi-box">
                <span className="tip-upi-label">{'GPay / PhonePe'}</span>
                <span className="tip-upi-value">{TIP_PHONE}</span>
                <button className="tip-copy-btn" onClick={() => tipCopyText(TIP_PHONE, 'phone')}>{tipCopied === 'phone' ? '✓ Copied' : 'Copy'}</button>
              </div>
            </div>
            <p className="tip-fine">{'Tap → UPI opens → pay → come back for a surprise 🎊'}</p>
          </div>
        </div>
      )}

      {/* ── Celebration ──────────────────────────────────────────────────── */}
      {tipPhase === 'celebrate' && (
        <div className="tip-celebration" onClick={() => setTipPhase('idle')}>
          {tipCoins.map(c => (
            <span key={c.id} className={'tip-particle' + (c.type === 'star' ? ' is-star' : '')} style={{ left: c.x + '%', '--size': c.size + 'px', '--dur': c.dur + 's', '--delay': c.delay + 's', '--r': c.r + 'deg', '--drift': c.drift + 'px' }}>
              {c.type === 'star' ? '✦' : '₹'}
            </span>
          ))}
          <div className="tip-thankyou">
            <span className="tip-big-heart">{'❤️'}</span>
            <h2>{"You're incredible!"}</h2>
            <p className="tip-sent">{'₹'}{tipAmount}{' received · Thank you 🙏'}</p>
            <p className="tip-sub-msg">{'This keeps PromptUndo free for everyone in India'}</p>
            <button className="tip-dismiss" onClick={e => { e.stopPropagation(); setTipPhase('idle'); }}>{'Keep exploring prompts →'}</button>
          </div>
        </div>
      )}

      {/* ── Toast ────────────────────────────────────────────────────────── */}
      {toast && <div className="pa-toast" role="status">{toast}</div>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
