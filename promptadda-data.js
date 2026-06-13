/* PromptAdda — data layer (AUTO-GENERATED — do not edit by hand).
   Source: src/data/prompts/*.js   ·   Regenerate: npm run data
   1327 prompts across 16 categories. */
(function () {
  const CATEGORIES = [
  {
    "id": "all",
    "emoji": "✨",
    "name": "All"
  },
  {
    "id": "instagram",
    "emoji": "📸",
    "name": "Instagram"
  },
  {
    "id": "youtube",
    "emoji": "▶️",
    "name": "YouTube"
  },
  {
    "id": "reels",
    "emoji": "🎬",
    "name": "Reels & Shorts"
  },
  {
    "id": "twitter",
    "emoji": "𝕏",
    "name": "X / Twitter"
  },
  {
    "id": "linkedin",
    "emoji": "💼",
    "name": "LinkedIn"
  },
  {
    "id": "personal",
    "emoji": "🌟",
    "name": "Personal Brand"
  },
  {
    "id": "blog",
    "emoji": "✍️",
    "name": "Blog & SEO"
  },
  {
    "id": "selling",
    "emoji": "🛍️",
    "name": "Selling & Business"
  },
  {
    "id": "ads",
    "emoji": "📣",
    "name": "Ads & Copy"
  },
  {
    "id": "deals",
    "emoji": "🤝",
    "name": "Brand Deals & Money"
  },
  {
    "id": "email",
    "emoji": "💬",
    "name": "Email & WhatsApp"
  },
  {
    "id": "local",
    "emoji": "📍",
    "name": "Local Business"
  },
  {
    "id": "coaching",
    "emoji": "🎓",
    "name": "Coaching & Courses"
  },
  {
    "id": "podcast",
    "emoji": "🎙️",
    "name": "Podcast & Audio"
  },
  {
    "id": "design",
    "emoji": "🎨",
    "name": "Design & Visuals"
  },
  {
    "id": "plan",
    "emoji": "🗓️",
    "name": "Plan & Productivity"
  }
];

  const HINTS = {
  "PRODUCT": {
    "hint": "e.g. handmade soy candles"
  },
  "AUDIENCE": {
    "hint": "e.g. busy working moms in India"
  },
  "NICHE": {
    "hint": "e.g. fitness, fashion, food"
  },
  "TONE": {
    "hint": "e.g. friendly, bold, premium"
  },
  "TOPIC": {
    "hint": "e.g. morning routine for focus"
  },
  "GOAL": {
    "hint": "e.g. drive DMs / saves / sales"
  },
  "BRAND": {
    "hint": "e.g. Mamaearth"
  },
  "OFFER": {
    "hint": "e.g. 30% off + free shipping"
  },
  "FESTIVAL": {
    "hint": "e.g. Diwali, Holi, Eid"
  },
  "BUSINESS": {
    "hint": "e.g. home bakery"
  },
  "FOLLOWERS": {
    "hint": "e.g. 12K"
  },
  "DELIVERABLES": {
    "hint": "e.g. 2 Reels + 3 stories"
  },
  "KEYWORD": {
    "hint": "e.g. best budget phone 2025"
  },
  "CITY": {
    "hint": "e.g. Jaipur"
  },
  "SERVICE": {
    "hint": "e.g. salon, tuition, catering"
  },
  "COURSE": {
    "hint": "e.g. Excel for beginners"
  },
  "PRICE": {
    "hint": "e.g. ₹4,999"
  },
  "NAME": {
    "hint": "e.g. Aanya"
  },
  "PLATFORM": {
    "hint": "e.g. Instagram"
  },
  "DURATION": {
    "hint": "e.g. 30 days"
  },
  "BENEFIT": {
    "hint": "e.g. saves 2 hours a day"
  },
  "PROBLEM": {
    "hint": "e.g. captions take forever"
  },
  "NUMBER": {
    "hint": "e.g. 5"
  },
  "PASTE TRANSCRIPT": {
    "hint": "Paste your full episode transcript here…",
    "long": true
  },
  "TRANSCRIPT": {
    "hint": "Paste your transcript here…",
    "long": true
  },
  "DETAILS": {
    "hint": "Add any extra details you want included…",
    "long": true
  },
  "NOTES": {
    "hint": "Drop your rough notes here…",
    "long": true
  },
  "SCRIPT": {
    "hint": "Paste your script or draft…",
    "long": true
  },
  "PRODUCT SERVICE": {
    "hint": "Type the product service…"
  },
  "PRODUCT SERVICE OFFER": {
    "hint": "Type the product service offer…"
  },
  "PROMISE": {
    "hint": "Type the promise…"
  },
  "INCENTIVE": {
    "hint": "Type the incentive…"
  },
  "BROAD AUDIENCE": {
    "hint": "Type the broad audience…"
  },
  "LOCATION": {
    "hint": "Type the location…"
  },
  "BUDGET": {
    "hint": "Type the budget…"
  },
  "PASTE AD": {
    "hint": "Paste your paste ad here…",
    "long": true
  },
  "CITY REGION": {
    "hint": "Type the city region…"
  },
  "WORD COUNT": {
    "hint": "Type the word count…"
  },
  "TITLE": {
    "hint": "Type the title…"
  },
  "SUBHEADING": {
    "hint": "Type the subheading…"
  },
  "YEAR": {
    "hint": "Type the year…"
  },
  "BROAD TOPIC": {
    "hint": "Type the broad topic…"
  },
  "THING": {
    "hint": "Type the thing…"
  },
  "TASK": {
    "hint": "e.g. publishing a YouTube video / packing an order"
  },
  "LEVEL": {
    "hint": "Type the level…"
  },
  "PASTE DRAFT OR SECTION": {
    "hint": "Paste your paste draft or section here…",
    "long": true
  },
  "PRODUCTS CATEGORY": {
    "hint": "Type the products category…"
  },
  "CTA": {
    "hint": "e.g. subscribe / try the tool / read next"
  },
  "PASTE POST OR KEY POINTS": {
    "hint": "Paste your paste post or key points here…",
    "long": true
  },
  "X": {
    "hint": "Type the x…"
  },
  "Y": {
    "hint": "Type the y…"
  },
  "PASTE SECTION": {
    "hint": "Paste your paste section here…",
    "long": true
  },
  "LIST YOUR OTHER TOPICS URLS": {
    "hint": "Type the list your other topics urls…"
  },
  "SITE BLOG": {
    "hint": "Type the site blog…"
  },
  "YOUR ANGLE VALUE": {
    "hint": "Type the your angle value…"
  },
  "YOUR SITE": {
    "hint": "Type the your site…"
  },
  "PASTE POST OR SUMMARY": {
    "hint": "Paste your paste post or summary here…",
    "long": true
  },
  "LINK": {
    "hint": "Type the link…"
  },
  "HEADLINE": {
    "hint": "Type the headline…"
  },
  "ABOUT YOU": {
    "hint": "Type the about you…"
  },
  "WHAT YOU DO": {
    "hint": "Type the what you do…"
  },
  "DIFFERENTIATOR": {
    "hint": "Type the differentiator…"
  },
  "WHO": {
    "hint": "Type the who…"
  },
  "DO WHAT": {
    "hint": "Type the do what…"
  },
  "OUTCOME": {
    "hint": "Type the outcome…"
  },
  "BACKSTORY": {
    "hint": "Paste your backstory here…",
    "long": true
  },
  "FIRST THIRD": {
    "hint": "Type the first third…"
  },
  "YOUR IDEA": {
    "hint": "Type the your idea…"
  },
  "LIST LINKS": {
    "hint": "Type the list links…"
  },
  "WHAT YOU LIKE": {
    "hint": "Type the what you like…"
  },
  "WHERE YOU ARE": {
    "hint": "Type the where you are…"
  },
  "TIME": {
    "hint": "Type the time…"
  },
  "ABOUT YOU KEY EXPERIENCES": {
    "hint": "Type the about you key experiences…"
  },
  "PASTE SAMPLES": {
    "hint": "Paste your paste samples here…",
    "long": true
  },
  "VALUES MISSION": {
    "hint": "Type the values mission…"
  },
  "WIN CREDIBILITY": {
    "hint": "Type the win credibility…"
  },
  "DESCRIBE YOUR WORK ROUTINE": {
    "hint": "Type the describe your work routine…"
  },
  "WHAT YOU BELIEVE THAT OTHERS DON T": {
    "hint": "Type the what you believe that others don t…"
  },
  "BIO": {
    "hint": "Type the bio…"
  },
  "CONTENT TYPES": {
    "hint": "Type the content types…"
  },
  "WHAT AUDIENCE": {
    "hint": "Type the what audience…"
  },
  "VALUE": {
    "hint": "Type the value…"
  },
  "PERSONAL": {
    "hint": "Type the personal…"
  },
  "LIST 3 4": {
    "hint": "Type the list 3 4…"
  },
  "KEYWORDS": {
    "hint": "Type the keywords…"
  },
  "TYPE OF BUSINESS": {
    "hint": "Type the type of business…"
  },
  "VALUE RESULT": {
    "hint": "Type the value result…"
  },
  "BEFORE AFTER": {
    "hint": "Type the before after…"
  },
  "WHAT YOU SELL": {
    "hint": "Type the what you sell…"
  },
  "WHAT THEY GET": {
    "hint": "Type the what they get…"
  },
  "LIST PRODUCTS PRICES": {
    "hint": "Type the list products prices…"
  },
  "COST": {
    "hint": "Type the cost…"
  },
  "COMPETITOR PRICES": {
    "hint": "Type the competitor prices…"
  },
  "CHANNELS": {
    "hint": "Type the channels…"
  },
  "TYPE OF BUSINESS PRODUCT": {
    "hint": "Type the type of business product…"
  },
  "WHAT": {
    "hint": "e.g. promo poster / quote post"
  },
  "VIBE": {
    "hint": "e.g. premium / fun / desi"
  },
  "LIST": {
    "hint": "e.g. shop, WhatsApp order, reviews, catalogue"
  },
  "RELATED ITEMS": {
    "hint": "Type the related items…"
  },
  "PASTE COMPLAINT": {
    "hint": "Paste your paste complaint here…",
    "long": true
  },
  "WHAT IT IS": {
    "hint": "Type the what it is…"
  },
  "WHAT YOU CAN OFFER": {
    "hint": "Type the what you can offer…"
  },
  "COLLECTION CATALOGUE NAME": {
    "hint": "Type the collection catalogue name…"
  },
  "WHERE THEY START WHERE THEY END": {
    "hint": "Type the where they start where they end…"
  },
  "LESSON TITLE": {
    "hint": "Type the lesson title…"
  },
  "RESULT": {
    "hint": "Type the result…"
  },
  "1 1 GROUP ETC": {
    "hint": "Type the 1 1 group etc…"
  },
  "LESSON TOPIC": {
    "hint": "Type the lesson topic…"
  },
  "COURSE NAME": {
    "hint": "Type the course name…"
  },
  "BROAD AREA": {
    "hint": "Type the broad area…"
  },
  "IDEAL CLIENT": {
    "hint": "Type the ideal client…"
  },
  "RESULTS": {
    "hint": "Type the results…"
  },
  "PAIN": {
    "hint": "Type the pain…"
  },
  "WHAT YOU WANT": {
    "hint": "Type the what you want…"
  },
  "USE": {
    "hint": "e.g. thumbnail/poster/post"
  },
  "STYLE": {
    "hint": "Type the style…"
  },
  "MOOD": {
    "hint": "Type the mood…"
  },
  "COLOURS": {
    "hint": "Type the colours…"
  },
  "BRAND WHAT YOU DO": {
    "hint": "Type the brand what you do…"
  },
  "3 ADJECTIVES": {
    "hint": "Type the 3 adjectives…"
  },
  "TOPIC DATA": {
    "hint": "Type the topic data…"
  },
  "DESCRIBE THE IMAGES": {
    "hint": "Type the describe the images…"
  },
  "WHAT HOW OFTEN": {
    "hint": "Type the what how often…"
  },
  "FREEBIE TIP": {
    "hint": "Type the freebie tip…"
  },
  "PRODUCT COURSE": {
    "hint": "Type the product course…"
  },
  "TYPE OF PERSON COMPANY": {
    "hint": "Type the type of person company…"
  },
  "WHAT YOU OFFER": {
    "hint": "Type the what you offer…"
  },
  "NICHE WHAT YOU SEND": {
    "hint": "Type the niche what you send…"
  },
  "DEADLINE": {
    "hint": "Type the deadline…"
  },
  "PRODUCT OFFER": {
    "hint": "Type the product offer…"
  },
  "CATALOGUE LINK": {
    "hint": "Type the catalogue link…"
  },
  "TRACKING": {
    "hint": "Type the tracking…"
  },
  "FORM LINK": {
    "hint": "Type the form link…"
  },
  "EVENT": {
    "hint": "e.g. free workshop"
  },
  "DATE": {
    "hint": "Type the date…"
  },
  "PASTE DRAFT": {
    "hint": "Paste your paste draft here…",
    "long": true
  },
  "FESTIVAL SEASON": {
    "hint": "e.g. Diwali"
  },
  "LANGUAGE": {
    "hint": "e.g. Hinglish"
  },
  "HANDLE": {
    "hint": "Type the handle…"
  },
  "LINK GOAL": {
    "hint": "Type the link goal…"
  },
  "PASTE 3 5 QUESTIONS": {
    "hint": "Paste your paste 3 5 questions here…",
    "long": true
  },
  "IDEA": {
    "hint": "Type the idea…"
  },
  "PRIZE": {
    "hint": "Type the prize…"
  },
  "STORY": {
    "hint": "Paste your story here…",
    "long": true
  },
  "DESCRIBE IT": {
    "hint": "Type the describe it…"
  },
  "PARTNER": {
    "hint": "Type the partner…"
  },
  "WHAT THE COLLAB IS": {
    "hint": "Type the what the collab is…"
  },
  "PASTE REVIEW": {
    "hint": "Paste your paste review here…",
    "long": true
  },
  "CITY PLACE": {
    "hint": "Type the city place…"
  },
  "TRANSFORMATION": {
    "hint": "e.g. a client result / my own journey"
  },
  "YOUR HOOK": {
    "hint": "Type the your hook…"
  },
  "PASTE STATS TOP POSTS": {
    "hint": "e.g. reach, follows, what flopped",
    "long": true
  },
  "PLACE": {
    "hint": "Type the place…"
  },
  "TOPIC STORY": {
    "hint": "Paste your topic story here…",
    "long": true
  },
  "YOUR ROLE": {
    "hint": "Type the your role…"
  },
  "NICHE INDUSTRY": {
    "hint": "Type the niche industry…"
  },
  "WORK AUDIENCE": {
    "hint": "Type the work audience…"
  },
  "ACHIEVEMENTS": {
    "hint": "Type the achievements…"
  },
  "CONTACT": {
    "hint": "Type the contact…"
  },
  "TREND ISSUE IN MY INDUSTRY": {
    "hint": "Type the trend issue in my industry…"
  },
  "ROLE": {
    "hint": "Type the role…"
  },
  "WHAT HAPPENED": {
    "hint": "Type the what happened…"
  },
  "LESSON": {
    "hint": "Type the lesson…"
  },
  "INDUSTRY": {
    "hint": "Type the industry…"
  },
  "TYPE OF PERSON": {
    "hint": "e.g. founders / recruiters"
  },
  "REASON": {
    "hint": "Type the reason…"
  },
  "SHARED CONTEXT": {
    "hint": "Type the shared context…"
  },
  "WHO THEY ARE": {
    "hint": "Type the who they are…"
  },
  "SERVICE VALUE": {
    "hint": "Type the service value…"
  },
  "ROLE SKILLS": {
    "hint": "Type the role skills…"
  },
  "TARGET ROLE INDUSTRY": {
    "hint": "Type the target role industry…"
  },
  "LOCATION REMOTE": {
    "hint": "Type the location remote…"
  },
  "ACHIEVEMENT": {
    "hint": "Type the achievement…"
  },
  "WHAT YOU DID THE OUTCOME": {
    "hint": "Type the what you did the outcome…"
  },
  "CITY AREA": {
    "hint": "Type the city area…"
  },
  "BUSINESS TYPE": {
    "hint": "e.g. salon/clinic/repair"
  },
  "WHAT MAKES YOU BETTER": {
    "hint": "Type the what makes you better…"
  },
  "LIST ITEMS PRICES": {
    "hint": "Type the list items prices…"
  },
  "AREA CITY": {
    "hint": "Type the area city…"
  },
  "AREA": {
    "hint": "Type the area…"
  },
  "PHONE WHATSAPP": {
    "hint": "Type the phone whatsapp…"
  },
  "PHONE LINK": {
    "hint": "Type the phone link…"
  },
  "DATE TIME": {
    "hint": "Type the date time…"
  },
  "MY BUSINESS": {
    "hint": "Type the my business…"
  },
  "TYPE OF NEARBY BUSINESS": {
    "hint": "Type the type of nearby business…"
  },
  "RADIUS AREA": {
    "hint": "Type the radius area…"
  },
  "SIZE WHO": {
    "hint": "Type the size who…"
  },
  "ENGAGEMENT VIEWS": {
    "hint": "Type the engagement views…"
  },
  "DELIVERABLE": {
    "hint": "Type the deliverable…"
  },
  "PLATFORMS": {
    "hint": "Type the platforms…"
  },
  "STATS": {
    "hint": "Paste your stats here…",
    "long": true
  },
  "THEIR OFFER": {
    "hint": "Type the their offer…"
  },
  "STATS WHY WORTH MORE": {
    "hint": "Paste your stats why worth more here…",
    "long": true
  },
  "THEIR NICHE WHY THEY FIT": {
    "hint": "Type the their niche why they fit…"
  },
  "MY NICHE SIZE": {
    "hint": "Type the my niche size…"
  },
  "COLLAB IDEA": {
    "hint": "Type the collab idea…"
  },
  "DATA": {
    "hint": "Type the data…"
  },
  "IF ANY": {
    "hint": "Type the if any…"
  },
  "BRAND PRODUCT": {
    "hint": "Type the brand product…"
  },
  "TALKING POINTS": {
    "hint": "Type the talking points…"
  },
  "WHAT THE VIDEO POST IS ABOUT": {
    "hint": "Type the what the video post is about…"
  },
  "CTA CODE": {
    "hint": "Type the cta code…"
  },
  "AMOUNT": {
    "hint": "Type the amount…"
  },
  "DUE DATE": {
    "hint": "Type the due date…"
  },
  "LOOSE BRIEF": {
    "hint": "Type the loose brief…"
  },
  "WHAT YOU MAKE": {
    "hint": "Type the what you make…"
  },
  "RESULTS IF ANY": {
    "hint": "Type the results if any…"
  },
  "PROGRAM FUND": {
    "hint": "Type the program fund…"
  },
  "NUMBERS": {
    "hint": "Type the numbers…"
  },
  "MISSION": {
    "hint": "Type the mission…"
  },
  "CLIENT": {
    "hint": "Type the client…"
  },
  "OLD RATE": {
    "hint": "Type the old rate…"
  },
  "NEW RATE": {
    "hint": "Type the new rate…"
  },
  "WHAT THEY RE OFFERING": {
    "hint": "Type the what they re offering…"
  },
  "FOLLOWERS STATS": {
    "hint": "Paste your followers stats here…",
    "long": true
  },
  "LENGTH": {
    "hint": "Type the length…"
  },
  "GUEST WHAT THEY DO": {
    "hint": "Type the guest what they do…"
  },
  "ANGLE": {
    "hint": "Type the angle…"
  },
  "GUEST IF ANY": {
    "hint": "Type the guest if any…"
  },
  "PASTE SUMMARY OR TRANSCRIPT": {
    "hint": "Paste your paste summary or transcript here…",
    "long": true
  },
  "LINKS": {
    "hint": "Type the links…"
  },
  "PASTE TRANSCRIPT OR SUMMARY": {
    "hint": "Paste your paste transcript or summary here…",
    "long": true
  },
  "SHOW": {
    "hint": "Type the show…"
  },
  "POTENTIAL GUEST": {
    "hint": "Type the potential guest…"
  },
  "AUDIENCE SIZE": {
    "hint": "Type the audience size…"
  },
  "PODCAST": {
    "hint": "Type the podcast…"
  },
  "TOPICS EXPERTISE": {
    "hint": "Type the topics expertise…"
  },
  "PASTE QUOTE SECTION": {
    "hint": "Paste your paste quote section here…",
    "long": true
  },
  "EPISODE TITLE": {
    "hint": "Type the episode title…"
  },
  "PILLAR CONTENT": {
    "hint": "e.g. YouTube video/blog"
  },
  "HOURS WEEK": {
    "hint": "Type the hours week…"
  },
  "GOALS": {
    "hint": "Type the goals…"
  },
  "JOB STUDY ETC": {
    "hint": "Type the job study etc…"
  },
  "VISION": {
    "hint": "Type the vision…"
  },
  "CURRENT STATE": {
    "hint": "Type the current state…"
  },
  "FOCUS AREA": {
    "hint": "Type the focus area…"
  },
  "LIST YOUR TASKS": {
    "hint": "Type the list your tasks…"
  },
  "YOUR BLOCKER": {
    "hint": "e.g. perfectionism/overthinking"
  },
  "WHAT YOU RE DOING": {
    "hint": "Type the what you re doing…"
  },
  "WHAT S HARD": {
    "hint": "Type the what s hard…"
  },
  "DESCRIBE TREND AUDIO FORMAT": {
    "hint": "Type the describe trend audio format…"
  },
  "THINGS": {
    "hint": "Type the things…"
  },
  "WHAT HAPPENED YOUR STORY": {
    "hint": "Paste your what happened your story here…",
    "long": true
  },
  "WHAT IT SHOWS": {
    "hint": "Type the what it shows…"
  },
  "TRENDING TOPIC NEWS": {
    "hint": "Type the trending topic news…"
  },
  "WHAT YOU RE REACTING TO": {
    "hint": "e.g. a tweet/news/comment"
  },
  "PASTE BLOG NOTES": {
    "hint": "Paste your paste blog notes here…",
    "long": true
  },
  "WHAT YOU RE BUILDING": {
    "hint": "Type the what you re building…"
  },
  "TOPICS": {
    "hint": "Type the topics…"
  },
  "PASTE THREAD OR IDEA": {
    "hint": "Paste your paste thread or idea here…",
    "long": true
  },
  "PASTE TWEET": {
    "hint": "Paste your paste tweet here…",
    "long": true
  },
  "NEWSLETTER WHAT THEY GET": {
    "hint": "Type the newsletter what they get…"
  },
  "WHAT THE VIDEO DELIVERS": {
    "hint": "Type the what the video delivers…"
  },
  "LINK 1": {
    "hint": "Type the link 1…"
  },
  "LINK 2": {
    "hint": "Type the link 2…"
  },
  "PASTE INTRO": {
    "hint": "Paste your paste intro here…",
    "long": true
  },
  "CREATOR": {
    "hint": "Type the creator…"
  },
  "WHAT IT S ABOUT": {
    "hint": "Type the what it s about…"
  },
  "SCHEDULE": {
    "hint": "Type the schedule…"
  },
  "PASTE SCRIPT OR SUMMARY": {
    "hint": "Paste your paste script or summary here…",
    "long": true
  },
  "NEXT VIDEO TOPIC": {
    "hint": "Type the next video topic…"
  },
  "YOUR OPINION": {
    "hint": "Type the your opinion…"
  },
  "SUBSCRIBERS": {
    "hint": "Type the subscribers…"
  },
  "PASTE COMMENT": {
    "hint": "Paste your paste comment here…",
    "long": true
  },
  "WHAT THE VIDEO WAS ABOUT": {
    "hint": "Type the what the video was about…"
  },
  "TREND NEWS": {
    "hint": "Type the trend news…"
  }
};

  const PROMPTS = [
  {
    "id": "ig-caption-sell",
    "cat": "instagram",
    "title": "Instagram Caption That Actually Sells",
    "desc": "Turns a plain product photo into a caption that drives DMs and sales — not just likes.",
    "prompt": "You are a top Indian Instagram copywriter. Write 3 caption options for a post selling [PRODUCT].\nAudience: [AUDIENCE]\nTone: [TONE]\nPrice: [PRICE]\n\nEach caption must:\n- Open with a scroll-stopping hook (a question or bold statement)\n- Use simple, emotional language (no corporate words)\n- Have 3 short benefit lines with emojis\n- End with a clear CTA: \"DM '[KEYWORD]' to order\"\n- Include 5 relevant hashtags (mix of big + niche Indian tags)\n- Stay under 150 words\nGive me 3 styles: emotional, funny, urgency-based.",
    "tags": [
      "caption",
      "sales",
      "product"
    ]
  },
  {
    "id": "ig-hook-30",
    "cat": "instagram",
    "title": "30 Scroll-Stopping Hooks for Any Niche",
    "desc": "A month of opening lines so you never stare at a blank caption again.",
    "prompt": "Act as a viral Instagram strategist. My niche is [NICHE] and my audience is [AUDIENCE].\nGive me 30 scroll-stopping hooks (first lines) for Reels or posts.\nMix: shocking stat, bold opinion, relatable pain, \"nobody tells you\", before/after, curiosity gap.\nRules: max 12 words each, written in [LANGUAGE], numbered 1-30, no \"Hey guys\".",
    "tags": [
      "hooks",
      "ideas",
      "engagement"
    ]
  },
  {
    "id": "ig-carousel",
    "cat": "instagram",
    "title": "Carousel Post That Gets Saved",
    "desc": "Saves & shares beat likes in the algorithm. Builds a 7-slide value carousel.",
    "prompt": "Create a 7-slide Instagram carousel for my niche [NICHE]. Topic: [TOPIC]. Audience: [AUDIENCE].\n- Slide 1: a bold cover hook + subtext (make people swipe)\n- Slides 2-6: one clear tip each, max 25 words\n- Slide 7: recap + CTA (\"Save this\" + \"Follow @[HANDLE]\")\nAdd a one-line caption with 5 hashtags. Keep language simple and punchy.",
    "tags": [
      "carousel",
      "value",
      "saves"
    ]
  },
  {
    "id": "ig-hashtags",
    "cat": "instagram",
    "title": "Smart Hashtag Set (Not the Same 30)",
    "desc": "A balanced reach/niche/local hashtag mix instead of copy-pasting #love #instagood.",
    "prompt": "Give me 3 hashtag sets (15 tags each) for a post about [TOPIC] in the [NICHE] niche, Indian audience.\nEach set: 3 large (1M+), 7 medium (100k-1M), 5 small/local (under 100k, e.g. #MumbaiFoodie).\nLabel them Set A (Reach), Set B (Niche), Set C (Local). No banned/spammy tags.",
    "tags": [
      "hashtags",
      "reach"
    ]
  },
  {
    "id": "ig-bio",
    "cat": "instagram",
    "title": "Instagram Bio That Converts Visitors to Followers",
    "desc": "Rewrites your bio so a stranger follows in 3 seconds.",
    "prompt": "Rewrite my Instagram bio so a first-time visitor follows instantly.\nWhat I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. What's different: [DIFFERENTIATOR]. Link goal: [LINK GOAL].\nGive 4 options (max 4 lines each): a clear value line, personality, soft CTA to my link. 1-2 emojis max.",
    "tags": [
      "bio",
      "profile"
    ]
  },
  {
    "id": "ig-story-poll",
    "cat": "instagram",
    "title": "Story Sequence That Boosts Engagement",
    "desc": "A 5-story flow using polls & questions to wake up a dead audience.",
    "prompt": "Plan a 5-story Instagram sequence to re-engage my [NICHE] followers. Goal: [GOAL].\nFor each story: the on-screen text, an interactive sticker idea (poll/quiz/question/slider) with options, and a one-line why it works. Keep it casual.",
    "tags": [
      "stories",
      "engagement"
    ]
  },
  {
    "id": "ig-content-week",
    "cat": "instagram",
    "title": "Full 7-Day Instagram Content Plan",
    "desc": "A done-for-you week of posts across formats so you can batch-create.",
    "prompt": "Build a 7-day Instagram plan for my [NICHE] account, audience [AUDIENCE]. Goal this week: [GOAL].\nFor each day: format (Reel/carousel/story/static), the hook/title, a one-line brief, the CTA.\nBalance value, relatability, and 1-2 promo posts for [PRODUCT SERVICE]. Clean day-by-day list.",
    "tags": [
      "calendar",
      "planning",
      "batch"
    ]
  },
  {
    "id": "ig-comment-replies",
    "cat": "instagram",
    "title": "Engaging Replies to Boost Your Posts",
    "desc": "Reply templates that keep conversations going and lift reach.",
    "prompt": "Give 10 reply templates for comments on my [NICHE] posts.\nCover: a compliment, a question, a hater, a \"where to buy\", emoji-only, a fellow creator.\nEach: human + warm, encourages more conversation, sometimes a soft CTA. Short and copy-ready.",
    "tags": [
      "engagement",
      "replies",
      "community"
    ]
  },
  {
    "id": "ig-seo-keywords",
    "cat": "instagram",
    "title": "SEO Keywords for Profile & Captions",
    "desc": "Instagram now ranks on keywords — this finds yours.",
    "prompt": "Find search keywords my audience uses to discover content like mine.\nNiche: [NICHE]. Audience: [AUDIENCE]. Platform: Instagram.\nGive 10 phrases people search, where to place them (bio, caption first line, alt text), and 3 example caption first-lines using a keyword naturally.",
    "tags": [
      "seo",
      "keywords",
      "discovery"
    ]
  },
  {
    "id": "ig-from-questions",
    "cat": "instagram",
    "title": "Turn Audience Questions into Posts",
    "desc": "Mine your DMs/comments for an endless content supply.",
    "prompt": "Here are questions my audience keeps asking:\n\"\"\"\n[PASTE 3 5 QUESTIONS]\n\"\"\"\nNiche: [NICHE]. For each: a content title/hook answering it, the best format (Reel/carousel/story), and a 2-line brief.",
    "tags": [
      "ideas",
      "community"
    ]
  },
  {
    "id": "ig-reel-vs-carousel",
    "cat": "instagram",
    "title": "Should This Be a Reel or Carousel?",
    "desc": "Decide the best format for any idea and get a tailored outline.",
    "prompt": "My content idea: [IDEA]. Niche: [NICHE]. Audience: [AUDIENCE].\nTell me whether this works better as a Reel, carousel, or static post, and why.\nThen give me a quick outline for the format you recommend.",
    "tags": [
      "strategy",
      "format"
    ]
  },
  {
    "id": "ig-niche-pillars",
    "cat": "instagram",
    "title": "Find My 4 Instagram Content Pillars",
    "desc": "Stops random posting — defines what you talk about.",
    "prompt": "Help me define 4 content pillars for my Instagram.\nAbout me: [ABOUT YOU]. Known for: [GOAL]. Audience: [AUDIENCE].\nGive 4 specific pillars, 5 content ideas each, and a one-line brand promise tying them together.",
    "tags": [
      "strategy",
      "pillars"
    ]
  },
  {
    "id": "ig-giveaway",
    "cat": "instagram",
    "title": "Giveaway Post That Grows Followers",
    "desc": "A giveaway caption + rules designed to maximise follows and tags.",
    "prompt": "Write a giveaway post for my [NICHE] account. Prize: [PRIZE]. Goal: [GOAL].\nInclude: an exciting caption, 4 simple entry rules (follow, like, tag 2 friends, share to story), the deadline [DEADLINE], and a hashtag. Keep it legal and clear.",
    "tags": [
      "giveaway",
      "growth"
    ]
  },
  {
    "id": "ig-reintroduce",
    "cat": "instagram",
    "title": "Re-Introduction Post (Welcome New Followers)",
    "desc": "A warm \"who I am\" post to convert new followers into fans.",
    "prompt": "Write an Instagram \"re-introduction\" post.\nName: [NAME]. What I do: [WHAT YOU DO]. Why I started: [STORY]. What followers get: [VALUE].\nMake it warm and personal, with a question at the end to spark comments. Add 5 hashtags.",
    "tags": [
      "intro",
      "community"
    ]
  },
  {
    "id": "ig-trend-audio",
    "cat": "instagram",
    "title": "Use a Trending Audio for My Niche",
    "desc": "Adapt a trending sound into content that fits your brand.",
    "prompt": "A trending audio/format is going viral: [DESCRIBE IT]. My niche: [NICHE]. Audience: [AUDIENCE].\nGive 3 ways to use it that feel natural, not forced. For each: the concept, on-screen text, and caption. Easy to shoot on a phone.",
    "tags": [
      "trend",
      "reels"
    ]
  },
  {
    "id": "ig-product-launch",
    "cat": "instagram",
    "title": "Product Launch Teaser Series",
    "desc": "A 3-post teaser-to-launch sequence that builds hype.",
    "prompt": "Plan a 3-post launch sequence for [PRODUCT] (price [PRICE], audience [AUDIENCE]).\nPost 1: tease/curiosity. Post 2: reveal + benefits. Post 3: it's live + CTA + offer [OFFER].\nFor each: caption + Story idea + CTA. Build anticipation without over-hyping.",
    "tags": [
      "launch",
      "sales"
    ]
  },
  {
    "id": "ig-quote-post",
    "cat": "instagram",
    "title": "Quote / Motivation Post for My Niche",
    "desc": "Original, shareable one-liners that fit your brand voice.",
    "prompt": "Give me 10 original, shareable quote-style lines for the [NICHE] niche, audience [AUDIENCE].\nTone: [TONE]. Each must be tweetable (under 120 chars), feel fresh (not cliché), and work on a clean text graphic. Suggest a caption to pair with the best one.",
    "tags": [
      "quotes",
      "shareable"
    ]
  },
  {
    "id": "ig-myth-bust",
    "cat": "instagram",
    "title": "Myth-Busting Post (Authority Builder)",
    "desc": "Bust common myths in your niche to build trust and expertise.",
    "prompt": "Give me 5 common myths in the [NICHE] niche and bust each with the truth.\nFor each: the myth (as a bold hook), the reality (1-2 lines), and why it matters to [AUDIENCE].\nFormat the top one as a ready carousel (myth on cover, truth inside).",
    "tags": [
      "authority",
      "educational"
    ]
  },
  {
    "id": "ig-behind-scenes",
    "cat": "instagram",
    "title": "Behind-the-Scenes Post Ideas",
    "desc": "Relatable BTS content that humanises your brand.",
    "prompt": "Give me 10 behind-the-scenes content ideas for my [NICHE] account / business.\nFor each: a hook, the format, and what to show. Make them feel authentic and relatable to [AUDIENCE], the kind of stuff that builds a real connection.",
    "tags": [
      "bts",
      "relatable"
    ]
  },
  {
    "id": "ig-collab-caption",
    "cat": "instagram",
    "title": "Caption for a Collab / Feature Post",
    "desc": "A caption for when you collaborate with or feature someone.",
    "prompt": "Write a caption for a collab post with [PARTNER] about [WHAT THE COLLAB IS].\nMy niche: [NICHE]. Tone: [TONE].\nCredit the partner naturally, tell people why this collab is valuable, and add a CTA to follow both. 5 hashtags.",
    "tags": [
      "collab",
      "caption"
    ]
  },
  {
    "id": "ig-testimonial-post",
    "cat": "instagram",
    "title": "Turn a Review into a Social-Proof Post",
    "desc": "Reframe a customer review into a scroll-stopping testimonial post.",
    "prompt": "Here's a customer review:\n\"\"\"\n[PASTE REVIEW]\n\"\"\"\nProduct: [PRODUCT]. Turn it into an Instagram post: a hook that leads with the result, the review framed nicely, and a soft CTA to buy (\"DM to order\"). Suggest a simple graphic layout.",
    "tags": [
      "social proof",
      "sales"
    ]
  },
  {
    "id": "ig-this-or-that",
    "cat": "instagram",
    "title": "Interactive \"This or That\" Post",
    "desc": "High-engagement comparison posts that spark comments.",
    "prompt": "Create 5 \"This or That\" style interactive post ideas for the [NICHE] niche.\nEach should give the audience an easy choice that sparks comments and debate. Add a caption prompting them to comment their pick + a poll Story version.",
    "tags": [
      "engagement",
      "interactive"
    ]
  },
  {
    "id": "ig-day-in-life",
    "cat": "instagram",
    "title": "\"Day in My Life\" Reel/Post Script",
    "desc": "A relatable day-in-the-life that grows a personal brand.",
    "prompt": "Write a \"day in my life\" Reel script for a [WHAT YOU DO] in [CITY PLACE].\nAudience: [AUDIENCE]. Include 6-8 quick scene ideas with on-screen text, a hook at the start, and a caption. Make it aspirational but real.",
    "tags": [
      "vlog",
      "personal"
    ]
  },
  {
    "id": "ig-save-worthy-list",
    "cat": "instagram",
    "title": "Save-Worthy \"Top 5 / Top 10\" List Post",
    "desc": "List posts people bookmark — great for reach via saves.",
    "prompt": "Create a save-worthy \"Top [NUMBER] [THING], e.g. apps/tips/tools\" post for the [NICHE] niche, audience [AUDIENCE].\nGive each item a name + one-line why. Format as a carousel (cover hook + one item per slide) and add a \"Save this\" caption.",
    "tags": [
      "list",
      "saves",
      "value"
    ]
  },
  {
    "id": "ig-before-after",
    "cat": "instagram",
    "title": "Before / After Transformation Post",
    "desc": "Showcase results in a format that proves your value.",
    "prompt": "Write a before/after transformation post about [TRANSFORMATION].\nNiche: [NICHE]. Audience: [AUDIENCE].\nHook with the \"after\", tell the story of the change, end with a CTA. Make it inspiring and believable, not braggy.",
    "tags": [
      "transformation",
      "proof"
    ]
  },
  {
    "id": "ig-reel-hook-fix",
    "cat": "instagram",
    "title": "Fix My Weak Reel Hook",
    "desc": "Paste your hook, get sharper rewrites and a winner.",
    "prompt": "My current Reel hook: \"[YOUR HOOK]\". Niche: [NICHE]. Audience: [AUDIENCE].\n1) Tell me honestly what's weak. 2) Rewrite it 5 stronger ways. 3) Pick the single best and say why in one line.",
    "tags": [
      "hooks",
      "optimization"
    ]
  },
  {
    "id": "ig-monthly-review",
    "cat": "instagram",
    "title": "Analyze My Instagram Month",
    "desc": "Paste your stats, get a read on what worked and what to do next.",
    "prompt": "Here's my Instagram performance this month:\n\"\"\"\n[PASTE STATS TOP POSTS]\n\"\"\"\nNiche: [NICHE]. Goal: [GOAL].\nTell me what worked and WHY, what to stop, 3 things to double down on, and a one-sentence focus for next month.",
    "tags": [
      "analytics",
      "strategy"
    ]
  },
  {
    "id": "ig-festival-post",
    "cat": "instagram",
    "title": "Festival Greeting Post (On-Brand)",
    "desc": "Festive greetings that stay on-brand and drive engagement.",
    "prompt": "Write a festive greeting post for [FESTIVAL] for my [NICHE] brand.\nAudience: [AUDIENCE]. Tone: warm and genuine.\nInclude a heartfelt caption that ties the festival to my brand subtly, a Story idea, and 3 festive hashtags. Optional soft CTA for [OFFER].",
    "tags": [
      "festival",
      "india",
      "engagement"
    ]
  },
  {
    "id": "ig-poll-questions",
    "cat": "instagram",
    "title": "20 Story Poll & Question Ideas",
    "desc": "A bank of Story prompts to keep your audience engaged daily.",
    "prompt": "Give me 20 Instagram Story poll/question/quiz ideas for the [NICHE] niche, audience [AUDIENCE].\nMix fun, useful, and ones that help me understand my audience (so I can make better content/products). Label each with the sticker type.",
    "tags": [
      "stories",
      "engagement"
    ]
  },
  {
    "id": "ig-pinned-3",
    "cat": "instagram",
    "title": "My 3 Pinned Posts Strategy",
    "desc": "Decide what your 3 pinned posts should be to convert profile visitors.",
    "prompt": "Help me choose what my 3 pinned Instagram posts should be.\nWhat I do: [WHAT YOU DO]. Goal: [GOAL]. Audience: [AUDIENCE].\nRecommend 3 post types/topics for the pinned slots and why each one converts a new visitor. Give a hook for each.",
    "tags": [
      "profile",
      "strategy"
    ]
  },
  {
    "id": "ig-caption-formulas",
    "cat": "instagram",
    "title": "10 Caption Formulas (Fill-in)",
    "desc": "Reusable caption templates so writing captions takes seconds.",
    "prompt": "Give me 10 reusable Instagram caption formulas (fill-in-the-blank) for the [NICHE] niche, audience [AUDIENCE].\nCover: storytelling, listicle, question-hook, hot-take, tip, relatable, promo, and \"carousel companion\". Show each as a template + one filled example for [TOPIC].",
    "tags": [
      "caption",
      "templates"
    ]
  },
  {
    "id": "ig-broll-ideas",
    "cat": "instagram",
    "title": "B-Roll Shot Ideas for My Niche",
    "desc": "A list of b-roll clips to film so your Reels look pro.",
    "prompt": "Give me 15 b-roll shot ideas I can film on my phone for [NICHE] Reels, audience [AUDIENCE].\nFor each: what to shoot + how it makes a Reel look better (cutaways, transitions, atmosphere). Keep them simple, no fancy gear, doable at home or [PLACE].",
    "tags": [
      "reels",
      "production"
    ]
  },
  {
    "id": "bp-ig-caption-fitness",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Fitness Coaches",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for fitness coaching.",
    "prompt": "Write 3 Instagram captions for fitness coaching promoting [PRODUCT] to people who want to get fit. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to fitness coaching.",
    "tags": [
      "caption",
      "sales",
      "fitness"
    ]
  },
  {
    "id": "bp-ig-caption-yoga",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Yoga Instructors",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for yoga teaching.",
    "prompt": "Write 3 Instagram captions for yoga teaching promoting [PRODUCT] to people seeking calm & flexibility. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to yoga teaching.",
    "tags": [
      "caption",
      "sales",
      "yoga"
    ]
  },
  {
    "id": "bp-ig-caption-nutrition",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Nutritionists",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for nutrition & diet coaching.",
    "prompt": "Write 3 Instagram captions for nutrition & diet coaching promoting [PRODUCT] to people who want to eat healthier. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to nutrition & diet coaching.",
    "tags": [
      "caption",
      "sales",
      "nutrition"
    ]
  },
  {
    "id": "bp-ig-caption-homebakery",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Home Bakers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a home baking business.",
    "prompt": "Write 3 Instagram captions for a home baking business promoting [PRODUCT] to people who order cakes & desserts. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a home baking business.",
    "tags": [
      "caption",
      "sales",
      "homebakery"
    ]
  },
  {
    "id": "bp-ig-caption-cloudkitchen",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Cloud Kitchens",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a cloud kitchen.",
    "prompt": "Write 3 Instagram captions for a cloud kitchen promoting [PRODUCT] to hungry locals ordering online. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a cloud kitchen.",
    "tags": [
      "caption",
      "sales",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ig-caption-cafe",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Cafés & Restaurants",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a café or restaurant.",
    "prompt": "Write 3 Instagram captions for a café or restaurant promoting [PRODUCT] to local foodies. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a café or restaurant.",
    "tags": [
      "caption",
      "sales",
      "cafe"
    ]
  },
  {
    "id": "bp-ig-caption-fashion",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Fashion Brands",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a fashion & clothing brand.",
    "prompt": "Write 3 Instagram captions for a fashion & clothing brand promoting [PRODUCT] to style-conscious shoppers. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a fashion & clothing brand.",
    "tags": [
      "caption",
      "sales",
      "fashion"
    ]
  },
  {
    "id": "bp-ig-caption-jewellery",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Jewellery Brands",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a jewellery business.",
    "prompt": "Write 3 Instagram captions for a jewellery business promoting [PRODUCT] to people shopping for jewellery. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a jewellery business.",
    "tags": [
      "caption",
      "sales",
      "jewellery"
    ]
  },
  {
    "id": "bp-ig-caption-handmade",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Handmade & Craft Sellers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a handmade craft business.",
    "prompt": "Write 3 Instagram captions for a handmade craft business promoting [PRODUCT] to people who love handmade gifts. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a handmade craft business.",
    "tags": [
      "caption",
      "sales",
      "handmade"
    ]
  },
  {
    "id": "bp-ig-caption-skincare",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Skincare Brands",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a skincare brand.",
    "prompt": "Write 3 Instagram captions for a skincare brand promoting [PRODUCT] to people who want better skin. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a skincare brand.",
    "tags": [
      "caption",
      "sales",
      "skincare"
    ]
  },
  {
    "id": "bp-ig-caption-makeup",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Makeup Artists",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a makeup artistry business.",
    "prompt": "Write 3 Instagram captions for a makeup artistry business promoting [PRODUCT] to brides & beauty lovers. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a makeup artistry business.",
    "tags": [
      "caption",
      "sales",
      "makeup"
    ]
  },
  {
    "id": "bp-ig-caption-salon",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Salons & Spas",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a salon or spa.",
    "prompt": "Write 3 Instagram captions for a salon or spa promoting [PRODUCT] to people booking beauty services. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a salon or spa.",
    "tags": [
      "caption",
      "sales",
      "salon"
    ]
  },
  {
    "id": "bp-ig-caption-travel",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Travel Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for travel content.",
    "prompt": "Write 3 Instagram captions for travel content promoting [PRODUCT] to people planning trips. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to travel content.",
    "tags": [
      "caption",
      "sales",
      "travel"
    ]
  },
  {
    "id": "bp-ig-caption-photography",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Photographers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a photography business.",
    "prompt": "Write 3 Instagram captions for a photography business promoting [PRODUCT] to couples & brands needing shoots. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a photography business.",
    "tags": [
      "caption",
      "sales",
      "photography"
    ]
  },
  {
    "id": "bp-ig-caption-realestate",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Real Estate Agents",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for real estate.",
    "prompt": "Write 3 Instagram captions for real estate promoting [PRODUCT] to home buyers & sellers. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to real estate.",
    "tags": [
      "caption",
      "sales",
      "realestate"
    ]
  },
  {
    "id": "bp-ig-caption-interior",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Interior Designers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for interior design.",
    "prompt": "Write 3 Instagram captions for interior design promoting [PRODUCT] to homeowners renovating. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to interior design.",
    "tags": [
      "caption",
      "sales",
      "interior"
    ]
  },
  {
    "id": "bp-ig-caption-finance",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Personal Finance Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for personal finance content.",
    "prompt": "Write 3 Instagram captions for personal finance content promoting [PRODUCT] to people wanting to manage money. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to personal finance content.",
    "tags": [
      "caption",
      "sales",
      "finance"
    ]
  },
  {
    "id": "bp-ig-caption-trading",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Stock Market Educators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for stock market education.",
    "prompt": "Write 3 Instagram captions for stock market education promoting [PRODUCT] to new investors & traders. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to stock market education.",
    "tags": [
      "caption",
      "sales",
      "trading"
    ]
  },
  {
    "id": "bp-ig-caption-edtech",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Online Tutors",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for online tutoring.",
    "prompt": "Write 3 Instagram captions for online tutoring promoting [PRODUCT] to students & parents. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to online tutoring.",
    "tags": [
      "caption",
      "sales",
      "edtech"
    ]
  },
  {
    "id": "bp-ig-caption-examprep",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Exam Prep Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for exam prep content.",
    "prompt": "Write 3 Instagram captions for exam prep content promoting [PRODUCT] to students cracking competitive exams. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to exam prep content.",
    "tags": [
      "caption",
      "sales",
      "examprep"
    ]
  },
  {
    "id": "bp-ig-caption-coding",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Coding Educators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for coding & tech education.",
    "prompt": "Write 3 Instagram captions for coding & tech education promoting [PRODUCT] to aspiring developers. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to coding & tech education.",
    "tags": [
      "caption",
      "sales",
      "coding"
    ]
  },
  {
    "id": "bp-ig-caption-gadgets",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Tech Reviewers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for tech & gadget reviews.",
    "prompt": "Write 3 Instagram captions for tech & gadget reviews promoting [PRODUCT] to people deciding what to buy. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to tech & gadget reviews.",
    "tags": [
      "caption",
      "sales",
      "gadgets"
    ]
  },
  {
    "id": "bp-ig-caption-gaming",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Gaming Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for gaming content.",
    "prompt": "Write 3 Instagram captions for gaming content promoting [PRODUCT] to gamers & fans. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to gaming content.",
    "tags": [
      "caption",
      "sales",
      "gaming"
    ]
  },
  {
    "id": "bp-ig-caption-saas",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — SaaS Founders",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a SaaS product.",
    "prompt": "Write 3 Instagram captions for a SaaS product promoting [PRODUCT] to businesses that need the tool. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a SaaS product.",
    "tags": [
      "caption",
      "sales",
      "saas"
    ]
  },
  {
    "id": "bp-ig-caption-freelance",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Freelancers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for freelancing services.",
    "prompt": "Write 3 Instagram captions for freelancing services promoting [PRODUCT] to clients who need the service. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to freelancing services.",
    "tags": [
      "caption",
      "sales",
      "freelance"
    ]
  },
  {
    "id": "bp-ig-caption-agency",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Marketing Agencies",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for a marketing agency.",
    "prompt": "Write 3 Instagram captions for a marketing agency promoting [PRODUCT] to business owners who want growth. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to a marketing agency.",
    "tags": [
      "caption",
      "sales",
      "agency"
    ]
  },
  {
    "id": "bp-ig-caption-parenting",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Parenting Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for parenting content.",
    "prompt": "Write 3 Instagram captions for parenting content promoting [PRODUCT] to new & busy parents. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to parenting content.",
    "tags": [
      "caption",
      "sales",
      "parenting"
    ]
  },
  {
    "id": "bp-ig-caption-pets",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Pet Care Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for pet care content.",
    "prompt": "Write 3 Instagram captions for pet care content promoting [PRODUCT] to pet parents. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to pet care content.",
    "tags": [
      "caption",
      "sales",
      "pets"
    ]
  },
  {
    "id": "bp-ig-caption-gardening",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Gardening Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for gardening & plants content.",
    "prompt": "Write 3 Instagram captions for gardening & plants content promoting [PRODUCT] to plant lovers. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to gardening & plants content.",
    "tags": [
      "caption",
      "sales",
      "gardening"
    ]
  },
  {
    "id": "bp-ig-caption-astrology",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Astrology Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for astrology & spirituality content.",
    "prompt": "Write 3 Instagram captions for astrology & spirituality content promoting [PRODUCT] to people seeking guidance. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to astrology & spirituality content.",
    "tags": [
      "caption",
      "sales",
      "astrology"
    ]
  },
  {
    "id": "bp-ig-caption-motivation",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Motivational Creators",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for motivation & self-help content.",
    "prompt": "Write 3 Instagram captions for motivation & self-help content promoting [PRODUCT] to people who want to level up. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to motivation & self-help content.",
    "tags": [
      "caption",
      "sales",
      "motivation"
    ]
  },
  {
    "id": "bp-ig-caption-food",
    "cat": "instagram",
    "title": "Instagram Caption That Sells — Food Bloggers",
    "desc": "Scroll-stopping captions with a clear CTA, tailored for food & recipe content.",
    "prompt": "Write 3 Instagram captions for food & recipe content promoting [PRODUCT] to home cooks & foodies. Tone: [TONE].\nEach caption: hook in the first line, build desire, end with a clear CTA to [GOAL]. Add 5 hashtags relevant to food & recipe content.",
    "tags": [
      "caption",
      "sales",
      "food"
    ]
  },
  {
    "id": "bp-ig-carousel-fitness",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Fitness Coaches",
    "desc": "A swipeable 6-slide carousel idea for fitness coaching.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people who want to get fit in the context of fitness coaching.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "fitness"
    ]
  },
  {
    "id": "bp-ig-carousel-yoga",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Yoga Instructors",
    "desc": "A swipeable 6-slide carousel idea for yoga teaching.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people seeking calm & flexibility in the context of yoga teaching.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "yoga"
    ]
  },
  {
    "id": "bp-ig-carousel-nutrition",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Nutritionists",
    "desc": "A swipeable 6-slide carousel idea for nutrition & diet coaching.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people who want to eat healthier in the context of nutrition & diet coaching.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "nutrition"
    ]
  },
  {
    "id": "bp-ig-carousel-homebakery",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Home Bakers",
    "desc": "A swipeable 6-slide carousel idea for a home baking business.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people who order cakes & desserts in the context of a home baking business.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "homebakery"
    ]
  },
  {
    "id": "bp-ig-carousel-cloudkitchen",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Cloud Kitchens",
    "desc": "A swipeable 6-slide carousel idea for a cloud kitchen.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for hungry locals ordering online in the context of a cloud kitchen.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ig-carousel-cafe",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Cafés & Restaurants",
    "desc": "A swipeable 6-slide carousel idea for a café or restaurant.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for local foodies in the context of a café or restaurant.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "cafe"
    ]
  },
  {
    "id": "bp-ig-carousel-fashion",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Fashion Brands",
    "desc": "A swipeable 6-slide carousel idea for a fashion & clothing brand.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for style-conscious shoppers in the context of a fashion & clothing brand.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "fashion"
    ]
  },
  {
    "id": "bp-ig-carousel-jewellery",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Jewellery Brands",
    "desc": "A swipeable 6-slide carousel idea for a jewellery business.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people shopping for jewellery in the context of a jewellery business.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "jewellery"
    ]
  },
  {
    "id": "bp-ig-carousel-handmade",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Handmade & Craft Sellers",
    "desc": "A swipeable 6-slide carousel idea for a handmade craft business.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people who love handmade gifts in the context of a handmade craft business.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "handmade"
    ]
  },
  {
    "id": "bp-ig-carousel-skincare",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Skincare Brands",
    "desc": "A swipeable 6-slide carousel idea for a skincare brand.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people who want better skin in the context of a skincare brand.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "skincare"
    ]
  },
  {
    "id": "bp-ig-carousel-makeup",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Makeup Artists",
    "desc": "A swipeable 6-slide carousel idea for a makeup artistry business.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for brides & beauty lovers in the context of a makeup artistry business.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "makeup"
    ]
  },
  {
    "id": "bp-ig-carousel-salon",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Salons & Spas",
    "desc": "A swipeable 6-slide carousel idea for a salon or spa.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people booking beauty services in the context of a salon or spa.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "salon"
    ]
  },
  {
    "id": "bp-ig-carousel-travel",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Travel Creators",
    "desc": "A swipeable 6-slide carousel idea for travel content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people planning trips in the context of travel content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "travel"
    ]
  },
  {
    "id": "bp-ig-carousel-photography",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Photographers",
    "desc": "A swipeable 6-slide carousel idea for a photography business.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for couples & brands needing shoots in the context of a photography business.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "photography"
    ]
  },
  {
    "id": "bp-ig-carousel-realestate",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Real Estate Agents",
    "desc": "A swipeable 6-slide carousel idea for real estate.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for home buyers & sellers in the context of real estate.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "realestate"
    ]
  },
  {
    "id": "bp-ig-carousel-interior",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Interior Designers",
    "desc": "A swipeable 6-slide carousel idea for interior design.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for homeowners renovating in the context of interior design.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "interior"
    ]
  },
  {
    "id": "bp-ig-carousel-finance",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Personal Finance Creators",
    "desc": "A swipeable 6-slide carousel idea for personal finance content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people wanting to manage money in the context of personal finance content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "finance"
    ]
  },
  {
    "id": "bp-ig-carousel-trading",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Stock Market Educators",
    "desc": "A swipeable 6-slide carousel idea for stock market education.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for new investors & traders in the context of stock market education.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "trading"
    ]
  },
  {
    "id": "bp-ig-carousel-edtech",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Online Tutors",
    "desc": "A swipeable 6-slide carousel idea for online tutoring.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for students & parents in the context of online tutoring.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "edtech"
    ]
  },
  {
    "id": "bp-ig-carousel-examprep",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Exam Prep Creators",
    "desc": "A swipeable 6-slide carousel idea for exam prep content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for students cracking competitive exams in the context of exam prep content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "examprep"
    ]
  },
  {
    "id": "bp-ig-carousel-coding",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Coding Educators",
    "desc": "A swipeable 6-slide carousel idea for coding & tech education.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for aspiring developers in the context of coding & tech education.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "coding"
    ]
  },
  {
    "id": "bp-ig-carousel-gadgets",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Tech Reviewers",
    "desc": "A swipeable 6-slide carousel idea for tech & gadget reviews.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people deciding what to buy in the context of tech & gadget reviews.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "gadgets"
    ]
  },
  {
    "id": "bp-ig-carousel-gaming",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Gaming Creators",
    "desc": "A swipeable 6-slide carousel idea for gaming content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for gamers & fans in the context of gaming content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "gaming"
    ]
  },
  {
    "id": "bp-ig-carousel-saas",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — SaaS Founders",
    "desc": "A swipeable 6-slide carousel idea for a SaaS product.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for businesses that need the tool in the context of a SaaS product.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "saas"
    ]
  },
  {
    "id": "bp-ig-carousel-freelance",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Freelancers",
    "desc": "A swipeable 6-slide carousel idea for freelancing services.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for clients who need the service in the context of freelancing services.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "freelance"
    ]
  },
  {
    "id": "bp-ig-carousel-agency",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Marketing Agencies",
    "desc": "A swipeable 6-slide carousel idea for a marketing agency.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for business owners who want growth in the context of a marketing agency.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "agency"
    ]
  },
  {
    "id": "bp-ig-carousel-parenting",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Parenting Creators",
    "desc": "A swipeable 6-slide carousel idea for parenting content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for new & busy parents in the context of parenting content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "parenting"
    ]
  },
  {
    "id": "bp-ig-carousel-pets",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Pet Care Creators",
    "desc": "A swipeable 6-slide carousel idea for pet care content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for pet parents in the context of pet care content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "pets"
    ]
  },
  {
    "id": "bp-ig-carousel-gardening",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Gardening Creators",
    "desc": "A swipeable 6-slide carousel idea for gardening & plants content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for plant lovers in the context of gardening & plants content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "gardening"
    ]
  },
  {
    "id": "bp-ig-carousel-astrology",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Astrology Creators",
    "desc": "A swipeable 6-slide carousel idea for astrology & spirituality content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people seeking guidance in the context of astrology & spirituality content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "astrology"
    ]
  },
  {
    "id": "bp-ig-carousel-motivation",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Motivational Creators",
    "desc": "A swipeable 6-slide carousel idea for motivation & self-help content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for people who want to level up in the context of motivation & self-help content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "motivation"
    ]
  },
  {
    "id": "bp-ig-carousel-food",
    "cat": "instagram",
    "title": "Value Carousel (6 Slides) — Food Bloggers",
    "desc": "A swipeable 6-slide carousel idea for food & recipe content.",
    "prompt": "Create a 6-slide Instagram carousel about [TOPIC] for home cooks & foodies in the context of food & recipe content.\nSlide 1 is a bold hook, slides 2-5 deliver value, slide 6 is a CTA to [GOAL]. Keep each slide under 20 words.",
    "tags": [
      "carousel",
      "value",
      "food"
    ]
  },
  {
    "id": "bp-ig-story-fitness",
    "cat": "instagram",
    "title": "Story Engagement Set — Fitness Coaches",
    "desc": "Polls, quizzes & questions to boost replies for fitness coaching.",
    "prompt": "Give me 8 Instagram Story ideas for fitness coaching to boost engagement with people who want to get fit.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "fitness"
    ]
  },
  {
    "id": "bp-ig-story-yoga",
    "cat": "instagram",
    "title": "Story Engagement Set — Yoga Instructors",
    "desc": "Polls, quizzes & questions to boost replies for yoga teaching.",
    "prompt": "Give me 8 Instagram Story ideas for yoga teaching to boost engagement with people seeking calm & flexibility.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "yoga"
    ]
  },
  {
    "id": "bp-ig-story-nutrition",
    "cat": "instagram",
    "title": "Story Engagement Set — Nutritionists",
    "desc": "Polls, quizzes & questions to boost replies for nutrition & diet coaching.",
    "prompt": "Give me 8 Instagram Story ideas for nutrition & diet coaching to boost engagement with people who want to eat healthier.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "nutrition"
    ]
  },
  {
    "id": "bp-ig-story-homebakery",
    "cat": "instagram",
    "title": "Story Engagement Set — Home Bakers",
    "desc": "Polls, quizzes & questions to boost replies for a home baking business.",
    "prompt": "Give me 8 Instagram Story ideas for a home baking business to boost engagement with people who order cakes & desserts.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "homebakery"
    ]
  },
  {
    "id": "bp-ig-story-cloudkitchen",
    "cat": "instagram",
    "title": "Story Engagement Set — Cloud Kitchens",
    "desc": "Polls, quizzes & questions to boost replies for a cloud kitchen.",
    "prompt": "Give me 8 Instagram Story ideas for a cloud kitchen to boost engagement with hungry locals ordering online.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ig-story-cafe",
    "cat": "instagram",
    "title": "Story Engagement Set — Cafés & Restaurants",
    "desc": "Polls, quizzes & questions to boost replies for a café or restaurant.",
    "prompt": "Give me 8 Instagram Story ideas for a café or restaurant to boost engagement with local foodies.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "cafe"
    ]
  },
  {
    "id": "bp-ig-story-fashion",
    "cat": "instagram",
    "title": "Story Engagement Set — Fashion Brands",
    "desc": "Polls, quizzes & questions to boost replies for a fashion & clothing brand.",
    "prompt": "Give me 8 Instagram Story ideas for a fashion & clothing brand to boost engagement with style-conscious shoppers.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "fashion"
    ]
  },
  {
    "id": "bp-ig-story-jewellery",
    "cat": "instagram",
    "title": "Story Engagement Set — Jewellery Brands",
    "desc": "Polls, quizzes & questions to boost replies for a jewellery business.",
    "prompt": "Give me 8 Instagram Story ideas for a jewellery business to boost engagement with people shopping for jewellery.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "jewellery"
    ]
  },
  {
    "id": "bp-ig-story-handmade",
    "cat": "instagram",
    "title": "Story Engagement Set — Handmade & Craft Sellers",
    "desc": "Polls, quizzes & questions to boost replies for a handmade craft business.",
    "prompt": "Give me 8 Instagram Story ideas for a handmade craft business to boost engagement with people who love handmade gifts.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "handmade"
    ]
  },
  {
    "id": "bp-ig-story-skincare",
    "cat": "instagram",
    "title": "Story Engagement Set — Skincare Brands",
    "desc": "Polls, quizzes & questions to boost replies for a skincare brand.",
    "prompt": "Give me 8 Instagram Story ideas for a skincare brand to boost engagement with people who want better skin.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "skincare"
    ]
  },
  {
    "id": "bp-ig-story-makeup",
    "cat": "instagram",
    "title": "Story Engagement Set — Makeup Artists",
    "desc": "Polls, quizzes & questions to boost replies for a makeup artistry business.",
    "prompt": "Give me 8 Instagram Story ideas for a makeup artistry business to boost engagement with brides & beauty lovers.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "makeup"
    ]
  },
  {
    "id": "bp-ig-story-salon",
    "cat": "instagram",
    "title": "Story Engagement Set — Salons & Spas",
    "desc": "Polls, quizzes & questions to boost replies for a salon or spa.",
    "prompt": "Give me 8 Instagram Story ideas for a salon or spa to boost engagement with people booking beauty services.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "salon"
    ]
  },
  {
    "id": "bp-ig-story-travel",
    "cat": "instagram",
    "title": "Story Engagement Set — Travel Creators",
    "desc": "Polls, quizzes & questions to boost replies for travel content.",
    "prompt": "Give me 8 Instagram Story ideas for travel content to boost engagement with people planning trips.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "travel"
    ]
  },
  {
    "id": "bp-ig-story-photography",
    "cat": "instagram",
    "title": "Story Engagement Set — Photographers",
    "desc": "Polls, quizzes & questions to boost replies for a photography business.",
    "prompt": "Give me 8 Instagram Story ideas for a photography business to boost engagement with couples & brands needing shoots.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "photography"
    ]
  },
  {
    "id": "bp-ig-story-realestate",
    "cat": "instagram",
    "title": "Story Engagement Set — Real Estate Agents",
    "desc": "Polls, quizzes & questions to boost replies for real estate.",
    "prompt": "Give me 8 Instagram Story ideas for real estate to boost engagement with home buyers & sellers.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "realestate"
    ]
  },
  {
    "id": "bp-ig-story-interior",
    "cat": "instagram",
    "title": "Story Engagement Set — Interior Designers",
    "desc": "Polls, quizzes & questions to boost replies for interior design.",
    "prompt": "Give me 8 Instagram Story ideas for interior design to boost engagement with homeowners renovating.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "interior"
    ]
  },
  {
    "id": "bp-ig-story-finance",
    "cat": "instagram",
    "title": "Story Engagement Set — Personal Finance Creators",
    "desc": "Polls, quizzes & questions to boost replies for personal finance content.",
    "prompt": "Give me 8 Instagram Story ideas for personal finance content to boost engagement with people wanting to manage money.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "finance"
    ]
  },
  {
    "id": "bp-ig-story-trading",
    "cat": "instagram",
    "title": "Story Engagement Set — Stock Market Educators",
    "desc": "Polls, quizzes & questions to boost replies for stock market education.",
    "prompt": "Give me 8 Instagram Story ideas for stock market education to boost engagement with new investors & traders.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "trading"
    ]
  },
  {
    "id": "bp-ig-story-edtech",
    "cat": "instagram",
    "title": "Story Engagement Set — Online Tutors",
    "desc": "Polls, quizzes & questions to boost replies for online tutoring.",
    "prompt": "Give me 8 Instagram Story ideas for online tutoring to boost engagement with students & parents.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "edtech"
    ]
  },
  {
    "id": "bp-ig-story-examprep",
    "cat": "instagram",
    "title": "Story Engagement Set — Exam Prep Creators",
    "desc": "Polls, quizzes & questions to boost replies for exam prep content.",
    "prompt": "Give me 8 Instagram Story ideas for exam prep content to boost engagement with students cracking competitive exams.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "examprep"
    ]
  },
  {
    "id": "bp-ig-story-coding",
    "cat": "instagram",
    "title": "Story Engagement Set — Coding Educators",
    "desc": "Polls, quizzes & questions to boost replies for coding & tech education.",
    "prompt": "Give me 8 Instagram Story ideas for coding & tech education to boost engagement with aspiring developers.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "coding"
    ]
  },
  {
    "id": "bp-ig-story-gadgets",
    "cat": "instagram",
    "title": "Story Engagement Set — Tech Reviewers",
    "desc": "Polls, quizzes & questions to boost replies for tech & gadget reviews.",
    "prompt": "Give me 8 Instagram Story ideas for tech & gadget reviews to boost engagement with people deciding what to buy.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "gadgets"
    ]
  },
  {
    "id": "bp-ig-story-gaming",
    "cat": "instagram",
    "title": "Story Engagement Set — Gaming Creators",
    "desc": "Polls, quizzes & questions to boost replies for gaming content.",
    "prompt": "Give me 8 Instagram Story ideas for gaming content to boost engagement with gamers & fans.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "gaming"
    ]
  },
  {
    "id": "bp-ig-story-saas",
    "cat": "instagram",
    "title": "Story Engagement Set — SaaS Founders",
    "desc": "Polls, quizzes & questions to boost replies for a SaaS product.",
    "prompt": "Give me 8 Instagram Story ideas for a SaaS product to boost engagement with businesses that need the tool.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "saas"
    ]
  },
  {
    "id": "bp-ig-story-freelance",
    "cat": "instagram",
    "title": "Story Engagement Set — Freelancers",
    "desc": "Polls, quizzes & questions to boost replies for freelancing services.",
    "prompt": "Give me 8 Instagram Story ideas for freelancing services to boost engagement with clients who need the service.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "freelance"
    ]
  },
  {
    "id": "bp-ig-story-agency",
    "cat": "instagram",
    "title": "Story Engagement Set — Marketing Agencies",
    "desc": "Polls, quizzes & questions to boost replies for a marketing agency.",
    "prompt": "Give me 8 Instagram Story ideas for a marketing agency to boost engagement with business owners who want growth.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "agency"
    ]
  },
  {
    "id": "bp-ig-story-parenting",
    "cat": "instagram",
    "title": "Story Engagement Set — Parenting Creators",
    "desc": "Polls, quizzes & questions to boost replies for parenting content.",
    "prompt": "Give me 8 Instagram Story ideas for parenting content to boost engagement with new & busy parents.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "parenting"
    ]
  },
  {
    "id": "bp-ig-story-pets",
    "cat": "instagram",
    "title": "Story Engagement Set — Pet Care Creators",
    "desc": "Polls, quizzes & questions to boost replies for pet care content.",
    "prompt": "Give me 8 Instagram Story ideas for pet care content to boost engagement with pet parents.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "pets"
    ]
  },
  {
    "id": "bp-ig-story-gardening",
    "cat": "instagram",
    "title": "Story Engagement Set — Gardening Creators",
    "desc": "Polls, quizzes & questions to boost replies for gardening & plants content.",
    "prompt": "Give me 8 Instagram Story ideas for gardening & plants content to boost engagement with plant lovers.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "gardening"
    ]
  },
  {
    "id": "bp-ig-story-astrology",
    "cat": "instagram",
    "title": "Story Engagement Set — Astrology Creators",
    "desc": "Polls, quizzes & questions to boost replies for astrology & spirituality content.",
    "prompt": "Give me 8 Instagram Story ideas for astrology & spirituality content to boost engagement with people seeking guidance.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "astrology"
    ]
  },
  {
    "id": "bp-ig-story-motivation",
    "cat": "instagram",
    "title": "Story Engagement Set — Motivational Creators",
    "desc": "Polls, quizzes & questions to boost replies for motivation & self-help content.",
    "prompt": "Give me 8 Instagram Story ideas for motivation & self-help content to boost engagement with people who want to level up.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "motivation"
    ]
  },
  {
    "id": "bp-ig-story-food",
    "cat": "instagram",
    "title": "Story Engagement Set — Food Bloggers",
    "desc": "Polls, quizzes & questions to boost replies for food & recipe content.",
    "prompt": "Give me 8 Instagram Story ideas for food & recipe content to boost engagement with home cooks & foodies.\nFor each: the on-screen text, the sticker to use (poll/quiz/question/slider), and why it works.",
    "tags": [
      "stories",
      "engagement",
      "food"
    ]
  },
  {
    "id": "bp-ig-hashtags-fitness",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Fitness Coaches",
    "desc": "Balanced reach/niche/local hashtags for fitness coaching.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for fitness coaching, audience people who want to get fit.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "fitness"
    ]
  },
  {
    "id": "bp-ig-hashtags-yoga",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Yoga Instructors",
    "desc": "Balanced reach/niche/local hashtags for yoga teaching.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for yoga teaching, audience people seeking calm & flexibility.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "yoga"
    ]
  },
  {
    "id": "bp-ig-hashtags-nutrition",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Nutritionists",
    "desc": "Balanced reach/niche/local hashtags for nutrition & diet coaching.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for nutrition & diet coaching, audience people who want to eat healthier.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "nutrition"
    ]
  },
  {
    "id": "bp-ig-hashtags-homebakery",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Home Bakers",
    "desc": "Balanced reach/niche/local hashtags for a home baking business.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a home baking business, audience people who order cakes & desserts.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "homebakery"
    ]
  },
  {
    "id": "bp-ig-hashtags-cloudkitchen",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Cloud Kitchens",
    "desc": "Balanced reach/niche/local hashtags for a cloud kitchen.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a cloud kitchen, audience hungry locals ordering online.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ig-hashtags-cafe",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Cafés & Restaurants",
    "desc": "Balanced reach/niche/local hashtags for a café or restaurant.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a café or restaurant, audience local foodies.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "cafe"
    ]
  },
  {
    "id": "bp-ig-hashtags-fashion",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Fashion Brands",
    "desc": "Balanced reach/niche/local hashtags for a fashion & clothing brand.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a fashion & clothing brand, audience style-conscious shoppers.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "fashion"
    ]
  },
  {
    "id": "bp-ig-hashtags-jewellery",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Jewellery Brands",
    "desc": "Balanced reach/niche/local hashtags for a jewellery business.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a jewellery business, audience people shopping for jewellery.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "jewellery"
    ]
  },
  {
    "id": "bp-ig-hashtags-handmade",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Handmade & Craft Sellers",
    "desc": "Balanced reach/niche/local hashtags for a handmade craft business.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a handmade craft business, audience people who love handmade gifts.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "handmade"
    ]
  },
  {
    "id": "bp-ig-hashtags-skincare",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Skincare Brands",
    "desc": "Balanced reach/niche/local hashtags for a skincare brand.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a skincare brand, audience people who want better skin.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "skincare"
    ]
  },
  {
    "id": "bp-ig-hashtags-makeup",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Makeup Artists",
    "desc": "Balanced reach/niche/local hashtags for a makeup artistry business.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a makeup artistry business, audience brides & beauty lovers.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "makeup"
    ]
  },
  {
    "id": "bp-ig-hashtags-salon",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Salons & Spas",
    "desc": "Balanced reach/niche/local hashtags for a salon or spa.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a salon or spa, audience people booking beauty services.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "salon"
    ]
  },
  {
    "id": "bp-ig-hashtags-travel",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Travel Creators",
    "desc": "Balanced reach/niche/local hashtags for travel content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for travel content, audience people planning trips.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "travel"
    ]
  },
  {
    "id": "bp-ig-hashtags-photography",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Photographers",
    "desc": "Balanced reach/niche/local hashtags for a photography business.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a photography business, audience couples & brands needing shoots.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "photography"
    ]
  },
  {
    "id": "bp-ig-hashtags-realestate",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Real Estate Agents",
    "desc": "Balanced reach/niche/local hashtags for real estate.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for real estate, audience home buyers & sellers.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "realestate"
    ]
  },
  {
    "id": "bp-ig-hashtags-interior",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Interior Designers",
    "desc": "Balanced reach/niche/local hashtags for interior design.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for interior design, audience homeowners renovating.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "interior"
    ]
  },
  {
    "id": "bp-ig-hashtags-finance",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Personal Finance Creators",
    "desc": "Balanced reach/niche/local hashtags for personal finance content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for personal finance content, audience people wanting to manage money.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "finance"
    ]
  },
  {
    "id": "bp-ig-hashtags-trading",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Stock Market Educators",
    "desc": "Balanced reach/niche/local hashtags for stock market education.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for stock market education, audience new investors & traders.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "trading"
    ]
  },
  {
    "id": "bp-ig-hashtags-edtech",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Online Tutors",
    "desc": "Balanced reach/niche/local hashtags for online tutoring.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for online tutoring, audience students & parents.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "edtech"
    ]
  },
  {
    "id": "bp-ig-hashtags-examprep",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Exam Prep Creators",
    "desc": "Balanced reach/niche/local hashtags for exam prep content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for exam prep content, audience students cracking competitive exams.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "examprep"
    ]
  },
  {
    "id": "bp-ig-hashtags-coding",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Coding Educators",
    "desc": "Balanced reach/niche/local hashtags for coding & tech education.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for coding & tech education, audience aspiring developers.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "coding"
    ]
  },
  {
    "id": "bp-ig-hashtags-gadgets",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Tech Reviewers",
    "desc": "Balanced reach/niche/local hashtags for tech & gadget reviews.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for tech & gadget reviews, audience people deciding what to buy.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "gadgets"
    ]
  },
  {
    "id": "bp-ig-hashtags-gaming",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Gaming Creators",
    "desc": "Balanced reach/niche/local hashtags for gaming content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for gaming content, audience gamers & fans.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "gaming"
    ]
  },
  {
    "id": "bp-ig-hashtags-saas",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — SaaS Founders",
    "desc": "Balanced reach/niche/local hashtags for a SaaS product.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a SaaS product, audience businesses that need the tool.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "saas"
    ]
  },
  {
    "id": "bp-ig-hashtags-freelance",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Freelancers",
    "desc": "Balanced reach/niche/local hashtags for freelancing services.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for freelancing services, audience clients who need the service.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "freelance"
    ]
  },
  {
    "id": "bp-ig-hashtags-agency",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Marketing Agencies",
    "desc": "Balanced reach/niche/local hashtags for a marketing agency.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for a marketing agency, audience business owners who want growth.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "agency"
    ]
  },
  {
    "id": "bp-ig-hashtags-parenting",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Parenting Creators",
    "desc": "Balanced reach/niche/local hashtags for parenting content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for parenting content, audience new & busy parents.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "parenting"
    ]
  },
  {
    "id": "bp-ig-hashtags-pets",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Pet Care Creators",
    "desc": "Balanced reach/niche/local hashtags for pet care content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for pet care content, audience pet parents.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "pets"
    ]
  },
  {
    "id": "bp-ig-hashtags-gardening",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Gardening Creators",
    "desc": "Balanced reach/niche/local hashtags for gardening & plants content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for gardening & plants content, audience plant lovers.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "gardening"
    ]
  },
  {
    "id": "bp-ig-hashtags-astrology",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Astrology Creators",
    "desc": "Balanced reach/niche/local hashtags for astrology & spirituality content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for astrology & spirituality content, audience people seeking guidance.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "astrology"
    ]
  },
  {
    "id": "bp-ig-hashtags-motivation",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Motivational Creators",
    "desc": "Balanced reach/niche/local hashtags for motivation & self-help content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for motivation & self-help content, audience people who want to level up.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "motivation"
    ]
  },
  {
    "id": "bp-ig-hashtags-food",
    "cat": "instagram",
    "title": "Smart Hashtag Sets — Food Bloggers",
    "desc": "Balanced reach/niche/local hashtags for food & recipe content.",
    "prompt": "Give 3 hashtag sets (15 each) for an Instagram post about [TOPIC] for food & recipe content, audience home cooks & foodies.\nEach set: 3 large, 7 medium, 5 small/local tags. Label them Reach, Niche, Local. No banned tags.",
    "tags": [
      "hashtags",
      "reach",
      "food"
    ]
  },
  {
    "id": "bp-ig-poll-fitness",
    "cat": "instagram",
    "title": "Engagement Questions — Fitness Coaches",
    "desc": "Discussion-starters that get people who want to get fit commenting.",
    "prompt": "Give 12 engaging questions to post for fitness coaching, audience people who want to get fit.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "fitness"
    ]
  },
  {
    "id": "bp-ig-poll-yoga",
    "cat": "instagram",
    "title": "Engagement Questions — Yoga Instructors",
    "desc": "Discussion-starters that get people seeking calm & flexibility commenting.",
    "prompt": "Give 12 engaging questions to post for yoga teaching, audience people seeking calm & flexibility.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "yoga"
    ]
  },
  {
    "id": "bp-ig-poll-nutrition",
    "cat": "instagram",
    "title": "Engagement Questions — Nutritionists",
    "desc": "Discussion-starters that get people who want to eat healthier commenting.",
    "prompt": "Give 12 engaging questions to post for nutrition & diet coaching, audience people who want to eat healthier.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "nutrition"
    ]
  },
  {
    "id": "bp-ig-poll-homebakery",
    "cat": "instagram",
    "title": "Engagement Questions — Home Bakers",
    "desc": "Discussion-starters that get people who order cakes & desserts commenting.",
    "prompt": "Give 12 engaging questions to post for a home baking business, audience people who order cakes & desserts.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "homebakery"
    ]
  },
  {
    "id": "bp-ig-poll-cloudkitchen",
    "cat": "instagram",
    "title": "Engagement Questions — Cloud Kitchens",
    "desc": "Discussion-starters that get hungry locals ordering online commenting.",
    "prompt": "Give 12 engaging questions to post for a cloud kitchen, audience hungry locals ordering online.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ig-poll-cafe",
    "cat": "instagram",
    "title": "Engagement Questions — Cafés & Restaurants",
    "desc": "Discussion-starters that get local foodies commenting.",
    "prompt": "Give 12 engaging questions to post for a café or restaurant, audience local foodies.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "cafe"
    ]
  },
  {
    "id": "bp-ig-poll-fashion",
    "cat": "instagram",
    "title": "Engagement Questions — Fashion Brands",
    "desc": "Discussion-starters that get style-conscious shoppers commenting.",
    "prompt": "Give 12 engaging questions to post for a fashion & clothing brand, audience style-conscious shoppers.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "fashion"
    ]
  },
  {
    "id": "bp-ig-poll-jewellery",
    "cat": "instagram",
    "title": "Engagement Questions — Jewellery Brands",
    "desc": "Discussion-starters that get people shopping for jewellery commenting.",
    "prompt": "Give 12 engaging questions to post for a jewellery business, audience people shopping for jewellery.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "jewellery"
    ]
  },
  {
    "id": "bp-ig-poll-handmade",
    "cat": "instagram",
    "title": "Engagement Questions — Handmade & Craft Sellers",
    "desc": "Discussion-starters that get people who love handmade gifts commenting.",
    "prompt": "Give 12 engaging questions to post for a handmade craft business, audience people who love handmade gifts.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "handmade"
    ]
  },
  {
    "id": "bp-ig-poll-skincare",
    "cat": "instagram",
    "title": "Engagement Questions — Skincare Brands",
    "desc": "Discussion-starters that get people who want better skin commenting.",
    "prompt": "Give 12 engaging questions to post for a skincare brand, audience people who want better skin.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "skincare"
    ]
  },
  {
    "id": "bp-ig-poll-makeup",
    "cat": "instagram",
    "title": "Engagement Questions — Makeup Artists",
    "desc": "Discussion-starters that get brides & beauty lovers commenting.",
    "prompt": "Give 12 engaging questions to post for a makeup artistry business, audience brides & beauty lovers.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "makeup"
    ]
  },
  {
    "id": "bp-ig-poll-salon",
    "cat": "instagram",
    "title": "Engagement Questions — Salons & Spas",
    "desc": "Discussion-starters that get people booking beauty services commenting.",
    "prompt": "Give 12 engaging questions to post for a salon or spa, audience people booking beauty services.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "salon"
    ]
  },
  {
    "id": "bp-ig-poll-travel",
    "cat": "instagram",
    "title": "Engagement Questions — Travel Creators",
    "desc": "Discussion-starters that get people planning trips commenting.",
    "prompt": "Give 12 engaging questions to post for travel content, audience people planning trips.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "travel"
    ]
  },
  {
    "id": "bp-ig-poll-photography",
    "cat": "instagram",
    "title": "Engagement Questions — Photographers",
    "desc": "Discussion-starters that get couples & brands needing shoots commenting.",
    "prompt": "Give 12 engaging questions to post for a photography business, audience couples & brands needing shoots.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "photography"
    ]
  },
  {
    "id": "bp-ig-poll-realestate",
    "cat": "instagram",
    "title": "Engagement Questions — Real Estate Agents",
    "desc": "Discussion-starters that get home buyers & sellers commenting.",
    "prompt": "Give 12 engaging questions to post for real estate, audience home buyers & sellers.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "realestate"
    ]
  },
  {
    "id": "bp-ig-poll-interior",
    "cat": "instagram",
    "title": "Engagement Questions — Interior Designers",
    "desc": "Discussion-starters that get homeowners renovating commenting.",
    "prompt": "Give 12 engaging questions to post for interior design, audience homeowners renovating.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "interior"
    ]
  },
  {
    "id": "bp-ig-poll-finance",
    "cat": "instagram",
    "title": "Engagement Questions — Personal Finance Creators",
    "desc": "Discussion-starters that get people wanting to manage money commenting.",
    "prompt": "Give 12 engaging questions to post for personal finance content, audience people wanting to manage money.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "finance"
    ]
  },
  {
    "id": "bp-ig-poll-trading",
    "cat": "instagram",
    "title": "Engagement Questions — Stock Market Educators",
    "desc": "Discussion-starters that get new investors & traders commenting.",
    "prompt": "Give 12 engaging questions to post for stock market education, audience new investors & traders.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "trading"
    ]
  },
  {
    "id": "bp-ig-poll-edtech",
    "cat": "instagram",
    "title": "Engagement Questions — Online Tutors",
    "desc": "Discussion-starters that get students & parents commenting.",
    "prompt": "Give 12 engaging questions to post for online tutoring, audience students & parents.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "edtech"
    ]
  },
  {
    "id": "bp-ig-poll-examprep",
    "cat": "instagram",
    "title": "Engagement Questions — Exam Prep Creators",
    "desc": "Discussion-starters that get students cracking competitive exams commenting.",
    "prompt": "Give 12 engaging questions to post for exam prep content, audience students cracking competitive exams.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "examprep"
    ]
  },
  {
    "id": "bp-ig-poll-coding",
    "cat": "instagram",
    "title": "Engagement Questions — Coding Educators",
    "desc": "Discussion-starters that get aspiring developers commenting.",
    "prompt": "Give 12 engaging questions to post for coding & tech education, audience aspiring developers.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "coding"
    ]
  },
  {
    "id": "bp-ig-poll-gadgets",
    "cat": "instagram",
    "title": "Engagement Questions — Tech Reviewers",
    "desc": "Discussion-starters that get people deciding what to buy commenting.",
    "prompt": "Give 12 engaging questions to post for tech & gadget reviews, audience people deciding what to buy.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "gadgets"
    ]
  },
  {
    "id": "bp-ig-poll-gaming",
    "cat": "instagram",
    "title": "Engagement Questions — Gaming Creators",
    "desc": "Discussion-starters that get gamers & fans commenting.",
    "prompt": "Give 12 engaging questions to post for gaming content, audience gamers & fans.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "gaming"
    ]
  },
  {
    "id": "bp-ig-poll-saas",
    "cat": "instagram",
    "title": "Engagement Questions — SaaS Founders",
    "desc": "Discussion-starters that get businesses that need the tool commenting.",
    "prompt": "Give 12 engaging questions to post for a SaaS product, audience businesses that need the tool.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "saas"
    ]
  },
  {
    "id": "bp-ig-poll-freelance",
    "cat": "instagram",
    "title": "Engagement Questions — Freelancers",
    "desc": "Discussion-starters that get clients who need the service commenting.",
    "prompt": "Give 12 engaging questions to post for freelancing services, audience clients who need the service.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "freelance"
    ]
  },
  {
    "id": "bp-ig-poll-agency",
    "cat": "instagram",
    "title": "Engagement Questions — Marketing Agencies",
    "desc": "Discussion-starters that get business owners who want growth commenting.",
    "prompt": "Give 12 engaging questions to post for a marketing agency, audience business owners who want growth.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "agency"
    ]
  },
  {
    "id": "bp-ig-poll-parenting",
    "cat": "instagram",
    "title": "Engagement Questions — Parenting Creators",
    "desc": "Discussion-starters that get new & busy parents commenting.",
    "prompt": "Give 12 engaging questions to post for parenting content, audience new & busy parents.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "parenting"
    ]
  },
  {
    "id": "bp-ig-poll-pets",
    "cat": "instagram",
    "title": "Engagement Questions — Pet Care Creators",
    "desc": "Discussion-starters that get pet parents commenting.",
    "prompt": "Give 12 engaging questions to post for pet care content, audience pet parents.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "pets"
    ]
  },
  {
    "id": "bp-ig-poll-gardening",
    "cat": "instagram",
    "title": "Engagement Questions — Gardening Creators",
    "desc": "Discussion-starters that get plant lovers commenting.",
    "prompt": "Give 12 engaging questions to post for gardening & plants content, audience plant lovers.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "gardening"
    ]
  },
  {
    "id": "bp-ig-poll-astrology",
    "cat": "instagram",
    "title": "Engagement Questions — Astrology Creators",
    "desc": "Discussion-starters that get people seeking guidance commenting.",
    "prompt": "Give 12 engaging questions to post for astrology & spirituality content, audience people seeking guidance.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "astrology"
    ]
  },
  {
    "id": "bp-ig-poll-motivation",
    "cat": "instagram",
    "title": "Engagement Questions — Motivational Creators",
    "desc": "Discussion-starters that get people who want to level up commenting.",
    "prompt": "Give 12 engaging questions to post for motivation & self-help content, audience people who want to level up.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "motivation"
    ]
  },
  {
    "id": "bp-ig-poll-food",
    "cat": "instagram",
    "title": "Engagement Questions — Food Bloggers",
    "desc": "Discussion-starters that get home cooks & foodies commenting.",
    "prompt": "Give 12 engaging questions to post for food & recipe content, audience home cooks & foodies.\nMake them easy and fun to answer, likely to get lots of comments, and useful for understanding my audience. Avoid generic filler.",
    "tags": [
      "engagement",
      "community",
      "food"
    ]
  },
  {
    "id": "yt-script-hook",
    "cat": "youtube",
    "title": "YouTube Script That Hooks in 30 Seconds",
    "desc": "Full script skeleton with a retention-first intro so viewers don't click away.",
    "prompt": "Write a full YouTube script outline on: [TOPIC]. Niche: [NICHE]. Length: [LENGTH]. Audience: [AUDIENCE].\n- HOOK (0-30s): an open loop that promises a payoff\n- INTRO (30-60s): why it matters + what they'll get (no long self-intro)\n- BODY: [NUMBER] key points, each a talking-point bullet + quick example\n- RETENTION: a \"but wait\" twist in the middle\n- CTA: ask for ONE specific thing\nSpoken, natural tone, short sentences I can read aloud.",
    "tags": [
      "script",
      "retention",
      "long-form"
    ]
  },
  {
    "id": "yt-titles",
    "cat": "youtube",
    "title": "12 Click-Worthy YouTube Titles",
    "desc": "High-CTR titles using curiosity, numbers and stakes — without clickbait lies.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] in the [NICHE] niche.\nMix: numbers, \"how I/you\", curiosity gap, mistake/warning, result-driven.\nUnder 60 chars, no fake claims (must match: [WHAT THE VIDEO DELIVERS]). Mark the top 3 with 🔥 + a one-line why.",
    "tags": [
      "titles",
      "ctr"
    ]
  },
  {
    "id": "yt-thumbnail-text",
    "cat": "youtube",
    "title": "Thumbnail Text That Stops the Scroll",
    "desc": "Punchy 3-4 word thumbnail overlays that pair with your title.",
    "prompt": "Give 6 thumbnail text options for a video titled \"[TITLE]\".\nMax 4 words each, high emotion, must NOT repeat the title (add to it).\nSuggest one facial expression/visual for each. Format: Thumbnail Text | Visual Idea.",
    "tags": [
      "thumbnail",
      "ctr",
      "design"
    ]
  },
  {
    "id": "yt-description",
    "cat": "youtube",
    "title": "SEO YouTube Description + Tags",
    "desc": "A description that ranks, plus timestamps and tags, in one shot.",
    "prompt": "Write a YouTube description for \"[TITLE]\" about [TOPIC]. Main keyword: [KEYWORD].\nInclude: a 2-sentence summary with the keyword in line 1; 3-5 \"what you'll learn\" bullets; a timestamps placeholder; a subscribe CTA + links [LINK 1], [LINK 2]; and 15 SEO tags as a comma list. Skimmable, not stuffed.",
    "tags": [
      "seo",
      "description",
      "tags"
    ]
  },
  {
    "id": "yt-shorts-from-long",
    "cat": "youtube",
    "title": "Turn 1 Long Video into 5 Shorts",
    "desc": "Repurpose a single video into a week of Shorts/Reels scripts.",
    "prompt": "Here is my video transcript/summary:\n\"\"\"\n[PASTE TRANSCRIPT OR SUMMARY]\n\"\"\"\nPull 5 short-form ideas. For each: a hook (max 8 words), a 3-4 line script for 20-30s, the moment it's based on, and an on-screen caption. Each must stand alone.",
    "tags": [
      "repurpose",
      "shorts"
    ]
  },
  {
    "id": "yt-faceless",
    "cat": "youtube",
    "title": "Faceless YouTube Channel Ideas",
    "desc": "Formats and ideas to grow without showing your face.",
    "prompt": "I want a faceless YouTube channel in the [NICHE] niche, audience [AUDIENCE].\nGive 5 faceless formats that work (text-on-screen, voiceover + b-roll, screen recording, etc.), 10 specific video ideas, and a tool suggestion per format. Beginner-friendly with just a phone/laptop.",
    "tags": [
      "faceless",
      "ideas"
    ]
  },
  {
    "id": "yt-script-doctor",
    "cat": "youtube",
    "title": "Fix My Boring Script",
    "desc": "Paste a draft, get a punchier, higher-retention rewrite with notes.",
    "prompt": "My draft script:\n\"\"\"\n[PASTE DRAFT]\n\"\"\"\nNiche: [NICHE]. Audience: [AUDIENCE].\nRewrite punchier (shorter sentences, stronger hook, clearer CTA), cut boring/repetitive parts, keep my voice. Then list 3 specific changes you made and why.",
    "tags": [
      "editing",
      "rewrite",
      "retention"
    ]
  },
  {
    "id": "yt-video-ideas-30",
    "cat": "youtube",
    "title": "30 Video Ideas for the Next Quarter",
    "desc": "A backlog of proven video angles so you never run dry.",
    "prompt": "Give 30 YouTube video ideas for my [NICHE] channel, audience [AUDIENCE].\nSpread across: how-to, listicle, story/journey, myth-busting, reaction/review, beginner-to-pro, and trending. For each: a title + one-line angle. Numbered, labelled by type.",
    "tags": [
      "ideas",
      "planning"
    ]
  },
  {
    "id": "yt-intro-rewrite",
    "cat": "youtube",
    "title": "Rewrite My Intro to Stop Drop-Off",
    "desc": "Fix the first 30 seconds where most viewers leave.",
    "prompt": "Here's my current video intro:\n\"\"\"\n[PASTE INTRO]\n\"\"\"\nTopic: [TOPIC]. Rewrite the first 30 seconds to hook harder: open a loop, promise a payoff, cut the fluff, and tease what's coming. Give me 2 versions.",
    "tags": [
      "retention",
      "intro"
    ]
  },
  {
    "id": "yt-community-post",
    "cat": "youtube",
    "title": "Pinned Comment & Community Post",
    "desc": "Boost watch-time and engagement between uploads.",
    "prompt": "For my latest video \"[TITLE]\" (niche [NICHE], goal [GOAL]): write a pinned comment that asks a specific question to spark replies, and a Community tab post (poll or update) to keep my channel active between uploads. Casual and engaging.",
    "tags": [
      "engagement",
      "community"
    ]
  },
  {
    "id": "yt-series-plan",
    "cat": "youtube",
    "title": "Plan a YouTube Series",
    "desc": "Turn one topic into a binge-able multi-part series.",
    "prompt": "Help me plan a YouTube series on [BROAD TOPIC] for the [NICHE] niche, audience [AUDIENCE].\nGive a series title, [NUMBER] episode titles in a logical order, a one-line hook for each, and how each episode links to the next to keep people watching.",
    "tags": [
      "series",
      "strategy"
    ]
  },
  {
    "id": "yt-research-outline",
    "cat": "youtube",
    "title": "Deep Research Outline for a Video",
    "desc": "A structured research brief so your video is accurate and complete.",
    "prompt": "I'm making a video on [TOPIC]. Audience: [AUDIENCE].\nGive me a research outline: the 6-8 key questions the video must answer, common misconceptions to address, sub-points to cover, and 3 angles that would make my take unique. (I'll verify facts myself.)",
    "tags": [
      "research",
      "outline"
    ]
  },
  {
    "id": "yt-collab-pitch",
    "cat": "youtube",
    "title": "Pitch a Collab to Another YouTuber",
    "desc": "A message to propose a mutually beneficial collab.",
    "prompt": "Write a message pitching a YouTube collab to [CREATOR].\nThem: [THEIR NICHE WHY THEY FIT]. Me: [MY NICHE SIZE]. Idea: [COLLAB IDEA].\nSpecific genuine compliment, clear mutual benefit, low pressure, easy yes. Under 80 words.",
    "tags": [
      "collab",
      "networking"
    ]
  },
  {
    "id": "yt-channel-trailer",
    "cat": "youtube",
    "title": "Channel Trailer Script (60s)",
    "desc": "The short trailer that converts visitors into subscribers.",
    "prompt": "Write a 60-second channel trailer script.\nChannel: [WHAT IT S ABOUT]. Who it's for: [AUDIENCE]. What they'll get: [VALUE]. Upload schedule: [SCHEDULE].\nHook in 5 seconds, show the value fast, end with \"Subscribe so you don't miss it\". Energetic and clear.",
    "tags": [
      "trailer",
      "conversion"
    ]
  },
  {
    "id": "yt-chapters",
    "cat": "youtube",
    "title": "Write Chapters / Timestamps",
    "desc": "Generate clean chapter titles from your script or summary.",
    "prompt": "Here's my video script/summary:\n\"\"\"\n[PASTE SCRIPT OR SUMMARY]\n\"\"\"\nCreate YouTube chapters (timestamps + short titles). Make titles curiosity-driven but clear, keyword-aware for [KEYWORD], and easy to scan. Start with 0:00 Intro.",
    "tags": [
      "chapters",
      "seo"
    ]
  },
  {
    "id": "yt-ab-titles",
    "cat": "youtube",
    "title": "A/B Test 2 Title + Thumbnail Concepts",
    "desc": "Two complete packaging concepts to test against each other.",
    "prompt": "For my video on [TOPIC] (niche [NICHE]): give me 2 distinct packaging concepts to A/B test.\nEach: a title (under 60 chars), thumbnail text (max 4 words), thumbnail visual idea, and the emotional angle. Tell me which you'd bet on and why.",
    "tags": [
      "packaging",
      "testing"
    ]
  },
  {
    "id": "yt-hook-bank",
    "cat": "youtube",
    "title": "20 YouTube Hook Templates",
    "desc": "Fill-in hook templates for the crucial first line.",
    "prompt": "Give 20 reusable YouTube hook templates (fill-in-the-blank) for the [NICHE] niche.\nMix: bold claim, question, mistake, \"in this video you'll\", stat, story tease, contrarian. Show each as a template + one filled example for [TOPIC].",
    "tags": [
      "hooks",
      "retention"
    ]
  },
  {
    "id": "yt-end-screen",
    "cat": "youtube",
    "title": "End Screen CTA That Keeps Viewers",
    "desc": "A closing 20 seconds that drives the next watch + subscribe.",
    "prompt": "Write the last 20 seconds of my video \"[TITLE]\".\nGoal: get them to watch [NEXT VIDEO TOPIC] and subscribe.\nRecap the value, tease the next video with a curiosity gap, and give a natural subscribe ask. Don't be cringe or beggy.",
    "tags": [
      "cta",
      "retention"
    ]
  },
  {
    "id": "yt-tutorial-structure",
    "cat": "youtube",
    "title": "Structure a How-To / Tutorial Video",
    "desc": "A clear, follow-along structure for tutorials.",
    "prompt": "Structure a tutorial video: \"How to [TASK]\". Audience skill level: [LEVEL]. Length: [LENGTH].\nGive: hook (the end result they'll get), what they need, numbered steps with what to say + show, common mistakes to warn about, and a recap. Keep it easy to follow.",
    "tags": [
      "tutorial",
      "structure"
    ]
  },
  {
    "id": "yt-review-video",
    "cat": "youtube",
    "title": "Product Review Video Script",
    "desc": "An honest, structured review that builds trust (and converts).",
    "prompt": "Write a review video script for [PRODUCT]. Audience: [AUDIENCE]. My honest take: [YOUR OPINION].\nInclude: a hook, who it's for, pros, cons, who should skip it, and a verdict. Keep it honest and balanced. Add a natural spot to mention an affiliate link [LINK].",
    "tags": [
      "review",
      "affiliate"
    ]
  },
  {
    "id": "yt-shorts-script",
    "cat": "youtube",
    "title": "YouTube Shorts Script (Under 45s)",
    "desc": "A tight Shorts script engineered for loops and watch-time.",
    "prompt": "Write a YouTube Shorts script (under 45s) on [TOPIC]. Niche: [NICHE]. Audience: [AUDIENCE].\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, and end in a way that loops or prompts a follow. Under 90 spoken words.",
    "tags": [
      "shorts",
      "script"
    ]
  },
  {
    "id": "yt-30day-channel",
    "cat": "youtube",
    "title": "30-Day Plan to Start a Channel",
    "desc": "A realistic month to launch a channel from zero.",
    "prompt": "Build a 30-day plan to start a YouTube channel in the [NICHE] niche.\nStarting point: [WHERE YOU ARE]. Time daily: [TIME]. Goal in 30 days: [GOAL].\nWeek-by-week: a focus, daily actions (research/film/edit/learn), and one metric to track. Realistic for one person.",
    "tags": [
      "growth",
      "beginner",
      "plan"
    ]
  },
  {
    "id": "yt-repurpose-blog",
    "cat": "youtube",
    "title": "Turn a Video into a Blog Post",
    "desc": "Repurpose a video transcript into an SEO blog post.",
    "prompt": "Turn this video transcript into an SEO blog post:\n\"\"\"\n[PASTE TRANSCRIPT]\n\"\"\"\nTarget keyword: [KEYWORD]. Give an SEO title, intro, H2/H3 sections, a key-takeaways box, and a CTA back to the video. Clean it up so it reads as writing, not speech.",
    "tags": [
      "repurpose",
      "seo",
      "blog"
    ]
  },
  {
    "id": "yt-niche-down",
    "cat": "youtube",
    "title": "Help Me Niche Down My Channel",
    "desc": "Narrow a broad channel into something that actually grows.",
    "prompt": "My channel covers [BROAD TOPIC] but isn't growing. About me: [ABOUT YOU]. What I enjoy: [WHAT YOU LIKE]. Audience: [AUDIENCE].\nGive 3 specific niche angles I could own (with positioning), pros/cons of each, your recommendation, and 5 starter video ideas for it.",
    "tags": [
      "strategy",
      "niche"
    ]
  },
  {
    "id": "yt-monetization",
    "cat": "youtube",
    "title": "Monetization Plan for My Channel",
    "desc": "Map realistic ways to earn from your channel beyond AdSense.",
    "prompt": "My channel: [NICHE], [SUBSCRIBERS] subs, audience [AUDIENCE].\nSuggest a realistic monetization roadmap: AdSense, sponsorships, affiliates, my own product/service, memberships. For each: when to start, rough potential, and a first step. Be honest about what fits my size.",
    "tags": [
      "money",
      "strategy"
    ]
  },
  {
    "id": "yt-comment-pin-reply",
    "cat": "youtube",
    "title": "Reply to Negative / Tricky Comments",
    "desc": "Calm, classy replies to criticism and trolls.",
    "prompt": "Here's a comment on my video: \"[PASTE COMMENT]\".\nContext: [WHAT THE VIDEO WAS ABOUT].\nGive me 3 reply options: one that addresses fair criticism gracefully, one that defuses a troll with humour, and one short classy non-engagement. Keep my reputation intact.",
    "tags": [
      "community",
      "replies"
    ]
  },
  {
    "id": "yt-video-from-trend",
    "cat": "youtube",
    "title": "Video Idea from a Trending Topic",
    "desc": "Ride a trend with a video angle that fits your niche.",
    "prompt": "Trending right now: [TREND NEWS]. My niche: [NICHE]. Audience: [AUDIENCE].\nGive 3 timely video angles connecting this trend to my niche tastefully. For each: a title, the hook, and a quick outline. Avoid anything tone-deaf.",
    "tags": [
      "trend",
      "timely"
    ]
  },
  {
    "id": "yt-evergreen-vs-trend",
    "cat": "youtube",
    "title": "Balance Evergreen vs Trending Content",
    "desc": "A content mix that grows long-term and rides spikes.",
    "prompt": "Help me plan a content mix for my [NICHE] channel.\nGive me 5 evergreen video ideas (always relevant, SEO-friendly) and 5 trend/timely ideas, and explain the ideal ratio to post for steady growth + occasional spikes. Audience: [AUDIENCE].",
    "tags": [
      "strategy",
      "planning"
    ]
  },
  {
    "id": "yt-playlist-strategy",
    "cat": "youtube",
    "title": "Playlist Strategy for Binge-Watching",
    "desc": "Organise videos into playlists that boost session time.",
    "prompt": "My channel covers [TOPICS] in the [NICHE] niche, audience [AUDIENCE].\nSuggest a playlist structure that keeps viewers binge-watching: playlist titles, what goes in each, the order, and an optimised description for the most important playlist. Tie it to my goal: [GOAL].",
    "tags": [
      "playlists",
      "strategy"
    ]
  },
  {
    "id": "yt-shorts-ideas-30",
    "cat": "youtube",
    "title": "30 YouTube Shorts Ideas",
    "desc": "A month of Shorts concepts to grow your channel fast.",
    "prompt": "Give 30 YouTube Shorts ideas for my [NICHE] channel, audience [AUDIENCE].\nMix: quick tips, myth-busting, \"did you know\", hooks that tease a long video, reactions, and trends. For each: a title + a one-line hook. Numbered. Bonus: mark 5 that could funnel viewers to long-form.",
    "tags": [
      "shorts",
      "ideas"
    ]
  },
  {
    "id": "bp-yt-titles-fitness",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Fitness Coaches",
    "desc": "12 click-worthy titles for fitness coaching.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a fitness coaching channel, audience people who want to get fit.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "fitness"
    ]
  },
  {
    "id": "bp-yt-titles-yoga",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Yoga Instructors",
    "desc": "12 click-worthy titles for yoga teaching.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a yoga teaching channel, audience people seeking calm & flexibility.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "yoga"
    ]
  },
  {
    "id": "bp-yt-titles-nutrition",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Nutritionists",
    "desc": "12 click-worthy titles for nutrition & diet coaching.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a nutrition & diet coaching channel, audience people who want to eat healthier.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "nutrition"
    ]
  },
  {
    "id": "bp-yt-titles-homebakery",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Home Bakers",
    "desc": "12 click-worthy titles for a home baking business.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a home baking business channel, audience people who order cakes & desserts.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "homebakery"
    ]
  },
  {
    "id": "bp-yt-titles-cloudkitchen",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Cloud Kitchens",
    "desc": "12 click-worthy titles for a cloud kitchen.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a cloud kitchen channel, audience hungry locals ordering online.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-yt-titles-cafe",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Cafés & Restaurants",
    "desc": "12 click-worthy titles for a café or restaurant.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a café or restaurant channel, audience local foodies.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "cafe"
    ]
  },
  {
    "id": "bp-yt-titles-fashion",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Fashion Brands",
    "desc": "12 click-worthy titles for a fashion & clothing brand.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a fashion & clothing brand channel, audience style-conscious shoppers.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "fashion"
    ]
  },
  {
    "id": "bp-yt-titles-jewellery",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Jewellery Brands",
    "desc": "12 click-worthy titles for a jewellery business.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a jewellery business channel, audience people shopping for jewellery.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "jewellery"
    ]
  },
  {
    "id": "bp-yt-titles-handmade",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Handmade & Craft Sellers",
    "desc": "12 click-worthy titles for a handmade craft business.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a handmade craft business channel, audience people who love handmade gifts.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "handmade"
    ]
  },
  {
    "id": "bp-yt-titles-skincare",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Skincare Brands",
    "desc": "12 click-worthy titles for a skincare brand.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a skincare brand channel, audience people who want better skin.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "skincare"
    ]
  },
  {
    "id": "bp-yt-titles-makeup",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Makeup Artists",
    "desc": "12 click-worthy titles for a makeup artistry business.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a makeup artistry business channel, audience brides & beauty lovers.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "makeup"
    ]
  },
  {
    "id": "bp-yt-titles-salon",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Salons & Spas",
    "desc": "12 click-worthy titles for a salon or spa.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a salon or spa channel, audience people booking beauty services.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "salon"
    ]
  },
  {
    "id": "bp-yt-titles-travel",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Travel Creators",
    "desc": "12 click-worthy titles for travel content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a travel content channel, audience people planning trips.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "travel"
    ]
  },
  {
    "id": "bp-yt-titles-photography",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Photographers",
    "desc": "12 click-worthy titles for a photography business.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a photography business channel, audience couples & brands needing shoots.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "photography"
    ]
  },
  {
    "id": "bp-yt-titles-realestate",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Real Estate Agents",
    "desc": "12 click-worthy titles for real estate.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a real estate channel, audience home buyers & sellers.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "realestate"
    ]
  },
  {
    "id": "bp-yt-titles-interior",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Interior Designers",
    "desc": "12 click-worthy titles for interior design.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a interior design channel, audience homeowners renovating.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "interior"
    ]
  },
  {
    "id": "bp-yt-titles-finance",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Personal Finance Creators",
    "desc": "12 click-worthy titles for personal finance content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a personal finance content channel, audience people wanting to manage money.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "finance"
    ]
  },
  {
    "id": "bp-yt-titles-trading",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Stock Market Educators",
    "desc": "12 click-worthy titles for stock market education.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a stock market education channel, audience new investors & traders.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "trading"
    ]
  },
  {
    "id": "bp-yt-titles-edtech",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Online Tutors",
    "desc": "12 click-worthy titles for online tutoring.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a online tutoring channel, audience students & parents.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "edtech"
    ]
  },
  {
    "id": "bp-yt-titles-examprep",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Exam Prep Creators",
    "desc": "12 click-worthy titles for exam prep content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a exam prep content channel, audience students cracking competitive exams.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "examprep"
    ]
  },
  {
    "id": "bp-yt-titles-coding",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Coding Educators",
    "desc": "12 click-worthy titles for coding & tech education.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a coding & tech education channel, audience aspiring developers.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "coding"
    ]
  },
  {
    "id": "bp-yt-titles-gadgets",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Tech Reviewers",
    "desc": "12 click-worthy titles for tech & gadget reviews.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a tech & gadget reviews channel, audience people deciding what to buy.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "gadgets"
    ]
  },
  {
    "id": "bp-yt-titles-gaming",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Gaming Creators",
    "desc": "12 click-worthy titles for gaming content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a gaming content channel, audience gamers & fans.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "gaming"
    ]
  },
  {
    "id": "bp-yt-titles-saas",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — SaaS Founders",
    "desc": "12 click-worthy titles for a SaaS product.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a SaaS product channel, audience businesses that need the tool.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "saas"
    ]
  },
  {
    "id": "bp-yt-titles-freelance",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Freelancers",
    "desc": "12 click-worthy titles for freelancing services.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a freelancing services channel, audience clients who need the service.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "freelance"
    ]
  },
  {
    "id": "bp-yt-titles-agency",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Marketing Agencies",
    "desc": "12 click-worthy titles for a marketing agency.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a a marketing agency channel, audience business owners who want growth.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "agency"
    ]
  },
  {
    "id": "bp-yt-titles-parenting",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Parenting Creators",
    "desc": "12 click-worthy titles for parenting content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a parenting content channel, audience new & busy parents.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "parenting"
    ]
  },
  {
    "id": "bp-yt-titles-pets",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Pet Care Creators",
    "desc": "12 click-worthy titles for pet care content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a pet care content channel, audience pet parents.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "pets"
    ]
  },
  {
    "id": "bp-yt-titles-gardening",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Gardening Creators",
    "desc": "12 click-worthy titles for gardening & plants content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a gardening & plants content channel, audience plant lovers.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "gardening"
    ]
  },
  {
    "id": "bp-yt-titles-astrology",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Astrology Creators",
    "desc": "12 click-worthy titles for astrology & spirituality content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a astrology & spirituality content channel, audience people seeking guidance.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "astrology"
    ]
  },
  {
    "id": "bp-yt-titles-motivation",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Motivational Creators",
    "desc": "12 click-worthy titles for motivation & self-help content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a motivation & self-help content channel, audience people who want to level up.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "motivation"
    ]
  },
  {
    "id": "bp-yt-titles-food",
    "cat": "youtube",
    "title": "High-CTR YouTube Titles — Food Bloggers",
    "desc": "12 click-worthy titles for food & recipe content.",
    "prompt": "Give 12 high-CTR YouTube titles for a video about [TOPIC] for a food & recipe content channel, audience home cooks & foodies.\nMix numbers, how-to, curiosity, and result-driven angles. Under 60 chars. Mark the 3 strongest.",
    "tags": [
      "youtube",
      "titles",
      "food"
    ]
  },
  {
    "id": "bp-yt-script-fitness",
    "cat": "youtube",
    "title": "YouTube Script Outline — Fitness Coaches",
    "desc": "A retention-first script outline for fitness coaching.",
    "prompt": "Write a YouTube script outline about [TOPIC] for fitness coaching, audience people who want to get fit.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "fitness"
    ]
  },
  {
    "id": "bp-yt-script-yoga",
    "cat": "youtube",
    "title": "YouTube Script Outline — Yoga Instructors",
    "desc": "A retention-first script outline for yoga teaching.",
    "prompt": "Write a YouTube script outline about [TOPIC] for yoga teaching, audience people seeking calm & flexibility.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "yoga"
    ]
  },
  {
    "id": "bp-yt-script-nutrition",
    "cat": "youtube",
    "title": "YouTube Script Outline — Nutritionists",
    "desc": "A retention-first script outline for nutrition & diet coaching.",
    "prompt": "Write a YouTube script outline about [TOPIC] for nutrition & diet coaching, audience people who want to eat healthier.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "nutrition"
    ]
  },
  {
    "id": "bp-yt-script-homebakery",
    "cat": "youtube",
    "title": "YouTube Script Outline — Home Bakers",
    "desc": "A retention-first script outline for a home baking business.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a home baking business, audience people who order cakes & desserts.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "homebakery"
    ]
  },
  {
    "id": "bp-yt-script-cloudkitchen",
    "cat": "youtube",
    "title": "YouTube Script Outline — Cloud Kitchens",
    "desc": "A retention-first script outline for a cloud kitchen.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a cloud kitchen, audience hungry locals ordering online.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-yt-script-cafe",
    "cat": "youtube",
    "title": "YouTube Script Outline — Cafés & Restaurants",
    "desc": "A retention-first script outline for a café or restaurant.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a café or restaurant, audience local foodies.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "cafe"
    ]
  },
  {
    "id": "bp-yt-script-fashion",
    "cat": "youtube",
    "title": "YouTube Script Outline — Fashion Brands",
    "desc": "A retention-first script outline for a fashion & clothing brand.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a fashion & clothing brand, audience style-conscious shoppers.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "fashion"
    ]
  },
  {
    "id": "bp-yt-script-jewellery",
    "cat": "youtube",
    "title": "YouTube Script Outline — Jewellery Brands",
    "desc": "A retention-first script outline for a jewellery business.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a jewellery business, audience people shopping for jewellery.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "jewellery"
    ]
  },
  {
    "id": "bp-yt-script-handmade",
    "cat": "youtube",
    "title": "YouTube Script Outline — Handmade & Craft Sellers",
    "desc": "A retention-first script outline for a handmade craft business.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a handmade craft business, audience people who love handmade gifts.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "handmade"
    ]
  },
  {
    "id": "bp-yt-script-skincare",
    "cat": "youtube",
    "title": "YouTube Script Outline — Skincare Brands",
    "desc": "A retention-first script outline for a skincare brand.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a skincare brand, audience people who want better skin.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "skincare"
    ]
  },
  {
    "id": "bp-yt-script-makeup",
    "cat": "youtube",
    "title": "YouTube Script Outline — Makeup Artists",
    "desc": "A retention-first script outline for a makeup artistry business.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a makeup artistry business, audience brides & beauty lovers.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "makeup"
    ]
  },
  {
    "id": "bp-yt-script-salon",
    "cat": "youtube",
    "title": "YouTube Script Outline — Salons & Spas",
    "desc": "A retention-first script outline for a salon or spa.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a salon or spa, audience people booking beauty services.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "salon"
    ]
  },
  {
    "id": "bp-yt-script-travel",
    "cat": "youtube",
    "title": "YouTube Script Outline — Travel Creators",
    "desc": "A retention-first script outline for travel content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for travel content, audience people planning trips.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "travel"
    ]
  },
  {
    "id": "bp-yt-script-photography",
    "cat": "youtube",
    "title": "YouTube Script Outline — Photographers",
    "desc": "A retention-first script outline for a photography business.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a photography business, audience couples & brands needing shoots.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "photography"
    ]
  },
  {
    "id": "bp-yt-script-realestate",
    "cat": "youtube",
    "title": "YouTube Script Outline — Real Estate Agents",
    "desc": "A retention-first script outline for real estate.",
    "prompt": "Write a YouTube script outline about [TOPIC] for real estate, audience home buyers & sellers.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "realestate"
    ]
  },
  {
    "id": "bp-yt-script-interior",
    "cat": "youtube",
    "title": "YouTube Script Outline — Interior Designers",
    "desc": "A retention-first script outline for interior design.",
    "prompt": "Write a YouTube script outline about [TOPIC] for interior design, audience homeowners renovating.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "interior"
    ]
  },
  {
    "id": "bp-yt-script-finance",
    "cat": "youtube",
    "title": "YouTube Script Outline — Personal Finance Creators",
    "desc": "A retention-first script outline for personal finance content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for personal finance content, audience people wanting to manage money.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "finance"
    ]
  },
  {
    "id": "bp-yt-script-trading",
    "cat": "youtube",
    "title": "YouTube Script Outline — Stock Market Educators",
    "desc": "A retention-first script outline for stock market education.",
    "prompt": "Write a YouTube script outline about [TOPIC] for stock market education, audience new investors & traders.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "trading"
    ]
  },
  {
    "id": "bp-yt-script-edtech",
    "cat": "youtube",
    "title": "YouTube Script Outline — Online Tutors",
    "desc": "A retention-first script outline for online tutoring.",
    "prompt": "Write a YouTube script outline about [TOPIC] for online tutoring, audience students & parents.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "edtech"
    ]
  },
  {
    "id": "bp-yt-script-examprep",
    "cat": "youtube",
    "title": "YouTube Script Outline — Exam Prep Creators",
    "desc": "A retention-first script outline for exam prep content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for exam prep content, audience students cracking competitive exams.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "examprep"
    ]
  },
  {
    "id": "bp-yt-script-coding",
    "cat": "youtube",
    "title": "YouTube Script Outline — Coding Educators",
    "desc": "A retention-first script outline for coding & tech education.",
    "prompt": "Write a YouTube script outline about [TOPIC] for coding & tech education, audience aspiring developers.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "coding"
    ]
  },
  {
    "id": "bp-yt-script-gadgets",
    "cat": "youtube",
    "title": "YouTube Script Outline — Tech Reviewers",
    "desc": "A retention-first script outline for tech & gadget reviews.",
    "prompt": "Write a YouTube script outline about [TOPIC] for tech & gadget reviews, audience people deciding what to buy.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "gadgets"
    ]
  },
  {
    "id": "bp-yt-script-gaming",
    "cat": "youtube",
    "title": "YouTube Script Outline — Gaming Creators",
    "desc": "A retention-first script outline for gaming content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for gaming content, audience gamers & fans.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "gaming"
    ]
  },
  {
    "id": "bp-yt-script-saas",
    "cat": "youtube",
    "title": "YouTube Script Outline — SaaS Founders",
    "desc": "A retention-first script outline for a SaaS product.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a SaaS product, audience businesses that need the tool.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "saas"
    ]
  },
  {
    "id": "bp-yt-script-freelance",
    "cat": "youtube",
    "title": "YouTube Script Outline — Freelancers",
    "desc": "A retention-first script outline for freelancing services.",
    "prompt": "Write a YouTube script outline about [TOPIC] for freelancing services, audience clients who need the service.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "freelance"
    ]
  },
  {
    "id": "bp-yt-script-agency",
    "cat": "youtube",
    "title": "YouTube Script Outline — Marketing Agencies",
    "desc": "A retention-first script outline for a marketing agency.",
    "prompt": "Write a YouTube script outline about [TOPIC] for a marketing agency, audience business owners who want growth.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "agency"
    ]
  },
  {
    "id": "bp-yt-script-parenting",
    "cat": "youtube",
    "title": "YouTube Script Outline — Parenting Creators",
    "desc": "A retention-first script outline for parenting content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for parenting content, audience new & busy parents.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "parenting"
    ]
  },
  {
    "id": "bp-yt-script-pets",
    "cat": "youtube",
    "title": "YouTube Script Outline — Pet Care Creators",
    "desc": "A retention-first script outline for pet care content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for pet care content, audience pet parents.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "pets"
    ]
  },
  {
    "id": "bp-yt-script-gardening",
    "cat": "youtube",
    "title": "YouTube Script Outline — Gardening Creators",
    "desc": "A retention-first script outline for gardening & plants content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for gardening & plants content, audience plant lovers.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "gardening"
    ]
  },
  {
    "id": "bp-yt-script-astrology",
    "cat": "youtube",
    "title": "YouTube Script Outline — Astrology Creators",
    "desc": "A retention-first script outline for astrology & spirituality content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for astrology & spirituality content, audience people seeking guidance.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "astrology"
    ]
  },
  {
    "id": "bp-yt-script-motivation",
    "cat": "youtube",
    "title": "YouTube Script Outline — Motivational Creators",
    "desc": "A retention-first script outline for motivation & self-help content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for motivation & self-help content, audience people who want to level up.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "motivation"
    ]
  },
  {
    "id": "bp-yt-script-food",
    "cat": "youtube",
    "title": "YouTube Script Outline — Food Bloggers",
    "desc": "A retention-first script outline for food & recipe content.",
    "prompt": "Write a YouTube script outline about [TOPIC] for food & recipe content, audience home cooks & foodies.\nHook (0-30s), intro (why it matters), [NUMBER] key points with examples, a mid-video retention twist, and a CTA. Spoken, natural tone.",
    "tags": [
      "youtube",
      "script",
      "food"
    ]
  },
  {
    "id": "bp-yt-shorts-fitness",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Fitness Coaches",
    "desc": "A tight Shorts script for fitness coaching.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for fitness coaching, audience people who want to get fit.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "fitness"
    ]
  },
  {
    "id": "bp-yt-shorts-yoga",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Yoga Instructors",
    "desc": "A tight Shorts script for yoga teaching.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for yoga teaching, audience people seeking calm & flexibility.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "yoga"
    ]
  },
  {
    "id": "bp-yt-shorts-nutrition",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Nutritionists",
    "desc": "A tight Shorts script for nutrition & diet coaching.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for nutrition & diet coaching, audience people who want to eat healthier.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "nutrition"
    ]
  },
  {
    "id": "bp-yt-shorts-homebakery",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Home Bakers",
    "desc": "A tight Shorts script for a home baking business.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a home baking business, audience people who order cakes & desserts.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "homebakery"
    ]
  },
  {
    "id": "bp-yt-shorts-cloudkitchen",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Cloud Kitchens",
    "desc": "A tight Shorts script for a cloud kitchen.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a cloud kitchen, audience hungry locals ordering online.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-yt-shorts-cafe",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Cafés & Restaurants",
    "desc": "A tight Shorts script for a café or restaurant.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a café or restaurant, audience local foodies.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "cafe"
    ]
  },
  {
    "id": "bp-yt-shorts-fashion",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Fashion Brands",
    "desc": "A tight Shorts script for a fashion & clothing brand.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a fashion & clothing brand, audience style-conscious shoppers.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "fashion"
    ]
  },
  {
    "id": "bp-yt-shorts-jewellery",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Jewellery Brands",
    "desc": "A tight Shorts script for a jewellery business.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a jewellery business, audience people shopping for jewellery.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "jewellery"
    ]
  },
  {
    "id": "bp-yt-shorts-handmade",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Handmade & Craft Sellers",
    "desc": "A tight Shorts script for a handmade craft business.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a handmade craft business, audience people who love handmade gifts.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "handmade"
    ]
  },
  {
    "id": "bp-yt-shorts-skincare",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Skincare Brands",
    "desc": "A tight Shorts script for a skincare brand.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a skincare brand, audience people who want better skin.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "skincare"
    ]
  },
  {
    "id": "bp-yt-shorts-makeup",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Makeup Artists",
    "desc": "A tight Shorts script for a makeup artistry business.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a makeup artistry business, audience brides & beauty lovers.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "makeup"
    ]
  },
  {
    "id": "bp-yt-shorts-salon",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Salons & Spas",
    "desc": "A tight Shorts script for a salon or spa.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a salon or spa, audience people booking beauty services.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "salon"
    ]
  },
  {
    "id": "bp-yt-shorts-travel",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Travel Creators",
    "desc": "A tight Shorts script for travel content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for travel content, audience people planning trips.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "travel"
    ]
  },
  {
    "id": "bp-yt-shorts-photography",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Photographers",
    "desc": "A tight Shorts script for a photography business.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a photography business, audience couples & brands needing shoots.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "photography"
    ]
  },
  {
    "id": "bp-yt-shorts-realestate",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Real Estate Agents",
    "desc": "A tight Shorts script for real estate.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for real estate, audience home buyers & sellers.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "realestate"
    ]
  },
  {
    "id": "bp-yt-shorts-interior",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Interior Designers",
    "desc": "A tight Shorts script for interior design.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for interior design, audience homeowners renovating.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "interior"
    ]
  },
  {
    "id": "bp-yt-shorts-finance",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Personal Finance Creators",
    "desc": "A tight Shorts script for personal finance content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for personal finance content, audience people wanting to manage money.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "finance"
    ]
  },
  {
    "id": "bp-yt-shorts-trading",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Stock Market Educators",
    "desc": "A tight Shorts script for stock market education.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for stock market education, audience new investors & traders.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "trading"
    ]
  },
  {
    "id": "bp-yt-shorts-edtech",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Online Tutors",
    "desc": "A tight Shorts script for online tutoring.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for online tutoring, audience students & parents.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "edtech"
    ]
  },
  {
    "id": "bp-yt-shorts-examprep",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Exam Prep Creators",
    "desc": "A tight Shorts script for exam prep content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for exam prep content, audience students cracking competitive exams.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "examprep"
    ]
  },
  {
    "id": "bp-yt-shorts-coding",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Coding Educators",
    "desc": "A tight Shorts script for coding & tech education.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for coding & tech education, audience aspiring developers.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "coding"
    ]
  },
  {
    "id": "bp-yt-shorts-gadgets",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Tech Reviewers",
    "desc": "A tight Shorts script for tech & gadget reviews.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for tech & gadget reviews, audience people deciding what to buy.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "gadgets"
    ]
  },
  {
    "id": "bp-yt-shorts-gaming",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Gaming Creators",
    "desc": "A tight Shorts script for gaming content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for gaming content, audience gamers & fans.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "gaming"
    ]
  },
  {
    "id": "bp-yt-shorts-saas",
    "cat": "youtube",
    "title": "YouTube Shorts Script — SaaS Founders",
    "desc": "A tight Shorts script for a SaaS product.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a SaaS product, audience businesses that need the tool.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "saas"
    ]
  },
  {
    "id": "bp-yt-shorts-freelance",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Freelancers",
    "desc": "A tight Shorts script for freelancing services.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for freelancing services, audience clients who need the service.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "freelance"
    ]
  },
  {
    "id": "bp-yt-shorts-agency",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Marketing Agencies",
    "desc": "A tight Shorts script for a marketing agency.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for a marketing agency, audience business owners who want growth.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "agency"
    ]
  },
  {
    "id": "bp-yt-shorts-parenting",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Parenting Creators",
    "desc": "A tight Shorts script for parenting content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for parenting content, audience new & busy parents.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "parenting"
    ]
  },
  {
    "id": "bp-yt-shorts-pets",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Pet Care Creators",
    "desc": "A tight Shorts script for pet care content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for pet care content, audience pet parents.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "pets"
    ]
  },
  {
    "id": "bp-yt-shorts-gardening",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Gardening Creators",
    "desc": "A tight Shorts script for gardening & plants content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for gardening & plants content, audience plant lovers.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "gardening"
    ]
  },
  {
    "id": "bp-yt-shorts-astrology",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Astrology Creators",
    "desc": "A tight Shorts script for astrology & spirituality content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for astrology & spirituality content, audience people seeking guidance.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "astrology"
    ]
  },
  {
    "id": "bp-yt-shorts-motivation",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Motivational Creators",
    "desc": "A tight Shorts script for motivation & self-help content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for motivation & self-help content, audience people who want to level up.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "motivation"
    ]
  },
  {
    "id": "bp-yt-shorts-food",
    "cat": "youtube",
    "title": "YouTube Shorts Script — Food Bloggers",
    "desc": "A tight Shorts script for food & recipe content.",
    "prompt": "Write a YouTube Shorts script (under 45s) about [TOPIC] for food & recipe content, audience home cooks & foodies.\nHook in 2 seconds, deliver value fast in 3-4 beats with on-screen text, end so it loops or prompts a follow. Under 90 words.",
    "tags": [
      "shorts",
      "script",
      "food"
    ]
  },
  {
    "id": "rl-viral-script",
    "cat": "reels",
    "title": "Viral Reel Script (Hook → Value → CTA)",
    "desc": "A tight 30-second Reel script engineered for watch-time and shares.",
    "prompt": "Write a 30-second Reel script. Niche: [NICHE]. Topic: [TOPIC]. Audience: [AUDIENCE]. Language: [LANGUAGE].\n- HOOK (0-3s): a line that stops the scroll\n- VALUE (3-25s): 3 fast points with on-screen text each\n- CTA (25-30s): follow/save/comment a keyword\nSuggest a trending audio type + 3 on-screen overlays. Under 80 spoken words.",
    "tags": [
      "reel",
      "script",
      "viral"
    ]
  },
  {
    "id": "rl-ideas-30",
    "cat": "reels",
    "title": "30 Reel Ideas for the Next Month",
    "desc": "A full content calendar of Reel concepts so you never run dry.",
    "prompt": "Give 30 Reel ideas for my [NICHE] account, audience [AUDIENCE].\nBuckets: educational, relatable/funny, behind-the-scenes, myth-busting, trend-based, and sales/promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered, labelled by bucket.",
    "tags": [
      "ideas",
      "calendar"
    ]
  },
  {
    "id": "rl-trend-adapt",
    "cat": "reels",
    "title": "Adapt a Trend to My Niche",
    "desc": "Take any trending format and make it fit without looking forced.",
    "prompt": "A trend is going viral: [DESCRIBE TREND AUDIO FORMAT]. My niche: [NICHE]. Audience: [AUDIENCE].\nGive 3 ways to adapt it naturally. For each: the concept, on-screen text, and caption. Quick to shoot on a phone.",
    "tags": [
      "trend",
      "format"
    ]
  },
  {
    "id": "rl-hook-ab",
    "cat": "reels",
    "title": "A/B Test My Reel Hook",
    "desc": "Paste a hook, get sharper rewrites plus a verdict.",
    "prompt": "My hook: \"[YOUR HOOK]\". Niche: [NICHE]. Audience: [AUDIENCE].\n1) What's weak about it. 2) Rewrite 5 stronger versions (more curiosity/specificity). 3) Pick the best and explain in one line.",
    "tags": [
      "hooks",
      "testing"
    ]
  },
  {
    "id": "rl-3sec-hooks",
    "cat": "reels",
    "title": "25 First-3-Second Hooks",
    "desc": "The crucial opening lines that decide if a Reel goes viral.",
    "prompt": "Give 25 first-3-second Reel hooks for the [NICHE] niche, audience [AUDIENCE].\nMake them pattern-interrupting: bold claims, \"stop doing X\", surprising stats, \"POV\", questions. Max 10 words each. Numbered.",
    "tags": [
      "hooks",
      "viral"
    ]
  },
  {
    "id": "rl-talking-head",
    "cat": "reels",
    "title": "Talking-Head Reel Script",
    "desc": "A to-camera script that keeps people watching to the end.",
    "prompt": "Write a talking-head Reel script on [TOPIC] for the [NICHE] niche, audience [AUDIENCE].\nHook in the first line, deliver 3 punchy points, build a small loop so they rewatch, and end with a CTA. Conversational, the way I'd actually talk. Add on-screen text cues.",
    "tags": [
      "script",
      "talking head"
    ]
  },
  {
    "id": "rl-pov",
    "cat": "reels",
    "title": "POV / Relatable Reel Concepts",
    "desc": "Relatable \"POV\" style Reels that get shares and saves.",
    "prompt": "Give 10 \"POV\" or relatable Reel concepts for [AUDIENCE] in the [NICHE] niche.\nEach: the POV line/on-screen text, the scene/action, and a caption. Make them so relatable people tag a friend.",
    "tags": [
      "pov",
      "relatable"
    ]
  },
  {
    "id": "rl-listicle-reel",
    "cat": "reels",
    "title": "Fast Listicle Reel (\"3 things…\")",
    "desc": "Quick value-bomb list Reels that get saved.",
    "prompt": "Create a \"[NUMBER] [THINGS], e.g. 3 mistakes / 5 tools\" Reel for the [NICHE] niche, audience [AUDIENCE].\nTopic: [TOPIC]. Give the hook, each item with on-screen text + a one-line voiceover, and a \"save this\" CTA. Keep it fast.",
    "tags": [
      "list",
      "value"
    ]
  },
  {
    "id": "rl-storytime",
    "cat": "reels",
    "title": "Storytime Reel That Hooks",
    "desc": "A personal-story Reel structured to hold attention.",
    "prompt": "Help me script a storytime Reel about [WHAT HAPPENED YOUR STORY]. Niche: [NICHE]. Audience: [AUDIENCE].\nOpen mid-action (no slow setup), build tension, land a lesson/payoff, end with a CTA. Add on-screen text beats. Keep it tight.",
    "tags": [
      "story",
      "engagement"
    ]
  },
  {
    "id": "rl-tutorial-reel",
    "cat": "reels",
    "title": "Quick Tutorial Reel",
    "desc": "A bite-size how-to Reel people bookmark and follow.",
    "prompt": "Script a quick tutorial Reel: \"How to [TASK]\" for [AUDIENCE] in the [NICHE] niche.\nHook with the result, show 3-5 fast steps with on-screen text, and a CTA to follow for more. Make each step shoot-able in seconds on a phone.",
    "tags": [
      "tutorial",
      "saves"
    ]
  },
  {
    "id": "rl-batch-week",
    "cat": "reels",
    "title": "Batch a Week of Reels in One Sitting",
    "desc": "A shot list to film 7 Reels in one session.",
    "prompt": "Plan 7 Reels I can batch-film in one session for my [NICHE] account, audience [AUDIENCE], goal [GOAL].\nFor each: concept, hook, on-screen text, and what to wear/show so I can shoot them back-to-back. Group similar setups together to save time.",
    "tags": [
      "batch",
      "planning"
    ]
  },
  {
    "id": "rl-product-demo",
    "cat": "reels",
    "title": "Product Demo Reel That Sells",
    "desc": "Show a product in action in a way that drives orders.",
    "prompt": "Script a product demo Reel for [PRODUCT] (price [PRICE], audience [AUDIENCE]).\nHook with the problem it solves, show it in action (3 quick benefit beats), handle one objection, and CTA \"DM to order / link in bio\". On-screen text included.",
    "tags": [
      "product",
      "sales"
    ]
  },
  {
    "id": "rl-trend-format-bank",
    "cat": "reels",
    "title": "Trending Reel Format Bank",
    "desc": "Evergreen viral formats you can reuse with any topic.",
    "prompt": "Give me 12 proven, evergreen Reel formats (e.g. \"things I wish I knew\", \"expectation vs reality\", \"green screen react\", \"before/after\").\nFor each: how it works, and a filled example for the [NICHE] niche, audience [AUDIENCE].",
    "tags": [
      "formats",
      "ideas"
    ]
  },
  {
    "id": "rl-caption-pack",
    "cat": "reels",
    "title": "Reel Caption + Hashtags Pack",
    "desc": "Caption, on-screen text and hashtags for a Reel you already shot.",
    "prompt": "I shot a Reel about [WHAT IT SHOWS] in the [NICHE] niche, audience [AUDIENCE].\nGive me: 3 caption options (hook + value + CTA), 3 on-screen text overlay ideas, and a 12-hashtag set (reach + niche + local). Keep captions under 150 words.",
    "tags": [
      "caption",
      "hashtags"
    ]
  },
  {
    "id": "rl-newsjack",
    "cat": "reels",
    "title": "Newsjack a Trend (Timely Reel)",
    "desc": "Turn trending news into a relevant Reel before it dies.",
    "prompt": "Trending: [TRENDING TOPIC NEWS]. My niche: [NICHE]. Audience: [AUDIENCE].\nGive 3 timely Reel angles connecting it to my niche tastefully. For each: hook, the format, and the caption. Keep it smart, not tone-deaf.",
    "tags": [
      "trend",
      "timely"
    ]
  },
  {
    "id": "rl-loop-reel",
    "cat": "reels",
    "title": "Loopable Reel (Boost Watch-Time)",
    "desc": "A Reel designed so the end flows into the start.",
    "prompt": "Help me design a loopable Reel on [TOPIC] for the [NICHE] niche.\nThe last line should connect seamlessly back to the first so it loops and racks up watch-time. Give the full short script + the loop trick used. Audience: [AUDIENCE].",
    "tags": [
      "retention",
      "loop"
    ]
  },
  {
    "id": "rl-greenscreen",
    "cat": "reels",
    "title": "Green Screen Reaction Reel",
    "desc": "A react-style Reel using a screenshot or article as background.",
    "prompt": "I want to make a green-screen reaction Reel reacting to [WHAT YOU RE REACTING TO].\nNiche: [NICHE]. Audience: [AUDIENCE].\nGive me the hook, my talking points reacting to it, an opinion that sparks debate, and a CTA. Keep it under 45 seconds.",
    "tags": [
      "greenscreen",
      "reaction"
    ]
  },
  {
    "id": "rl-cta-bank",
    "cat": "reels",
    "title": "15 Non-Cringe Reel CTAs",
    "desc": "Calls-to-action that actually get follows/saves without being needy.",
    "prompt": "Give me 15 natural, non-cringe Reel CTAs for the [NICHE] niche.\nMix: follow, save, comment-a-word, share-to-a-friend, DM. Make them feel earned and casual, not \"smash that follow button\". Tailor to [AUDIENCE].",
    "tags": [
      "cta",
      "engagement"
    ]
  },
  {
    "id": "rl-series-hook",
    "cat": "reels",
    "title": "Reel Series (Part 1, 2, 3…)",
    "desc": "A multi-part Reel series that makes people follow for the next part.",
    "prompt": "Help me plan a Reel series on [TOPIC] for the [NICHE] niche, audience [AUDIENCE].\nGive a series hook, [NUMBER] parts each with its own mini-hook and value, and a cliffhanger ending per part so people follow for the next. Keep each under 30s.",
    "tags": [
      "series",
      "retention"
    ]
  },
  {
    "id": "rl-shoot-checklist",
    "cat": "reels",
    "title": "Reel Shoot Checklist & Tips",
    "desc": "A practical checklist to film better Reels on a phone.",
    "prompt": "Give me a practical phone-filming checklist for shooting a Reel about [TOPIC] in the [NICHE] niche.\nCover: lighting, framing, audio, b-roll to grab, on-screen text timing, and 3 quick editing tips. Beginner-friendly, no fancy gear needed.",
    "tags": [
      "production",
      "tips"
    ]
  },
  {
    "id": "bp-reel-hooks-fitness",
    "cat": "reels",
    "title": "Viral Reel Hooks — Fitness Coaches",
    "desc": "10 first-3-second hooks for fitness coaching.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for fitness coaching, aimed at people who want to get fit.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "fitness"
    ]
  },
  {
    "id": "bp-reel-hooks-yoga",
    "cat": "reels",
    "title": "Viral Reel Hooks — Yoga Instructors",
    "desc": "10 first-3-second hooks for yoga teaching.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for yoga teaching, aimed at people seeking calm & flexibility.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "yoga"
    ]
  },
  {
    "id": "bp-reel-hooks-nutrition",
    "cat": "reels",
    "title": "Viral Reel Hooks — Nutritionists",
    "desc": "10 first-3-second hooks for nutrition & diet coaching.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for nutrition & diet coaching, aimed at people who want to eat healthier.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "nutrition"
    ]
  },
  {
    "id": "bp-reel-hooks-homebakery",
    "cat": "reels",
    "title": "Viral Reel Hooks — Home Bakers",
    "desc": "10 first-3-second hooks for a home baking business.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a home baking business, aimed at people who order cakes & desserts.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "homebakery"
    ]
  },
  {
    "id": "bp-reel-hooks-cloudkitchen",
    "cat": "reels",
    "title": "Viral Reel Hooks — Cloud Kitchens",
    "desc": "10 first-3-second hooks for a cloud kitchen.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a cloud kitchen, aimed at hungry locals ordering online.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-reel-hooks-cafe",
    "cat": "reels",
    "title": "Viral Reel Hooks — Cafés & Restaurants",
    "desc": "10 first-3-second hooks for a café or restaurant.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a café or restaurant, aimed at local foodies.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "cafe"
    ]
  },
  {
    "id": "bp-reel-hooks-fashion",
    "cat": "reels",
    "title": "Viral Reel Hooks — Fashion Brands",
    "desc": "10 first-3-second hooks for a fashion & clothing brand.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a fashion & clothing brand, aimed at style-conscious shoppers.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "fashion"
    ]
  },
  {
    "id": "bp-reel-hooks-jewellery",
    "cat": "reels",
    "title": "Viral Reel Hooks — Jewellery Brands",
    "desc": "10 first-3-second hooks for a jewellery business.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a jewellery business, aimed at people shopping for jewellery.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "jewellery"
    ]
  },
  {
    "id": "bp-reel-hooks-handmade",
    "cat": "reels",
    "title": "Viral Reel Hooks — Handmade & Craft Sellers",
    "desc": "10 first-3-second hooks for a handmade craft business.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a handmade craft business, aimed at people who love handmade gifts.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "handmade"
    ]
  },
  {
    "id": "bp-reel-hooks-skincare",
    "cat": "reels",
    "title": "Viral Reel Hooks — Skincare Brands",
    "desc": "10 first-3-second hooks for a skincare brand.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a skincare brand, aimed at people who want better skin.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "skincare"
    ]
  },
  {
    "id": "bp-reel-hooks-makeup",
    "cat": "reels",
    "title": "Viral Reel Hooks — Makeup Artists",
    "desc": "10 first-3-second hooks for a makeup artistry business.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a makeup artistry business, aimed at brides & beauty lovers.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "makeup"
    ]
  },
  {
    "id": "bp-reel-hooks-salon",
    "cat": "reels",
    "title": "Viral Reel Hooks — Salons & Spas",
    "desc": "10 first-3-second hooks for a salon or spa.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a salon or spa, aimed at people booking beauty services.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "salon"
    ]
  },
  {
    "id": "bp-reel-hooks-travel",
    "cat": "reels",
    "title": "Viral Reel Hooks — Travel Creators",
    "desc": "10 first-3-second hooks for travel content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for travel content, aimed at people planning trips.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "travel"
    ]
  },
  {
    "id": "bp-reel-hooks-photography",
    "cat": "reels",
    "title": "Viral Reel Hooks — Photographers",
    "desc": "10 first-3-second hooks for a photography business.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a photography business, aimed at couples & brands needing shoots.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "photography"
    ]
  },
  {
    "id": "bp-reel-hooks-realestate",
    "cat": "reels",
    "title": "Viral Reel Hooks — Real Estate Agents",
    "desc": "10 first-3-second hooks for real estate.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for real estate, aimed at home buyers & sellers.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "realestate"
    ]
  },
  {
    "id": "bp-reel-hooks-interior",
    "cat": "reels",
    "title": "Viral Reel Hooks — Interior Designers",
    "desc": "10 first-3-second hooks for interior design.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for interior design, aimed at homeowners renovating.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "interior"
    ]
  },
  {
    "id": "bp-reel-hooks-finance",
    "cat": "reels",
    "title": "Viral Reel Hooks — Personal Finance Creators",
    "desc": "10 first-3-second hooks for personal finance content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for personal finance content, aimed at people wanting to manage money.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "finance"
    ]
  },
  {
    "id": "bp-reel-hooks-trading",
    "cat": "reels",
    "title": "Viral Reel Hooks — Stock Market Educators",
    "desc": "10 first-3-second hooks for stock market education.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for stock market education, aimed at new investors & traders.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "trading"
    ]
  },
  {
    "id": "bp-reel-hooks-edtech",
    "cat": "reels",
    "title": "Viral Reel Hooks — Online Tutors",
    "desc": "10 first-3-second hooks for online tutoring.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for online tutoring, aimed at students & parents.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "edtech"
    ]
  },
  {
    "id": "bp-reel-hooks-examprep",
    "cat": "reels",
    "title": "Viral Reel Hooks — Exam Prep Creators",
    "desc": "10 first-3-second hooks for exam prep content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for exam prep content, aimed at students cracking competitive exams.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "examprep"
    ]
  },
  {
    "id": "bp-reel-hooks-coding",
    "cat": "reels",
    "title": "Viral Reel Hooks — Coding Educators",
    "desc": "10 first-3-second hooks for coding & tech education.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for coding & tech education, aimed at aspiring developers.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "coding"
    ]
  },
  {
    "id": "bp-reel-hooks-gadgets",
    "cat": "reels",
    "title": "Viral Reel Hooks — Tech Reviewers",
    "desc": "10 first-3-second hooks for tech & gadget reviews.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for tech & gadget reviews, aimed at people deciding what to buy.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "gadgets"
    ]
  },
  {
    "id": "bp-reel-hooks-gaming",
    "cat": "reels",
    "title": "Viral Reel Hooks — Gaming Creators",
    "desc": "10 first-3-second hooks for gaming content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for gaming content, aimed at gamers & fans.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "gaming"
    ]
  },
  {
    "id": "bp-reel-hooks-saas",
    "cat": "reels",
    "title": "Viral Reel Hooks — SaaS Founders",
    "desc": "10 first-3-second hooks for a SaaS product.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a SaaS product, aimed at businesses that need the tool.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "saas"
    ]
  },
  {
    "id": "bp-reel-hooks-freelance",
    "cat": "reels",
    "title": "Viral Reel Hooks — Freelancers",
    "desc": "10 first-3-second hooks for freelancing services.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for freelancing services, aimed at clients who need the service.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "freelance"
    ]
  },
  {
    "id": "bp-reel-hooks-agency",
    "cat": "reels",
    "title": "Viral Reel Hooks — Marketing Agencies",
    "desc": "10 first-3-second hooks for a marketing agency.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for a marketing agency, aimed at business owners who want growth.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "agency"
    ]
  },
  {
    "id": "bp-reel-hooks-parenting",
    "cat": "reels",
    "title": "Viral Reel Hooks — Parenting Creators",
    "desc": "10 first-3-second hooks for parenting content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for parenting content, aimed at new & busy parents.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "parenting"
    ]
  },
  {
    "id": "bp-reel-hooks-pets",
    "cat": "reels",
    "title": "Viral Reel Hooks — Pet Care Creators",
    "desc": "10 first-3-second hooks for pet care content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for pet care content, aimed at pet parents.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "pets"
    ]
  },
  {
    "id": "bp-reel-hooks-gardening",
    "cat": "reels",
    "title": "Viral Reel Hooks — Gardening Creators",
    "desc": "10 first-3-second hooks for gardening & plants content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for gardening & plants content, aimed at plant lovers.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "gardening"
    ]
  },
  {
    "id": "bp-reel-hooks-astrology",
    "cat": "reels",
    "title": "Viral Reel Hooks — Astrology Creators",
    "desc": "10 first-3-second hooks for astrology & spirituality content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for astrology & spirituality content, aimed at people seeking guidance.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "astrology"
    ]
  },
  {
    "id": "bp-reel-hooks-motivation",
    "cat": "reels",
    "title": "Viral Reel Hooks — Motivational Creators",
    "desc": "10 first-3-second hooks for motivation & self-help content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for motivation & self-help content, aimed at people who want to level up.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "motivation"
    ]
  },
  {
    "id": "bp-reel-hooks-food",
    "cat": "reels",
    "title": "Viral Reel Hooks — Food Bloggers",
    "desc": "10 first-3-second hooks for food & recipe content.",
    "prompt": "Give me 10 scroll-stopping hooks (first 3 seconds) for a Reel about [TOPIC] for food & recipe content, aimed at home cooks & foodies.\nMake them curiosity-driven and impossible to scroll past. Max 10 words each.",
    "tags": [
      "reels",
      "hooks",
      "food"
    ]
  },
  {
    "id": "bp-reel-script-fitness",
    "cat": "reels",
    "title": "30-Second Reel Script — Fitness Coaches",
    "desc": "A hook-to-CTA Reel script for fitness coaching.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for fitness coaching, audience people who want to get fit.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "fitness"
    ]
  },
  {
    "id": "bp-reel-script-yoga",
    "cat": "reels",
    "title": "30-Second Reel Script — Yoga Instructors",
    "desc": "A hook-to-CTA Reel script for yoga teaching.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for yoga teaching, audience people seeking calm & flexibility.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "yoga"
    ]
  },
  {
    "id": "bp-reel-script-nutrition",
    "cat": "reels",
    "title": "30-Second Reel Script — Nutritionists",
    "desc": "A hook-to-CTA Reel script for nutrition & diet coaching.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for nutrition & diet coaching, audience people who want to eat healthier.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "nutrition"
    ]
  },
  {
    "id": "bp-reel-script-homebakery",
    "cat": "reels",
    "title": "30-Second Reel Script — Home Bakers",
    "desc": "A hook-to-CTA Reel script for a home baking business.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a home baking business, audience people who order cakes & desserts.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "homebakery"
    ]
  },
  {
    "id": "bp-reel-script-cloudkitchen",
    "cat": "reels",
    "title": "30-Second Reel Script — Cloud Kitchens",
    "desc": "A hook-to-CTA Reel script for a cloud kitchen.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a cloud kitchen, audience hungry locals ordering online.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-reel-script-cafe",
    "cat": "reels",
    "title": "30-Second Reel Script — Cafés & Restaurants",
    "desc": "A hook-to-CTA Reel script for a café or restaurant.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a café or restaurant, audience local foodies.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "cafe"
    ]
  },
  {
    "id": "bp-reel-script-fashion",
    "cat": "reels",
    "title": "30-Second Reel Script — Fashion Brands",
    "desc": "A hook-to-CTA Reel script for a fashion & clothing brand.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a fashion & clothing brand, audience style-conscious shoppers.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "fashion"
    ]
  },
  {
    "id": "bp-reel-script-jewellery",
    "cat": "reels",
    "title": "30-Second Reel Script — Jewellery Brands",
    "desc": "A hook-to-CTA Reel script for a jewellery business.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a jewellery business, audience people shopping for jewellery.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "jewellery"
    ]
  },
  {
    "id": "bp-reel-script-handmade",
    "cat": "reels",
    "title": "30-Second Reel Script — Handmade & Craft Sellers",
    "desc": "A hook-to-CTA Reel script for a handmade craft business.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a handmade craft business, audience people who love handmade gifts.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "handmade"
    ]
  },
  {
    "id": "bp-reel-script-skincare",
    "cat": "reels",
    "title": "30-Second Reel Script — Skincare Brands",
    "desc": "A hook-to-CTA Reel script for a skincare brand.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a skincare brand, audience people who want better skin.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "skincare"
    ]
  },
  {
    "id": "bp-reel-script-makeup",
    "cat": "reels",
    "title": "30-Second Reel Script — Makeup Artists",
    "desc": "A hook-to-CTA Reel script for a makeup artistry business.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a makeup artistry business, audience brides & beauty lovers.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "makeup"
    ]
  },
  {
    "id": "bp-reel-script-salon",
    "cat": "reels",
    "title": "30-Second Reel Script — Salons & Spas",
    "desc": "A hook-to-CTA Reel script for a salon or spa.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a salon or spa, audience people booking beauty services.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "salon"
    ]
  },
  {
    "id": "bp-reel-script-travel",
    "cat": "reels",
    "title": "30-Second Reel Script — Travel Creators",
    "desc": "A hook-to-CTA Reel script for travel content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for travel content, audience people planning trips.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "travel"
    ]
  },
  {
    "id": "bp-reel-script-photography",
    "cat": "reels",
    "title": "30-Second Reel Script — Photographers",
    "desc": "A hook-to-CTA Reel script for a photography business.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a photography business, audience couples & brands needing shoots.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "photography"
    ]
  },
  {
    "id": "bp-reel-script-realestate",
    "cat": "reels",
    "title": "30-Second Reel Script — Real Estate Agents",
    "desc": "A hook-to-CTA Reel script for real estate.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for real estate, audience home buyers & sellers.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "realestate"
    ]
  },
  {
    "id": "bp-reel-script-interior",
    "cat": "reels",
    "title": "30-Second Reel Script — Interior Designers",
    "desc": "A hook-to-CTA Reel script for interior design.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for interior design, audience homeowners renovating.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "interior"
    ]
  },
  {
    "id": "bp-reel-script-finance",
    "cat": "reels",
    "title": "30-Second Reel Script — Personal Finance Creators",
    "desc": "A hook-to-CTA Reel script for personal finance content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for personal finance content, audience people wanting to manage money.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "finance"
    ]
  },
  {
    "id": "bp-reel-script-trading",
    "cat": "reels",
    "title": "30-Second Reel Script — Stock Market Educators",
    "desc": "A hook-to-CTA Reel script for stock market education.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for stock market education, audience new investors & traders.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "trading"
    ]
  },
  {
    "id": "bp-reel-script-edtech",
    "cat": "reels",
    "title": "30-Second Reel Script — Online Tutors",
    "desc": "A hook-to-CTA Reel script for online tutoring.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for online tutoring, audience students & parents.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "edtech"
    ]
  },
  {
    "id": "bp-reel-script-examprep",
    "cat": "reels",
    "title": "30-Second Reel Script — Exam Prep Creators",
    "desc": "A hook-to-CTA Reel script for exam prep content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for exam prep content, audience students cracking competitive exams.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "examprep"
    ]
  },
  {
    "id": "bp-reel-script-coding",
    "cat": "reels",
    "title": "30-Second Reel Script — Coding Educators",
    "desc": "A hook-to-CTA Reel script for coding & tech education.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for coding & tech education, audience aspiring developers.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "coding"
    ]
  },
  {
    "id": "bp-reel-script-gadgets",
    "cat": "reels",
    "title": "30-Second Reel Script — Tech Reviewers",
    "desc": "A hook-to-CTA Reel script for tech & gadget reviews.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for tech & gadget reviews, audience people deciding what to buy.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "gadgets"
    ]
  },
  {
    "id": "bp-reel-script-gaming",
    "cat": "reels",
    "title": "30-Second Reel Script — Gaming Creators",
    "desc": "A hook-to-CTA Reel script for gaming content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for gaming content, audience gamers & fans.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "gaming"
    ]
  },
  {
    "id": "bp-reel-script-saas",
    "cat": "reels",
    "title": "30-Second Reel Script — SaaS Founders",
    "desc": "A hook-to-CTA Reel script for a SaaS product.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a SaaS product, audience businesses that need the tool.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "saas"
    ]
  },
  {
    "id": "bp-reel-script-freelance",
    "cat": "reels",
    "title": "30-Second Reel Script — Freelancers",
    "desc": "A hook-to-CTA Reel script for freelancing services.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for freelancing services, audience clients who need the service.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "freelance"
    ]
  },
  {
    "id": "bp-reel-script-agency",
    "cat": "reels",
    "title": "30-Second Reel Script — Marketing Agencies",
    "desc": "A hook-to-CTA Reel script for a marketing agency.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for a marketing agency, audience business owners who want growth.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "agency"
    ]
  },
  {
    "id": "bp-reel-script-parenting",
    "cat": "reels",
    "title": "30-Second Reel Script — Parenting Creators",
    "desc": "A hook-to-CTA Reel script for parenting content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for parenting content, audience new & busy parents.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "parenting"
    ]
  },
  {
    "id": "bp-reel-script-pets",
    "cat": "reels",
    "title": "30-Second Reel Script — Pet Care Creators",
    "desc": "A hook-to-CTA Reel script for pet care content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for pet care content, audience pet parents.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "pets"
    ]
  },
  {
    "id": "bp-reel-script-gardening",
    "cat": "reels",
    "title": "30-Second Reel Script — Gardening Creators",
    "desc": "A hook-to-CTA Reel script for gardening & plants content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for gardening & plants content, audience plant lovers.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "gardening"
    ]
  },
  {
    "id": "bp-reel-script-astrology",
    "cat": "reels",
    "title": "30-Second Reel Script — Astrology Creators",
    "desc": "A hook-to-CTA Reel script for astrology & spirituality content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for astrology & spirituality content, audience people seeking guidance.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "astrology"
    ]
  },
  {
    "id": "bp-reel-script-motivation",
    "cat": "reels",
    "title": "30-Second Reel Script — Motivational Creators",
    "desc": "A hook-to-CTA Reel script for motivation & self-help content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for motivation & self-help content, audience people who want to level up.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "motivation"
    ]
  },
  {
    "id": "bp-reel-script-food",
    "cat": "reels",
    "title": "30-Second Reel Script — Food Bloggers",
    "desc": "A hook-to-CTA Reel script for food & recipe content.",
    "prompt": "Write a 30-second Reel script about [TOPIC] for food & recipe content, audience home cooks & foodies.\nInclude the on-screen hook, voiceover line-by-line, B-roll suggestions, and a CTA to [GOAL]. Under 80 spoken words.",
    "tags": [
      "reels",
      "script",
      "food"
    ]
  },
  {
    "id": "bp-reel-ideas-fitness",
    "cat": "reels",
    "title": "30 Reel Ideas — Fitness Coaches",
    "desc": "A month of Reel concepts for fitness coaching.",
    "prompt": "Give 30 Reel ideas for fitness coaching, audience people who want to get fit.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "fitness"
    ]
  },
  {
    "id": "bp-reel-ideas-yoga",
    "cat": "reels",
    "title": "30 Reel Ideas — Yoga Instructors",
    "desc": "A month of Reel concepts for yoga teaching.",
    "prompt": "Give 30 Reel ideas for yoga teaching, audience people seeking calm & flexibility.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "yoga"
    ]
  },
  {
    "id": "bp-reel-ideas-nutrition",
    "cat": "reels",
    "title": "30 Reel Ideas — Nutritionists",
    "desc": "A month of Reel concepts for nutrition & diet coaching.",
    "prompt": "Give 30 Reel ideas for nutrition & diet coaching, audience people who want to eat healthier.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "nutrition"
    ]
  },
  {
    "id": "bp-reel-ideas-homebakery",
    "cat": "reels",
    "title": "30 Reel Ideas — Home Bakers",
    "desc": "A month of Reel concepts for a home baking business.",
    "prompt": "Give 30 Reel ideas for a home baking business, audience people who order cakes & desserts.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "homebakery"
    ]
  },
  {
    "id": "bp-reel-ideas-cloudkitchen",
    "cat": "reels",
    "title": "30 Reel Ideas — Cloud Kitchens",
    "desc": "A month of Reel concepts for a cloud kitchen.",
    "prompt": "Give 30 Reel ideas for a cloud kitchen, audience hungry locals ordering online.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-reel-ideas-cafe",
    "cat": "reels",
    "title": "30 Reel Ideas — Cafés & Restaurants",
    "desc": "A month of Reel concepts for a café or restaurant.",
    "prompt": "Give 30 Reel ideas for a café or restaurant, audience local foodies.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "cafe"
    ]
  },
  {
    "id": "bp-reel-ideas-fashion",
    "cat": "reels",
    "title": "30 Reel Ideas — Fashion Brands",
    "desc": "A month of Reel concepts for a fashion & clothing brand.",
    "prompt": "Give 30 Reel ideas for a fashion & clothing brand, audience style-conscious shoppers.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "fashion"
    ]
  },
  {
    "id": "bp-reel-ideas-jewellery",
    "cat": "reels",
    "title": "30 Reel Ideas — Jewellery Brands",
    "desc": "A month of Reel concepts for a jewellery business.",
    "prompt": "Give 30 Reel ideas for a jewellery business, audience people shopping for jewellery.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "jewellery"
    ]
  },
  {
    "id": "bp-reel-ideas-handmade",
    "cat": "reels",
    "title": "30 Reel Ideas — Handmade & Craft Sellers",
    "desc": "A month of Reel concepts for a handmade craft business.",
    "prompt": "Give 30 Reel ideas for a handmade craft business, audience people who love handmade gifts.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "handmade"
    ]
  },
  {
    "id": "bp-reel-ideas-skincare",
    "cat": "reels",
    "title": "30 Reel Ideas — Skincare Brands",
    "desc": "A month of Reel concepts for a skincare brand.",
    "prompt": "Give 30 Reel ideas for a skincare brand, audience people who want better skin.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "skincare"
    ]
  },
  {
    "id": "bp-reel-ideas-makeup",
    "cat": "reels",
    "title": "30 Reel Ideas — Makeup Artists",
    "desc": "A month of Reel concepts for a makeup artistry business.",
    "prompt": "Give 30 Reel ideas for a makeup artistry business, audience brides & beauty lovers.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "makeup"
    ]
  },
  {
    "id": "bp-reel-ideas-salon",
    "cat": "reels",
    "title": "30 Reel Ideas — Salons & Spas",
    "desc": "A month of Reel concepts for a salon or spa.",
    "prompt": "Give 30 Reel ideas for a salon or spa, audience people booking beauty services.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "salon"
    ]
  },
  {
    "id": "bp-reel-ideas-travel",
    "cat": "reels",
    "title": "30 Reel Ideas — Travel Creators",
    "desc": "A month of Reel concepts for travel content.",
    "prompt": "Give 30 Reel ideas for travel content, audience people planning trips.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "travel"
    ]
  },
  {
    "id": "bp-reel-ideas-photography",
    "cat": "reels",
    "title": "30 Reel Ideas — Photographers",
    "desc": "A month of Reel concepts for a photography business.",
    "prompt": "Give 30 Reel ideas for a photography business, audience couples & brands needing shoots.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "photography"
    ]
  },
  {
    "id": "bp-reel-ideas-realestate",
    "cat": "reels",
    "title": "30 Reel Ideas — Real Estate Agents",
    "desc": "A month of Reel concepts for real estate.",
    "prompt": "Give 30 Reel ideas for real estate, audience home buyers & sellers.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "realestate"
    ]
  },
  {
    "id": "bp-reel-ideas-interior",
    "cat": "reels",
    "title": "30 Reel Ideas — Interior Designers",
    "desc": "A month of Reel concepts for interior design.",
    "prompt": "Give 30 Reel ideas for interior design, audience homeowners renovating.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "interior"
    ]
  },
  {
    "id": "bp-reel-ideas-finance",
    "cat": "reels",
    "title": "30 Reel Ideas — Personal Finance Creators",
    "desc": "A month of Reel concepts for personal finance content.",
    "prompt": "Give 30 Reel ideas for personal finance content, audience people wanting to manage money.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "finance"
    ]
  },
  {
    "id": "bp-reel-ideas-trading",
    "cat": "reels",
    "title": "30 Reel Ideas — Stock Market Educators",
    "desc": "A month of Reel concepts for stock market education.",
    "prompt": "Give 30 Reel ideas for stock market education, audience new investors & traders.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "trading"
    ]
  },
  {
    "id": "bp-reel-ideas-edtech",
    "cat": "reels",
    "title": "30 Reel Ideas — Online Tutors",
    "desc": "A month of Reel concepts for online tutoring.",
    "prompt": "Give 30 Reel ideas for online tutoring, audience students & parents.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "edtech"
    ]
  },
  {
    "id": "bp-reel-ideas-examprep",
    "cat": "reels",
    "title": "30 Reel Ideas — Exam Prep Creators",
    "desc": "A month of Reel concepts for exam prep content.",
    "prompt": "Give 30 Reel ideas for exam prep content, audience students cracking competitive exams.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "examprep"
    ]
  },
  {
    "id": "bp-reel-ideas-coding",
    "cat": "reels",
    "title": "30 Reel Ideas — Coding Educators",
    "desc": "A month of Reel concepts for coding & tech education.",
    "prompt": "Give 30 Reel ideas for coding & tech education, audience aspiring developers.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "coding"
    ]
  },
  {
    "id": "bp-reel-ideas-gadgets",
    "cat": "reels",
    "title": "30 Reel Ideas — Tech Reviewers",
    "desc": "A month of Reel concepts for tech & gadget reviews.",
    "prompt": "Give 30 Reel ideas for tech & gadget reviews, audience people deciding what to buy.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "gadgets"
    ]
  },
  {
    "id": "bp-reel-ideas-gaming",
    "cat": "reels",
    "title": "30 Reel Ideas — Gaming Creators",
    "desc": "A month of Reel concepts for gaming content.",
    "prompt": "Give 30 Reel ideas for gaming content, audience gamers & fans.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "gaming"
    ]
  },
  {
    "id": "bp-reel-ideas-saas",
    "cat": "reels",
    "title": "30 Reel Ideas — SaaS Founders",
    "desc": "A month of Reel concepts for a SaaS product.",
    "prompt": "Give 30 Reel ideas for a SaaS product, audience businesses that need the tool.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "saas"
    ]
  },
  {
    "id": "bp-reel-ideas-freelance",
    "cat": "reels",
    "title": "30 Reel Ideas — Freelancers",
    "desc": "A month of Reel concepts for freelancing services.",
    "prompt": "Give 30 Reel ideas for freelancing services, audience clients who need the service.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "freelance"
    ]
  },
  {
    "id": "bp-reel-ideas-agency",
    "cat": "reels",
    "title": "30 Reel Ideas — Marketing Agencies",
    "desc": "A month of Reel concepts for a marketing agency.",
    "prompt": "Give 30 Reel ideas for a marketing agency, audience business owners who want growth.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "agency"
    ]
  },
  {
    "id": "bp-reel-ideas-parenting",
    "cat": "reels",
    "title": "30 Reel Ideas — Parenting Creators",
    "desc": "A month of Reel concepts for parenting content.",
    "prompt": "Give 30 Reel ideas for parenting content, audience new & busy parents.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "parenting"
    ]
  },
  {
    "id": "bp-reel-ideas-pets",
    "cat": "reels",
    "title": "30 Reel Ideas — Pet Care Creators",
    "desc": "A month of Reel concepts for pet care content.",
    "prompt": "Give 30 Reel ideas for pet care content, audience pet parents.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "pets"
    ]
  },
  {
    "id": "bp-reel-ideas-gardening",
    "cat": "reels",
    "title": "30 Reel Ideas — Gardening Creators",
    "desc": "A month of Reel concepts for gardening & plants content.",
    "prompt": "Give 30 Reel ideas for gardening & plants content, audience plant lovers.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "gardening"
    ]
  },
  {
    "id": "bp-reel-ideas-astrology",
    "cat": "reels",
    "title": "30 Reel Ideas — Astrology Creators",
    "desc": "A month of Reel concepts for astrology & spirituality content.",
    "prompt": "Give 30 Reel ideas for astrology & spirituality content, audience people seeking guidance.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "astrology"
    ]
  },
  {
    "id": "bp-reel-ideas-motivation",
    "cat": "reels",
    "title": "30 Reel Ideas — Motivational Creators",
    "desc": "A month of Reel concepts for motivation & self-help content.",
    "prompt": "Give 30 Reel ideas for motivation & self-help content, audience people who want to level up.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "motivation"
    ]
  },
  {
    "id": "bp-reel-ideas-food",
    "cat": "reels",
    "title": "30 Reel Ideas — Food Bloggers",
    "desc": "A month of Reel concepts for food & recipe content.",
    "prompt": "Give 30 Reel ideas for food & recipe content, audience home cooks & foodies.\nSpread across educational, relatable, behind-the-scenes, myth-busting, trend-based, and promo for [PRODUCT].\nFor each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "calendar",
      "food"
    ]
  },
  {
    "id": "tw-thread",
    "cat": "twitter",
    "title": "Viral X Thread from Any Idea",
    "desc": "Turn one idea into a scroll-stopping thread structured for reach.",
    "prompt": "Write an X (Twitter) thread on [TOPIC] for the [NICHE] niche, audience [AUDIENCE].\n- Tweet 1: a strong hook that promises value (no link)\n- 6-9 tweets, one idea each, under 280 chars, line breaks, occasional emoji\n- Last tweet: recap + CTA to follow/repost\nNumber each tweet.",
    "tags": [
      "thread",
      "viral"
    ]
  },
  {
    "id": "tw-from-blog",
    "cat": "twitter",
    "title": "Blog / Notes → X Thread",
    "desc": "Repurpose long content into a thread.",
    "prompt": "Turn this into an engaging X thread:\n\"\"\"\n[PASTE BLOG NOTES]\n\"\"\"\nTweet 1 = a hook that promises value (no link). 6-9 tweets, one idea each, under 280 chars. Last tweet = recap + CTA. Number them.",
    "tags": [
      "repurpose",
      "thread"
    ]
  },
  {
    "id": "tw-hooks",
    "cat": "twitter",
    "title": "30 Viral Tweet Hooks",
    "desc": "Opening lines that stop the scroll on the timeline.",
    "prompt": "Give 30 viral tweet hook templates for the [NICHE] niche, audience [AUDIENCE].\nMix: bold opinion, list promise (\"X things…\"), contrarian take, story tease, question, stat.\nShow each as a fill-in template + one example for [TOPIC]. Numbered.",
    "tags": [
      "hooks",
      "ideas"
    ]
  },
  {
    "id": "tw-one-liners",
    "cat": "twitter",
    "title": "20 Punchy Standalone Tweets",
    "desc": "Quotable one-liners that earn likes and reposts.",
    "prompt": "Write 20 punchy standalone tweets for the [NICHE] niche, audience [AUDIENCE].\nMake them quotable and shareable: insights, hot takes, relatable truths, mini-lessons. Each under 240 chars, no hashtags. Vary the styles.",
    "tags": [
      "tweets",
      "engagement"
    ]
  },
  {
    "id": "tw-build-public",
    "cat": "twitter",
    "title": "Build-in-Public Tweet Series",
    "desc": "Document your journey to grow a following authentically.",
    "prompt": "I'm building [WHAT YOU RE BUILDING]. Audience: [AUDIENCE].\nGive me 10 build-in-public tweet ideas: progress updates, lessons, wins, fails, behind-the-scenes, asking for feedback. Make them specific and honest, not vague flexing. One example tweet for each.",
    "tags": [
      "build in public",
      "growth"
    ]
  },
  {
    "id": "tw-reply-growth",
    "cat": "twitter",
    "title": "Smart Replies to Grow on X",
    "desc": "Reply strategy + templates to get seen by bigger accounts.",
    "prompt": "I want to grow on X by replying smartly in the [NICHE] niche.\nGive me: a reply strategy (who to reply to, when, how fast), and 10 reply templates that add value (not \"great post!\") so big accounts and their audience notice me. Audience: [AUDIENCE].",
    "tags": [
      "replies",
      "growth"
    ]
  },
  {
    "id": "tw-bio",
    "cat": "twitter",
    "title": "X Bio That Gets Follows",
    "desc": "A bio that tells visitors exactly why to follow.",
    "prompt": "Write 4 X bio options. What I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. What I tweet about: [TOPICS]. Goal: [GOAL].\nEach: clear value + a bit of personality, under 160 chars. Tell me which is strongest and why.",
    "tags": [
      "bio",
      "profile"
    ]
  },
  {
    "id": "tw-listicle-thread",
    "cat": "twitter",
    "title": "Listicle Thread (Tools / Tips / Lessons)",
    "desc": "The high-save \"X things I learned\" thread format.",
    "prompt": "Write a listicle thread: \"[NUMBER] [THINGS], e.g. tools/lessons/tips for X\" in the [NICHE] niche.\nAudience: [AUDIENCE]. Hook tweet that promises the list, then one tweet per item (name + why it matters + how to use), and a CTA to follow + repost the first tweet.",
    "tags": [
      "thread",
      "list"
    ]
  },
  {
    "id": "tw-story-thread",
    "cat": "twitter",
    "title": "Story Thread That Goes Viral",
    "desc": "A narrative thread that keeps people reading to the end.",
    "prompt": "Help me write a story thread about [WHAT HAPPENED YOUR STORY]. Niche: [NICHE]. Audience: [AUDIENCE].\nOpen with a gripping hook, build tension across tweets (one beat each), land a lesson, end with a takeaway + CTA. Keep each tweet tight.",
    "tags": [
      "story",
      "thread"
    ]
  },
  {
    "id": "tw-content-calendar",
    "cat": "twitter",
    "title": "7-Day X Content Plan",
    "desc": "A week of tweets + threads so you post consistently.",
    "prompt": "Plan 7 days of X content for the [NICHE] niche, audience [AUDIENCE], goal [GOAL].\nEach day: a format (single tweet / thread / poll / reply-bait), a topic, and the actual hook. Mix value, story, opinion, and one soft promo for [PRODUCT SERVICE].",
    "tags": [
      "calendar",
      "planning"
    ]
  },
  {
    "id": "tw-poll",
    "cat": "twitter",
    "title": "Engaging Poll Tweets",
    "desc": "Polls that spark replies and boost your reach.",
    "prompt": "Give 8 poll tweet ideas for the [NICHE] niche, audience [AUDIENCE].\nEach: the poll question + 2-4 options + a one-line tweet to pair with it that invites people to explain their vote in replies. Make them fun or mildly debatable.",
    "tags": [
      "poll",
      "engagement"
    ]
  },
  {
    "id": "tw-repurpose-reel",
    "cat": "twitter",
    "title": "X Thread → Instagram Carousel",
    "desc": "Reuse a winning thread as a carousel and vice versa.",
    "prompt": "Here's a thread/idea that did well:\n\"\"\"\n[PASTE THREAD OR IDEA]\n\"\"\"\nReformat it as a 7-slide Instagram carousel (cover hook + one point per slide + CTA slide) and as a LinkedIn post. Keep the core message, adapt the style to each platform.",
    "tags": [
      "repurpose",
      "multi-platform"
    ]
  },
  {
    "id": "tw-hot-take",
    "cat": "twitter",
    "title": "Hot Take That Sparks Debate (Safely)",
    "desc": "Contrarian opinions that drive engagement without being toxic.",
    "prompt": "Give me 8 contrarian-but-defensible hot takes for the [NICHE] niche, audience [AUDIENCE].\nEach should challenge a common belief and spark discussion, with a one-line defense I can use in replies. Keep them smart and respectful, not rage-bait.",
    "tags": [
      "opinion",
      "engagement"
    ]
  },
  {
    "id": "tw-quote-tweet",
    "cat": "twitter",
    "title": "Quote-Tweet Angles",
    "desc": "Add value on top of a popular tweet to borrow its reach.",
    "prompt": "Here's a popular tweet I want to quote-tweet:\n\"\"\"\n[PASTE TWEET]\n\"\"\"\nMy niche: [NICHE]. Give me 5 quote-tweet angles that add my unique value/take so my audience and theirs engage. Each under 240 chars.",
    "tags": [
      "quote tweet",
      "growth"
    ]
  },
  {
    "id": "tw-pinned",
    "cat": "twitter",
    "title": "Pinned Tweet That Converts",
    "desc": "The one tweet new visitors see — make it sell your follow or offer.",
    "prompt": "Write 3 options for my pinned tweet.\nGoal: [GOAL]. Who I am: [WHAT YOU DO]. Audience: [AUDIENCE].\nMake each a strong standalone hook (or mini-thread starter) that makes a visitor want to follow or click.",
    "tags": [
      "pinned",
      "conversion"
    ]
  },
  {
    "id": "tw-newsletter-funnel",
    "cat": "twitter",
    "title": "Thread That Funnels to My Newsletter",
    "desc": "A value thread ending in a soft newsletter pitch.",
    "prompt": "Write a value-packed X thread on [TOPIC] (niche [NICHE], audience [AUDIENCE]) that naturally ends by inviting people to my newsletter [NEWSLETTER WHAT THEY GET].\nDeliver real value first; the pitch should feel earned, not baity. Number the tweets.",
    "tags": [
      "funnel",
      "newsletter"
    ]
  },
  {
    "id": "tw-engagement-questions",
    "cat": "twitter",
    "title": "Reply-Bait Questions (The Good Kind)",
    "desc": "Questions that get your audience talking in replies.",
    "prompt": "Give 12 engaging questions to tweet for the [NICHE] niche, audience [AUDIENCE].\nThey should be easy and fun to answer, reveal something useful about my audience, and get lots of replies. Avoid generic \"what's your favourite?\" filler.",
    "tags": [
      "engagement",
      "community"
    ]
  },
  {
    "id": "tw-30day-x",
    "cat": "twitter",
    "title": "30-Day X Growth Plan",
    "desc": "A month to grow from a small account, with daily actions.",
    "prompt": "Build a 30-day X growth plan for the [NICHE] niche.\nStart: [WHERE YOU ARE]. Time daily: [TIME]. Goal: [GOAL].\nWeek-by-week: a focus, daily actions (tweets, threads, replies, engaging accounts), and one metric to track. Realistic for one person.",
    "tags": [
      "growth",
      "plan"
    ]
  },
  {
    "id": "bp-tw-thread-fitness",
    "cat": "twitter",
    "title": "Viral X Thread — Fitness Coaches",
    "desc": "A 7-tweet thread for fitness coaching.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people who want to get fit in the fitness coaching space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "fitness"
    ]
  },
  {
    "id": "bp-tw-thread-yoga",
    "cat": "twitter",
    "title": "Viral X Thread — Yoga Instructors",
    "desc": "A 7-tweet thread for yoga teaching.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people seeking calm & flexibility in the yoga teaching space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "yoga"
    ]
  },
  {
    "id": "bp-tw-thread-nutrition",
    "cat": "twitter",
    "title": "Viral X Thread — Nutritionists",
    "desc": "A 7-tweet thread for nutrition & diet coaching.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people who want to eat healthier in the nutrition & diet coaching space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "nutrition"
    ]
  },
  {
    "id": "bp-tw-thread-homebakery",
    "cat": "twitter",
    "title": "Viral X Thread — Home Bakers",
    "desc": "A 7-tweet thread for a home baking business.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people who order cakes & desserts in the a home baking business space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "homebakery"
    ]
  },
  {
    "id": "bp-tw-thread-cloudkitchen",
    "cat": "twitter",
    "title": "Viral X Thread — Cloud Kitchens",
    "desc": "A 7-tweet thread for a cloud kitchen.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for hungry locals ordering online in the a cloud kitchen space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-tw-thread-cafe",
    "cat": "twitter",
    "title": "Viral X Thread — Cafés & Restaurants",
    "desc": "A 7-tweet thread for a café or restaurant.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for local foodies in the a café or restaurant space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "cafe"
    ]
  },
  {
    "id": "bp-tw-thread-fashion",
    "cat": "twitter",
    "title": "Viral X Thread — Fashion Brands",
    "desc": "A 7-tweet thread for a fashion & clothing brand.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for style-conscious shoppers in the a fashion & clothing brand space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "fashion"
    ]
  },
  {
    "id": "bp-tw-thread-jewellery",
    "cat": "twitter",
    "title": "Viral X Thread — Jewellery Brands",
    "desc": "A 7-tweet thread for a jewellery business.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people shopping for jewellery in the a jewellery business space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "jewellery"
    ]
  },
  {
    "id": "bp-tw-thread-handmade",
    "cat": "twitter",
    "title": "Viral X Thread — Handmade & Craft Sellers",
    "desc": "A 7-tweet thread for a handmade craft business.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people who love handmade gifts in the a handmade craft business space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "handmade"
    ]
  },
  {
    "id": "bp-tw-thread-skincare",
    "cat": "twitter",
    "title": "Viral X Thread — Skincare Brands",
    "desc": "A 7-tweet thread for a skincare brand.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people who want better skin in the a skincare brand space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "skincare"
    ]
  },
  {
    "id": "bp-tw-thread-makeup",
    "cat": "twitter",
    "title": "Viral X Thread — Makeup Artists",
    "desc": "A 7-tweet thread for a makeup artistry business.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for brides & beauty lovers in the a makeup artistry business space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "makeup"
    ]
  },
  {
    "id": "bp-tw-thread-salon",
    "cat": "twitter",
    "title": "Viral X Thread — Salons & Spas",
    "desc": "A 7-tweet thread for a salon or spa.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people booking beauty services in the a salon or spa space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "salon"
    ]
  },
  {
    "id": "bp-tw-thread-travel",
    "cat": "twitter",
    "title": "Viral X Thread — Travel Creators",
    "desc": "A 7-tweet thread for travel content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people planning trips in the travel content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "travel"
    ]
  },
  {
    "id": "bp-tw-thread-photography",
    "cat": "twitter",
    "title": "Viral X Thread — Photographers",
    "desc": "A 7-tweet thread for a photography business.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for couples & brands needing shoots in the a photography business space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "photography"
    ]
  },
  {
    "id": "bp-tw-thread-realestate",
    "cat": "twitter",
    "title": "Viral X Thread — Real Estate Agents",
    "desc": "A 7-tweet thread for real estate.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for home buyers & sellers in the real estate space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "realestate"
    ]
  },
  {
    "id": "bp-tw-thread-interior",
    "cat": "twitter",
    "title": "Viral X Thread — Interior Designers",
    "desc": "A 7-tweet thread for interior design.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for homeowners renovating in the interior design space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "interior"
    ]
  },
  {
    "id": "bp-tw-thread-finance",
    "cat": "twitter",
    "title": "Viral X Thread — Personal Finance Creators",
    "desc": "A 7-tweet thread for personal finance content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people wanting to manage money in the personal finance content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "finance"
    ]
  },
  {
    "id": "bp-tw-thread-trading",
    "cat": "twitter",
    "title": "Viral X Thread — Stock Market Educators",
    "desc": "A 7-tweet thread for stock market education.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for new investors & traders in the stock market education space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "trading"
    ]
  },
  {
    "id": "bp-tw-thread-edtech",
    "cat": "twitter",
    "title": "Viral X Thread — Online Tutors",
    "desc": "A 7-tweet thread for online tutoring.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for students & parents in the online tutoring space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "edtech"
    ]
  },
  {
    "id": "bp-tw-thread-examprep",
    "cat": "twitter",
    "title": "Viral X Thread — Exam Prep Creators",
    "desc": "A 7-tweet thread for exam prep content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for students cracking competitive exams in the exam prep content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "examprep"
    ]
  },
  {
    "id": "bp-tw-thread-coding",
    "cat": "twitter",
    "title": "Viral X Thread — Coding Educators",
    "desc": "A 7-tweet thread for coding & tech education.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for aspiring developers in the coding & tech education space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "coding"
    ]
  },
  {
    "id": "bp-tw-thread-gadgets",
    "cat": "twitter",
    "title": "Viral X Thread — Tech Reviewers",
    "desc": "A 7-tweet thread for tech & gadget reviews.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people deciding what to buy in the tech & gadget reviews space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "gadgets"
    ]
  },
  {
    "id": "bp-tw-thread-gaming",
    "cat": "twitter",
    "title": "Viral X Thread — Gaming Creators",
    "desc": "A 7-tweet thread for gaming content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for gamers & fans in the gaming content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "gaming"
    ]
  },
  {
    "id": "bp-tw-thread-saas",
    "cat": "twitter",
    "title": "Viral X Thread — SaaS Founders",
    "desc": "A 7-tweet thread for a SaaS product.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for businesses that need the tool in the a SaaS product space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "saas"
    ]
  },
  {
    "id": "bp-tw-thread-freelance",
    "cat": "twitter",
    "title": "Viral X Thread — Freelancers",
    "desc": "A 7-tweet thread for freelancing services.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for clients who need the service in the freelancing services space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "freelance"
    ]
  },
  {
    "id": "bp-tw-thread-agency",
    "cat": "twitter",
    "title": "Viral X Thread — Marketing Agencies",
    "desc": "A 7-tweet thread for a marketing agency.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for business owners who want growth in the a marketing agency space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "agency"
    ]
  },
  {
    "id": "bp-tw-thread-parenting",
    "cat": "twitter",
    "title": "Viral X Thread — Parenting Creators",
    "desc": "A 7-tweet thread for parenting content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for new & busy parents in the parenting content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "parenting"
    ]
  },
  {
    "id": "bp-tw-thread-pets",
    "cat": "twitter",
    "title": "Viral X Thread — Pet Care Creators",
    "desc": "A 7-tweet thread for pet care content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for pet parents in the pet care content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "pets"
    ]
  },
  {
    "id": "bp-tw-thread-gardening",
    "cat": "twitter",
    "title": "Viral X Thread — Gardening Creators",
    "desc": "A 7-tweet thread for gardening & plants content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for plant lovers in the gardening & plants content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "gardening"
    ]
  },
  {
    "id": "bp-tw-thread-astrology",
    "cat": "twitter",
    "title": "Viral X Thread — Astrology Creators",
    "desc": "A 7-tweet thread for astrology & spirituality content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people seeking guidance in the astrology & spirituality content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "astrology"
    ]
  },
  {
    "id": "bp-tw-thread-motivation",
    "cat": "twitter",
    "title": "Viral X Thread — Motivational Creators",
    "desc": "A 7-tweet thread for motivation & self-help content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for people who want to level up in the motivation & self-help content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "motivation"
    ]
  },
  {
    "id": "bp-tw-thread-food",
    "cat": "twitter",
    "title": "Viral X Thread — Food Bloggers",
    "desc": "A 7-tweet thread for food & recipe content.",
    "prompt": "Write a 7-tweet X (Twitter) thread about [TOPIC] for home cooks & foodies in the food & recipe content space.\nTweet 1 is a strong hook (no link), tweets 2-6 give one insight each (under 280 chars), tweet 7 recaps with a CTA to [GOAL]. Number them.",
    "tags": [
      "thread",
      "viral",
      "food"
    ]
  },
  {
    "id": "li-post-reach",
    "cat": "linkedin",
    "title": "LinkedIn Post That Gets Reach",
    "desc": "A story-driven post structured for the feed (hook + whitespace + lesson).",
    "prompt": "Write a LinkedIn post about [TOPIC STORY]. My role: [YOUR ROLE]. Goal: [GOAL].\n- 1-line hook that stops the scroll (no hashtags up top)\n- short 1-2 line paragraphs with whitespace\n- a relatable middle (struggle → insight)\n- a clear takeaway\n- a closing question for comments\nHuman and honest, 150-200 words. 3 hashtags at the very end.",
    "tags": [
      "post",
      "story",
      "reach"
    ]
  },
  {
    "id": "li-hooks",
    "cat": "linkedin",
    "title": "25 LinkedIn Hooks That Get Clicks",
    "desc": "First lines that earn the \"see more\" click.",
    "prompt": "Give 25 LinkedIn first-line hooks for the [NICHE INDUSTRY] niche, audience [AUDIENCE].\nMix: bold statement, mistake/lesson, contrarian, number/list promise, short story open, vulnerable admission. Max 12 words each. Numbered.",
    "tags": [
      "hooks",
      "engagement"
    ]
  },
  {
    "id": "li-headline",
    "cat": "linkedin",
    "title": "LinkedIn Headline That Stands Out",
    "desc": "A headline that says what you do and who you help.",
    "prompt": "Write 5 LinkedIn headline options.\nWhat I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. Outcome I deliver: [RESULT]. Keyword to rank for: [KEYWORD].\nEach under 220 chars, clear + specific (not \"passionate professional\"). Tell me which is strongest.",
    "tags": [
      "headline",
      "profile"
    ]
  },
  {
    "id": "li-about",
    "cat": "linkedin",
    "title": "LinkedIn \"About\" Section",
    "desc": "A first-person About that builds trust and brings inbound.",
    "prompt": "Write my LinkedIn About section.\nWho I am: [ABOUT YOU]. What I do + for whom: [WORK AUDIENCE]. Wins/proof: [ACHIEVEMENTS]. What I want: [GOAL].\nFirst person, warm but credible, scannable with short paragraphs, ends with a clear CTA + contact [CONTACT].",
    "tags": [
      "about",
      "profile"
    ]
  },
  {
    "id": "li-carousel",
    "cat": "linkedin",
    "title": "LinkedIn Carousel (PDF) Outline",
    "desc": "A document-post carousel that drives saves and follows.",
    "prompt": "Outline a LinkedIn carousel (PDF) on [TOPIC] for [AUDIENCE].\n- Cover slide: bold title + hook\n- 6-8 content slides: one idea each, short and scannable\n- CTA slide: follow + a takeaway\nAdd the post caption to go with it (hook + value + question). Professional but not boring.",
    "tags": [
      "carousel",
      "document"
    ]
  },
  {
    "id": "li-thought-leader",
    "cat": "linkedin",
    "title": "Thought-Leadership Post",
    "desc": "An opinion post that positions you as an expert.",
    "prompt": "Write a thought-leadership LinkedIn post sharing my take on [TREND ISSUE IN MY INDUSTRY].\nMy role: [ROLE]. Audience: [AUDIENCE].\nTake a clear, defensible stance, back it with reasoning/experience, and invite discussion. Confident but not arrogant. End with a question.",
    "tags": [
      "authority",
      "opinion"
    ]
  },
  {
    "id": "li-career-story",
    "cat": "linkedin",
    "title": "Career Story / Lesson Post",
    "desc": "Turn a career moment into a relatable, high-engagement post.",
    "prompt": "Help me turn this career moment into a LinkedIn post: [WHAT HAPPENED].\nThe lesson: [LESSON]. Audience: [AUDIENCE].\nOpen mid-story, keep paragraphs short, make it relatable and honest (including the struggle), land the lesson, end with a question. No humble-bragging.",
    "tags": [
      "story",
      "career"
    ]
  },
  {
    "id": "li-content-plan",
    "cat": "linkedin",
    "title": "2-Week LinkedIn Content Plan",
    "desc": "A consistent posting plan across post types.",
    "prompt": "Plan 2 weeks (10 posts) of LinkedIn content for [ROLE] targeting [AUDIENCE], goal [GOAL].\nMix: story, how-to, opinion, list, behind-the-scenes, client win, and 1-2 soft promos for [OFFER]. For each: format + hook + one-line brief.",
    "tags": [
      "calendar",
      "planning"
    ]
  },
  {
    "id": "li-comment-strategy",
    "cat": "linkedin",
    "title": "LinkedIn Comment Templates",
    "desc": "Value-adding comments to grow visibility on others' posts.",
    "prompt": "I want to grow on LinkedIn by commenting on bigger creators' posts in [NICHE INDUSTRY].\nGive a commenting strategy + 10 comment templates that add real value or insight (not \"great post!\") so I get noticed. Audience I want to attract: [AUDIENCE].",
    "tags": [
      "comments",
      "growth"
    ]
  },
  {
    "id": "li-lead-gen-post",
    "cat": "linkedin",
    "title": "Lead-Gen Post (Soft Pitch)",
    "desc": "A value post that quietly brings in clients.",
    "prompt": "Write a LinkedIn post that brings inbound for my service [SERVICE] without being salesy.\nAudience: [AUDIENCE]. The result I deliver: [RESULT].\nLead with a useful insight or case story, show the transformation, and end with a low-key invite (\"DM me 'X' / comment below\"). Helpful first, pitch second.",
    "tags": [
      "lead gen",
      "sales"
    ]
  },
  {
    "id": "li-newsletter",
    "cat": "linkedin",
    "title": "LinkedIn Newsletter Issue",
    "desc": "A full newsletter article for LinkedIn's newsletter feature.",
    "prompt": "Write a LinkedIn newsletter issue on [TOPIC] for [AUDIENCE].\nGive: a catchy title, an opening hook, 3-4 scannable sections with subheads, practical takeaways, and a CTA (subscribe / comment / DM). Tone: [TONE]. 500-700 words.",
    "tags": [
      "newsletter",
      "long-form"
    ]
  },
  {
    "id": "li-poll",
    "cat": "linkedin",
    "title": "LinkedIn Poll + Follow-Up Post",
    "desc": "A poll to spark engagement, plus the post that capitalises on results.",
    "prompt": "Create a LinkedIn poll for [AUDIENCE] in [INDUSTRY] about [TOPIC].\nGive the poll question + 3-4 options, a short post to frame it, and a follow-up post idea I can publish once results are in to keep the conversation going.",
    "tags": [
      "poll",
      "engagement"
    ]
  },
  {
    "id": "li-connection-note",
    "cat": "linkedin",
    "title": "Connection Request That Gets Accepted",
    "desc": "Personalised connection notes that don't feel spammy.",
    "prompt": "Write 3 LinkedIn connection request notes to [TYPE OF PERSON].\nWhy I'm reaching out: [REASON]. Common ground: [SHARED CONTEXT].\nPersonal, specific, under 280 chars, no immediate pitch. Just a genuine reason to connect.",
    "tags": [
      "networking",
      "outreach"
    ]
  },
  {
    "id": "li-dm-pitch",
    "cat": "linkedin",
    "title": "LinkedIn DM Pitch (Warm)",
    "desc": "A follow-up DM that turns a connection into a conversation.",
    "prompt": "Write a LinkedIn DM to someone I recently connected with.\nThem: [WHO THEY ARE]. What I offer: [SERVICE VALUE]. Goal: [GOAL].\nLead with value or a relevant observation, keep it short and human, end with a low-pressure question. No copy-paste pitch energy.",
    "tags": [
      "dm",
      "sales"
    ]
  },
  {
    "id": "li-rewrite-corporate",
    "cat": "linkedin",
    "title": "De-Corporate My Post",
    "desc": "Rewrite stiff corporate writing into human, readable posts.",
    "prompt": "Here's my draft LinkedIn post:\n\"\"\"\n[PASTE DRAFT]\n\"\"\"\nRewrite it to sound human and readable: short lines, simple words, real voice, strong hook, clear takeaway. Cut jargon and buzzwords. Keep my point intact. Give 2 versions.",
    "tags": [
      "rewrite",
      "voice"
    ]
  },
  {
    "id": "li-job-hunt",
    "cat": "linkedin",
    "title": "Job-Search \"Open to Work\" Post",
    "desc": "A post that gets your network to actually help you find a role.",
    "prompt": "Write an \"open to work\" LinkedIn post.\nMy role/skills: [ROLE SKILLS]. What I'm looking for: [TARGET ROLE INDUSTRY]. Location/setup: [LOCATION REMOTE]. A quick win/proof: [ACHIEVEMENT].\nMake it confident (not desperate), easy for people to refer me, with a clear ask + how to reach me.",
    "tags": [
      "job",
      "career"
    ]
  },
  {
    "id": "li-case-study",
    "cat": "linkedin",
    "title": "Client Win / Case Study Post",
    "desc": "Share a result as proof without breaking confidentiality.",
    "prompt": "Help me write a LinkedIn post about a client result: [WHAT YOU DID THE OUTCOME].\nAudience: [AUDIENCE]. Keep the client anonymous if needed.\nStructure: the problem → what I did → the result (with a number if possible) → the lesson for the reader → soft CTA. Believable, not braggy.",
    "tags": [
      "case study",
      "proof"
    ]
  },
  {
    "id": "li-engagement-question",
    "cat": "linkedin",
    "title": "Discussion-Starter Questions",
    "desc": "Questions that get your network commenting and sharing.",
    "prompt": "Give 12 discussion-starter questions to post on LinkedIn for [AUDIENCE] in [INDUSTRY].\nEach should be easy to answer, slightly opinion-based, and likely to get comments. Pair the best 3 with a one-line framing post.",
    "tags": [
      "engagement",
      "community"
    ]
  },
  {
    "id": "bp-li-post-fitness",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Fitness Coaches",
    "desc": "A story-driven post that builds credibility in fitness coaching.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people who want to get fit, from someone in fitness coaching.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "fitness"
    ]
  },
  {
    "id": "bp-li-post-yoga",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Yoga Instructors",
    "desc": "A story-driven post that builds credibility in yoga teaching.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people seeking calm & flexibility, from someone in yoga teaching.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "yoga"
    ]
  },
  {
    "id": "bp-li-post-nutrition",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Nutritionists",
    "desc": "A story-driven post that builds credibility in nutrition & diet coaching.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people who want to eat healthier, from someone in nutrition & diet coaching.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "nutrition"
    ]
  },
  {
    "id": "bp-li-post-homebakery",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Home Bakers",
    "desc": "A story-driven post that builds credibility in a home baking business.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people who order cakes & desserts, from someone in a home baking business.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "homebakery"
    ]
  },
  {
    "id": "bp-li-post-cloudkitchen",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Cloud Kitchens",
    "desc": "A story-driven post that builds credibility in a cloud kitchen.",
    "prompt": "Write a LinkedIn post about [TOPIC] for hungry locals ordering online, from someone in a cloud kitchen.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-li-post-cafe",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Cafés & Restaurants",
    "desc": "A story-driven post that builds credibility in a café or restaurant.",
    "prompt": "Write a LinkedIn post about [TOPIC] for local foodies, from someone in a café or restaurant.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "cafe"
    ]
  },
  {
    "id": "bp-li-post-fashion",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Fashion Brands",
    "desc": "A story-driven post that builds credibility in a fashion & clothing brand.",
    "prompt": "Write a LinkedIn post about [TOPIC] for style-conscious shoppers, from someone in a fashion & clothing brand.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "fashion"
    ]
  },
  {
    "id": "bp-li-post-jewellery",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Jewellery Brands",
    "desc": "A story-driven post that builds credibility in a jewellery business.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people shopping for jewellery, from someone in a jewellery business.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "jewellery"
    ]
  },
  {
    "id": "bp-li-post-handmade",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Handmade & Craft Sellers",
    "desc": "A story-driven post that builds credibility in a handmade craft business.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people who love handmade gifts, from someone in a handmade craft business.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "handmade"
    ]
  },
  {
    "id": "bp-li-post-skincare",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Skincare Brands",
    "desc": "A story-driven post that builds credibility in a skincare brand.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people who want better skin, from someone in a skincare brand.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "skincare"
    ]
  },
  {
    "id": "bp-li-post-makeup",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Makeup Artists",
    "desc": "A story-driven post that builds credibility in a makeup artistry business.",
    "prompt": "Write a LinkedIn post about [TOPIC] for brides & beauty lovers, from someone in a makeup artistry business.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "makeup"
    ]
  },
  {
    "id": "bp-li-post-salon",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Salons & Spas",
    "desc": "A story-driven post that builds credibility in a salon or spa.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people booking beauty services, from someone in a salon or spa.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "salon"
    ]
  },
  {
    "id": "bp-li-post-travel",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Travel Creators",
    "desc": "A story-driven post that builds credibility in travel content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people planning trips, from someone in travel content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "travel"
    ]
  },
  {
    "id": "bp-li-post-photography",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Photographers",
    "desc": "A story-driven post that builds credibility in a photography business.",
    "prompt": "Write a LinkedIn post about [TOPIC] for couples & brands needing shoots, from someone in a photography business.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "photography"
    ]
  },
  {
    "id": "bp-li-post-realestate",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Real Estate Agents",
    "desc": "A story-driven post that builds credibility in real estate.",
    "prompt": "Write a LinkedIn post about [TOPIC] for home buyers & sellers, from someone in real estate.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "realestate"
    ]
  },
  {
    "id": "bp-li-post-interior",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Interior Designers",
    "desc": "A story-driven post that builds credibility in interior design.",
    "prompt": "Write a LinkedIn post about [TOPIC] for homeowners renovating, from someone in interior design.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "interior"
    ]
  },
  {
    "id": "bp-li-post-finance",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Personal Finance Creators",
    "desc": "A story-driven post that builds credibility in personal finance content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people wanting to manage money, from someone in personal finance content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "finance"
    ]
  },
  {
    "id": "bp-li-post-trading",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Stock Market Educators",
    "desc": "A story-driven post that builds credibility in stock market education.",
    "prompt": "Write a LinkedIn post about [TOPIC] for new investors & traders, from someone in stock market education.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "trading"
    ]
  },
  {
    "id": "bp-li-post-edtech",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Online Tutors",
    "desc": "A story-driven post that builds credibility in online tutoring.",
    "prompt": "Write a LinkedIn post about [TOPIC] for students & parents, from someone in online tutoring.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "edtech"
    ]
  },
  {
    "id": "bp-li-post-examprep",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Exam Prep Creators",
    "desc": "A story-driven post that builds credibility in exam prep content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for students cracking competitive exams, from someone in exam prep content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "examprep"
    ]
  },
  {
    "id": "bp-li-post-coding",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Coding Educators",
    "desc": "A story-driven post that builds credibility in coding & tech education.",
    "prompt": "Write a LinkedIn post about [TOPIC] for aspiring developers, from someone in coding & tech education.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "coding"
    ]
  },
  {
    "id": "bp-li-post-gadgets",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Tech Reviewers",
    "desc": "A story-driven post that builds credibility in tech & gadget reviews.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people deciding what to buy, from someone in tech & gadget reviews.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "gadgets"
    ]
  },
  {
    "id": "bp-li-post-gaming",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Gaming Creators",
    "desc": "A story-driven post that builds credibility in gaming content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for gamers & fans, from someone in gaming content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "gaming"
    ]
  },
  {
    "id": "bp-li-post-saas",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — SaaS Founders",
    "desc": "A story-driven post that builds credibility in a SaaS product.",
    "prompt": "Write a LinkedIn post about [TOPIC] for businesses that need the tool, from someone in a SaaS product.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "saas"
    ]
  },
  {
    "id": "bp-li-post-freelance",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Freelancers",
    "desc": "A story-driven post that builds credibility in freelancing services.",
    "prompt": "Write a LinkedIn post about [TOPIC] for clients who need the service, from someone in freelancing services.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "freelance"
    ]
  },
  {
    "id": "bp-li-post-agency",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Marketing Agencies",
    "desc": "A story-driven post that builds credibility in a marketing agency.",
    "prompt": "Write a LinkedIn post about [TOPIC] for business owners who want growth, from someone in a marketing agency.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "agency"
    ]
  },
  {
    "id": "bp-li-post-parenting",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Parenting Creators",
    "desc": "A story-driven post that builds credibility in parenting content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for new & busy parents, from someone in parenting content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "parenting"
    ]
  },
  {
    "id": "bp-li-post-pets",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Pet Care Creators",
    "desc": "A story-driven post that builds credibility in pet care content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for pet parents, from someone in pet care content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "pets"
    ]
  },
  {
    "id": "bp-li-post-gardening",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Gardening Creators",
    "desc": "A story-driven post that builds credibility in gardening & plants content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for plant lovers, from someone in gardening & plants content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "gardening"
    ]
  },
  {
    "id": "bp-li-post-astrology",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Astrology Creators",
    "desc": "A story-driven post that builds credibility in astrology & spirituality content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people seeking guidance, from someone in astrology & spirituality content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "astrology"
    ]
  },
  {
    "id": "bp-li-post-motivation",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Motivational Creators",
    "desc": "A story-driven post that builds credibility in motivation & self-help content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for people who want to level up, from someone in motivation & self-help content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "motivation"
    ]
  },
  {
    "id": "bp-li-post-food",
    "cat": "linkedin",
    "title": "Authority LinkedIn Post — Food Bloggers",
    "desc": "A story-driven post that builds credibility in food & recipe content.",
    "prompt": "Write a LinkedIn post about [TOPIC] for home cooks & foodies, from someone in food & recipe content.\nOpen with a relatable hook, share a short story or lesson, end with a takeaway + a soft CTA to [GOAL]. Tone: [TONE]. Short paragraphs, 3 hashtags at the end.",
    "tags": [
      "linkedin",
      "authority",
      "food"
    ]
  },
  {
    "id": "br-pillars",
    "cat": "personal",
    "title": "Find My 4 Content Pillars",
    "desc": "Stops random posting — defines what you talk about.",
    "prompt": "Help me define my personal brand content pillars.\nWho I am: [ABOUT YOU]. Known for: [GOAL]. Audience: [AUDIENCE].\nGive 4 clear pillars, 5 content ideas each, and a one-line brand promise tying them together. Specific to me, not generic.",
    "tags": [
      "strategy",
      "pillars"
    ]
  },
  {
    "id": "br-positioning",
    "cat": "personal",
    "title": "Position My Personal Brand",
    "desc": "A clear one-liner for who you are and who you serve.",
    "prompt": "Help me position my personal brand.\nWhat I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. What's different about me: [DIFFERENTIATOR]. Goal: [GOAL].\nGive 5 positioning statements (\"I help [WHO] [DO WHAT] so they [OUTCOME]\"), then recommend the sharpest one and a tagline.",
    "tags": [
      "positioning",
      "clarity"
    ]
  },
  {
    "id": "br-about-page",
    "cat": "personal",
    "title": "About / Bio Written For You",
    "desc": "A warm, credible \"about me\" for a site, media kit or bio.",
    "prompt": "Write an \"About Me\" for my [PLATFORM].\nName: [NAME]. What I do: [WHAT YOU DO]. Story/why: [BACKSTORY]. Audience: [AUDIENCE]. Tone: [TONE].\nGive a short version (2-3 sentences) and a longer story-driven paragraph. Write in [FIRST THIRD] person.",
    "tags": [
      "about",
      "bio"
    ]
  },
  {
    "id": "br-repurpose-engine",
    "cat": "personal",
    "title": "One Idea → 5 Platforms",
    "desc": "Reshape a single idea for Reels, YouTube, LinkedIn, X and a newsletter.",
    "prompt": "Take this one idea: \"[YOUR IDEA]\" (niche: [NICHE]).\nReshape it for 5 platforms, native to each: IG Reel (3-line script + hook), YouTube (title + angle), LinkedIn (2-line story hook), X (one punchy tweet), Newsletter (subject + teaser). Keep the core message consistent.",
    "tags": [
      "repurpose",
      "multi-platform"
    ]
  },
  {
    "id": "br-bio-link-page",
    "cat": "personal",
    "title": "Link-in-Bio Page Copy",
    "desc": "Headline + button labels that actually get clicks.",
    "prompt": "Write my link-in-bio page copy. What I do: [WHAT YOU DO]. My links: [LIST LINKS]. Audience: [AUDIENCE].\nGive: a short headline (who I help + how), a 1-line sub-headline, and a click-worthy benefit-driven label for each link (not just \"YouTube\"). Tight and scannable.",
    "tags": [
      "link in bio",
      "copy"
    ]
  },
  {
    "id": "br-niche-down",
    "cat": "personal",
    "title": "Help Me Niche Down",
    "desc": "Narrow your content to something that actually grows.",
    "prompt": "I post about [BROAD TOPIC] but I'm not growing. About me: [ABOUT YOU]. What I enjoy: [WHAT YOU LIKE]. Audience: [AUDIENCE].\nGive 3 specific niche angles I could own (positioning each), pros/cons, your recommendation + why, and 5 starter content ideas for it.",
    "tags": [
      "strategy",
      "niche"
    ]
  },
  {
    "id": "br-30day-growth",
    "cat": "personal",
    "title": "30-Day Personal Brand Growth Plan",
    "desc": "A structured month to grow from scratch, with daily actions.",
    "prompt": "Build a 30-day personal brand plan for [PLATFORM] in the [NICHE] niche.\nStart: [WHERE YOU ARE]. Time daily: [TIME]. Goal: [GOAL].\nWeek-by-week: a focus/theme, daily actions (post/engage/learn), and one metric to track each week. Realistic for one person with a phone.",
    "tags": [
      "growth",
      "plan"
    ]
  },
  {
    "id": "br-story-bank",
    "cat": "personal",
    "title": "Build My Personal Story Bank",
    "desc": "Surface the stories that make your brand relatable.",
    "prompt": "Help me build a story bank for content. About me: [ABOUT YOU KEY EXPERIENCES]. Niche: [NICHE]. Audience: [AUDIENCE].\nAsk me 8 prompting questions that surface relatable stories (struggles, turning points, lessons, wins, failures), and for each, suggest the content angle/lesson I could pull from it.",
    "tags": [
      "storytelling",
      "content"
    ]
  },
  {
    "id": "br-voice-profile",
    "cat": "personal",
    "title": "Define My Brand Voice",
    "desc": "A voice guide so all your content sounds like you.",
    "prompt": "Help me define my brand voice. Here are 2-3 things I've written:\n\"\"\"\n[PASTE SAMPLES]\n\"\"\"\nNiche: [NICHE]. Audience: [AUDIENCE].\nDescribe my voice in 5 traits, give \"we say / we don't say\" examples, words/phrases I use, and a short style guide I can reuse so my content stays consistent.",
    "tags": [
      "voice",
      "consistency"
    ]
  },
  {
    "id": "br-tagline",
    "cat": "personal",
    "title": "Personal Tagline / Slogan",
    "desc": "A memorable line that captures what you stand for.",
    "prompt": "Create a personal tagline/slogan for my brand.\nWhat I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. What I stand for: [VALUES MISSION].\nGive 12 short, memorable options in different styles (bold, warm, witty, aspirational). Mark the top 3 and where I'd use them (bio, banner, intro).",
    "tags": [
      "tagline",
      "identity"
    ]
  },
  {
    "id": "br-signature-content",
    "cat": "personal",
    "title": "Design a Signature Content Format",
    "desc": "A recognisable recurring format that becomes \"your thing\".",
    "prompt": "Help me create a signature recurring content format for my [NICHE] brand (like a weekly series people recognise).\nAudience: [AUDIENCE]. Give 3 format concepts (with a name, the structure, and why it's repeatable + shareable), and how to keep it consistent. Pick the strongest.",
    "tags": [
      "format",
      "recognition"
    ]
  },
  {
    "id": "br-personal-pitch",
    "cat": "personal",
    "title": "Introduce Myself (Networking)",
    "desc": "A crisp self-intro for events, DMs and podcasts.",
    "prompt": "Write a few versions of how I introduce myself.\nWhat I do: [WHAT YOU DO]. Who I help: [AUDIENCE]. A proof point: [WIN CREDIBILITY].\nGive: a 1-line version, a 15-second version, and a slightly longer \"podcast guest\" intro. Confident, clear, memorable — not a boring job-title recital.",
    "tags": [
      "intro",
      "networking"
    ]
  },
  {
    "id": "br-content-from-day",
    "cat": "personal",
    "title": "Turn My Work/Day into Content",
    "desc": "Mine your everyday work for authentic content ideas.",
    "prompt": "Here's what I do day-to-day: [DESCRIBE YOUR WORK ROUTINE]. Niche: [NICHE]. Audience: [AUDIENCE].\nGive me 10 content ideas hidden in my normal work (lessons, behind-the-scenes, mistakes, processes, small wins). For each: the hook + the best format. Make the ordinary interesting.",
    "tags": [
      "ideas",
      "authentic"
    ]
  },
  {
    "id": "br-anti-personal-brand",
    "cat": "personal",
    "title": "Stand Out From Everyone Else",
    "desc": "Find your contrarian edge in a crowded niche.",
    "prompt": "My niche [NICHE] is crowded; everyone sounds the same. About me: [ABOUT YOU]. My real opinions: [WHAT YOU BELIEVE THAT OTHERS DON T].\nHelp me find my edge: 5 contrarian-but-honest angles I can own, the \"enemy\" I can stand against, and how to position myself as different. Make me memorable, not a clone.",
    "tags": [
      "differentiation",
      "strategy"
    ]
  },
  {
    "id": "br-audit",
    "cat": "personal",
    "title": "Audit My Personal Brand",
    "desc": "A quick gap-check across your profile and content.",
    "prompt": "Audit my personal brand. Here's my info: bio: \"[BIO]\", what I post: [CONTENT TYPES], goal: [GOAL], audience: [AUDIENCE].\nTell me: is it clear what I do + for whom, is my positioning sharp, are my pillars consistent, and what 3 changes would have the biggest impact. Be honest and specific.",
    "tags": [
      "audit",
      "review"
    ]
  },
  {
    "id": "br-elevator-thread",
    "cat": "personal",
    "title": "My \"Start Here\" Intro Post",
    "desc": "A pinned intro post that onboards new followers fast.",
    "prompt": "Write a \"start here / who I am\" intro post for new followers on [PLATFORM].\nName: [NAME]. What I do + for whom: [WHAT AUDIENCE]. What they'll get if they follow: [VALUE]. A bit of personality: [PERSONAL].\nMake it warm, clear, and skimmable, ending with a reason to stick around + a question to spark a comment.",
    "tags": [
      "intro",
      "pinned"
    ]
  },
  {
    "id": "bp-pb-bio-fitness",
    "cat": "personal",
    "title": "Bio That Converts — Fitness Coaches",
    "desc": "A 150-char bio for Fitness Coaches.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in fitness coaching who helps people who want to get fit with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "fitness"
    ]
  },
  {
    "id": "bp-pb-bio-yoga",
    "cat": "personal",
    "title": "Bio That Converts — Yoga Instructors",
    "desc": "A 150-char bio for Yoga Instructors.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in yoga teaching who helps people seeking calm & flexibility with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "yoga"
    ]
  },
  {
    "id": "bp-pb-bio-nutrition",
    "cat": "personal",
    "title": "Bio That Converts — Nutritionists",
    "desc": "A 150-char bio for Nutritionists.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in nutrition & diet coaching who helps people who want to eat healthier with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "nutrition"
    ]
  },
  {
    "id": "bp-pb-bio-homebakery",
    "cat": "personal",
    "title": "Bio That Converts — Home Bakers",
    "desc": "A 150-char bio for Home Bakers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a home baking business who helps people who order cakes & desserts with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "homebakery"
    ]
  },
  {
    "id": "bp-pb-bio-cloudkitchen",
    "cat": "personal",
    "title": "Bio That Converts — Cloud Kitchens",
    "desc": "A 150-char bio for Cloud Kitchens.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a cloud kitchen who helps hungry locals ordering online with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-pb-bio-cafe",
    "cat": "personal",
    "title": "Bio That Converts — Cafés & Restaurants",
    "desc": "A 150-char bio for Cafés & Restaurants.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a café or restaurant who helps local foodies with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "cafe"
    ]
  },
  {
    "id": "bp-pb-bio-fashion",
    "cat": "personal",
    "title": "Bio That Converts — Fashion Brands",
    "desc": "A 150-char bio for Fashion Brands.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a fashion & clothing brand who helps style-conscious shoppers with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "fashion"
    ]
  },
  {
    "id": "bp-pb-bio-jewellery",
    "cat": "personal",
    "title": "Bio That Converts — Jewellery Brands",
    "desc": "A 150-char bio for Jewellery Brands.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a jewellery business who helps people shopping for jewellery with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "jewellery"
    ]
  },
  {
    "id": "bp-pb-bio-handmade",
    "cat": "personal",
    "title": "Bio That Converts — Handmade & Craft Sellers",
    "desc": "A 150-char bio for Handmade & Craft Sellers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a handmade craft business who helps people who love handmade gifts with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "handmade"
    ]
  },
  {
    "id": "bp-pb-bio-skincare",
    "cat": "personal",
    "title": "Bio That Converts — Skincare Brands",
    "desc": "A 150-char bio for Skincare Brands.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a skincare brand who helps people who want better skin with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "skincare"
    ]
  },
  {
    "id": "bp-pb-bio-makeup",
    "cat": "personal",
    "title": "Bio That Converts — Makeup Artists",
    "desc": "A 150-char bio for Makeup Artists.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a makeup artistry business who helps brides & beauty lovers with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "makeup"
    ]
  },
  {
    "id": "bp-pb-bio-salon",
    "cat": "personal",
    "title": "Bio That Converts — Salons & Spas",
    "desc": "A 150-char bio for Salons & Spas.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a salon or spa who helps people booking beauty services with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "salon"
    ]
  },
  {
    "id": "bp-pb-bio-travel",
    "cat": "personal",
    "title": "Bio That Converts — Travel Creators",
    "desc": "A 150-char bio for Travel Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in travel content who helps people planning trips with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "travel"
    ]
  },
  {
    "id": "bp-pb-bio-photography",
    "cat": "personal",
    "title": "Bio That Converts — Photographers",
    "desc": "A 150-char bio for Photographers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a photography business who helps couples & brands needing shoots with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "photography"
    ]
  },
  {
    "id": "bp-pb-bio-realestate",
    "cat": "personal",
    "title": "Bio That Converts — Real Estate Agents",
    "desc": "A 150-char bio for Real Estate Agents.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in real estate who helps home buyers & sellers with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "realestate"
    ]
  },
  {
    "id": "bp-pb-bio-interior",
    "cat": "personal",
    "title": "Bio That Converts — Interior Designers",
    "desc": "A 150-char bio for Interior Designers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in interior design who helps homeowners renovating with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "interior"
    ]
  },
  {
    "id": "bp-pb-bio-finance",
    "cat": "personal",
    "title": "Bio That Converts — Personal Finance Creators",
    "desc": "A 150-char bio for Personal Finance Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in personal finance content who helps people wanting to manage money with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "finance"
    ]
  },
  {
    "id": "bp-pb-bio-trading",
    "cat": "personal",
    "title": "Bio That Converts — Stock Market Educators",
    "desc": "A 150-char bio for Stock Market Educators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in stock market education who helps new investors & traders with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "trading"
    ]
  },
  {
    "id": "bp-pb-bio-edtech",
    "cat": "personal",
    "title": "Bio That Converts — Online Tutors",
    "desc": "A 150-char bio for Online Tutors.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in online tutoring who helps students & parents with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "edtech"
    ]
  },
  {
    "id": "bp-pb-bio-examprep",
    "cat": "personal",
    "title": "Bio That Converts — Exam Prep Creators",
    "desc": "A 150-char bio for Exam Prep Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in exam prep content who helps students cracking competitive exams with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "examprep"
    ]
  },
  {
    "id": "bp-pb-bio-coding",
    "cat": "personal",
    "title": "Bio That Converts — Coding Educators",
    "desc": "A 150-char bio for Coding Educators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in coding & tech education who helps aspiring developers with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "coding"
    ]
  },
  {
    "id": "bp-pb-bio-gadgets",
    "cat": "personal",
    "title": "Bio That Converts — Tech Reviewers",
    "desc": "A 150-char bio for Tech Reviewers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in tech & gadget reviews who helps people deciding what to buy with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "gadgets"
    ]
  },
  {
    "id": "bp-pb-bio-gaming",
    "cat": "personal",
    "title": "Bio That Converts — Gaming Creators",
    "desc": "A 150-char bio for Gaming Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in gaming content who helps gamers & fans with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "gaming"
    ]
  },
  {
    "id": "bp-pb-bio-saas",
    "cat": "personal",
    "title": "Bio That Converts — SaaS Founders",
    "desc": "A 150-char bio for SaaS Founders.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a SaaS product who helps businesses that need the tool with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "saas"
    ]
  },
  {
    "id": "bp-pb-bio-freelance",
    "cat": "personal",
    "title": "Bio That Converts — Freelancers",
    "desc": "A 150-char bio for Freelancers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in freelancing services who helps clients who need the service with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "freelance"
    ]
  },
  {
    "id": "bp-pb-bio-agency",
    "cat": "personal",
    "title": "Bio That Converts — Marketing Agencies",
    "desc": "A 150-char bio for Marketing Agencies.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in a marketing agency who helps business owners who want growth with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "agency"
    ]
  },
  {
    "id": "bp-pb-bio-parenting",
    "cat": "personal",
    "title": "Bio That Converts — Parenting Creators",
    "desc": "A 150-char bio for Parenting Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in parenting content who helps new & busy parents with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "parenting"
    ]
  },
  {
    "id": "bp-pb-bio-pets",
    "cat": "personal",
    "title": "Bio That Converts — Pet Care Creators",
    "desc": "A 150-char bio for Pet Care Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in pet care content who helps pet parents with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "pets"
    ]
  },
  {
    "id": "bp-pb-bio-gardening",
    "cat": "personal",
    "title": "Bio That Converts — Gardening Creators",
    "desc": "A 150-char bio for Gardening Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in gardening & plants content who helps plant lovers with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "gardening"
    ]
  },
  {
    "id": "bp-pb-bio-astrology",
    "cat": "personal",
    "title": "Bio That Converts — Astrology Creators",
    "desc": "A 150-char bio for Astrology Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in astrology & spirituality content who helps people seeking guidance with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "astrology"
    ]
  },
  {
    "id": "bp-pb-bio-motivation",
    "cat": "personal",
    "title": "Bio That Converts — Motivational Creators",
    "desc": "A 150-char bio for Motivational Creators.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in motivation & self-help content who helps people who want to level up with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "motivation"
    ]
  },
  {
    "id": "bp-pb-bio-food",
    "cat": "personal",
    "title": "Bio That Converts — Food Bloggers",
    "desc": "A 150-char bio for Food Bloggers.",
    "prompt": "Write 5 versions of a 150-character social bio for someone in food & recipe content who helps home cooks & foodies with [BENEFIT].\nMake each clear, confident, and a little memorable. Add a soft CTA where it fits.",
    "tags": [
      "bio",
      "brand",
      "food"
    ]
  },
  {
    "id": "bp-pb-pillars-fitness",
    "cat": "personal",
    "title": "Content Pillars — Fitness Coaches",
    "desc": "4 core themes + post ideas for fitness coaching.",
    "prompt": "Suggest 4 content pillars for a personal brand in fitness coaching, audience people who want to get fit.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "fitness"
    ]
  },
  {
    "id": "bp-pb-pillars-yoga",
    "cat": "personal",
    "title": "Content Pillars — Yoga Instructors",
    "desc": "4 core themes + post ideas for yoga teaching.",
    "prompt": "Suggest 4 content pillars for a personal brand in yoga teaching, audience people seeking calm & flexibility.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "yoga"
    ]
  },
  {
    "id": "bp-pb-pillars-nutrition",
    "cat": "personal",
    "title": "Content Pillars — Nutritionists",
    "desc": "4 core themes + post ideas for nutrition & diet coaching.",
    "prompt": "Suggest 4 content pillars for a personal brand in nutrition & diet coaching, audience people who want to eat healthier.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "nutrition"
    ]
  },
  {
    "id": "bp-pb-pillars-homebakery",
    "cat": "personal",
    "title": "Content Pillars — Home Bakers",
    "desc": "4 core themes + post ideas for a home baking business.",
    "prompt": "Suggest 4 content pillars for a personal brand in a home baking business, audience people who order cakes & desserts.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "homebakery"
    ]
  },
  {
    "id": "bp-pb-pillars-cloudkitchen",
    "cat": "personal",
    "title": "Content Pillars — Cloud Kitchens",
    "desc": "4 core themes + post ideas for a cloud kitchen.",
    "prompt": "Suggest 4 content pillars for a personal brand in a cloud kitchen, audience hungry locals ordering online.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-pb-pillars-cafe",
    "cat": "personal",
    "title": "Content Pillars — Cafés & Restaurants",
    "desc": "4 core themes + post ideas for a café or restaurant.",
    "prompt": "Suggest 4 content pillars for a personal brand in a café or restaurant, audience local foodies.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "cafe"
    ]
  },
  {
    "id": "bp-pb-pillars-fashion",
    "cat": "personal",
    "title": "Content Pillars — Fashion Brands",
    "desc": "4 core themes + post ideas for a fashion & clothing brand.",
    "prompt": "Suggest 4 content pillars for a personal brand in a fashion & clothing brand, audience style-conscious shoppers.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "fashion"
    ]
  },
  {
    "id": "bp-pb-pillars-jewellery",
    "cat": "personal",
    "title": "Content Pillars — Jewellery Brands",
    "desc": "4 core themes + post ideas for a jewellery business.",
    "prompt": "Suggest 4 content pillars for a personal brand in a jewellery business, audience people shopping for jewellery.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "jewellery"
    ]
  },
  {
    "id": "bp-pb-pillars-handmade",
    "cat": "personal",
    "title": "Content Pillars — Handmade & Craft Sellers",
    "desc": "4 core themes + post ideas for a handmade craft business.",
    "prompt": "Suggest 4 content pillars for a personal brand in a handmade craft business, audience people who love handmade gifts.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "handmade"
    ]
  },
  {
    "id": "bp-pb-pillars-skincare",
    "cat": "personal",
    "title": "Content Pillars — Skincare Brands",
    "desc": "4 core themes + post ideas for a skincare brand.",
    "prompt": "Suggest 4 content pillars for a personal brand in a skincare brand, audience people who want better skin.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "skincare"
    ]
  },
  {
    "id": "bp-pb-pillars-makeup",
    "cat": "personal",
    "title": "Content Pillars — Makeup Artists",
    "desc": "4 core themes + post ideas for a makeup artistry business.",
    "prompt": "Suggest 4 content pillars for a personal brand in a makeup artistry business, audience brides & beauty lovers.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "makeup"
    ]
  },
  {
    "id": "bp-pb-pillars-salon",
    "cat": "personal",
    "title": "Content Pillars — Salons & Spas",
    "desc": "4 core themes + post ideas for a salon or spa.",
    "prompt": "Suggest 4 content pillars for a personal brand in a salon or spa, audience people booking beauty services.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "salon"
    ]
  },
  {
    "id": "bp-pb-pillars-travel",
    "cat": "personal",
    "title": "Content Pillars — Travel Creators",
    "desc": "4 core themes + post ideas for travel content.",
    "prompt": "Suggest 4 content pillars for a personal brand in travel content, audience people planning trips.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "travel"
    ]
  },
  {
    "id": "bp-pb-pillars-photography",
    "cat": "personal",
    "title": "Content Pillars — Photographers",
    "desc": "4 core themes + post ideas for a photography business.",
    "prompt": "Suggest 4 content pillars for a personal brand in a photography business, audience couples & brands needing shoots.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "photography"
    ]
  },
  {
    "id": "bp-pb-pillars-realestate",
    "cat": "personal",
    "title": "Content Pillars — Real Estate Agents",
    "desc": "4 core themes + post ideas for real estate.",
    "prompt": "Suggest 4 content pillars for a personal brand in real estate, audience home buyers & sellers.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "realestate"
    ]
  },
  {
    "id": "bp-pb-pillars-interior",
    "cat": "personal",
    "title": "Content Pillars — Interior Designers",
    "desc": "4 core themes + post ideas for interior design.",
    "prompt": "Suggest 4 content pillars for a personal brand in interior design, audience homeowners renovating.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "interior"
    ]
  },
  {
    "id": "bp-pb-pillars-finance",
    "cat": "personal",
    "title": "Content Pillars — Personal Finance Creators",
    "desc": "4 core themes + post ideas for personal finance content.",
    "prompt": "Suggest 4 content pillars for a personal brand in personal finance content, audience people wanting to manage money.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "finance"
    ]
  },
  {
    "id": "bp-pb-pillars-trading",
    "cat": "personal",
    "title": "Content Pillars — Stock Market Educators",
    "desc": "4 core themes + post ideas for stock market education.",
    "prompt": "Suggest 4 content pillars for a personal brand in stock market education, audience new investors & traders.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "trading"
    ]
  },
  {
    "id": "bp-pb-pillars-edtech",
    "cat": "personal",
    "title": "Content Pillars — Online Tutors",
    "desc": "4 core themes + post ideas for online tutoring.",
    "prompt": "Suggest 4 content pillars for a personal brand in online tutoring, audience students & parents.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "edtech"
    ]
  },
  {
    "id": "bp-pb-pillars-examprep",
    "cat": "personal",
    "title": "Content Pillars — Exam Prep Creators",
    "desc": "4 core themes + post ideas for exam prep content.",
    "prompt": "Suggest 4 content pillars for a personal brand in exam prep content, audience students cracking competitive exams.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "examprep"
    ]
  },
  {
    "id": "bp-pb-pillars-coding",
    "cat": "personal",
    "title": "Content Pillars — Coding Educators",
    "desc": "4 core themes + post ideas for coding & tech education.",
    "prompt": "Suggest 4 content pillars for a personal brand in coding & tech education, audience aspiring developers.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "coding"
    ]
  },
  {
    "id": "bp-pb-pillars-gadgets",
    "cat": "personal",
    "title": "Content Pillars — Tech Reviewers",
    "desc": "4 core themes + post ideas for tech & gadget reviews.",
    "prompt": "Suggest 4 content pillars for a personal brand in tech & gadget reviews, audience people deciding what to buy.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "gadgets"
    ]
  },
  {
    "id": "bp-pb-pillars-gaming",
    "cat": "personal",
    "title": "Content Pillars — Gaming Creators",
    "desc": "4 core themes + post ideas for gaming content.",
    "prompt": "Suggest 4 content pillars for a personal brand in gaming content, audience gamers & fans.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "gaming"
    ]
  },
  {
    "id": "bp-pb-pillars-saas",
    "cat": "personal",
    "title": "Content Pillars — SaaS Founders",
    "desc": "4 core themes + post ideas for a SaaS product.",
    "prompt": "Suggest 4 content pillars for a personal brand in a SaaS product, audience businesses that need the tool.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "saas"
    ]
  },
  {
    "id": "bp-pb-pillars-freelance",
    "cat": "personal",
    "title": "Content Pillars — Freelancers",
    "desc": "4 core themes + post ideas for freelancing services.",
    "prompt": "Suggest 4 content pillars for a personal brand in freelancing services, audience clients who need the service.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "freelance"
    ]
  },
  {
    "id": "bp-pb-pillars-agency",
    "cat": "personal",
    "title": "Content Pillars — Marketing Agencies",
    "desc": "4 core themes + post ideas for a marketing agency.",
    "prompt": "Suggest 4 content pillars for a personal brand in a marketing agency, audience business owners who want growth.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "agency"
    ]
  },
  {
    "id": "bp-pb-pillars-parenting",
    "cat": "personal",
    "title": "Content Pillars — Parenting Creators",
    "desc": "4 core themes + post ideas for parenting content.",
    "prompt": "Suggest 4 content pillars for a personal brand in parenting content, audience new & busy parents.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "parenting"
    ]
  },
  {
    "id": "bp-pb-pillars-pets",
    "cat": "personal",
    "title": "Content Pillars — Pet Care Creators",
    "desc": "4 core themes + post ideas for pet care content.",
    "prompt": "Suggest 4 content pillars for a personal brand in pet care content, audience pet parents.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "pets"
    ]
  },
  {
    "id": "bp-pb-pillars-gardening",
    "cat": "personal",
    "title": "Content Pillars — Gardening Creators",
    "desc": "4 core themes + post ideas for gardening & plants content.",
    "prompt": "Suggest 4 content pillars for a personal brand in gardening & plants content, audience plant lovers.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "gardening"
    ]
  },
  {
    "id": "bp-pb-pillars-astrology",
    "cat": "personal",
    "title": "Content Pillars — Astrology Creators",
    "desc": "4 core themes + post ideas for astrology & spirituality content.",
    "prompt": "Suggest 4 content pillars for a personal brand in astrology & spirituality content, audience people seeking guidance.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "astrology"
    ]
  },
  {
    "id": "bp-pb-pillars-motivation",
    "cat": "personal",
    "title": "Content Pillars — Motivational Creators",
    "desc": "4 core themes + post ideas for motivation & self-help content.",
    "prompt": "Suggest 4 content pillars for a personal brand in motivation & self-help content, audience people who want to level up.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "motivation"
    ]
  },
  {
    "id": "bp-pb-pillars-food",
    "cat": "personal",
    "title": "Content Pillars — Food Bloggers",
    "desc": "4 core themes + post ideas for food & recipe content.",
    "prompt": "Suggest 4 content pillars for a personal brand in food & recipe content, audience home cooks & foodies.\nFor each pillar: 5 post ideas and the goal it serves toward [GOAL]. Make them specific, not generic.",
    "tags": [
      "strategy",
      "pillars",
      "food"
    ]
  },
  {
    "id": "bl-outline-seo",
    "cat": "blog",
    "title": "Blog Post Outline That Ranks on Google",
    "desc": "An SEO-structured outline with H2s, FAQ and keyword placement.",
    "prompt": "Create an SEO blog outline for \"[TOPIC]\". Target keyword: [KEYWORD]. Word count: [WORD COUNT]. Audience: [AUDIENCE].\nInclude: an SEO title (under 60 chars) with the keyword; a meta description (under 155 chars); H2/H3 subheadings in a logical flow; a \"People Also Ask\" FAQ with 5 questions; suggested internal-link spots and one CTA. Scannable.",
    "tags": [
      "seo",
      "outline"
    ]
  },
  {
    "id": "bl-intro-pas",
    "cat": "blog",
    "title": "Blog Intro That Keeps Readers",
    "desc": "A hook intro using problem-agitate-solve.",
    "prompt": "Write an intro (under 120 words) for a post titled \"[TITLE]\". Audience: [AUDIENCE]. Keyword early: [KEYWORD].\nUse Problem → Agitate → Solve: name the problem, make them feel it, promise the solution this post gives. Short sentences. Don't start with \"In today's world\".",
    "tags": [
      "intro",
      "copywriting"
    ]
  },
  {
    "id": "bl-full-draft",
    "cat": "blog",
    "title": "Full Blog Section Draft",
    "desc": "Write a complete, well-structured section from a subheading.",
    "prompt": "Write the section under this subheading: \"[SUBHEADING]\" for a blog post about [TOPIC].\nAudience: [AUDIENCE]. Tone: [TONE]. Keyword to include once naturally: [KEYWORD].\nMake it 150-250 words, useful and specific (examples, not fluff), with short paragraphs. End with a smooth transition to the next section.",
    "tags": [
      "draft",
      "writing"
    ]
  },
  {
    "id": "bl-titles",
    "cat": "blog",
    "title": "15 SEO Blog Titles",
    "desc": "Click-worthy, keyword-rich titles for one topic.",
    "prompt": "Give 15 blog title options for the topic [TOPIC], target keyword [KEYWORD], audience [AUDIENCE].\nMix: how-to, listicle, \"best\", question, year [YEAR], and benefit-driven. Each under 60 chars with the keyword. Mark the 3 most clickable.",
    "tags": [
      "titles",
      "seo"
    ]
  },
  {
    "id": "bl-meta",
    "cat": "blog",
    "title": "Meta Title + Description Pack",
    "desc": "Optimised SERP snippets that earn the click.",
    "prompt": "Write 3 meta title + meta description pairs for a page about [TOPIC], keyword [KEYWORD].\nTitles under 60 chars, descriptions under 155 chars, each with the keyword and a reason to click (benefit/curiosity). Audience: [AUDIENCE].",
    "tags": [
      "seo",
      "meta"
    ]
  },
  {
    "id": "bl-keyword-cluster",
    "cat": "blog",
    "title": "Keyword Cluster / Content Plan",
    "desc": "A pillar + cluster plan to own a topic on Google.",
    "prompt": "I want to rank for the topic [BROAD TOPIC] in the [NICHE] niche.\nGive me a pillar page idea + 10 supporting cluster article ideas (with the target keyword for each) and how they should link together. Audience: [AUDIENCE].",
    "tags": [
      "seo",
      "strategy"
    ]
  },
  {
    "id": "bl-faq",
    "cat": "blog",
    "title": "FAQ Section (People Also Ask)",
    "desc": "Answer the questions Google surfaces for your topic.",
    "prompt": "Write an FAQ section for a post about [TOPIC], keyword [KEYWORD], audience [AUDIENCE].\nGive 6 real questions people search, each with a concise 2-3 sentence answer optimised for featured snippets. Format question as H3.",
    "tags": [
      "faq",
      "seo"
    ]
  },
  {
    "id": "bl-listicle",
    "cat": "blog",
    "title": "Listicle Article (\"Best / Top X\")",
    "desc": "A structured \"best of\" article that ranks and converts.",
    "prompt": "Outline a listicle: \"[NUMBER] Best [THING] for [AUDIENCE] ([YEAR])\". Keyword: [KEYWORD].\nFor each item: a name, a one-line why, key pros/cons, and who it's best for. Add an intro, a quick \"how we picked\" note, and a conclusion with a CTA. Affiliate-friendly spots noted.",
    "tags": [
      "listicle",
      "seo"
    ]
  },
  {
    "id": "bl-howto",
    "cat": "blog",
    "title": "Step-by-Step How-To Guide",
    "desc": "A clear tutorial article readers can follow along.",
    "prompt": "Write a how-to guide: \"How to [TASK]\". Audience skill: [LEVEL]. Keyword: [KEYWORD].\nInclude: an intro with the end benefit, a \"what you need\" list, numbered steps with clear instructions, common mistakes, tips, and an FAQ. Practical and skimmable.",
    "tags": [
      "how-to",
      "tutorial"
    ]
  },
  {
    "id": "bl-rewrite-seo",
    "cat": "blog",
    "title": "Optimise My Existing Post for SEO",
    "desc": "Improve a draft for rankings without keyword-stuffing.",
    "prompt": "Here's my blog draft:\n\"\"\"\n[PASTE DRAFT OR SECTION]\n\"\"\"\nTarget keyword: [KEYWORD]. Improve it for SEO and readability: better title/headings, natural keyword use, internal-link suggestions, a meta description, and shorter sentences. List the changes you'd make.",
    "tags": [
      "seo",
      "editing"
    ]
  },
  {
    "id": "bl-product-roundup",
    "cat": "blog",
    "title": "Affiliate Product Roundup",
    "desc": "A comparison roundup designed to earn affiliate clicks.",
    "prompt": "Write an affiliate roundup comparing [PRODUCTS CATEGORY] for [AUDIENCE].\nInclude: an intro on what to look for, a comparison of [NUMBER] options (pros, cons, price, best-for), a \"my pick\" verdict, and a comparison-table outline. Honest tone. Mark where affiliate links go.",
    "tags": [
      "affiliate",
      "roundup"
    ]
  },
  {
    "id": "bl-conclusion",
    "cat": "blog",
    "title": "Strong Conclusion + CTA",
    "desc": "A closing that recaps and drives the next action.",
    "prompt": "Write a conclusion for a post about [TOPIC], audience [AUDIENCE].\nRecap the key takeaway in 2-3 lines, motivate the reader to act, and end with a clear CTA: [CTA]. Don't just say \"in conclusion\".",
    "tags": [
      "conclusion",
      "cta"
    ]
  },
  {
    "id": "bl-repurpose-social",
    "cat": "blog",
    "title": "Blog → Social Posts",
    "desc": "Squeeze a week of social posts out of one article.",
    "prompt": "Turn this blog post into social content:\n\"\"\"\n[PASTE POST OR KEY POINTS]\n\"\"\"\nGive me: 1 X thread, 1 LinkedIn post, 3 Instagram carousel hooks, and 2 short captions. Keep the core ideas, adapt the style for each platform.",
    "tags": [
      "repurpose",
      "social"
    ]
  },
  {
    "id": "bl-comparison",
    "cat": "blog",
    "title": "\"X vs Y\" Comparison Article",
    "desc": "A fair head-to-head that ranks for comparison searches.",
    "prompt": "Outline a \"[X] vs [Y]\" comparison article for [AUDIENCE], keyword [KEYWORD].\nCover: quick verdict up top, a comparison table of key factors, deep-dive on each, who should pick which, and a conclusion. Be balanced and specific. Note FAQ questions to add.",
    "tags": [
      "comparison",
      "seo"
    ]
  },
  {
    "id": "bl-content-calendar",
    "cat": "blog",
    "title": "Monthly Blog Content Calendar",
    "desc": "A month of post ideas mapping to search intent.",
    "prompt": "Plan a month of blog posts (8 articles) for the [NICHE] niche, audience [AUDIENCE].\nFor each: a title, target keyword, search intent (info/commercial), and a one-line angle. Balance traffic-drivers with conversion-focused posts.",
    "tags": [
      "calendar",
      "strategy"
    ]
  },
  {
    "id": "bl-storytelling",
    "cat": "blog",
    "title": "Add Storytelling to a Dry Post",
    "desc": "Make a factual article engaging with story elements.",
    "prompt": "Here's a dry section of my post:\n\"\"\"\n[PASTE SECTION]\n\"\"\"\nTopic: [TOPIC]. Audience: [AUDIENCE]. Rewrite it with light storytelling — a relatable example, an analogy, or a mini-anecdote — so it's engaging without losing the facts.",
    "tags": [
      "storytelling",
      "editing"
    ]
  },
  {
    "id": "bl-internal-links",
    "cat": "blog",
    "title": "Internal Linking Suggestions",
    "desc": "Smart internal links to boost SEO and time-on-site.",
    "prompt": "My new post is about [TOPIC]. My site also has posts on: [LIST YOUR OTHER TOPICS URLS].\nSuggest where to add internal links in the new post, the anchor text to use, and 3 places older posts should link to this new one. Keep anchors natural.",
    "tags": [
      "seo",
      "internal links"
    ]
  },
  {
    "id": "bl-outreach",
    "cat": "blog",
    "title": "Guest Post / Backlink Outreach Email",
    "desc": "A pitch that gets you backlinks or guest spots.",
    "prompt": "Write a backlink/guest-post outreach email to [SITE BLOG] in the [NICHE] niche.\nWhat I offer: [YOUR ANGLE VALUE]. My site: [YOUR SITE].\nPersonalised opener (reference their content), a clear value-first proposal, and an easy yes. Under 130 words. Give 2 versions.",
    "tags": [
      "outreach",
      "backlinks"
    ]
  },
  {
    "id": "bl-newsletter-from-blog",
    "cat": "blog",
    "title": "Blog → Newsletter Email",
    "desc": "Turn a post into an email that drives traffic back.",
    "prompt": "Turn this blog post into a newsletter email:\n\"\"\"\n[PASTE POST OR SUMMARY]\n\"\"\"\nGive a subject line, a warm intro, the key value in a scannable format, and a CTA to read the full post [LINK]. Tone: [TONE]. Keep it tight.",
    "tags": [
      "newsletter",
      "repurpose"
    ]
  },
  {
    "id": "bl-title-test",
    "cat": "blog",
    "title": "Improve My Headline (CTR)",
    "desc": "Diagnose and rewrite a weak blog headline.",
    "prompt": "My current headline: \"[HEADLINE]\". Topic: [TOPIC]. Keyword: [KEYWORD]. Audience: [AUDIENCE].\nTell me what's weak, then give 8 stronger versions (clearer benefit, curiosity, specificity) under 60 chars. Pick the best and say why.",
    "tags": [
      "headline",
      "ctr"
    ]
  },
  {
    "id": "bl-research-brief",
    "cat": "blog",
    "title": "Article Research Brief",
    "desc": "A brief covering angles, sources to check, and gaps to fill.",
    "prompt": "I'm writing about [TOPIC] for [AUDIENCE].\nGive a research brief: the key questions to answer, sub-topics readers expect, common mistakes/myths to address, what competitors likely miss (my angle), and 5 stats/claims I should verify. (I'll fact-check myself.)",
    "tags": [
      "research",
      "planning"
    ]
  },
  {
    "id": "bp-bl-outline-fitness",
    "cat": "blog",
    "title": "SEO Blog Outline — Fitness Coaches",
    "desc": "A ready-to-write, ranked outline for fitness coaching.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people who want to get fit, in the fitness coaching space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "fitness"
    ]
  },
  {
    "id": "bp-bl-outline-yoga",
    "cat": "blog",
    "title": "SEO Blog Outline — Yoga Instructors",
    "desc": "A ready-to-write, ranked outline for yoga teaching.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people seeking calm & flexibility, in the yoga teaching space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "yoga"
    ]
  },
  {
    "id": "bp-bl-outline-nutrition",
    "cat": "blog",
    "title": "SEO Blog Outline — Nutritionists",
    "desc": "A ready-to-write, ranked outline for nutrition & diet coaching.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people who want to eat healthier, in the nutrition & diet coaching space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "nutrition"
    ]
  },
  {
    "id": "bp-bl-outline-homebakery",
    "cat": "blog",
    "title": "SEO Blog Outline — Home Bakers",
    "desc": "A ready-to-write, ranked outline for a home baking business.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people who order cakes & desserts, in the a home baking business space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "homebakery"
    ]
  },
  {
    "id": "bp-bl-outline-cloudkitchen",
    "cat": "blog",
    "title": "SEO Blog Outline — Cloud Kitchens",
    "desc": "A ready-to-write, ranked outline for a cloud kitchen.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for hungry locals ordering online, in the a cloud kitchen space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-bl-outline-cafe",
    "cat": "blog",
    "title": "SEO Blog Outline — Cafés & Restaurants",
    "desc": "A ready-to-write, ranked outline for a café or restaurant.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for local foodies, in the a café or restaurant space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "cafe"
    ]
  },
  {
    "id": "bp-bl-outline-fashion",
    "cat": "blog",
    "title": "SEO Blog Outline — Fashion Brands",
    "desc": "A ready-to-write, ranked outline for a fashion & clothing brand.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for style-conscious shoppers, in the a fashion & clothing brand space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "fashion"
    ]
  },
  {
    "id": "bp-bl-outline-jewellery",
    "cat": "blog",
    "title": "SEO Blog Outline — Jewellery Brands",
    "desc": "A ready-to-write, ranked outline for a jewellery business.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people shopping for jewellery, in the a jewellery business space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "jewellery"
    ]
  },
  {
    "id": "bp-bl-outline-handmade",
    "cat": "blog",
    "title": "SEO Blog Outline — Handmade & Craft Sellers",
    "desc": "A ready-to-write, ranked outline for a handmade craft business.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people who love handmade gifts, in the a handmade craft business space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "handmade"
    ]
  },
  {
    "id": "bp-bl-outline-skincare",
    "cat": "blog",
    "title": "SEO Blog Outline — Skincare Brands",
    "desc": "A ready-to-write, ranked outline for a skincare brand.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people who want better skin, in the a skincare brand space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "skincare"
    ]
  },
  {
    "id": "bp-bl-outline-makeup",
    "cat": "blog",
    "title": "SEO Blog Outline — Makeup Artists",
    "desc": "A ready-to-write, ranked outline for a makeup artistry business.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for brides & beauty lovers, in the a makeup artistry business space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "makeup"
    ]
  },
  {
    "id": "bp-bl-outline-salon",
    "cat": "blog",
    "title": "SEO Blog Outline — Salons & Spas",
    "desc": "A ready-to-write, ranked outline for a salon or spa.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people booking beauty services, in the a salon or spa space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "salon"
    ]
  },
  {
    "id": "bp-bl-outline-travel",
    "cat": "blog",
    "title": "SEO Blog Outline — Travel Creators",
    "desc": "A ready-to-write, ranked outline for travel content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people planning trips, in the travel content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "travel"
    ]
  },
  {
    "id": "bp-bl-outline-photography",
    "cat": "blog",
    "title": "SEO Blog Outline — Photographers",
    "desc": "A ready-to-write, ranked outline for a photography business.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for couples & brands needing shoots, in the a photography business space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "photography"
    ]
  },
  {
    "id": "bp-bl-outline-realestate",
    "cat": "blog",
    "title": "SEO Blog Outline — Real Estate Agents",
    "desc": "A ready-to-write, ranked outline for real estate.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for home buyers & sellers, in the real estate space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "realestate"
    ]
  },
  {
    "id": "bp-bl-outline-interior",
    "cat": "blog",
    "title": "SEO Blog Outline — Interior Designers",
    "desc": "A ready-to-write, ranked outline for interior design.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for homeowners renovating, in the interior design space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "interior"
    ]
  },
  {
    "id": "bp-bl-outline-finance",
    "cat": "blog",
    "title": "SEO Blog Outline — Personal Finance Creators",
    "desc": "A ready-to-write, ranked outline for personal finance content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people wanting to manage money, in the personal finance content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "finance"
    ]
  },
  {
    "id": "bp-bl-outline-trading",
    "cat": "blog",
    "title": "SEO Blog Outline — Stock Market Educators",
    "desc": "A ready-to-write, ranked outline for stock market education.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for new investors & traders, in the stock market education space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "trading"
    ]
  },
  {
    "id": "bp-bl-outline-edtech",
    "cat": "blog",
    "title": "SEO Blog Outline — Online Tutors",
    "desc": "A ready-to-write, ranked outline for online tutoring.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for students & parents, in the online tutoring space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "edtech"
    ]
  },
  {
    "id": "bp-bl-outline-examprep",
    "cat": "blog",
    "title": "SEO Blog Outline — Exam Prep Creators",
    "desc": "A ready-to-write, ranked outline for exam prep content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for students cracking competitive exams, in the exam prep content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "examprep"
    ]
  },
  {
    "id": "bp-bl-outline-coding",
    "cat": "blog",
    "title": "SEO Blog Outline — Coding Educators",
    "desc": "A ready-to-write, ranked outline for coding & tech education.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for aspiring developers, in the coding & tech education space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "coding"
    ]
  },
  {
    "id": "bp-bl-outline-gadgets",
    "cat": "blog",
    "title": "SEO Blog Outline — Tech Reviewers",
    "desc": "A ready-to-write, ranked outline for tech & gadget reviews.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people deciding what to buy, in the tech & gadget reviews space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "gadgets"
    ]
  },
  {
    "id": "bp-bl-outline-gaming",
    "cat": "blog",
    "title": "SEO Blog Outline — Gaming Creators",
    "desc": "A ready-to-write, ranked outline for gaming content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for gamers & fans, in the gaming content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "gaming"
    ]
  },
  {
    "id": "bp-bl-outline-saas",
    "cat": "blog",
    "title": "SEO Blog Outline — SaaS Founders",
    "desc": "A ready-to-write, ranked outline for a SaaS product.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for businesses that need the tool, in the a SaaS product space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "saas"
    ]
  },
  {
    "id": "bp-bl-outline-freelance",
    "cat": "blog",
    "title": "SEO Blog Outline — Freelancers",
    "desc": "A ready-to-write, ranked outline for freelancing services.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for clients who need the service, in the freelancing services space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "freelance"
    ]
  },
  {
    "id": "bp-bl-outline-agency",
    "cat": "blog",
    "title": "SEO Blog Outline — Marketing Agencies",
    "desc": "A ready-to-write, ranked outline for a marketing agency.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for business owners who want growth, in the a marketing agency space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "agency"
    ]
  },
  {
    "id": "bp-bl-outline-parenting",
    "cat": "blog",
    "title": "SEO Blog Outline — Parenting Creators",
    "desc": "A ready-to-write, ranked outline for parenting content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for new & busy parents, in the parenting content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "parenting"
    ]
  },
  {
    "id": "bp-bl-outline-pets",
    "cat": "blog",
    "title": "SEO Blog Outline — Pet Care Creators",
    "desc": "A ready-to-write, ranked outline for pet care content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for pet parents, in the pet care content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "pets"
    ]
  },
  {
    "id": "bp-bl-outline-gardening",
    "cat": "blog",
    "title": "SEO Blog Outline — Gardening Creators",
    "desc": "A ready-to-write, ranked outline for gardening & plants content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for plant lovers, in the gardening & plants content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "gardening"
    ]
  },
  {
    "id": "bp-bl-outline-astrology",
    "cat": "blog",
    "title": "SEO Blog Outline — Astrology Creators",
    "desc": "A ready-to-write, ranked outline for astrology & spirituality content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people seeking guidance, in the astrology & spirituality content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "astrology"
    ]
  },
  {
    "id": "bp-bl-outline-motivation",
    "cat": "blog",
    "title": "SEO Blog Outline — Motivational Creators",
    "desc": "A ready-to-write, ranked outline for motivation & self-help content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for people who want to level up, in the motivation & self-help content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "motivation"
    ]
  },
  {
    "id": "bp-bl-outline-food",
    "cat": "blog",
    "title": "SEO Blog Outline — Food Bloggers",
    "desc": "A ready-to-write, ranked outline for food & recipe content.",
    "prompt": "Create an SEO blog outline for the keyword [KEYWORD] for home cooks & foodies, in the food & recipe content space.\nInclude an SEO title (under 60 chars), a meta description, H2/H3 sections with bullets, a 5-question FAQ, and one CTA. Scannable.",
    "tags": [
      "seo",
      "blog",
      "food"
    ]
  },
  {
    "id": "bz-product-desc",
    "cat": "selling",
    "title": "Product Description That Converts",
    "desc": "For Meesho/Amazon/own-store — benefits over boring specs.",
    "prompt": "Write a product description for [PRODUCT] sold to [AUDIENCE] in India. Price: [PRICE]. Features: [LIST 3 4].\nGive: a 1-line benefit headline; a 3-4 sentence benefit-focused description; 5 bullets (feature → \"which means\" benefit); a trust line (returns/COD). Warm, trustworthy, no over-hype.",
    "tags": [
      "ecommerce",
      "listing"
    ]
  },
  {
    "id": "bz-amazon-listing",
    "cat": "selling",
    "title": "Amazon/Flipkart Listing (Title + Bullets)",
    "desc": "A keyword-rich marketplace listing built to rank and sell.",
    "prompt": "Write a marketplace listing for [PRODUCT]. Keywords buyers search: [KEYWORDS]. Audience: [AUDIENCE].\nGive: a keyword-rich title (under 200 chars), 5 benefit bullets (feature + benefit), a short A+ description, and 8 backend search terms. Don't keyword-stuff the title unnaturally.",
    "tags": [
      "ecommerce",
      "seo",
      "listing"
    ]
  },
  {
    "id": "bz-whatsapp-broadcast",
    "cat": "selling",
    "title": "WhatsApp Broadcast That Gets Replies",
    "desc": "For resellers & small businesses — drives orders without spamming.",
    "prompt": "Write a WhatsApp broadcast to sell [PRODUCT]. Offer: [OFFER]. Tone: friendly, like messaging a friend.\nUnder 60 words: one hook line, one benefit + the offer, a simple CTA (\"Reply YES to order\" or link [LINK]). Give 2 versions: English and Hinglish.",
    "tags": [
      "whatsapp",
      "reseller",
      "sales"
    ]
  },
  {
    "id": "bz-festival-campaign",
    "cat": "selling",
    "title": "Festival Sale Campaign Pack",
    "desc": "Ready festive promo: post caption + WhatsApp + story line.",
    "prompt": "Create a [FESTIVAL] sale campaign for my business selling [PRODUCT]. Offer: [OFFER]. Audience: [AUDIENCE].\nGive: 1 Instagram caption (festive + CTA), 1 WhatsApp broadcast (under 60 words), 1 Story line + sticker idea, and 3 festive hashtags. Real festive emotion, not cheesy.",
    "tags": [
      "festival",
      "campaign"
    ]
  },
  {
    "id": "bz-cold-dm",
    "cat": "selling",
    "title": "Cold DM to Land Local Clients",
    "desc": "For freelancers/agencies — a DM that gets replies, not \"seen\".",
    "prompt": "Write a cold DM pitching my service [SERVICE] to [TYPE OF BUSINESS]. What I deliver: [VALUE RESULT].\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions with different openers.",
    "tags": [
      "outreach",
      "clients"
    ]
  },
  {
    "id": "bz-story-selling",
    "cat": "selling",
    "title": "Sell Without Being Salesy",
    "desc": "Story-based soft-sell so you promote without annoying followers.",
    "prompt": "Write a story-based post to sell [PRODUCT SERVICE] without sounding salesy. Audience: [AUDIENCE]. Transformation: [BEFORE AFTER].\nOpen with a relatable moment, show the struggle, naturally introduce the solution, end with a soft honest CTA. Give a Reel-script version + a caption version.",
    "tags": [
      "storytelling",
      "soft sell"
    ]
  },
  {
    "id": "bz-testimonial-request",
    "cat": "selling",
    "title": "Ask for Testimonials & Reviews",
    "desc": "Polite messages that actually get customers to send reviews.",
    "prompt": "Write a message asking a happy customer for a testimonial for [PRODUCT SERVICE]. Warm, easy, no pressure.\nGive: a WhatsApp version (short, with 2 simple questions to make it easy), a version asking for a Google/Instagram review with [LINK], and a line offering a small thank-you.",
    "tags": [
      "reviews",
      "social proof"
    ]
  },
  {
    "id": "bz-objection-handling",
    "cat": "selling",
    "title": "Handle \"It's Too Expensive\" + Objections",
    "desc": "Confident replies to common sales objections.",
    "prompt": "My product/service: [WHAT YOU SELL], price [PRICE]. Audience: [AUDIENCE].\nGive me confident, non-pushy replies to these objections: \"too expensive\", \"I'll think about it\", \"I found it cheaper\", and \"not right now\". Each reply: acknowledge, reframe value, gentle next step.",
    "tags": [
      "objections",
      "sales"
    ]
  },
  {
    "id": "bz-offer-stack",
    "cat": "selling",
    "title": "Build an Irresistible Offer",
    "desc": "Package your product so the value feels obvious.",
    "prompt": "Help me build an irresistible offer for [PRODUCT SERVICE]. Core thing: [WHAT THEY GET]. Price: [PRICE]. Audience: [AUDIENCE].\nSuggest: the main promise, 2-3 bonuses that boost value, a risk-reversal (guarantee), a reason to act now, and how to present it. Keep it honest and deliverable.",
    "tags": [
      "offer",
      "pricing"
    ]
  },
  {
    "id": "bz-bundle",
    "cat": "selling",
    "title": "Product Bundle / Combo Ideas",
    "desc": "Increase order value with smart bundles.",
    "prompt": "My products: [LIST PRODUCTS PRICES]. Audience: [AUDIENCE].\nSuggest 3 bundle/combo ideas that raise average order value, with a name, what's inside, a bundle price, and the \"why it's a deal\" line for each. Indian pricing psychology welcome (e.g. ₹999 combos).",
    "tags": [
      "upsell",
      "pricing"
    ]
  },
  {
    "id": "bz-pricing-strategy",
    "cat": "selling",
    "title": "Pricing Strategy Sanity Check",
    "desc": "Get a structured view on how to price your product.",
    "prompt": "I sell [PRODUCT SERVICE]. My cost: [COST]. Current price: [PRICE]. Competitors charge: [COMPETITOR PRICES]. Audience: [AUDIENCE].\nWalk me through pricing options (cost-plus, value-based, tiered), the pros/cons for my case, and a recommendation with a suggested price + reasoning. Be practical.",
    "tags": [
      "pricing",
      "strategy"
    ]
  },
  {
    "id": "bz-elevator-pitch",
    "cat": "selling",
    "title": "One-Line Business Pitch",
    "desc": "Explain what you do in a single clear sentence.",
    "prompt": "Help me write a one-line pitch for my business.\nWhat I do: [WHAT YOU DO]. Who for: [AUDIENCE]. The result/difference: [VALUE].\nGive 5 versions (clear, no jargon) in the format \"I help [WHO] [DO WHAT] so they [OUTCOME]\". Then pick the strongest.",
    "tags": [
      "pitch",
      "positioning"
    ]
  },
  {
    "id": "bz-sales-page",
    "cat": "selling",
    "title": "Simple Sales Page Outline",
    "desc": "A high-converting structure for a product/service page.",
    "prompt": "Outline a sales page for [PRODUCT SERVICE], audience [AUDIENCE], price [PRICE].\nSections: hook headline, the problem, the solution (your offer), benefits, social proof, what's included, pricing, guarantee, FAQ, and final CTA. Give a 1-2 line draft for each section.",
    "tags": [
      "sales page",
      "copywriting"
    ]
  },
  {
    "id": "bz-faq-page",
    "cat": "selling",
    "title": "Customer FAQ (Reduce Doubts)",
    "desc": "Pre-answer the questions that stop people buying.",
    "prompt": "Write a customer FAQ for [PRODUCT SERVICE], audience [AUDIENCE].\nCover the 10 questions that actually stop people from buying (shipping, returns, sizing/fit, payment, COD, quality, time to deliver, support). Keep answers short, honest, and reassuring.",
    "tags": [
      "faq",
      "conversion"
    ]
  },
  {
    "id": "bz-abandoned-cart",
    "cat": "selling",
    "title": "Abandoned Cart Recovery Messages",
    "desc": "Win back shoppers who didn't check out.",
    "prompt": "Write a 3-message abandoned-cart sequence for [PRODUCT] (audience [AUDIENCE]).\nMsg 1 (reminder, friendly), Msg 2 (handle hesitation + a benefit), Msg 3 (gentle urgency or small incentive [INCENTIVE]). Give WhatsApp + email versions. Short and human.",
    "tags": [
      "ecommerce",
      "recovery"
    ]
  },
  {
    "id": "bz-launch-plan",
    "cat": "selling",
    "title": "Small Business Launch Plan",
    "desc": "A simple go-to-market plan for a new product.",
    "prompt": "I'm launching [PRODUCT] for [AUDIENCE] at [PRICE]. Budget: [BUDGET]. Channels I have: [CHANNELS].\nGive a simple launch plan: pre-launch buzz, launch-day actions, the first-week push, and what to say where. Keep it realistic for a small team/solo founder.",
    "tags": [
      "launch",
      "strategy"
    ]
  },
  {
    "id": "bz-reorder-loyalty",
    "cat": "selling",
    "title": "Repeat-Customer & Loyalty Messages",
    "desc": "Bring customers back with thoughtful follow-ups.",
    "prompt": "Write messages to bring back past customers of [PRODUCT SERVICE].\nGive: a \"we miss you\" reactivation message, a loyalty/repeat-order offer [OFFER], and a post-purchase thank-you that encourages a re-order or referral. WhatsApp-friendly, warm, under 60 words each.",
    "tags": [
      "retention",
      "loyalty"
    ]
  },
  {
    "id": "bz-referral-program",
    "cat": "selling",
    "title": "Referral Program Setup",
    "desc": "A simple \"refer a friend\" program with the messaging.",
    "prompt": "Design a simple referral program for my business [WHAT YOU SELL], audience [AUDIENCE].\nSuggest the reward structure (for referrer + friend), how it works in 3 steps, and the message customers can forward to friends. Keep it easy and worth sharing.",
    "tags": [
      "referral",
      "growth"
    ]
  },
  {
    "id": "bz-brand-name",
    "cat": "selling",
    "title": "Business / Product Name Ideas",
    "desc": "Brandable, available-sounding name options.",
    "prompt": "I need a name for my [TYPE OF BUSINESS PRODUCT] selling [WHAT] to [AUDIENCE]. Vibe: [VIBE].\nGive 20 brandable name ideas (short, easy to say/spell, ideally .com-able), grouped by style. Flag my top 5 and suggest a tagline for each. I'll check trademark/domain myself.",
    "tags": [
      "naming",
      "branding"
    ]
  },
  {
    "id": "bz-bio-link-business",
    "cat": "selling",
    "title": "Link-in-Bio Page for a Business",
    "desc": "Bio-page copy + buttons that drive orders and inquiries.",
    "prompt": "Write link-in-bio page copy for my business [WHAT YOU SELL], audience [AUDIENCE].\nMy links: [LIST].\nGive a headline (who I help + how), a sub-line, and a benefit-driven button label for each link (not just \"Shop\"). Tight and scannable.",
    "tags": [
      "link in bio",
      "conversion"
    ]
  },
  {
    "id": "bz-google-business",
    "cat": "selling",
    "title": "Google Business Profile Description + Posts",
    "desc": "Local SEO copy for your Google listing.",
    "prompt": "Write a Google Business Profile description for my [TYPE OF BUSINESS] in [CITY], serving [AUDIENCE]. Keywords: [KEYWORDS].\nAlso give me 3 short \"Google Posts\" (offers/updates) I can publish. Keep the description keyword-aware but natural, under 750 chars.",
    "tags": [
      "local seo",
      "google"
    ]
  },
  {
    "id": "bz-upsell-script",
    "cat": "selling",
    "title": "Upsell / Cross-Sell Script",
    "desc": "Suggest add-ons at checkout without being pushy.",
    "prompt": "A customer is buying [PRODUCT]. Related items I sell: [RELATED ITEMS].\nWrite a friendly upsell/cross-sell message (\"customers also love…\") for WhatsApp/checkout that feels helpful, suggests 1-2 relevant add-ons, and makes the combo feel worth it. Audience: [AUDIENCE].",
    "tags": [
      "upsell",
      "sales"
    ]
  },
  {
    "id": "bz-complaint-reply",
    "cat": "selling",
    "title": "Reply to an Unhappy Customer",
    "desc": "Defuse complaints and keep the relationship.",
    "prompt": "A customer is unhappy: \"[PASTE COMPLAINT]\". Product/service: [WHAT IT IS].\nWrite a calm, empathetic reply that acknowledges the issue, takes responsibility where fair, offers a clear solution [WHAT YOU CAN OFFER], and keeps them as a customer. Give a WhatsApp and a public-review-reply version.",
    "tags": [
      "support",
      "replies"
    ]
  },
  {
    "id": "bz-cod-trust",
    "cat": "selling",
    "title": "Build Buyer Trust (First-Time Customers)",
    "desc": "Copy that overcomes \"is this shop legit?\" hesitation.",
    "prompt": "New customers hesitate to buy from my small business [WHAT YOU SELL] online. Audience: [AUDIENCE].\nGive me trust-building copy I can add to my page/bio/messages: a short \"why trust us\" block, proof elements to show (reviews, COD, returns, real photos), and a reassuring reply for \"is this genuine?\". Honest and confidence-building.",
    "tags": [
      "trust",
      "conversion"
    ]
  },
  {
    "id": "bz-catalog-intro",
    "cat": "selling",
    "title": "Catalogue / Collection Intro Copy",
    "desc": "An inviting intro for a product catalogue or new collection.",
    "prompt": "Write intro copy for my [COLLECTION CATALOGUE NAME] of [WHAT IT IS] for [AUDIENCE].\nGive: a catchy collection name (if needed), a 2-3 line intro that sets the vibe and makes people want to browse, and a CTA to shop/DM. Tone: [TONE]. Optionally a Hinglish version.",
    "tags": [
      "catalogue",
      "copywriting"
    ]
  },
  {
    "id": "bp-se-product-fitness",
    "cat": "selling",
    "title": "Product Description That Sells — Fitness Coaches",
    "desc": "Benefit-led copy for fitness coaching.",
    "prompt": "Write a persuasive product description for [PRODUCT] from fitness coaching, aimed at people who want to get fit.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "fitness"
    ]
  },
  {
    "id": "bp-se-product-yoga",
    "cat": "selling",
    "title": "Product Description That Sells — Yoga Instructors",
    "desc": "Benefit-led copy for yoga teaching.",
    "prompt": "Write a persuasive product description for [PRODUCT] from yoga teaching, aimed at people seeking calm & flexibility.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "yoga"
    ]
  },
  {
    "id": "bp-se-product-nutrition",
    "cat": "selling",
    "title": "Product Description That Sells — Nutritionists",
    "desc": "Benefit-led copy for nutrition & diet coaching.",
    "prompt": "Write a persuasive product description for [PRODUCT] from nutrition & diet coaching, aimed at people who want to eat healthier.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "nutrition"
    ]
  },
  {
    "id": "bp-se-product-homebakery",
    "cat": "selling",
    "title": "Product Description That Sells — Home Bakers",
    "desc": "Benefit-led copy for a home baking business.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a home baking business, aimed at people who order cakes & desserts.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "homebakery"
    ]
  },
  {
    "id": "bp-se-product-cloudkitchen",
    "cat": "selling",
    "title": "Product Description That Sells — Cloud Kitchens",
    "desc": "Benefit-led copy for a cloud kitchen.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a cloud kitchen, aimed at hungry locals ordering online.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-se-product-cafe",
    "cat": "selling",
    "title": "Product Description That Sells — Cafés & Restaurants",
    "desc": "Benefit-led copy for a café or restaurant.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a café or restaurant, aimed at local foodies.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "cafe"
    ]
  },
  {
    "id": "bp-se-product-fashion",
    "cat": "selling",
    "title": "Product Description That Sells — Fashion Brands",
    "desc": "Benefit-led copy for a fashion & clothing brand.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a fashion & clothing brand, aimed at style-conscious shoppers.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "fashion"
    ]
  },
  {
    "id": "bp-se-product-jewellery",
    "cat": "selling",
    "title": "Product Description That Sells — Jewellery Brands",
    "desc": "Benefit-led copy for a jewellery business.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a jewellery business, aimed at people shopping for jewellery.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "jewellery"
    ]
  },
  {
    "id": "bp-se-product-handmade",
    "cat": "selling",
    "title": "Product Description That Sells — Handmade & Craft Sellers",
    "desc": "Benefit-led copy for a handmade craft business.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a handmade craft business, aimed at people who love handmade gifts.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "handmade"
    ]
  },
  {
    "id": "bp-se-product-skincare",
    "cat": "selling",
    "title": "Product Description That Sells — Skincare Brands",
    "desc": "Benefit-led copy for a skincare brand.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a skincare brand, aimed at people who want better skin.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "skincare"
    ]
  },
  {
    "id": "bp-se-product-makeup",
    "cat": "selling",
    "title": "Product Description That Sells — Makeup Artists",
    "desc": "Benefit-led copy for a makeup artistry business.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a makeup artistry business, aimed at brides & beauty lovers.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "makeup"
    ]
  },
  {
    "id": "bp-se-product-salon",
    "cat": "selling",
    "title": "Product Description That Sells — Salons & Spas",
    "desc": "Benefit-led copy for a salon or spa.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a salon or spa, aimed at people booking beauty services.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "salon"
    ]
  },
  {
    "id": "bp-se-product-travel",
    "cat": "selling",
    "title": "Product Description That Sells — Travel Creators",
    "desc": "Benefit-led copy for travel content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from travel content, aimed at people planning trips.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "travel"
    ]
  },
  {
    "id": "bp-se-product-photography",
    "cat": "selling",
    "title": "Product Description That Sells — Photographers",
    "desc": "Benefit-led copy for a photography business.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a photography business, aimed at couples & brands needing shoots.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "photography"
    ]
  },
  {
    "id": "bp-se-product-realestate",
    "cat": "selling",
    "title": "Product Description That Sells — Real Estate Agents",
    "desc": "Benefit-led copy for real estate.",
    "prompt": "Write a persuasive product description for [PRODUCT] from real estate, aimed at home buyers & sellers.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "realestate"
    ]
  },
  {
    "id": "bp-se-product-interior",
    "cat": "selling",
    "title": "Product Description That Sells — Interior Designers",
    "desc": "Benefit-led copy for interior design.",
    "prompt": "Write a persuasive product description for [PRODUCT] from interior design, aimed at homeowners renovating.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "interior"
    ]
  },
  {
    "id": "bp-se-product-finance",
    "cat": "selling",
    "title": "Product Description That Sells — Personal Finance Creators",
    "desc": "Benefit-led copy for personal finance content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from personal finance content, aimed at people wanting to manage money.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "finance"
    ]
  },
  {
    "id": "bp-se-product-trading",
    "cat": "selling",
    "title": "Product Description That Sells — Stock Market Educators",
    "desc": "Benefit-led copy for stock market education.",
    "prompt": "Write a persuasive product description for [PRODUCT] from stock market education, aimed at new investors & traders.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "trading"
    ]
  },
  {
    "id": "bp-se-product-edtech",
    "cat": "selling",
    "title": "Product Description That Sells — Online Tutors",
    "desc": "Benefit-led copy for online tutoring.",
    "prompt": "Write a persuasive product description for [PRODUCT] from online tutoring, aimed at students & parents.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "edtech"
    ]
  },
  {
    "id": "bp-se-product-examprep",
    "cat": "selling",
    "title": "Product Description That Sells — Exam Prep Creators",
    "desc": "Benefit-led copy for exam prep content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from exam prep content, aimed at students cracking competitive exams.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "examprep"
    ]
  },
  {
    "id": "bp-se-product-coding",
    "cat": "selling",
    "title": "Product Description That Sells — Coding Educators",
    "desc": "Benefit-led copy for coding & tech education.",
    "prompt": "Write a persuasive product description for [PRODUCT] from coding & tech education, aimed at aspiring developers.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "coding"
    ]
  },
  {
    "id": "bp-se-product-gadgets",
    "cat": "selling",
    "title": "Product Description That Sells — Tech Reviewers",
    "desc": "Benefit-led copy for tech & gadget reviews.",
    "prompt": "Write a persuasive product description for [PRODUCT] from tech & gadget reviews, aimed at people deciding what to buy.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "gadgets"
    ]
  },
  {
    "id": "bp-se-product-gaming",
    "cat": "selling",
    "title": "Product Description That Sells — Gaming Creators",
    "desc": "Benefit-led copy for gaming content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from gaming content, aimed at gamers & fans.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "gaming"
    ]
  },
  {
    "id": "bp-se-product-saas",
    "cat": "selling",
    "title": "Product Description That Sells — SaaS Founders",
    "desc": "Benefit-led copy for a SaaS product.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a SaaS product, aimed at businesses that need the tool.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "saas"
    ]
  },
  {
    "id": "bp-se-product-freelance",
    "cat": "selling",
    "title": "Product Description That Sells — Freelancers",
    "desc": "Benefit-led copy for freelancing services.",
    "prompt": "Write a persuasive product description for [PRODUCT] from freelancing services, aimed at clients who need the service.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "freelance"
    ]
  },
  {
    "id": "bp-se-product-agency",
    "cat": "selling",
    "title": "Product Description That Sells — Marketing Agencies",
    "desc": "Benefit-led copy for a marketing agency.",
    "prompt": "Write a persuasive product description for [PRODUCT] from a marketing agency, aimed at business owners who want growth.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "agency"
    ]
  },
  {
    "id": "bp-se-product-parenting",
    "cat": "selling",
    "title": "Product Description That Sells — Parenting Creators",
    "desc": "Benefit-led copy for parenting content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from parenting content, aimed at new & busy parents.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "parenting"
    ]
  },
  {
    "id": "bp-se-product-pets",
    "cat": "selling",
    "title": "Product Description That Sells — Pet Care Creators",
    "desc": "Benefit-led copy for pet care content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from pet care content, aimed at pet parents.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "pets"
    ]
  },
  {
    "id": "bp-se-product-gardening",
    "cat": "selling",
    "title": "Product Description That Sells — Gardening Creators",
    "desc": "Benefit-led copy for gardening & plants content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from gardening & plants content, aimed at plant lovers.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "gardening"
    ]
  },
  {
    "id": "bp-se-product-astrology",
    "cat": "selling",
    "title": "Product Description That Sells — Astrology Creators",
    "desc": "Benefit-led copy for astrology & spirituality content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from astrology & spirituality content, aimed at people seeking guidance.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "astrology"
    ]
  },
  {
    "id": "bp-se-product-motivation",
    "cat": "selling",
    "title": "Product Description That Sells — Motivational Creators",
    "desc": "Benefit-led copy for motivation & self-help content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from motivation & self-help content, aimed at people who want to level up.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "motivation"
    ]
  },
  {
    "id": "bp-se-product-food",
    "cat": "selling",
    "title": "Product Description That Sells — Food Bloggers",
    "desc": "Benefit-led copy for food & recipe content.",
    "prompt": "Write a persuasive product description for [PRODUCT] from food & recipe content, aimed at home cooks & foodies.\nLead with the main benefit [BENEFIT], list 3 features as benefits, handle one objection, add a trust line, and close with a CTA. Warm, trustworthy.",
    "tags": [
      "product",
      "copy",
      "food"
    ]
  },
  {
    "id": "bp-se-festival-fitness",
    "cat": "selling",
    "title": "Festival Sale Post — Fitness Coaches",
    "desc": "A festive promo that drives orders for fitness coaching.",
    "prompt": "Write a [FESTIVAL] sale post for fitness coaching selling [PRODUCT]. Offer: [OFFER]. Audience: people who want to get fit.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "fitness"
    ]
  },
  {
    "id": "bp-se-festival-yoga",
    "cat": "selling",
    "title": "Festival Sale Post — Yoga Instructors",
    "desc": "A festive promo that drives orders for yoga teaching.",
    "prompt": "Write a [FESTIVAL] sale post for yoga teaching selling [PRODUCT]. Offer: [OFFER]. Audience: people seeking calm & flexibility.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "yoga"
    ]
  },
  {
    "id": "bp-se-festival-nutrition",
    "cat": "selling",
    "title": "Festival Sale Post — Nutritionists",
    "desc": "A festive promo that drives orders for nutrition & diet coaching.",
    "prompt": "Write a [FESTIVAL] sale post for nutrition & diet coaching selling [PRODUCT]. Offer: [OFFER]. Audience: people who want to eat healthier.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "nutrition"
    ]
  },
  {
    "id": "bp-se-festival-homebakery",
    "cat": "selling",
    "title": "Festival Sale Post — Home Bakers",
    "desc": "A festive promo that drives orders for a home baking business.",
    "prompt": "Write a [FESTIVAL] sale post for a home baking business selling [PRODUCT]. Offer: [OFFER]. Audience: people who order cakes & desserts.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "homebakery"
    ]
  },
  {
    "id": "bp-se-festival-cloudkitchen",
    "cat": "selling",
    "title": "Festival Sale Post — Cloud Kitchens",
    "desc": "A festive promo that drives orders for a cloud kitchen.",
    "prompt": "Write a [FESTIVAL] sale post for a cloud kitchen selling [PRODUCT]. Offer: [OFFER]. Audience: hungry locals ordering online.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-se-festival-cafe",
    "cat": "selling",
    "title": "Festival Sale Post — Cafés & Restaurants",
    "desc": "A festive promo that drives orders for a café or restaurant.",
    "prompt": "Write a [FESTIVAL] sale post for a café or restaurant selling [PRODUCT]. Offer: [OFFER]. Audience: local foodies.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "cafe"
    ]
  },
  {
    "id": "bp-se-festival-fashion",
    "cat": "selling",
    "title": "Festival Sale Post — Fashion Brands",
    "desc": "A festive promo that drives orders for a fashion & clothing brand.",
    "prompt": "Write a [FESTIVAL] sale post for a fashion & clothing brand selling [PRODUCT]. Offer: [OFFER]. Audience: style-conscious shoppers.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "fashion"
    ]
  },
  {
    "id": "bp-se-festival-jewellery",
    "cat": "selling",
    "title": "Festival Sale Post — Jewellery Brands",
    "desc": "A festive promo that drives orders for a jewellery business.",
    "prompt": "Write a [FESTIVAL] sale post for a jewellery business selling [PRODUCT]. Offer: [OFFER]. Audience: people shopping for jewellery.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "jewellery"
    ]
  },
  {
    "id": "bp-se-festival-handmade",
    "cat": "selling",
    "title": "Festival Sale Post — Handmade & Craft Sellers",
    "desc": "A festive promo that drives orders for a handmade craft business.",
    "prompt": "Write a [FESTIVAL] sale post for a handmade craft business selling [PRODUCT]. Offer: [OFFER]. Audience: people who love handmade gifts.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "handmade"
    ]
  },
  {
    "id": "bp-se-festival-skincare",
    "cat": "selling",
    "title": "Festival Sale Post — Skincare Brands",
    "desc": "A festive promo that drives orders for a skincare brand.",
    "prompt": "Write a [FESTIVAL] sale post for a skincare brand selling [PRODUCT]. Offer: [OFFER]. Audience: people who want better skin.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "skincare"
    ]
  },
  {
    "id": "bp-se-festival-makeup",
    "cat": "selling",
    "title": "Festival Sale Post — Makeup Artists",
    "desc": "A festive promo that drives orders for a makeup artistry business.",
    "prompt": "Write a [FESTIVAL] sale post for a makeup artistry business selling [PRODUCT]. Offer: [OFFER]. Audience: brides & beauty lovers.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "makeup"
    ]
  },
  {
    "id": "bp-se-festival-salon",
    "cat": "selling",
    "title": "Festival Sale Post — Salons & Spas",
    "desc": "A festive promo that drives orders for a salon or spa.",
    "prompt": "Write a [FESTIVAL] sale post for a salon or spa selling [PRODUCT]. Offer: [OFFER]. Audience: people booking beauty services.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "salon"
    ]
  },
  {
    "id": "bp-se-festival-travel",
    "cat": "selling",
    "title": "Festival Sale Post — Travel Creators",
    "desc": "A festive promo that drives orders for travel content.",
    "prompt": "Write a [FESTIVAL] sale post for travel content selling [PRODUCT]. Offer: [OFFER]. Audience: people planning trips.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "travel"
    ]
  },
  {
    "id": "bp-se-festival-photography",
    "cat": "selling",
    "title": "Festival Sale Post — Photographers",
    "desc": "A festive promo that drives orders for a photography business.",
    "prompt": "Write a [FESTIVAL] sale post for a photography business selling [PRODUCT]. Offer: [OFFER]. Audience: couples & brands needing shoots.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "photography"
    ]
  },
  {
    "id": "bp-se-festival-realestate",
    "cat": "selling",
    "title": "Festival Sale Post — Real Estate Agents",
    "desc": "A festive promo that drives orders for real estate.",
    "prompt": "Write a [FESTIVAL] sale post for real estate selling [PRODUCT]. Offer: [OFFER]. Audience: home buyers & sellers.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "realestate"
    ]
  },
  {
    "id": "bp-se-festival-interior",
    "cat": "selling",
    "title": "Festival Sale Post — Interior Designers",
    "desc": "A festive promo that drives orders for interior design.",
    "prompt": "Write a [FESTIVAL] sale post for interior design selling [PRODUCT]. Offer: [OFFER]. Audience: homeowners renovating.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "interior"
    ]
  },
  {
    "id": "bp-se-festival-finance",
    "cat": "selling",
    "title": "Festival Sale Post — Personal Finance Creators",
    "desc": "A festive promo that drives orders for personal finance content.",
    "prompt": "Write a [FESTIVAL] sale post for personal finance content selling [PRODUCT]. Offer: [OFFER]. Audience: people wanting to manage money.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "finance"
    ]
  },
  {
    "id": "bp-se-festival-trading",
    "cat": "selling",
    "title": "Festival Sale Post — Stock Market Educators",
    "desc": "A festive promo that drives orders for stock market education.",
    "prompt": "Write a [FESTIVAL] sale post for stock market education selling [PRODUCT]. Offer: [OFFER]. Audience: new investors & traders.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "trading"
    ]
  },
  {
    "id": "bp-se-festival-edtech",
    "cat": "selling",
    "title": "Festival Sale Post — Online Tutors",
    "desc": "A festive promo that drives orders for online tutoring.",
    "prompt": "Write a [FESTIVAL] sale post for online tutoring selling [PRODUCT]. Offer: [OFFER]. Audience: students & parents.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "edtech"
    ]
  },
  {
    "id": "bp-se-festival-examprep",
    "cat": "selling",
    "title": "Festival Sale Post — Exam Prep Creators",
    "desc": "A festive promo that drives orders for exam prep content.",
    "prompt": "Write a [FESTIVAL] sale post for exam prep content selling [PRODUCT]. Offer: [OFFER]. Audience: students cracking competitive exams.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "examprep"
    ]
  },
  {
    "id": "bp-se-festival-coding",
    "cat": "selling",
    "title": "Festival Sale Post — Coding Educators",
    "desc": "A festive promo that drives orders for coding & tech education.",
    "prompt": "Write a [FESTIVAL] sale post for coding & tech education selling [PRODUCT]. Offer: [OFFER]. Audience: aspiring developers.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "coding"
    ]
  },
  {
    "id": "bp-se-festival-gadgets",
    "cat": "selling",
    "title": "Festival Sale Post — Tech Reviewers",
    "desc": "A festive promo that drives orders for tech & gadget reviews.",
    "prompt": "Write a [FESTIVAL] sale post for tech & gadget reviews selling [PRODUCT]. Offer: [OFFER]. Audience: people deciding what to buy.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "gadgets"
    ]
  },
  {
    "id": "bp-se-festival-gaming",
    "cat": "selling",
    "title": "Festival Sale Post — Gaming Creators",
    "desc": "A festive promo that drives orders for gaming content.",
    "prompt": "Write a [FESTIVAL] sale post for gaming content selling [PRODUCT]. Offer: [OFFER]. Audience: gamers & fans.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "gaming"
    ]
  },
  {
    "id": "bp-se-festival-saas",
    "cat": "selling",
    "title": "Festival Sale Post — SaaS Founders",
    "desc": "A festive promo that drives orders for a SaaS product.",
    "prompt": "Write a [FESTIVAL] sale post for a SaaS product selling [PRODUCT]. Offer: [OFFER]. Audience: businesses that need the tool.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "saas"
    ]
  },
  {
    "id": "bp-se-festival-freelance",
    "cat": "selling",
    "title": "Festival Sale Post — Freelancers",
    "desc": "A festive promo that drives orders for freelancing services.",
    "prompt": "Write a [FESTIVAL] sale post for freelancing services selling [PRODUCT]. Offer: [OFFER]. Audience: clients who need the service.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "freelance"
    ]
  },
  {
    "id": "bp-se-festival-agency",
    "cat": "selling",
    "title": "Festival Sale Post — Marketing Agencies",
    "desc": "A festive promo that drives orders for a marketing agency.",
    "prompt": "Write a [FESTIVAL] sale post for a marketing agency selling [PRODUCT]. Offer: [OFFER]. Audience: business owners who want growth.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "agency"
    ]
  },
  {
    "id": "bp-se-festival-parenting",
    "cat": "selling",
    "title": "Festival Sale Post — Parenting Creators",
    "desc": "A festive promo that drives orders for parenting content.",
    "prompt": "Write a [FESTIVAL] sale post for parenting content selling [PRODUCT]. Offer: [OFFER]. Audience: new & busy parents.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "parenting"
    ]
  },
  {
    "id": "bp-se-festival-pets",
    "cat": "selling",
    "title": "Festival Sale Post — Pet Care Creators",
    "desc": "A festive promo that drives orders for pet care content.",
    "prompt": "Write a [FESTIVAL] sale post for pet care content selling [PRODUCT]. Offer: [OFFER]. Audience: pet parents.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "pets"
    ]
  },
  {
    "id": "bp-se-festival-gardening",
    "cat": "selling",
    "title": "Festival Sale Post — Gardening Creators",
    "desc": "A festive promo that drives orders for gardening & plants content.",
    "prompt": "Write a [FESTIVAL] sale post for gardening & plants content selling [PRODUCT]. Offer: [OFFER]. Audience: plant lovers.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "gardening"
    ]
  },
  {
    "id": "bp-se-festival-astrology",
    "cat": "selling",
    "title": "Festival Sale Post — Astrology Creators",
    "desc": "A festive promo that drives orders for astrology & spirituality content.",
    "prompt": "Write a [FESTIVAL] sale post for astrology & spirituality content selling [PRODUCT]. Offer: [OFFER]. Audience: people seeking guidance.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "astrology"
    ]
  },
  {
    "id": "bp-se-festival-motivation",
    "cat": "selling",
    "title": "Festival Sale Post — Motivational Creators",
    "desc": "A festive promo that drives orders for motivation & self-help content.",
    "prompt": "Write a [FESTIVAL] sale post for motivation & self-help content selling [PRODUCT]. Offer: [OFFER]. Audience: people who want to level up.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "motivation"
    ]
  },
  {
    "id": "bp-se-festival-food",
    "cat": "selling",
    "title": "Festival Sale Post — Food Bloggers",
    "desc": "A festive promo that drives orders for food & recipe content.",
    "prompt": "Write a [FESTIVAL] sale post for food & recipe content selling [PRODUCT]. Offer: [OFFER]. Audience: home cooks & foodies.\nTone: exciting but trustworthy. Tie the festival to the brand, and end with a clear WhatsApp/DM order CTA. Add 3 festive hashtags.",
    "tags": [
      "festive",
      "sale",
      "food"
    ]
  },
  {
    "id": "bp-se-faq-fitness",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Fitness Coaches",
    "desc": "Pre-answer what stops people who want to get fit from buying.",
    "prompt": "Write a customer FAQ for fitness coaching, audience people who want to get fit.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "fitness"
    ]
  },
  {
    "id": "bp-se-faq-yoga",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Yoga Instructors",
    "desc": "Pre-answer what stops people seeking calm & flexibility from buying.",
    "prompt": "Write a customer FAQ for yoga teaching, audience people seeking calm & flexibility.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "yoga"
    ]
  },
  {
    "id": "bp-se-faq-nutrition",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Nutritionists",
    "desc": "Pre-answer what stops people who want to eat healthier from buying.",
    "prompt": "Write a customer FAQ for nutrition & diet coaching, audience people who want to eat healthier.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "nutrition"
    ]
  },
  {
    "id": "bp-se-faq-homebakery",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Home Bakers",
    "desc": "Pre-answer what stops people who order cakes & desserts from buying.",
    "prompt": "Write a customer FAQ for a home baking business, audience people who order cakes & desserts.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "homebakery"
    ]
  },
  {
    "id": "bp-se-faq-cloudkitchen",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Cloud Kitchens",
    "desc": "Pre-answer what stops hungry locals ordering online from buying.",
    "prompt": "Write a customer FAQ for a cloud kitchen, audience hungry locals ordering online.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-se-faq-cafe",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Cafés & Restaurants",
    "desc": "Pre-answer what stops local foodies from buying.",
    "prompt": "Write a customer FAQ for a café or restaurant, audience local foodies.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "cafe"
    ]
  },
  {
    "id": "bp-se-faq-fashion",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Fashion Brands",
    "desc": "Pre-answer what stops style-conscious shoppers from buying.",
    "prompt": "Write a customer FAQ for a fashion & clothing brand, audience style-conscious shoppers.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "fashion"
    ]
  },
  {
    "id": "bp-se-faq-jewellery",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Jewellery Brands",
    "desc": "Pre-answer what stops people shopping for jewellery from buying.",
    "prompt": "Write a customer FAQ for a jewellery business, audience people shopping for jewellery.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "jewellery"
    ]
  },
  {
    "id": "bp-se-faq-handmade",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Handmade & Craft Sellers",
    "desc": "Pre-answer what stops people who love handmade gifts from buying.",
    "prompt": "Write a customer FAQ for a handmade craft business, audience people who love handmade gifts.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "handmade"
    ]
  },
  {
    "id": "bp-se-faq-skincare",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Skincare Brands",
    "desc": "Pre-answer what stops people who want better skin from buying.",
    "prompt": "Write a customer FAQ for a skincare brand, audience people who want better skin.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "skincare"
    ]
  },
  {
    "id": "bp-se-faq-makeup",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Makeup Artists",
    "desc": "Pre-answer what stops brides & beauty lovers from buying.",
    "prompt": "Write a customer FAQ for a makeup artistry business, audience brides & beauty lovers.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "makeup"
    ]
  },
  {
    "id": "bp-se-faq-salon",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Salons & Spas",
    "desc": "Pre-answer what stops people booking beauty services from buying.",
    "prompt": "Write a customer FAQ for a salon or spa, audience people booking beauty services.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "salon"
    ]
  },
  {
    "id": "bp-se-faq-travel",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Travel Creators",
    "desc": "Pre-answer what stops people planning trips from buying.",
    "prompt": "Write a customer FAQ for travel content, audience people planning trips.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "travel"
    ]
  },
  {
    "id": "bp-se-faq-photography",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Photographers",
    "desc": "Pre-answer what stops couples & brands needing shoots from buying.",
    "prompt": "Write a customer FAQ for a photography business, audience couples & brands needing shoots.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "photography"
    ]
  },
  {
    "id": "bp-se-faq-realestate",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Real Estate Agents",
    "desc": "Pre-answer what stops home buyers & sellers from buying.",
    "prompt": "Write a customer FAQ for real estate, audience home buyers & sellers.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "realestate"
    ]
  },
  {
    "id": "bp-se-faq-interior",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Interior Designers",
    "desc": "Pre-answer what stops homeowners renovating from buying.",
    "prompt": "Write a customer FAQ for interior design, audience homeowners renovating.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "interior"
    ]
  },
  {
    "id": "bp-se-faq-finance",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Personal Finance Creators",
    "desc": "Pre-answer what stops people wanting to manage money from buying.",
    "prompt": "Write a customer FAQ for personal finance content, audience people wanting to manage money.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "finance"
    ]
  },
  {
    "id": "bp-se-faq-trading",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Stock Market Educators",
    "desc": "Pre-answer what stops new investors & traders from buying.",
    "prompt": "Write a customer FAQ for stock market education, audience new investors & traders.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "trading"
    ]
  },
  {
    "id": "bp-se-faq-edtech",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Online Tutors",
    "desc": "Pre-answer what stops students & parents from buying.",
    "prompt": "Write a customer FAQ for online tutoring, audience students & parents.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "edtech"
    ]
  },
  {
    "id": "bp-se-faq-examprep",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Exam Prep Creators",
    "desc": "Pre-answer what stops students cracking competitive exams from buying.",
    "prompt": "Write a customer FAQ for exam prep content, audience students cracking competitive exams.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "examprep"
    ]
  },
  {
    "id": "bp-se-faq-coding",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Coding Educators",
    "desc": "Pre-answer what stops aspiring developers from buying.",
    "prompt": "Write a customer FAQ for coding & tech education, audience aspiring developers.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "coding"
    ]
  },
  {
    "id": "bp-se-faq-gadgets",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Tech Reviewers",
    "desc": "Pre-answer what stops people deciding what to buy from buying.",
    "prompt": "Write a customer FAQ for tech & gadget reviews, audience people deciding what to buy.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "gadgets"
    ]
  },
  {
    "id": "bp-se-faq-gaming",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Gaming Creators",
    "desc": "Pre-answer what stops gamers & fans from buying.",
    "prompt": "Write a customer FAQ for gaming content, audience gamers & fans.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "gaming"
    ]
  },
  {
    "id": "bp-se-faq-saas",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — SaaS Founders",
    "desc": "Pre-answer what stops businesses that need the tool from buying.",
    "prompt": "Write a customer FAQ for a SaaS product, audience businesses that need the tool.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "saas"
    ]
  },
  {
    "id": "bp-se-faq-freelance",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Freelancers",
    "desc": "Pre-answer what stops clients who need the service from buying.",
    "prompt": "Write a customer FAQ for freelancing services, audience clients who need the service.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "freelance"
    ]
  },
  {
    "id": "bp-se-faq-agency",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Marketing Agencies",
    "desc": "Pre-answer what stops business owners who want growth from buying.",
    "prompt": "Write a customer FAQ for a marketing agency, audience business owners who want growth.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "agency"
    ]
  },
  {
    "id": "bp-se-faq-parenting",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Parenting Creators",
    "desc": "Pre-answer what stops new & busy parents from buying.",
    "prompt": "Write a customer FAQ for parenting content, audience new & busy parents.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "parenting"
    ]
  },
  {
    "id": "bp-se-faq-pets",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Pet Care Creators",
    "desc": "Pre-answer what stops pet parents from buying.",
    "prompt": "Write a customer FAQ for pet care content, audience pet parents.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "pets"
    ]
  },
  {
    "id": "bp-se-faq-gardening",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Gardening Creators",
    "desc": "Pre-answer what stops plant lovers from buying.",
    "prompt": "Write a customer FAQ for gardening & plants content, audience plant lovers.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "gardening"
    ]
  },
  {
    "id": "bp-se-faq-astrology",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Astrology Creators",
    "desc": "Pre-answer what stops people seeking guidance from buying.",
    "prompt": "Write a customer FAQ for astrology & spirituality content, audience people seeking guidance.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "astrology"
    ]
  },
  {
    "id": "bp-se-faq-motivation",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Motivational Creators",
    "desc": "Pre-answer what stops people who want to level up from buying.",
    "prompt": "Write a customer FAQ for motivation & self-help content, audience people who want to level up.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "motivation"
    ]
  },
  {
    "id": "bp-se-faq-food",
    "cat": "selling",
    "title": "Customer FAQ (Beat Objections) — Food Bloggers",
    "desc": "Pre-answer what stops home cooks & foodies from buying.",
    "prompt": "Write a customer FAQ for food & recipe content, audience home cooks & foodies.\nAnswer the 8 questions that actually stop people buying (price, quality, delivery, returns, payment/COD, trust, timing, support). Short, honest, reassuring.",
    "tags": [
      "faq",
      "conversion",
      "food"
    ]
  },
  {
    "id": "bp-se-dm-fitness",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Fitness Coaches",
    "desc": "A reply-worthy outreach DM for fitness coaching.",
    "prompt": "Write a cold DM to pitch [SERVICE] from fitness coaching to people who want to get fit.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "fitness"
    ]
  },
  {
    "id": "bp-se-dm-yoga",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Yoga Instructors",
    "desc": "A reply-worthy outreach DM for yoga teaching.",
    "prompt": "Write a cold DM to pitch [SERVICE] from yoga teaching to people seeking calm & flexibility.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "yoga"
    ]
  },
  {
    "id": "bp-se-dm-nutrition",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Nutritionists",
    "desc": "A reply-worthy outreach DM for nutrition & diet coaching.",
    "prompt": "Write a cold DM to pitch [SERVICE] from nutrition & diet coaching to people who want to eat healthier.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "nutrition"
    ]
  },
  {
    "id": "bp-se-dm-homebakery",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Home Bakers",
    "desc": "A reply-worthy outreach DM for a home baking business.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a home baking business to people who order cakes & desserts.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "homebakery"
    ]
  },
  {
    "id": "bp-se-dm-cloudkitchen",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Cloud Kitchens",
    "desc": "A reply-worthy outreach DM for a cloud kitchen.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a cloud kitchen to hungry locals ordering online.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-se-dm-cafe",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Cafés & Restaurants",
    "desc": "A reply-worthy outreach DM for a café or restaurant.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a café or restaurant to local foodies.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "cafe"
    ]
  },
  {
    "id": "bp-se-dm-fashion",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Fashion Brands",
    "desc": "A reply-worthy outreach DM for a fashion & clothing brand.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a fashion & clothing brand to style-conscious shoppers.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "fashion"
    ]
  },
  {
    "id": "bp-se-dm-jewellery",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Jewellery Brands",
    "desc": "A reply-worthy outreach DM for a jewellery business.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a jewellery business to people shopping for jewellery.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "jewellery"
    ]
  },
  {
    "id": "bp-se-dm-handmade",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Handmade & Craft Sellers",
    "desc": "A reply-worthy outreach DM for a handmade craft business.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a handmade craft business to people who love handmade gifts.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "handmade"
    ]
  },
  {
    "id": "bp-se-dm-skincare",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Skincare Brands",
    "desc": "A reply-worthy outreach DM for a skincare brand.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a skincare brand to people who want better skin.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "skincare"
    ]
  },
  {
    "id": "bp-se-dm-makeup",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Makeup Artists",
    "desc": "A reply-worthy outreach DM for a makeup artistry business.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a makeup artistry business to brides & beauty lovers.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "makeup"
    ]
  },
  {
    "id": "bp-se-dm-salon",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Salons & Spas",
    "desc": "A reply-worthy outreach DM for a salon or spa.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a salon or spa to people booking beauty services.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "salon"
    ]
  },
  {
    "id": "bp-se-dm-travel",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Travel Creators",
    "desc": "A reply-worthy outreach DM for travel content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from travel content to people planning trips.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "travel"
    ]
  },
  {
    "id": "bp-se-dm-photography",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Photographers",
    "desc": "A reply-worthy outreach DM for a photography business.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a photography business to couples & brands needing shoots.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "photography"
    ]
  },
  {
    "id": "bp-se-dm-realestate",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Real Estate Agents",
    "desc": "A reply-worthy outreach DM for real estate.",
    "prompt": "Write a cold DM to pitch [SERVICE] from real estate to home buyers & sellers.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "realestate"
    ]
  },
  {
    "id": "bp-se-dm-interior",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Interior Designers",
    "desc": "A reply-worthy outreach DM for interior design.",
    "prompt": "Write a cold DM to pitch [SERVICE] from interior design to homeowners renovating.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "interior"
    ]
  },
  {
    "id": "bp-se-dm-finance",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Personal Finance Creators",
    "desc": "A reply-worthy outreach DM for personal finance content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from personal finance content to people wanting to manage money.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "finance"
    ]
  },
  {
    "id": "bp-se-dm-trading",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Stock Market Educators",
    "desc": "A reply-worthy outreach DM for stock market education.",
    "prompt": "Write a cold DM to pitch [SERVICE] from stock market education to new investors & traders.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "trading"
    ]
  },
  {
    "id": "bp-se-dm-edtech",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Online Tutors",
    "desc": "A reply-worthy outreach DM for online tutoring.",
    "prompt": "Write a cold DM to pitch [SERVICE] from online tutoring to students & parents.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "edtech"
    ]
  },
  {
    "id": "bp-se-dm-examprep",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Exam Prep Creators",
    "desc": "A reply-worthy outreach DM for exam prep content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from exam prep content to students cracking competitive exams.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "examprep"
    ]
  },
  {
    "id": "bp-se-dm-coding",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Coding Educators",
    "desc": "A reply-worthy outreach DM for coding & tech education.",
    "prompt": "Write a cold DM to pitch [SERVICE] from coding & tech education to aspiring developers.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "coding"
    ]
  },
  {
    "id": "bp-se-dm-gadgets",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Tech Reviewers",
    "desc": "A reply-worthy outreach DM for tech & gadget reviews.",
    "prompt": "Write a cold DM to pitch [SERVICE] from tech & gadget reviews to people deciding what to buy.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "gadgets"
    ]
  },
  {
    "id": "bp-se-dm-gaming",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Gaming Creators",
    "desc": "A reply-worthy outreach DM for gaming content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from gaming content to gamers & fans.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "gaming"
    ]
  },
  {
    "id": "bp-se-dm-saas",
    "cat": "selling",
    "title": "Cold DM to Land Clients — SaaS Founders",
    "desc": "A reply-worthy outreach DM for a SaaS product.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a SaaS product to businesses that need the tool.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "saas"
    ]
  },
  {
    "id": "bp-se-dm-freelance",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Freelancers",
    "desc": "A reply-worthy outreach DM for freelancing services.",
    "prompt": "Write a cold DM to pitch [SERVICE] from freelancing services to clients who need the service.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "freelance"
    ]
  },
  {
    "id": "bp-se-dm-agency",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Marketing Agencies",
    "desc": "A reply-worthy outreach DM for a marketing agency.",
    "prompt": "Write a cold DM to pitch [SERVICE] from a marketing agency to business owners who want growth.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "agency"
    ]
  },
  {
    "id": "bp-se-dm-parenting",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Parenting Creators",
    "desc": "A reply-worthy outreach DM for parenting content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from parenting content to new & busy parents.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "parenting"
    ]
  },
  {
    "id": "bp-se-dm-pets",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Pet Care Creators",
    "desc": "A reply-worthy outreach DM for pet care content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from pet care content to pet parents.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "pets"
    ]
  },
  {
    "id": "bp-se-dm-gardening",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Gardening Creators",
    "desc": "A reply-worthy outreach DM for gardening & plants content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from gardening & plants content to plant lovers.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "gardening"
    ]
  },
  {
    "id": "bp-se-dm-astrology",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Astrology Creators",
    "desc": "A reply-worthy outreach DM for astrology & spirituality content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from astrology & spirituality content to people seeking guidance.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "astrology"
    ]
  },
  {
    "id": "bp-se-dm-motivation",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Motivational Creators",
    "desc": "A reply-worthy outreach DM for motivation & self-help content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from motivation & self-help content to people who want to level up.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "motivation"
    ]
  },
  {
    "id": "bp-se-dm-food",
    "cat": "selling",
    "title": "Cold DM to Land Clients — Food Bloggers",
    "desc": "A reply-worthy outreach DM for food & recipe content.",
    "prompt": "Write a cold DM to pitch [SERVICE] from food & recipe content to home cooks & foodies.\nFirst line is NOT a generic compliment; lead with a specific observation or value; under 50 words; end with a low-pressure question. Give 3 versions.",
    "tags": [
      "outreach",
      "clients",
      "food"
    ]
  },
  {
    "id": "bp-se-testimonial-fitness",
    "cat": "selling",
    "title": "Testimonial Request — Fitness Coaches",
    "desc": "Get people who want to get fit to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of fitness coaching for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "fitness"
    ]
  },
  {
    "id": "bp-se-testimonial-yoga",
    "cat": "selling",
    "title": "Testimonial Request — Yoga Instructors",
    "desc": "Get people seeking calm & flexibility to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of yoga teaching for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "yoga"
    ]
  },
  {
    "id": "bp-se-testimonial-nutrition",
    "cat": "selling",
    "title": "Testimonial Request — Nutritionists",
    "desc": "Get people who want to eat healthier to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of nutrition & diet coaching for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "nutrition"
    ]
  },
  {
    "id": "bp-se-testimonial-homebakery",
    "cat": "selling",
    "title": "Testimonial Request — Home Bakers",
    "desc": "Get people who order cakes & desserts to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a home baking business for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "homebakery"
    ]
  },
  {
    "id": "bp-se-testimonial-cloudkitchen",
    "cat": "selling",
    "title": "Testimonial Request — Cloud Kitchens",
    "desc": "Get hungry locals ordering online to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a cloud kitchen for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-se-testimonial-cafe",
    "cat": "selling",
    "title": "Testimonial Request — Cafés & Restaurants",
    "desc": "Get local foodies to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a café or restaurant for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "cafe"
    ]
  },
  {
    "id": "bp-se-testimonial-fashion",
    "cat": "selling",
    "title": "Testimonial Request — Fashion Brands",
    "desc": "Get style-conscious shoppers to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a fashion & clothing brand for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "fashion"
    ]
  },
  {
    "id": "bp-se-testimonial-jewellery",
    "cat": "selling",
    "title": "Testimonial Request — Jewellery Brands",
    "desc": "Get people shopping for jewellery to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a jewellery business for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "jewellery"
    ]
  },
  {
    "id": "bp-se-testimonial-handmade",
    "cat": "selling",
    "title": "Testimonial Request — Handmade & Craft Sellers",
    "desc": "Get people who love handmade gifts to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a handmade craft business for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "handmade"
    ]
  },
  {
    "id": "bp-se-testimonial-skincare",
    "cat": "selling",
    "title": "Testimonial Request — Skincare Brands",
    "desc": "Get people who want better skin to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a skincare brand for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "skincare"
    ]
  },
  {
    "id": "bp-se-testimonial-makeup",
    "cat": "selling",
    "title": "Testimonial Request — Makeup Artists",
    "desc": "Get brides & beauty lovers to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a makeup artistry business for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "makeup"
    ]
  },
  {
    "id": "bp-se-testimonial-salon",
    "cat": "selling",
    "title": "Testimonial Request — Salons & Spas",
    "desc": "Get people booking beauty services to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a salon or spa for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "salon"
    ]
  },
  {
    "id": "bp-se-testimonial-travel",
    "cat": "selling",
    "title": "Testimonial Request — Travel Creators",
    "desc": "Get people planning trips to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of travel content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "travel"
    ]
  },
  {
    "id": "bp-se-testimonial-photography",
    "cat": "selling",
    "title": "Testimonial Request — Photographers",
    "desc": "Get couples & brands needing shoots to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a photography business for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "photography"
    ]
  },
  {
    "id": "bp-se-testimonial-realestate",
    "cat": "selling",
    "title": "Testimonial Request — Real Estate Agents",
    "desc": "Get home buyers & sellers to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of real estate for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "realestate"
    ]
  },
  {
    "id": "bp-se-testimonial-interior",
    "cat": "selling",
    "title": "Testimonial Request — Interior Designers",
    "desc": "Get homeowners renovating to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of interior design for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "interior"
    ]
  },
  {
    "id": "bp-se-testimonial-finance",
    "cat": "selling",
    "title": "Testimonial Request — Personal Finance Creators",
    "desc": "Get people wanting to manage money to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of personal finance content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "finance"
    ]
  },
  {
    "id": "bp-se-testimonial-trading",
    "cat": "selling",
    "title": "Testimonial Request — Stock Market Educators",
    "desc": "Get new investors & traders to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of stock market education for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "trading"
    ]
  },
  {
    "id": "bp-se-testimonial-edtech",
    "cat": "selling",
    "title": "Testimonial Request — Online Tutors",
    "desc": "Get students & parents to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of online tutoring for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "edtech"
    ]
  },
  {
    "id": "bp-se-testimonial-examprep",
    "cat": "selling",
    "title": "Testimonial Request — Exam Prep Creators",
    "desc": "Get students cracking competitive exams to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of exam prep content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "examprep"
    ]
  },
  {
    "id": "bp-se-testimonial-coding",
    "cat": "selling",
    "title": "Testimonial Request — Coding Educators",
    "desc": "Get aspiring developers to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of coding & tech education for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "coding"
    ]
  },
  {
    "id": "bp-se-testimonial-gadgets",
    "cat": "selling",
    "title": "Testimonial Request — Tech Reviewers",
    "desc": "Get people deciding what to buy to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of tech & gadget reviews for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "gadgets"
    ]
  },
  {
    "id": "bp-se-testimonial-gaming",
    "cat": "selling",
    "title": "Testimonial Request — Gaming Creators",
    "desc": "Get gamers & fans to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of gaming content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "gaming"
    ]
  },
  {
    "id": "bp-se-testimonial-saas",
    "cat": "selling",
    "title": "Testimonial Request — SaaS Founders",
    "desc": "Get businesses that need the tool to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a SaaS product for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "saas"
    ]
  },
  {
    "id": "bp-se-testimonial-freelance",
    "cat": "selling",
    "title": "Testimonial Request — Freelancers",
    "desc": "Get clients who need the service to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of freelancing services for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "freelance"
    ]
  },
  {
    "id": "bp-se-testimonial-agency",
    "cat": "selling",
    "title": "Testimonial Request — Marketing Agencies",
    "desc": "Get business owners who want growth to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of a marketing agency for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "agency"
    ]
  },
  {
    "id": "bp-se-testimonial-parenting",
    "cat": "selling",
    "title": "Testimonial Request — Parenting Creators",
    "desc": "Get new & busy parents to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of parenting content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "parenting"
    ]
  },
  {
    "id": "bp-se-testimonial-pets",
    "cat": "selling",
    "title": "Testimonial Request — Pet Care Creators",
    "desc": "Get pet parents to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of pet care content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "pets"
    ]
  },
  {
    "id": "bp-se-testimonial-gardening",
    "cat": "selling",
    "title": "Testimonial Request — Gardening Creators",
    "desc": "Get plant lovers to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of gardening & plants content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "gardening"
    ]
  },
  {
    "id": "bp-se-testimonial-astrology",
    "cat": "selling",
    "title": "Testimonial Request — Astrology Creators",
    "desc": "Get people seeking guidance to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of astrology & spirituality content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "astrology"
    ]
  },
  {
    "id": "bp-se-testimonial-motivation",
    "cat": "selling",
    "title": "Testimonial Request — Motivational Creators",
    "desc": "Get people who want to level up to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of motivation & self-help content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "motivation"
    ]
  },
  {
    "id": "bp-se-testimonial-food",
    "cat": "selling",
    "title": "Testimonial Request — Food Bloggers",
    "desc": "Get home cooks & foodies to send a glowing review.",
    "prompt": "Write a warm message asking a happy customer of food & recipe content for a testimonial.\nMake it easy: 2-3 simple questions to guide them. Give a WhatsApp version and a Google/Instagram review version with [LINK], plus a small thank-you line.",
    "tags": [
      "reviews",
      "social proof",
      "food"
    ]
  },
  {
    "id": "ad-meta-ad",
    "cat": "ads",
    "title": "Facebook / Instagram Ad Copy",
    "desc": "Scroll-stopping paid social ad copy with 3 angle variants.",
    "prompt": "Write Meta (FB/Instagram) ad copy for [PRODUCT SERVICE]. Audience: [AUDIENCE]. Main benefit: [BENEFIT]. Offer: [OFFER].\nGive 3 variants (problem-led, benefit-led, social-proof-led). Each: a hook line, 2-3 short body lines, and a CTA. Plus 3 short headlines. Keep it native, not \"ad-y\".",
    "tags": [
      "meta ads",
      "paid social"
    ]
  },
  {
    "id": "ad-google-search",
    "cat": "ads",
    "title": "Google Search Ads (Headlines + Descriptions)",
    "desc": "Responsive search ad assets that match buyer intent.",
    "prompt": "Write Google Search ad assets for [PRODUCT SERVICE], keyword [KEYWORD], audience [AUDIENCE].\nGive 10 headlines (under 30 chars each) and 4 descriptions (under 90 chars), including the keyword, benefits, and a CTA. Add 4 sitelink ideas. Match search intent.",
    "tags": [
      "google ads",
      "ppc"
    ]
  },
  {
    "id": "ad-hook-angles",
    "cat": "ads",
    "title": "10 Ad Hook Angles for One Product",
    "desc": "Different angles to test so you find the winner faster.",
    "prompt": "My product: [PRODUCT], audience [AUDIENCE], main benefit [BENEFIT].\nGive 10 distinct ad hook angles (pain, dream outcome, objection-crush, comparison, social proof, curiosity, \"us vs them\", time-saving, money-saving, identity). One hook line for each, ready to test.",
    "tags": [
      "angles",
      "testing"
    ]
  },
  {
    "id": "ad-ugc-script",
    "cat": "ads",
    "title": "UGC-Style Video Ad Script",
    "desc": "A native, creator-style script that outperforms polished ads.",
    "prompt": "Write a UGC-style video ad script (30-45s) for [PRODUCT]. Audience: [AUDIENCE]. Benefit: [BENEFIT]. Offer: [OFFER].\nMake it feel like a real person talking: a relatable hook, the problem, \"then I found this\", quick demo/benefits, and a casual CTA. Add on-screen text + b-roll notes.",
    "tags": [
      "ugc",
      "video ad"
    ]
  },
  {
    "id": "ad-short-promo",
    "cat": "ads",
    "title": "Short Promo Script (15-30s)",
    "desc": "A boosted-Reel/ad script that sells fast.",
    "prompt": "Write a 15-30s promo/ad script for [PRODUCT SERVICE]. Audience: [AUDIENCE]. Benefit: [BENEFIT]. Offer: [OFFER].\n- HOOK (0-3s): grab attention (problem or bold claim)\n- MIDDLE: product + 1-2 benefits fast\n- CTA (last 3s): exactly what to do + the offer\nAdd on-screen text per part. Under 60 spoken words.",
    "tags": [
      "promo",
      "script"
    ]
  },
  {
    "id": "ad-headline-pack",
    "cat": "ads",
    "title": "Headline Pack (Any Channel)",
    "desc": "Punchy headlines for ads, landing pages or thumbnails.",
    "prompt": "Write 15 headlines for [PRODUCT SERVICE OFFER], audience [AUDIENCE], main benefit [BENEFIT].\nUse proven formulas: how-to, \"get X without Y\", number, question, before/after, urgency. Keep them tight and specific. Mark the 5 strongest and where each fits (ad / page / thumbnail).",
    "tags": [
      "headlines",
      "copywriting"
    ]
  },
  {
    "id": "ad-landing-copy",
    "cat": "ads",
    "title": "Landing Page Copy (Above the Fold)",
    "desc": "The headline + subhead + CTA that converts cold traffic.",
    "prompt": "Write above-the-fold landing page copy for [PRODUCT SERVICE]. Audience: [AUDIENCE]. Main promise: [PROMISE].\nGive 3 options of: a headline, a supporting subheadline, 3 benefit bullets, and a CTA button label. Clear over clever. Then suggest the next section to add.",
    "tags": [
      "landing page",
      "conversion"
    ]
  },
  {
    "id": "ad-vsl-outline",
    "cat": "ads",
    "title": "Short Sales Video (VSL) Outline",
    "desc": "A structured script outline for a sales video.",
    "prompt": "Outline a short sales video for [PRODUCT SERVICE], audience [AUDIENCE], price [PRICE].\nStructure: hook (call out the audience + problem), agitate, introduce the solution, proof, offer + bonuses, risk-reversal, CTA + urgency. Give a 1-2 line draft for each beat. Honest and direct.",
    "tags": [
      "vsl",
      "sales"
    ]
  },
  {
    "id": "ad-retargeting",
    "cat": "ads",
    "title": "Retargeting Ad Copy",
    "desc": "Win back people who visited but didn't buy.",
    "prompt": "Write retargeting ad copy for people who viewed [PRODUCT] but didn't buy. Audience: [AUDIENCE]. Offer/incentive: [INCENTIVE].\nGive 3 variants: one addressing a likely objection, one with social proof, one with gentle urgency. Each: hook + body + CTA. Acknowledge they already showed interest.",
    "tags": [
      "retargeting",
      "conversion"
    ]
  },
  {
    "id": "ad-audience-targeting",
    "cat": "ads",
    "title": "Ad Audience & Targeting Ideas",
    "desc": "Who to target and how, for your product.",
    "prompt": "I'm advertising [PRODUCT SERVICE] to [BROAD AUDIENCE] in [LOCATION], budget [BUDGET].\nSuggest: 4 specific audience segments to test (interests, behaviours, lookalikes), the angle/hook that fits each, and how to split a small budget across them. Practical for Meta/Google.",
    "tags": [
      "targeting",
      "strategy"
    ]
  },
  {
    "id": "ad-cta-bank",
    "cat": "ads",
    "title": "High-Converting CTA Bank",
    "desc": "Calls-to-action for buttons, ads and posts.",
    "prompt": "Give 20 high-converting CTAs for [PRODUCT SERVICE OFFER], audience [AUDIENCE].\nMix urgency, value, low-risk (\"try free\"), and curiosity. Label which suit a button, an ad, and a social post. Keep them short and action-driven.",
    "tags": [
      "cta",
      "conversion"
    ]
  },
  {
    "id": "ad-aida",
    "cat": "ads",
    "title": "AIDA Copy for Anything",
    "desc": "Attention-Interest-Desire-Action copy on demand.",
    "prompt": "Write AIDA copy for [PRODUCT SERVICE OFFER]. Audience: [AUDIENCE]. Benefit: [BENEFIT].\nAttention: a scroll-stopping opener. Interest: why they should care. Desire: paint the outcome + proof. Action: a clear CTA. Keep it tight and usable as an ad or post.",
    "tags": [
      "framework",
      "copywriting"
    ]
  },
  {
    "id": "ad-pas",
    "cat": "ads",
    "title": "PAS Copy (Problem-Agitate-Solve)",
    "desc": "The classic direct-response framework, filled for you.",
    "prompt": "Write PAS copy for [PRODUCT SERVICE]. Audience: [AUDIENCE]. The problem they have: [PROBLEM].\nProblem: name it sharply. Agitate: make them feel the cost of it. Solve: present my product as the relief + a CTA. Keep it honest, not fear-mongering. Give a short + a longer version.",
    "tags": [
      "framework",
      "copywriting"
    ]
  },
  {
    "id": "ad-rewrite-ad",
    "cat": "ads",
    "title": "Fix My Underperforming Ad",
    "desc": "Diagnose and rewrite an ad that isn't converting.",
    "prompt": "Here's my current ad copy:\n\"\"\"\n[PASTE AD]\n\"\"\"\nProduct: [PRODUCT]. Audience: [AUDIENCE]. It's getting [PROBLEM].\nDiagnose the likely issue, then rewrite it 3 ways with stronger hooks/angles. Explain what you changed and why.",
    "tags": [
      "optimization",
      "rewrite"
    ]
  },
  {
    "id": "ad-google-display",
    "cat": "ads",
    "title": "Display / Banner Ad Copy",
    "desc": "Tiny, punchy copy for banner and display ads.",
    "prompt": "Write display/banner ad copy for [PRODUCT SERVICE], offer [OFFER], audience [AUDIENCE].\nGive 5 ultra-short headline + tagline + CTA combos (banners have little space). Make them instantly clear and clickable. Suggest one visual idea per combo.",
    "tags": [
      "display",
      "banner"
    ]
  },
  {
    "id": "ad-whatsapp-ad",
    "cat": "ads",
    "title": "Click-to-WhatsApp Ad Copy",
    "desc": "Ads that drive direct WhatsApp inquiries (big in India).",
    "prompt": "Write click-to-WhatsApp ad copy for [PRODUCT SERVICE] in [CITY REGION], audience [AUDIENCE]. Offer: [OFFER].\nGive 3 variants that push people to message on WhatsApp now, plus the auto-reply message they get when they do. Friendly, local, low-friction.",
    "tags": [
      "whatsapp",
      "india",
      "leads"
    ]
  },
  {
    "id": "ad-tester-plan",
    "cat": "ads",
    "title": "Small-Budget Ad Test Plan",
    "desc": "How to test ads smartly with a tiny budget.",
    "prompt": "I have a small budget [BUDGET] to advertise [PRODUCT] to [AUDIENCE].\nGive a simple test plan: how many creatives/angles to start with, how to split the budget, what metric tells me a winner, when to kill or scale, and how long to run. Beginner-friendly, no jargon.",
    "tags": [
      "testing",
      "strategy"
    ]
  },
  {
    "id": "bp-ad-copy-fitness",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Fitness Coaches",
    "desc": "3 ad variations built to get clicks for fitness coaching.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from fitness coaching, targeting people who want to get fit on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "fitness"
    ]
  },
  {
    "id": "bp-ad-copy-yoga",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Yoga Instructors",
    "desc": "3 ad variations built to get clicks for yoga teaching.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from yoga teaching, targeting people seeking calm & flexibility on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "yoga"
    ]
  },
  {
    "id": "bp-ad-copy-nutrition",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Nutritionists",
    "desc": "3 ad variations built to get clicks for nutrition & diet coaching.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from nutrition & diet coaching, targeting people who want to eat healthier on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "nutrition"
    ]
  },
  {
    "id": "bp-ad-copy-homebakery",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Home Bakers",
    "desc": "3 ad variations built to get clicks for a home baking business.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a home baking business, targeting people who order cakes & desserts on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "homebakery"
    ]
  },
  {
    "id": "bp-ad-copy-cloudkitchen",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Cloud Kitchens",
    "desc": "3 ad variations built to get clicks for a cloud kitchen.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a cloud kitchen, targeting hungry locals ordering online on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ad-copy-cafe",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Cafés & Restaurants",
    "desc": "3 ad variations built to get clicks for a café or restaurant.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a café or restaurant, targeting local foodies on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "cafe"
    ]
  },
  {
    "id": "bp-ad-copy-fashion",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Fashion Brands",
    "desc": "3 ad variations built to get clicks for a fashion & clothing brand.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a fashion & clothing brand, targeting style-conscious shoppers on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "fashion"
    ]
  },
  {
    "id": "bp-ad-copy-jewellery",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Jewellery Brands",
    "desc": "3 ad variations built to get clicks for a jewellery business.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a jewellery business, targeting people shopping for jewellery on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "jewellery"
    ]
  },
  {
    "id": "bp-ad-copy-handmade",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Handmade & Craft Sellers",
    "desc": "3 ad variations built to get clicks for a handmade craft business.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a handmade craft business, targeting people who love handmade gifts on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "handmade"
    ]
  },
  {
    "id": "bp-ad-copy-skincare",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Skincare Brands",
    "desc": "3 ad variations built to get clicks for a skincare brand.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a skincare brand, targeting people who want better skin on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "skincare"
    ]
  },
  {
    "id": "bp-ad-copy-makeup",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Makeup Artists",
    "desc": "3 ad variations built to get clicks for a makeup artistry business.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a makeup artistry business, targeting brides & beauty lovers on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "makeup"
    ]
  },
  {
    "id": "bp-ad-copy-salon",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Salons & Spas",
    "desc": "3 ad variations built to get clicks for a salon or spa.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a salon or spa, targeting people booking beauty services on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "salon"
    ]
  },
  {
    "id": "bp-ad-copy-travel",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Travel Creators",
    "desc": "3 ad variations built to get clicks for travel content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from travel content, targeting people planning trips on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "travel"
    ]
  },
  {
    "id": "bp-ad-copy-photography",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Photographers",
    "desc": "3 ad variations built to get clicks for a photography business.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a photography business, targeting couples & brands needing shoots on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "photography"
    ]
  },
  {
    "id": "bp-ad-copy-realestate",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Real Estate Agents",
    "desc": "3 ad variations built to get clicks for real estate.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from real estate, targeting home buyers & sellers on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "realestate"
    ]
  },
  {
    "id": "bp-ad-copy-interior",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Interior Designers",
    "desc": "3 ad variations built to get clicks for interior design.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from interior design, targeting homeowners renovating on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "interior"
    ]
  },
  {
    "id": "bp-ad-copy-finance",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Personal Finance Creators",
    "desc": "3 ad variations built to get clicks for personal finance content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from personal finance content, targeting people wanting to manage money on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "finance"
    ]
  },
  {
    "id": "bp-ad-copy-trading",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Stock Market Educators",
    "desc": "3 ad variations built to get clicks for stock market education.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from stock market education, targeting new investors & traders on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "trading"
    ]
  },
  {
    "id": "bp-ad-copy-edtech",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Online Tutors",
    "desc": "3 ad variations built to get clicks for online tutoring.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from online tutoring, targeting students & parents on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "edtech"
    ]
  },
  {
    "id": "bp-ad-copy-examprep",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Exam Prep Creators",
    "desc": "3 ad variations built to get clicks for exam prep content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from exam prep content, targeting students cracking competitive exams on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "examprep"
    ]
  },
  {
    "id": "bp-ad-copy-coding",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Coding Educators",
    "desc": "3 ad variations built to get clicks for coding & tech education.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from coding & tech education, targeting aspiring developers on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "coding"
    ]
  },
  {
    "id": "bp-ad-copy-gadgets",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Tech Reviewers",
    "desc": "3 ad variations built to get clicks for tech & gadget reviews.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from tech & gadget reviews, targeting people deciding what to buy on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "gadgets"
    ]
  },
  {
    "id": "bp-ad-copy-gaming",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Gaming Creators",
    "desc": "3 ad variations built to get clicks for gaming content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from gaming content, targeting gamers & fans on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "gaming"
    ]
  },
  {
    "id": "bp-ad-copy-saas",
    "cat": "ads",
    "title": "High-Converting Ad Copy — SaaS Founders",
    "desc": "3 ad variations built to get clicks for a SaaS product.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a SaaS product, targeting businesses that need the tool on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "saas"
    ]
  },
  {
    "id": "bp-ad-copy-freelance",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Freelancers",
    "desc": "3 ad variations built to get clicks for freelancing services.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from freelancing services, targeting clients who need the service on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "freelance"
    ]
  },
  {
    "id": "bp-ad-copy-agency",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Marketing Agencies",
    "desc": "3 ad variations built to get clicks for a marketing agency.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from a marketing agency, targeting business owners who want growth on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "agency"
    ]
  },
  {
    "id": "bp-ad-copy-parenting",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Parenting Creators",
    "desc": "3 ad variations built to get clicks for parenting content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from parenting content, targeting new & busy parents on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "parenting"
    ]
  },
  {
    "id": "bp-ad-copy-pets",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Pet Care Creators",
    "desc": "3 ad variations built to get clicks for pet care content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from pet care content, targeting pet parents on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "pets"
    ]
  },
  {
    "id": "bp-ad-copy-gardening",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Gardening Creators",
    "desc": "3 ad variations built to get clicks for gardening & plants content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from gardening & plants content, targeting plant lovers on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "gardening"
    ]
  },
  {
    "id": "bp-ad-copy-astrology",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Astrology Creators",
    "desc": "3 ad variations built to get clicks for astrology & spirituality content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from astrology & spirituality content, targeting people seeking guidance on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "astrology"
    ]
  },
  {
    "id": "bp-ad-copy-motivation",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Motivational Creators",
    "desc": "3 ad variations built to get clicks for motivation & self-help content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from motivation & self-help content, targeting people who want to level up on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "motivation"
    ]
  },
  {
    "id": "bp-ad-copy-food",
    "cat": "ads",
    "title": "High-Converting Ad Copy — Food Bloggers",
    "desc": "3 ad variations built to get clicks for food & recipe content.",
    "prompt": "Write 3 ad copy variations for [PRODUCT] from food & recipe content, targeting home cooks & foodies on [PLATFORM].\nEach: a scroll-stopping headline, 2 lines of body, and a CTA toward [GOAL]. Make them native, not \"ad-y\".",
    "tags": [
      "ads",
      "copy",
      "food"
    ]
  },
  {
    "id": "bp-ad-hooks-fitness",
    "cat": "ads",
    "title": "Hook & Headline Variations — Fitness Coaches",
    "desc": "12 angles to test for fitness coaching.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from fitness coaching that solve [PROBLEM] for people who want to get fit.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "fitness"
    ]
  },
  {
    "id": "bp-ad-hooks-yoga",
    "cat": "ads",
    "title": "Hook & Headline Variations — Yoga Instructors",
    "desc": "12 angles to test for yoga teaching.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from yoga teaching that solve [PROBLEM] for people seeking calm & flexibility.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "yoga"
    ]
  },
  {
    "id": "bp-ad-hooks-nutrition",
    "cat": "ads",
    "title": "Hook & Headline Variations — Nutritionists",
    "desc": "12 angles to test for nutrition & diet coaching.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from nutrition & diet coaching that solve [PROBLEM] for people who want to eat healthier.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "nutrition"
    ]
  },
  {
    "id": "bp-ad-hooks-homebakery",
    "cat": "ads",
    "title": "Hook & Headline Variations — Home Bakers",
    "desc": "12 angles to test for a home baking business.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a home baking business that solve [PROBLEM] for people who order cakes & desserts.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "homebakery"
    ]
  },
  {
    "id": "bp-ad-hooks-cloudkitchen",
    "cat": "ads",
    "title": "Hook & Headline Variations — Cloud Kitchens",
    "desc": "12 angles to test for a cloud kitchen.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a cloud kitchen that solve [PROBLEM] for hungry locals ordering online.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-ad-hooks-cafe",
    "cat": "ads",
    "title": "Hook & Headline Variations — Cafés & Restaurants",
    "desc": "12 angles to test for a café or restaurant.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a café or restaurant that solve [PROBLEM] for local foodies.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "cafe"
    ]
  },
  {
    "id": "bp-ad-hooks-fashion",
    "cat": "ads",
    "title": "Hook & Headline Variations — Fashion Brands",
    "desc": "12 angles to test for a fashion & clothing brand.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a fashion & clothing brand that solve [PROBLEM] for style-conscious shoppers.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "fashion"
    ]
  },
  {
    "id": "bp-ad-hooks-jewellery",
    "cat": "ads",
    "title": "Hook & Headline Variations — Jewellery Brands",
    "desc": "12 angles to test for a jewellery business.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a jewellery business that solve [PROBLEM] for people shopping for jewellery.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "jewellery"
    ]
  },
  {
    "id": "bp-ad-hooks-handmade",
    "cat": "ads",
    "title": "Hook & Headline Variations — Handmade & Craft Sellers",
    "desc": "12 angles to test for a handmade craft business.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a handmade craft business that solve [PROBLEM] for people who love handmade gifts.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "handmade"
    ]
  },
  {
    "id": "bp-ad-hooks-skincare",
    "cat": "ads",
    "title": "Hook & Headline Variations — Skincare Brands",
    "desc": "12 angles to test for a skincare brand.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a skincare brand that solve [PROBLEM] for people who want better skin.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "skincare"
    ]
  },
  {
    "id": "bp-ad-hooks-makeup",
    "cat": "ads",
    "title": "Hook & Headline Variations — Makeup Artists",
    "desc": "12 angles to test for a makeup artistry business.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a makeup artistry business that solve [PROBLEM] for brides & beauty lovers.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "makeup"
    ]
  },
  {
    "id": "bp-ad-hooks-salon",
    "cat": "ads",
    "title": "Hook & Headline Variations — Salons & Spas",
    "desc": "12 angles to test for a salon or spa.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a salon or spa that solve [PROBLEM] for people booking beauty services.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "salon"
    ]
  },
  {
    "id": "bp-ad-hooks-travel",
    "cat": "ads",
    "title": "Hook & Headline Variations — Travel Creators",
    "desc": "12 angles to test for travel content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from travel content that solve [PROBLEM] for people planning trips.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "travel"
    ]
  },
  {
    "id": "bp-ad-hooks-photography",
    "cat": "ads",
    "title": "Hook & Headline Variations — Photographers",
    "desc": "12 angles to test for a photography business.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a photography business that solve [PROBLEM] for couples & brands needing shoots.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "photography"
    ]
  },
  {
    "id": "bp-ad-hooks-realestate",
    "cat": "ads",
    "title": "Hook & Headline Variations — Real Estate Agents",
    "desc": "12 angles to test for real estate.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from real estate that solve [PROBLEM] for home buyers & sellers.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "realestate"
    ]
  },
  {
    "id": "bp-ad-hooks-interior",
    "cat": "ads",
    "title": "Hook & Headline Variations — Interior Designers",
    "desc": "12 angles to test for interior design.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from interior design that solve [PROBLEM] for homeowners renovating.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "interior"
    ]
  },
  {
    "id": "bp-ad-hooks-finance",
    "cat": "ads",
    "title": "Hook & Headline Variations — Personal Finance Creators",
    "desc": "12 angles to test for personal finance content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from personal finance content that solve [PROBLEM] for people wanting to manage money.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "finance"
    ]
  },
  {
    "id": "bp-ad-hooks-trading",
    "cat": "ads",
    "title": "Hook & Headline Variations — Stock Market Educators",
    "desc": "12 angles to test for stock market education.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from stock market education that solve [PROBLEM] for new investors & traders.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "trading"
    ]
  },
  {
    "id": "bp-ad-hooks-edtech",
    "cat": "ads",
    "title": "Hook & Headline Variations — Online Tutors",
    "desc": "12 angles to test for online tutoring.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from online tutoring that solve [PROBLEM] for students & parents.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "edtech"
    ]
  },
  {
    "id": "bp-ad-hooks-examprep",
    "cat": "ads",
    "title": "Hook & Headline Variations — Exam Prep Creators",
    "desc": "12 angles to test for exam prep content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from exam prep content that solve [PROBLEM] for students cracking competitive exams.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "examprep"
    ]
  },
  {
    "id": "bp-ad-hooks-coding",
    "cat": "ads",
    "title": "Hook & Headline Variations — Coding Educators",
    "desc": "12 angles to test for coding & tech education.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from coding & tech education that solve [PROBLEM] for aspiring developers.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "coding"
    ]
  },
  {
    "id": "bp-ad-hooks-gadgets",
    "cat": "ads",
    "title": "Hook & Headline Variations — Tech Reviewers",
    "desc": "12 angles to test for tech & gadget reviews.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from tech & gadget reviews that solve [PROBLEM] for people deciding what to buy.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "gadgets"
    ]
  },
  {
    "id": "bp-ad-hooks-gaming",
    "cat": "ads",
    "title": "Hook & Headline Variations — Gaming Creators",
    "desc": "12 angles to test for gaming content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from gaming content that solve [PROBLEM] for gamers & fans.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "gaming"
    ]
  },
  {
    "id": "bp-ad-hooks-saas",
    "cat": "ads",
    "title": "Hook & Headline Variations — SaaS Founders",
    "desc": "12 angles to test for a SaaS product.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a SaaS product that solve [PROBLEM] for businesses that need the tool.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "saas"
    ]
  },
  {
    "id": "bp-ad-hooks-freelance",
    "cat": "ads",
    "title": "Hook & Headline Variations — Freelancers",
    "desc": "12 angles to test for freelancing services.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from freelancing services that solve [PROBLEM] for clients who need the service.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "freelance"
    ]
  },
  {
    "id": "bp-ad-hooks-agency",
    "cat": "ads",
    "title": "Hook & Headline Variations — Marketing Agencies",
    "desc": "12 angles to test for a marketing agency.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from a marketing agency that solve [PROBLEM] for business owners who want growth.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "agency"
    ]
  },
  {
    "id": "bp-ad-hooks-parenting",
    "cat": "ads",
    "title": "Hook & Headline Variations — Parenting Creators",
    "desc": "12 angles to test for parenting content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from parenting content that solve [PROBLEM] for new & busy parents.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "parenting"
    ]
  },
  {
    "id": "bp-ad-hooks-pets",
    "cat": "ads",
    "title": "Hook & Headline Variations — Pet Care Creators",
    "desc": "12 angles to test for pet care content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from pet care content that solve [PROBLEM] for pet parents.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "pets"
    ]
  },
  {
    "id": "bp-ad-hooks-gardening",
    "cat": "ads",
    "title": "Hook & Headline Variations — Gardening Creators",
    "desc": "12 angles to test for gardening & plants content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from gardening & plants content that solve [PROBLEM] for plant lovers.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "gardening"
    ]
  },
  {
    "id": "bp-ad-hooks-astrology",
    "cat": "ads",
    "title": "Hook & Headline Variations — Astrology Creators",
    "desc": "12 angles to test for astrology & spirituality content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from astrology & spirituality content that solve [PROBLEM] for people seeking guidance.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "astrology"
    ]
  },
  {
    "id": "bp-ad-hooks-motivation",
    "cat": "ads",
    "title": "Hook & Headline Variations — Motivational Creators",
    "desc": "12 angles to test for motivation & self-help content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from motivation & self-help content that solve [PROBLEM] for people who want to level up.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "motivation"
    ]
  },
  {
    "id": "bp-ad-hooks-food",
    "cat": "ads",
    "title": "Hook & Headline Variations — Food Bloggers",
    "desc": "12 angles to test for food & recipe content.",
    "prompt": "Give me 12 headline/hook variations for [PRODUCT] from food & recipe content that solve [PROBLEM] for home cooks & foodies.\nMix curiosity, benefit, and bold-claim styles. Keep them tight and specific. Mark the 5 strongest.",
    "tags": [
      "headlines",
      "testing",
      "food"
    ]
  },
  {
    "id": "mo-brand-pitch",
    "cat": "deals",
    "title": "Brand Collaboration Pitch",
    "desc": "Reach out to brands for paid deals — confident, specific, not begging.",
    "prompt": "Write a brand collab pitch to [BRAND]. My niche: [NICHE]. Audience: [SIZE WHO]. Best stats: [ENGAGEMENT VIEWS]. Proposing: [DELIVERABLE].\nRules: a subject line that gets opened, lead with value to THEM (audience overlap), under 130 words, confident + warm, a clear next step. Give a DM version and an email version.",
    "tags": [
      "brand deal",
      "pitch"
    ]
  },
  {
    "id": "mo-rate-card",
    "cat": "deals",
    "title": "Build My Creator Rate Card",
    "desc": "Price your work and present it professionally.",
    "prompt": "Help me build a rate card. Platforms: [PLATFORMS]. Followers: [FOLLOWERS]. Avg views/engagement: [STATS]. Niche: [NICHE].\nGive INR price ranges for: 1 Reel, 1 Story set, 1 YouTube integration, a 3-post package. Add a note on what affects pricing and 2 lines to present rates confidently. These are Indian-creator benchmarks — tell me to adjust by demand.",
    "tags": [
      "pricing",
      "rate card"
    ]
  },
  {
    "id": "mo-negotiate",
    "cat": "deals",
    "title": "Negotiate a Higher Brand Deal",
    "desc": "Polite, firm replies when a brand lowballs or offers \"exposure\".",
    "prompt": "A brand offered [THEIR OFFER] for [DELIVERABLE]; I want more. My value: [STATS WHY WORTH MORE].\nWrite 3 replies: 1) counter higher, justified by value; 2) hold my price but add a small bonus deliverable; 3) decline a \"free product/exposure\" deal gracefully but leave the door open. Professional, warm, firm.",
    "tags": [
      "negotiation"
    ]
  },
  {
    "id": "mo-collab-creator",
    "cat": "deals",
    "title": "Pitch a Collab to Another Creator",
    "desc": "A DM to propose a creator-to-creator collab.",
    "prompt": "Write a DM pitching a collab to another creator. Them: [THEIR NICHE WHY THEY FIT]. Me: [MY NICHE SIZE]. Idea: [COLLAB IDEA].\nSpecific genuine compliment (prove I follow them), a mutual-benefit idea, low pressure, easy yes. Under 70 words.",
    "tags": [
      "collab",
      "networking"
    ]
  },
  {
    "id": "mo-media-kit",
    "cat": "deals",
    "title": "Media Kit Content",
    "desc": "The copy + stats brands want to see in your media kit.",
    "prompt": "Help me write my media kit copy. Name/handle: [HANDLE]. Niche: [NICHE]. Platforms + followers: [DATA]. Audience demo: [AUDIENCE]. Best stats: [STATS]. Past brands: [IF ANY].\nGive: a short bio, an \"audience\" section, a \"why work with me\" section, my services/rates layout, and a contact CTA. Confident and clean.",
    "tags": [
      "media kit",
      "brand deal"
    ]
  },
  {
    "id": "mo-income-streams",
    "cat": "deals",
    "title": "Map My Creator Income Streams",
    "desc": "Find realistic ways to monetise your audience.",
    "prompt": "I have [FOLLOWERS] on [PLATFORM] in the [NICHE] niche, audience [AUDIENCE].\nMap 6 realistic income streams for me (brand deals, affiliates, own product, services, memberships, etc.). For each: when to start at my size, rough potential, and a first step this month. Be honest, not hype.",
    "tags": [
      "monetization",
      "strategy"
    ]
  },
  {
    "id": "mo-affiliate-strategy",
    "cat": "deals",
    "title": "Affiliate Marketing Plan",
    "desc": "Earn from affiliate links without spamming your audience.",
    "prompt": "I'm in the [NICHE] niche, audience [AUDIENCE].\nSuggest: 5 types of products/tools I could affiliate (relevant + that pay in India), where to place links (bio, content, blog), and 3 content ideas that sell affiliates naturally. Keep it trust-first, not spammy.",
    "tags": [
      "affiliate",
      "strategy"
    ]
  },
  {
    "id": "mo-digital-product",
    "cat": "deals",
    "title": "Digital Product Idea for My Audience",
    "desc": "A low-effort digital product you could sell now.",
    "prompt": "My audience is [AUDIENCE] in the [NICHE] niche; they struggle with [PROBLEM].\nSuggest 5 digital product ideas I could create and sell (ebook, template, preset, mini-course, notion kit, etc.). For each: what it is, a price, why they'd buy, and how long to make. Pick the easiest first win.",
    "tags": [
      "digital product",
      "income"
    ]
  },
  {
    "id": "mo-sponsor-integration",
    "cat": "deals",
    "title": "Natural Sponsor Integration Script",
    "desc": "Weave a sponsor into your content without losing trust.",
    "prompt": "I have a sponsor: [BRAND PRODUCT], key points they want: [TALKING POINTS]. My content: [WHAT THE VIDEO POST IS ABOUT]. Audience: [AUDIENCE].\nWrite a natural sponsor integration (30-45s) that fits my content, sounds like me, is honest, and includes the CTA [CTA CODE]. Don't make it feel like an ad break.",
    "tags": [
      "sponsorship",
      "script"
    ]
  },
  {
    "id": "mo-invoice-followup",
    "cat": "deals",
    "title": "Invoice & Payment Follow-Up",
    "desc": "Professional nudges to get paid by brands on time.",
    "prompt": "A brand owes me [AMOUNT] for [DELIVERABLE], due [DUE DATE], now overdue by [TIME].\nWrite a polite-but-firm payment follow-up message, plus a slightly firmer second reminder if ignored. Keep it professional and protect the relationship while making it clear I expect payment.",
    "tags": [
      "payment",
      "admin"
    ]
  },
  {
    "id": "mo-deliverables-contract",
    "cat": "deals",
    "title": "Clarify Deliverables Before a Deal",
    "desc": "Questions + a simple scope note to avoid getting underpaid.",
    "prompt": "A brand wants to work with me on [LOOSE BRIEF]. Before I agree, help me clarify scope.\nGive: 8 questions I must ask (usage rights, exclusivity, revisions, timeline, payment terms, deliverables), and a short plain-English scope summary I can send to confirm. Protect me from scope creep.",
    "tags": [
      "contract",
      "scope"
    ]
  },
  {
    "id": "mo-membership",
    "cat": "deals",
    "title": "Paid Membership / Community Plan",
    "desc": "Turn your fans into recurring revenue.",
    "prompt": "I want to start a paid membership for my [NICHE] audience [AUDIENCE].\nSuggest: what to offer inside (perks worth paying for), 2-3 price tiers in INR, a name, and how to pitch it without losing free followers. What should the free vs paid line be?",
    "tags": [
      "membership",
      "recurring"
    ]
  },
  {
    "id": "mo-ugc-pitch",
    "cat": "deals",
    "title": "UGC Creator Pitch (Make Content for Brands)",
    "desc": "Land paid UGC work even with a small following.",
    "prompt": "I want to do paid UGC (user-generated content) for brands. My skills: [WHAT YOU MAKE]. Niche: [NICHE].\nWrite a UGC pitch to [BRAND] that focuses on creating content for THEIR channels (not my reach), shows my value, and includes a clear offer + CTA. Plus list 5 brand types I should target.",
    "tags": [
      "ugc",
      "pitch"
    ]
  },
  {
    "id": "mo-thank-brand",
    "cat": "deals",
    "title": "Post-Campaign Thank You + Re-Pitch",
    "desc": "End a brand deal in a way that gets you the next one.",
    "prompt": "I just finished a campaign with [BRAND] (delivered [WHAT], results [RESULTS IF ANY]).\nWrite a thank-you message that shares the results, leaves a great impression, and softly opens the door to an ongoing partnership or next collab. Warm and professional.",
    "tags": [
      "relationship",
      "brand deal"
    ]
  },
  {
    "id": "mo-grant-pitch",
    "cat": "deals",
    "title": "Pitch for a Creator Fund / Grant",
    "desc": "Apply for creator funds or platform programs.",
    "prompt": "I'm applying to [PROGRAM FUND] as a creator. About me: [ABOUT YOU]. My work: [WHAT YOU MAKE]. Impact/stats: [NUMBERS]. Why it matters: [MISSION].\nWrite a compelling application answer that tells my story, shows traction, and explains how the funding would help me grow. Authentic, specific, not generic.",
    "tags": [
      "funding",
      "application"
    ]
  },
  {
    "id": "mo-rate-increase",
    "cat": "deals",
    "title": "Tell a Repeat Client About a Rate Increase",
    "desc": "Raise your prices without losing a good client.",
    "prompt": "I want to raise rates for a repeat brand/client [CLIENT] from [OLD RATE] to [NEW RATE].\nWrite a message that announces the increase confidently, justifies it with value/growth, gives them notice, and keeps the relationship warm. Offer a small loyalty gesture if helpful.",
    "tags": [
      "pricing",
      "clients"
    ]
  },
  {
    "id": "mo-niche-brands-list",
    "cat": "deals",
    "title": "Find Brands to Pitch in My Niche",
    "desc": "A target list of brands likely to pay creators like you.",
    "prompt": "My niche: [NICHE]. Audience: [AUDIENCE]. Location: [LOCATION].\nSuggest 15 types of brands/companies that would want my audience, from big to small/local, and for each: why they fit and what deliverable to pitch. Include some affordable D2C/Indian brands that work with smaller creators.",
    "tags": [
      "brand deal",
      "research"
    ]
  },
  {
    "id": "mo-barter-vs-paid",
    "cat": "deals",
    "title": "Barter vs Paid: Should I Take It?",
    "desc": "Decide when a free-product deal is worth it.",
    "prompt": "A brand offered me a barter deal: [WHAT THEY RE OFFERING] for [DELIVERABLE]. My size: [FOLLOWERS STATS]. Niche: [NICHE].\nHelp me decide: is this worth it? Give the pros/cons for my situation, when barter makes sense vs when to ask for cash, and a script to either accept smartly or convert it to a paid deal.",
    "tags": [
      "decision",
      "brand deal"
    ]
  },
  {
    "id": "bp-bd-pitch-fitness",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Fitness Coaches",
    "desc": "Land a paid deal as a creator in fitness coaching.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a fitness coaching creator with [FOLLOWERS] followers, audience people who want to get fit.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "fitness"
    ]
  },
  {
    "id": "bp-bd-pitch-yoga",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Yoga Instructors",
    "desc": "Land a paid deal as a creator in yoga teaching.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a yoga teaching creator with [FOLLOWERS] followers, audience people seeking calm & flexibility.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "yoga"
    ]
  },
  {
    "id": "bp-bd-pitch-nutrition",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Nutritionists",
    "desc": "Land a paid deal as a creator in nutrition & diet coaching.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a nutrition & diet coaching creator with [FOLLOWERS] followers, audience people who want to eat healthier.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "nutrition"
    ]
  },
  {
    "id": "bp-bd-pitch-homebakery",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Home Bakers",
    "desc": "Land a paid deal as a creator in a home baking business.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a home baking business creator with [FOLLOWERS] followers, audience people who order cakes & desserts.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "homebakery"
    ]
  },
  {
    "id": "bp-bd-pitch-cloudkitchen",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Cloud Kitchens",
    "desc": "Land a paid deal as a creator in a cloud kitchen.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a cloud kitchen creator with [FOLLOWERS] followers, audience hungry locals ordering online.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-bd-pitch-cafe",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Cafés & Restaurants",
    "desc": "Land a paid deal as a creator in a café or restaurant.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a café or restaurant creator with [FOLLOWERS] followers, audience local foodies.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "cafe"
    ]
  },
  {
    "id": "bp-bd-pitch-fashion",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Fashion Brands",
    "desc": "Land a paid deal as a creator in a fashion & clothing brand.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a fashion & clothing brand creator with [FOLLOWERS] followers, audience style-conscious shoppers.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "fashion"
    ]
  },
  {
    "id": "bp-bd-pitch-jewellery",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Jewellery Brands",
    "desc": "Land a paid deal as a creator in a jewellery business.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a jewellery business creator with [FOLLOWERS] followers, audience people shopping for jewellery.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "jewellery"
    ]
  },
  {
    "id": "bp-bd-pitch-handmade",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Handmade & Craft Sellers",
    "desc": "Land a paid deal as a creator in a handmade craft business.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a handmade craft business creator with [FOLLOWERS] followers, audience people who love handmade gifts.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "handmade"
    ]
  },
  {
    "id": "bp-bd-pitch-skincare",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Skincare Brands",
    "desc": "Land a paid deal as a creator in a skincare brand.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a skincare brand creator with [FOLLOWERS] followers, audience people who want better skin.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "skincare"
    ]
  },
  {
    "id": "bp-bd-pitch-makeup",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Makeup Artists",
    "desc": "Land a paid deal as a creator in a makeup artistry business.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a makeup artistry business creator with [FOLLOWERS] followers, audience brides & beauty lovers.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "makeup"
    ]
  },
  {
    "id": "bp-bd-pitch-salon",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Salons & Spas",
    "desc": "Land a paid deal as a creator in a salon or spa.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a salon or spa creator with [FOLLOWERS] followers, audience people booking beauty services.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "salon"
    ]
  },
  {
    "id": "bp-bd-pitch-travel",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Travel Creators",
    "desc": "Land a paid deal as a creator in travel content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a travel content creator with [FOLLOWERS] followers, audience people planning trips.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "travel"
    ]
  },
  {
    "id": "bp-bd-pitch-photography",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Photographers",
    "desc": "Land a paid deal as a creator in a photography business.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a photography business creator with [FOLLOWERS] followers, audience couples & brands needing shoots.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "photography"
    ]
  },
  {
    "id": "bp-bd-pitch-realestate",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Real Estate Agents",
    "desc": "Land a paid deal as a creator in real estate.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a real estate creator with [FOLLOWERS] followers, audience home buyers & sellers.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "realestate"
    ]
  },
  {
    "id": "bp-bd-pitch-interior",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Interior Designers",
    "desc": "Land a paid deal as a creator in interior design.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a interior design creator with [FOLLOWERS] followers, audience homeowners renovating.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "interior"
    ]
  },
  {
    "id": "bp-bd-pitch-finance",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Personal Finance Creators",
    "desc": "Land a paid deal as a creator in personal finance content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a personal finance content creator with [FOLLOWERS] followers, audience people wanting to manage money.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "finance"
    ]
  },
  {
    "id": "bp-bd-pitch-trading",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Stock Market Educators",
    "desc": "Land a paid deal as a creator in stock market education.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a stock market education creator with [FOLLOWERS] followers, audience new investors & traders.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "trading"
    ]
  },
  {
    "id": "bp-bd-pitch-edtech",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Online Tutors",
    "desc": "Land a paid deal as a creator in online tutoring.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a online tutoring creator with [FOLLOWERS] followers, audience students & parents.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "edtech"
    ]
  },
  {
    "id": "bp-bd-pitch-examprep",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Exam Prep Creators",
    "desc": "Land a paid deal as a creator in exam prep content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a exam prep content creator with [FOLLOWERS] followers, audience students cracking competitive exams.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "examprep"
    ]
  },
  {
    "id": "bp-bd-pitch-coding",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Coding Educators",
    "desc": "Land a paid deal as a creator in coding & tech education.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a coding & tech education creator with [FOLLOWERS] followers, audience aspiring developers.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "coding"
    ]
  },
  {
    "id": "bp-bd-pitch-gadgets",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Tech Reviewers",
    "desc": "Land a paid deal as a creator in tech & gadget reviews.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a tech & gadget reviews creator with [FOLLOWERS] followers, audience people deciding what to buy.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "gadgets"
    ]
  },
  {
    "id": "bp-bd-pitch-gaming",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Gaming Creators",
    "desc": "Land a paid deal as a creator in gaming content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a gaming content creator with [FOLLOWERS] followers, audience gamers & fans.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "gaming"
    ]
  },
  {
    "id": "bp-bd-pitch-saas",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — SaaS Founders",
    "desc": "Land a paid deal as a creator in a SaaS product.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a SaaS product creator with [FOLLOWERS] followers, audience businesses that need the tool.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "saas"
    ]
  },
  {
    "id": "bp-bd-pitch-freelance",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Freelancers",
    "desc": "Land a paid deal as a creator in freelancing services.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a freelancing services creator with [FOLLOWERS] followers, audience clients who need the service.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "freelance"
    ]
  },
  {
    "id": "bp-bd-pitch-agency",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Marketing Agencies",
    "desc": "Land a paid deal as a creator in a marketing agency.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a a marketing agency creator with [FOLLOWERS] followers, audience business owners who want growth.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "agency"
    ]
  },
  {
    "id": "bp-bd-pitch-parenting",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Parenting Creators",
    "desc": "Land a paid deal as a creator in parenting content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a parenting content creator with [FOLLOWERS] followers, audience new & busy parents.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "parenting"
    ]
  },
  {
    "id": "bp-bd-pitch-pets",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Pet Care Creators",
    "desc": "Land a paid deal as a creator in pet care content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a pet care content creator with [FOLLOWERS] followers, audience pet parents.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "pets"
    ]
  },
  {
    "id": "bp-bd-pitch-gardening",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Gardening Creators",
    "desc": "Land a paid deal as a creator in gardening & plants content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a gardening & plants content creator with [FOLLOWERS] followers, audience plant lovers.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "gardening"
    ]
  },
  {
    "id": "bp-bd-pitch-astrology",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Astrology Creators",
    "desc": "Land a paid deal as a creator in astrology & spirituality content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a astrology & spirituality content creator with [FOLLOWERS] followers, audience people seeking guidance.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "astrology"
    ]
  },
  {
    "id": "bp-bd-pitch-motivation",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Motivational Creators",
    "desc": "Land a paid deal as a creator in motivation & self-help content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a motivation & self-help content creator with [FOLLOWERS] followers, audience people who want to level up.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "motivation"
    ]
  },
  {
    "id": "bp-bd-pitch-food",
    "cat": "deals",
    "title": "Brand Collaboration Pitch — Food Bloggers",
    "desc": "Land a paid deal as a creator in food & recipe content.",
    "prompt": "Write a confident brand collaboration pitch to [BRAND] from a food & recipe content creator with [FOLLOWERS] followers, audience home cooks & foodies.\nLead with value to them (audience overlap), propose [DELIVERABLES], keep it under 130 words, end with a clear next step. Give a DM + email version.",
    "tags": [
      "pitch",
      "money",
      "food"
    ]
  },
  {
    "id": "em-newsletter",
    "cat": "email",
    "title": "Newsletter Email People Actually Open",
    "desc": "A full newsletter draft with subject lines tested for opens.",
    "prompt": "Write a newsletter email for my [NICHE] audience. This week's topic: [TOPIC]. Goal: [GOAL].\nInclude: 3 subject lines (under 45 chars, curiosity-driven); a warm 1-line opener; main content in 2-3 scannable sections; one clear CTA button text + line; a friendly sign-off. Tone: like a message from a friend.",
    "tags": [
      "newsletter"
    ]
  },
  {
    "id": "em-welcome",
    "cat": "email",
    "title": "Welcome Email for New Subscribers",
    "desc": "The first email that turns a subscriber into a fan.",
    "prompt": "Write a welcome email for a new subscriber. Who I am: [ABOUT YOU]. What they'll get: [WHAT HOW OFTEN]. A quick win now: [FREEBIE TIP].\nStructure: warm thank-you, set expectations, deliver one quick win, a soft CTA (reply/follow/link [LINK]). Under 150 words, personal.",
    "tags": [
      "welcome",
      "onboarding"
    ]
  },
  {
    "id": "em-launch-sequence",
    "cat": "email",
    "title": "3-Email Launch Sequence",
    "desc": "Sell a product or course with a simple, non-pushy flow.",
    "prompt": "Plan a 3-email launch sequence for [PRODUCT COURSE]. Audience: [AUDIENCE]. Price: [PRICE]. Offer/deadline: [OFFER].\nGive all 3: 1) Announce — tease value + open cart; 2) Value/proof — benefits + who it's for + testimonial placeholder; 3) Last call — urgency + recap + deadline. Each: subject line + body. Honest, not hype.",
    "tags": [
      "launch",
      "sequence"
    ]
  },
  {
    "id": "em-subject-lines",
    "cat": "email",
    "title": "20 Subject Lines That Get Opens",
    "desc": "A bank of subject lines for any email.",
    "prompt": "Give 20 subject lines for an email about [TOPIC] to [AUDIENCE].\nMix: curiosity, benefit, number, question, personal, and urgency. Under 45 chars each, no spammy words/ALL CAPS. Mark the 5 you'd test first.",
    "tags": [
      "subject lines",
      "open rate"
    ]
  },
  {
    "id": "em-cold-email",
    "cat": "email",
    "title": "Cold Email That Gets Replies",
    "desc": "B2B/outreach cold email built to start a conversation.",
    "prompt": "Write a cold email to [TYPE OF PERSON COMPANY] offering [WHAT YOU OFFER]. The result I deliver: [VALUE].\nRules: a subject line they'll open; a personalised first line (not \"I hope this finds you well\"); value-first body under 120 words; one clear, low-friction CTA. Give 2 versions + 1 follow-up email.",
    "tags": [
      "cold email",
      "outreach"
    ]
  },
  {
    "id": "em-abandoned-cart",
    "cat": "email",
    "title": "Abandoned Cart Email Series",
    "desc": "Recover lost sales with a 3-email flow.",
    "prompt": "Write a 3-email abandoned-cart series for [PRODUCT], audience [AUDIENCE].\nEmail 1: friendly reminder (subject + body). Email 2: handle hesitation + a key benefit/review. Email 3: gentle urgency or small incentive [INCENTIVE]. Each with a subject line. Short and human.",
    "tags": [
      "ecommerce",
      "recovery"
    ]
  },
  {
    "id": "em-re-engage",
    "cat": "email",
    "title": "Win Back Inactive Subscribers",
    "desc": "Re-engage people who stopped opening your emails.",
    "prompt": "Write a re-engagement email for subscribers who've gone quiet. My list: [NICHE WHAT YOU SEND].\nMake it honest and a little personal: acknowledge it's been a while, remind them of the value, give a reason to stay (a freebie or a \"what do you want from me?\" question), and a clear stay/leave choice. Subject + body.",
    "tags": [
      "re-engagement",
      "list health"
    ]
  },
  {
    "id": "em-promo-email",
    "cat": "email",
    "title": "Promo / Offer Email",
    "desc": "Announce a sale or offer in a way that converts.",
    "prompt": "Write a promo email for [OFFER] on [PRODUCT SERVICE]. Audience: [AUDIENCE]. Deadline: [DEADLINE].\nInclude: a subject line that drives clicks, a quick hook, the offer + why it's worth it, a clear CTA button line, and a touch of urgency. Keep it scannable. Give 2 subject line options.",
    "tags": [
      "promo",
      "sales"
    ]
  },
  {
    "id": "em-value-email",
    "cat": "email",
    "title": "Pure-Value Email (Build Trust)",
    "desc": "A teaching email that builds goodwill before you sell.",
    "prompt": "Write a value-only email teaching my audience [AUDIENCE] something useful about [TOPIC].\nNo hard pitch. Give them one clear, actionable takeaway they can use today, in my voice [TONE], and a soft P.S. CTA. Subject line + body, under 250 words.",
    "tags": [
      "value",
      "nurture"
    ]
  },
  {
    "id": "em-whatsapp-broadcast",
    "cat": "email",
    "title": "WhatsApp Broadcast (Sales)",
    "desc": "A short broadcast that drives orders without spamming.",
    "prompt": "Write a WhatsApp broadcast to sell [PRODUCT]. Offer: [OFFER]. Audience: [AUDIENCE].\nUnder 60 words: one hook line, a benefit + offer, a simple CTA (\"Reply YES\" or link [LINK]). Friendly, like messaging a friend. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "sales"
    ]
  },
  {
    "id": "em-whatsapp-status",
    "cat": "email",
    "title": "WhatsApp Status / Story Series",
    "desc": "A sequence of statuses to promote without being annoying.",
    "prompt": "Plan a 5-status WhatsApp Status sequence to promote [PRODUCT OFFER] to my contacts. Audience: [AUDIENCE].\nFor each status: the text + a visual idea. Mix value/relatable ones with soft promos so it doesn't feel like spam. Keep them short and tappable.",
    "tags": [
      "whatsapp",
      "status"
    ]
  },
  {
    "id": "em-welcome-whatsapp",
    "cat": "email",
    "title": "WhatsApp Welcome / Auto-Reply",
    "desc": "A first-message greeting for new WhatsApp Business contacts.",
    "prompt": "Write a WhatsApp Business greeting + away message for my business [WHAT YOU SELL].\nGreeting: warm, says what we do, asks how we can help, sets a quick expectation. Away message: when we'll reply + a link to [CATALOGUE LINK]. Keep both short and friendly.",
    "tags": [
      "whatsapp",
      "business"
    ]
  },
  {
    "id": "em-order-confirm",
    "cat": "email",
    "title": "Order Confirmation & Updates (WhatsApp)",
    "desc": "Reassuring post-order messages that build trust.",
    "prompt": "Write WhatsApp message templates for: order confirmed, order shipped (with tracking [TRACKING]), and order delivered (with a review request).\nBusiness: [WHAT YOU SELL]. Make them warm, clear, and reassuring, with my brand personality. Short.",
    "tags": [
      "whatsapp",
      "post-purchase"
    ]
  },
  {
    "id": "em-drip-onboarding",
    "cat": "email",
    "title": "5-Email Onboarding Drip",
    "desc": "Nurture new subscribers into buyers over a week.",
    "prompt": "Design a 5-email onboarding drip for new subscribers in the [NICHE] niche, audience [AUDIENCE], eventually leading to [PRODUCT OFFER].\nFor each email: the goal, subject line, and a 2-line summary. Sequence: welcome → story/why → value → value → soft offer. Build trust before the pitch.",
    "tags": [
      "drip",
      "nurture"
    ]
  },
  {
    "id": "em-survey-email",
    "cat": "email",
    "title": "Audience Survey Email",
    "desc": "Get replies that tell you what to create/sell next.",
    "prompt": "Write an email asking my audience [AUDIENCE] a few quick questions so I can make better content/products.\nMake it feel personal and easy to answer (2-3 questions max), explain why it helps them, and lower the friction. Subject + body. Optionally link a form [FORM LINK].",
    "tags": [
      "survey",
      "research"
    ]
  },
  {
    "id": "em-event-invite",
    "cat": "email",
    "title": "Webinar / Event Invite Email",
    "desc": "Drive signups for a live session or workshop.",
    "prompt": "Write an invite email for my [EVENT] on [TOPIC], date [DATE]. Audience: [AUDIENCE].\nInclude: a subject line, the big promise (what they'll learn/get), who it's for, the details (date/time/where), and a strong RSVP CTA [LINK]. Build excitement. Give a reminder-email version too.",
    "tags": [
      "event",
      "webinar"
    ]
  },
  {
    "id": "em-thank-you",
    "cat": "email",
    "title": "Post-Purchase Thank You Email",
    "desc": "Delight buyers and set up the next action.",
    "prompt": "Write a post-purchase thank-you email for [PRODUCT]. Audience: [AUDIENCE].\nMake the customer feel great, set expectations (delivery/next steps), give a quick tip to get value fast, and a gentle next action (review, refer, or related product). Warm and genuine. Subject + body.",
    "tags": [
      "post-purchase",
      "retention"
    ]
  },
  {
    "id": "em-rewrite-email",
    "cat": "email",
    "title": "Improve My Email Draft",
    "desc": "Tighten and sharpen any email you've written.",
    "prompt": "Here's my email draft:\n\"\"\"\n[PASTE DRAFT]\n\"\"\"\nGoal: [GOAL]. Audience: [AUDIENCE]. Rewrite it: a stronger subject line, a tighter hook, scannable body, one clear CTA, and a friendlier tone. Cut anything that doesn't earn its place. Give the improved version + 3 notes on what changed.",
    "tags": [
      "editing",
      "rewrite"
    ]
  },
  {
    "id": "em-festival-email",
    "cat": "email",
    "title": "Festival / Seasonal Email",
    "desc": "A festive email that connects emotionally and sells gently.",
    "prompt": "Write a [FESTIVAL SEASON] email for my audience [AUDIENCE], business [WHAT YOU SELL]. Offer: [OFFER].\nLead with genuine festive warmth, tie it to my brand, then a tasteful offer + CTA. Subject + body. Make people feel something, not just \"SALE\".",
    "tags": [
      "festival",
      "seasonal"
    ]
  },
  {
    "id": "bp-em-whatsapp-fitness",
    "cat": "email",
    "title": "WhatsApp Broadcast — Fitness Coaches",
    "desc": "A friendly broadcast that gets replies for fitness coaching.",
    "prompt": "Write a WhatsApp broadcast for fitness coaching about [OFFER], audience people who want to get fit.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "fitness"
    ]
  },
  {
    "id": "bp-em-whatsapp-yoga",
    "cat": "email",
    "title": "WhatsApp Broadcast — Yoga Instructors",
    "desc": "A friendly broadcast that gets replies for yoga teaching.",
    "prompt": "Write a WhatsApp broadcast for yoga teaching about [OFFER], audience people seeking calm & flexibility.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "yoga"
    ]
  },
  {
    "id": "bp-em-whatsapp-nutrition",
    "cat": "email",
    "title": "WhatsApp Broadcast — Nutritionists",
    "desc": "A friendly broadcast that gets replies for nutrition & diet coaching.",
    "prompt": "Write a WhatsApp broadcast for nutrition & diet coaching about [OFFER], audience people who want to eat healthier.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "nutrition"
    ]
  },
  {
    "id": "bp-em-whatsapp-homebakery",
    "cat": "email",
    "title": "WhatsApp Broadcast — Home Bakers",
    "desc": "A friendly broadcast that gets replies for a home baking business.",
    "prompt": "Write a WhatsApp broadcast for a home baking business about [OFFER], audience people who order cakes & desserts.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "homebakery"
    ]
  },
  {
    "id": "bp-em-whatsapp-cloudkitchen",
    "cat": "email",
    "title": "WhatsApp Broadcast — Cloud Kitchens",
    "desc": "A friendly broadcast that gets replies for a cloud kitchen.",
    "prompt": "Write a WhatsApp broadcast for a cloud kitchen about [OFFER], audience hungry locals ordering online.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-em-whatsapp-cafe",
    "cat": "email",
    "title": "WhatsApp Broadcast — Cafés & Restaurants",
    "desc": "A friendly broadcast that gets replies for a café or restaurant.",
    "prompt": "Write a WhatsApp broadcast for a café or restaurant about [OFFER], audience local foodies.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "cafe"
    ]
  },
  {
    "id": "bp-em-whatsapp-fashion",
    "cat": "email",
    "title": "WhatsApp Broadcast — Fashion Brands",
    "desc": "A friendly broadcast that gets replies for a fashion & clothing brand.",
    "prompt": "Write a WhatsApp broadcast for a fashion & clothing brand about [OFFER], audience style-conscious shoppers.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "fashion"
    ]
  },
  {
    "id": "bp-em-whatsapp-jewellery",
    "cat": "email",
    "title": "WhatsApp Broadcast — Jewellery Brands",
    "desc": "A friendly broadcast that gets replies for a jewellery business.",
    "prompt": "Write a WhatsApp broadcast for a jewellery business about [OFFER], audience people shopping for jewellery.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "jewellery"
    ]
  },
  {
    "id": "bp-em-whatsapp-handmade",
    "cat": "email",
    "title": "WhatsApp Broadcast — Handmade & Craft Sellers",
    "desc": "A friendly broadcast that gets replies for a handmade craft business.",
    "prompt": "Write a WhatsApp broadcast for a handmade craft business about [OFFER], audience people who love handmade gifts.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "handmade"
    ]
  },
  {
    "id": "bp-em-whatsapp-skincare",
    "cat": "email",
    "title": "WhatsApp Broadcast — Skincare Brands",
    "desc": "A friendly broadcast that gets replies for a skincare brand.",
    "prompt": "Write a WhatsApp broadcast for a skincare brand about [OFFER], audience people who want better skin.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "skincare"
    ]
  },
  {
    "id": "bp-em-whatsapp-makeup",
    "cat": "email",
    "title": "WhatsApp Broadcast — Makeup Artists",
    "desc": "A friendly broadcast that gets replies for a makeup artistry business.",
    "prompt": "Write a WhatsApp broadcast for a makeup artistry business about [OFFER], audience brides & beauty lovers.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "makeup"
    ]
  },
  {
    "id": "bp-em-whatsapp-salon",
    "cat": "email",
    "title": "WhatsApp Broadcast — Salons & Spas",
    "desc": "A friendly broadcast that gets replies for a salon or spa.",
    "prompt": "Write a WhatsApp broadcast for a salon or spa about [OFFER], audience people booking beauty services.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "salon"
    ]
  },
  {
    "id": "bp-em-whatsapp-travel",
    "cat": "email",
    "title": "WhatsApp Broadcast — Travel Creators",
    "desc": "A friendly broadcast that gets replies for travel content.",
    "prompt": "Write a WhatsApp broadcast for travel content about [OFFER], audience people planning trips.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "travel"
    ]
  },
  {
    "id": "bp-em-whatsapp-photography",
    "cat": "email",
    "title": "WhatsApp Broadcast — Photographers",
    "desc": "A friendly broadcast that gets replies for a photography business.",
    "prompt": "Write a WhatsApp broadcast for a photography business about [OFFER], audience couples & brands needing shoots.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "photography"
    ]
  },
  {
    "id": "bp-em-whatsapp-realestate",
    "cat": "email",
    "title": "WhatsApp Broadcast — Real Estate Agents",
    "desc": "A friendly broadcast that gets replies for real estate.",
    "prompt": "Write a WhatsApp broadcast for real estate about [OFFER], audience home buyers & sellers.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "realestate"
    ]
  },
  {
    "id": "bp-em-whatsapp-interior",
    "cat": "email",
    "title": "WhatsApp Broadcast — Interior Designers",
    "desc": "A friendly broadcast that gets replies for interior design.",
    "prompt": "Write a WhatsApp broadcast for interior design about [OFFER], audience homeowners renovating.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "interior"
    ]
  },
  {
    "id": "bp-em-whatsapp-finance",
    "cat": "email",
    "title": "WhatsApp Broadcast — Personal Finance Creators",
    "desc": "A friendly broadcast that gets replies for personal finance content.",
    "prompt": "Write a WhatsApp broadcast for personal finance content about [OFFER], audience people wanting to manage money.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "finance"
    ]
  },
  {
    "id": "bp-em-whatsapp-trading",
    "cat": "email",
    "title": "WhatsApp Broadcast — Stock Market Educators",
    "desc": "A friendly broadcast that gets replies for stock market education.",
    "prompt": "Write a WhatsApp broadcast for stock market education about [OFFER], audience new investors & traders.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "trading"
    ]
  },
  {
    "id": "bp-em-whatsapp-edtech",
    "cat": "email",
    "title": "WhatsApp Broadcast — Online Tutors",
    "desc": "A friendly broadcast that gets replies for online tutoring.",
    "prompt": "Write a WhatsApp broadcast for online tutoring about [OFFER], audience students & parents.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "edtech"
    ]
  },
  {
    "id": "bp-em-whatsapp-examprep",
    "cat": "email",
    "title": "WhatsApp Broadcast — Exam Prep Creators",
    "desc": "A friendly broadcast that gets replies for exam prep content.",
    "prompt": "Write a WhatsApp broadcast for exam prep content about [OFFER], audience students cracking competitive exams.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "examprep"
    ]
  },
  {
    "id": "bp-em-whatsapp-coding",
    "cat": "email",
    "title": "WhatsApp Broadcast — Coding Educators",
    "desc": "A friendly broadcast that gets replies for coding & tech education.",
    "prompt": "Write a WhatsApp broadcast for coding & tech education about [OFFER], audience aspiring developers.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "coding"
    ]
  },
  {
    "id": "bp-em-whatsapp-gadgets",
    "cat": "email",
    "title": "WhatsApp Broadcast — Tech Reviewers",
    "desc": "A friendly broadcast that gets replies for tech & gadget reviews.",
    "prompt": "Write a WhatsApp broadcast for tech & gadget reviews about [OFFER], audience people deciding what to buy.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "gadgets"
    ]
  },
  {
    "id": "bp-em-whatsapp-gaming",
    "cat": "email",
    "title": "WhatsApp Broadcast — Gaming Creators",
    "desc": "A friendly broadcast that gets replies for gaming content.",
    "prompt": "Write a WhatsApp broadcast for gaming content about [OFFER], audience gamers & fans.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "gaming"
    ]
  },
  {
    "id": "bp-em-whatsapp-saas",
    "cat": "email",
    "title": "WhatsApp Broadcast — SaaS Founders",
    "desc": "A friendly broadcast that gets replies for a SaaS product.",
    "prompt": "Write a WhatsApp broadcast for a SaaS product about [OFFER], audience businesses that need the tool.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "saas"
    ]
  },
  {
    "id": "bp-em-whatsapp-freelance",
    "cat": "email",
    "title": "WhatsApp Broadcast — Freelancers",
    "desc": "A friendly broadcast that gets replies for freelancing services.",
    "prompt": "Write a WhatsApp broadcast for freelancing services about [OFFER], audience clients who need the service.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "freelance"
    ]
  },
  {
    "id": "bp-em-whatsapp-agency",
    "cat": "email",
    "title": "WhatsApp Broadcast — Marketing Agencies",
    "desc": "A friendly broadcast that gets replies for a marketing agency.",
    "prompt": "Write a WhatsApp broadcast for a marketing agency about [OFFER], audience business owners who want growth.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "agency"
    ]
  },
  {
    "id": "bp-em-whatsapp-parenting",
    "cat": "email",
    "title": "WhatsApp Broadcast — Parenting Creators",
    "desc": "A friendly broadcast that gets replies for parenting content.",
    "prompt": "Write a WhatsApp broadcast for parenting content about [OFFER], audience new & busy parents.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "parenting"
    ]
  },
  {
    "id": "bp-em-whatsapp-pets",
    "cat": "email",
    "title": "WhatsApp Broadcast — Pet Care Creators",
    "desc": "A friendly broadcast that gets replies for pet care content.",
    "prompt": "Write a WhatsApp broadcast for pet care content about [OFFER], audience pet parents.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "pets"
    ]
  },
  {
    "id": "bp-em-whatsapp-gardening",
    "cat": "email",
    "title": "WhatsApp Broadcast — Gardening Creators",
    "desc": "A friendly broadcast that gets replies for gardening & plants content.",
    "prompt": "Write a WhatsApp broadcast for gardening & plants content about [OFFER], audience plant lovers.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "gardening"
    ]
  },
  {
    "id": "bp-em-whatsapp-astrology",
    "cat": "email",
    "title": "WhatsApp Broadcast — Astrology Creators",
    "desc": "A friendly broadcast that gets replies for astrology & spirituality content.",
    "prompt": "Write a WhatsApp broadcast for astrology & spirituality content about [OFFER], audience people seeking guidance.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "astrology"
    ]
  },
  {
    "id": "bp-em-whatsapp-motivation",
    "cat": "email",
    "title": "WhatsApp Broadcast — Motivational Creators",
    "desc": "A friendly broadcast that gets replies for motivation & self-help content.",
    "prompt": "Write a WhatsApp broadcast for motivation & self-help content about [OFFER], audience people who want to level up.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "motivation"
    ]
  },
  {
    "id": "bp-em-whatsapp-food",
    "cat": "email",
    "title": "WhatsApp Broadcast — Food Bloggers",
    "desc": "A friendly broadcast that gets replies for food & recipe content.",
    "prompt": "Write a WhatsApp broadcast for food & recipe content about [OFFER], audience home cooks & foodies.\nKeep it warm and short (under 60 words), use line breaks, and end with a reply-to-order CTA. Tone: [TONE]. Give English + Hinglish versions.",
    "tags": [
      "whatsapp",
      "broadcast",
      "food"
    ]
  },
  {
    "id": "bp-em-welcome-fitness",
    "cat": "email",
    "title": "Welcome Email — Fitness Coaches",
    "desc": "Turn a new subscriber into a fan for fitness coaching.",
    "prompt": "Write a welcome email for new subscribers of fitness coaching, audience people who want to get fit.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "fitness"
    ]
  },
  {
    "id": "bp-em-welcome-yoga",
    "cat": "email",
    "title": "Welcome Email — Yoga Instructors",
    "desc": "Turn a new subscriber into a fan for yoga teaching.",
    "prompt": "Write a welcome email for new subscribers of yoga teaching, audience people seeking calm & flexibility.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "yoga"
    ]
  },
  {
    "id": "bp-em-welcome-nutrition",
    "cat": "email",
    "title": "Welcome Email — Nutritionists",
    "desc": "Turn a new subscriber into a fan for nutrition & diet coaching.",
    "prompt": "Write a welcome email for new subscribers of nutrition & diet coaching, audience people who want to eat healthier.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "nutrition"
    ]
  },
  {
    "id": "bp-em-welcome-homebakery",
    "cat": "email",
    "title": "Welcome Email — Home Bakers",
    "desc": "Turn a new subscriber into a fan for a home baking business.",
    "prompt": "Write a welcome email for new subscribers of a home baking business, audience people who order cakes & desserts.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "homebakery"
    ]
  },
  {
    "id": "bp-em-welcome-cloudkitchen",
    "cat": "email",
    "title": "Welcome Email — Cloud Kitchens",
    "desc": "Turn a new subscriber into a fan for a cloud kitchen.",
    "prompt": "Write a welcome email for new subscribers of a cloud kitchen, audience hungry locals ordering online.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-em-welcome-cafe",
    "cat": "email",
    "title": "Welcome Email — Cafés & Restaurants",
    "desc": "Turn a new subscriber into a fan for a café or restaurant.",
    "prompt": "Write a welcome email for new subscribers of a café or restaurant, audience local foodies.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "cafe"
    ]
  },
  {
    "id": "bp-em-welcome-fashion",
    "cat": "email",
    "title": "Welcome Email — Fashion Brands",
    "desc": "Turn a new subscriber into a fan for a fashion & clothing brand.",
    "prompt": "Write a welcome email for new subscribers of a fashion & clothing brand, audience style-conscious shoppers.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "fashion"
    ]
  },
  {
    "id": "bp-em-welcome-jewellery",
    "cat": "email",
    "title": "Welcome Email — Jewellery Brands",
    "desc": "Turn a new subscriber into a fan for a jewellery business.",
    "prompt": "Write a welcome email for new subscribers of a jewellery business, audience people shopping for jewellery.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "jewellery"
    ]
  },
  {
    "id": "bp-em-welcome-handmade",
    "cat": "email",
    "title": "Welcome Email — Handmade & Craft Sellers",
    "desc": "Turn a new subscriber into a fan for a handmade craft business.",
    "prompt": "Write a welcome email for new subscribers of a handmade craft business, audience people who love handmade gifts.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "handmade"
    ]
  },
  {
    "id": "bp-em-welcome-skincare",
    "cat": "email",
    "title": "Welcome Email — Skincare Brands",
    "desc": "Turn a new subscriber into a fan for a skincare brand.",
    "prompt": "Write a welcome email for new subscribers of a skincare brand, audience people who want better skin.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "skincare"
    ]
  },
  {
    "id": "bp-em-welcome-makeup",
    "cat": "email",
    "title": "Welcome Email — Makeup Artists",
    "desc": "Turn a new subscriber into a fan for a makeup artistry business.",
    "prompt": "Write a welcome email for new subscribers of a makeup artistry business, audience brides & beauty lovers.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "makeup"
    ]
  },
  {
    "id": "bp-em-welcome-salon",
    "cat": "email",
    "title": "Welcome Email — Salons & Spas",
    "desc": "Turn a new subscriber into a fan for a salon or spa.",
    "prompt": "Write a welcome email for new subscribers of a salon or spa, audience people booking beauty services.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "salon"
    ]
  },
  {
    "id": "bp-em-welcome-travel",
    "cat": "email",
    "title": "Welcome Email — Travel Creators",
    "desc": "Turn a new subscriber into a fan for travel content.",
    "prompt": "Write a welcome email for new subscribers of travel content, audience people planning trips.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "travel"
    ]
  },
  {
    "id": "bp-em-welcome-photography",
    "cat": "email",
    "title": "Welcome Email — Photographers",
    "desc": "Turn a new subscriber into a fan for a photography business.",
    "prompt": "Write a welcome email for new subscribers of a photography business, audience couples & brands needing shoots.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "photography"
    ]
  },
  {
    "id": "bp-em-welcome-realestate",
    "cat": "email",
    "title": "Welcome Email — Real Estate Agents",
    "desc": "Turn a new subscriber into a fan for real estate.",
    "prompt": "Write a welcome email for new subscribers of real estate, audience home buyers & sellers.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "realestate"
    ]
  },
  {
    "id": "bp-em-welcome-interior",
    "cat": "email",
    "title": "Welcome Email — Interior Designers",
    "desc": "Turn a new subscriber into a fan for interior design.",
    "prompt": "Write a welcome email for new subscribers of interior design, audience homeowners renovating.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "interior"
    ]
  },
  {
    "id": "bp-em-welcome-finance",
    "cat": "email",
    "title": "Welcome Email — Personal Finance Creators",
    "desc": "Turn a new subscriber into a fan for personal finance content.",
    "prompt": "Write a welcome email for new subscribers of personal finance content, audience people wanting to manage money.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "finance"
    ]
  },
  {
    "id": "bp-em-welcome-trading",
    "cat": "email",
    "title": "Welcome Email — Stock Market Educators",
    "desc": "Turn a new subscriber into a fan for stock market education.",
    "prompt": "Write a welcome email for new subscribers of stock market education, audience new investors & traders.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "trading"
    ]
  },
  {
    "id": "bp-em-welcome-edtech",
    "cat": "email",
    "title": "Welcome Email — Online Tutors",
    "desc": "Turn a new subscriber into a fan for online tutoring.",
    "prompt": "Write a welcome email for new subscribers of online tutoring, audience students & parents.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "edtech"
    ]
  },
  {
    "id": "bp-em-welcome-examprep",
    "cat": "email",
    "title": "Welcome Email — Exam Prep Creators",
    "desc": "Turn a new subscriber into a fan for exam prep content.",
    "prompt": "Write a welcome email for new subscribers of exam prep content, audience students cracking competitive exams.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "examprep"
    ]
  },
  {
    "id": "bp-em-welcome-coding",
    "cat": "email",
    "title": "Welcome Email — Coding Educators",
    "desc": "Turn a new subscriber into a fan for coding & tech education.",
    "prompt": "Write a welcome email for new subscribers of coding & tech education, audience aspiring developers.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "coding"
    ]
  },
  {
    "id": "bp-em-welcome-gadgets",
    "cat": "email",
    "title": "Welcome Email — Tech Reviewers",
    "desc": "Turn a new subscriber into a fan for tech & gadget reviews.",
    "prompt": "Write a welcome email for new subscribers of tech & gadget reviews, audience people deciding what to buy.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "gadgets"
    ]
  },
  {
    "id": "bp-em-welcome-gaming",
    "cat": "email",
    "title": "Welcome Email — Gaming Creators",
    "desc": "Turn a new subscriber into a fan for gaming content.",
    "prompt": "Write a welcome email for new subscribers of gaming content, audience gamers & fans.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "gaming"
    ]
  },
  {
    "id": "bp-em-welcome-saas",
    "cat": "email",
    "title": "Welcome Email — SaaS Founders",
    "desc": "Turn a new subscriber into a fan for a SaaS product.",
    "prompt": "Write a welcome email for new subscribers of a SaaS product, audience businesses that need the tool.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "saas"
    ]
  },
  {
    "id": "bp-em-welcome-freelance",
    "cat": "email",
    "title": "Welcome Email — Freelancers",
    "desc": "Turn a new subscriber into a fan for freelancing services.",
    "prompt": "Write a welcome email for new subscribers of freelancing services, audience clients who need the service.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "freelance"
    ]
  },
  {
    "id": "bp-em-welcome-agency",
    "cat": "email",
    "title": "Welcome Email — Marketing Agencies",
    "desc": "Turn a new subscriber into a fan for a marketing agency.",
    "prompt": "Write a welcome email for new subscribers of a marketing agency, audience business owners who want growth.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "agency"
    ]
  },
  {
    "id": "bp-em-welcome-parenting",
    "cat": "email",
    "title": "Welcome Email — Parenting Creators",
    "desc": "Turn a new subscriber into a fan for parenting content.",
    "prompt": "Write a welcome email for new subscribers of parenting content, audience new & busy parents.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "parenting"
    ]
  },
  {
    "id": "bp-em-welcome-pets",
    "cat": "email",
    "title": "Welcome Email — Pet Care Creators",
    "desc": "Turn a new subscriber into a fan for pet care content.",
    "prompt": "Write a welcome email for new subscribers of pet care content, audience pet parents.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "pets"
    ]
  },
  {
    "id": "bp-em-welcome-gardening",
    "cat": "email",
    "title": "Welcome Email — Gardening Creators",
    "desc": "Turn a new subscriber into a fan for gardening & plants content.",
    "prompt": "Write a welcome email for new subscribers of gardening & plants content, audience plant lovers.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "gardening"
    ]
  },
  {
    "id": "bp-em-welcome-astrology",
    "cat": "email",
    "title": "Welcome Email — Astrology Creators",
    "desc": "Turn a new subscriber into a fan for astrology & spirituality content.",
    "prompt": "Write a welcome email for new subscribers of astrology & spirituality content, audience people seeking guidance.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "astrology"
    ]
  },
  {
    "id": "bp-em-welcome-motivation",
    "cat": "email",
    "title": "Welcome Email — Motivational Creators",
    "desc": "Turn a new subscriber into a fan for motivation & self-help content.",
    "prompt": "Write a welcome email for new subscribers of motivation & self-help content, audience people who want to level up.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "motivation"
    ]
  },
  {
    "id": "bp-em-welcome-food",
    "cat": "email",
    "title": "Welcome Email — Food Bloggers",
    "desc": "Turn a new subscriber into a fan for food & recipe content.",
    "prompt": "Write a welcome email for new subscribers of food & recipe content, audience home cooks & foodies.\nWarm thank-you, set expectations, deliver one quick win on [TOPIC], and a soft CTA (reply / follow / [LINK]). Under 150 words, personal.",
    "tags": [
      "email",
      "sequence",
      "food"
    ]
  },
  {
    "id": "bp-em-subjects-fitness",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Fitness Coaches",
    "desc": "20 subject lines for fitness coaching emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people who want to get fit from fitness coaching.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "fitness"
    ]
  },
  {
    "id": "bp-em-subjects-yoga",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Yoga Instructors",
    "desc": "20 subject lines for yoga teaching emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people seeking calm & flexibility from yoga teaching.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "yoga"
    ]
  },
  {
    "id": "bp-em-subjects-nutrition",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Nutritionists",
    "desc": "20 subject lines for nutrition & diet coaching emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people who want to eat healthier from nutrition & diet coaching.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "nutrition"
    ]
  },
  {
    "id": "bp-em-subjects-homebakery",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Home Bakers",
    "desc": "20 subject lines for a home baking business emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people who order cakes & desserts from a home baking business.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "homebakery"
    ]
  },
  {
    "id": "bp-em-subjects-cloudkitchen",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Cloud Kitchens",
    "desc": "20 subject lines for a cloud kitchen emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for hungry locals ordering online from a cloud kitchen.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-em-subjects-cafe",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Cafés & Restaurants",
    "desc": "20 subject lines for a café or restaurant emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for local foodies from a café or restaurant.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "cafe"
    ]
  },
  {
    "id": "bp-em-subjects-fashion",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Fashion Brands",
    "desc": "20 subject lines for a fashion & clothing brand emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for style-conscious shoppers from a fashion & clothing brand.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "fashion"
    ]
  },
  {
    "id": "bp-em-subjects-jewellery",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Jewellery Brands",
    "desc": "20 subject lines for a jewellery business emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people shopping for jewellery from a jewellery business.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "jewellery"
    ]
  },
  {
    "id": "bp-em-subjects-handmade",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Handmade & Craft Sellers",
    "desc": "20 subject lines for a handmade craft business emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people who love handmade gifts from a handmade craft business.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "handmade"
    ]
  },
  {
    "id": "bp-em-subjects-skincare",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Skincare Brands",
    "desc": "20 subject lines for a skincare brand emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people who want better skin from a skincare brand.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "skincare"
    ]
  },
  {
    "id": "bp-em-subjects-makeup",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Makeup Artists",
    "desc": "20 subject lines for a makeup artistry business emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for brides & beauty lovers from a makeup artistry business.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "makeup"
    ]
  },
  {
    "id": "bp-em-subjects-salon",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Salons & Spas",
    "desc": "20 subject lines for a salon or spa emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people booking beauty services from a salon or spa.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "salon"
    ]
  },
  {
    "id": "bp-em-subjects-travel",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Travel Creators",
    "desc": "20 subject lines for travel content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people planning trips from travel content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "travel"
    ]
  },
  {
    "id": "bp-em-subjects-photography",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Photographers",
    "desc": "20 subject lines for a photography business emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for couples & brands needing shoots from a photography business.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "photography"
    ]
  },
  {
    "id": "bp-em-subjects-realestate",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Real Estate Agents",
    "desc": "20 subject lines for real estate emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for home buyers & sellers from real estate.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "realestate"
    ]
  },
  {
    "id": "bp-em-subjects-interior",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Interior Designers",
    "desc": "20 subject lines for interior design emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for homeowners renovating from interior design.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "interior"
    ]
  },
  {
    "id": "bp-em-subjects-finance",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Personal Finance Creators",
    "desc": "20 subject lines for personal finance content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people wanting to manage money from personal finance content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "finance"
    ]
  },
  {
    "id": "bp-em-subjects-trading",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Stock Market Educators",
    "desc": "20 subject lines for stock market education emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for new investors & traders from stock market education.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "trading"
    ]
  },
  {
    "id": "bp-em-subjects-edtech",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Online Tutors",
    "desc": "20 subject lines for online tutoring emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for students & parents from online tutoring.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "edtech"
    ]
  },
  {
    "id": "bp-em-subjects-examprep",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Exam Prep Creators",
    "desc": "20 subject lines for exam prep content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for students cracking competitive exams from exam prep content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "examprep"
    ]
  },
  {
    "id": "bp-em-subjects-coding",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Coding Educators",
    "desc": "20 subject lines for coding & tech education emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for aspiring developers from coding & tech education.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "coding"
    ]
  },
  {
    "id": "bp-em-subjects-gadgets",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Tech Reviewers",
    "desc": "20 subject lines for tech & gadget reviews emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people deciding what to buy from tech & gadget reviews.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "gadgets"
    ]
  },
  {
    "id": "bp-em-subjects-gaming",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Gaming Creators",
    "desc": "20 subject lines for gaming content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for gamers & fans from gaming content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "gaming"
    ]
  },
  {
    "id": "bp-em-subjects-saas",
    "cat": "email",
    "title": "Subject Lines That Get Opens — SaaS Founders",
    "desc": "20 subject lines for a SaaS product emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for businesses that need the tool from a SaaS product.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "saas"
    ]
  },
  {
    "id": "bp-em-subjects-freelance",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Freelancers",
    "desc": "20 subject lines for freelancing services emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for clients who need the service from freelancing services.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "freelance"
    ]
  },
  {
    "id": "bp-em-subjects-agency",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Marketing Agencies",
    "desc": "20 subject lines for a marketing agency emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for business owners who want growth from a marketing agency.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "agency"
    ]
  },
  {
    "id": "bp-em-subjects-parenting",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Parenting Creators",
    "desc": "20 subject lines for parenting content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for new & busy parents from parenting content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "parenting"
    ]
  },
  {
    "id": "bp-em-subjects-pets",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Pet Care Creators",
    "desc": "20 subject lines for pet care content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for pet parents from pet care content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "pets"
    ]
  },
  {
    "id": "bp-em-subjects-gardening",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Gardening Creators",
    "desc": "20 subject lines for gardening & plants content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for plant lovers from gardening & plants content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "gardening"
    ]
  },
  {
    "id": "bp-em-subjects-astrology",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Astrology Creators",
    "desc": "20 subject lines for astrology & spirituality content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people seeking guidance from astrology & spirituality content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "astrology"
    ]
  },
  {
    "id": "bp-em-subjects-motivation",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Motivational Creators",
    "desc": "20 subject lines for motivation & self-help content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for people who want to level up from motivation & self-help content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "motivation"
    ]
  },
  {
    "id": "bp-em-subjects-food",
    "cat": "email",
    "title": "Subject Lines That Get Opens — Food Bloggers",
    "desc": "20 subject lines for food & recipe content emails.",
    "prompt": "Give 20 email subject lines about [TOPIC] for home cooks & foodies from food & recipe content.\nMix curiosity, benefit, number, question, and urgency. Under 45 chars, no spammy words. Mark the 5 to test first.",
    "tags": [
      "subject lines",
      "open rate",
      "food"
    ]
  },
  {
    "id": "lo-google-profile",
    "cat": "local",
    "title": "Google Business Profile That Ranks Locally",
    "desc": "Optimised description + posts so locals find you on Maps.",
    "prompt": "Write a Google Business Profile description for my [TYPE OF BUSINESS] in [CITY AREA], serving [AUDIENCE]. Keywords: [KEYWORDS].\nKeep it keyword-aware but natural (under 750 chars). Also give 3 \"Google Posts\" (an offer, an update, a tip) I can publish to stay active.",
    "tags": [
      "local seo",
      "google"
    ]
  },
  {
    "id": "lo-jd-ad",
    "cat": "local",
    "title": "JustDial / Local Listing Copy",
    "desc": "Listing copy that makes locals choose you over competitors.",
    "prompt": "Write listing copy for my [BUSINESS TYPE] in [CITY] for a local directory (JustDial/Sulekha/etc.).\nAudience: [AUDIENCE]. USP: [WHAT MAKES YOU BETTER].\nGive: a short tagline, a description highlighting trust + USP + service area, and a list of services with one-line benefits. Sound reliable and local.",
    "tags": [
      "listing",
      "local"
    ]
  },
  {
    "id": "lo-whatsapp-catalogue",
    "cat": "local",
    "title": "WhatsApp Catalogue Descriptions",
    "desc": "Short product/service blurbs for your WhatsApp Business catalogue.",
    "prompt": "Write WhatsApp Business catalogue descriptions for these items: [LIST ITEMS PRICES].\nBusiness: [WHAT YOU SELL]. Audience: [AUDIENCE].\nEach: a punchy name + a 1-2 line benefit description + price. Keep them mobile-friendly and tappable. Add a friendly catalogue intro line.",
    "tags": [
      "whatsapp",
      "catalogue"
    ]
  },
  {
    "id": "lo-festival-local",
    "cat": "local",
    "title": "Local Festival Promotion",
    "desc": "Festive promo aimed at your neighbourhood customers.",
    "prompt": "Create a [FESTIVAL] promotion for my local [BUSINESS TYPE] in [AREA CITY]. Offer: [OFFER].\nGive: a WhatsApp broadcast, a poster headline + subtext, a Story line, and an SMS (under 160 chars). Make it feel local and festive. Audience: [AUDIENCE].",
    "tags": [
      "festival",
      "promo"
    ]
  },
  {
    "id": "lo-review-request",
    "cat": "local",
    "title": "Ask Local Customers for Google Reviews",
    "desc": "Get more 5-star reviews to boost local ranking.",
    "prompt": "Write messages asking happy customers of my [BUSINESS TYPE] for a Google review.\nGive: a WhatsApp version with the review link [LINK] made super easy, an in-person script my staff can say, and a polite follow-up. Warm, no pressure, makes leaving a review feel quick.",
    "tags": [
      "reviews",
      "local seo"
    ]
  },
  {
    "id": "lo-flyer-poster",
    "cat": "local",
    "title": "Flyer / Poster Copy",
    "desc": "Print-ready headline and copy for a local flyer.",
    "prompt": "Write flyer/poster copy for my [BUSINESS TYPE] in [AREA]. Goal: [GOAL]. Offer: [OFFER]. Contact: [PHONE WHATSAPP].\nGive: a big bold headline, a short subline, 3 quick selling points, the offer, and a clear \"call/visit now\" CTA. Easy to read from a distance.",
    "tags": [
      "print",
      "offline"
    ]
  },
  {
    "id": "lo-sms-campaign",
    "cat": "local",
    "title": "SMS Campaign (Under 160 chars)",
    "desc": "Short, effective SMS blasts for offers and reminders.",
    "prompt": "Write 3 SMS messages (each under 160 chars) for my [BUSINESS TYPE] in [CITY].\nPurposes: an offer [OFFER], an appointment/visit reminder, and a \"we miss you\" win-back. Include a CTA + [PHONE LINK]. Clear and friendly. Audience: [AUDIENCE].",
    "tags": [
      "sms",
      "local"
    ]
  },
  {
    "id": "lo-neighbourhood-post",
    "cat": "local",
    "title": "Local Community / Neighbourhood Post",
    "desc": "Posts for local Facebook groups & RWAs that don't feel spammy.",
    "prompt": "Write a post for a local community group (Facebook/RWA/Telegram) introducing my [BUSINESS TYPE] in [AREA].\nAudience: [AUDIENCE]. Be helpful and human (not an ad): offer value or a neighbour-special [OFFER], mention what I do, and a soft CTA. Respect group rules.",
    "tags": [
      "community",
      "local"
    ]
  },
  {
    "id": "lo-opening-announcement",
    "cat": "local",
    "title": "Grand Opening Announcement",
    "desc": "Build buzz for a new shop/branch opening.",
    "prompt": "Announce the grand opening of my [BUSINESS TYPE] at [LOCATION] on [DATE]. Opening offer: [OFFER].\nGive: an Instagram caption, a WhatsApp broadcast, a poster headline, and a short invite message for friends/family. Exciting and welcoming. Include directions/contact [CONTACT].",
    "tags": [
      "launch",
      "local"
    ]
  },
  {
    "id": "lo-service-menu",
    "cat": "local",
    "title": "Service Menu / Price List Copy",
    "desc": "A clear, appealing services-and-prices list.",
    "prompt": "Create a service menu for my [BUSINESS TYPE]. Services + prices: [LIST].\nGroup them sensibly, give each an appealing name + one-line benefit, and add a \"popular\"/\"best value\" tag where it helps. Keep it easy to scan. Audience: [AUDIENCE].",
    "tags": [
      "menu",
      "pricing"
    ]
  },
  {
    "id": "lo-appointment-reminders",
    "cat": "local",
    "title": "Appointment Booking & Reminder Scripts",
    "desc": "Reduce no-shows with friendly booking/reminder messages.",
    "prompt": "Write WhatsApp scripts for my [BUSINESS TYPE]: a booking confirmation, a day-before reminder, and a follow-up after the appointment (with a review/re-book nudge).\nInclude placeholders for [DATE TIME] and [SERVICE]. Warm, professional, reduces no-shows.",
    "tags": [
      "appointments",
      "whatsapp"
    ]
  },
  {
    "id": "lo-local-reel",
    "cat": "local",
    "title": "Reel Ideas for a Local Business",
    "desc": "Simple Reels that bring in nearby customers.",
    "prompt": "Give 10 easy Reel ideas for my local [BUSINESS TYPE] in [AREA] to attract nearby customers.\nMix: behind-the-scenes, before/after, a quick tip, customer moments, an offer, \"why locals love us\". For each: a hook + what to film. Phone-friendly, no big production.",
    "tags": [
      "reels",
      "local"
    ]
  },
  {
    "id": "lo-partnership",
    "cat": "local",
    "title": "Local Cross-Promotion Pitch",
    "desc": "Team up with nearby businesses to share customers.",
    "prompt": "I run a [MY BUSINESS] in [AREA]. I want to cross-promote with [TYPE OF NEARBY BUSINESS] that shares my customers.\nWrite a friendly pitch proposing a cross-promo (referral, combo offer, shoutout swap), with a specific win-win idea. Make it easy for them to say yes.",
    "tags": [
      "partnership",
      "growth"
    ]
  },
  {
    "id": "lo-hyperlocal-ad",
    "cat": "local",
    "title": "Hyperlocal Ad (Reach Your Area)",
    "desc": "Geo-targeted ad copy aimed at your locality.",
    "prompt": "Write hyperlocal ad copy for my [BUSINESS TYPE] targeting people within [RADIUS AREA] of [LOCATION]. Offer: [OFFER]. Audience: [AUDIENCE].\nGive 3 variants that mention the locality, the offer, and a \"visit/call/WhatsApp now\" CTA. Make locals feel it's for them specifically.",
    "tags": [
      "ads",
      "local"
    ]
  },
  {
    "id": "lo-faq-local",
    "cat": "local",
    "title": "Local Customer FAQ",
    "desc": "Answer the practical questions locals ask before visiting.",
    "prompt": "Write an FAQ for my local [BUSINESS TYPE] in [AREA].\nCover what locals actually ask: timings, location/parking, prices, booking, payment (UPI/cards/COD), home service/delivery, and quality/warranty. Keep answers short, honest, and reassuring. Audience: [AUDIENCE].",
    "tags": [
      "faq",
      "trust"
    ]
  },
  {
    "id": "bp-lo-review-fitness",
    "cat": "local",
    "title": "Google Review Request — Fitness Coaches",
    "desc": "Get more 5-star reviews for fitness coaching.",
    "prompt": "Write a short, polite message asking happy customers of fitness coaching in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people who want to get fit.",
    "tags": [
      "reviews",
      "local",
      "fitness"
    ]
  },
  {
    "id": "bp-lo-review-yoga",
    "cat": "local",
    "title": "Google Review Request — Yoga Instructors",
    "desc": "Get more 5-star reviews for yoga teaching.",
    "prompt": "Write a short, polite message asking happy customers of yoga teaching in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people seeking calm & flexibility.",
    "tags": [
      "reviews",
      "local",
      "yoga"
    ]
  },
  {
    "id": "bp-lo-review-nutrition",
    "cat": "local",
    "title": "Google Review Request — Nutritionists",
    "desc": "Get more 5-star reviews for nutrition & diet coaching.",
    "prompt": "Write a short, polite message asking happy customers of nutrition & diet coaching in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people who want to eat healthier.",
    "tags": [
      "reviews",
      "local",
      "nutrition"
    ]
  },
  {
    "id": "bp-lo-review-homebakery",
    "cat": "local",
    "title": "Google Review Request — Home Bakers",
    "desc": "Get more 5-star reviews for a home baking business.",
    "prompt": "Write a short, polite message asking happy customers of a home baking business in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people who order cakes & desserts.",
    "tags": [
      "reviews",
      "local",
      "homebakery"
    ]
  },
  {
    "id": "bp-lo-review-cloudkitchen",
    "cat": "local",
    "title": "Google Review Request — Cloud Kitchens",
    "desc": "Get more 5-star reviews for a cloud kitchen.",
    "prompt": "Write a short, polite message asking happy customers of a cloud kitchen in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: hungry locals ordering online.",
    "tags": [
      "reviews",
      "local",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-lo-review-cafe",
    "cat": "local",
    "title": "Google Review Request — Cafés & Restaurants",
    "desc": "Get more 5-star reviews for a café or restaurant.",
    "prompt": "Write a short, polite message asking happy customers of a café or restaurant in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: local foodies.",
    "tags": [
      "reviews",
      "local",
      "cafe"
    ]
  },
  {
    "id": "bp-lo-review-fashion",
    "cat": "local",
    "title": "Google Review Request — Fashion Brands",
    "desc": "Get more 5-star reviews for a fashion & clothing brand.",
    "prompt": "Write a short, polite message asking happy customers of a fashion & clothing brand in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: style-conscious shoppers.",
    "tags": [
      "reviews",
      "local",
      "fashion"
    ]
  },
  {
    "id": "bp-lo-review-jewellery",
    "cat": "local",
    "title": "Google Review Request — Jewellery Brands",
    "desc": "Get more 5-star reviews for a jewellery business.",
    "prompt": "Write a short, polite message asking happy customers of a jewellery business in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people shopping for jewellery.",
    "tags": [
      "reviews",
      "local",
      "jewellery"
    ]
  },
  {
    "id": "bp-lo-review-handmade",
    "cat": "local",
    "title": "Google Review Request — Handmade & Craft Sellers",
    "desc": "Get more 5-star reviews for a handmade craft business.",
    "prompt": "Write a short, polite message asking happy customers of a handmade craft business in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people who love handmade gifts.",
    "tags": [
      "reviews",
      "local",
      "handmade"
    ]
  },
  {
    "id": "bp-lo-review-skincare",
    "cat": "local",
    "title": "Google Review Request — Skincare Brands",
    "desc": "Get more 5-star reviews for a skincare brand.",
    "prompt": "Write a short, polite message asking happy customers of a skincare brand in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people who want better skin.",
    "tags": [
      "reviews",
      "local",
      "skincare"
    ]
  },
  {
    "id": "bp-lo-review-makeup",
    "cat": "local",
    "title": "Google Review Request — Makeup Artists",
    "desc": "Get more 5-star reviews for a makeup artistry business.",
    "prompt": "Write a short, polite message asking happy customers of a makeup artistry business in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: brides & beauty lovers.",
    "tags": [
      "reviews",
      "local",
      "makeup"
    ]
  },
  {
    "id": "bp-lo-review-salon",
    "cat": "local",
    "title": "Google Review Request — Salons & Spas",
    "desc": "Get more 5-star reviews for a salon or spa.",
    "prompt": "Write a short, polite message asking happy customers of a salon or spa in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people booking beauty services.",
    "tags": [
      "reviews",
      "local",
      "salon"
    ]
  },
  {
    "id": "bp-lo-review-travel",
    "cat": "local",
    "title": "Google Review Request — Travel Creators",
    "desc": "Get more 5-star reviews for travel content.",
    "prompt": "Write a short, polite message asking happy customers of travel content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people planning trips.",
    "tags": [
      "reviews",
      "local",
      "travel"
    ]
  },
  {
    "id": "bp-lo-review-photography",
    "cat": "local",
    "title": "Google Review Request — Photographers",
    "desc": "Get more 5-star reviews for a photography business.",
    "prompt": "Write a short, polite message asking happy customers of a photography business in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: couples & brands needing shoots.",
    "tags": [
      "reviews",
      "local",
      "photography"
    ]
  },
  {
    "id": "bp-lo-review-realestate",
    "cat": "local",
    "title": "Google Review Request — Real Estate Agents",
    "desc": "Get more 5-star reviews for real estate.",
    "prompt": "Write a short, polite message asking happy customers of real estate in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: home buyers & sellers.",
    "tags": [
      "reviews",
      "local",
      "realestate"
    ]
  },
  {
    "id": "bp-lo-review-interior",
    "cat": "local",
    "title": "Google Review Request — Interior Designers",
    "desc": "Get more 5-star reviews for interior design.",
    "prompt": "Write a short, polite message asking happy customers of interior design in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: homeowners renovating.",
    "tags": [
      "reviews",
      "local",
      "interior"
    ]
  },
  {
    "id": "bp-lo-review-finance",
    "cat": "local",
    "title": "Google Review Request — Personal Finance Creators",
    "desc": "Get more 5-star reviews for personal finance content.",
    "prompt": "Write a short, polite message asking happy customers of personal finance content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people wanting to manage money.",
    "tags": [
      "reviews",
      "local",
      "finance"
    ]
  },
  {
    "id": "bp-lo-review-trading",
    "cat": "local",
    "title": "Google Review Request — Stock Market Educators",
    "desc": "Get more 5-star reviews for stock market education.",
    "prompt": "Write a short, polite message asking happy customers of stock market education in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: new investors & traders.",
    "tags": [
      "reviews",
      "local",
      "trading"
    ]
  },
  {
    "id": "bp-lo-review-edtech",
    "cat": "local",
    "title": "Google Review Request — Online Tutors",
    "desc": "Get more 5-star reviews for online tutoring.",
    "prompt": "Write a short, polite message asking happy customers of online tutoring in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: students & parents.",
    "tags": [
      "reviews",
      "local",
      "edtech"
    ]
  },
  {
    "id": "bp-lo-review-examprep",
    "cat": "local",
    "title": "Google Review Request — Exam Prep Creators",
    "desc": "Get more 5-star reviews for exam prep content.",
    "prompt": "Write a short, polite message asking happy customers of exam prep content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: students cracking competitive exams.",
    "tags": [
      "reviews",
      "local",
      "examprep"
    ]
  },
  {
    "id": "bp-lo-review-coding",
    "cat": "local",
    "title": "Google Review Request — Coding Educators",
    "desc": "Get more 5-star reviews for coding & tech education.",
    "prompt": "Write a short, polite message asking happy customers of coding & tech education in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: aspiring developers.",
    "tags": [
      "reviews",
      "local",
      "coding"
    ]
  },
  {
    "id": "bp-lo-review-gadgets",
    "cat": "local",
    "title": "Google Review Request — Tech Reviewers",
    "desc": "Get more 5-star reviews for tech & gadget reviews.",
    "prompt": "Write a short, polite message asking happy customers of tech & gadget reviews in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people deciding what to buy.",
    "tags": [
      "reviews",
      "local",
      "gadgets"
    ]
  },
  {
    "id": "bp-lo-review-gaming",
    "cat": "local",
    "title": "Google Review Request — Gaming Creators",
    "desc": "Get more 5-star reviews for gaming content.",
    "prompt": "Write a short, polite message asking happy customers of gaming content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: gamers & fans.",
    "tags": [
      "reviews",
      "local",
      "gaming"
    ]
  },
  {
    "id": "bp-lo-review-saas",
    "cat": "local",
    "title": "Google Review Request — SaaS Founders",
    "desc": "Get more 5-star reviews for a SaaS product.",
    "prompt": "Write a short, polite message asking happy customers of a SaaS product in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: businesses that need the tool.",
    "tags": [
      "reviews",
      "local",
      "saas"
    ]
  },
  {
    "id": "bp-lo-review-freelance",
    "cat": "local",
    "title": "Google Review Request — Freelancers",
    "desc": "Get more 5-star reviews for freelancing services.",
    "prompt": "Write a short, polite message asking happy customers of freelancing services in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: clients who need the service.",
    "tags": [
      "reviews",
      "local",
      "freelance"
    ]
  },
  {
    "id": "bp-lo-review-agency",
    "cat": "local",
    "title": "Google Review Request — Marketing Agencies",
    "desc": "Get more 5-star reviews for a marketing agency.",
    "prompt": "Write a short, polite message asking happy customers of a marketing agency in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: business owners who want growth.",
    "tags": [
      "reviews",
      "local",
      "agency"
    ]
  },
  {
    "id": "bp-lo-review-parenting",
    "cat": "local",
    "title": "Google Review Request — Parenting Creators",
    "desc": "Get more 5-star reviews for parenting content.",
    "prompt": "Write a short, polite message asking happy customers of parenting content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: new & busy parents.",
    "tags": [
      "reviews",
      "local",
      "parenting"
    ]
  },
  {
    "id": "bp-lo-review-pets",
    "cat": "local",
    "title": "Google Review Request — Pet Care Creators",
    "desc": "Get more 5-star reviews for pet care content.",
    "prompt": "Write a short, polite message asking happy customers of pet care content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: pet parents.",
    "tags": [
      "reviews",
      "local",
      "pets"
    ]
  },
  {
    "id": "bp-lo-review-gardening",
    "cat": "local",
    "title": "Google Review Request — Gardening Creators",
    "desc": "Get more 5-star reviews for gardening & plants content.",
    "prompt": "Write a short, polite message asking happy customers of gardening & plants content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: plant lovers.",
    "tags": [
      "reviews",
      "local",
      "gardening"
    ]
  },
  {
    "id": "bp-lo-review-astrology",
    "cat": "local",
    "title": "Google Review Request — Astrology Creators",
    "desc": "Get more 5-star reviews for astrology & spirituality content.",
    "prompt": "Write a short, polite message asking happy customers of astrology & spirituality content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people seeking guidance.",
    "tags": [
      "reviews",
      "local",
      "astrology"
    ]
  },
  {
    "id": "bp-lo-review-motivation",
    "cat": "local",
    "title": "Google Review Request — Motivational Creators",
    "desc": "Get more 5-star reviews for motivation & self-help content.",
    "prompt": "Write a short, polite message asking happy customers of motivation & self-help content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: people who want to level up.",
    "tags": [
      "reviews",
      "local",
      "motivation"
    ]
  },
  {
    "id": "bp-lo-review-food",
    "cat": "local",
    "title": "Google Review Request — Food Bloggers",
    "desc": "Get more 5-star reviews for food & recipe content.",
    "prompt": "Write a short, polite message asking happy customers of food & recipe content in [CITY] to leave a Google review.\nMake it easy and warm with the review [LINK], plus an in-person line staff can say. Audience: home cooks & foodies.",
    "tags": [
      "reviews",
      "local",
      "food"
    ]
  },
  {
    "id": "co-course-outline",
    "cat": "coaching",
    "title": "Online Course Outline",
    "desc": "Structure a course from promise to modules to lessons.",
    "prompt": "Outline an online course on [TOPIC] for [AUDIENCE]. Transformation: [WHERE THEY START WHERE THEY END].\nGive: a course promise/title, [NUMBER] modules in a logical order, 3-5 lessons per module, and the one outcome each module delivers. Note where to add exercises/worksheets.",
    "tags": [
      "course",
      "outline"
    ]
  },
  {
    "id": "co-lesson-script",
    "cat": "coaching",
    "title": "Course Lesson Script",
    "desc": "A clear, engaging script for a single lesson.",
    "prompt": "Write a script for the lesson \"[LESSON TITLE]\" in my course on [TOPIC]. Audience: [AUDIENCE]. Lesson goal: [OUTCOME].\nStructure: a hook (why this matters), the teaching (clear steps with examples), a quick action step, and a transition to the next lesson. Conversational, not lecture-y.",
    "tags": [
      "lesson",
      "script"
    ]
  },
  {
    "id": "co-mini-course-leadmagnet",
    "cat": "coaching",
    "title": "Free Mini-Course / Lead Magnet",
    "desc": "A free resource that grows your list and warms up buyers.",
    "prompt": "Design a free lead magnet for [AUDIENCE] in the [NICHE] niche that leads toward my paid [OFFER].\nSuggest the format (mini-course, checklist, template, challenge), a catchy title, the outline, and how it naturally sets up the paid offer. Should give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel"
    ]
  },
  {
    "id": "co-webinar-outline",
    "cat": "coaching",
    "title": "Webinar / Masterclass Outline",
    "desc": "A value-first webinar that sells at the end.",
    "prompt": "Outline a free webinar on [TOPIC] for [AUDIENCE] that pitches my [OFFER] at the end.\nStructure: hook + big promise, why-listen-to-me, 3 core teaching points (real value), the transition to the offer, the offer + bonuses, and Q&A. Give a 1-2 line note per section. Value-first, soft pitch.",
    "tags": [
      "webinar",
      "sales"
    ]
  },
  {
    "id": "co-coaching-offer",
    "cat": "coaching",
    "title": "Coaching Offer / Package",
    "desc": "Package and price your coaching clearly.",
    "prompt": "Help me package my coaching for [AUDIENCE]. I help them [RESULT]. Format: [1 1 GROUP ETC].\nSuggest: a signature program name, what's included, the transformation/promise, 2-3 price tiers (INR), and the outcome-focused way to describe it. Make the value obvious.",
    "tags": [
      "offer",
      "pricing"
    ]
  },
  {
    "id": "co-sales-call-script",
    "cat": "coaching",
    "title": "Discovery / Sales Call Script",
    "desc": "A consultative call flow that enrolls without pressure.",
    "prompt": "Write a discovery call script to enroll coaching clients. My offer: [OFFER]. Audience: [AUDIENCE].\nFlow: rapport, understand their situation/goal, identify the gap, present my program as the bridge, handle price/doubt, and a clear next step. Consultative, not pushy. Include key questions to ask.",
    "tags": [
      "sales call",
      "enrollment"
    ]
  },
  {
    "id": "co-testimonials",
    "cat": "coaching",
    "title": "Turn Client Wins into Testimonials",
    "desc": "Collect and frame results as compelling proof.",
    "prompt": "Write a message asking a coaching client for a testimonial after their result: [RESULT].\nGive 4 specific questions that pull out a story-driven testimonial (before, what changed, the result, who'd they recommend it to). Plus show how I'd edit their answers into a short, powerful testimonial.",
    "tags": [
      "testimonials",
      "proof"
    ]
  },
  {
    "id": "co-content-authority",
    "cat": "coaching",
    "title": "Authority Content Plan for Coaches",
    "desc": "Content that proves expertise and attracts clients.",
    "prompt": "Plan 2 weeks of authority-building content for my coaching in [NICHE], audience [AUDIENCE].\nMix: client results, myth-busting, quick wins, mindset, behind-the-method, and soft offers. For each: platform, format, and the hook. Goal: attract [OFFER] clients without being salesy.",
    "tags": [
      "content",
      "authority"
    ]
  },
  {
    "id": "co-objection-doc",
    "cat": "coaching",
    "title": "Handle Coaching Objections",
    "desc": "Reframe \"too expensive / no time / will it work for me\".",
    "prompt": "My coaching offer: [OFFER], price [PRICE], audience [AUDIENCE].\nGive empathetic, honest reframes for: \"it's too expensive\", \"I don't have time\", \"will this work for me?\", \"I can find this free online\", and \"let me think about it\". Each: acknowledge → reframe → next step.",
    "tags": [
      "objections",
      "sales"
    ]
  },
  {
    "id": "co-worksheet",
    "cat": "coaching",
    "title": "Workbook / Worksheet Creator",
    "desc": "An exercise that helps students apply a lesson.",
    "prompt": "Create a worksheet for the lesson/topic \"[LESSON TOPIC]\" in my program for [AUDIENCE]. Goal: [OUTCOME].\nGive: a short intro, 4-6 reflection/action prompts that make them apply it, fill-in spaces/steps, and a closing \"your next action\" box. Practical, not busywork.",
    "tags": [
      "worksheet",
      "engagement"
    ]
  },
  {
    "id": "co-challenge",
    "cat": "coaching",
    "title": "5-Day Challenge Plan",
    "desc": "A free challenge that builds audience and leads to a sale.",
    "prompt": "Design a free 5-day challenge for [AUDIENCE] in the [NICHE] niche that leads to my [OFFER].\nFor each day: a theme, the lesson/action, the win they get, and the daily prompt to keep them engaged. Day 5 transitions to the offer naturally. Give a catchy challenge name + promise.",
    "tags": [
      "challenge",
      "launch"
    ]
  },
  {
    "id": "co-onboarding",
    "cat": "coaching",
    "title": "Client Onboarding Sequence",
    "desc": "Welcome new clients so they get results (and stay).",
    "prompt": "Write a client onboarding flow for my coaching [OFFER].\nGive: a welcome message, what to expect/how it works, the first action to get a quick win, how to access materials [LINK], and how to reach me. Warm, organised, sets them up to succeed and refer me.",
    "tags": [
      "onboarding",
      "retention"
    ]
  },
  {
    "id": "co-course-sales-page",
    "cat": "coaching",
    "title": "Course Sales Page Outline",
    "desc": "A full sales page structure for an online course.",
    "prompt": "Outline a sales page for my course [COURSE NAME] on [TOPIC], audience [AUDIENCE], price [PRICE].\nSections: headline (the transformation), the problem, who it's for, what's inside (modules), outcomes, bonuses, instructor credibility, testimonials, pricing, guarantee, FAQ, CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "course"
    ]
  },
  {
    "id": "co-niche-coach-positioning",
    "cat": "coaching",
    "title": "Position My Coaching Niche",
    "desc": "Sharpen who you serve so marketing gets easier.",
    "prompt": "I coach [BROAD AREA] but it's too generic. About me: [ABOUT YOU]. Who I love working with: [IDEAL CLIENT]. Results I get: [RESULTS].\nGive 3 sharper niche positions (\"I help [WHO] achieve [RESULT] without [PAIN]\"), pros/cons of each, a recommendation, and a tagline for the winner.",
    "tags": [
      "positioning",
      "strategy"
    ]
  },
  {
    "id": "co-faq-program",
    "cat": "coaching",
    "title": "Program FAQ (Reduce Buying Doubts)",
    "desc": "Answer what stops people enrolling.",
    "prompt": "Write an FAQ for my coaching program/course [OFFER], audience [AUDIENCE], price [PRICE].\nAnswer the real doubts: time needed, is it for beginners, what if it doesn't work, payment plans, access/duration, support, and results timeline. Honest, reassuring, removes friction.",
    "tags": [
      "faq",
      "conversion"
    ]
  },
  {
    "id": "co-email-nurture-coach",
    "cat": "coaching",
    "title": "Nurture Emails That Lead to Enrollment",
    "desc": "A short email series that warms leads toward your offer.",
    "prompt": "Write a 4-email nurture sequence for leads who downloaded my freebie, leading to my [OFFER]. Audience: [AUDIENCE].\nEmail themes: value/quick win → my story/method → overcome a key objection → invite to the offer. For each: subject + a short body outline. Trust-first, then invite.",
    "tags": [
      "email",
      "nurture"
    ]
  },
  {
    "id": "bp-de-lead-fitness",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Fitness Coaches",
    "desc": "A free resource that grows a list for fitness coaching.",
    "prompt": "Design a free lead magnet for people who want to get fit in fitness coaching that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "fitness"
    ]
  },
  {
    "id": "bp-de-lead-yoga",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Yoga Instructors",
    "desc": "A free resource that grows a list for yoga teaching.",
    "prompt": "Design a free lead magnet for people seeking calm & flexibility in yoga teaching that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "yoga"
    ]
  },
  {
    "id": "bp-de-lead-nutrition",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Nutritionists",
    "desc": "A free resource that grows a list for nutrition & diet coaching.",
    "prompt": "Design a free lead magnet for people who want to eat healthier in nutrition & diet coaching that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "nutrition"
    ]
  },
  {
    "id": "bp-de-lead-homebakery",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Home Bakers",
    "desc": "A free resource that grows a list for a home baking business.",
    "prompt": "Design a free lead magnet for people who order cakes & desserts in a home baking business that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "homebakery"
    ]
  },
  {
    "id": "bp-de-lead-cloudkitchen",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Cloud Kitchens",
    "desc": "A free resource that grows a list for a cloud kitchen.",
    "prompt": "Design a free lead magnet for hungry locals ordering online in a cloud kitchen that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-de-lead-cafe",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Cafés & Restaurants",
    "desc": "A free resource that grows a list for a café or restaurant.",
    "prompt": "Design a free lead magnet for local foodies in a café or restaurant that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "cafe"
    ]
  },
  {
    "id": "bp-de-lead-fashion",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Fashion Brands",
    "desc": "A free resource that grows a list for a fashion & clothing brand.",
    "prompt": "Design a free lead magnet for style-conscious shoppers in a fashion & clothing brand that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "fashion"
    ]
  },
  {
    "id": "bp-de-lead-jewellery",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Jewellery Brands",
    "desc": "A free resource that grows a list for a jewellery business.",
    "prompt": "Design a free lead magnet for people shopping for jewellery in a jewellery business that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "jewellery"
    ]
  },
  {
    "id": "bp-de-lead-handmade",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Handmade & Craft Sellers",
    "desc": "A free resource that grows a list for a handmade craft business.",
    "prompt": "Design a free lead magnet for people who love handmade gifts in a handmade craft business that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "handmade"
    ]
  },
  {
    "id": "bp-de-lead-skincare",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Skincare Brands",
    "desc": "A free resource that grows a list for a skincare brand.",
    "prompt": "Design a free lead magnet for people who want better skin in a skincare brand that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "skincare"
    ]
  },
  {
    "id": "bp-de-lead-makeup",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Makeup Artists",
    "desc": "A free resource that grows a list for a makeup artistry business.",
    "prompt": "Design a free lead magnet for brides & beauty lovers in a makeup artistry business that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "makeup"
    ]
  },
  {
    "id": "bp-de-lead-salon",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Salons & Spas",
    "desc": "A free resource that grows a list for a salon or spa.",
    "prompt": "Design a free lead magnet for people booking beauty services in a salon or spa that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "salon"
    ]
  },
  {
    "id": "bp-de-lead-travel",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Travel Creators",
    "desc": "A free resource that grows a list for travel content.",
    "prompt": "Design a free lead magnet for people planning trips in travel content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "travel"
    ]
  },
  {
    "id": "bp-de-lead-photography",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Photographers",
    "desc": "A free resource that grows a list for a photography business.",
    "prompt": "Design a free lead magnet for couples & brands needing shoots in a photography business that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "photography"
    ]
  },
  {
    "id": "bp-de-lead-realestate",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Real Estate Agents",
    "desc": "A free resource that grows a list for real estate.",
    "prompt": "Design a free lead magnet for home buyers & sellers in real estate that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "realestate"
    ]
  },
  {
    "id": "bp-de-lead-interior",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Interior Designers",
    "desc": "A free resource that grows a list for interior design.",
    "prompt": "Design a free lead magnet for homeowners renovating in interior design that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "interior"
    ]
  },
  {
    "id": "bp-de-lead-finance",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Personal Finance Creators",
    "desc": "A free resource that grows a list for personal finance content.",
    "prompt": "Design a free lead magnet for people wanting to manage money in personal finance content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "finance"
    ]
  },
  {
    "id": "bp-de-lead-trading",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Stock Market Educators",
    "desc": "A free resource that grows a list for stock market education.",
    "prompt": "Design a free lead magnet for new investors & traders in stock market education that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "trading"
    ]
  },
  {
    "id": "bp-de-lead-edtech",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Online Tutors",
    "desc": "A free resource that grows a list for online tutoring.",
    "prompt": "Design a free lead magnet for students & parents in online tutoring that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "edtech"
    ]
  },
  {
    "id": "bp-de-lead-examprep",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Exam Prep Creators",
    "desc": "A free resource that grows a list for exam prep content.",
    "prompt": "Design a free lead magnet for students cracking competitive exams in exam prep content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "examprep"
    ]
  },
  {
    "id": "bp-de-lead-coding",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Coding Educators",
    "desc": "A free resource that grows a list for coding & tech education.",
    "prompt": "Design a free lead magnet for aspiring developers in coding & tech education that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "coding"
    ]
  },
  {
    "id": "bp-de-lead-gadgets",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Tech Reviewers",
    "desc": "A free resource that grows a list for tech & gadget reviews.",
    "prompt": "Design a free lead magnet for people deciding what to buy in tech & gadget reviews that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "gadgets"
    ]
  },
  {
    "id": "bp-de-lead-gaming",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Gaming Creators",
    "desc": "A free resource that grows a list for gaming content.",
    "prompt": "Design a free lead magnet for gamers & fans in gaming content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "gaming"
    ]
  },
  {
    "id": "bp-de-lead-saas",
    "cat": "coaching",
    "title": "Lead Magnet Idea — SaaS Founders",
    "desc": "A free resource that grows a list for a SaaS product.",
    "prompt": "Design a free lead magnet for businesses that need the tool in a SaaS product that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "saas"
    ]
  },
  {
    "id": "bp-de-lead-freelance",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Freelancers",
    "desc": "A free resource that grows a list for freelancing services.",
    "prompt": "Design a free lead magnet for clients who need the service in freelancing services that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "freelance"
    ]
  },
  {
    "id": "bp-de-lead-agency",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Marketing Agencies",
    "desc": "A free resource that grows a list for a marketing agency.",
    "prompt": "Design a free lead magnet for business owners who want growth in a marketing agency that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "agency"
    ]
  },
  {
    "id": "bp-de-lead-parenting",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Parenting Creators",
    "desc": "A free resource that grows a list for parenting content.",
    "prompt": "Design a free lead magnet for new & busy parents in parenting content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "parenting"
    ]
  },
  {
    "id": "bp-de-lead-pets",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Pet Care Creators",
    "desc": "A free resource that grows a list for pet care content.",
    "prompt": "Design a free lead magnet for pet parents in pet care content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "pets"
    ]
  },
  {
    "id": "bp-de-lead-gardening",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Gardening Creators",
    "desc": "A free resource that grows a list for gardening & plants content.",
    "prompt": "Design a free lead magnet for plant lovers in gardening & plants content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "gardening"
    ]
  },
  {
    "id": "bp-de-lead-astrology",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Astrology Creators",
    "desc": "A free resource that grows a list for astrology & spirituality content.",
    "prompt": "Design a free lead magnet for people seeking guidance in astrology & spirituality content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "astrology"
    ]
  },
  {
    "id": "bp-de-lead-motivation",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Motivational Creators",
    "desc": "A free resource that grows a list for motivation & self-help content.",
    "prompt": "Design a free lead magnet for people who want to level up in motivation & self-help content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "motivation"
    ]
  },
  {
    "id": "bp-de-lead-food",
    "cat": "coaching",
    "title": "Lead Magnet Idea — Food Bloggers",
    "desc": "A free resource that grows a list for food & recipe content.",
    "prompt": "Design a free lead magnet for home cooks & foodies in food & recipe content that leads toward my paid [OFFER].\nSuggest the format (checklist, template, mini-course, challenge), a catchy title, the outline, and how it sets up the paid offer. Give a real quick win.",
    "tags": [
      "lead magnet",
      "funnel",
      "food"
    ]
  },
  {
    "id": "bp-de-salespage-fitness",
    "cat": "coaching",
    "title": "Sales Page Outline — Fitness Coaches",
    "desc": "A high-converting page structure for fitness coaching.",
    "prompt": "Outline a sales page for [OFFER] from fitness coaching, audience people who want to get fit, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "fitness"
    ]
  },
  {
    "id": "bp-de-salespage-yoga",
    "cat": "coaching",
    "title": "Sales Page Outline — Yoga Instructors",
    "desc": "A high-converting page structure for yoga teaching.",
    "prompt": "Outline a sales page for [OFFER] from yoga teaching, audience people seeking calm & flexibility, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "yoga"
    ]
  },
  {
    "id": "bp-de-salespage-nutrition",
    "cat": "coaching",
    "title": "Sales Page Outline — Nutritionists",
    "desc": "A high-converting page structure for nutrition & diet coaching.",
    "prompt": "Outline a sales page for [OFFER] from nutrition & diet coaching, audience people who want to eat healthier, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "nutrition"
    ]
  },
  {
    "id": "bp-de-salespage-homebakery",
    "cat": "coaching",
    "title": "Sales Page Outline — Home Bakers",
    "desc": "A high-converting page structure for a home baking business.",
    "prompt": "Outline a sales page for [OFFER] from a home baking business, audience people who order cakes & desserts, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "homebakery"
    ]
  },
  {
    "id": "bp-de-salespage-cloudkitchen",
    "cat": "coaching",
    "title": "Sales Page Outline — Cloud Kitchens",
    "desc": "A high-converting page structure for a cloud kitchen.",
    "prompt": "Outline a sales page for [OFFER] from a cloud kitchen, audience hungry locals ordering online, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-de-salespage-cafe",
    "cat": "coaching",
    "title": "Sales Page Outline — Cafés & Restaurants",
    "desc": "A high-converting page structure for a café or restaurant.",
    "prompt": "Outline a sales page for [OFFER] from a café or restaurant, audience local foodies, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "cafe"
    ]
  },
  {
    "id": "bp-de-salespage-fashion",
    "cat": "coaching",
    "title": "Sales Page Outline — Fashion Brands",
    "desc": "A high-converting page structure for a fashion & clothing brand.",
    "prompt": "Outline a sales page for [OFFER] from a fashion & clothing brand, audience style-conscious shoppers, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "fashion"
    ]
  },
  {
    "id": "bp-de-salespage-jewellery",
    "cat": "coaching",
    "title": "Sales Page Outline — Jewellery Brands",
    "desc": "A high-converting page structure for a jewellery business.",
    "prompt": "Outline a sales page for [OFFER] from a jewellery business, audience people shopping for jewellery, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "jewellery"
    ]
  },
  {
    "id": "bp-de-salespage-handmade",
    "cat": "coaching",
    "title": "Sales Page Outline — Handmade & Craft Sellers",
    "desc": "A high-converting page structure for a handmade craft business.",
    "prompt": "Outline a sales page for [OFFER] from a handmade craft business, audience people who love handmade gifts, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "handmade"
    ]
  },
  {
    "id": "bp-de-salespage-skincare",
    "cat": "coaching",
    "title": "Sales Page Outline — Skincare Brands",
    "desc": "A high-converting page structure for a skincare brand.",
    "prompt": "Outline a sales page for [OFFER] from a skincare brand, audience people who want better skin, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "skincare"
    ]
  },
  {
    "id": "bp-de-salespage-makeup",
    "cat": "coaching",
    "title": "Sales Page Outline — Makeup Artists",
    "desc": "A high-converting page structure for a makeup artistry business.",
    "prompt": "Outline a sales page for [OFFER] from a makeup artistry business, audience brides & beauty lovers, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "makeup"
    ]
  },
  {
    "id": "bp-de-salespage-salon",
    "cat": "coaching",
    "title": "Sales Page Outline — Salons & Spas",
    "desc": "A high-converting page structure for a salon or spa.",
    "prompt": "Outline a sales page for [OFFER] from a salon or spa, audience people booking beauty services, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "salon"
    ]
  },
  {
    "id": "bp-de-salespage-travel",
    "cat": "coaching",
    "title": "Sales Page Outline — Travel Creators",
    "desc": "A high-converting page structure for travel content.",
    "prompt": "Outline a sales page for [OFFER] from travel content, audience people planning trips, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "travel"
    ]
  },
  {
    "id": "bp-de-salespage-photography",
    "cat": "coaching",
    "title": "Sales Page Outline — Photographers",
    "desc": "A high-converting page structure for a photography business.",
    "prompt": "Outline a sales page for [OFFER] from a photography business, audience couples & brands needing shoots, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "photography"
    ]
  },
  {
    "id": "bp-de-salespage-realestate",
    "cat": "coaching",
    "title": "Sales Page Outline — Real Estate Agents",
    "desc": "A high-converting page structure for real estate.",
    "prompt": "Outline a sales page for [OFFER] from real estate, audience home buyers & sellers, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "realestate"
    ]
  },
  {
    "id": "bp-de-salespage-interior",
    "cat": "coaching",
    "title": "Sales Page Outline — Interior Designers",
    "desc": "A high-converting page structure for interior design.",
    "prompt": "Outline a sales page for [OFFER] from interior design, audience homeowners renovating, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "interior"
    ]
  },
  {
    "id": "bp-de-salespage-finance",
    "cat": "coaching",
    "title": "Sales Page Outline — Personal Finance Creators",
    "desc": "A high-converting page structure for personal finance content.",
    "prompt": "Outline a sales page for [OFFER] from personal finance content, audience people wanting to manage money, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "finance"
    ]
  },
  {
    "id": "bp-de-salespage-trading",
    "cat": "coaching",
    "title": "Sales Page Outline — Stock Market Educators",
    "desc": "A high-converting page structure for stock market education.",
    "prompt": "Outline a sales page for [OFFER] from stock market education, audience new investors & traders, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "trading"
    ]
  },
  {
    "id": "bp-de-salespage-edtech",
    "cat": "coaching",
    "title": "Sales Page Outline — Online Tutors",
    "desc": "A high-converting page structure for online tutoring.",
    "prompt": "Outline a sales page for [OFFER] from online tutoring, audience students & parents, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "edtech"
    ]
  },
  {
    "id": "bp-de-salespage-examprep",
    "cat": "coaching",
    "title": "Sales Page Outline — Exam Prep Creators",
    "desc": "A high-converting page structure for exam prep content.",
    "prompt": "Outline a sales page for [OFFER] from exam prep content, audience students cracking competitive exams, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "examprep"
    ]
  },
  {
    "id": "bp-de-salespage-coding",
    "cat": "coaching",
    "title": "Sales Page Outline — Coding Educators",
    "desc": "A high-converting page structure for coding & tech education.",
    "prompt": "Outline a sales page for [OFFER] from coding & tech education, audience aspiring developers, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "coding"
    ]
  },
  {
    "id": "bp-de-salespage-gadgets",
    "cat": "coaching",
    "title": "Sales Page Outline — Tech Reviewers",
    "desc": "A high-converting page structure for tech & gadget reviews.",
    "prompt": "Outline a sales page for [OFFER] from tech & gadget reviews, audience people deciding what to buy, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "gadgets"
    ]
  },
  {
    "id": "bp-de-salespage-gaming",
    "cat": "coaching",
    "title": "Sales Page Outline — Gaming Creators",
    "desc": "A high-converting page structure for gaming content.",
    "prompt": "Outline a sales page for [OFFER] from gaming content, audience gamers & fans, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "gaming"
    ]
  },
  {
    "id": "bp-de-salespage-saas",
    "cat": "coaching",
    "title": "Sales Page Outline — SaaS Founders",
    "desc": "A high-converting page structure for a SaaS product.",
    "prompt": "Outline a sales page for [OFFER] from a SaaS product, audience businesses that need the tool, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "saas"
    ]
  },
  {
    "id": "bp-de-salespage-freelance",
    "cat": "coaching",
    "title": "Sales Page Outline — Freelancers",
    "desc": "A high-converting page structure for freelancing services.",
    "prompt": "Outline a sales page for [OFFER] from freelancing services, audience clients who need the service, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "freelance"
    ]
  },
  {
    "id": "bp-de-salespage-agency",
    "cat": "coaching",
    "title": "Sales Page Outline — Marketing Agencies",
    "desc": "A high-converting page structure for a marketing agency.",
    "prompt": "Outline a sales page for [OFFER] from a marketing agency, audience business owners who want growth, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "agency"
    ]
  },
  {
    "id": "bp-de-salespage-parenting",
    "cat": "coaching",
    "title": "Sales Page Outline — Parenting Creators",
    "desc": "A high-converting page structure for parenting content.",
    "prompt": "Outline a sales page for [OFFER] from parenting content, audience new & busy parents, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "parenting"
    ]
  },
  {
    "id": "bp-de-salespage-pets",
    "cat": "coaching",
    "title": "Sales Page Outline — Pet Care Creators",
    "desc": "A high-converting page structure for pet care content.",
    "prompt": "Outline a sales page for [OFFER] from pet care content, audience pet parents, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "pets"
    ]
  },
  {
    "id": "bp-de-salespage-gardening",
    "cat": "coaching",
    "title": "Sales Page Outline — Gardening Creators",
    "desc": "A high-converting page structure for gardening & plants content.",
    "prompt": "Outline a sales page for [OFFER] from gardening & plants content, audience plant lovers, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "gardening"
    ]
  },
  {
    "id": "bp-de-salespage-astrology",
    "cat": "coaching",
    "title": "Sales Page Outline — Astrology Creators",
    "desc": "A high-converting page structure for astrology & spirituality content.",
    "prompt": "Outline a sales page for [OFFER] from astrology & spirituality content, audience people seeking guidance, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "astrology"
    ]
  },
  {
    "id": "bp-de-salespage-motivation",
    "cat": "coaching",
    "title": "Sales Page Outline — Motivational Creators",
    "desc": "A high-converting page structure for motivation & self-help content.",
    "prompt": "Outline a sales page for [OFFER] from motivation & self-help content, audience people who want to level up, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "motivation"
    ]
  },
  {
    "id": "bp-de-salespage-food",
    "cat": "coaching",
    "title": "Sales Page Outline — Food Bloggers",
    "desc": "A high-converting page structure for food & recipe content.",
    "prompt": "Outline a sales page for [OFFER] from food & recipe content, audience home cooks & foodies, price [PRICE].\nSections: hook headline, the problem, the solution, benefits, social proof, what's included, pricing, guarantee, FAQ, final CTA. Draft 1-2 lines each.",
    "tags": [
      "sales page",
      "copy",
      "food"
    ]
  },
  {
    "id": "pd-episode-outline",
    "cat": "podcast",
    "title": "Podcast Episode Outline",
    "desc": "A structured solo or topic episode that flows and keeps listeners.",
    "prompt": "Outline a podcast episode on [TOPIC] for [AUDIENCE]. Length: [LENGTH].\nGive: a hook intro, the main talking points (with sub-points + examples), a story or two to include, a key takeaway, and a CTA (subscribe/review/next episode). Conversational structure I can riff from.",
    "tags": [
      "outline",
      "episode"
    ]
  },
  {
    "id": "pd-guest-questions",
    "cat": "podcast",
    "title": "Guest Interview Questions",
    "desc": "Thoughtful questions that get great answers, not yes/no.",
    "prompt": "My podcast guest is [GUEST WHAT THEY DO]. My audience: [AUDIENCE]. Episode angle: [ANGLE].\nGive 12 great interview questions: a warm opener, 8 deep/story-driven ones (avoid yes/no), 2 my audience would specifically want answered, and a strong closing question. Group them by flow.",
    "tags": [
      "interview",
      "guest"
    ]
  },
  {
    "id": "pd-titles",
    "cat": "podcast",
    "title": "Podcast Episode Titles",
    "desc": "Clickable titles that work on Spotify/Apple and YouTube.",
    "prompt": "Give 12 episode title options for an episode about [TOPIC] (guest: [GUEST IF ANY]).\nMix curiosity, benefit, and searchable keywords. Keep them clear and clickable across Spotify/Apple/YouTube. Mark the 3 strongest and a one-line why.",
    "tags": [
      "titles",
      "discovery"
    ]
  },
  {
    "id": "pd-show-notes",
    "cat": "podcast",
    "title": "Show Notes + Timestamps",
    "desc": "SEO-friendly show notes from your episode summary.",
    "prompt": "Here's my episode summary/transcript:\n\"\"\"\n[PASTE SUMMARY OR TRANSCRIPT]\n\"\"\"\nWrite show notes: a compelling 2-3 sentence description, 5 key takeaways/bullets, timestamp chapters, guest/links section [LINKS], and a subscribe CTA. Keyword-aware for [KEYWORD].",
    "tags": [
      "show notes",
      "seo"
    ]
  },
  {
    "id": "pd-clips",
    "cat": "podcast",
    "title": "Find Clip-Worthy Moments for Reels",
    "desc": "Turn an episode into short clips for social.",
    "prompt": "From this episode transcript/summary:\n\"\"\"\n[PASTE TRANSCRIPT OR SUMMARY]\n\"\"\"\nIdentify 5 clip-worthy moments for Reels/Shorts. For each: the quote/moment, why it'll hook, a caption, and an on-screen title. Each should stand alone without the full episode.",
    "tags": [
      "clips",
      "repurpose"
    ]
  },
  {
    "id": "pd-intro-outro",
    "cat": "podcast",
    "title": "Podcast Intro & Outro Script",
    "desc": "A consistent intro/outro that sets the tone and drives action.",
    "prompt": "Write a reusable podcast intro and outro.\nShow name: [SHOW]. What it's about: [TOPIC]. Host: [NAME]. Audience: [AUDIENCE].\nIntro: a hook + what the show delivers + a warm welcome (under 30s). Outro: a thank-you + a clear CTA (subscribe/review/share) + a tease to keep listening. On-brand and not cringe.",
    "tags": [
      "intro",
      "branding"
    ]
  },
  {
    "id": "pd-trailer",
    "cat": "podcast",
    "title": "Podcast Trailer (Launch)",
    "desc": "A 60-90s trailer to launch or relaunch a show.",
    "prompt": "Write a 60-90 second podcast trailer for [SHOW], about [TOPIC], for [AUDIENCE].\nHook fast, say who it's for and what they'll get, tease the vibe/guests, and end with \"follow so you don't miss episode 1\". Energetic, clear, makes people hit subscribe.",
    "tags": [
      "trailer",
      "launch"
    ]
  },
  {
    "id": "pd-solo-topics",
    "cat": "podcast",
    "title": "20 Solo Episode Ideas",
    "desc": "A backlog of solo episode topics so you never miss a week.",
    "prompt": "Give 20 solo podcast episode ideas for [SHOW] in the [NICHE] niche, audience [AUDIENCE].\nMix: how-to, story/lesson, hot take, Q&A, \"biggest mistakes\", behind-the-scenes, and trends. For each: a title + a one-line angle. Numbered.",
    "tags": [
      "ideas",
      "planning"
    ]
  },
  {
    "id": "pd-guest-pitch",
    "cat": "podcast",
    "title": "Pitch a Guest to Come On",
    "desc": "An invite that gets busy people to say yes.",
    "prompt": "Write an invite to [POTENTIAL GUEST] to come on my podcast [SHOW] (audience: [AUDIENCE SIZE]).\nMake it specific (why them), show what's in it for them (reach/topic they care about), keep it short, make scheduling easy, and end with a clear next step. Warm and professional.",
    "tags": [
      "outreach",
      "guest"
    ]
  },
  {
    "id": "pd-be-a-guest",
    "cat": "podcast",
    "title": "Pitch Myself as a Podcast Guest",
    "desc": "Get booked on other podcasts to grow your audience.",
    "prompt": "I want to be a guest on [PODCAST] in the [NICHE] niche. About me: [ABOUT YOU]. What I can talk about: [TOPICS EXPERTISE].\nWrite a pitch that shows I'm a great fit for their audience, suggests 2-3 specific episode angles, and makes it easy to say yes. Add a short \"guest bio\" they can use.",
    "tags": [
      "outreach",
      "visibility"
    ]
  },
  {
    "id": "pd-audiogram",
    "cat": "podcast",
    "title": "Audiogram / Quote Card Copy",
    "desc": "Pull punchy quotes for shareable audio snippets.",
    "prompt": "From this episode content:\n\"\"\"\n[PASTE QUOTE SECTION]\n\"\"\"\nPull 5 short, punchy quotes (under 20 words) that work as audiograms or quote cards to promote the episode. For each: a caption + a hook to pair with it. Make people want to listen.",
    "tags": [
      "promo",
      "social"
    ]
  },
  {
    "id": "pd-promo-plan",
    "cat": "podcast",
    "title": "Episode Promotion Plan",
    "desc": "A multi-platform plan to promote each new episode.",
    "prompt": "Give me a promo plan for a new episode \"[EPISODE TITLE]\" of [SHOW]. Audience: [AUDIENCE].\nFor each platform (Instagram, X, LinkedIn, YouTube, newsletter): exactly what to post (clip, quote, carousel, etc.) and the hook. A simple repeatable checklist I can reuse every episode.",
    "tags": [
      "promo",
      "planning"
    ]
  },
  {
    "id": "dz-image-prompt",
    "cat": "design",
    "title": "AI Image Generation Prompt",
    "desc": "A detailed prompt for Midjourney/DALL·E/Firefly that gets a great image.",
    "prompt": "Write a detailed AI image prompt for: [WHAT YOU WANT].\nUse for: [USE]. Style: [STYLE]. Mood: [MOOD]. Colours: [COLOURS].\nInclude: subject, setting, lighting, composition, style/medium, and quality keywords. Give 3 variations + suggested aspect ratio. Avoid text-in-image unless asked.",
    "tags": [
      "ai image",
      "midjourney"
    ]
  },
  {
    "id": "dz-thumbnail-brief",
    "cat": "design",
    "title": "Thumbnail Design Brief",
    "desc": "A clear brief so your thumbnail actually gets clicks.",
    "prompt": "Create a thumbnail design brief for my video \"[TITLE]\" in the [NICHE] niche.\nGive: the focal subject, the 3-4 word text overlay, the emotion/expression, background idea, colour contrast tips, and what to avoid (clutter). Make it readable on a small phone screen. Audience: [AUDIENCE].",
    "tags": [
      "thumbnail",
      "brief"
    ]
  },
  {
    "id": "dz-brand-colors",
    "cat": "design",
    "title": "Brand Colour & Font Direction",
    "desc": "A cohesive colour palette + font pairing for your brand.",
    "prompt": "Suggest a brand visual direction for [BRAND WHAT YOU DO]. Vibe: [VIBE]. Audience: [AUDIENCE].\nGive: a colour palette (with hex codes + where to use each), 2 font pairings (heading + body), and the overall mood in a sentence. Plus what to avoid so it doesn't look generic.",
    "tags": [
      "branding",
      "palette"
    ]
  },
  {
    "id": "dz-logo-brief",
    "cat": "design",
    "title": "Logo Design Brief",
    "desc": "A brief to hand a designer (or an AI) for a logo.",
    "prompt": "Write a logo design brief for [BRAND], a [WHAT YOU DO] for [AUDIENCE]. Personality: [3 ADJECTIVES].\nInclude: the brand story in 2 lines, style direction (wordmark/icon/combination), colours/feelings to convey, things to avoid, and where it'll be used (app, packaging, etc.). Give 3 concept directions.",
    "tags": [
      "logo",
      "brief"
    ]
  },
  {
    "id": "dz-carousel-design",
    "cat": "design",
    "title": "Carousel Visual Layout Guide",
    "desc": "How to lay out a carousel so it looks pro and gets read.",
    "prompt": "I'm designing an Instagram carousel about [TOPIC]. Give me a visual layout guide:\ncover design (hook placement, contrast), how to lay out text-heavy slides for readability, colour/spacing tips, a consistent style across slides, and a strong \"save/follow\" final slide. Keep it doable in Canva.",
    "tags": [
      "carousel",
      "layout"
    ]
  },
  {
    "id": "dz-canva-brief",
    "cat": "design",
    "title": "Canva Template Brief",
    "desc": "A step-by-step brief to build a post/poster in Canva.",
    "prompt": "Give me a Canva build guide for a [WHAT] for my [NICHE] brand.\nInclude: size, layout structure, where to put the headline/CTA/logo, colour + font choices, an image/element suggestion, and 3 tips to make it look professional, not amateur. Beginner-friendly.",
    "tags": [
      "canva",
      "how-to"
    ]
  },
  {
    "id": "dz-product-photo",
    "cat": "design",
    "title": "Product Photo Shot List",
    "desc": "A shot list to photograph products that sell.",
    "prompt": "Give me a product photography shot list for [PRODUCT] (sold to [AUDIENCE]).\nInclude: hero shot, detail shots, scale/context, lifestyle/in-use, and a \"benefit\" shot. For each: the angle, background, and lighting tip. All doable with a phone + natural light. Add 3 props ideas.",
    "tags": [
      "product photo",
      "ecommerce"
    ]
  },
  {
    "id": "dz-poster-copy-layout",
    "cat": "design",
    "title": "Poster / Banner Concept",
    "desc": "Copy + layout direction for a poster or banner.",
    "prompt": "Design concept for a poster/banner promoting [WHAT]. Goal: [GOAL]. Audience: [AUDIENCE]. Offer: [OFFER].\nGive: the headline + subhead, the visual focal point, layout (where text vs image goes), colour mood, and the CTA placement. Readable from a distance, not cluttered.",
    "tags": [
      "poster",
      "concept"
    ]
  },
  {
    "id": "dz-moodboard",
    "cat": "design",
    "title": "Moodboard / Aesthetic Direction",
    "desc": "Define a consistent visual aesthetic for your feed.",
    "prompt": "Help me define a consistent visual aesthetic for my [NICHE] Instagram feed. Vibe I want: [VIBE].\nDescribe: the colour mood, photo style, recurring elements/filters, font feel, and 3 \"do\" + 3 \"don't\" rules so my feed looks cohesive. Audience: [AUDIENCE].",
    "tags": [
      "aesthetic",
      "feed"
    ]
  },
  {
    "id": "dz-infographic",
    "cat": "design",
    "title": "Infographic Content & Layout",
    "desc": "Turn data/steps into a clear, shareable infographic.",
    "prompt": "Create an infographic plan for [TOPIC DATA] for [AUDIENCE].\nGive: a title, the key points/stats to show (simplified), a logical visual flow (top to bottom), icon/visual suggestions per point, and colour/hierarchy tips so it's easy to scan and share.",
    "tags": [
      "infographic",
      "data"
    ]
  },
  {
    "id": "dz-presentation",
    "cat": "design",
    "title": "Slide Deck Outline + Design Tips",
    "desc": "A clean, persuasive deck structure with visual guidance.",
    "prompt": "Outline a slide deck on [TOPIC] for [AUDIENCE], goal [GOAL]. Length: [NUMBER] slides.\nFor each slide: the one idea/headline, what to show (visual/chart/bullet), and minimal text. Add 5 design tips to keep it clean and modern (not bullet-soup). End with a strong closing slide + CTA.",
    "tags": [
      "slides",
      "deck"
    ]
  },
  {
    "id": "dz-alt-text",
    "cat": "design",
    "title": "Alt Text & Accessible Captions",
    "desc": "Descriptive alt text that helps SEO and accessibility.",
    "prompt": "Write alt text for these images/posts: [DESCRIBE THE IMAGES].\nMake each alt text descriptive and natural (what's in the image + context), useful for screen readers and discovery, and include a relevant keyword [KEYWORD] only where it fits naturally. Keep each under 125 chars.",
    "tags": [
      "accessibility",
      "seo"
    ]
  },
  {
    "id": "pr-content-calendar",
    "cat": "plan",
    "title": "Monthly Content Calendar",
    "desc": "A full month of content mapped across platforms.",
    "prompt": "Build a 30-day content calendar for my [NICHE] brand, audience [AUDIENCE], goal [GOAL].\nPlatforms: [PLATFORMS]. For each day: the platform, format, topic/hook, and CTA. Balance value, story, engagement, and promo for [PRODUCT SERVICE]. Group by week with a weekly theme.",
    "tags": [
      "calendar",
      "planning"
    ]
  },
  {
    "id": "pr-batch-system",
    "cat": "plan",
    "title": "Batch-Create a Week in 3 Hours",
    "desc": "A system to produce a week of content in one session.",
    "prompt": "Help me batch a week of content in one 3-hour session for [PLATFORM] in the [NICHE] niche.\nGive a step-by-step batch workflow (ideate → script → film/design → caption → schedule), how long each step should take, and tips to avoid burnout. Audience: [AUDIENCE].",
    "tags": [
      "batching",
      "system"
    ]
  },
  {
    "id": "pr-repurpose-system",
    "cat": "plan",
    "title": "Content Repurposing System",
    "desc": "Turn one piece of content into a week across platforms.",
    "prompt": "Design a repurposing system: one [PILLAR CONTENT] → a full week of content.\nMap exactly what to create for each platform from it (Reels, carousels, tweets, newsletter, Story), in what order, and a simple repeatable checklist. Niche: [NICHE].",
    "tags": [
      "repurpose",
      "system"
    ]
  },
  {
    "id": "pr-weekly-plan",
    "cat": "plan",
    "title": "Plan My Creator Week",
    "desc": "A realistic weekly schedule that fits content around life.",
    "prompt": "Help me plan my week as a creator. Time I have: [HOURS WEEK]. Goals: [GOALS]. Other commitments: [JOB STUDY ETC].\nGive a realistic weekly schedule (which days for ideation, creation, engagement, admin), with time blocks, so I post consistently without burning out.",
    "tags": [
      "schedule",
      "time"
    ]
  },
  {
    "id": "pr-goals-okrs",
    "cat": "plan",
    "title": "Set Quarterly Goals (That You'll Hit)",
    "desc": "Turn a big vision into measurable 90-day goals.",
    "prompt": "Help me set goals for the next 90 days. Big vision: [VISION]. Where I am now: [CURRENT STATE]. Focus: [FOCUS AREA].\nGive 3 measurable goals, the key actions/metrics for each, a monthly milestone breakdown, and the ONE thing to prioritise. Realistic and specific.",
    "tags": [
      "goals",
      "strategy"
    ]
  },
  {
    "id": "pr-idea-system",
    "cat": "plan",
    "title": "Never Run Out of Ideas (System)",
    "desc": "A repeatable system to generate ideas on demand.",
    "prompt": "Set up an idea-generation system for my [NICHE] content, audience [AUDIENCE].\nGive: 5 reliable sources to mine ideas (comments, search, competitors, my DMs, trends), a simple weekly routine to capture them, and 10 starter ideas to fill my backlog right now.",
    "tags": [
      "ideas",
      "system"
    ]
  },
  {
    "id": "pr-sop",
    "cat": "plan",
    "title": "Create an SOP / Checklist",
    "desc": "Turn a repeated task into a step-by-step checklist.",
    "prompt": "Write a step-by-step SOP/checklist for this repeated task: [TASK].\nBreak it into clear numbered steps, note tools/links needed, flag where mistakes happen, and add a quick quality check at the end. So I (or a helper) can do it the same way every time.",
    "tags": [
      "sop",
      "systems"
    ]
  },
  {
    "id": "pr-delegate",
    "cat": "plan",
    "title": "What to Delegate (and the Brief)",
    "desc": "Free your time by handing off the right tasks.",
    "prompt": "Here's everything I do for my [NICHE] brand/business: [LIST YOUR TASKS].\nTell me which tasks to delegate first (low-skill/high-time), which to keep, and write a clear brief for the top 1-2 tasks to hand to a freelancer/VA so they can do it well without me hovering.",
    "tags": [
      "delegation",
      "team"
    ]
  },
  {
    "id": "pr-weekly-review",
    "cat": "plan",
    "title": "Weekly Review & Reset",
    "desc": "A 15-minute review to learn and plan the next week.",
    "prompt": "Give me a weekly review template for a creator/founder. Goal: [GOAL].\nInclude: questions to review wins/misses, what content performed and why, what to stop/start/continue, and a short plan for next week's top 3 priorities. Keep it to a 15-minute routine.",
    "tags": [
      "review",
      "reflection"
    ]
  },
  {
    "id": "pr-focus-deepwork",
    "cat": "plan",
    "title": "Beat Procrastination on Content",
    "desc": "Practical ways to actually start and ship.",
    "prompt": "I keep procrastinating on creating content for my [NICHE] brand. What usually stops me: [YOUR BLOCKER].\nGive me practical, specific tactics to start and ship anyway, a simple \"minimum viable post\" rule, and a 25-minute routine to create something today. No fluff.",
    "tags": [
      "focus",
      "mindset"
    ]
  },
  {
    "id": "pr-prompt-organize",
    "cat": "plan",
    "title": "Organise My Saved Prompts",
    "desc": "A system to store and reuse your best prompts.",
    "prompt": "Help me set up a simple system (in Notion/Sheets) to store and reuse my best AI prompts for content.\nSuggest the categories/columns, how to tag them, a naming convention, and a quick routine to add winners. So I can find the right prompt in seconds. My main content types: [CONTENT TYPES].",
    "tags": [
      "system",
      "prompts"
    ]
  },
  {
    "id": "pr-tool-stack",
    "cat": "plan",
    "title": "Recommend My Creator Tool Stack",
    "desc": "The right tools for your workflow and budget.",
    "prompt": "Recommend a creator tool stack for me. I make: [CONTENT TYPES]. Platforms: [PLATFORMS]. Budget: [BUDGET]. Skill level: [LEVEL].\nSuggest tools for: planning, design, video editing, scheduling, and analytics — favouring free/cheap options that work in India. For each: what it's for + why. Keep the stack minimal.",
    "tags": [
      "tools",
      "workflow"
    ]
  },
  {
    "id": "pr-burnout",
    "cat": "plan",
    "title": "Avoid Creator Burnout",
    "desc": "A sustainable pace plan so you don't quit.",
    "prompt": "I'm feeling close to burnout creating content for [NICHE]. My current pace: [WHAT YOU RE DOING]. What's draining me: [WHAT S HARD].\nGive me a sustainable plan: what to cut, how to batch/simplify, a realistic posting cadence that still grows me, and 3 mindset shifts. Be kind but practical.",
    "tags": [
      "burnout",
      "wellbeing"
    ]
  },
  {
    "id": "pr-analytics-routine",
    "cat": "plan",
    "title": "Simple Analytics Routine",
    "desc": "Track the few numbers that actually matter.",
    "prompt": "Set up a simple analytics routine for my [PLATFORM] in the [NICHE] niche, goal [GOAL].\nTell me the 3-5 metrics that actually matter for my goal (ignore vanity metrics), how often to check them, and a quick monthly template to spot what's working and decide what to do more of.",
    "tags": [
      "analytics",
      "metrics"
    ]
  },
  {
    "id": "bp-pl-calendar-fitness",
    "cat": "plan",
    "title": "7-Day Content Plan — Fitness Coaches",
    "desc": "A done-for-you posting week for fitness coaching.",
    "prompt": "Build a 7-day content plan for fitness coaching, audience people who want to get fit, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "fitness"
    ]
  },
  {
    "id": "bp-pl-calendar-yoga",
    "cat": "plan",
    "title": "7-Day Content Plan — Yoga Instructors",
    "desc": "A done-for-you posting week for yoga teaching.",
    "prompt": "Build a 7-day content plan for yoga teaching, audience people seeking calm & flexibility, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "yoga"
    ]
  },
  {
    "id": "bp-pl-calendar-nutrition",
    "cat": "plan",
    "title": "7-Day Content Plan — Nutritionists",
    "desc": "A done-for-you posting week for nutrition & diet coaching.",
    "prompt": "Build a 7-day content plan for nutrition & diet coaching, audience people who want to eat healthier, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "nutrition"
    ]
  },
  {
    "id": "bp-pl-calendar-homebakery",
    "cat": "plan",
    "title": "7-Day Content Plan — Home Bakers",
    "desc": "A done-for-you posting week for a home baking business.",
    "prompt": "Build a 7-day content plan for a home baking business, audience people who order cakes & desserts, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "homebakery"
    ]
  },
  {
    "id": "bp-pl-calendar-cloudkitchen",
    "cat": "plan",
    "title": "7-Day Content Plan — Cloud Kitchens",
    "desc": "A done-for-you posting week for a cloud kitchen.",
    "prompt": "Build a 7-day content plan for a cloud kitchen, audience hungry locals ordering online, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-pl-calendar-cafe",
    "cat": "plan",
    "title": "7-Day Content Plan — Cafés & Restaurants",
    "desc": "A done-for-you posting week for a café or restaurant.",
    "prompt": "Build a 7-day content plan for a café or restaurant, audience local foodies, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "cafe"
    ]
  },
  {
    "id": "bp-pl-calendar-fashion",
    "cat": "plan",
    "title": "7-Day Content Plan — Fashion Brands",
    "desc": "A done-for-you posting week for a fashion & clothing brand.",
    "prompt": "Build a 7-day content plan for a fashion & clothing brand, audience style-conscious shoppers, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "fashion"
    ]
  },
  {
    "id": "bp-pl-calendar-jewellery",
    "cat": "plan",
    "title": "7-Day Content Plan — Jewellery Brands",
    "desc": "A done-for-you posting week for a jewellery business.",
    "prompt": "Build a 7-day content plan for a jewellery business, audience people shopping for jewellery, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "jewellery"
    ]
  },
  {
    "id": "bp-pl-calendar-handmade",
    "cat": "plan",
    "title": "7-Day Content Plan — Handmade & Craft Sellers",
    "desc": "A done-for-you posting week for a handmade craft business.",
    "prompt": "Build a 7-day content plan for a handmade craft business, audience people who love handmade gifts, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "handmade"
    ]
  },
  {
    "id": "bp-pl-calendar-skincare",
    "cat": "plan",
    "title": "7-Day Content Plan — Skincare Brands",
    "desc": "A done-for-you posting week for a skincare brand.",
    "prompt": "Build a 7-day content plan for a skincare brand, audience people who want better skin, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "skincare"
    ]
  },
  {
    "id": "bp-pl-calendar-makeup",
    "cat": "plan",
    "title": "7-Day Content Plan — Makeup Artists",
    "desc": "A done-for-you posting week for a makeup artistry business.",
    "prompt": "Build a 7-day content plan for a makeup artistry business, audience brides & beauty lovers, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "makeup"
    ]
  },
  {
    "id": "bp-pl-calendar-salon",
    "cat": "plan",
    "title": "7-Day Content Plan — Salons & Spas",
    "desc": "A done-for-you posting week for a salon or spa.",
    "prompt": "Build a 7-day content plan for a salon or spa, audience people booking beauty services, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "salon"
    ]
  },
  {
    "id": "bp-pl-calendar-travel",
    "cat": "plan",
    "title": "7-Day Content Plan — Travel Creators",
    "desc": "A done-for-you posting week for travel content.",
    "prompt": "Build a 7-day content plan for travel content, audience people planning trips, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "travel"
    ]
  },
  {
    "id": "bp-pl-calendar-photography",
    "cat": "plan",
    "title": "7-Day Content Plan — Photographers",
    "desc": "A done-for-you posting week for a photography business.",
    "prompt": "Build a 7-day content plan for a photography business, audience couples & brands needing shoots, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "photography"
    ]
  },
  {
    "id": "bp-pl-calendar-realestate",
    "cat": "plan",
    "title": "7-Day Content Plan — Real Estate Agents",
    "desc": "A done-for-you posting week for real estate.",
    "prompt": "Build a 7-day content plan for real estate, audience home buyers & sellers, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "realestate"
    ]
  },
  {
    "id": "bp-pl-calendar-interior",
    "cat": "plan",
    "title": "7-Day Content Plan — Interior Designers",
    "desc": "A done-for-you posting week for interior design.",
    "prompt": "Build a 7-day content plan for interior design, audience homeowners renovating, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "interior"
    ]
  },
  {
    "id": "bp-pl-calendar-finance",
    "cat": "plan",
    "title": "7-Day Content Plan — Personal Finance Creators",
    "desc": "A done-for-you posting week for personal finance content.",
    "prompt": "Build a 7-day content plan for personal finance content, audience people wanting to manage money, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "finance"
    ]
  },
  {
    "id": "bp-pl-calendar-trading",
    "cat": "plan",
    "title": "7-Day Content Plan — Stock Market Educators",
    "desc": "A done-for-you posting week for stock market education.",
    "prompt": "Build a 7-day content plan for stock market education, audience new investors & traders, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "trading"
    ]
  },
  {
    "id": "bp-pl-calendar-edtech",
    "cat": "plan",
    "title": "7-Day Content Plan — Online Tutors",
    "desc": "A done-for-you posting week for online tutoring.",
    "prompt": "Build a 7-day content plan for online tutoring, audience students & parents, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "edtech"
    ]
  },
  {
    "id": "bp-pl-calendar-examprep",
    "cat": "plan",
    "title": "7-Day Content Plan — Exam Prep Creators",
    "desc": "A done-for-you posting week for exam prep content.",
    "prompt": "Build a 7-day content plan for exam prep content, audience students cracking competitive exams, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "examprep"
    ]
  },
  {
    "id": "bp-pl-calendar-coding",
    "cat": "plan",
    "title": "7-Day Content Plan — Coding Educators",
    "desc": "A done-for-you posting week for coding & tech education.",
    "prompt": "Build a 7-day content plan for coding & tech education, audience aspiring developers, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "coding"
    ]
  },
  {
    "id": "bp-pl-calendar-gadgets",
    "cat": "plan",
    "title": "7-Day Content Plan — Tech Reviewers",
    "desc": "A done-for-you posting week for tech & gadget reviews.",
    "prompt": "Build a 7-day content plan for tech & gadget reviews, audience people deciding what to buy, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "gadgets"
    ]
  },
  {
    "id": "bp-pl-calendar-gaming",
    "cat": "plan",
    "title": "7-Day Content Plan — Gaming Creators",
    "desc": "A done-for-you posting week for gaming content.",
    "prompt": "Build a 7-day content plan for gaming content, audience gamers & fans, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "gaming"
    ]
  },
  {
    "id": "bp-pl-calendar-saas",
    "cat": "plan",
    "title": "7-Day Content Plan — SaaS Founders",
    "desc": "A done-for-you posting week for a SaaS product.",
    "prompt": "Build a 7-day content plan for a SaaS product, audience businesses that need the tool, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "saas"
    ]
  },
  {
    "id": "bp-pl-calendar-freelance",
    "cat": "plan",
    "title": "7-Day Content Plan — Freelancers",
    "desc": "A done-for-you posting week for freelancing services.",
    "prompt": "Build a 7-day content plan for freelancing services, audience clients who need the service, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "freelance"
    ]
  },
  {
    "id": "bp-pl-calendar-agency",
    "cat": "plan",
    "title": "7-Day Content Plan — Marketing Agencies",
    "desc": "A done-for-you posting week for a marketing agency.",
    "prompt": "Build a 7-day content plan for a marketing agency, audience business owners who want growth, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "agency"
    ]
  },
  {
    "id": "bp-pl-calendar-parenting",
    "cat": "plan",
    "title": "7-Day Content Plan — Parenting Creators",
    "desc": "A done-for-you posting week for parenting content.",
    "prompt": "Build a 7-day content plan for parenting content, audience new & busy parents, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "parenting"
    ]
  },
  {
    "id": "bp-pl-calendar-pets",
    "cat": "plan",
    "title": "7-Day Content Plan — Pet Care Creators",
    "desc": "A done-for-you posting week for pet care content.",
    "prompt": "Build a 7-day content plan for pet care content, audience pet parents, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "pets"
    ]
  },
  {
    "id": "bp-pl-calendar-gardening",
    "cat": "plan",
    "title": "7-Day Content Plan — Gardening Creators",
    "desc": "A done-for-you posting week for gardening & plants content.",
    "prompt": "Build a 7-day content plan for gardening & plants content, audience plant lovers, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "gardening"
    ]
  },
  {
    "id": "bp-pl-calendar-astrology",
    "cat": "plan",
    "title": "7-Day Content Plan — Astrology Creators",
    "desc": "A done-for-you posting week for astrology & spirituality content.",
    "prompt": "Build a 7-day content plan for astrology & spirituality content, audience people seeking guidance, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "astrology"
    ]
  },
  {
    "id": "bp-pl-calendar-motivation",
    "cat": "plan",
    "title": "7-Day Content Plan — Motivational Creators",
    "desc": "A done-for-you posting week for motivation & self-help content.",
    "prompt": "Build a 7-day content plan for motivation & self-help content, audience people who want to level up, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "motivation"
    ]
  },
  {
    "id": "bp-pl-calendar-food",
    "cat": "plan",
    "title": "7-Day Content Plan — Food Bloggers",
    "desc": "A done-for-you posting week for food & recipe content.",
    "prompt": "Build a 7-day content plan for food & recipe content, audience home cooks & foodies, goal [GOAL].\nFor each day: format (Reel/carousel/story/post), the hook/title, a one-line brief, and the CTA. Balance value, relatability, and 1-2 promos for [PRODUCT].",
    "tags": [
      "calendar",
      "planning",
      "food"
    ]
  },
  {
    "id": "bp-pl-ideas-fitness",
    "cat": "plan",
    "title": "30 Content Ideas — Fitness Coaches",
    "desc": "A full backlog of ideas for fitness coaching.",
    "prompt": "Give 30 content ideas for fitness coaching, audience people who want to get fit.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "fitness"
    ]
  },
  {
    "id": "bp-pl-ideas-yoga",
    "cat": "plan",
    "title": "30 Content Ideas — Yoga Instructors",
    "desc": "A full backlog of ideas for yoga teaching.",
    "prompt": "Give 30 content ideas for yoga teaching, audience people seeking calm & flexibility.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "yoga"
    ]
  },
  {
    "id": "bp-pl-ideas-nutrition",
    "cat": "plan",
    "title": "30 Content Ideas — Nutritionists",
    "desc": "A full backlog of ideas for nutrition & diet coaching.",
    "prompt": "Give 30 content ideas for nutrition & diet coaching, audience people who want to eat healthier.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "nutrition"
    ]
  },
  {
    "id": "bp-pl-ideas-homebakery",
    "cat": "plan",
    "title": "30 Content Ideas — Home Bakers",
    "desc": "A full backlog of ideas for a home baking business.",
    "prompt": "Give 30 content ideas for a home baking business, audience people who order cakes & desserts.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "homebakery"
    ]
  },
  {
    "id": "bp-pl-ideas-cloudkitchen",
    "cat": "plan",
    "title": "30 Content Ideas — Cloud Kitchens",
    "desc": "A full backlog of ideas for a cloud kitchen.",
    "prompt": "Give 30 content ideas for a cloud kitchen, audience hungry locals ordering online.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "cloudkitchen"
    ]
  },
  {
    "id": "bp-pl-ideas-cafe",
    "cat": "plan",
    "title": "30 Content Ideas — Cafés & Restaurants",
    "desc": "A full backlog of ideas for a café or restaurant.",
    "prompt": "Give 30 content ideas for a café or restaurant, audience local foodies.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "cafe"
    ]
  },
  {
    "id": "bp-pl-ideas-fashion",
    "cat": "plan",
    "title": "30 Content Ideas — Fashion Brands",
    "desc": "A full backlog of ideas for a fashion & clothing brand.",
    "prompt": "Give 30 content ideas for a fashion & clothing brand, audience style-conscious shoppers.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "fashion"
    ]
  },
  {
    "id": "bp-pl-ideas-jewellery",
    "cat": "plan",
    "title": "30 Content Ideas — Jewellery Brands",
    "desc": "A full backlog of ideas for a jewellery business.",
    "prompt": "Give 30 content ideas for a jewellery business, audience people shopping for jewellery.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "jewellery"
    ]
  },
  {
    "id": "bp-pl-ideas-handmade",
    "cat": "plan",
    "title": "30 Content Ideas — Handmade & Craft Sellers",
    "desc": "A full backlog of ideas for a handmade craft business.",
    "prompt": "Give 30 content ideas for a handmade craft business, audience people who love handmade gifts.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "handmade"
    ]
  },
  {
    "id": "bp-pl-ideas-skincare",
    "cat": "plan",
    "title": "30 Content Ideas — Skincare Brands",
    "desc": "A full backlog of ideas for a skincare brand.",
    "prompt": "Give 30 content ideas for a skincare brand, audience people who want better skin.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "skincare"
    ]
  },
  {
    "id": "bp-pl-ideas-makeup",
    "cat": "plan",
    "title": "30 Content Ideas — Makeup Artists",
    "desc": "A full backlog of ideas for a makeup artistry business.",
    "prompt": "Give 30 content ideas for a makeup artistry business, audience brides & beauty lovers.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "makeup"
    ]
  },
  {
    "id": "bp-pl-ideas-salon",
    "cat": "plan",
    "title": "30 Content Ideas — Salons & Spas",
    "desc": "A full backlog of ideas for a salon or spa.",
    "prompt": "Give 30 content ideas for a salon or spa, audience people booking beauty services.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "salon"
    ]
  },
  {
    "id": "bp-pl-ideas-travel",
    "cat": "plan",
    "title": "30 Content Ideas — Travel Creators",
    "desc": "A full backlog of ideas for travel content.",
    "prompt": "Give 30 content ideas for travel content, audience people planning trips.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "travel"
    ]
  },
  {
    "id": "bp-pl-ideas-photography",
    "cat": "plan",
    "title": "30 Content Ideas — Photographers",
    "desc": "A full backlog of ideas for a photography business.",
    "prompt": "Give 30 content ideas for a photography business, audience couples & brands needing shoots.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "photography"
    ]
  },
  {
    "id": "bp-pl-ideas-realestate",
    "cat": "plan",
    "title": "30 Content Ideas — Real Estate Agents",
    "desc": "A full backlog of ideas for real estate.",
    "prompt": "Give 30 content ideas for real estate, audience home buyers & sellers.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "realestate"
    ]
  },
  {
    "id": "bp-pl-ideas-interior",
    "cat": "plan",
    "title": "30 Content Ideas — Interior Designers",
    "desc": "A full backlog of ideas for interior design.",
    "prompt": "Give 30 content ideas for interior design, audience homeowners renovating.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "interior"
    ]
  },
  {
    "id": "bp-pl-ideas-finance",
    "cat": "plan",
    "title": "30 Content Ideas — Personal Finance Creators",
    "desc": "A full backlog of ideas for personal finance content.",
    "prompt": "Give 30 content ideas for personal finance content, audience people wanting to manage money.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "finance"
    ]
  },
  {
    "id": "bp-pl-ideas-trading",
    "cat": "plan",
    "title": "30 Content Ideas — Stock Market Educators",
    "desc": "A full backlog of ideas for stock market education.",
    "prompt": "Give 30 content ideas for stock market education, audience new investors & traders.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "trading"
    ]
  },
  {
    "id": "bp-pl-ideas-edtech",
    "cat": "plan",
    "title": "30 Content Ideas — Online Tutors",
    "desc": "A full backlog of ideas for online tutoring.",
    "prompt": "Give 30 content ideas for online tutoring, audience students & parents.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "edtech"
    ]
  },
  {
    "id": "bp-pl-ideas-examprep",
    "cat": "plan",
    "title": "30 Content Ideas — Exam Prep Creators",
    "desc": "A full backlog of ideas for exam prep content.",
    "prompt": "Give 30 content ideas for exam prep content, audience students cracking competitive exams.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "examprep"
    ]
  },
  {
    "id": "bp-pl-ideas-coding",
    "cat": "plan",
    "title": "30 Content Ideas — Coding Educators",
    "desc": "A full backlog of ideas for coding & tech education.",
    "prompt": "Give 30 content ideas for coding & tech education, audience aspiring developers.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "coding"
    ]
  },
  {
    "id": "bp-pl-ideas-gadgets",
    "cat": "plan",
    "title": "30 Content Ideas — Tech Reviewers",
    "desc": "A full backlog of ideas for tech & gadget reviews.",
    "prompt": "Give 30 content ideas for tech & gadget reviews, audience people deciding what to buy.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "gadgets"
    ]
  },
  {
    "id": "bp-pl-ideas-gaming",
    "cat": "plan",
    "title": "30 Content Ideas — Gaming Creators",
    "desc": "A full backlog of ideas for gaming content.",
    "prompt": "Give 30 content ideas for gaming content, audience gamers & fans.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "gaming"
    ]
  },
  {
    "id": "bp-pl-ideas-saas",
    "cat": "plan",
    "title": "30 Content Ideas — SaaS Founders",
    "desc": "A full backlog of ideas for a SaaS product.",
    "prompt": "Give 30 content ideas for a SaaS product, audience businesses that need the tool.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "saas"
    ]
  },
  {
    "id": "bp-pl-ideas-freelance",
    "cat": "plan",
    "title": "30 Content Ideas — Freelancers",
    "desc": "A full backlog of ideas for freelancing services.",
    "prompt": "Give 30 content ideas for freelancing services, audience clients who need the service.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "freelance"
    ]
  },
  {
    "id": "bp-pl-ideas-agency",
    "cat": "plan",
    "title": "30 Content Ideas — Marketing Agencies",
    "desc": "A full backlog of ideas for a marketing agency.",
    "prompt": "Give 30 content ideas for a marketing agency, audience business owners who want growth.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "agency"
    ]
  },
  {
    "id": "bp-pl-ideas-parenting",
    "cat": "plan",
    "title": "30 Content Ideas — Parenting Creators",
    "desc": "A full backlog of ideas for parenting content.",
    "prompt": "Give 30 content ideas for parenting content, audience new & busy parents.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "parenting"
    ]
  },
  {
    "id": "bp-pl-ideas-pets",
    "cat": "plan",
    "title": "30 Content Ideas — Pet Care Creators",
    "desc": "A full backlog of ideas for pet care content.",
    "prompt": "Give 30 content ideas for pet care content, audience pet parents.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "pets"
    ]
  },
  {
    "id": "bp-pl-ideas-gardening",
    "cat": "plan",
    "title": "30 Content Ideas — Gardening Creators",
    "desc": "A full backlog of ideas for gardening & plants content.",
    "prompt": "Give 30 content ideas for gardening & plants content, audience plant lovers.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "gardening"
    ]
  },
  {
    "id": "bp-pl-ideas-astrology",
    "cat": "plan",
    "title": "30 Content Ideas — Astrology Creators",
    "desc": "A full backlog of ideas for astrology & spirituality content.",
    "prompt": "Give 30 content ideas for astrology & spirituality content, audience people seeking guidance.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "astrology"
    ]
  },
  {
    "id": "bp-pl-ideas-motivation",
    "cat": "plan",
    "title": "30 Content Ideas — Motivational Creators",
    "desc": "A full backlog of ideas for motivation & self-help content.",
    "prompt": "Give 30 content ideas for motivation & self-help content, audience people who want to level up.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "motivation"
    ]
  },
  {
    "id": "bp-pl-ideas-food",
    "cat": "plan",
    "title": "30 Content Ideas — Food Bloggers",
    "desc": "A full backlog of ideas for food & recipe content.",
    "prompt": "Give 30 content ideas for food & recipe content, audience home cooks & foodies.\nSpread across educational, story, behind-the-scenes, myth-busting, trends, and promo for [PRODUCT]. For each: a title + a one-line hook. Numbered.",
    "tags": [
      "ideas",
      "strategy",
      "food"
    ]
  }
];

  const TOOLS = [
  {
    "name": "Canva",
    "emoji": "🎨",
    "badge": "Design",
    "blurb": "Design posts, Reel covers & carousels — free.",
    "url": "https://www.canva.com"
  },
  {
    "name": "ChatGPT",
    "emoji": "🤖",
    "badge": "AI",
    "blurb": "Where you paste your finished prompt.",
    "url": "https://chat.openai.com"
  },
  {
    "name": "CapCut",
    "emoji": "✂️",
    "badge": "Editing",
    "blurb": "Edit Reels & Shorts right on your phone.",
    "url": "https://www.capcut.com"
  },
  {
    "name": "Razorpay",
    "emoji": "💳",
    "badge": "Payments",
    "blurb": "Accept payments & sell across India.",
    "url": "https://razorpay.com"
  },
  {
    "name": "Hostinger",
    "emoji": "🌐",
    "badge": "Hosting",
    "blurb": "Fast, low-cost hosting for your site.",
    "url": "https://www.hostinger.in"
  },
  {
    "name": "Notion",
    "emoji": "📝",
    "badge": "Planning",
    "blurb": "Plan content & track every idea.",
    "url": "https://www.notion.so"
  }
];

  const STEPS = [
  {
    "emoji": "🔍",
    "title": "Find a prompt",
    "text": "Search or browse 1,000+ prompts by category."
  },
  {
    "emoji": "✏️",
    "title": "Fill the blanks",
    "text": "Add your product, niche & audience."
  },
  {
    "emoji": "📋",
    "title": "Copy & paste",
    "text": "One tap. Paste into ChatGPT, Claude or Gemini."
  },
  {
    "emoji": "🚀",
    "title": "Post & grow",
    "text": "Ship content that actually works."
  }
];

  window.PA = { CATEGORIES, PROMPTS, HINTS, TOOLS, STEPS };
})();
