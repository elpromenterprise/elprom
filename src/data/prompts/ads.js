// 📣 Ads & Copy
export default [
  {
    id: 'ad-meta-ad',
    title: 'Facebook / Instagram Ad Copy',
    category: 'ads',
    description: 'Scroll-stopping paid social ad copy with 3 angle variants.',
    tags: ['meta ads', 'paid social'],
    prompt: `Write Meta (FB/Instagram) ad copy for [PRODUCT/SERVICE]. Audience: [AUDIENCE]. Main benefit: [BENEFIT]. Offer: [OFFER].
Give 3 variants (problem-led, benefit-led, social-proof-led). Each: a hook line, 2-3 short body lines, and a CTA. Plus 3 short headlines. Keep it native, not "ad-y".`,
  },
  {
    id: 'ad-google-search',
    title: 'Google Search Ads (Headlines + Descriptions)',
    category: 'ads',
    description: 'Responsive search ad assets that match buyer intent.',
    tags: ['google ads', 'ppc'],
    prompt: `Write Google Search ad assets for [PRODUCT/SERVICE], keyword [KEYWORD], audience [AUDIENCE].
Give 10 headlines (under 30 chars each) and 4 descriptions (under 90 chars), including the keyword, benefits, and a CTA. Add 4 sitelink ideas. Match search intent.`,
  },
  {
    id: 'ad-hook-angles',
    title: '10 Ad Hook Angles for One Product',
    category: 'ads',
    description: 'Different angles to test so you find the winner faster.',
    tags: ['angles', 'testing'],
    prompt: `My product: [PRODUCT], audience [AUDIENCE], main benefit [BENEFIT].
Give 10 distinct ad hook angles (pain, dream outcome, objection-crush, comparison, social proof, curiosity, "us vs them", time-saving, money-saving, identity). One hook line for each, ready to test.`,
  },
  {
    id: 'ad-ugc-script',
    title: 'UGC-Style Video Ad Script',
    category: 'ads',
    description: 'A native, creator-style script that outperforms polished ads.',
    tags: ['ugc', 'video ad'],
    prompt: `Write a UGC-style video ad script (30-45s) for [PRODUCT]. Audience: [AUDIENCE]. Benefit: [BENEFIT]. Offer: [OFFER].
Make it feel like a real person talking: a relatable hook, the problem, "then I found this", quick demo/benefits, and a casual CTA. Add on-screen text + b-roll notes.`,
  },
  {
    id: 'ad-short-promo',
    title: 'Short Promo Script (15-30s)',
    category: 'ads',
    description: 'A boosted-Reel/ad script that sells fast.',
    tags: ['promo', 'script'],
    prompt: `Write a 15-30s promo/ad script for [PRODUCT/SERVICE]. Audience: [AUDIENCE]. Benefit: [BENEFIT]. Offer: [OFFER].
- HOOK (0-3s): grab attention (problem or bold claim)
- MIDDLE: product + 1-2 benefits fast
- CTA (last 3s): exactly what to do + the offer
Add on-screen text per part. Under 60 spoken words.`,
  },
  {
    id: 'ad-headline-pack',
    title: 'Headline Pack (Any Channel)',
    category: 'ads',
    description: 'Punchy headlines for ads, landing pages or thumbnails.',
    tags: ['headlines', 'copywriting'],
    prompt: `Write 15 headlines for [PRODUCT/SERVICE/OFFER], audience [AUDIENCE], main benefit [BENEFIT].
Use proven formulas: how-to, "get X without Y", number, question, before/after, urgency. Keep them tight and specific. Mark the 5 strongest and where each fits (ad / page / thumbnail).`,
  },
  {
    id: 'ad-landing-copy',
    title: 'Landing Page Copy (Above the Fold)',
    category: 'ads',
    description: 'The headline + subhead + CTA that converts cold traffic.',
    tags: ['landing page', 'conversion'],
    prompt: `Write above-the-fold landing page copy for [PRODUCT/SERVICE]. Audience: [AUDIENCE]. Main promise: [PROMISE].
Give 3 options of: a headline, a supporting subheadline, 3 benefit bullets, and a CTA button label. Clear over clever. Then suggest the next section to add.`,
  },
  {
    id: 'ad-vsl-outline',
    title: 'Short Sales Video (VSL) Outline',
    category: 'ads',
    description: 'A structured script outline for a sales video.',
    tags: ['vsl', 'sales'],
    prompt: `Outline a short sales video for [PRODUCT/SERVICE], audience [AUDIENCE], price [PRICE].
Structure: hook (call out the audience + problem), agitate, introduce the solution, proof, offer + bonuses, risk-reversal, CTA + urgency. Give a 1-2 line draft for each beat. Honest and direct.`,
  },
  {
    id: 'ad-retargeting',
    title: 'Retargeting Ad Copy',
    category: 'ads',
    description: 'Win back people who visited but didn\'t buy.',
    tags: ['retargeting', 'conversion'],
    prompt: `Write retargeting ad copy for people who viewed [PRODUCT] but didn't buy. Audience: [AUDIENCE]. Offer/incentive: [INCENTIVE].
Give 3 variants: one addressing a likely objection, one with social proof, one with gentle urgency. Each: hook + body + CTA. Acknowledge they already showed interest.`,
  },
  {
    id: 'ad-audience-targeting',
    title: 'Ad Audience & Targeting Ideas',
    category: 'ads',
    description: 'Who to target and how, for your product.',
    tags: ['targeting', 'strategy'],
    prompt: `I'm advertising [PRODUCT/SERVICE] to [BROAD AUDIENCE] in [LOCATION], budget [BUDGET].
Suggest: 4 specific audience segments to test (interests, behaviours, lookalikes), the angle/hook that fits each, and how to split a small budget across them. Practical for Meta/Google.`,
  },
  {
    id: 'ad-cta-bank',
    title: 'High-Converting CTA Bank',
    category: 'ads',
    description: 'Calls-to-action for buttons, ads and posts.',
    tags: ['cta', 'conversion'],
    prompt: `Give 20 high-converting CTAs for [PRODUCT/SERVICE/OFFER], audience [AUDIENCE].
Mix urgency, value, low-risk ("try free"), and curiosity. Label which suit a button, an ad, and a social post. Keep them short and action-driven.`,
  },
  {
    id: 'ad-aida',
    title: 'AIDA Copy for Anything',
    category: 'ads',
    description: 'Attention-Interest-Desire-Action copy on demand.',
    tags: ['framework', 'copywriting'],
    prompt: `Write AIDA copy for [PRODUCT/SERVICE/OFFER]. Audience: [AUDIENCE]. Benefit: [BENEFIT].
Attention: a scroll-stopping opener. Interest: why they should care. Desire: paint the outcome + proof. Action: a clear CTA. Keep it tight and usable as an ad or post.`,
  },
  {
    id: 'ad-pas',
    title: 'PAS Copy (Problem-Agitate-Solve)',
    category: 'ads',
    description: 'The classic direct-response framework, filled for you.',
    tags: ['framework', 'copywriting'],
    prompt: `Write PAS copy for [PRODUCT/SERVICE]. Audience: [AUDIENCE]. The problem they have: [PROBLEM].
Problem: name it sharply. Agitate: make them feel the cost of it. Solve: present my product as the relief + a CTA. Keep it honest, not fear-mongering. Give a short + a longer version.`,
  },
  {
    id: 'ad-rewrite-ad',
    title: 'Fix My Underperforming Ad',
    category: 'ads',
    description: 'Diagnose and rewrite an ad that isn\'t converting.',
    tags: ['optimization', 'rewrite'],
    prompt: `Here's my current ad copy:
"""
[PASTE AD]
"""
Product: [PRODUCT]. Audience: [AUDIENCE]. It's getting [PROBLEM, e.g. clicks but no sales / low CTR].
Diagnose the likely issue, then rewrite it 3 ways with stronger hooks/angles. Explain what you changed and why.`,
  },
  {
    id: 'ad-google-display',
    title: 'Display / Banner Ad Copy',
    category: 'ads',
    description: 'Tiny, punchy copy for banner and display ads.',
    tags: ['display', 'banner'],
    prompt: `Write display/banner ad copy for [PRODUCT/SERVICE], offer [OFFER], audience [AUDIENCE].
Give 5 ultra-short headline + tagline + CTA combos (banners have little space). Make them instantly clear and clickable. Suggest one visual idea per combo.`,
  },
  {
    id: 'ad-whatsapp-ad',
    title: 'Click-to-WhatsApp Ad Copy',
    category: 'ads',
    description: 'Ads that drive direct WhatsApp inquiries (big in India).',
    tags: ['whatsapp', 'india', 'leads'],
    prompt: `Write click-to-WhatsApp ad copy for [PRODUCT/SERVICE] in [CITY/REGION], audience [AUDIENCE]. Offer: [OFFER].
Give 3 variants that push people to message on WhatsApp now, plus the auto-reply message they get when they do. Friendly, local, low-friction.`,
  },
  {
    id: 'ad-tester-plan',
    title: 'Small-Budget Ad Test Plan',
    category: 'ads',
    description: 'How to test ads smartly with a tiny budget.',
    tags: ['testing', 'strategy'],
    prompt: `I have a small budget [BUDGET] to advertise [PRODUCT] to [AUDIENCE].
Give a simple test plan: how many creatives/angles to start with, how to split the budget, what metric tells me a winner, when to kill or scale, and how long to run. Beginner-friendly, no jargon.`,
  },
]
