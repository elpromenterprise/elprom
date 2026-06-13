// ✍️ Blog & SEO
export default [
  {
    id: 'bl-outline-seo',
    title: 'Blog Post Outline That Ranks on Google',
    category: 'blog',
    description: 'An SEO-structured outline with H2s, FAQ and keyword placement.',
    tags: ['seo', 'outline'],
    prompt: `Create an SEO blog outline for "[TOPIC]". Target keyword: [KEYWORD]. Word count: [WORD COUNT]. Audience: [AUDIENCE].
Include: an SEO title (under 60 chars) with the keyword; a meta description (under 155 chars); H2/H3 subheadings in a logical flow; a "People Also Ask" FAQ with 5 questions; suggested internal-link spots and one CTA. Scannable.`,
  },
  {
    id: 'bl-intro-pas',
    title: 'Blog Intro That Keeps Readers',
    category: 'blog',
    description: 'A hook intro using problem-agitate-solve.',
    tags: ['intro', 'copywriting'],
    prompt: `Write an intro (under 120 words) for a post titled "[TITLE]". Audience: [AUDIENCE]. Keyword early: [KEYWORD].
Use Problem → Agitate → Solve: name the problem, make them feel it, promise the solution this post gives. Short sentences. Don't start with "In today's world".`,
  },
  {
    id: 'bl-full-draft',
    title: 'Full Blog Section Draft',
    category: 'blog',
    description: 'Write a complete, well-structured section from a subheading.',
    tags: ['draft', 'writing'],
    prompt: `Write the section under this subheading: "[SUBHEADING]" for a blog post about [TOPIC].
Audience: [AUDIENCE]. Tone: [TONE]. Keyword to include once naturally: [KEYWORD].
Make it 150-250 words, useful and specific (examples, not fluff), with short paragraphs. End with a smooth transition to the next section.`,
  },
  {
    id: 'bl-titles',
    title: '15 SEO Blog Titles',
    category: 'blog',
    description: 'Click-worthy, keyword-rich titles for one topic.',
    tags: ['titles', 'seo'],
    prompt: `Give 15 blog title options for the topic [TOPIC], target keyword [KEYWORD], audience [AUDIENCE].
Mix: how-to, listicle, "best", question, year [YEAR], and benefit-driven. Each under 60 chars with the keyword. Mark the 3 most clickable.`,
  },
  {
    id: 'bl-meta',
    title: 'Meta Title + Description Pack',
    category: 'blog',
    description: 'Optimised SERP snippets that earn the click.',
    tags: ['seo', 'meta'],
    prompt: `Write 3 meta title + meta description pairs for a page about [TOPIC], keyword [KEYWORD].
Titles under 60 chars, descriptions under 155 chars, each with the keyword and a reason to click (benefit/curiosity). Audience: [AUDIENCE].`,
  },
  {
    id: 'bl-keyword-cluster',
    title: 'Keyword Cluster / Content Plan',
    category: 'blog',
    description: 'A pillar + cluster plan to own a topic on Google.',
    tags: ['seo', 'strategy'],
    prompt: `I want to rank for the topic [BROAD TOPIC] in the [NICHE] niche.
Give me a pillar page idea + 10 supporting cluster article ideas (with the target keyword for each) and how they should link together. Audience: [AUDIENCE].`,
  },
  {
    id: 'bl-faq',
    title: 'FAQ Section (People Also Ask)',
    category: 'blog',
    description: 'Answer the questions Google surfaces for your topic.',
    tags: ['faq', 'seo'],
    prompt: `Write an FAQ section for a post about [TOPIC], keyword [KEYWORD], audience [AUDIENCE].
Give 6 real questions people search, each with a concise 2-3 sentence answer optimised for featured snippets. Format question as H3.`,
  },
  {
    id: 'bl-listicle',
    title: 'Listicle Article ("Best / Top X")',
    category: 'blog',
    description: 'A structured "best of" article that ranks and converts.',
    tags: ['listicle', 'seo'],
    prompt: `Outline a listicle: "[NUMBER] Best [THING] for [AUDIENCE] ([YEAR])". Keyword: [KEYWORD].
For each item: a name, a one-line why, key pros/cons, and who it's best for. Add an intro, a quick "how we picked" note, and a conclusion with a CTA. Affiliate-friendly spots noted.`,
  },
  {
    id: 'bl-howto',
    title: 'Step-by-Step How-To Guide',
    category: 'blog',
    description: 'A clear tutorial article readers can follow along.',
    tags: ['how-to', 'tutorial'],
    prompt: `Write a how-to guide: "How to [TASK]". Audience skill: [LEVEL]. Keyword: [KEYWORD].
Include: an intro with the end benefit, a "what you need" list, numbered steps with clear instructions, common mistakes, tips, and an FAQ. Practical and skimmable.`,
  },
  {
    id: 'bl-rewrite-seo',
    title: 'Optimise My Existing Post for SEO',
    category: 'blog',
    description: 'Improve a draft for rankings without keyword-stuffing.',
    tags: ['seo', 'editing'],
    prompt: `Here's my blog draft:
"""
[PASTE DRAFT OR SECTION]
"""
Target keyword: [KEYWORD]. Improve it for SEO and readability: better title/headings, natural keyword use, internal-link suggestions, a meta description, and shorter sentences. List the changes you'd make.`,
  },
  {
    id: 'bl-product-roundup',
    title: 'Affiliate Product Roundup',
    category: 'blog',
    description: 'A comparison roundup designed to earn affiliate clicks.',
    tags: ['affiliate', 'roundup'],
    prompt: `Write an affiliate roundup comparing [PRODUCTS/CATEGORY] for [AUDIENCE].
Include: an intro on what to look for, a comparison of [NUMBER] options (pros, cons, price, best-for), a "my pick" verdict, and a comparison-table outline. Honest tone. Mark where affiliate links go.`,
  },
  {
    id: 'bl-conclusion',
    title: 'Strong Conclusion + CTA',
    category: 'blog',
    description: 'A closing that recaps and drives the next action.',
    tags: ['conclusion', 'cta'],
    prompt: `Write a conclusion for a post about [TOPIC], audience [AUDIENCE].
Recap the key takeaway in 2-3 lines, motivate the reader to act, and end with a clear CTA: [CTA, e.g. subscribe / try the tool / read next]. Don't just say "in conclusion".`,
  },
  {
    id: 'bl-repurpose-social',
    title: 'Blog → Social Posts',
    category: 'blog',
    description: 'Squeeze a week of social posts out of one article.',
    tags: ['repurpose', 'social'],
    prompt: `Turn this blog post into social content:
"""
[PASTE POST OR KEY POINTS]
"""
Give me: 1 X thread, 1 LinkedIn post, 3 Instagram carousel hooks, and 2 short captions. Keep the core ideas, adapt the style for each platform.`,
  },
  {
    id: 'bl-comparison',
    title: '"X vs Y" Comparison Article',
    category: 'blog',
    description: 'A fair head-to-head that ranks for comparison searches.',
    tags: ['comparison', 'seo'],
    prompt: `Outline a "[X] vs [Y]" comparison article for [AUDIENCE], keyword [KEYWORD].
Cover: quick verdict up top, a comparison table of key factors, deep-dive on each, who should pick which, and a conclusion. Be balanced and specific. Note FAQ questions to add.`,
  },
  {
    id: 'bl-content-calendar',
    title: 'Monthly Blog Content Calendar',
    category: 'blog',
    description: 'A month of post ideas mapping to search intent.',
    tags: ['calendar', 'strategy'],
    prompt: `Plan a month of blog posts (8 articles) for the [NICHE] niche, audience [AUDIENCE].
For each: a title, target keyword, search intent (info/commercial), and a one-line angle. Balance traffic-drivers with conversion-focused posts.`,
  },
  {
    id: 'bl-storytelling',
    title: 'Add Storytelling to a Dry Post',
    category: 'blog',
    description: 'Make a factual article engaging with story elements.',
    tags: ['storytelling', 'editing'],
    prompt: `Here's a dry section of my post:
"""
[PASTE SECTION]
"""
Topic: [TOPIC]. Audience: [AUDIENCE]. Rewrite it with light storytelling — a relatable example, an analogy, or a mini-anecdote — so it's engaging without losing the facts.`,
  },
  {
    id: 'bl-internal-links',
    title: 'Internal Linking Suggestions',
    category: 'blog',
    description: 'Smart internal links to boost SEO and time-on-site.',
    tags: ['seo', 'internal links'],
    prompt: `My new post is about [TOPIC]. My site also has posts on: [LIST YOUR OTHER TOPICS/URLS].
Suggest where to add internal links in the new post, the anchor text to use, and 3 places older posts should link to this new one. Keep anchors natural.`,
  },
  {
    id: 'bl-outreach',
    title: 'Guest Post / Backlink Outreach Email',
    category: 'blog',
    description: 'A pitch that gets you backlinks or guest spots.',
    tags: ['outreach', 'backlinks'],
    prompt: `Write a backlink/guest-post outreach email to [SITE/BLOG] in the [NICHE] niche.
What I offer: [YOUR ANGLE/VALUE]. My site: [YOUR SITE].
Personalised opener (reference their content), a clear value-first proposal, and an easy yes. Under 130 words. Give 2 versions.`,
  },
  {
    id: 'bl-newsletter-from-blog',
    title: 'Blog → Newsletter Email',
    category: 'blog',
    description: 'Turn a post into an email that drives traffic back.',
    tags: ['newsletter', 'repurpose'],
    prompt: `Turn this blog post into a newsletter email:
"""
[PASTE POST OR SUMMARY]
"""
Give a subject line, a warm intro, the key value in a scannable format, and a CTA to read the full post [LINK]. Tone: [TONE]. Keep it tight.`,
  },
  {
    id: 'bl-title-test',
    title: 'Improve My Headline (CTR)',
    category: 'blog',
    description: 'Diagnose and rewrite a weak blog headline.',
    tags: ['headline', 'ctr'],
    prompt: `My current headline: "[HEADLINE]". Topic: [TOPIC]. Keyword: [KEYWORD]. Audience: [AUDIENCE].
Tell me what's weak, then give 8 stronger versions (clearer benefit, curiosity, specificity) under 60 chars. Pick the best and say why.`,
  },
  {
    id: 'bl-research-brief',
    title: 'Article Research Brief',
    category: 'blog',
    description: 'A brief covering angles, sources to check, and gaps to fill.',
    tags: ['research', 'planning'],
    prompt: `I'm writing about [TOPIC] for [AUDIENCE].
Give a research brief: the key questions to answer, sub-topics readers expect, common mistakes/myths to address, what competitors likely miss (my angle), and 5 stats/claims I should verify. (I'll fact-check myself.)`,
  },
]
