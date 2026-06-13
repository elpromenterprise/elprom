// Niche packs — a compact source that the generator expands into ~1,000
// niche-tailored prompts (BLUEPRINTS × NICHES). Each generated prompt bakes the
// niche context into the body, so it's genuinely useful — not just a blank.
//
// Placeholders inside blueprint strings:
//   {NAME}  → niche Title Case (for titles)     e.g. "Fitness Coaches"
//   {LABEL} → niche phrase (mid-sentence)        e.g. "fitness coaching"
//   {AUD}   → default audience phrase            e.g. "people who want to get fit"
// [SQUARE_BRACKETS] stay as user-fill blanks (normalized by the generator).

export const NICHES = [
  { slug: 'fitness',     name: 'Fitness Coaches',        label: 'fitness coaching',          aud: 'people who want to get fit' },
  { slug: 'yoga',        name: 'Yoga Instructors',       label: 'yoga teaching',             aud: 'people seeking calm & flexibility' },
  { slug: 'nutrition',   name: 'Nutritionists',          label: 'nutrition & diet coaching', aud: 'people who want to eat healthier' },
  { slug: 'homebakery',  name: 'Home Bakers',            label: 'a home baking business',    aud: 'people who order cakes & desserts' },
  { slug: 'cloudkitchen',name: 'Cloud Kitchens',         label: 'a cloud kitchen',           aud: 'hungry locals ordering online' },
  { slug: 'cafe',        name: 'Cafés & Restaurants',    label: 'a café or restaurant',      aud: 'local foodies' },
  { slug: 'fashion',     name: 'Fashion Brands',         label: 'a fashion & clothing brand',aud: 'style-conscious shoppers' },
  { slug: 'jewellery',   name: 'Jewellery Brands',       label: 'a jewellery business',      aud: 'people shopping for jewellery' },
  { slug: 'handmade',    name: 'Handmade & Craft Sellers',label: 'a handmade craft business',aud: 'people who love handmade gifts' },
  { slug: 'skincare',    name: 'Skincare Brands',        label: 'a skincare brand',          aud: 'people who want better skin' },
  { slug: 'makeup',      name: 'Makeup Artists',         label: 'a makeup artistry business',aud: 'brides & beauty lovers' },
  { slug: 'salon',       name: 'Salons & Spas',          label: 'a salon or spa',            aud: 'people booking beauty services' },
  { slug: 'travel',      name: 'Travel Creators',        label: 'travel content',            aud: 'people planning trips' },
  { slug: 'photography', name: 'Photographers',          label: 'a photography business',    aud: 'couples & brands needing shoots' },
  { slug: 'realestate',  name: 'Real Estate Agents',     label: 'real estate',               aud: 'home buyers & sellers' },
  { slug: 'interior',    name: 'Interior Designers',     label: 'interior design',           aud: 'homeowners renovating' },
  { slug: 'finance',     name: 'Personal Finance Creators',label: 'personal finance content',aud: 'people wanting to manage money' },
  { slug: 'trading',     name: 'Stock Market Educators',  label: 'stock market education',    aud: 'new investors & traders' },
  { slug: 'edtech',      name: 'Online Tutors',          label: 'online tutoring',           aud: 'students & parents' },
  { slug: 'examprep',    name: 'Exam Prep Creators',     label: 'exam prep content',         aud: 'students cracking competitive exams' },
  { slug: 'coding',      name: 'Coding Educators',       label: 'coding & tech education',   aud: 'aspiring developers' },
  { slug: 'gadgets',     name: 'Tech Reviewers',         label: 'tech & gadget reviews',     aud: 'people deciding what to buy' },
  { slug: 'gaming',      name: 'Gaming Creators',        label: 'gaming content',            aud: 'gamers & fans' },
  { slug: 'saas',        name: 'SaaS Founders',          label: 'a SaaS product',            aud: 'businesses that need the tool' },
  { slug: 'freelance',   name: 'Freelancers',            label: 'freelancing services',      aud: 'clients who need the service' },
  { slug: 'agency',      name: 'Marketing Agencies',     label: 'a marketing agency',        aud: 'business owners who want growth' },
  { slug: 'parenting',   name: 'Parenting Creators',     label: 'parenting content',         aud: 'new & busy parents' },
  { slug: 'pets',        name: 'Pet Care Creators',      label: 'pet care content',          aud: 'pet parents' },
  { slug: 'gardening',   name: 'Gardening Creators',     label: 'gardening & plants content', aud: 'plant lovers' },
  { slug: 'astrology',   name: 'Astrology Creators',     label: 'astrology & spirituality content', aud: 'people seeking guidance' },
  { slug: 'motivation',  name: 'Motivational Creators',  label: 'motivation & self-help content', aud: 'people who want to level up' },
  { slug: 'food',        name: 'Food Bloggers',          label: 'food & recipe content',     aud: 'home cooks & foodies' },
]

