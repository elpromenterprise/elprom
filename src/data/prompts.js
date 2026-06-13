// Aggregator — merges every per-category prompt file into one PROMPTS array.
// To add prompts: edit the relevant file in ./prompts/ (or add a new category file
// + import it here). Every prompt uses [SQUARE_BRACKET] placeholders, which the
// Customize panel turns into fill-in fields.
import instagram from './prompts/instagram'
import youtube from './prompts/youtube'
import reels from './prompts/reels'
import twitter from './prompts/twitter'
import linkedin from './prompts/linkedin'
import branding from './prompts/branding'
import blog from './prompts/blog'
import business from './prompts/business'
import ads from './prompts/ads'
import money from './prompts/money'
import email from './prompts/email'
import local from './prompts/local'
import coaching from './prompts/coaching'
import podcast from './prompts/podcast'
import design from './prompts/design'
import productivity from './prompts/productivity'

export const PROMPTS = [
  ...instagram,
  ...youtube,
  ...reels,
  ...twitter,
  ...linkedin,
  ...branding,
  ...blog,
  ...business,
  ...ads,
  ...money,
  ...email,
  ...local,
  ...coaching,
  ...podcast,
  ...design,
  ...productivity,
]

// Guard against duplicate ids in dev (helps when adding new prompts).
if (import.meta.env?.DEV) {
  const ids = PROMPTS.map((p) => p.id)
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
  if (dupes.length) console.warn('Duplicate prompt ids:', [...new Set(dupes)])
}

export const PROMPT_COUNT = PROMPTS.length
