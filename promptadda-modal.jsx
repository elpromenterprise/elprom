/* PromptAdda — Customize modal (the hero feature) */
const { useState: useStateM, useEffect: useEffectM, useMemo: useMemoM, useRef: useRefM } = React;

// ── Helpers ────────────────────────────────────────────────────────────────
const PA_TOKEN_RE = /\[([A-Z0-9_ ]+)\]/g;

function paParseTokens(text) {
  const seen = [];
  const set = new Set();
  let m;
  PA_TOKEN_RE.lastIndex = 0;
  while ((m = PA_TOKEN_RE.exec(text)) !== null) {
    const tok = m[1].trim();
    if (!set.has(tok)) { set.add(tok); seen.push(tok); }
  }
  return seen;
}

function paPrettify(token) {
  return token
    .toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function paHintFor(token) {
  const h = (window.PA.HINTS || {})[token];
  if (h) return h;
  // heuristics for unknown long tokens
  const long = /PASTE|TRANSCRIPT|DETAILS|NOTES|SCRIPT|PARAGRAPH/.test(token);
  return { hint: 'Type your ' + token.toLowerCase() + '…', long };
}

// ── Live preview renderer ──────────────────────────────────────────────────
function PreviewText({ prompt, values }) {
  const parts = [];
  let last = 0, m, key = 0;
  PA_TOKEN_RE.lastIndex = 0;
  while ((m = PA_TOKEN_RE.exec(prompt)) !== null) {
    if (m.index > last) parts.push(<span key={key++}>{prompt.slice(last, m.index)}</span>);
    const tok = m[1].trim();
    const val = (values[tok] || '').trim();
    if (val) {
      parts.push(<span key={key++} className="pa-fill">{val}</span>);
    } else {
      parts.push(<span key={key++} className="pa-blank">{m[0]}</span>);
    }
    last = m.index + m[0].length;
  }
  if (last < prompt.length) parts.push(<span key={key++}>{prompt.slice(last)}</span>);
  return <p className="pa-preview-text">{parts}</p>;
}

// ── Modal ──────────────────────────────────────────────────────────────────
function CustomizeModal({ prompt, category, onClose }) {
  const tokens = useMemoM(() => paParseTokens(prompt.prompt), [prompt]);
  const [values, setValues] = useStateM({});
  const [copied, setCopied] = useStateM(false);
  const firstRef = useRefM(null);

  useEffectM(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => firstRef.current && firstRef.current.focus(), 80);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      clearTimeout(t);
    };
  }, []);

  const filledCount = tokens.filter(t => (values[t] || '').trim()).length;

  const finalText = useMemoM(() => {
    return prompt.prompt.replace(PA_TOKEN_RE, (full, g) => {
      const v = (values[g.trim()] || '').trim();
      return v || full;
    });
  }, [prompt, values]);

  const setField = (tok, v) => setValues(prev => ({ ...prev, [tok]: v }));

  const doCopy = () => {
    navigator.clipboard && navigator.clipboard.writeText(finalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const chatGPTHref = 'https://chat.openai.com/?q=' + encodeURIComponent(finalText);
  const pct = tokens.length ? Math.round((filledCount / tokens.length) * 100) : 100;

  return (
    <div className="pa-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="pa-modal" role="dialog" aria-modal="true">

        {/* Header */}
        <div className="pa-modal-head">
          <div className="pa-modal-head-main">
            <div className="pa-modal-badges">
              <span className="pa-cat-chip"><span className="pa-cat-chip-icon"><Icon name={category.id} size={15} /></span>{category.name}</span>
              <span className="pa-badge pa-badge-soft"><Icon name="brackets" size={12} /> {tokens.length} {tokens.length === 1 ? 'blank' : 'blanks'}</span>
            </div>
            <h2 className="pa-modal-title">{prompt.title}</h2>
            <p className="pa-modal-desc">{prompt.desc}</p>
          </div>
          <button className="pa-close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="pa-modal-body">

          {/* Left — form */}
          <div className="pa-form">
            <div className="pa-form-top">
              <span className="pa-form-label">Fill in the blanks</span>
              <span className="pa-progress-count">{filledCount}/{tokens.length} filled</span>
            </div>
            <div className="pa-progress-track"><div className="pa-progress-bar" style={{ width: pct + '%' }} /></div>

            <div className="pa-fields">
              {tokens.map((tok, i) => {
                const meta = paHintFor(tok);
                const common = {
                  ref: i === 0 ? firstRef : null,
                  value: values[tok] || '',
                  placeholder: meta.hint,
                  onChange: (e) => setField(tok, e.target.value),
                };
                return (
                  <label className="pa-field" key={tok}>
                    <span className="pa-field-label">
                      {paPrettify(tok)}
                      {(values[tok] || '').trim() && <span className="pa-field-check"><Icon name="check" size={11} /></span>}
                    </span>
                    {meta.long
                      ? <textarea className="pa-textarea" rows={3} {...common} />
                      : <input className="pa-input" type="text" {...common} />}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Right — live preview */}
          <div className="pa-preview">
            <div className="pa-preview-head">
              <span className="pa-form-label">Live preview</span>
              <span className="pa-char-count">{finalText.length} chars</span>
            </div>
            <div className="pa-preview-card">
              <PreviewText prompt={prompt.prompt} values={values} />
            </div>
            <p className="pa-preview-hint">
              {filledCount === tokens.length
                ? <><Icon name="check" size={13} /> All set — copy it and paste into your AI tool.</>
                : 'Fill the highlighted blanks to complete your prompt.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pa-modal-foot">
          <button className={'pa-btn pa-btn-primary pa-btn-lg' + (copied ? ' is-copied' : '')} onClick={doCopy}>
            <Icon name={copied ? 'check' : 'copy'} size={16} />
            {copied ? 'Copied to clipboard' : 'Copy filled prompt'}
          </button>
          <a className="pa-btn pa-btn-ghost pa-btn-lg" href={chatGPTHref} target="_blank" rel="noopener noreferrer">
            <Icon name="robot" size={16} /> Open in ChatGPT
            <Icon name="arrowUpRight" size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

window.CustomizeModal = CustomizeModal;
