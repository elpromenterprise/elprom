// 🛍️ Selling & Business
export default [
  {
    id: 'bz-product-desc',
    title: 'Product Description That Converts',
    category: 'business',
    description: 'For Meesho/Amazon/own-store — benefits over boring specs.',
    tags: ['ecommerce', 'listing'],
    prompt: `Write a product description for [PRODUCT] sold to [AUDIENCE] in India. Price: [PRICE]. Features: [LIST 3-4].
Give: a 1-line benefit headline; a 3-4 sentence benefit-focused description; 5 bullets (feature → "which means" benefit); a trust line (returns/COD). Warm, trustworthy, no over-hype.`,
  },
  {
    id: 'bz-amazon-listing',
    title: 'Amazon/Flipkart Listing (Title + Bullets)',
    category: 'business',
    description: 'A keyword-rich marketplace listing built to rank and sell.',
    tags: ['ecommerce', 'seo', 'listing'],
    prompt: `Write a marketplace listing for [PRODUCT]. Keywords buyers search: [KEYWORDS]. Audience: [AUDIENCE].
Give: a keyword-rich title (under 200 chars), 5 benefit bullets (feature + benefit), a short A+ description, and 8 backend search terms. Don't keyword-stuff the title unnaturally.`,
  },
  {
    id: 'bz-whatsapp-broadcast',
    title: 'WhatsApp Broadcast That Gets Replies',
    category: 'business',
    description: 'For resellers & small businesses — drives orders without spamming.',
    tags: ['whatsapp', 'reseller', 'sales'],
    prompt: `Write a WhatsApp broadcast to sell [PRODUCT]. Offer: [OFFER]. Tone: friendly, like messaging a friend.
Under 60 words: one hook line, one benefit + the offer, a simple CTA ("Reply YES to order" or link [LINK]). Give 2 versions: English and Hinglish.`,
  },
  {
    id: 'bz-festival-campaign',
    title: 'Festival Sale Campaign Pack',
    category: 'business',
    description: 'Ready festive promo: post caption + WhatsApp + story line.',
    tags: ['festival', 'campaign'],
    prompt: `Create a [FESTIVAL, e.g. Diwali] sale campaign for my business selling [PRODUCT]. Offer: [OFFER]. Audience: [AUDIENCE].
Give: 1 Instagram caption (festive + CTA), 1 WhatsApp broadcast (under 60 words), 1 Story line + sticker idea, and 3 festive hashtags. Real festive emotion, not cheesy.`,
  },
  {
    id: 'bz-cold-dm',
    title: 'Cold DM to Land Local Clients',
    category: 'business',
    description: 'For freelancers/agencies — a DM that gets replies, not "seen".',
    tags: ['outreach', 'clients'],
    prompt: `Write a cold DM pitching my service [SERVICE] to [TYPE OF BUSINESS]. What I deliver: [VALUE/RESULT].
First line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions with different openers.`,
  },
  {
    id: 'bz-story-selling',
    title: 'Sell Without Being Salesy',
    category: 'business',
    description: 'Story-based soft-sell so you promote without annoying followers.',
    tags: ['storytelling', 'soft sell'],
    prompt: `Write a story-based post to sell [PRODUCT/SERVICE] without sounding salesy. Audience: [AUDIENCE]. Transformation: [BEFORE → AFTER].
Open with a relatable moment, show the struggle, naturally introduce the solution, end with a soft honest CTA. Give a Reel-script version + a caption version.`,
  },
  {
    id: 'bz-testimonial-request',
    title: 'Ask for Testimonials & Reviews',
    category: 'business',
    description: 'Polite messages that actually get customers to send reviews.',
    tags: ['reviews', 'social proof'],
    prompt: `Write a message asking a happy customer for a testimonial for [PRODUCT/SERVICE]. Warm, easy, no pressure.
Give: a WhatsApp version (short, with 2 simple questions to make it easy), a version asking for a Google/Instagram review with [LINK], and a line offering a small thank-you.`,
  },
  {
    id: 'bz-objection-handling',
    title: 'Handle "It\'s Too Expensive" + Objections',
    category: 'business',
    description: 'Confident replies to common sales objections.',
    tags: ['objections', 'sales'],
    prompt: `My product/service: [WHAT YOU SELL], price [PRICE]. Audience: [AUDIENCE].
Give me confident, non-pushy replies to these objections: "too expensive", "I'll think about it", "I found it cheaper", and "not right now". Each reply: acknowledge, reframe value, gentle next step.`,
  },
  {
    id: 'bz-offer-stack',
    title: 'Build an Irresistible Offer',
    category: 'business',
    description: 'Package your product so the value feels obvious.',
    tags: ['offer', 'pricing'],
    prompt: `Help me build an irresistible offer for [PRODUCT/SERVICE]. Core thing: [WHAT THEY GET]. Price: [PRICE]. Audience: [AUDIENCE].
Suggest: the main promise, 2-3 bonuses that boost value, a risk-reversal (guarantee), a reason to act now, and how to present it. Keep it honest and deliverable.`,
  },
  {
    id: 'bz-bundle',
    title: 'Product Bundle / Combo Ideas',
    category: 'business',
    description: 'Increase order value with smart bundles.',
    tags: ['upsell', 'pricing'],
    prompt: `My products: [LIST PRODUCTS + PRICES]. Audience: [AUDIENCE].
Suggest 3 bundle/combo ideas that raise average order value, with a name, what's inside, a bundle price, and the "why it's a deal" line for each. Indian pricing psychology welcome (e.g. ₹999 combos).`,
  },
  {
    id: 'bz-pricing-strategy',
    title: 'Pricing Strategy Sanity Check',
    category: 'business',
    description: 'Get a structured view on how to price your product.',
    tags: ['pricing', 'strategy'],
    prompt: `I sell [PRODUCT/SERVICE]. My cost: [COST]. Current price: [PRICE]. Competitors charge: [COMPETITOR PRICES]. Audience: [AUDIENCE].
Walk me through pricing options (cost-plus, value-based, tiered), the pros/cons for my case, and a recommendation with a suggested price + reasoning. Be practical.`,
  },
  {
    id: 'bz-elevator-pitch',
    title: 'One-Line Business Pitch',
    category: 'business',
    description: 'Explain what you do in a single clear sentence.',
    tags: ['pitch', 'positioning'],
    prompt: `Help me write a one-line pitch for my business.
What I do: [WHAT YOU DO]. Who for: [AUDIENCE]. The result/difference: [VALUE].
Give 5 versions (clear, no jargon) in the format "I help [who] [do what] so they [outcome]". Then pick the strongest.`,
  },
  {
    id: 'bz-sales-page',
    title: 'Simple Sales Page Outline',
    category: 'business',
    description: 'A high-converting structure for a product/service page.',
    tags: ['sales page', 'copywriting'],
    prompt: `Outline a sales page for [PRODUCT/SERVICE], audience [AUDIENCE], price [PRICE].
Sections: hook headline, the problem, the solution (your offer), benefits, social proof, what's included, pricing, guarantee, FAQ, and final CTA. Give a 1-2 line draft for each section.`,
  },
  {
    id: 'bz-faq-page',
    title: 'Customer FAQ (Reduce Doubts)',
    category: 'business',
    description: 'Pre-answer the questions that stop people buying.',
    tags: ['faq', 'conversion'],
    prompt: `Write a customer FAQ for [PRODUCT/SERVICE], audience [AUDIENCE].
Cover the 10 questions that actually stop people from buying (shipping, returns, sizing/fit, payment, COD, quality, time to deliver, support). Keep answers short, honest, and reassuring.`,
  },
  {
    id: 'bz-abandoned-cart',
    title: 'Abandoned Cart Recovery Messages',
    category: 'business',
    description: 'Win back shoppers who didn\'t check out.',
    tags: ['ecommerce', 'recovery'],
    prompt: `Write a 3-message abandoned-cart sequence for [PRODUCT] (audience [AUDIENCE]).
Msg 1 (reminder, friendly), Msg 2 (handle hesitation + a benefit), Msg 3 (gentle urgency or small incentive [INCENTIVE]). Give WhatsApp + email versions. Short and human.`,
  },
  {
    id: 'bz-launch-plan',
    title: 'Small Business Launch Plan',
    category: 'business',
    description: 'A simple go-to-market plan for a new product.',
    tags: ['launch', 'strategy'],
    prompt: `I'm launching [PRODUCT] for [AUDIENCE] at [PRICE]. Budget: [BUDGET]. Channels I have: [CHANNELS].
Give a simple launch plan: pre-launch buzz, launch-day actions, the first-week push, and what to say where. Keep it realistic for a small team/solo founder.`,
  },
  {
    id: 'bz-reorder-loyalty',
    title: 'Repeat-Customer & Loyalty Messages',
    category: 'business',
    description: 'Bring customers back with thoughtful follow-ups.',
    tags: ['retention', 'loyalty'],
    prompt: `Write messages to bring back past customers of [PRODUCT/SERVICE].
Give: a "we miss you" reactivation message, a loyalty/repeat-order offer [OFFER], and a post-purchase thank-you that encourages a re-order or referral. WhatsApp-friendly, warm, under 60 words each.`,
  },
  {
    id: 'bz-referral-program',
    title: 'Referral Program Setup',
    category: 'business',
    description: 'A simple "refer a friend" program with the messaging.',
    tags: ['referral', 'growth'],
    prompt: `Design a simple referral program for my business [WHAT YOU SELL], audience [AUDIENCE].
Suggest the reward structure (for referrer + friend), how it works in 3 steps, and the message customers can forward to friends. Keep it easy and worth sharing.`,
  },
  {
    id: 'bz-brand-name',
    title: 'Business / Product Name Ideas',
    category: 'business',
    description: 'Brandable, available-sounding name options.',
    tags: ['naming', 'branding'],
    prompt: `I need a name for my [TYPE OF BUSINESS/PRODUCT] selling [WHAT] to [AUDIENCE]. Vibe: [VIBE, e.g. premium / fun / desi].
Give 20 brandable name ideas (short, easy to say/spell, ideally .com-able), grouped by style. Flag my top 5 and suggest a tagline for each. I'll check trademark/domain myself.`,
  },
  {
    id: 'bz-bio-link-business',
    title: 'Link-in-Bio Page for a Business',
    category: 'business',
    description: 'Bio-page copy + buttons that drive orders and inquiries.',
    tags: ['link in bio', 'conversion'],
    prompt: `Write link-in-bio page copy for my business [WHAT YOU SELL], audience [AUDIENCE].
My links: [LIST, e.g. shop, WhatsApp order, reviews, catalogue].
Give a headline (who I help + how), a sub-line, and a benefit-driven button label for each link (not just "Shop"). Tight and scannable.`,
  },
  {
    id: 'bz-google-business',
    title: 'Google Business Profile Description + Posts',
    category: 'business',
    description: 'Local SEO copy for your Google listing.',
    tags: ['local seo', 'google'],
    prompt: `Write a Google Business Profile description for my [TYPE OF BUSINESS] in [CITY], serving [AUDIENCE]. Keywords: [KEYWORDS].
Also give me 3 short "Google Posts" (offers/updates) I can publish. Keep the description keyword-aware but natural, under 750 chars.`,
  },
  {
    id: 'bz-upsell-script',
    title: 'Upsell / Cross-Sell Script',
    category: 'business',
    description: 'Suggest add-ons at checkout without being pushy.',
    tags: ['upsell', 'sales'],
    prompt: `A customer is buying [PRODUCT]. Related items I sell: [RELATED ITEMS].
Write a friendly upsell/cross-sell message ("customers also love…") for WhatsApp/checkout that feels helpful, suggests 1-2 relevant add-ons, and makes the combo feel worth it. Audience: [AUDIENCE].`,
  },
  {
    id: 'bz-complaint-reply',
    title: 'Reply to an Unhappy Customer',
    category: 'business',
    description: 'Defuse complaints and keep the relationship.',
    tags: ['support', 'replies'],
    prompt: `A customer is unhappy: "[PASTE COMPLAINT]". Product/service: [WHAT IT IS].
Write a calm, empathetic reply that acknowledges the issue, takes responsibility where fair, offers a clear solution [WHAT YOU CAN OFFER], and keeps them as a customer. Give a WhatsApp and a public-review-reply version.`,
  },
  {
    id: 'bz-cod-trust',
    title: 'Build Buyer Trust (First-Time Customers)',
    category: 'business',
    description: 'Copy that overcomes "is this shop legit?" hesitation.',
    tags: ['trust', 'conversion'],
    prompt: `New customers hesitate to buy from my small business [WHAT YOU SELL] online. Audience: [AUDIENCE].
Give me trust-building copy I can add to my page/bio/messages: a short "why trust us" block, proof elements to show (reviews, COD, returns, real photos), and a reassuring reply for "is this genuine?". Honest and confidence-building.`,
  },
  {
    id: 'bz-catalog-intro',
    title: 'Catalogue / Collection Intro Copy',
    category: 'business',
    description: 'An inviting intro for a product catalogue or new collection.',
    tags: ['catalogue', 'copywriting'],
    prompt: `Write intro copy for my [COLLECTION/CATALOGUE NAME] of [WHAT IT IS] for [AUDIENCE].
Give: a catchy collection name (if needed), a 2-3 line intro that sets the vibe and makes people want to browse, and a CTA to shop/DM. Tone: [TONE]. Optionally a Hinglish version.`,
  },
]
