const { useState: useStateD, useEffect: useEffectD, useRef: useRefD } = React;
const DEMOS = [
  {
    cat: "instagram",
    title: "Instagram Caption That Sells",
    segs: [
      { t: "Write 3 Instagram captions for " },
      { b: "PRODUCT", v: "handmade soy candles" },
      { t: " aimed at " },
      { b: "AUDIENCE", v: "busy working moms" },
      { t: ". Tone: " },
      { b: "TONE", v: "warm & premium" },
      { t: ". End with a clear CTA." }
    ]
  },
  {
    cat: "reels",
    title: "Viral Reel Hook Generator",
    segs: [
      { t: "Give me 10 scroll-stopping hooks for a Reel about " },
      { b: "TOPIC", v: "morning routines" },
      { t: " for " },
      { b: "AUDIENCE", v: "gym beginners" },
      { t: "." }
    ]
  },
  {
    cat: "selling",
    title: "Festive Sale Announcement",
    segs: [
      { t: "Write a " },
      { b: "FESTIVAL", v: "Diwali" },
      { t: " sale post for my " },
      { b: "BUSINESS", v: "home bakery" },
      { t: ". Offer: " },
      { b: "OFFER", v: "30% off + free delivery" },
      { t: "." }
    ]
  }
];
const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function HeroDemo() {
  const [st, setSt] = useStateD({ di: 0, bi: 0, ci: 0, phase: "typing" });
  const tRef = useRefD(null);
  const demo = DEMOS[st.di];
  const blanks = demo.segs.filter((s) => s.b);
  useEffectD(() => {
    if (prefersReduced) return;
    clearTimeout(tRef.current);
    const cur = blanks[st.bi];
    if (st.phase === "typing") {
      if (cur && st.ci < cur.v.length) {
        tRef.current = setTimeout(() => setSt((s) => ({ ...s, ci: s.ci + 1 })), 38 + Math.random() * 34);
      } else if (st.bi < blanks.length - 1) {
        tRef.current = setTimeout(() => setSt((s) => ({ ...s, bi: s.bi + 1, ci: 0 })), 320);
      } else {
        tRef.current = setTimeout(() => setSt((s) => ({ ...s, phase: "done" })), 360);
      }
    } else if (st.phase === "done") {
      tRef.current = setTimeout(() => setSt((s) => ({ ...s, phase: "copied" })), 520);
    } else if (st.phase === "copied") {
      tRef.current = setTimeout(() => setSt({ di: (st.di + 1) % DEMOS.length, bi: 0, ci: 0, phase: "typing" }), 1900);
    }
    return () => clearTimeout(tRef.current);
  }, [st]);
  let bIdx = -1;
  const parts = demo.segs.map((s, i) => {
    if (s.t) return /* @__PURE__ */ React.createElement("span", { key: i }, s.t);
    bIdx++;
    const myIdx = bIdx;
    const full = prefersReduced;
    if (full || myIdx < st.bi) return /* @__PURE__ */ React.createElement("span", { key: i, className: "pa-fill" }, s.v);
    if (myIdx === st.bi && st.phase === "typing") {
      return /* @__PURE__ */ React.createElement("span", { key: i, className: "pa-fill" }, s.v.slice(0, st.ci), /* @__PURE__ */ React.createElement("span", { className: "pa-caret" }));
    }
    if (myIdx === st.bi && st.phase !== "typing") return /* @__PURE__ */ React.createElement("span", { key: i, className: "pa-fill" }, s.v);
    return /* @__PURE__ */ React.createElement("span", { key: i, className: "pa-blank" }, "[", s.b, "]");
  });
  const filled = prefersReduced ? blanks.length : blanks.filter((_, idx) => idx < st.bi || idx === st.bi && (st.phase !== "typing" || st.ci >= blanks[idx].v.length)).length;
  const pct = Math.round(filled / blanks.length * 100);
  const copied = !prefersReduced && st.phase === "copied";
  return /* @__PURE__ */ React.createElement("div", { className: "pa-demo" }, /* @__PURE__ */ React.createElement("div", { className: "pa-demo-glow" }), /* @__PURE__ */ React.createElement("div", { className: "pa-demo-card" }, /* @__PURE__ */ React.createElement("div", { className: "pa-demo-head" }, /* @__PURE__ */ React.createElement("div", { className: "pa-demo-cat" }, /* @__PURE__ */ React.createElement("span", { className: "pa-demo-cat-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: demo.cat, size: 15 })), /* @__PURE__ */ React.createElement("span", null, demo.title)), /* @__PURE__ */ React.createElement("span", { className: "pa-demo-blanks" }, /* @__PURE__ */ React.createElement(Icon, { name: "brackets", size: 13 }), " ", blanks.length, " blanks")), /* @__PURE__ */ React.createElement("div", { className: "pa-demo-progress" }, /* @__PURE__ */ React.createElement("div", { className: "pa-demo-progress-row" }, /* @__PURE__ */ React.createElement("span", null, "Filling your details"), /* @__PURE__ */ React.createElement("span", { className: "pa-demo-count" }, filled, "/", blanks.length)), /* @__PURE__ */ React.createElement("div", { className: "pa-demo-track" }, /* @__PURE__ */ React.createElement("div", { className: "pa-demo-bar", style: { width: pct + "%" } }))), /* @__PURE__ */ React.createElement("div", { className: "pa-demo-body" }, /* @__PURE__ */ React.createElement("p", { className: "pa-demo-text" }, parts)), /* @__PURE__ */ React.createElement("div", { className: "pa-demo-foot" }, /* @__PURE__ */ React.createElement("span", { className: "pa-demo-copy" + (copied ? " is-copied" : "") }, copied ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 15 }), " Copied \u2014 paste it anywhere") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "copy", size: 15 }), " Copy filled prompt")), /* @__PURE__ */ React.createElement("span", { className: "pa-demo-ai" }, /* @__PURE__ */ React.createElement(Icon, { name: "robot", size: 15 })))));
}
window.HeroDemo = HeroDemo;
