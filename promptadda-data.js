/* PromptAdda — data layer (AUTO-GENERATED — do not edit by hand).
   Source: src/data/prompts/*.js   ·   Regenerate: npm run data
   303 prompts across 16 categories. */
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
    "text": "Search or browse 300+ prompts by category."
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
