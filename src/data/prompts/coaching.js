// 🎓 Coaching & Courses
export default [
  {
    id: 'co-course-outline',
    title: 'Online Course Outline',
    category: 'coaching',
    description: 'Structure a course from promise to modules to lessons.',
    tags: ['course', 'outline'],
    prompt: `Outline an online course on [TOPIC] for [AUDIENCE]. Transformation: [WHERE THEY START → WHERE THEY END].
Give: a course promise/title, [NUMBER] modules in a logical order, 3-5 lessons per module, and the one outcome each module delivers. Note where to add exercises/worksheets.`,
  },
  {
    id: 'co-lesson-script',
    title: 'Course Lesson Script',
    category: 'coaching',
    description: 'A clear, engaging script for a single lesson.',
    tags: ['lesson', 'script'],
    prompt: `Write a script for the lesson "[LESSON TITLE]" in my course on [TOPIC]. Audience: [AUDIENCE]. Lesson goal: [OUTCOME].
Structure: a hook (why this matters), the teaching (clear steps with examples), a quick action step, and a transition to the next lesson. Conversational, not lecture-y.`,
  },
  {
    id: 'co-mini-course-leadmagnet',
    title: 'Free Mini-Course / Lead Magnet',
    category: 'coaching',
    description: 'A free resource that grows your list and warms up buyers.',
    tags: ['lead magnet', 'funnel'],
    prompt: `Design a free lead magnet for [AUDIENCE] in the [NICHE] niche that leads toward my paid [OFFER].
Suggest the format (mini-course, checklist, template, challenge), a catchy title, the outline, and how it naturally sets up the paid offer. Should give a real quick win.`,
  },
  {
    id: 'co-webinar-outline',
    title: 'Webinar / Masterclass Outline',
    category: 'coaching',
    description: 'A value-first webinar that sells at the end.',
    tags: ['webinar', 'sales'],
    prompt: `Outline a free webinar on [TOPIC] for [AUDIENCE] that pitches my [OFFER] at the end.
Structure: hook + big promise, why-listen-to-me, 3 core teaching points (real value), the transition to the offer, the offer + bonuses, and Q&A. Give a 1-2 line note per section. Value-first, soft pitch.`,
  },
  {
    id: 'co-coaching-offer',
    title: 'Coaching Offer / Package',
    category: 'coaching',
    description: 'Package and price your coaching clearly.',
    tags: ['offer', 'pricing'],
    prompt: `Help me package my coaching for [AUDIENCE]. I help them [RESULT]. Format: [1:1 / group / etc.].
Suggest: a signature program name, what's included, the transformation/promise, 2-3 price tiers (INR), and the outcome-focused way to describe it. Make the value obvious.`,
  },
  {
    id: 'co-sales-call-script',
    title: 'Discovery / Sales Call Script',
    category: 'coaching',
    description: 'A consultative call flow that enrolls without pressure.',
    tags: ['sales call', 'enrollment'],
    prompt: `Write a discovery call script to enroll coaching clients. My offer: [OFFER]. Audience: [AUDIENCE].
Flow: rapport, understand their situation/goal, identify the gap, present my program as the bridge, handle price/doubt, and a clear next step. Consultative, not pushy. Include key questions to ask.`,
  },
  {
    id: 'co-testimonials',
    title: 'Turn Client Wins into Testimonials',
    category: 'coaching',
    description: 'Collect and frame results as compelling proof.',
    tags: ['testimonials', 'proof'],
    prompt: `Write a message asking a coaching client for a testimonial after their result: [RESULT].
Give 4 specific questions that pull out a story-driven testimonial (before, what changed, the result, who'd they recommend it to). Plus show how I'd edit their answers into a short, powerful testimonial.`,
  },
  {
    id: 'co-content-authority',
    title: 'Authority Content Plan for Coaches',
    category: 'coaching',
    description: 'Content that proves expertise and attracts clients.',
    tags: ['content', 'authority'],
    prompt: `Plan 2 weeks of authority-building content for my coaching in [NICHE], audience [AUDIENCE].
Mix: client results, myth-busting, quick wins, mindset, behind-the-method, and soft offers. For each: platform, format, and the hook. Goal: attract [OFFER] clients without being salesy.`,
  },
  {
    id: 'co-objection-doc',
    title: 'Handle Coaching Objections',
    category: 'coaching',
    description: 'Reframe "too expensive / no time / will it work for me".',
    tags: ['objections', 'sales'],
    prompt: `My coaching offer: [OFFER], price [PRICE], audience [AUDIENCE].
Give empathetic, honest reframes for: "it's too expensive", "I don't have time", "will this work for me?", "I can find this free online", and "let me think about it". Each: acknowledge → reframe → next step.`,
  },
  {
    id: 'co-worksheet',
    title: 'Workbook / Worksheet Creator',
    category: 'coaching',
    description: 'An exercise that helps students apply a lesson.',
    tags: ['worksheet', 'engagement'],
    prompt: `Create a worksheet for the lesson/topic "[LESSON/TOPIC]" in my program for [AUDIENCE]. Goal: [OUTCOME].
Give: a short intro, 4-6 reflection/action prompts that make them apply it, fill-in spaces/steps, and a closing "your next action" box. Practical, not busywork.`,
  },
  {
    id: 'co-challenge',
    title: '5-Day Challenge Plan',
    category: 'coaching',
    description: 'A free challenge that builds audience and leads to a sale.',
    tags: ['challenge', 'launch'],
    prompt: `Design a free 5-day challenge for [AUDIENCE] in the [NICHE] niche that leads to my [OFFER].
For each day: a theme, the lesson/action, the win they get, and the daily prompt to keep them engaged. Day 5 transitions to the offer naturally. Give a catchy challenge name + promise.`,
  },
  {
    id: 'co-onboarding',
    title: 'Client Onboarding Sequence',
    category: 'coaching',
    description: 'Welcome new clients so they get results (and stay).',
    tags: ['onboarding', 'retention'],
    prompt: `Write a client onboarding flow for my coaching [OFFER].
Give: a welcome message, what to expect/how it works, the first action to get a quick win, how to access materials [LINK], and how to reach me. Warm, organised, sets them up to succeed and refer me.`,
  },
  {
    id: 'co-course-sales-page',
    title: 'Course Sales Page Outline',
    category: 'coaching',
    description: 'A full sales page structure for an online course.',
    tags: ['sales page', 'course'],
    prompt: `Outline a sales page for my course [COURSE NAME] on [TOPIC], audience [AUDIENCE], price [PRICE].
Sections: headline (the transformation), the problem, who it's for, what's inside (modules), outcomes, bonuses, instructor credibility, testimonials, pricing, guarantee, FAQ, CTA. Draft 1-2 lines each.`,
  },
  {
    id: 'co-niche-coach-positioning',
    title: 'Position My Coaching Niche',
    category: 'coaching',
    description: 'Sharpen who you serve so marketing gets easier.',
    tags: ['positioning', 'strategy'],
    prompt: `I coach [BROAD AREA] but it's too generic. About me: [ABOUT YOU]. Who I love working with: [IDEAL CLIENT]. Results I get: [RESULTS].
Give 3 sharper niche positions ("I help [who] achieve [result] without [pain]"), pros/cons of each, a recommendation, and a tagline for the winner.`,
  },
  {
    id: 'co-faq-program',
    title: 'Program FAQ (Reduce Buying Doubts)',
    category: 'coaching',
    description: 'Answer what stops people enrolling.',
    tags: ['faq', 'conversion'],
    prompt: `Write an FAQ for my coaching program/course [OFFER], audience [AUDIENCE], price [PRICE].
Answer the real doubts: time needed, is it for beginners, what if it doesn't work, payment plans, access/duration, support, and results timeline. Honest, reassuring, removes friction.`,
  },
  {
    id: 'co-email-nurture-coach',
    title: 'Nurture Emails That Lead to Enrollment',
    category: 'coaching',
    description: 'A short email series that warms leads toward your offer.',
    tags: ['email', 'nurture'],
    prompt: `Write a 4-email nurture sequence for leads who downloaded my freebie, leading to my [OFFER]. Audience: [AUDIENCE].
Email themes: value/quick win → my story/method → overcome a key objection → invite to the offer. For each: subject + a short body outline. Trust-first, then invite.`,
  },
]
