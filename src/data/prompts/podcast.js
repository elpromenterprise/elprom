// 🎙️ Podcast & Audio
export default [
  {
    id: 'pd-episode-outline',
    title: 'Podcast Episode Outline',
    category: 'podcast',
    description: 'A structured solo or topic episode that flows and keeps listeners.',
    tags: ['outline', 'episode'],
    prompt: `Outline a podcast episode on [TOPIC] for [AUDIENCE]. Length: [LENGTH].
Give: a hook intro, the main talking points (with sub-points + examples), a story or two to include, a key takeaway, and a CTA (subscribe/review/next episode). Conversational structure I can riff from.`,
  },
  {
    id: 'pd-guest-questions',
    title: 'Guest Interview Questions',
    category: 'podcast',
    description: 'Thoughtful questions that get great answers, not yes/no.',
    tags: ['interview', 'guest'],
    prompt: `My podcast guest is [GUEST + WHAT THEY DO]. My audience: [AUDIENCE]. Episode angle: [ANGLE].
Give 12 great interview questions: a warm opener, 8 deep/story-driven ones (avoid yes/no), 2 my audience would specifically want answered, and a strong closing question. Group them by flow.`,
  },
  {
    id: 'pd-titles',
    title: 'Podcast Episode Titles',
    category: 'podcast',
    description: 'Clickable titles that work on Spotify/Apple and YouTube.',
    tags: ['titles', 'discovery'],
    prompt: `Give 12 episode title options for an episode about [TOPIC] (guest: [GUEST IF ANY]).
Mix curiosity, benefit, and searchable keywords. Keep them clear and clickable across Spotify/Apple/YouTube. Mark the 3 strongest and a one-line why.`,
  },
  {
    id: 'pd-show-notes',
    title: 'Show Notes + Timestamps',
    category: 'podcast',
    description: 'SEO-friendly show notes from your episode summary.',
    tags: ['show notes', 'seo'],
    prompt: `Here's my episode summary/transcript:
"""
[PASTE SUMMARY OR TRANSCRIPT]
"""
Write show notes: a compelling 2-3 sentence description, 5 key takeaways/bullets, timestamp chapters, guest/links section [LINKS], and a subscribe CTA. Keyword-aware for [KEYWORD].`,
  },
  {
    id: 'pd-clips',
    title: 'Find Clip-Worthy Moments for Reels',
    category: 'podcast',
    description: 'Turn an episode into short clips for social.',
    tags: ['clips', 'repurpose'],
    prompt: `From this episode transcript/summary:
"""
[PASTE TRANSCRIPT OR SUMMARY]
"""
Identify 5 clip-worthy moments for Reels/Shorts. For each: the quote/moment, why it'll hook, a caption, and an on-screen title. Each should stand alone without the full episode.`,
  },
  {
    id: 'pd-intro-outro',
    title: 'Podcast Intro & Outro Script',
    category: 'podcast',
    description: 'A consistent intro/outro that sets the tone and drives action.',
    tags: ['intro', 'branding'],
    prompt: `Write a reusable podcast intro and outro.
Show name: [SHOW]. What it's about: [TOPIC]. Host: [NAME]. Audience: [AUDIENCE].
Intro: a hook + what the show delivers + a warm welcome (under 30s). Outro: a thank-you + a clear CTA (subscribe/review/share) + a tease to keep listening. On-brand and not cringe.`,
  },
  {
    id: 'pd-trailer',
    title: 'Podcast Trailer (Launch)',
    category: 'podcast',
    description: 'A 60-90s trailer to launch or relaunch a show.',
    tags: ['trailer', 'launch'],
    prompt: `Write a 60-90 second podcast trailer for [SHOW], about [TOPIC], for [AUDIENCE].
Hook fast, say who it's for and what they'll get, tease the vibe/guests, and end with "follow so you don't miss episode 1". Energetic, clear, makes people hit subscribe.`,
  },
  {
    id: 'pd-solo-topics',
    title: '20 Solo Episode Ideas',
    category: 'podcast',
    description: 'A backlog of solo episode topics so you never miss a week.',
    tags: ['ideas', 'planning'],
    prompt: `Give 20 solo podcast episode ideas for [SHOW] in the [NICHE] niche, audience [AUDIENCE].
Mix: how-to, story/lesson, hot take, Q&A, "biggest mistakes", behind-the-scenes, and trends. For each: a title + a one-line angle. Numbered.`,
  },
  {
    id: 'pd-guest-pitch',
    title: 'Pitch a Guest to Come On',
    category: 'podcast',
    description: 'An invite that gets busy people to say yes.',
    tags: ['outreach', 'guest'],
    prompt: `Write an invite to [POTENTIAL GUEST] to come on my podcast [SHOW] (audience: [AUDIENCE + SIZE]).
Make it specific (why them), show what's in it for them (reach/topic they care about), keep it short, make scheduling easy, and end with a clear next step. Warm and professional.`,
  },
  {
    id: 'pd-be-a-guest',
    title: 'Pitch Myself as a Podcast Guest',
    category: 'podcast',
    description: 'Get booked on other podcasts to grow your audience.',
    tags: ['outreach', 'visibility'],
    prompt: `I want to be a guest on [PODCAST] in the [NICHE] niche. About me: [ABOUT YOU]. What I can talk about: [TOPICS/EXPERTISE].
Write a pitch that shows I'm a great fit for their audience, suggests 2-3 specific episode angles, and makes it easy to say yes. Add a short "guest bio" they can use.`,
  },
  {
    id: 'pd-audiogram',
    title: 'Audiogram / Quote Card Copy',
    category: 'podcast',
    description: 'Pull punchy quotes for shareable audio snippets.',
    tags: ['promo', 'social'],
    prompt: `From this episode content:
"""
[PASTE QUOTE/SECTION]
"""
Pull 5 short, punchy quotes (under 20 words) that work as audiograms or quote cards to promote the episode. For each: a caption + a hook to pair with it. Make people want to listen.`,
  },
  {
    id: 'pd-promo-plan',
    title: 'Episode Promotion Plan',
    category: 'podcast',
    description: 'A multi-platform plan to promote each new episode.',
    tags: ['promo', 'planning'],
    prompt: `Give me a promo plan for a new episode "[EPISODE TITLE]" of [SHOW]. Audience: [AUDIENCE].
For each platform (Instagram, X, LinkedIn, YouTube, newsletter): exactly what to post (clip, quote, carousel, etc.) and the hook. A simple repeatable checklist I can reuse every episode.`,
  },
]
