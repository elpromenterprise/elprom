// 💬 Email & WhatsApp
export default [
  {
    id: 'em-newsletter',
    title: 'Newsletter Email People Actually Open',
    category: 'email',
    description: 'A full newsletter draft with subject lines tested for opens.',
    tags: ['newsletter'],
    prompt: `Write a newsletter email for my [NICHE] audience. This week's topic: [TOPIC]. Goal: [GOAL].
Include: 3 subject lines (under 45 chars, curiosity-driven); a warm 1-line opener; main content in 2-3 scannable sections; one clear CTA button text + line; a friendly sign-off. Tone: like a message from a friend.`,
  },
  {
    id: 'em-welcome',
    title: 'Welcome Email for New Subscribers',
    category: 'email',
    description: 'The first email that turns a subscriber into a fan.',
    tags: ['welcome', 'onboarding'],
    prompt: `Write a welcome email for a new subscriber. Who I am: [ABOUT YOU]. What they'll get: [WHAT + HOW OFTEN]. A quick win now: [FREEBIE/TIP].
Structure: warm thank-you, set expectations, deliver one quick win, a soft CTA (reply/follow/link [LINK]). Under 150 words, personal.`,
  },
  {
    id: 'em-launch-sequence',
    title: '3-Email Launch Sequence',
    category: 'email',
    description: 'Sell a product or course with a simple, non-pushy flow.',
    tags: ['launch', 'sequence'],
    prompt: `Plan a 3-email launch sequence for [PRODUCT/COURSE]. Audience: [AUDIENCE]. Price: [PRICE]. Offer/deadline: [OFFER].
Give all 3: 1) Announce — tease value + open cart; 2) Value/proof — benefits + who it's for + testimonial placeholder; 3) Last call — urgency + recap + deadline. Each: subject line + body. Honest, not hype.`,
  },
  {
    id: 'em-subject-lines',
    title: '20 Subject Lines That Get Opens',
    category: 'email',
    description: 'A bank of subject lines for any email.',
    tags: ['subject lines', 'open rate'],
    prompt: `Give 20 subject lines for an email about [TOPIC] to [AUDIENCE].
Mix: curiosity, benefit, number, question, personal, and urgency. Under 45 chars each, no spammy words/ALL CAPS. Mark the 5 you'd test first.`,
  },
  {
    id: 'em-cold-email',
    title: 'Cold Email That Gets Replies',
    category: 'email',
    description: 'B2B/outreach cold email built to start a conversation.',
    tags: ['cold email', 'outreach'],
    prompt: `Write a cold email to [TYPE OF PERSON/COMPANY] offering [WHAT YOU OFFER]. The result I deliver: [VALUE].
Rules: a subject line they'll open; a personalised first line (not "I hope this finds you well"); value-first body under 120 words; one clear, low-friction CTA. Give 2 versions + 1 follow-up email.`,
  },
  {
    id: 'em-abandoned-cart',
    title: 'Abandoned Cart Email Series',
    category: 'email',
    description: 'Recover lost sales with a 3-email flow.',
    tags: ['ecommerce', 'recovery'],
    prompt: `Write a 3-email abandoned-cart series for [PRODUCT], audience [AUDIENCE].
Email 1: friendly reminder (subject + body). Email 2: handle hesitation + a key benefit/review. Email 3: gentle urgency or small incentive [INCENTIVE]. Each with a subject line. Short and human.`,
  },
  {
    id: 'em-re-engage',
    title: 'Win Back Inactive Subscribers',
    category: 'email',
    description: 'Re-engage people who stopped opening your emails.',
    tags: ['re-engagement', 'list health'],
    prompt: `Write a re-engagement email for subscribers who've gone quiet. My list: [NICHE/WHAT YOU SEND].
Make it honest and a little personal: acknowledge it's been a while, remind them of the value, give a reason to stay (a freebie or a "what do you want from me?" question), and a clear stay/leave choice. Subject + body.`,
  },
  {
    id: 'em-promo-email',
    title: 'Promo / Offer Email',
    category: 'email',
    description: 'Announce a sale or offer in a way that converts.',
    tags: ['promo', 'sales'],
    prompt: `Write a promo email for [OFFER] on [PRODUCT/SERVICE]. Audience: [AUDIENCE]. Deadline: [DEADLINE].
Include: a subject line that drives clicks, a quick hook, the offer + why it's worth it, a clear CTA button line, and a touch of urgency. Keep it scannable. Give 2 subject line options.`,
  },
  {
    id: 'em-value-email',
    title: 'Pure-Value Email (Build Trust)',
    category: 'email',
    description: 'A teaching email that builds goodwill before you sell.',
    tags: ['value', 'nurture'],
    prompt: `Write a value-only email teaching my audience [AUDIENCE] something useful about [TOPIC].
No hard pitch. Give them one clear, actionable takeaway they can use today, in my voice [TONE], and a soft P.S. CTA. Subject line + body, under 250 words.`,
  },
  {
    id: 'em-whatsapp-broadcast',
    title: 'WhatsApp Broadcast (Sales)',
    category: 'email',
    description: 'A short broadcast that drives orders without spamming.',
    tags: ['whatsapp', 'sales'],
    prompt: `Write a WhatsApp broadcast to sell [PRODUCT]. Offer: [OFFER]. Audience: [AUDIENCE].
Under 60 words: one hook line, a benefit + offer, a simple CTA ("Reply YES" or link [LINK]). Friendly, like messaging a friend. Give English + Hinglish versions.`,
  },
  {
    id: 'em-whatsapp-status',
    title: 'WhatsApp Status / Story Series',
    category: 'email',
    description: 'A sequence of statuses to promote without being annoying.',
    tags: ['whatsapp', 'status'],
    prompt: `Plan a 5-status WhatsApp Status sequence to promote [PRODUCT/OFFER] to my contacts. Audience: [AUDIENCE].
For each status: the text + a visual idea. Mix value/relatable ones with soft promos so it doesn't feel like spam. Keep them short and tappable.`,
  },
  {
    id: 'em-welcome-whatsapp',
    title: 'WhatsApp Welcome / Auto-Reply',
    category: 'email',
    description: 'A first-message greeting for new WhatsApp Business contacts.',
    tags: ['whatsapp', 'business'],
    prompt: `Write a WhatsApp Business greeting + away message for my business [WHAT YOU SELL].
Greeting: warm, says what we do, asks how we can help, sets a quick expectation. Away message: when we'll reply + a link to [CATALOGUE/LINK]. Keep both short and friendly.`,
  },
  {
    id: 'em-order-confirm',
    title: 'Order Confirmation & Updates (WhatsApp)',
    category: 'email',
    description: 'Reassuring post-order messages that build trust.',
    tags: ['whatsapp', 'post-purchase'],
    prompt: `Write WhatsApp message templates for: order confirmed, order shipped (with tracking [TRACKING]), and order delivered (with a review request).
Business: [WHAT YOU SELL]. Make them warm, clear, and reassuring, with my brand personality. Short.`,
  },
  {
    id: 'em-drip-onboarding',
    title: '5-Email Onboarding Drip',
    category: 'email',
    description: 'Nurture new subscribers into buyers over a week.',
    tags: ['drip', 'nurture'],
    prompt: `Design a 5-email onboarding drip for new subscribers in the [NICHE] niche, audience [AUDIENCE], eventually leading to [PRODUCT/OFFER].
For each email: the goal, subject line, and a 2-line summary. Sequence: welcome → story/why → value → value → soft offer. Build trust before the pitch.`,
  },
  {
    id: 'em-survey-email',
    title: 'Audience Survey Email',
    category: 'email',
    description: 'Get replies that tell you what to create/sell next.',
    tags: ['survey', 'research'],
    prompt: `Write an email asking my audience [AUDIENCE] a few quick questions so I can make better content/products.
Make it feel personal and easy to answer (2-3 questions max), explain why it helps them, and lower the friction. Subject + body. Optionally link a form [FORM LINK].`,
  },
  {
    id: 'em-event-invite',
    title: 'Webinar / Event Invite Email',
    category: 'email',
    description: 'Drive signups for a live session or workshop.',
    tags: ['event', 'webinar'],
    prompt: `Write an invite email for my [EVENT, e.g. free workshop] on [TOPIC], date [DATE]. Audience: [AUDIENCE].
Include: a subject line, the big promise (what they'll learn/get), who it's for, the details (date/time/where), and a strong RSVP CTA [LINK]. Build excitement. Give a reminder-email version too.`,
  },
  {
    id: 'em-thank-you',
    title: 'Post-Purchase Thank You Email',
    category: 'email',
    description: 'Delight buyers and set up the next action.',
    tags: ['post-purchase', 'retention'],
    prompt: `Write a post-purchase thank-you email for [PRODUCT]. Audience: [AUDIENCE].
Make the customer feel great, set expectations (delivery/next steps), give a quick tip to get value fast, and a gentle next action (review, refer, or related product). Warm and genuine. Subject + body.`,
  },
  {
    id: 'em-rewrite-email',
    title: 'Improve My Email Draft',
    category: 'email',
    description: 'Tighten and sharpen any email you\'ve written.',
    tags: ['editing', 'rewrite'],
    prompt: `Here's my email draft:
"""
[PASTE DRAFT]
"""
Goal: [GOAL]. Audience: [AUDIENCE]. Rewrite it: a stronger subject line, a tighter hook, scannable body, one clear CTA, and a friendlier tone. Cut anything that doesn't earn its place. Give the improved version + 3 notes on what changed.`,
  },
  {
    id: 'em-festival-email',
    title: 'Festival / Seasonal Email',
    category: 'email',
    description: 'A festive email that connects emotionally and sells gently.',
    tags: ['festival', 'seasonal'],
    prompt: `Write a [FESTIVAL/SEASON, e.g. Diwali] email for my audience [AUDIENCE], business [WHAT YOU SELL]. Offer: [OFFER].
Lead with genuine festive warmth, tie it to my brand, then a tasteful offer + CTA. Subject + body. Make people feel something, not just "SALE".`,
  },
]
