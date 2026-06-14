const { useState: useStateM, useEffect: useEffectM, useMemo: useMemoM, useRef: useRefM } = React;
const PA_TOKEN_RE = /\[([A-Z0-9_ ]+)\]/g;
function paParseTokens(text) {
  const seen = [];
  const set = /* @__PURE__ */ new Set();
  let m;
  PA_TOKEN_RE.lastIndex = 0;
  while ((m = PA_TOKEN_RE.exec(text)) !== null) {
    const tok = m[1].trim();
    if (!set.has(tok)) {
      set.add(tok);
      seen.push(tok);
    }
  }
  return seen;
}
function paPrettify(token) {
  return token.toLowerCase().split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function paHintFor(token) {
  const h = (window.PA.HINTS || {})[token];
  if (h) return h;
  const long = /PASTE|TRANSCRIPT|DETAILS|NOTES|SCRIPT|PARAGRAPH/.test(token);
  return { hint: "Type your " + token.toLowerCase() + "...", long };
}
const TONES = [
  { id: "original", label: "Original", suffix: "" },
  { id: "formal", label: "Formal", suffix: "\n\nTone instruction: Write in a professional, formal tone with structured language and clear headings where applicable." },
  { id: "casual", label: "Casual", suffix: "\n\nTone instruction: Write in a warm, casual, conversational tone \u2014 friendly and approachable, like talking to a colleague." },
  { id: "hinglish", label: "Hinglish", suffix: '\n\nTone instruction: Write in Hinglish \u2014 a natural mix of Hindi and English the way young urban Indians text. E.g. "Yaar, yeh product bahut solid hai!" Keep it fun and relatable.' }
];
const MODAL_AI = [
  { name: "ChatGPT", urlQ: "https://chatgpt.com/?q=", color: "#10A37F", sym: "G" },
  { name: "Claude", urlQ: "https://claude.ai/new?q=", color: "#D97706", sym: "C" },
  { name: "Gemini", urlQ: "https://gemini.google.com/app?q=", color: "#4285F4", sym: "\u2726" },
  { name: "Grok", urlQ: "https://x.com/i/grok?text=", color: "#9333EA", sym: "X" },
  { name: "Perplexity", urlQ: "https://www.perplexity.ai/?q=", color: "#20B2AA", sym: "P" },
  { name: "Copilot", urlQ: "https://copilot.microsoft.com/?q=", color: "#0078D4", sym: "M" }
];
function PreviewText({ prompt, values }) {
  const parts = [];
  let last = 0, m, key = 0;
  PA_TOKEN_RE.lastIndex = 0;
  while ((m = PA_TOKEN_RE.exec(prompt)) !== null) {
    if (m.index > last) parts.push(/* @__PURE__ */ React.createElement("span", { key: key++ }, prompt.slice(last, m.index)));
    const tok = m[1].trim();
    const val = (values[tok] || "").trim();
    if (val) {
      parts.push(/* @__PURE__ */ React.createElement("span", { key: key++, className: "pa-fill" }, val));
    } else {
      parts.push(/* @__PURE__ */ React.createElement("span", { key: key++, className: "pa-blank" }, m[0]));
    }
    last = m.index + m[0].length;
  }
  if (last < prompt.length) parts.push(/* @__PURE__ */ React.createElement("span", { key: key++ }, prompt.slice(last)));
  return /* @__PURE__ */ React.createElement("p", { className: "pa-preview-text" }, parts);
}
function CustomizeModal({ prompt, category, onClose }) {
  const tokens = useMemoM(() => paParseTokens(prompt.prompt), [prompt]);
  const [values, setValues] = useStateM({});
  const [copied, setCopied] = useStateM(false);
  const [toneId, setToneId] = useStateM("original");
  const [showAI, setShowAI] = useStateM(false);
  const firstRef = useRefM(null);
  const aiRef = useRefM(null);
  useEffectM(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstRef.current && firstRef.current.focus(), 80);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, []);
  useEffectM(() => {
    if (!showAI) return;
    const onOut = (e) => {
      if (aiRef.current && !aiRef.current.contains(e.target)) setShowAI(false);
    };
    document.addEventListener("mousedown", onOut);
    return () => document.removeEventListener("mousedown", onOut);
  }, [showAI]);
  const filledCount = tokens.filter((t) => (values[t] || "").trim()).length;
  const filledText = useMemoM(() => {
    return prompt.prompt.replace(PA_TOKEN_RE, (full, g) => {
      const v = (values[g.trim()] || "").trim();
      return v || full;
    });
  }, [prompt, values]);
  const activeTone = TONES.find((t) => t.id === toneId) || TONES[0];
  const finalText = filledText + activeTone.suffix;
  const setField = (tok, v) => setValues((prev) => ({ ...prev, [tok]: v }));
  const doCopy = () => {
    navigator.clipboard && navigator.clipboard.writeText(finalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  function openInAI(tool) {
    const encoded = encodeURIComponent(finalText);
    window.open(tool.urlQ + encoded, "_blank", "noopener,noreferrer");
    setShowAI(false);
  }
  const pct = tokens.length ? Math.round(filledCount / tokens.length * 100) : 100;
  return /* @__PURE__ */ React.createElement("div", { className: "pa-backdrop", onMouseDown: (e) => {
    if (e.target === e.currentTarget) onClose();
  } }, /* @__PURE__ */ React.createElement("div", { className: "pa-modal", role: "dialog", "aria-modal": "true" }, /* @__PURE__ */ React.createElement("div", { className: "pa-modal-head" }, /* @__PURE__ */ React.createElement("div", { className: "pa-modal-head-main" }, /* @__PURE__ */ React.createElement("div", { className: "pa-modal-badges" }, /* @__PURE__ */ React.createElement("span", { className: "pa-cat-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pa-cat-chip-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: category.id, size: 15 })), category.name), /* @__PURE__ */ React.createElement("span", { className: "pa-badge pa-badge-soft" }, /* @__PURE__ */ React.createElement(Icon, { name: "brackets", size: 12 }), " ", tokens.length, " ", tokens.length === 1 ? "blank" : "blanks")), /* @__PURE__ */ React.createElement("h2", { className: "pa-modal-title" }, prompt.title), /* @__PURE__ */ React.createElement("p", { className: "pa-modal-desc" }, prompt.desc)), /* @__PURE__ */ React.createElement("button", { className: "pa-close", onClick: onClose, "aria-label": "Close" }, /* @__PURE__ */ React.createElement(Icon, { name: "close", size: 16 }))), /* @__PURE__ */ React.createElement("div", { className: "pa-modal-body" }, /* @__PURE__ */ React.createElement("div", { className: "pa-form" }, /* @__PURE__ */ React.createElement("div", { className: "pa-form-top" }, /* @__PURE__ */ React.createElement("span", { className: "pa-form-label" }, "Fill in the blanks"), /* @__PURE__ */ React.createElement("span", { className: "pa-progress-count" }, filledCount, "/", tokens.length, " filled")), /* @__PURE__ */ React.createElement("div", { className: "pa-progress-track" }, /* @__PURE__ */ React.createElement("div", { className: "pa-progress-bar", style: { width: pct + "%" } })), /* @__PURE__ */ React.createElement("div", { className: "pa-fields" }, tokens.map((tok, i) => {
    const meta = paHintFor(tok);
    const common = {
      ref: i === 0 ? firstRef : null,
      value: values[tok] || "",
      placeholder: meta.hint,
      onChange: (e) => setField(tok, e.target.value)
    };
    return /* @__PURE__ */ React.createElement("label", { className: "pa-field", key: tok }, /* @__PURE__ */ React.createElement("span", { className: "pa-field-label" }, paPrettify(tok), (values[tok] || "").trim() && /* @__PURE__ */ React.createElement("span", { className: "pa-field-check" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 11 }))), meta.long ? /* @__PURE__ */ React.createElement("textarea", { className: "pa-textarea", rows: 3, ...common }) : /* @__PURE__ */ React.createElement("input", { className: "pa-input", type: "text", ...common }));
  })), /* @__PURE__ */ React.createElement("div", { className: "pa-tone-section" }, /* @__PURE__ */ React.createElement("span", { className: "pa-tone-label" }, "Tone remix"), /* @__PURE__ */ React.createElement("div", { className: "pa-tone-tabs", role: "group", "aria-label": "Tone" }, TONES.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t.id,
      className: "pa-tone-tab" + (toneId === t.id ? " is-active" : ""),
      onClick: () => setToneId(t.id)
    },
    t.label
  ))), toneId !== "original" && /* @__PURE__ */ React.createElement("p", { className: "pa-tone-hint" }, toneId === "formal" && "Adds a formal-tone instruction at the end of your prompt.", toneId === "casual" && "Adds a casual, friendly-tone instruction to the prompt.", toneId === "hinglish" && "Tells the AI to respond in Hinglish \u2014 perfect for Indian social media."))), /* @__PURE__ */ React.createElement("div", { className: "pa-preview" }, /* @__PURE__ */ React.createElement("div", { className: "pa-preview-head" }, /* @__PURE__ */ React.createElement("span", { className: "pa-form-label" }, "Live preview"), /* @__PURE__ */ React.createElement("span", { className: "pa-char-count" }, finalText.length, " chars")), /* @__PURE__ */ React.createElement("div", { className: "pa-preview-card" }, /* @__PURE__ */ React.createElement(PreviewText, { prompt: prompt.prompt, values }), toneId !== "original" && /* @__PURE__ */ React.createElement("p", { className: "pa-tone-suffix-preview" }, activeTone.suffix.trim())), /* @__PURE__ */ React.createElement("p", { className: "pa-preview-hint" }, filledCount === tokens.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 13 }), " All set \u2014 copy and paste into your AI tool.") : "Fill the highlighted blanks to complete your prompt."))), /* @__PURE__ */ React.createElement("div", { className: "pa-modal-foot" }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary pa-btn-lg" + (copied ? " is-copied" : ""), onClick: doCopy }, /* @__PURE__ */ React.createElement(Icon, { name: copied ? "check" : "copy", size: 16 }), copied ? "Copied to clipboard" : "Copy filled prompt"), /* @__PURE__ */ React.createElement("div", { className: "pa-ai-wrap", ref: aiRef, style: { position: "relative" } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-ghost pa-btn-lg pa-ai-btn" + (showAI ? " is-open" : ""), onClick: () => setShowAI((v) => !v) }, /* @__PURE__ */ React.createElement(Icon, { name: "robot", size: 16 }), " Open in AI ", /* @__PURE__ */ React.createElement("span", { className: "pa-ai-chevron" }, "\u25BE")), showAI && /* @__PURE__ */ React.createElement("div", { className: "pa-ai-dropdown pa-ai-dropdown-up" }, MODAL_AI.map((t) => /* @__PURE__ */ React.createElement("button", { key: t.name, className: "pa-ai-option", onClick: () => openInAI(t) }, /* @__PURE__ */ React.createElement("span", { className: "pa-ai-dot", style: { background: t.color + "22", color: t.color } }, t.sym), t.name)))))));
}
window.CustomizeModal = CustomizeModal;
