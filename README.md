# PromptAdda 🪄

**Free, copy-paste AI prompts for Indian creators.** 12,000+ fill-in-the-blank prompts
for captions, Reels, YouTube, selling, ads, brand deals & more — across 200+ creator &
business niches. Pick one, fill the blanks, copy, paste into ChatGPT / Claude / Gemini.

Clean minimalist UI · No login · Free forever.

---

## Run it locally

```bash
npm run data   # generate promptadda-data.js from the prompt source (once / after edits)
npm run dev    # serve at http://localhost:5173
```

No build step, no bundler, no dependencies to install — it's a static site that loads
React + Babel from a CDN at runtime.

## How it's built

The **UI is a self-contained static design** (kept exactly as designed — don't edit the
look here). The **content** is generated from an editable prompt source.

```
index.html              ← the design (CSS + CDN React 18 + Babel standalone)
promptadda-icons.jsx    ← icon system + helpers   (design — UI, unchanged)
promptadda-demo.jsx     ← animated hero demo       (design — UI, unchanged)
promptadda-modal.jsx    ← the Customize modal      (design — UI, unchanged)
promptadda-app.jsx      ← nav, hero, grid, footer  (design — UI, unchanged)
promptadda-data.js      ← AUTO-GENERATED data layer (window.PA) — do NOT edit by hand

src/data/prompts/*.js   ← THE EDITABLE SOURCE (one file per category, 300+ prompts)
scripts/build-data.mjs  ← generates promptadda-data.js from the source
scripts/serve.mjs       ← tiny zero-dep static dev server
```

### Editing prompts (the part you'll actually touch)
1. Edit a file in `src/data/prompts/` (e.g. `instagram.js`). Each prompt:
   ```js
   {
     id: 'ig-something',
     category: 'instagram',          // mapped to the UI's category id automatically
     title: 'My Prompt',
     description: 'One line on what it does.',
     tags: ['caption', 'sales'],
     prompt: `Write a caption for [PRODUCT] aimed at [AUDIENCE]...`,
   }
   ```
   Use `[BRACKETS]` for blanks. You can write hints inline like `[PRICE, e.g. ₹499]` —
   the generator strips them into the fill-in field's placeholder automatically and
   normalizes the token to `[PRICE]` (the format the UI's parser expects).
2. Run `npm run data` to regenerate `promptadda-data.js`.
3. Refresh the browser.

> The generator also maps my category ids → the design's ids
> (`branding→personal`, `business→selling`, `money→deals`, `productivity→plan`) and
> my field names (`description→desc`, `category→cat`).

## Deploy (Vercel / Netlify / any static host)
It's pure static. Point the host at the repo root, no build needed (or set the build
command to `npm run build`, which just regenerates the data file). Output directory: `.`

## Roadmap / room for changes
- [ ] Newsletter capture (turn visitors into an email list)
- [ ] Favourites (localStorage)
- [ ] Real affiliate links in `scripts/build-data.mjs` (TOOLS)
- [ ] More niches / regional languages
- [ ] Submit-a-prompt form (community)

---
Made with ❤️ for creators. Prompts work with ChatGPT, Claude & Gemini.
