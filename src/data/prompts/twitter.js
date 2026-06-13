// 𝕏 X / Twitter
export default [
  {
    id: 'tw-thread',
    title: 'Viral X Thread from Any Idea',
    category: 'twitter',
    description: 'Turn one idea into a scroll-stopping thread structured for reach.',
    tags: ['thread', 'viral'],
    prompt: `Write an X (Twitter) thread on [TOPIC] for the [NICHE] niche, audience [AUDIENCE].
- Tweet 1: a strong hook that promises value (no link)
- 6-9 tweets, one idea each, under 280 chars, line breaks, occasional emoji
- Last tweet: recap + CTA to follow/repost
Number each tweet.`,
  },
  {
    id: 'tw-from-blog',
    title: 'Blog / Notes → X Thread',
    category: 'twitter',
    description: 'Repurpose long content into a thread.',
    tags: ['repurpose', 'thread'],
    prompt: `Turn this into an engaging X thread:
"""
[PASTE BLOG / NOTES]
"""
Tweet 1 = a hook that promises value (no link). 6-9 tweets, one idea each, under 280 chars. Last tweet = recap + CTA. Number them.`,
  },
  {
    id: 'tw-hooks',
    title: '30 Viral Tweet Hooks',
    category: 'twitter',
    description: 'Opening lines that stop the scroll on the timeline.',
    tags: ['hooks', 'ideas'],
    prompt: `Give 30 viral tweet hook templates for the [NICHE] niche, audience [AUDIENCE].
Mix: bold opinion, list promise ("X things…"), contrarian take, story tease, question, stat.
Show each as a fill-in template + one example for [TOPIC]. Numbered.`,
  },
  {
    id: 'tw-one-liners',
    title: '20 Punchy Standalone Tweets',
    category: 'twitter',
    description: 'Quotable one-liners that earn likes and reposts.',
    tags: ['tweets', 'engagement'],
    prompt: `Write 20 punchy standalone tweets for the [NICHE] niche, audience [AUDIENCE].
Make them quotable and shareable: insights, hot takes, relatable truths, mini-lessons. Each under 240 chars, no hashtags. Vary the styles.`,
  },
  {
    id: 'tw-build-public',
    title: 'Build-in-Public Tweet Series',
    category: 'twitter',
    description: 'Document your journey to grow a following authentically.',
    tags: ['build in public', 'growth'],
    prompt: `I'm building [WHAT YOU'RE BUILDING]. Audience: [AUDIENCE].
Give me 10 build-in-public tweet ideas: progress updates, lessons, wins, fails, behind-the-scenes, asking for feedback. Make them specific and honest, not vague flexing. One example tweet for each.`,
  },
  {
    id: 'tw-reply-growth',
    title: 'Smart Replies to Grow on X',
    category: 'twitter',
    description: 'Reply strategy + templates to get seen by bigger accounts.',
    tags: ['replies', 'growth'],
    prompt: `I want to grow on X by replying smartly in the [NICHE] niche.
Give me: a reply strategy (who to reply to, when, how fast), and 10 reply templates that add value (not "great post!") so big accounts and their audience notice me. Audience: [AUDIENCE].`,
  },
  {
    id: 'tw-bio',
    title: 'X Bio That Gets Follows',
    category: 'twitter',
    description: 'A bio that tells visitors exactly why to follow.',
    tags: ['bio', 'profile'],
    prompt: `Write 4 X bio options. What I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. What I tweet about: [TOPICS]. Goal: [GOAL].
Each: clear value + a bit of personality, under 160 chars. Tell me which is strongest and why.`,
  },
  {
    id: 'tw-listicle-thread',
    title: 'Listicle Thread (Tools / Tips / Lessons)',
    category: 'twitter',
    description: 'The high-save "X things I learned" thread format.',
    tags: ['thread', 'list'],
    prompt: `Write a listicle thread: "[NUMBER] [things], e.g. tools/lessons/tips for X" in the [NICHE] niche.
Audience: [AUDIENCE]. Hook tweet that promises the list, then one tweet per item (name + why it matters + how to use), and a CTA to follow + repost the first tweet.`,
  },
  {
    id: 'tw-story-thread',
    title: 'Story Thread That Goes Viral',
    category: 'twitter',
    description: 'A narrative thread that keeps people reading to the end.',
    tags: ['story', 'thread'],
    prompt: `Help me write a story thread about [WHAT HAPPENED / YOUR STORY]. Niche: [NICHE]. Audience: [AUDIENCE].
Open with a gripping hook, build tension across tweets (one beat each), land a lesson, end with a takeaway + CTA. Keep each tweet tight.`,
  },
  {
    id: 'tw-content-calendar',
    title: '7-Day X Content Plan',
    category: 'twitter',
    description: 'A week of tweets + threads so you post consistently.',
    tags: ['calendar', 'planning'],
    prompt: `Plan 7 days of X content for the [NICHE] niche, audience [AUDIENCE], goal [GOAL].
Each day: a format (single tweet / thread / poll / reply-bait), a topic, and the actual hook. Mix value, story, opinion, and one soft promo for [PRODUCT/SERVICE].`,
  },
  {
    id: 'tw-poll',
    title: 'Engaging Poll Tweets',
    category: 'twitter',
    description: 'Polls that spark replies and boost your reach.',
    tags: ['poll', 'engagement'],
    prompt: `Give 8 poll tweet ideas for the [NICHE] niche, audience [AUDIENCE].
Each: the poll question + 2-4 options + a one-line tweet to pair with it that invites people to explain their vote in replies. Make them fun or mildly debatable.`,
  },
  {
    id: 'tw-repurpose-reel',
    title: 'X Thread → Instagram Carousel',
    category: 'twitter',
    description: 'Reuse a winning thread as a carousel and vice versa.',
    tags: ['repurpose', 'multi-platform'],
    prompt: `Here's a thread/idea that did well:
"""
[PASTE THREAD OR IDEA]
"""
Reformat it as a 7-slide Instagram carousel (cover hook + one point per slide + CTA slide) and as a LinkedIn post. Keep the core message, adapt the style to each platform.`,
  },
  {
    id: 'tw-hot-take',
    title: 'Hot Take That Sparks Debate (Safely)',
    category: 'twitter',
    description: 'Contrarian opinions that drive engagement without being toxic.',
    tags: ['opinion', 'engagement'],
    prompt: `Give me 8 contrarian-but-defensible hot takes for the [NICHE] niche, audience [AUDIENCE].
Each should challenge a common belief and spark discussion, with a one-line defense I can use in replies. Keep them smart and respectful, not rage-bait.`,
  },
  {
    id: 'tw-quote-tweet',
    title: 'Quote-Tweet Angles',
    category: 'twitter',
    description: 'Add value on top of a popular tweet to borrow its reach.',
    tags: ['quote tweet', 'growth'],
    prompt: `Here's a popular tweet I want to quote-tweet:
"""
[PASTE TWEET]
"""
My niche: [NICHE]. Give me 5 quote-tweet angles that add my unique value/take so my audience and theirs engage. Each under 240 chars.`,
  },
  {
    id: 'tw-pinned',
    title: 'Pinned Tweet That Converts',
    category: 'twitter',
    description: 'The one tweet new visitors see — make it sell your follow or offer.',
    tags: ['pinned', 'conversion'],
    prompt: `Write 3 options for my pinned tweet.
Goal: [GOAL, e.g. grow followers / drive to [LINK] / sell [PRODUCT]]. Who I am: [WHAT YOU DO]. Audience: [AUDIENCE].
Make each a strong standalone hook (or mini-thread starter) that makes a visitor want to follow or click.`,
  },
  {
    id: 'tw-newsletter-funnel',
    title: 'Thread That Funnels to My Newsletter',
    category: 'twitter',
    description: 'A value thread ending in a soft newsletter pitch.',
    tags: ['funnel', 'newsletter'],
    prompt: `Write a value-packed X thread on [TOPIC] (niche [NICHE], audience [AUDIENCE]) that naturally ends by inviting people to my newsletter [NEWSLETTER + WHAT THEY GET].
Deliver real value first; the pitch should feel earned, not baity. Number the tweets.`,
  },
  {
    id: 'tw-engagement-questions',
    title: 'Reply-Bait Questions (The Good Kind)',
    category: 'twitter',
    description: 'Questions that get your audience talking in replies.',
    tags: ['engagement', 'community'],
    prompt: `Give 12 engaging questions to tweet for the [NICHE] niche, audience [AUDIENCE].
They should be easy and fun to answer, reveal something useful about my audience, and get lots of replies. Avoid generic "what's your favourite?" filler.`,
  },
  {
    id: 'tw-30day-x',
    title: '30-Day X Growth Plan',
    category: 'twitter',
    description: 'A month to grow from a small account, with daily actions.',
    tags: ['growth', 'plan'],
    prompt: `Build a 30-day X growth plan for the [NICHE] niche.
Start: [WHERE YOU ARE]. Time daily: [TIME]. Goal: [GOAL].
Week-by-week: a focus, daily actions (tweets, threads, replies, engaging accounts), and one metric to track. Realistic for one person.`,
  },
]
