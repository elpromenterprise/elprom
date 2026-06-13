/* PromptAdda — animated hero demo. Auto-types values into a prompt's blanks,
   shows the live-preview magic, flashes "Copied", then cycles. The hero moment. */
const { useState: useStateD, useEffect: useEffectD, useRef: useRefD } = React;

const DEMOS = [
  {
    cat: 'instagram', title: 'Instagram Caption That Sells',
    segs: [
      { t: 'Write 3 Instagram captions for ' },
      { b: 'PRODUCT', v: 'handmade soy candles' },
      { t: ' aimed at ' },
      { b: 'AUDIENCE', v: 'busy working moms' },
      { t: '. Tone: ' },
      { b: 'TONE', v: 'warm & premium' },
      { t: '. End with a clear CTA.' },
    ],
  },
  {
    cat: 'reels', title: 'Viral Reel Hook Generator',
    segs: [
      { t: 'Give me 10 scroll-stopping hooks for a Reel about ' },
      { b: 'TOPIC', v: 'morning routines' },
      { t: ' for ' },
      { b: 'AUDIENCE', v: 'gym beginners' },
      { t: '.' },
    ],
  },
  {
    cat: 'selling', title: 'Festive Sale Announcement',
    segs: [
      { t: 'Write a ' },
      { b: 'FESTIVAL', v: 'Diwali' },
      { t: ' sale post for my ' },
      { b: 'BUSINESS', v: 'home bakery' },
      { t: '. Offer: ' },
      { b: 'OFFER', v: '30% off + free delivery' },
      { t: '.' },
    ],
  },
];

const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function HeroDemo() {
  // state: di=demo index, bi=blank index being typed, ci=char index, phase
  const [st, setSt] = useStateD({ di: 0, bi: 0, ci: 0, phase: 'typing' });
  const tRef = useRefD(null);

  const demo = DEMOS[st.di];
  const blanks = demo.segs.filter(s => s.b);

  useEffectD(() => {
    if (prefersReduced) return; // static fully-filled render
    clearTimeout(tRef.current);
    const cur = blanks[st.bi];

    if (st.phase === 'typing') {
      if (cur && st.ci < cur.v.length) {
        tRef.current = setTimeout(() => setSt(s => ({ ...s, ci: s.ci + 1 })), 38 + Math.random() * 34);
      } else if (st.bi < blanks.length - 1) {
        tRef.current = setTimeout(() => setSt(s => ({ ...s, bi: s.bi + 1, ci: 0 })), 320);
      } else {
        tRef.current = setTimeout(() => setSt(s => ({ ...s, phase: 'done' })), 360);
      }
    } else if (st.phase === 'done') {
      tRef.current = setTimeout(() => setSt(s => ({ ...s, phase: 'copied' })), 520);
    } else if (st.phase === 'copied') {
      tRef.current = setTimeout(() => setSt({ di: (st.di + 1) % DEMOS.length, bi: 0, ci: 0, phase: 'typing' }), 1900);
    }
    return () => clearTimeout(tRef.current);
  }, [st]);

  // build rendered prompt
  let bIdx = -1;
  const parts = demo.segs.map((s, i) => {
    if (s.t) return <span key={i}>{s.t}</span>;
    bIdx++;
    const myIdx = bIdx;
    const full = prefersReduced;
    if (full || myIdx < st.bi) return <span key={i} className="pa-fill">{s.v}</span>;
    if (myIdx === st.bi && st.phase === 'typing') {
      return <span key={i} className="pa-fill">{s.v.slice(0, st.ci)}<span className="pa-caret" /></span>;
    }
    if (myIdx === st.bi && st.phase !== 'typing') return <span key={i} className="pa-fill">{s.v}</span>;
    return <span key={i} className="pa-blank">[{s.b}]</span>;
  });

  const filled = prefersReduced ? blanks.length
    : blanks.filter((_, idx) => idx < st.bi || (idx === st.bi && (st.phase !== 'typing' || st.ci >= blanks[idx].v.length))).length;
  const pct = Math.round((filled / blanks.length) * 100);
  const copied = !prefersReduced && st.phase === 'copied';

  return (
    <div className="pa-demo">
      <div className="pa-demo-glow" />
      <div className="pa-demo-card">
        <div className="pa-demo-head">
          <div className="pa-demo-cat">
            <span className="pa-demo-cat-icon"><Icon name={demo.cat} size={15} /></span>
            <span>{demo.title}</span>
          </div>
          <span className="pa-demo-blanks"><Icon name="brackets" size={13} /> {blanks.length} blanks</span>
        </div>

        <div className="pa-demo-progress">
          <div className="pa-demo-progress-row">
            <span>Filling your details</span>
            <span className="pa-demo-count">{filled}/{blanks.length}</span>
          </div>
          <div className="pa-demo-track"><div className="pa-demo-bar" style={{ width: pct + '%' }} /></div>
        </div>

        <div className="pa-demo-body"><p className="pa-demo-text">{parts}</p></div>

        <div className="pa-demo-foot">
          <span className={'pa-demo-copy' + (copied ? ' is-copied' : '')}>
            {copied
              ? <><Icon name="check" size={15} /> Copied — paste it anywhere</>
              : <><Icon name="copy" size={15} /> Copy filled prompt</>}
          </span>
          <span className="pa-demo-ai"><Icon name="robot" size={15} /></span>
        </div>
      </div>
    </div>
  );
}

window.HeroDemo = HeroDemo;