// Each blueprint: { id, cat (design category id), title, desc, tags, body }
export const BLUEPRINTS = [
  {
    id: 'ig-caption', cat: 'instagram', tags: ['caption', 'sales'],
    title: 'Instagram Caption That Sells',
    desc: 'Scroll-stopping captions with a clear CTA, tailored for {LABEL}.',
    body: `Write 3 Instagram captions for {LABEL} promoting [PRODUCT] to {AUD}. Tone: [TONE].
Each caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to {LABEL}.`,
  },
  {
    id: 'ig-carousel', cat: 'instagram', tags: ['carousel', 'value'],
    title: 'Value Carousel (6 Slides)',
    desc: 'A swipeable 6-slide carousel idea for {LABEL}.',
    body: `Create a 6-slide Instagram carousel about [TOPIC] for {AUD} in the context of {LABEL}.
Slide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.`,
  },
  {
    id: 'ig-story', cat: 'instagram', tags: ['stories', 'engagement'],
    title: 'Story Engagement Set',
    desc: 'Polls, quizzes & questions to boost replies for {LABEL}.',
    body: `Give me 8 Instagram Story ideas for {LABEL} to boost engagement with {AUD}.
For each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.`,
  },
  {
    id: 'ig-hashtags', cat: 'instagram', tags: ['hashtags', 'reach'],
    title: 'Smart Hashtag Sets',
    desc: 'Balanced reach/niche/local hashtags for {LABEL}.',
    body: `Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for {LABEL}, audience {AUD}.
Each set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.`,
  },
  {
    id: 'ig-poll', cat: 'instagram', tags: ['engagement', 'community'],
    title: 'Engagement Questions',
    desc: 'Discussion-starters that get {AUD} commenting.',
    body: `Give 12 engaging questions to post for {LABEL}, audience {AUD}.
Make them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.`,
  },
  {
    id: 'reel-hooks', cat: 'reels', tags: ['reels', 'hooks'],
    title: 'Viral Reel Hooks',
    desc: '10 first-3-second hooks for {LABEL}.',
    body: `Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for {LABEL}, aimed at {AUD}.
Make them curiosity-driven and impossible to scroll past. Max 10 words each.`,
  },
  {
    id: 'reel-script', cat: 'reels', tags: ['reels', 'script'],
    title: '30-Second Reel Script',
    desc: 'A hook-to-CTA Reel script for {LABEL}.',
    body: `Write a 30-second Reel script about [TOPIC] for {LABEL}, audience {AUD}.
Include the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.`,
  },
  {
    id: 'reel-ideas', cat: 'reels', tags: ['ideas', 'calendar'],
    title: '30 Reel Ideas',
    desc: 'A month of Reel concepts for {LABEL}.',
    body: `Give 30 Reel ideas for {LABEL}, audience {AUD}.
Spread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].
For each: a title + a one-line hook. Numbered.`,
  },
  {
    id: 'yt-titles', cat: 'youtube', tags: ['youtube', 'titles'],
    title: 'High-CTR YouTube Titles',
    desc: '12 click-worthy titles for {LABEL}.',
    body: `Give 12 high-CTR YouTube titles for a video about [TOPIC] for a {LABEL} channel, audience {AUD}.
Mix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.`,
  },
  {
    id: 'yt-script', cat: 'youtube', tags: ['youtube', 'script'],
    title: 'YouTube Script Outline',
    desc: 'A retention-first script outline for {LABEL}.',
    body: `Write a YouTube script outline about [TOPIC] for {LABEL}, audience {AUD}.
Hook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.`,
  },
  {
    id: 'yt-shorts', cat: 'youtube', tags: ['shorts', 'script'],
    title: 'YouTube Shorts Script',
    desc: 'A tight Shorts script for {LABEL}.',
    body: `Write a YouTube Shorts script (under 45s) about [TOPIC] for {LABEL}, audience {AUD}.
Hook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.`,
  },
  {
    id: 'tw-thread', cat: 'twitter', tags: ['thread', 'viral'],
    title: 'Viral X Thread',
    desc: 'A 7-tweet thread for {LABEL}.',
    body: `Write a 7-tweet X (Twitter) thread about [TOPIC] for {AUD} in the {LABEL} space.
Tweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.`,
  },
  {
    id: 'li-post', cat: 'linkedin', tags: ['linkedin', 'authority'],
    title: 'Authority LinkedIn Post',
    desc: 'A story-driven post that builds credibility in {LABEL}.',
    body: `Write a LinkedIn post about [TOPIC] for {AUD}, from someone in {LABEL}.
Open with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.`,
  },
  {
    id: 'pb-bio', cat: 'personal', tags: ['bio', 'brand'],
    title: 'Bio That Converts',
    desc: 'A 150-char bio for {NAME}.',
    body: `Write 5 versions of a 150-character social bio for someone in {LABEL} who helps {AUD} with [BENEFIT].
Make each clear, confident, and a little memorable. Add a soft CTA where it fits.`,
  },
  {
    id: 'pb-pillars', cat: 'personal', tags: ['strategy', 'pillars'],
    title: 'Content Pillars',
    desc: '4 core themes + post ideas for {LABEL}.',
    body: `Suggest 4 content pillars for a personal brand in {LABEL}, audience {AUD}.
For each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.`,
  },
  {
    id: 'bl-outline', cat: 'blog', tags: ['seo', 'blog'],
    title: 'SEO Blog Outline',
    desc: 'A ready-to-write, ranked outline for {LABEL}.',
    body: `Create an SEO blog outline for the keyword [KEYWORD] for {AUD}, in the {LABEL} space.
Include an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.`,
  },
  {
    id: 'se-product', cat: 'selling', tags: ['product', 'copy'],
    title: 'Product Description That Sells',
    desc: 'Benefit-led copy for {LABEL}.',
    body: `Write a persuasive product description for [PRODUCT] from {LABEL}, aimed at {AUD}.
Lead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.`,
  },
  {
    id: 'se-festival', cat: 'selling', tags: ['festive', 'sale'],
    title: 'Festival Sale Post',
    desc: 'A festive promo that drives orders for {LABEL}.',
    body: `Write a [FESTIVAL] sale post for {LABEL} selling [PRODUCT]. Offer: [OFFER]. Audience: {AUD}.
Tone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.`,
  },
  {
    id: 'se-faq', cat: 'selling', tags: ['faq', 'conversion'],
    title: 'Customer FAQ (Beat Objections)',
    desc: 'Pre-answer what stops {AUD} from buying.',
    body: `Write a customer FAQ for {LABEL}, audience {AUD}.
Answer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.`,
  },
  {
    id: 'se-dm', cat: 'selling', tags: ['outreach', 'clients'],
    title: 'Cold DM to Land Clients',
    desc: 'A reply-worthy outreach DM for {LABEL}.',
    body: `Write a cold DM to pitch [SERVICE] from {LABEL} to {AUD}.
First line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.`,
  },
  {
    id: 'se-testimonial', cat: 'selling', tags: ['reviews', 'social proof'],
    title: 'Testimonial Request',
    desc: 'Get {AUD} to send a glowing review.',
    body: `Write a warm message asking a happy customer of {LABEL} for a testimonial.
Make it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.`,
  },
  {
    id: 'ad-copy', cat: 'ads', tags: ['ads', 'copy'],
    title: 'High-Converting Ad Copy',
    desc: '3 ad variations built to get clicks for {LABEL}.',
    body: `Write 3 ad copy variations for [PRODUCT] from {LABEL}, targeting {AUD} on [PLATFORM].
Each: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not "ad-y".`,
  },
  {
    id: 'ad-hooks', cat: 'ads', tags: ['headlines', 'testing'],
    title: 'Hook & Headline Variations',
    desc: '12 angles to test for {LABEL}.',
    body: `Give me 12 headline/hook variations for [PRODUCT] from {LABEL} that solve [PROBLEM] for {AUD}.
Mix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.`,
  },
  {
    id: 'em-whatsapp', cat: 'email', tags: ['whatsapp', 'broadcast'],
    title: 'WhatsApp Broadcast',
    desc: 'A friendly broadcast that gets replies for {LABEL}.',
    body: `Write a WhatsApp broadcast for {LABEL} about [OFFER], audience {AUD}.
Keep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.`,
  },
  {
    id: 'em-welcome', cat: 'email', tags: ['email', 'sequence'],
    title: 'Welcome Email',
    desc: 'Turn a new subscriber into a fan for {LABEL}.',
    body: `Write a welcome email for new subscribers of {LABEL}, audience {AUD}.
Warm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.`,
  },
  {
    id: 'em-subjects', cat: 'email', tags: ['subject lines', 'open rate'],
    title: 'Subject Lines That Get Opens',
    desc: '20 subject lines for {LABEL} emails.',
    body: `Give 20 email subject lines about [TOPIC] for {AUD} from {LABEL}.
Mix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.`,
  },
  {
    id: 'de-lead', cat: 'coaching', tags: ['lead magnet', 'funnel'],
    title: 'Lead Magnet Idea',
    desc: 'A free resource that grows a list for {LABEL}.',
    body: `Design a free lead magnet for {AUD} in {LABEL} that leads toward my paid [OFFER].
Suggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.`,
  },
  {
    id: 'de-salespage', cat: 'coaching', tags: ['sales page', 'copy'],
    title: 'Sales Page Outline',
    desc: 'A high-converting page structure for {LABEL}.',
    body: `Outline a sales page for [OFFER] from {LABEL}, audience {AUD}, price [PRICE].
Sections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.`,
  },
  {
    id: 'bd-pitch', cat: 'deals', tags: ['pitch', 'money'],
    title: 'Brand Collaboration Pitch',
    desc: 'Land a paid deal as a creator in {LABEL}.',
    body: `Write a confident brand collaboration pitch to [BRAND] from a {LABEL} creator with [FOLLOWERS] followers, audience {AUD}.
Lead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.`,
  },
  {
    id: 'lo-review', cat: 'local', tags: ['reviews', 'local'],
    title: 'Google Review Request',
    desc: 'Get more 5-star reviews for {LABEL}.',
    body: `Write a short, polite message asking happy customers of {LABEL} in [CITY] to leave a Google review.
Make it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: {AUD}.`,
  },
  {
    id: 'pl-calendar', cat: 'plan', tags: ['calendar', 'planning'],
    title: '7-Day Content Plan',
    desc: 'A done-for-you posting week for {LABEL}.',
    body: `Build a 7-day content plan for {LABEL}, audience {AUD}, goal [GOAL].
For each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].`,
  },
  {
    id: 'pl-ideas', cat: 'plan', tags: ['ideas', 'strategy'],
    title: '30 Content Ideas',
    desc: 'A full backlog of ideas for {LABEL}.',
    body: `Give 30 content ideas for {LABEL}, audience {AUD}.
Spread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.`,
  },
]
