// 📸 Instagram
export default [
  {
    id: 'ig-caption-sell',
    title: 'Instagram Caption That Actually Sells',
    category: 'instagram',
    description: 'Turns a plain product photo into a caption that drives DMs and sales — not just likes.',
    tags: ['caption', 'sales', 'product'],
    prompt: `You are a top Indian Instagram copywriter. Write 3 caption options for a post selling [PRODUCT].
Audience: [AUDIENCE, e.g. women 22-35 who love affordable fashion]
Tone: [TONE, e.g. friendly, a little cheeky]
Price: [PRICE]

Each caption must:
- Open with a scroll-stopping hook (a question or bold statement)
- Use simple, emotional language (no corporate words)
- Have 3 short benefit lines with emojis
- End with a clear CTA: "DM '[KEYWORD]' to order"
- Include 5 relevant hashtags (mix of big + niche Indian tags)
- Stay under 150 words
Give me 3 styles: emotional, funny, urgency-based.`,
  },
  {
    id: 'ig-hook-30',
    title: '30 Scroll-Stopping Hooks for Any Niche',
    category: 'instagram',
    description: 'A month of opening lines so you never stare at a blank caption again.',
    tags: ['hooks', 'ideas', 'engagement'],
    prompt: `Act as a viral Instagram strategist. My niche is [NICHE] and my audience is [AUDIENCE].
Give me 30 scroll-stopping hooks (first lines) for Reels or posts.
Mix: shocking stat, bold opinion, relatable pain, "nobody tells you", before/after, curiosity gap.
Rules: max 12 words each, written in [LANGUAGE, e.g. Hinglish], numbered 1-30, no "Hey guys".`,
  },
  {
    id: 'ig-carousel',
    title: 'Carousel Post That Gets Saved',
    category: 'instagram',
    description: 'Saves & shares beat likes in the algorithm. Builds a 7-slide value carousel.',
    tags: ['carousel', 'value', 'saves'],
    prompt: `Create a 7-slide Instagram carousel for my niche [NICHE]. Topic: [TOPIC]. Audience: [AUDIENCE].
- Slide 1: a bold cover hook + subtext (make people swipe)
- Slides 2-6: one clear tip each, max 25 words
- Slide 7: recap + CTA ("Save this" + "Follow @[HANDLE]")
Add a one-line caption with 5 hashtags. Keep language simple and punchy.`,
  },
  {
    id: 'ig-hashtags',
    title: 'Smart Hashtag Set (Not the Same 30)',
    category: 'instagram',
    description: 'A balanced reach/niche/local hashtag mix instead of copy-pasting #love #instagood.',
    tags: ['hashtags', 'reach'],
    prompt: `Give me 3 hashtag sets (15 tags each) for a post about [TOPIC] in the [NICHE] niche, Indian audience.
Each set: 3 large (1M+), 7 medium (100k-1M), 5 small/local (under 100k, e.g. #MumbaiFoodie).
Label them Set A (Reach), Set B (Niche), Set C (Local). No banned/spammy tags.`,
  },
  {
    id: 'ig-bio',
    title: 'Instagram Bio That Converts Visitors to Followers',
    category: 'instagram',
    description: 'Rewrites your bio so a stranger follows in 3 seconds.',
    tags: ['bio', 'profile'],
    prompt: `Rewrite my Instagram bio so a first-time visitor follows instantly.
What I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. What's different: [DIFFERENTIATOR]. Link goal: [LINK GOAL].
Give 4 options (max 4 lines each): a clear value line, personality, soft CTA to my link. 1-2 emojis max.`,
  },
  {
    id: 'ig-story-poll',
    title: 'Story Sequence That Boosts Engagement',
    category: 'instagram',
    description: 'A 5-story flow using polls & questions to wake up a dead audience.',
    tags: ['stories', 'engagement'],
    prompt: `Plan a 5-story Instagram sequence to re-engage my [NICHE] followers. Goal: [GOAL].
For each story: the on-screen text, an interactive sticker idea (poll/quiz/question/slider) with options, and a one-line why it works. Keep it casual.`,
  },
  {
    id: 'ig-content-week',
    title: 'Full 7-Day Instagram Content Plan',
    category: 'instagram',
    description: 'A done-for-you week of posts across formats so you can batch-create.',
    tags: ['calendar', 'planning', 'batch'],
    prompt: `Build a 7-day Instagram plan for my [NICHE] account, audience [AUDIENCE]. Goal this week: [GOAL].
For each day: format (Reel/carousel/story/static), the hook/title, a one-line brief, the CTA.
Balance value, relatability, and 1-2 promo posts for [PRODUCT/SERVICE]. Clean day-by-day list.`,
  },
  {
    id: 'ig-comment-replies',
    title: 'Engaging Replies to Boost Your Posts',
    category: 'instagram',
    description: 'Reply templates that keep conversations going and lift reach.',
    tags: ['engagement', 'replies', 'community'],
    prompt: `Give 10 reply templates for comments on my [NICHE] posts.
Cover: a compliment, a question, a hater, a "where to buy", emoji-only, a fellow creator.
Each: human + warm, encourages more conversation, sometimes a soft CTA. Short and copy-ready.`,
  },
  {
    id: 'ig-seo-keywords',
    title: 'SEO Keywords for Profile & Captions',
    category: 'instagram',
    description: 'Instagram now ranks on keywords — this finds yours.',
    tags: ['seo', 'keywords', 'discovery'],
    prompt: `Find search keywords my audience uses to discover content like mine.
Niche: [NICHE]. Audience: [AUDIENCE]. Platform: Instagram.
Give 10 phrases people search, where to place them (bio, caption first line, alt text), and 3 example caption first-lines using a keyword naturally.`,
  },
  {
    id: 'ig-from-questions',
    title: 'Turn Audience Questions into Posts',
    category: 'instagram',
    description: 'Mine your DMs/comments for an endless content supply.',
    tags: ['ideas', 'community'],
    prompt: `Here are questions my audience keeps asking:
"""
[PASTE 3-5 QUESTIONS]
"""
Niche: [NICHE]. For each: a content title/hook answering it, the best format (Reel/carousel/story), and a 2-line brief.`,
  },
  {
    id: 'ig-reel-vs-carousel',
    title: 'Should This Be a Reel or Carousel?',
    category: 'instagram',
    description: 'Decide the best format for any idea and get a tailored outline.',
    tags: ['strategy', 'format'],
    prompt: `My content idea: [IDEA]. Niche: [NICHE]. Audience: [AUDIENCE].
Tell me whether this works better as a Reel, carousel, or static post, and why.
Then give me a quick outline for the format you recommend.`,
  },
  {
    id: 'ig-niche-pillars',
    title: 'Find My 4 Instagram Content Pillars',
    category: 'instagram',
    description: 'Stops random posting — defines what you talk about.',
    tags: ['strategy', 'pillars'],
    prompt: `Help me define 4 content pillars for my Instagram.
About me: [ABOUT YOU]. Known for: [GOAL]. Audience: [AUDIENCE].
Give 4 specific pillars, 5 content ideas each, and a one-line brand promise tying them together.`,
  },
  {
    id: 'ig-giveaway',
    title: 'Giveaway Post That Grows Followers',
    category: 'instagram',
    description: 'A giveaway caption + rules designed to maximise follows and tags.',
    tags: ['giveaway', 'growth'],
    prompt: `Write a giveaway post for my [NICHE] account. Prize: [PRIZE]. Goal: [GOAL, e.g. reach 10k followers].
Include: an exciting caption, 4 simple entry rules (follow, like, tag 2 friends, share to story), the deadline [DEADLINE], and a hashtag. Keep it legal and clear.`,
  },
  {
    id: 'ig-reintroduce',
    title: 'Re-Introduction Post (Welcome New Followers)',
    category: 'instagram',
    description: 'A warm "who I am" post to convert new followers into fans.',
    tags: ['intro', 'community'],
    prompt: `Write an Instagram "re-introduction" post.
Name: [NAME]. What I do: [WHAT YOU DO]. Why I started: [STORY]. What followers get: [VALUE].
Make it warm and personal, with a question at the end to spark comments. Add 5 hashtags.`,
  },
  {
    id: 'ig-trend-audio',
    title: 'Use a Trending Audio for My Niche',
    category: 'instagram',
    description: 'Adapt a trending sound into content that fits your brand.',
    tags: ['trend', 'reels'],
    prompt: `A trending audio/format is going viral: [DESCRIBE IT]. My niche: [NICHE]. Audience: [AUDIENCE].
Give 3 ways to use it that feel natural, not forced. For each: the concept, on-screen text, and caption. Easy to shoot on a phone.`,
  },
  {
    id: 'ig-product-launch',
    title: 'Product Launch Teaser Series',
    category: 'instagram',
    description: 'A 3-post teaser-to-launch sequence that builds hype.',
    tags: ['launch', 'sales'],
    prompt: `Plan a 3-post launch sequence for [PRODUCT] (price [PRICE], audience [AUDIENCE]).
Post 1: tease/curiosity. Post 2: reveal + benefits. Post 3: it's live + CTA + offer [OFFER].
For each: caption + Story idea + CTA. Build anticipation without over-hyping.`,
  },
  {
    id: 'ig-quote-post',
    title: 'Quote / Motivation Post for My Niche',
    category: 'instagram',
    description: 'Original, shareable one-liners that fit your brand voice.',
    tags: ['quotes', 'shareable'],
    prompt: `Give me 10 original, shareable quote-style lines for the [NICHE] niche, audience [AUDIENCE].
Tone: [TONE]. Each must be tweetable (under 120 chars), feel fresh (not cliché), and work on a clean text graphic. Suggest a caption to pair with the best one.`,
  },
  {
    id: 'ig-myth-bust',
    title: 'Myth-Busting Post (Authority Builder)',
    category: 'instagram',
    description: 'Bust common myths in your niche to build trust and expertise.',
    tags: ['authority', 'educational'],
    prompt: `Give me 5 common myths in the [NICHE] niche and bust each with the truth.
For each: the myth (as a bold hook), the reality (1-2 lines), and why it matters to [AUDIENCE].
Format the top one as a ready carousel (myth on cover, truth inside).`,
  },
  {
    id: 'ig-behind-scenes',
    title: 'Behind-the-Scenes Post Ideas',
    category: 'instagram',
    description: 'Relatable BTS content that humanises your brand.',
    tags: ['bts', 'relatable'],
    prompt: `Give me 10 behind-the-scenes content ideas for my [NICHE] account / business.
For each: a hook, the format, and what to show. Make them feel authentic and relatable to [AUDIENCE], the kind of stuff that builds a real connection.`,
  },
  {
    id: 'ig-collab-caption',
    title: 'Caption for a Collab / Feature Post',
    category: 'instagram',
    description: 'A caption for when you collaborate with or feature someone.',
    tags: ['collab', 'caption'],
    prompt: `Write a caption for a collab post with [PARTNER] about [WHAT THE COLLAB IS].
My niche: [NICHE]. Tone: [TONE].
Credit the partner naturally, tell people why this collab is valuable, and add a CTA to follow both. 5 hashtags.`,
  },
  {
    id: 'ig-testimonial-post',
    title: 'Turn a Review into a Social-Proof Post',
    category: 'instagram',
    description: 'Reframe a customer review into a scroll-stopping testimonial post.',
    tags: ['social proof', 'sales'],
    prompt: `Here's a customer review:
"""
[PASTE REVIEW]
"""
Product: [PRODUCT]. Turn it into an Instagram post: a hook that leads with the result, the review framed nicely, and a soft CTA to buy ("DM to order"). Suggest a simple graphic layout.`,
  },
  {
    id: 'ig-this-or-that',
    title: 'Interactive "This or That" Post',
    category: 'instagram',
    description: 'High-engagement comparison posts that spark comments.',
    tags: ['engagement', 'interactive'],
    prompt: `Create 5 "This or That" style interactive post ideas for the [NICHE] niche.
Each should give the audience an easy choice that sparks comments and debate. Add a caption prompting them to comment their pick + a poll Story version.`,
  },
  {
    id: 'ig-day-in-life',
    title: '"Day in My Life" Reel/Post Script',
    category: 'instagram',
    description: 'A relatable day-in-the-life that grows a personal brand.',
    tags: ['vlog', 'personal'],
    prompt: `Write a "day in my life" Reel script for a [WHAT YOU DO] in [CITY/PLACE].
Audience: [AUDIENCE]. Include 6-8 quick scene ideas with on-screen text, a hook at the start, and a caption. Make it aspirational but real.`,
  },
  {
    id: 'ig-save-worthy-list',
    title: 'Save-Worthy "Top 5 / Top 10" List Post',
    category: 'instagram',
    description: 'List posts people bookmark — great for reach via saves.',
    tags: ['list', 'saves', 'value'],
    prompt: `Create a save-worthy "Top [NUMBER] [THING], e.g. apps/tips/tools" post for the [NICHE] niche, audience [AUDIENCE].
Give each item a name + one-line why. Format as a carousel (cover hook + one item per slide) and add a "Save this" caption.`,
  },
  {
    id: 'ig-before-after',
    title: 'Before / After Transformation Post',
    category: 'instagram',
    description: 'Showcase results in a format that proves your value.',
    tags: ['transformation', 'proof'],
    prompt: `Write a before/after transformation post about [TRANSFORMATION, e.g. a client result / my own journey].
Niche: [NICHE]. Audience: [AUDIENCE].
Hook with the "after", tell the story of the change, end with a CTA. Make it inspiring and believable, not braggy.`,
  },
  {
    id: 'ig-reel-hook-fix',
    title: 'Fix My Weak Reel Hook',
    category: 'instagram',
    description: 'Paste your hook, get sharper rewrites and a winner.',
    tags: ['hooks', 'optimization'],
    prompt: `My current Reel hook: "[YOUR HOOK]". Niche: [NICHE]. Audience: [AUDIENCE].
1) Tell me honestly what's weak. 2) Rewrite it 5 stronger ways. 3) Pick the single best and say why in one line.`,
  },
  {
    id: 'ig-monthly-review',
    title: 'Analyze My Instagram Month',
    category: 'instagram',
    description: 'Paste your stats, get a read on what worked and what to do next.',
    tags: ['analytics', 'strategy'],
    prompt: `Here's my Instagram performance this month:
"""
[PASTE STATS — top posts, reach, follows, what flopped]
"""
Niche: [NICHE]. Goal: [GOAL].
Tell me what worked and WHY, what to stop, 3 things to double down on, and a one-sentence focus for next month.`,
  },
  {
    id: 'ig-festival-post',
    title: 'Festival Greeting Post (On-Brand)',
    category: 'instagram',
    description: 'Festive greetings that stay on-brand and drive engagement.',
    tags: ['festival', 'india', 'engagement'],
    prompt: `Write a festive greeting post for [FESTIVAL, e.g. Diwali] for my [NICHE] brand.
Audience: [AUDIENCE]. Tone: warm and genuine.
Include a heartfelt caption that ties the festival to my brand subtly, a Story idea, and 3 festive hashtags. Optional soft CTA for [OFFER].`,
  },
  {
    id: 'ig-poll-questions',
    title: '20 Story Poll & Question Ideas',
    category: 'instagram',
    description: 'A bank of Story prompts to keep your audience engaged daily.',
    tags: ['stories', 'engagement'],
    prompt: `Give me 20 Instagram Story poll/question/quiz ideas for the [NICHE] niche, audience [AUDIENCE].
Mix fun, useful, and ones that help me understand my audience (so I can make better content/products). Label each with the sticker type.`,
  },
  {
    id: 'ig-pinned-3',
    title: 'My 3 Pinned Posts Strategy',
    category: 'instagram',
    description: 'Decide what your 3 pinned posts should be to convert profile visitors.',
    tags: ['profile', 'strategy'],
    prompt: `Help me choose what my 3 pinned Instagram posts should be.
What I do: [WHAT YOU DO]. Goal: [GOAL, e.g. sell [PRODUCT] / grow followers]. Audience: [AUDIENCE].
Recommend 3 post types/topics for the pinned slots and why each one converts a new visitor. Give a hook for each.`,
  },
  {
    id: 'ig-caption-formulas',
    title: '10 Caption Formulas (Fill-in)',
    category: 'instagram',
    description: 'Reusable caption templates so writing captions takes seconds.',
    tags: ['caption', 'templates'],
    prompt: `Give me 10 reusable Instagram caption formulas (fill-in-the-blank) for the [NICHE] niche, audience [AUDIENCE].
Cover: storytelling, listicle, question-hook, hot-take, tip, relatable, promo, and "carousel companion". Show each as a template + one filled example for [TOPIC].`,
  },
  {
    id: 'ig-broll-ideas',
    title: 'B-Roll Shot Ideas for My Niche',
    category: 'instagram',
    description: 'A list of b-roll clips to film so your Reels look pro.',
    tags: ['reels', 'production'],
    prompt: `Give me 15 b-roll shot ideas I can film on my phone for [NICHE] Reels, audience [AUDIENCE].
For each: what to shoot + how it makes a Reel look better (cutaways, transitions, atmosphere). Keep them simple, no fancy gear, doable at home or [PLACE].`,
  },
]
