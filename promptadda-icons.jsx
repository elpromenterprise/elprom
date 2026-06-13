/* PromptAdda — custom icon system. One consistent line-icon language, no emoji. */

// Each entry is a fragment of SVG children drawn in a 24x24 viewBox,
// stroke = currentColor, fill = none (filled accents opt in per-node).
const ICONS = {
  // ── Categories ───────────────────────────────────────────────
  all: (<><path d="M12 3l1.7 4.8L18.5 9.5l-4.8 1.7L12 16l-1.7-4.8L5.5 9.5l4.8-1.7z"/><path d="M18.6 14.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></>),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4"/><circle cx="16.6" cy="7.4" r="1.05" fill="currentColor" stroke="none"/></>),
  youtube: (<><rect x="2.5" y="5.5" width="19" height="13" rx="4.4"/><path d="M10.5 9.2l4.6 2.8-4.6 2.8z" fill="currentColor" stroke="none"/></>),
  reels: (<><rect x="7.8" y="3" width="8.4" height="18" rx="2.6"/><path d="M11 9.7l3.3 2.3L11 14.3z" fill="currentColor" stroke="none"/></>),
  twitter: (<path d="M5 5l14 14M19 5L5 19"/>),
  linkedin: (<><rect x="3" y="7" width="18" height="13" rx="2.6"/><path d="M8.4 7V5.4A2.4 2.4 0 0110.8 3h2.4a2.4 2.4 0 012.4 2.4V7"/></>),
  personal: (<path d="M12 3.4l2.6 5.4 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.9z"/>),
  blog: (<><path d="M4 20.5h16"/><path d="M14.6 4.4l4 4-8.6 8.6-4.6 1 1-4.6z"/></>),
  selling: (<><path d="M5.6 8h12.8l-1 11.4a1 1 0 01-1 .9H7.6a1 1 0 01-1-.9z"/><path d="M9 8.5V6a3 3 0 016 0v2.5"/></>),
  ads: (<><path d="M4 10.4v3.2a1 1 0 001 1h1.7l8.3 3.8V5.6L6.7 9.4H5a1 1 0 00-1 1z"/><path d="M18.4 9.1a3.6 3.6 0 010 5.8"/></>),
  deals: (<><rect x="3" y="6.5" width="18" height="11" rx="2.6"/><circle cx="12" cy="12" r="2.3"/><path d="M6.4 12h.02M17.6 12h.02"/></>),
  email: (<><path d="M4.4 5.5h15.2a1 1 0 011 1v8a1 1 0 01-1 1H10l-4 3.6V15.5H4.4a1 1 0 01-1-1v-8a1 1 0 011-1z"/><path d="M9 10.3h.02M12 10.3h.02M15 10.3h.02"/></>),
  local: (<><path d="M12 21c4.5-4.3 7-7.5 7-10.6a7 7 0 10-14 0c0 3.1 2.5 6.3 7 10.6z"/><circle cx="12" cy="10.4" r="2.4"/></>),
  coaching: (<><path d="M2.5 9.2L12 5.5l9.5 3.7L12 12.9z"/><path d="M6.6 11.3v4.5c0 1.2 2.6 2.4 5.4 2.4s5.4-1.2 5.4-2.4v-4.5"/><path d="M21.5 9.5v4.3"/></>),
  podcast: (<><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11.2a6 6 0 0012 0"/><path d="M12 17.2V21M9 21h6"/></>),
  design: (<><path d="M12 3.2a8.8 8.8 0 00-.5 17.6c1.4.1 2.3-1 2.3-2.1 0-1.4 1-2.1 2.3-2.1H18a3 3 0 003-3c0-5-4.7-8.4-9-8.4z"/><circle cx="7.9" cy="11.5" r=".95" fill="currentColor" stroke="none"/><circle cx="10.6" cy="7.9" r=".95" fill="currentColor" stroke="none"/><circle cx="14.7" cy="7.9" r=".95" fill="currentColor" stroke="none"/></>),
  plan: (<><rect x="3.5" y="5" width="17" height="15.5" rx="2.8"/><path d="M3.5 9.5h17M8 3.4v3.4M16 3.4v3.4M8.8 14.6l2 2 3.6-3.8"/></>),

  // ── UI / utility ─────────────────────────────────────────────
  search: (<><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5l4 4"/></>),
  close: (<path d="M5 5l14 14M19 5L5 19"/>),
  arrowUpRight: (<path d="M6 18L18 6M8 6h10v10"/>),
  check: (<path d="M4 12.5l5 5 11-11"/>),
  brackets: (<path d="M8.5 4H5v16h3.5M15.5 4H19v16h-3.5"/>),
  wand: (<><path d="M5 19.5L14 10.5"/><path d="M16.2 4.2l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/><path d="M19.5 11l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z"/></>),
  copy: (<><rect x="8" y="8" width="12" height="12" rx="2.6"/><path d="M16 8V5.4A1.4 1.4 0 0014.6 4H5.4A1.4 1.4 0 004 5.4v9.2A1.4 1.4 0 005.4 16H8"/></>),
  spark: (<path d="M12 3.5l1.9 5.6 5.6 1.9-5.6 1.9L12 18.5l-1.9-5.6L4.5 11l5.6-1.9z"/>),
  edit: (<><path d="M4 20.5h16"/><path d="M14.6 4.4l4 4-8.6 8.6-4.6 1 1-4.6z"/></>),
  trendUp: (<><path d="M3.5 16.5l5.5-5.5 3.2 3.2L20 7"/><path d="M14.5 7H20v5.5"/></>),
  bolt: (<path d="M13 3L5 13.5h5.5L11 21l8-10.5h-5.5z"/>),
  shield: (<path d="M12 3.4l7 2.5v5.2c0 4.4-3 7.4-7 9.4-4-2-7-5-7-9.4V5.9z"/>),
  infinity: (<path d="M8.5 9.2c-1.6 0-2.9 1.3-2.9 2.8s1.3 2.8 2.9 2.8c2.6 0 4.4-5.6 7-5.6 1.6 0 2.9 1.3 2.9 2.8s-1.3 2.8-2.9 2.8c-2.6 0-4.4-5.6-7-5.6z"/>),
  globe: (<><circle cx="12" cy="12" r="8.5"/><path d="M3.6 12h16.8M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17"/></>),
  rupee: (<><path d="M8 6.5h8M8 10h8M16 6.5c0 3.5-2.8 6-6.5 6L16 18.5"/></>),
  scissors: (<><circle cx="6.5" cy="6.5" r="2.4"/><circle cx="6.5" cy="17.5" r="2.4"/><path d="M8.5 8L19.5 18M19.5 6L8.5 16"/></>),
  card: (<><rect x="3" y="6" width="18" height="12" rx="2.8"/><path d="M3 10h18M6.5 14.5h3"/></>),
  doc: (<><path d="M6 3.5h7l5 5v11a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 19.5V5A1.5 1.5 0 016 3.5z"/><path d="M13 3.5V8.5h5M8 13h8M8 16.5h5"/></>),
  robot: (<><rect x="4.5" y="8" width="15" height="11" rx="3.2"/><circle cx="9.5" cy="13" r="1.3" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r="1.3" fill="currentColor" stroke="none"/><path d="M12 4.5V8M8.5 19v1.5M15.5 19v1.5"/></>),
  layers: (<><path d="M12 3.5l8.5 4.5L12 12.5 3.5 8z"/><path d="M3.5 12.5L12 17l8.5-4.5"/></>),
  cursor: (<path d="M5 4l5.5 15 2.2-6.3L19 10.5z"/>),
};

function Icon({ name, size = 24, stroke = 1.7, className, style }) {
  const body = ICONS[name] || ICONS.all;
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true"
    >{body}</svg>
  );
}

// Map a recommended-tool name -> icon id
const TOOL_ICON = {
  Canva: 'design', ChatGPT: 'robot', CapCut: 'scissors',
  Razorpay: 'card', Hostinger: 'globe', Notion: 'doc',
};
// Step icons (by order)
const STEP_ICON = ['search', 'edit', 'copy', 'trendUp'];
// Trust-chip icons (by order)
const TRUST_ICON = ['infinity', 'shield', 'globe', 'rupee'];

// Tiny hand-built Indian tricolour (replaces flag emoji)
function TriFlag({ w = 18 }) {
  const h = w * 0.66;
  return (
    <span style={{ display: 'inline-flex', width: w, height: h, borderRadius: 3, overflow: 'hidden',
      boxShadow: '0 0 0 1px rgba(0,0,0,.08)', verticalAlign: 'middle' }}>
      <span style={{ flex: 1, background: '#FF9933' }} />
      <span style={{ flex: 1, background: '#fff', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ width: h * 0.34, height: h * 0.34, borderRadius: '50%', border: '1.2px solid #0A3D91' }} />
      </span>
      <span style={{ flex: 1, background: '#138808' }} />
    </span>
  );
}

Object.assign(window, { Icon, ICONS, TOOL_ICON, STEP_ICON, TRUST_ICON, TriFlag });
