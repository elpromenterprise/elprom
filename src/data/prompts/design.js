// 🎨 Design & Visuals
export default [
  {
    id: 'dz-image-prompt',
    title: 'AI Image Generation Prompt',
    category: 'design',
    description: 'A detailed prompt for Midjourney/DALL·E/Firefly that gets a great image.',
    tags: ['ai image', 'midjourney'],
    prompt: `Write a detailed AI image prompt for: [WHAT YOU WANT].
Use for: [USE, e.g. thumbnail/poster/post]. Style: [STYLE]. Mood: [MOOD]. Colours: [COLOURS].
Include: subject, setting, lighting, composition, style/medium, and quality keywords. Give 3 variations + suggested aspect ratio. Avoid text-in-image unless asked.`,
  },
  {
    id: 'dz-thumbnail-brief',
    title: 'Thumbnail Design Brief',
    category: 'design',
    description: 'A clear brief so your thumbnail actually gets clicks.',
    tags: ['thumbnail', 'brief'],
    prompt: `Create a thumbnail design brief for my video "[TITLE]" in the [NICHE] niche.
Give: the focal subject, the 3-4 word text overlay, the emotion/expression, background idea, colour contrast tips, and what to avoid (clutter). Make it readable on a small phone screen. Audience: [AUDIENCE].`,
  },
  {
    id: 'dz-brand-colors',
    title: 'Brand Colour & Font Direction',
    category: 'design',
    description: 'A cohesive colour palette + font pairing for your brand.',
    tags: ['branding', 'palette'],
    prompt: `Suggest a brand visual direction for [BRAND/WHAT YOU DO]. Vibe: [VIBE, e.g. premium/playful/minimal/desi]. Audience: [AUDIENCE].
Give: a colour palette (with hex codes + where to use each), 2 font pairings (heading + body), and the overall mood in a sentence. Plus what to avoid so it doesn't look generic.`,
  },
  {
    id: 'dz-logo-brief',
    title: 'Logo Design Brief',
    category: 'design',
    description: 'A brief to hand a designer (or an AI) for a logo.',
    tags: ['logo', 'brief'],
    prompt: `Write a logo design brief for [BRAND], a [WHAT YOU DO] for [AUDIENCE]. Personality: [3 ADJECTIVES].
Include: the brand story in 2 lines, style direction (wordmark/icon/combination), colours/feelings to convey, things to avoid, and where it'll be used (app, packaging, etc.). Give 3 concept directions.`,
  },
  {
    id: 'dz-carousel-design',
    title: 'Carousel Visual Layout Guide',
    category: 'design',
    description: 'How to lay out a carousel so it looks pro and gets read.',
    tags: ['carousel', 'layout'],
    prompt: `I'm designing an Instagram carousel about [TOPIC]. Give me a visual layout guide:
cover design (hook placement, contrast), how to lay out text-heavy slides for readability, colour/spacing tips, a consistent style across slides, and a strong "save/follow" final slide. Keep it doable in Canva.`,
  },
  {
    id: 'dz-canva-brief',
    title: 'Canva Template Brief',
    category: 'design',
    description: 'A step-by-step brief to build a post/poster in Canva.',
    tags: ['canva', 'how-to'],
    prompt: `Give me a Canva build guide for a [WHAT, e.g. promo poster / quote post] for my [NICHE] brand.
Include: size, layout structure, where to put the headline/CTA/logo, colour + font choices, an image/element suggestion, and 3 tips to make it look professional, not amateur. Beginner-friendly.`,
  },
  {
    id: 'dz-product-photo',
    title: 'Product Photo Shot List',
    category: 'design',
    description: 'A shot list to photograph products that sell.',
    tags: ['product photo', 'ecommerce'],
    prompt: `Give me a product photography shot list for [PRODUCT] (sold to [AUDIENCE]).
Include: hero shot, detail shots, scale/context, lifestyle/in-use, and a "benefit" shot. For each: the angle, background, and lighting tip. All doable with a phone + natural light. Add 3 props ideas.`,
  },
  {
    id: 'dz-poster-copy-layout',
    title: 'Poster / Banner Concept',
    category: 'design',
    description: 'Copy + layout direction for a poster or banner.',
    tags: ['poster', 'concept'],
    prompt: `Design concept for a poster/banner promoting [WHAT]. Goal: [GOAL]. Audience: [AUDIENCE]. Offer: [OFFER].
Give: the headline + subhead, the visual focal point, layout (where text vs image goes), colour mood, and the CTA placement. Readable from a distance, not cluttered.`,
  },
  {
    id: 'dz-moodboard',
    title: 'Moodboard / Aesthetic Direction',
    category: 'design',
    description: 'Define a consistent visual aesthetic for your feed.',
    tags: ['aesthetic', 'feed'],
    prompt: `Help me define a consistent visual aesthetic for my [NICHE] Instagram feed. Vibe I want: [VIBE].
Describe: the colour mood, photo style, recurring elements/filters, font feel, and 3 "do" + 3 "don't" rules so my feed looks cohesive. Audience: [AUDIENCE].`,
  },
  {
    id: 'dz-infographic',
    title: 'Infographic Content & Layout',
    category: 'design',
    description: 'Turn data/steps into a clear, shareable infographic.',
    tags: ['infographic', 'data'],
    prompt: `Create an infographic plan for [TOPIC/DATA] for [AUDIENCE].
Give: a title, the key points/stats to show (simplified), a logical visual flow (top to bottom), icon/visual suggestions per point, and colour/hierarchy tips so it's easy to scan and share.`,
  },
  {
    id: 'dz-presentation',
    title: 'Slide Deck Outline + Design Tips',
    category: 'design',
    description: 'A clean, persuasive deck structure with visual guidance.',
    tags: ['slides', 'deck'],
    prompt: `Outline a slide deck on [TOPIC] for [AUDIENCE], goal [GOAL]. Length: [NUMBER] slides.
For each slide: the one idea/headline, what to show (visual/chart/bullet), and minimal text. Add 5 design tips to keep it clean and modern (not bullet-soup). End with a strong closing slide + CTA.`,
  },
  {
    id: 'dz-alt-text',
    title: 'Alt Text & Accessible Captions',
    category: 'design',
    description: 'Descriptive alt text that helps SEO and accessibility.',
    tags: ['accessibility', 'seo'],
    prompt: `Write alt text for these images/posts: [DESCRIBE THE IMAGES].
Make each alt text descriptive and natural (what's in the image + context), useful for screen readers and discovery, and include a relevant keyword [KEYWORD] only where it fits naturally. Keep each under 125 chars.`,
  },
]
