// ▶️ YouTube
export default [
  {
    id: 'yt-script-hook',
    title: 'YouTube Script That Hooks in 30 Seconds',
    category: 'youtube',
    description: 'Full script skeleton with a retention-first intro so viewers don\'t click away.',
    tags: ['script', 'retention', 'long-form'],
    prompt: `Write a full YouTube script outline on: [TOPIC]. Niche: [NICHE]. Length: [LENGTH]. Audience: [AUDIENCE].
- HOOK (0-30s): an open loop that promises a payoff
- INTRO (30-60s): why it matters + what they'll get (no long self-intro)
- BODY: [NUMBER] key points, each a talking-point bullet + quick example
- RETENTION: a "but wait" twist in the middle
- CTA: ask for ONE specific thing
Spoken, natural tone, short sentences I can read aloud.`,
  },
  {
    id: 'yt-titles',
    title: '12 Click-Worthy YouTube Titles',
    category: 'youtube',
    description: 'High-CTR titles using curiosity, numbers and stakes — without clickbait lies.',
    tags: ['titles', 'ctr'],
    prompt: `Give 12 high-CTR YouTube titles for a video about [TOPIC] in the [NICHE] niche.
Mix: numbers, "how I/you", curiosity gap, mistake/warning, result-driven.
Under 60 chars, no fake claims (must match: [WHAT THE VIDEO DELIVERS]). Mark the top 3 with 🔥 + a one-line why.`,
  },
  {
    id: 'yt-thumbnail-text',
    title: 'Thumbnail Text That Stops the Scroll',
    category: 'youtube',
    description: 'Punchy 3-4 word thumbnail overlays that pair with your title.',
    tags: ['thumbnail', 'ctr', 'design'],
    prompt: `Give 6 thumbnail text options for a video titled "[TITLE]".
Max 4 words each, high emotion, must NOT repeat the title (add to it).
Suggest one facial expression/visual for each. Format: Thumbnail Text | Visual Idea.`,
  },
  {
    id: 'yt-description',
    title: 'SEO YouTube Description + Tags',
    category: 'youtube',
    description: 'A description that ranks, plus timestamps and tags, in one shot.',
    tags: ['seo', 'description', 'tags'],
    prompt: `Write a YouTube description for "[TITLE]" about [TOPIC]. Main keyword: [KEYWORD].
Include: a 2-sentence summary with the keyword in line 1; 3-5 "what you'll learn" bullets; a timestamps placeholder; a subscribe CTA + links [LINK 1], [LINK 2]; and 15 SEO tags as a comma list. Skimmable, not stuffed.`,
  },
  {
    id: 'yt-shorts-from-long',
    title: 'Turn 1 Long Video into 5 Shorts',
    category: 'youtube',
    description: 'Repurpose a single video into a week of Shorts/Reels scripts.',
    tags: ['repurpose', 'shorts'],
    prompt: `Here is my video transcript/summary:
"""
[PASTE TRANSCRIPT OR SUMMARY]
"""
Pull 5 short-form ideas. For each: a hook (max 8 words), a 3-4 line script for 20-30s, the moment it's based on, and an on-screen caption. Each must stand alone.`,
  },
  {
    id: 'yt-faceless',
    title: 'Faceless YouTube Channel Ideas',
    category: 'youtube',
    description: 'Formats and ideas to grow without showing your face.',
    tags: ['faceless', 'ideas'],
    prompt: `I want a faceless YouTube channel in the [NICHE] niche, audience [AUDIENCE].
Give 5 faceless formats that work (text-on-screen, voiceover + b-roll, screen recording, etc.), 10 specific video ideas, and a tool suggestion per format. Beginner-friendly with just a phone/laptop.`,
  },
  {
    id: 'yt-script-doctor',
    title: 'Fix My Boring Script',
    category: 'youtube',
    description: 'Paste a draft, get a punchier, higher-retention rewrite with notes.',
    tags: ['editing', 'rewrite', 'retention'],
    prompt: `My draft script:
"""
[PASTE DRAFT]
"""
Niche: [NICHE]. Audience: [AUDIENCE].
Rewrite punchier (shorter sentences, stronger hook, clearer CTA), cut boring/repetitive parts, keep my voice. Then list 3 specific changes you made and why.`,
  },
  {
    id: 'yt-video-ideas-30',
    title: '30 Video Ideas for the Next Quarter',
    category: 'youtube',
    description: 'A backlog of proven video angles so you never run dry.',
    tags: ['ideas', 'planning'],
    prompt: `Give 30 YouTube video ideas for my [NICHE] channel, audience [AUDIENCE].
Spread across: how-to, listicle, story/journey, myth-busting, reaction/review, beginner-to-pro, and trending. For each: a title + one-line angle. Numbered, labelled by type.`,
  },
  {
    id: 'yt-intro-rewrite',
    title: 'Rewrite My Intro to Stop Drop-Off',
    category: 'youtube',
    description: 'Fix the first 30 seconds where most viewers leave.',
    tags: ['retention', 'intro'],
    prompt: `Here's my current video intro:
"""
[PASTE INTRO]
"""
Topic: [TOPIC]. Rewrite the first 30 seconds to hook harder: open a loop, promise a payoff, cut the fluff, and tease what's coming. Give me 2 versions.`,
  },
  {
    id: 'yt-community-post',
    title: 'Pinned Comment & Community Post',
    category: 'youtube',
    description: 'Boost watch-time and engagement between uploads.',
    tags: ['engagement', 'community'],
    prompt: `For my latest video "[TITLE]" (niche [NICHE], goal [GOAL]): write a pinned comment that asks a specific question to spark replies, and a Community tab post (poll or update) to keep my channel active between uploads. Casual and engaging.`,
  },
  {
    id: 'yt-series-plan',
    title: 'Plan a YouTube Series',
    category: 'youtube',
    description: 'Turn one topic into a binge-able multi-part series.',
    tags: ['series', 'strategy'],
    prompt: `Help me plan a YouTube series on [BROAD TOPIC] for the [NICHE] niche, audience [AUDIENCE].
Give a series title, [NUMBER] episode titles in a logical order, a one-line hook for each, and how each episode links to the next to keep people watching.`,
  },
  {
    id: 'yt-research-outline',
    title: 'Deep Research Outline for a Video',
    category: 'youtube',
    description: 'A structured research brief so your video is accurate and complete.',
    tags: ['research', 'outline'],
    prompt: `I'm making a video on [TOPIC]. Audience: [AUDIENCE].
Give me a research outline: the 6-8 key questions the video must answer, common misconceptions to address, sub-points to cover, and 3 angles that would make my take unique. (I'll verify facts myself.)`,
  },
  {
    id: 'yt-collab-pitch',
    title: 'Pitch a Collab to Another YouTuber',
    category: 'youtube',
    description: 'A message to propose a mutually beneficial collab.',
    tags: ['collab', 'networking'],
    prompt: `Write a message pitching a YouTube collab to [CREATOR].
Them: [THEIR NICHE/WHY THEY FIT]. Me: [MY NICHE + SIZE]. Idea: [COLLAB IDEA].
Specific genuine compliment, clear mutual benefit, low pressure, easy yes. Under 80 words.`,
  },
  {
    id: 'yt-channel-trailer',
    title: 'Channel Trailer Script (60s)',
    category: 'youtube',
    description: 'The short trailer that converts visitors into subscribers.',
    tags: ['trailer', 'conversion'],
    prompt: `Write a 60-second channel trailer script.
Channel: [WHAT IT'S ABOUT]. Who it's for: [AUDIENCE]. What they'll get: [VALUE]. Upload schedule: [SCHEDULE].
Hook in 5 seconds, show the value fast, end with "Subscribe so you don't miss it". Energetic and clear.`,
  },
  {
    id: 'yt-chapters',
    title: 'Write Chapters / Timestamps',
    category: 'youtube',
    description: 'Generate clean chapter titles from your script or summary.',
    tags: ['chapters', 'seo'],
    prompt: `Here's my video script/summary:
"""
[PASTE SCRIPT OR SUMMARY]
"""
Create YouTube chapters (timestamps + short titles). Make titles curiosity-driven but clear, keyword-aware for [KEYWORD], and easy to scan. Start with 0:00 Intro.`,
  },
  {
    id: 'yt-ab-titles',
    title: 'A/B Test 2 Title + Thumbnail Concepts',
    category: 'youtube',
    description: 'Two complete packaging concepts to test against each other.',
    tags: ['packaging', 'testing'],
    prompt: `For my video on [TOPIC] (niche [NICHE]): give me 2 distinct packaging concepts to A/B test.
Each: a title (under 60 chars), thumbnail text (max 4 words), thumbnail visual idea, and the emotional angle. Tell me which you'd bet on and why.`,
  },
  {
    id: 'yt-hook-bank',
    title: '20 YouTube Hook Templates',
    category: 'youtube',
    description: 'Fill-in hook templates for the crucial first line.',
    tags: ['hooks', 'retention'],
    prompt: `Give 20 reusable YouTube hook templates (fill-in-the-blank) for the [NICHE] niche.
Mix: bold claim, question, mistake, "in this video you'll", stat, story tease, contrarian. Show each as a template + one filled example for [TOPIC].`,
  },
  {
    id: 'yt-end-screen',
    title: 'End Screen CTA That Keeps Viewers',
    category: 'youtube',
    description: 'A closing 20 seconds that drives the next watch + subscribe.',
    tags: ['cta', 'retention'],
    prompt: `Write the last 20 seconds of my video "[TITLE]".
Goal: get them to watch [NEXT VIDEO TOPIC] and subscribe.
Recap the value, tease the next video with a curiosity gap, and give a natural subscribe ask. Don't be cringe or beggy.`,
  },
  {
    id: 'yt-tutorial-structure',
    title: 'Structure a How-To / Tutorial Video',
    category: 'youtube',
    description: 'A clear, follow-along structure for tutorials.',
    tags: ['tutorial', 'structure'],
    prompt: `Structure a tutorial video: "How to [TASK]". Audience skill level: [LEVEL]. Length: [LENGTH].
Give: hook (the end result they'll get), what they need, numbered steps with what to say + show, common mistakes to warn about, and a recap. Keep it easy to follow.`,
  },
  {
    id: 'yt-review-video',
    title: 'Product Review Video Script',
    category: 'youtube',
    description: 'An honest, structured review that builds trust (and converts).',
    tags: ['review', 'affiliate'],
    prompt: `Write a review video script for [PRODUCT]. Audience: [AUDIENCE]. My honest take: [YOUR OPINION].
Include: a hook, who it's for, pros, cons, who should skip it, and a verdict. Keep it honest and balanced. Add a natural spot to mention an affiliate link [LINK].`,
  },
  {
    id: 'yt-shorts-script',
    title: 'YouTube Shorts Script (Under 45s)',
    category: 'youtube',
    description: 'A tight Shorts script engineered for loops and watch-time.',
    tags: ['shorts', 'script'],
    prompt: `Write a YouTube Shorts script (under 45s) on [TOPIC]. Niche: [NICHE]. Audience: [AUDIENCE].
Hook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, and end in a way that loops or prompts a follow. Under 90 spoken words.`,
  },
  {
    id: 'yt-30day-channel',
    title: '30-Day Plan to Start a Channel',
    category: 'youtube',
    description: 'A realistic month to launch a channel from zero.',
    tags: ['growth', 'beginner', 'plan'],
    prompt: `Build a 30-day plan to start a YouTube channel in the [NICHE] niche.
Starting point: [WHERE YOU ARE]. Time daily: [TIME]. Goal in 30 days: [GOAL].
Week-by-week: a focus, daily actions (research/film/edit/learn), and one metric to track. Realistic for one person.`,
  },
  {
    id: 'yt-repurpose-blog',
    title: 'Turn a Video into a Blog Post',
    category: 'youtube',
    description: 'Repurpose a video transcript into an SEO blog post.',
    tags: ['repurpose', 'seo', 'blog'],
    prompt: `Turn this video transcript into an SEO blog post:
"""
[PASTE TRANSCRIPT]
"""
Target keyword: [KEYWORD]. Give an SEO title, intro, H2/H3 sections, a key-takeaways box, and a CTA back to the video. Clean it up so it reads as writing, not speech.`,
  },
  {
    id: 'yt-niche-down',
    title: 'Help Me Niche Down My Channel',
    category: 'youtube',
    description: 'Narrow a broad channel into something that actually grows.',
    tags: ['strategy', 'niche'],
    prompt: `My channel covers [BROAD TOPIC] but isn't growing. About me: [ABOUT YOU]. What I enjoy: [WHAT YOU LIKE]. Audience: [AUDIENCE].
Give 3 specific niche angles I could own (with positioning), pros/cons of each, your recommendation, and 5 starter video ideas for it.`,
  },
  {
    id: 'yt-monetization',
    title: 'Monetization Plan for My Channel',
    category: 'youtube',
    description: 'Map realistic ways to earn from your channel beyond AdSense.',
    tags: ['money', 'strategy'],
    prompt: `My channel: [NICHE], [SUBSCRIBERS] subs, audience [AUDIENCE].
Suggest a realistic monetization roadmap: AdSense, sponsorships, affiliates, my own product/service, memberships. For each: when to start, rough potential, and a first step. Be honest about what fits my size.`,
  },
  {
    id: 'yt-comment-pin-reply',
    title: 'Reply to Negative / Tricky Comments',
    category: 'youtube',
    description: 'Calm, classy replies to criticism and trolls.',
    tags: ['community', 'replies'],
    prompt: `Here's a comment on my video: "[PASTE COMMENT]".
Context: [WHAT THE VIDEO WAS ABOUT].
Give me 3 reply options: one that addresses fair criticism gracefully, one that defuses a troll with humour, and one short classy non-engagement. Keep my reputation intact.`,
  },
  {
    id: 'yt-video-from-trend',
    title: 'Video Idea from a Trending Topic',
    category: 'youtube',
    description: 'Ride a trend with a video angle that fits your niche.',
    tags: ['trend', 'timely'],
    prompt: `Trending right now: [TREND/NEWS]. My niche: [NICHE]. Audience: [AUDIENCE].
Give 3 timely video angles connecting this trend to my niche tastefully. For each: a title, the hook, and a quick outline. Avoid anything tone-deaf.`,
  },
  {
    id: 'yt-evergreen-vs-trend',
    title: 'Balance Evergreen vs Trending Content',
    category: 'youtube',
    description: 'A content mix that grows long-term and rides spikes.',
    tags: ['strategy', 'planning'],
    prompt: `Help me plan a content mix for my [NICHE] channel.
Give me 5 evergreen video ideas (always relevant, SEO-friendly) and 5 trend/timely ideas, and explain the ideal ratio to post for steady growth + occasional spikes. Audience: [AUDIENCE].`,
  },
  {
    id: 'yt-playlist-strategy',
    title: 'Playlist Strategy for Binge-Watching',
    category: 'youtube',
    description: 'Organise videos into playlists that boost session time.',
    tags: ['playlists', 'strategy'],
    prompt: `My channel covers [TOPICS] in the [NICHE] niche, audience [AUDIENCE].
Suggest a playlist structure that keeps viewers binge-watching: playlist titles, what goes in each, the order, and an optimised description for the most important playlist. Tie it to my goal: [GOAL].`,
  },
  {
    id: 'yt-shorts-ideas-30',
    title: '30 YouTube Shorts Ideas',
    category: 'youtube',
    description: 'A month of Shorts concepts to grow your channel fast.',
    tags: ['shorts', 'ideas'],
    prompt: `Give 30 YouTube Shorts ideas for my [NICHE] channel, audience [AUDIENCE].
Mix: quick tips, myth-busting, "did you know", hooks that tease a long video, reactions, and trends. For each: a title + a one-line hook. Numbered. Bonus: mark 5 that could funnel viewers to long-form.`,
  },
]
