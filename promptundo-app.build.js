const { useState, useEffect, useMemo, useRef, useDeferredValue } = React;
const XP_CONFIG = {
  copy: 10,
  save: 5,
  customize: 15,
  donate: 50,
  levelUp: 100
};
const LEVEL_THRESHOLDS = [0, 100, 250, 450, 700, 1e3, 1350, 1750, 2200, 2700];
const LEVEL_EMOJIS = ["\u{1F331}", "\u{1F33F}", "\u{1F340}", "\u{1F33E}", "\u{1F333}", "\u{1F332}", "\u{1F3C6}", "\u2B50", "\u2728", "\u{1F680}"];
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
function fmtBig(n) {
  if (n >= 1e5) return (n / 1e5).toFixed(1).replace(/\.0$/, "") + "L";
  if (n >= 1e3) return Math.round(n / 1e3) + "K";
  return String(n);
}
function seededHash(str) {
  let h = 0;
  const s = String(str);
  for (let i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return Math.abs(h) % 100;
}
function loadStreak() {
  try {
    const today = (/* @__PURE__ */ new Date()).toDateString();
    const last = localStorage.getItem("pa_sday");
    const cnt = parseInt(localStorage.getItem("pa_scnt") || "0", 10);
    const yesterday = new Date(Date.now() - 864e5).toDateString();
    const next = last === today ? cnt : last === yesterday ? cnt + 1 : 1;
    if (last !== today) {
      localStorage.setItem("pa_sday", today);
      localStorage.setItem("pa_scnt", String(next));
    }
    return next;
  } catch (e) {
    return 1;
  }
}
const AI_TOOLS = [
  { name: "ChatGPT", urlQ: "https://chatgpt.com/?q=", color: "#10A37F", sym: "G" },
  { name: "Claude", urlQ: "https://claude.ai/new?q=", color: "#D97706", sym: "C" },
  { name: "Gemini", urlQ: "https://gemini.google.com/app?q=", color: "#4285F4", sym: "\u2726" },
  { name: "Grok", urlQ: "https://x.com/i/grok?text=", color: "#9333EA", sym: "X" },
  { name: "Perplexity", urlQ: "https://www.perplexity.ai/?q=", color: "#20B2AA", sym: "P" },
  { name: "Copilot", urlQ: "https://copilot.microsoft.com/?q=", color: "#0078D4", sym: "M" }
];
const PACKS = [
  { id: "reel-hooks", name: "Reel Hook Starter", emoji: "\u{1F3AF}", desc: "Stop-the-scroll openers for Reels & Shorts", query: "hook reel", cat: "all", free: true, count: 12, color: "#FF6B6B" },
  { id: "festival", name: "Festival Campaign Kit", emoji: "\u{1FA94}", desc: "Diwali, Holi, Eid, Christmas campaigns", query: "festival diwali holi", cat: "all", free: true, count: 18, color: "#F59E0B" },
  { id: "starter", name: "First Post Starter", emoji: "\u{1F331}", desc: "For beginners \u2014 fill & post in 2 min", query: "caption beginner", cat: "all", free: true, count: 8, color: "#10B981" },
  { id: "dtc-ads", name: "D2C Ads Masterkit", emoji: "\u{1F4B0}", desc: "High-converting ad copies for Indian D2C", query: "ad sales product", cat: "all", free: false, price: 99, count: 25, color: "#8B5CF6" },
  { id: "freelancer", name: "Freelancer Client Pack", emoji: "\u{1F4BC}", desc: "Win clients, proposals, handle objections", query: "client proposal email", cat: "all", free: false, price: 99, count: 20, color: "#3B82F6" },
  { id: "wedding", name: "Wedding Planner Pro", emoji: "\u{1F48D}", desc: "Captions, ads, pitches for wedding biz", query: "wedding event", cat: "all", free: false, price: 149, count: 30, color: "#EC4899" }
];
const SPONSORED_SLOT = {
  id: "__sponsored_1__",
  cat: "ads",
  title: "Design your post in 30 seconds with Canva AI",
  desc: "Turn any prompt into a ready-to-post design. Sponsored by Canva.",
  prompt: "Create a professional social media post for [BRAND NAME] about [TOPIC]. Make it visually appealing with [COLOR THEME] and include a clear call-to-action for [GOAL].",
  tags: ["design", "social", "canva"],
  isSponsored: true,
  sponsorName: "Canva",
  sponsorUrl: "https://canva.com",
  sponsorCta: "Try Canva Free \u2192"
};
function XPBar({ xp, level }) {
  const nextLevelXP = getNextLevelXP(level);
  const currentLevelXP = getXPForLevel(level);
  const progress = (xp - currentLevelXP) / (nextLevelXP - currentLevelXP) * 100;
  return /* @__PURE__ */ React.createElement("div", { className: "pa-xp-bar" }, /* @__PURE__ */ React.createElement("div", { className: "pa-xp-fill", style: { width: progress + "%" } }));
}
function XPPop({ x, y, amount, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 800);
    return () => clearTimeout(timer);
  }, [onDone]);
  return /* @__PURE__ */ React.createElement("div", { className: "pa-xp-pop", style: { left: x + "px", top: y + "px" } }, "+" + amount + " XP");
}
function LevelUpCelebration({ level, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 2800);
    return () => clearTimeout(timer);
  }, [onDismiss]);
  return /* @__PURE__ */ React.createElement("div", { className: "pa-level-up" }, /* @__PURE__ */ React.createElement("div", { className: "pa-level-up-emoji" }, LEVEL_EMOJIS[level] || "\u2B50"), /* @__PURE__ */ React.createElement("div", { className: "pa-level-up-text" }, "Level " + level + " Unlocked!"), /* @__PURE__ */ React.createElement("div", { className: "pa-level-up-sub" }, "Keep exploring to reach the next level"));
}
function Reveal({ children, delay = 0, className = "", tag = "div" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    const fb = setTimeout(() => setSeen(true), 2e3);
    return () => {
      io.disconnect();
      clearTimeout(fb);
    };
  }, []);
  const Tag = tag;
  return /* @__PURE__ */ React.createElement(Tag, { ref, className: "reveal " + (seen ? "in " : "") + className, style: { transitionDelay: delay + "ms" } }, children);
}
function CountUp({ end, suffix = "", dur = 1200 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) {
      run();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    const fb = setTimeout(run, 2200);
    return () => {
      io.disconnect();
      clearTimeout(fb);
    };
  }, [end]);
  return /* @__PURE__ */ React.createElement("span", { ref }, val, suffix);
}
function CopyButton({ text, onCopy, label, onXP, ref: btnRef }) {
  const [copied, setCopied] = useState(false);
  const [ripple, setRipple] = useState(false);
  const localRef = useRef(null);
  const onClick = (e) => {
    e.stopPropagation();
    navigator.clipboard && navigator.clipboard.writeText(text);
    setCopied(true);
    setRipple(true);
    setTimeout(() => setRipple(false), 520);
    setTimeout(() => setCopied(false), 1400);
    onCopy && onCopy();
    if (onXP) onXP(10, localRef.current);
  };
  return /* @__PURE__ */ React.createElement("button", { ref: localRef, className: "pa-btn pa-btn-ghost pa-copy-btn" + (copied ? " is-copied" : "") + (ripple ? " is-rippling" : ""), onClick }, /* @__PURE__ */ React.createElement(Icon, { name: copied ? "check" : "copy", size: 15 }), copied ? "Copied" : label || "Copy");
}
function DailyBanner({ prompt, streak, catMap, onOpen, onDismiss }) {
  if (!prompt) return null;
  const cat = catMap[prompt.cat];
  return /* @__PURE__ */ React.createElement("div", { className: "pa-daily" }, /* @__PURE__ */ React.createElement("div", { className: "pa-daily-inner" }, /* @__PURE__ */ React.createElement("div", { className: "pa-daily-left" }, /* @__PURE__ */ React.createElement("span", { className: "pa-daily-fire" }, "\u{1F525}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "pa-daily-label" }, "Prompt of the Day"), /* @__PURE__ */ React.createElement("div", { className: "pa-daily-streak" }, streak > 1 ? streak + "-day streak" : "Day 1 \u2014 start your streak!"))), /* @__PURE__ */ React.createElement("div", { className: "pa-daily-mid" }, cat && /* @__PURE__ */ React.createElement("span", { className: "pa-daily-cat" }, cat.name), /* @__PURE__ */ React.createElement("span", { className: "pa-daily-title" }, prompt.title)), /* @__PURE__ */ React.createElement("div", { className: "pa-daily-right" }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary pa-btn-sm", onClick: () => onOpen(prompt) }, "Open \u2192"), /* @__PURE__ */ React.createElement("button", { className: "pa-daily-close", onClick: onDismiss, "aria-label": "Dismiss" }, "\u2715"))));
}
function RecentTray({ recent, catMap, onOpen, onClear }) {
  if (!recent.length) return null;
  return /* @__PURE__ */ React.createElement("div", { className: "pa-recent-tray" }, /* @__PURE__ */ React.createElement("span", { className: "pa-recent-label" }, "\u23F1 Recent"), /* @__PURE__ */ React.createElement("div", { className: "pa-recent-items" }, recent.map((p) => /* @__PURE__ */ React.createElement("button", { key: p.id, className: "pa-recent-chip", onClick: () => onOpen(p), title: p.title }, /* @__PURE__ */ React.createElement("span", { className: "pa-recent-dot" }), /* @__PURE__ */ React.createElement("span", { className: "pa-recent-text" }, p.title)))), /* @__PURE__ */ React.createElement("button", { className: "pa-recent-clear", onClick: onClear, title: "Clear history" }, "\u2715"));
}
function PackCard({ pack, unlocked, onUnlockClick, onActivate }) {
  const isOpen = pack.free || unlocked;
  return /* @__PURE__ */ React.createElement("div", { className: "pa-pack-card", style: { "--pack-color": pack.color } }, /* @__PURE__ */ React.createElement("div", { className: "pa-pack-top" }, /* @__PURE__ */ React.createElement("span", { className: "pa-pack-emoji" }, pack.emoji), /* @__PURE__ */ React.createElement("span", { className: "pa-pack-badge" + (pack.free ? " is-free" : "") }, pack.free ? "Free" : "\u20B9" + pack.price)), /* @__PURE__ */ React.createElement("h3", { className: "pa-pack-name" }, pack.name), /* @__PURE__ */ React.createElement("p", { className: "pa-pack-desc" }, pack.desc), /* @__PURE__ */ React.createElement("div", { className: "pa-pack-count" }, /* @__PURE__ */ React.createElement("span", { className: "pa-pack-dot" }), " ", pack.count, " prompts"), isOpen ? /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary", style: { width: "100%", marginTop: "auto" }, onClick: () => onActivate(pack) }, "Explore Pack \u2192") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "pa-pack-lock" }, "\u{1F512} Premium Pack"), /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary", style: { width: "100%" }, onClick: () => onUnlockClick(pack) }, "Unlock for \u20B9" + pack.price)));
}
function PacksView({ packs, unlocked, onUnlockClick, onActivate, onBack }) {
  return /* @__PURE__ */ React.createElement("div", { className: "pa-packs-section" }, /* @__PURE__ */ React.createElement("div", { className: "pa-packs-head" }, /* @__PURE__ */ React.createElement("button", { className: "pa-back-btn", onClick: onBack }, "\u2190 Back to prompts"), /* @__PURE__ */ React.createElement("h2", { className: "pa-packs-title" }, "Prompt Collections"), /* @__PURE__ */ React.createElement("p", { className: "pa-packs-sub" }, "Curated packs for specific goals. Free packs open instantly \u2014 no sign-up.")), /* @__PURE__ */ React.createElement("div", { className: "pa-packs-grid" }, packs.map((pack) => /* @__PURE__ */ React.createElement(PackCard, { key: pack.id, pack, unlocked: unlocked.has(pack.id), onUnlockClick, onActivate }))));
}
function PackUnlockModal({ pack, onClose, onUnlocked }) {
  const TIP_UPI = "vaibhavvarunmr@okicici";
  const [phase, setPhase] = useState("pay");
  const [txnId, setTxnId] = useState("");
  const [cpd, setCpd] = useState(false);
  function copyUPI() {
    navigator.clipboard?.writeText(TIP_UPI);
    setCpd(true);
    setTimeout(() => setCpd(false), 1800);
  }
  function handlePay() {
    window.location.href = "upi://pay?pa=" + TIP_UPI + "&pn=PromptUndo&am=" + pack.price + "&cu=INR&tn=Unlock%20" + encodeURIComponent(pack.name);
  }
  function handleVerify() {
    if (!txnId.trim()) return;
    setPhase("verifying");
    setTimeout(() => {
      setPhase("done");
      onUnlocked(pack.id);
    }, 2e3);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "tip-backdrop", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "tip-card", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "tip-close", onClick: onClose }, "\u2715"), phase === "pay" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "tip-header" }, /* @__PURE__ */ React.createElement("span", { className: "tip-emoji" }, pack.emoji), /* @__PURE__ */ React.createElement("h2", null, "Unlock " + pack.name), /* @__PURE__ */ React.createElement("p", null, pack.desc)), /* @__PURE__ */ React.createElement("div", { className: "pa-unlock-meta" }, "\u20B9" + pack.price + " \xB7 One-time \xB7 Unlock forever \xB7 " + pack.count + " prompts"), /* @__PURE__ */ React.createElement("button", { className: "tip-pay-btn", onClick: handlePay }, "Pay \u20B9" + pack.price + " via UPI"), /* @__PURE__ */ React.createElement("div", { className: "tip-upi-row", style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "tip-upi-box" }, /* @__PURE__ */ React.createElement("span", { className: "tip-upi-label" }, "UPI ID"), /* @__PURE__ */ React.createElement("span", { className: "tip-upi-value" }, TIP_UPI), /* @__PURE__ */ React.createElement("button", { className: "tip-copy-btn", onClick: copyUPI }, cpd ? "\u2713" : "Copy"))), /* @__PURE__ */ React.createElement("div", { className: "pa-txn-row" }, /* @__PURE__ */ React.createElement("input", { className: "pa-input", placeholder: "Enter UPI transaction ID after paying", value: txnId, onChange: (e) => setTxnId(e.target.value), style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary", onClick: handleVerify, disabled: !txnId.trim() }, "Verify")), /* @__PURE__ */ React.createElement("p", { className: "tip-fine" }, "Pay \u2192 come back \u2192 paste transaction ID \u2192 unlock instantly")), phase === "verifying" && /* @__PURE__ */ React.createElement("div", { className: "pa-unlock-verifying" }, /* @__PURE__ */ React.createElement("div", { className: "pa-spinner" }), /* @__PURE__ */ React.createElement("p", null, "Verifying payment...")), phase === "done" && /* @__PURE__ */ React.createElement("div", { className: "pa-unlock-done" }, /* @__PURE__ */ React.createElement("span", { className: "pa-unlock-check" }, "\u2705"), /* @__PURE__ */ React.createElement("h2", null, pack.name + " unlocked!"), /* @__PURE__ */ React.createElement("p", null, "All " + pack.count + " prompts are now available to you forever."), /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary", style: { display: "inline-flex", flex: "none", padding: "0 28px", marginTop: 20 }, onClick: onClose }, "Explore Pack \u2192"))));
}
function BadgeModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const siteUrl = "https://prompt-engineer-sage.vercel.app";
  const code = '<a href="' + siteUrl + '" target="_blank" rel="noopener"><img src="' + siteUrl + '/badge.svg" alt="Made with PromptUndo" height="24" /></a>';
  function copyCode() {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "tip-backdrop", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "tip-card", style: { maxWidth: 460 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "tip-close", onClick: onClose }, "\u2715"), /* @__PURE__ */ React.createElement("div", { className: "tip-header" }, /* @__PURE__ */ React.createElement("span", { className: "tip-emoji" }, "\u{1F3F7}\uFE0F"), /* @__PURE__ */ React.createElement("h2", null, "Built with PromptUndo"), /* @__PURE__ */ React.createElement("p", null, "Add this badge to your website, portfolio, or client deliverables.")), /* @__PURE__ */ React.createElement("div", { className: "pa-badge-preview" }, /* @__PURE__ */ React.createElement("span", { className: "pa-badge-widget" }, "\u26A1 Made with PromptUndo")), /* @__PURE__ */ React.createElement("pre", { className: "pa-badge-code" }, code), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "pa-btn pa-btn-primary" + (copied ? " is-copied" : ""),
      onClick: copyCode,
      style: { width: "100%", marginTop: 14 }
    },
    /* @__PURE__ */ React.createElement(Icon, { name: copied ? "check" : "copy", size: 15 }),
    copied ? "Copied!" : "Copy embed code"
  ), /* @__PURE__ */ React.createElement("p", { className: "tip-fine" }, "This badge links back to PromptUndo \u2014 helps us grow and stay free \u{1F64F}")));
}
function PromptCard({ prompt, category, index, onOpen, isSaved, onSave, onCopy, onXP }) {
  const blanks = prompt.prompt.match(/\[([A-Z0-9_ ]+)\]/g) || [];
  const count = new Set(blanks.map((b) => b.replace(/[\[\]]/g, "").trim())).size;
  const wordCount = prompt.prompt.trim().split(/\s+/).length;
  const score = seededHash(prompt.id);
  const popBadge = score > 85 ? "trending" : score > 68 ? "popular" : null;
  const [showAI, setShowAI] = useState(false);
  const aiRef = useRef(null);
  useEffect(() => {
    if (!showAI) return;
    const onOut = (e) => {
      if (aiRef.current && !aiRef.current.contains(e.target)) setShowAI(false);
    };
    document.addEventListener("mousedown", onOut);
    return () => document.removeEventListener("mousedown", onOut);
  }, [showAI]);
  function launchAI(tool) {
    const encoded = encodeURIComponent(prompt.prompt);
    window.open(tool.urlQ + encoded, "_blank", "noopener,noreferrer");
    onCopy && onCopy("Opened " + tool.name + " \u2014 prompt auto-filled \u2197");
    setShowAI(false);
  }
  function sharePrompt(e) {
    e.stopPropagation();
    const text = prompt.title + "\n\n" + prompt.prompt + "\n\nGet 12K+ free AI prompts \u2192 prompt-engineer-sage.vercel.app";
    if (navigator.share) {
      navigator.share({ title: prompt.title, text }).catch(() => {
      });
    } else {
      window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank", "noopener");
      onCopy && onCopy("Opening WhatsApp \u2197");
    }
  }
  if (prompt.isSponsored) {
    return /* @__PURE__ */ React.createElement(Reveal, { delay: index % 9 * 55 }, /* @__PURE__ */ React.createElement("a", { className: "pa-card pa-card-sponsored", href: prompt.sponsorUrl, target: "_blank", rel: "noopener noreferrer sponsored" }, /* @__PURE__ */ React.createElement("div", { className: "pa-card-top" }, /* @__PURE__ */ React.createElement("span", { className: "pa-sponsored-label" }, "Sponsored \xB7 " + prompt.sponsorName)), /* @__PURE__ */ React.createElement("h3", { className: "pa-card-title" }, prompt.title), /* @__PURE__ */ React.createElement("p", { className: "pa-card-desc" }, prompt.desc), /* @__PURE__ */ React.createElement("div", { className: "pa-card-preview" }, /* @__PURE__ */ React.createElement("span", { className: "pa-card-preview-label" }, "SAMPLE PROMPT"), prompt.prompt), /* @__PURE__ */ React.createElement("div", { className: "pa-card-actions", style: { marginTop: "auto", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("span", { className: "pa-btn pa-btn-primary", style: { flex: 1, justifyContent: "center" } }, prompt.sponsorCta))));
  }
  return /* @__PURE__ */ React.createElement(Reveal, { delay: index % 9 * 55 }, /* @__PURE__ */ React.createElement("article", { className: "pa-card", onClick: () => onOpen(prompt) }, /* @__PURE__ */ React.createElement("div", { className: "pa-card-top" }, /* @__PURE__ */ React.createElement("span", { className: "pa-cat-chip" }, /* @__PURE__ */ React.createElement("span", { className: "pa-cat-chip-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: category.id, size: 15 })), category.name), /* @__PURE__ */ React.createElement("div", { className: "pa-card-top-right" }, popBadge && /* @__PURE__ */ React.createElement("span", { className: "pa-pop-badge is-" + popBadge }, popBadge === "trending" ? "\u{1F525} Trending" : "\u26A1 Popular"), /* @__PURE__ */ React.createElement("span", { className: "pa-blanks-tag" }, /* @__PURE__ */ React.createElement(Icon, { name: "brackets", size: 12 }), " ", count), /* @__PURE__ */ React.createElement("button", { className: "pa-save-btn" + (isSaved ? " is-saved" : ""), onClick: (e) => {
    e.stopPropagation();
    onSave(prompt);
    if (onXP && !isSaved) onXP(5, e.target);
  }, title: isSaved ? "Unsave" : "Save" }, isSaved ? "\u2665" : "\u2661"), /* @__PURE__ */ React.createElement("button", { className: "pa-share-btn", onClick: sharePrompt, title: "Share prompt" }, "\u2197"))), /* @__PURE__ */ React.createElement("h3", { className: "pa-card-title" }, prompt.title), /* @__PURE__ */ React.createElement("p", { className: "pa-card-desc" }, prompt.desc), /* @__PURE__ */ React.createElement("div", { className: "pa-card-preview" }, /* @__PURE__ */ React.createElement("span", { className: "pa-card-preview-label" }, "PROMPT"), prompt.prompt), /* @__PURE__ */ React.createElement("div", { className: "pa-card-footer" }, /* @__PURE__ */ React.createElement("div", { className: "pa-card-tags" }, prompt.tags.slice(0, 3).map((t) => /* @__PURE__ */ React.createElement("span", { key: t, className: "pa-tag" }, "#" + t))), /* @__PURE__ */ React.createElement("span", { className: "pa-word-count" }, wordCount, "w")), /* @__PURE__ */ React.createElement("div", { className: "pa-card-actions" }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary", onClick: (e) => {
    e.stopPropagation();
    onOpen(prompt);
    if (onXP) onXP(15, e.target);
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "wand", size: 15 }), " ", "Customize"), /* @__PURE__ */ React.createElement(CopyButton, { text: prompt.prompt, onCopy: () => onCopy && onCopy("Prompt copied \u2713"), onXP }), /* @__PURE__ */ React.createElement("div", { className: "pa-ai-wrap", ref: aiRef, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-ai-btn" + (showAI ? " is-open" : ""), onClick: () => setShowAI((v) => !v) }, "\u2726 Try AI", " ", /* @__PURE__ */ React.createElement("span", { className: "pa-ai-chevron" }, "\u25BE")), showAI && /* @__PURE__ */ React.createElement("div", { className: "pa-ai-dropdown" }, AI_TOOLS.map((t) => /* @__PURE__ */ React.createElement("button", { key: t.name, className: "pa-ai-option", onClick: () => launchAI(t) }, /* @__PURE__ */ React.createElement("span", { className: "pa-ai-dot", style: { background: t.color + "22", color: t.color } }, t.sym), t.name)))))));
}
function CategoryBar({ categories, counts, active, onSelect }) {
  return /* @__PURE__ */ React.createElement("div", { className: "pa-catbar" }, /* @__PURE__ */ React.createElement("div", { className: "pa-catbar-inner" }, categories.map((c) => /* @__PURE__ */ React.createElement("button", { key: c.id, className: "pa-pill" + (active === c.id ? " is-active" : ""), onClick: () => onSelect(c.id) }, /* @__PURE__ */ React.createElement(Icon, { name: c.id, size: 15, className: "pa-pill-icon" }), /* @__PURE__ */ React.createElement("span", null, c.name), /* @__PURE__ */ React.createElement("span", { className: "pa-pill-count" }, fmtBig(counts[c.id] || 0))))));
}
function Hero({ query, setQuery, totalLabel, categories, activeCat, onSetCat, searchRef, onSearchKey }) {
  const chips = ["Free forever", "No login", "Hinglish-friendly", "\u20B90"];
  return /* @__PURE__ */ React.createElement("header", { className: "pa-hero" }, /* @__PURE__ */ React.createElement("div", { className: "pa-aurora" }, /* @__PURE__ */ React.createElement("span", { className: "pa-aurora-a" }), /* @__PURE__ */ React.createElement("span", { className: "pa-aurora-b" }), /* @__PURE__ */ React.createElement("span", { className: "pa-aurora-c" })), /* @__PURE__ */ React.createElement("div", { className: "pa-hero-inner" }, /* @__PURE__ */ React.createElement("div", { className: "pa-hero-copy" }, /* @__PURE__ */ React.createElement("span", { className: "pa-eyebrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 13 }), " ", /* @__PURE__ */ React.createElement("strong", { style: { fontWeight: 700 } }, totalLabel, "+"), "\xA0", "free prompts \xB7 no sign-up"), /* @__PURE__ */ React.createElement("h1", { className: "pa-hero-title" }, "Stop fighting with AI.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "pa-hero-title-2" }, "Just copy a prompt that works.")), /* @__PURE__ */ React.createElement("p", { className: "pa-hero-sub" }, "A free library of fill-in-the-blank AI prompts for India's creators and small businesses. Pick one, add your details, copy, paste. That's it."), /* @__PURE__ */ React.createElement("div", { className: "pa-search" }, /* @__PURE__ */ React.createElement("span", { className: "pa-search-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 20 })), /* @__PURE__ */ React.createElement("input", { ref: searchRef, className: "pa-search-input", value: query, onChange: (e) => setQuery(e.target.value), onKeyDown: onSearchKey, placeholder: 'Search "Reel hook", "Diwali sale", "caption"...', "aria-label": "Search prompts" }), query ? /* @__PURE__ */ React.createElement("button", { className: "pa-search-clear", onClick: () => setQuery(""), "aria-label": "Clear" }, /* @__PURE__ */ React.createElement(Icon, { name: "close", size: 13 })) : /* @__PURE__ */ React.createElement("kbd", { className: "pa-search-kbd" }, "/ to search")), /* @__PURE__ */ React.createElement("div", { className: "pa-quick-cats", role: "group", "aria-label": "Quick category filter" }, /* @__PURE__ */ React.createElement("button", { className: "pa-quick-cat" + (activeCat === "all" ? " is-active" : ""), onClick: () => onSetCat("all") }, "All"), categories.filter((c) => c.id !== "all").map((c) => /* @__PURE__ */ React.createElement("button", { key: c.id, className: "pa-quick-cat" + (activeCat === c.id ? " is-active" : ""), onClick: () => onSetCat(c.id) }, c.name))), /* @__PURE__ */ React.createElement("div", { className: "pa-trust" }, chips.map((c, i) => /* @__PURE__ */ React.createElement("span", { key: c, className: "pa-trust-chip" }, /* @__PURE__ */ React.createElement(Icon, { name: TRUST_ICON[i], size: 14 }), c)))), /* @__PURE__ */ React.createElement("div", { className: "pa-hero-demo" }, /* @__PURE__ */ React.createElement(HeroDemo, null))));
}
function Stats() {
  const items = [
    { n: window.PA.VIRTUAL_TOTAL, s: "+", label: "ready-to-use prompts" },
    { n: 16, s: "", label: "creator categories" },
    { n: 0, s: "", label: "logins or sign-ups" },
    { n: 0, s: "", label: "rupees, forever", prefix: "\u20B9" }
  ];
  return /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "pa-stats" }, items.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "pa-stat", key: i }, /* @__PURE__ */ React.createElement("span", { className: "pa-stat-n" }, it.prefix || "", /* @__PURE__ */ React.createElement(CountUp, { end: it.n, suffix: it.s })), /* @__PURE__ */ React.createElement("span", { className: "pa-stat-l" }, it.label)))));
}
function HowItWorks({ steps }) {
  return /* @__PURE__ */ React.createElement("section", { className: "pa-section pa-section-tint", id: "how" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "pa-section-head" }, /* @__PURE__ */ React.createElement("span", { className: "pa-kicker" }, "The flow"), /* @__PURE__ */ React.createElement("h2", { className: "pa-section-title" }, "From blank page to posted in four steps"), /* @__PURE__ */ React.createElement("p", { className: "pa-section-sub" }, "No prompt-engineering degree required."))), /* @__PURE__ */ React.createElement("div", { className: "pa-steps" }, steps.map((s, i) => /* @__PURE__ */ React.createElement(Reveal, { key: i, delay: i * 80 }, /* @__PURE__ */ React.createElement("div", { className: "pa-step" }, /* @__PURE__ */ React.createElement("div", { className: "pa-step-num" }, "0" + (i + 1)), /* @__PURE__ */ React.createElement("div", { className: "pa-step-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: STEP_ICON[i], size: 22 })), /* @__PURE__ */ React.createElement("h3", { className: "pa-step-title" }, s.title), /* @__PURE__ */ React.createElement("p", { className: "pa-step-text" }, s.text))))));
}
function Tools({ tools }) {
  return /* @__PURE__ */ React.createElement("section", { className: "pa-section", id: "tools" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("div", { className: "pa-section-head" }, /* @__PURE__ */ React.createElement("span", { className: "pa-kicker" }, "The kit"), /* @__PURE__ */ React.createElement("h2", { className: "pa-section-title" }, "Tools we'd actually recommend"), /* @__PURE__ */ React.createElement("p", { className: "pa-section-sub" }, "Everything you need to make, sell, and grow."))), /* @__PURE__ */ React.createElement("div", { className: "pa-tools" }, tools.map((t, i) => /* @__PURE__ */ React.createElement(Reveal, { key: t.name, delay: i % 3 * 70 }, /* @__PURE__ */ React.createElement("a", { className: "pa-tool", href: t.url, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ React.createElement("div", { className: "pa-tool-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: TOOL_ICON[t.name] || "spark", size: 22 })), /* @__PURE__ */ React.createElement("div", { className: "pa-tool-main" }, /* @__PURE__ */ React.createElement("div", { className: "pa-tool-top" }, /* @__PURE__ */ React.createElement("span", { className: "pa-tool-name" }, t.name), /* @__PURE__ */ React.createElement("span", { className: "pa-tool-badge" }, t.badge)), /* @__PURE__ */ React.createElement("p", { className: "pa-tool-blurb" }, t.blurb)), /* @__PURE__ */ React.createElement("span", { className: "pa-tool-arrow" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowUpRight", size: 16 })))))), /* @__PURE__ */ React.createElement("p", { className: "pa-tools-note" }, "Some links are affiliate links \u2014 they keep PromptUndo free forever, at no cost to you."));
}
function Footer({ onBadge }) {
  return /* @__PURE__ */ React.createElement("footer", { className: "pa-footer" }, /* @__PURE__ */ React.createElement("div", { className: "pa-footer-inner" }, /* @__PURE__ */ React.createElement("div", { className: "pa-footer-brand" }, /* @__PURE__ */ React.createElement("div", { className: "pa-logo" }, /* @__PURE__ */ React.createElement("span", { className: "pa-logo-mark" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 16 })), " PromptUndo"), /* @__PURE__ */ React.createElement("p", { className: "pa-footer-mission" }, "A free, forever-open library of AI prompts for India's creators and small businesses."), /* @__PURE__ */ React.createElement("button", { className: "pa-badge-link", onClick: onBadge }, '\u{1F3F7}\uFE0F Add "Made with PromptUndo" badge')), /* @__PURE__ */ React.createElement("div", { className: "pa-footer-col" }, /* @__PURE__ */ React.createElement("span", { className: "pa-footer-h" }, "Explore"), /* @__PURE__ */ React.createElement("a", { href: "#top" }, "All prompts"), /* @__PURE__ */ React.createElement("a", { href: "#how" }, "How it works"), /* @__PURE__ */ React.createElement("a", { href: "#tools" }, "Tools")), /* @__PURE__ */ React.createElement("div", { className: "pa-footer-col" }, /* @__PURE__ */ React.createElement("span", { className: "pa-footer-h" }, "The promise"), /* @__PURE__ */ React.createElement("span", { className: "pa-footer-promise" }, /* @__PURE__ */ React.createElement(Icon, { name: "infinity", size: 15 }), "Free forever"), /* @__PURE__ */ React.createElement("span", { className: "pa-footer-promise" }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 15 }), "No sign-up, no email wall"), /* @__PURE__ */ React.createElement("span", { className: "pa-footer-promise" }, /* @__PURE__ */ React.createElement(TriFlag, { w: 17 }), "Made in India"))), /* @__PURE__ */ React.createElement("div", { className: "pa-footer-bar" }, "\xA9 2026 PromptUndo \xB7 Copy, fill, paste, done."));
}
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
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [openPrompt, setOpenPrompt] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const PAGE = 60;
  const [limit, setLimit] = useState(PAGE);
  const [xp, setXP] = useState(() => {
    try {
      return parseInt(localStorage.getItem("pa_xp") || "0", 10);
    } catch (e) {
      return 0;
    }
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
    try {
      localStorage.setItem("pa_xp", String(newXP));
    } catch (e) {
    }
    if (fromElement) {
      const rect = fromElement.getBoundingClientRect();
      const popId = Math.random();
      setXpPopups((prev) => [...prev, { id: popId, x: rect.left + rect.width / 2, y: rect.top, amount }]);
      setTimeout(() => {
        setXpPopups((prev) => prev.filter((p) => p.id !== popId));
      }, 800);
    }
    if (newLevel > oldLevel) {
      setLevelUpLevel(newLevel);
      setLevelUpShow(true);
    }
  }
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem("pa_theme");
      if (s) return s === "dark";
    } catch (e) {
    }
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try {
      localStorage.setItem("pa_theme", dark ? "dark" : "light");
    } catch (e) {
    }
  }, [dark]);
  const [savedPrompts, setSavedPrompts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pa_saved") || "[]");
    } catch (e) {
      return [];
    }
  });
  const savedIds = useMemo(() => new Set(savedPrompts.map((p) => p.id)), [savedPrompts]);
  const [showSaved, setShowSaved] = useState(false);
  function toggleSave(prompt) {
    setSavedPrompts((prev) => {
      const exists = prev.some((p) => p.id === prompt.id);
      const next = exists ? prev.filter((p) => p.id !== prompt.id) : [...prev, { id: prompt.id, title: prompt.title, desc: prompt.desc, prompt: prompt.prompt, tags: prompt.tags, cat: prompt.cat }];
      try {
        localStorage.setItem("pa_saved", JSON.stringify(next));
      } catch (e) {
      }
      return next;
    });
  }
  const [streak] = useState(() => loadStreak());
  const [dailyDismissed, setDailyDismissed] = useState(() => {
    try {
      return localStorage.getItem("pa_ddm") === (/* @__PURE__ */ new Date()).toDateString();
    } catch (e) {
      return false;
    }
  });
  function dismissDaily() {
    try {
      localStorage.setItem("pa_ddm", (/* @__PURE__ */ new Date()).toDateString());
    } catch (e) {
    }
    setDailyDismissed(true);
  }
  const dailyPrompt = useMemo(() => {
    if (!PROMPTS.length) return null;
    const seed = Math.floor(Date.now() / 864e5);
    return PROMPTS[seed % PROMPTS.length];
  }, [PROMPTS]);
  const [recentPrompts, setRecentPrompts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pa_recent") || "[]");
    } catch (e) {
      return [];
    }
  });
  function addRecent(prompt) {
    setRecentPrompts((prev) => {
      const filtered = prev.filter((p) => p.id !== prompt.id);
      const next = [{ id: prompt.id, title: prompt.title, cat: prompt.cat }, ...filtered].slice(0, 5);
      try {
        localStorage.setItem("pa_recent", JSON.stringify(next));
      } catch (e) {
      }
      return next;
    });
  }
  function clearRecent() {
    setRecentPrompts([]);
    try {
      localStorage.removeItem("pa_recent");
    } catch (e) {
    }
  }
  const [showPacks, setShowPacks] = useState(false);
  const [openPackModal, setOpenPackModal] = useState(null);
  const [unlockedPacks, setUnlockedPacks] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pa_unlocked") || "[]"));
    } catch (e) {
      return /* @__PURE__ */ new Set();
    }
  });
  function unlockPack(id) {
    setUnlockedPacks((prev) => {
      const next = new Set(prev);
      next.add(id);
      try {
        localStorage.setItem("pa_unlocked", JSON.stringify([...next]));
      } catch (e) {
      }
      return next;
    });
  }
  function activatePack(pack) {
    setQuery(pack.query.split(" ")[0]);
    setActiveCat("all");
    setShowPacks(false);
    setShowSaved(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
  const [showBadge, setShowBadge] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);
  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }
  const resultsRef = useRef(null);
  const searchInputRef = useRef(null);
  function onSearchKey(e) {
    if (e.key === "Enter") resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (e.key === "Escape") setQuery("");
  }
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const TIP_UPI = "vaibhavvarunmr@okicici";
  const TIP_PHONE = "9745340983";
  const TIP_PRESETS = [10, 20, 30];
  const [tipPhase, setTipPhase] = useState("idle");
  const [tipSel, setTipSel] = useState(20);
  const [tipCustom, setTipCustom] = useState("");
  const [tipCoins, setTipCoins] = useState([]);
  const [tipCopied, setTipCopied] = useState("");
  const tipAmount = tipCustom ? parseInt(tipCustom, 10) || 0 : tipSel;
  function makeTipCoins() {
    return Array.from({ length: 34 }, (_, i) => ({
      id: i,
      x: 2 + Math.random() * 94,
      size: 36 + Math.random() * 28,
      dur: 1.5 + Math.random() * 1.8,
      delay: Math.random() * 2.4,
      r: (Math.random() > 0.5 ? 1 : -1) * (280 + Math.random() * 440),
      drift: (Math.random() - 0.5) * 130,
      type: Math.random() > 0.72 ? "star" : "coin"
    }));
  }
  function tipPay() {
    if (tipAmount < 1) return;
    try {
      localStorage.setItem("pa_tip", JSON.stringify({ amt: tipAmount, ts: Date.now() }));
    } catch (e) {
    }
    window.location.href = "upi://pay?pa=" + TIP_UPI + "&pn=PromptUndo&am=" + tipAmount + "&cu=INR&tn=Tip%20for%20PromptUndo";
  }
  function tipCopyText(text, key) {
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setTipCopied(key);
    setTimeout(() => setTipCopied(""), 1800);
  }
  const totalLabel = fmtBig(VIRTUAL_TOTAL);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    function checkReturn() {
      if (document.visibilityState !== "visible") return;
      let raw;
      try {
        raw = localStorage.getItem("pa_tip");
      } catch (e) {
        return;
      }
      if (!raw) return;
      try {
        const { amt, ts } = JSON.parse(raw);
        localStorage.removeItem("pa_tip");
        if (Date.now() - ts < 6e5) {
          setTipSel(amt);
          setTipCoins(makeTipCoins());
          setTipPhase("celebrate");
          addXP(50);
        }
      } catch (e) {
        try {
          localStorage.removeItem("pa_tip");
        } catch (e2) {
        }
      }
    }
    checkReturn();
    document.addEventListener("visibilitychange", checkReturn);
    return () => document.removeEventListener("visibilitychange", checkReturn);
  }, []);
  const catMap = useMemo(() => {
    const m = {};
    CATEGORIES.forEach((c) => m[c.id] = c);
    return m;
  }, []);
  const counts = useMemo(() => {
    const bpPerCat = {};
    BLUEPRINTS.forEach((bp) => {
      bpPerCat[bp.cat] = (bpPerCat[bp.cat] || 0) + 1;
    });
    const c = { all: VIRTUAL_TOTAL };
    PROMPTS.forEach((p) => {
      c[p.cat] = (c[p.cat] || 0) + 1;
    });
    CATEGORIES.forEach((cat) => {
      if (cat.id === "all") return;
      c[cat.id] = (c[cat.id] || 0) + (bpPerCat[cat.id] || 0) * NICHES.length;
    });
    return c;
  }, []);
  const authoredIndex = useMemo(() => {
    const hints = HINTS || {};
    const re = /\[([A-Z0-9_ ]+)\]/g;
    return PROMPTS.map((p) => {
      const title = p.title.toLowerCase();
      const tags = p.tags.join(" ").toLowerCase();
      let hintText = "";
      const seen = /* @__PURE__ */ new Set();
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(p.prompt)) !== null) {
        const tok = m[1];
        if (seen.has(tok)) continue;
        seen.add(tok);
        const h = hints[tok];
        if (h && h.hint) hintText += " " + h.hint;
      }
      const hay = title + " " + p.desc.toLowerCase() + " " + tags + " " + p.prompt.toLowerCase() + " " + hintText.toLowerCase();
      return { p, title, tags, hay };
    });
  }, []);
  const bpIndex = useMemo(() => BLUEPRINTS.map((bp) => ({
    bp,
    hay: (bp.title + " " + bp.desc + " " + bp.body + " " + bp.tags.join(" ")).toLowerCase(),
    title: bp.title.toLowerCase(),
    tags: bp.tags.join(" ").toLowerCase()
  })), []);
  const deferredQuery = useDeferredValue(query);
  const { authoredFiltered, matchedBPs, effectiveNiches } = useMemo(() => {
    const words = deferredQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const af = [];
    for (const it of authoredIndex) {
      if (activeCat !== "all" && it.p.cat !== activeCat) continue;
      if (!words.length) {
        af.push({ p: it.p, s: 0 });
        continue;
      }
      let ok = true;
      for (const w of words) {
        if (!it.hay.includes(w)) {
          ok = false;
          break;
        }
      }
      if (!ok) continue;
      let s = 0;
      for (const w of words) {
        if (it.title.includes(w)) s += 3;
        if (it.tags.includes(w)) s += 2;
      }
      af.push({ p: it.p, s });
    }
    if (words.length) af.sort((a, b) => b.s - a.s);
    const bps = [];
    for (const it of bpIndex) {
      if (activeCat !== "all" && it.bp.cat !== activeCat) continue;
      if (!words.length) {
        bps.push(it.bp);
        continue;
      }
      let ok = true;
      for (const w of words) {
        if (!it.hay.includes(w)) {
          ok = false;
          break;
        }
      }
      if (ok) bps.push(it.bp);
    }
    let effectiveNiches2;
    if (!words.length) {
      effectiveNiches2 = NICHES;
    } else {
      const hits = NICHES.filter((n) => words.some((w) => n[1].toLowerCase().includes(w) || n[2].toLowerCase().includes(w)));
      effectiveNiches2 = hits.length > 0 ? hits : NICHES;
    }
    return { authoredFiltered: af, matchedBPs: bps, effectiveNiches: effectiveNiches2 };
  }, [deferredQuery, activeCat, authoredIndex, bpIndex]);
  useEffect(() => {
    setLimit(PAGE);
  }, [deferredQuery, activeCat]);
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
        if (remaining <= 0) {
          done = true;
          break;
        }
        result.push({ id: "vbp-" + bp.id + "-" + n[0], cat: bp.cat, title: bp.title + " \u2014 " + n[1], desc: bp.desc.replace(/\{NAME\}/g, n[1]).replace(/\{LABEL\}/g, n[2]).replace(/\{AUD\}/g, n[3]), prompt: bp.body.replace(/\{NAME\}/g, n[1]).replace(/\{LABEL\}/g, n[2]).replace(/\{AUD\}/g, n[3]), tags: bp.tags.concat([n[0]]) });
        remaining--;
      }
    }
    return result;
  }, [authoredFiltered, matchedBPs, effectiveNiches, limit]);
  const savedVisible = showSaved ? savedPrompts.filter((p) => {
    if (activeCat !== "all" && p.cat !== activeCat) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q);
  }) : null;
  const displayBase = savedVisible !== null ? savedVisible : visible;
  const displayPrompts = useMemo(() => {
    if (showSaved || query || activeCat !== "all" || displayBase.length < 6) return displayBase;
    const r = [...displayBase];
    r.splice(6, 0, SPONSORED_SLOT);
    return r;
  }, [displayBase, showSaved, query, activeCat]);
  const displayTotal = savedVisible !== null ? savedVisible.length : totalFiltered;
  function handleOpenPrompt(p) {
    if (!p.isSponsored) addRecent(p);
    setOpenPrompt(p);
  }
  function switchCat(id) {
    setActiveCat(id);
    setShowSaved(false);
    setShowPacks(false);
  }
  return /* @__PURE__ */ React.createElement("div", { id: "top" }, /* @__PURE__ */ React.createElement(XPBar, { xp, level: currLevel }), xpPopups.map((pop) => /* @__PURE__ */ React.createElement(XPPop, { key: pop.id, x: pop.x, y: pop.y, amount: pop.amount, onDone: () => {
  } })), levelUpShow && /* @__PURE__ */ React.createElement(LevelUpCelebration, { level: levelUpLevel, onDismiss: () => setLevelUpShow(false) }), /* @__PURE__ */ React.createElement("nav", { className: "pa-nav" + (scrolled ? " is-scrolled" : "") }, /* @__PURE__ */ React.createElement("div", { className: "pa-nav-inner" }, /* @__PURE__ */ React.createElement("div", { className: "pa-logo" }, /* @__PURE__ */ React.createElement("span", { className: "pa-logo-mark" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 16 })), " PromptUndo"), /* @__PURE__ */ React.createElement("div", { className: "pa-nav-links" }, /* @__PURE__ */ React.createElement("a", { href: "#how" }, "How it works"), /* @__PURE__ */ React.createElement("a", { href: "#tools" }, "Tools"), /* @__PURE__ */ React.createElement("button", { className: "pa-nav-packs" + (showPacks ? " is-active" : ""), onClick: () => {
    setShowPacks((v) => !v);
    setShowSaved(false);
  } }, "\u{1F4E6} Packs"), savedPrompts.length > 0 && /* @__PURE__ */ React.createElement("button", { className: "pa-nav-saved" + (showSaved ? " is-active" : ""), onClick: () => {
    const n = !showSaved;
    setShowSaved(n);
    setShowPacks(false);
    if (n) setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  } }, "\u2665 Saved " + savedPrompts.length), /* @__PURE__ */ React.createElement("button", { className: "pa-dark-btn", onClick: () => setDark((v) => !v), title: dark ? "Light mode" : "Dark mode" }, dark ? "\u2600" : "\u263D"), /* @__PURE__ */ React.createElement("button", { className: "tip-nav-btn", onClick: () => setTipPhase("open") }, "\u2764\uFE0F Donate"), /* @__PURE__ */ React.createElement("span", { className: "pa-nav-free" }, /* @__PURE__ */ React.createElement(Icon, { name: "infinity", size: 13 }), " Free forever")))), /* @__PURE__ */ React.createElement(Hero, { query, setQuery, totalLabel, categories: CATEGORIES, activeCat, onSetCat: switchCat, searchRef: searchInputRef, onSearchKey }), !dailyDismissed && !showPacks && /* @__PURE__ */ React.createElement(DailyBanner, { prompt: dailyPrompt, streak, catMap, onOpen: handleOpenPrompt, onDismiss: dismissDaily }), /* @__PURE__ */ React.createElement(Stats, null), /* @__PURE__ */ React.createElement(CategoryBar, { categories: CATEGORIES, counts, active: activeCat, onSelect: switchCat }), showPacks ? /* @__PURE__ */ React.createElement("div", { className: "pa-main" }, /* @__PURE__ */ React.createElement(PacksView, { packs: PACKS, unlocked: unlockedPacks, onUnlockClick: setOpenPackModal, onActivate: activatePack, onBack: () => setShowPacks(false) })) : /* @__PURE__ */ React.createElement("main", { className: "pa-main", ref: resultsRef }, /* @__PURE__ */ React.createElement("div", { className: "pa-results-bar" }, showSaved && /* @__PURE__ */ React.createElement("button", { className: "pa-back-btn", onClick: () => setShowSaved(false) }, "\u2190 All prompts"), /* @__PURE__ */ React.createElement("span", { className: "pa-results-count" }, /* @__PURE__ */ React.createElement("strong", null, displayTotal > 9999 ? fmtBig(displayTotal) + "+" : displayTotal), " ", displayTotal === 1 ? "prompt" : "prompts", showSaved && " saved", !showSaved && activeCat !== "all" && catMap[activeCat] && /* @__PURE__ */ React.createElement("span", { className: "pa-results-cat" }, " in " + catMap[activeCat].name), query && /* @__PURE__ */ React.createElement("span", { className: "pa-results-cat" }, ' for "' + query + '"'))), displayTotal === 0 ? /* @__PURE__ */ React.createElement("div", { className: "pa-empty" }, /* @__PURE__ */ React.createElement("div", { className: "pa-empty-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 26 })), /* @__PURE__ */ React.createElement("h3", { className: "pa-empty-title" }, showSaved ? "No saved prompts match" : "No prompts match that yet"), /* @__PURE__ */ React.createElement("p", { className: "pa-empty-text" }, showSaved ? "Try clearing filters." : "Try a broader keyword \u2014 or browse all 16 categories."), /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-primary", onClick: () => {
    setQuery("");
    setActiveCat("all");
    setShowSaved(false);
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "all", size: 15 }), " Show all prompts")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "pa-grid", style: { opacity: stale ? 0.55 : 1, transition: "opacity .15s ease" } }, displayPrompts.map((p, i) => /* @__PURE__ */ React.createElement(PromptCard, { key: p.id, prompt: p, category: catMap[p.cat] || CATEGORIES[0], index: i, onOpen: handleOpenPrompt, isSaved: savedIds.has(p.id), onSave: toggleSave, onCopy: showToast, onXP: addXP }))), !showSaved && displayTotal > limit && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: 28 } }, /* @__PURE__ */ React.createElement("button", { className: "pa-btn pa-btn-ghost", style: { display: "inline-flex", flex: "none", padding: "0 22px" }, onClick: () => setLimit((l) => l + PAGE) }, /* @__PURE__ */ React.createElement(Icon, { name: "layers", size: 15 }), " Show more")))), /* @__PURE__ */ React.createElement(HowItWorks, { steps: STEPS }), /* @__PURE__ */ React.createElement(Tools, { tools: TOOLS }), /* @__PURE__ */ React.createElement(Footer, { onBadge: () => setShowBadge(true) }), /* @__PURE__ */ React.createElement(RecentTray, { recent: recentPrompts, catMap, onOpen: handleOpenPrompt, onClear: clearRecent }), openPrompt && !openPrompt.isSponsored && /* @__PURE__ */ React.createElement(CustomizeModal, { prompt: openPrompt, category: catMap[openPrompt.cat] || CATEGORIES[0], onClose: () => setOpenPrompt(null) }), openPackModal && /* @__PURE__ */ React.createElement(PackUnlockModal, { pack: openPackModal, onClose: () => setOpenPackModal(null), onUnlocked: (id) => {
    unlockPack(id);
    setOpenPackModal(null);
  } }), showBadge && /* @__PURE__ */ React.createElement(BadgeModal, { onClose: () => setShowBadge(false) }), tipPhase === "open" && /* @__PURE__ */ React.createElement("div", { className: "tip-backdrop", onClick: () => setTipPhase("idle") }, /* @__PURE__ */ React.createElement("div", { className: "tip-card", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "tip-close", onClick: () => setTipPhase("idle") }, "\u2715"), /* @__PURE__ */ React.createElement("div", { className: "tip-header" }, /* @__PURE__ */ React.createElement("span", { className: "tip-emoji" }, "\u2615"), /* @__PURE__ */ React.createElement("h2", null, "Buy me a chai"), /* @__PURE__ */ React.createElement("p", null, "PromptUndo is free forever. If it saved you time, a small tip keeps it alive!")), /* @__PURE__ */ React.createElement("p", { className: "tip-pick-label" }, "Pick an amount"), /* @__PURE__ */ React.createElement("div", { className: "tip-amounts" }, TIP_PRESETS.map((p) => /* @__PURE__ */ React.createElement("button", { key: p, className: "tip-amount-btn" + (tipSel === p && !tipCustom ? " is-active" : ""), onClick: () => {
    setTipSel(p);
    setTipCustom("");
  } }, "\u20B9", p))), /* @__PURE__ */ React.createElement("div", { className: "tip-custom" }, /* @__PURE__ */ React.createElement("span", { className: "tip-rupee" }, "\u20B9"), /* @__PURE__ */ React.createElement("input", { className: "tip-custom-input", type: "number", min: "1", step: "1", placeholder: "Custom amount", value: tipCustom, onChange: (e) => setTipCustom(e.target.value.replace(/\D/g, "")) })), /* @__PURE__ */ React.createElement("button", { className: "tip-pay-btn", onClick: tipPay, disabled: tipAmount < 1 }, "\u{1F389} Buy Happiness \u2014 \u20B9", tipAmount || "\u2014"), /* @__PURE__ */ React.createElement("div", { className: "tip-upi-row" }, /* @__PURE__ */ React.createElement("div", { className: "tip-upi-box" }, /* @__PURE__ */ React.createElement("span", { className: "tip-upi-label" }, "UPI ID"), /* @__PURE__ */ React.createElement("span", { className: "tip-upi-value" }, TIP_UPI), /* @__PURE__ */ React.createElement("button", { className: "tip-copy-btn", onClick: () => tipCopyText(TIP_UPI, "upi") }, tipCopied === "upi" ? "\u2713 Copied" : "Copy")), /* @__PURE__ */ React.createElement("div", { className: "tip-upi-box" }, /* @__PURE__ */ React.createElement("span", { className: "tip-upi-label" }, "GPay / PhonePe"), /* @__PURE__ */ React.createElement("span", { className: "tip-upi-value" }, TIP_PHONE), /* @__PURE__ */ React.createElement("button", { className: "tip-copy-btn", onClick: () => tipCopyText(TIP_PHONE, "phone") }, tipCopied === "phone" ? "\u2713 Copied" : "Copy"))), /* @__PURE__ */ React.createElement("p", { className: "tip-fine" }, "Tap \u2192 UPI opens \u2192 pay \u2192 come back for a surprise \u{1F38A}"))), tipPhase === "celebrate" && /* @__PURE__ */ React.createElement("div", { className: "tip-celebration", onClick: () => setTipPhase("idle") }, tipCoins.map((c) => /* @__PURE__ */ React.createElement("span", { key: c.id, className: "tip-particle" + (c.type === "star" ? " is-star" : ""), style: { left: c.x + "%", "--size": c.size + "px", "--dur": c.dur + "s", "--delay": c.delay + "s", "--r": c.r + "deg", "--drift": c.drift + "px" } }, c.type === "star" ? "\u2726" : "\u20B9")), /* @__PURE__ */ React.createElement("div", { className: "tip-thankyou" }, /* @__PURE__ */ React.createElement("span", { className: "tip-big-heart" }, "\u2764\uFE0F"), /* @__PURE__ */ React.createElement("h2", null, "You're incredible!"), /* @__PURE__ */ React.createElement("p", { className: "tip-sent" }, "\u20B9", tipAmount, " received \xB7 Thank you \u{1F64F}"), /* @__PURE__ */ React.createElement("p", { className: "tip-sub-msg" }, "This keeps PromptUndo free for everyone in India"), /* @__PURE__ */ React.createElement("button", { className: "tip-dismiss", onClick: (e) => {
    e.stopPropagation();
    setTipPhase("idle");
  } }, "Keep exploring prompts \u2192"))), toast && /* @__PURE__ */ React.createElement("div", { className: "pa-toast", role: "status" }, toast));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
