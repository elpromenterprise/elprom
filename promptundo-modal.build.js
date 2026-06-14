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
  return { hint: "Type your " + token.toLowerCase() + "\u2026", long };
}
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
  const firstRef = useRefM(null);
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
  const filledCount = tokens.filter((t) => (values[t] || "").trim()).length;
  const finalText = useMemoM(() => {
    return prompt.prompt.replace(PA_TOKEN_RE, (full, g) => {
      const v = (values[g.trim()] || "").trim();
      return v || full;
    });
  }, [prompt, values]);
  const setField = (tok, v) => setValues((prev) => ({ ...prev, [tok]: v }));
  const doCopy = () => {
    navigator.clipboard && navigator.clipboard.writeText(finalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const chatGPTHref = "https://chat.openai.com/?q=" + encodeURIComponent(finalText);
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
  }))), /* @__PURE__ */ React.createElement("div", { className: "pa-preview" }, /* @__PURE__ */ React.createElement("div", { className: "pa-preview-head" }, /* @__PURE__ */ React.createElement("span", { className: "pa-form-label" }, "Live preview"), /* @__PURE__ */ React.createElement("span", { className: "pa-char-count" }, finalText.length, " chars")), /* @__PURE__ */ React.createElement("div", { className: "pa-preview-card" }, /* @__PURE__ */ React.createElement(PreviewText, { prompt: prompt.prompt, values })), /* @__PURE__ */ React.createElement("p", { className: "pa-preview-hint" }, filledCount === tokens.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 13 }), " All set \u2014 copy it and paste into your AI tool.") : "Fill the highlighted blanks to complete your prompt."))), /* @__PURE__ */ React.createElement("div", { className: "pa-modal-foot" }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary pa-btn-lg" + (copied ? " is-copied" : ""), onClick: doCopy }, /* @__PURE__ */ React.createElement(Icon, { name: copied ? "check" : "copy", size: 16 }), copied ? "Copied to clipboard" : "Copy filled prompt"), /* @__PURE__ */ React.createElement("a", { className: "pa-btn pa-btn-ghost pa-btn-lg", href: chatGPTHref, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement(Icon, { name: "robot", size: 16 }), " Open in ChatGPT", /* @__PURE__ */ React.createElement(Icon, { name: "arrowUpRight", size: 13 })))));
}
window.CustomizeModal = CustomizeModal;
