// Category metadata: id, label, emoji
export const CATEGORIES = [
  { id: 'all', label: 'All Prompts', emoji: '✨' },
  { id: 'instagram', label: 'Instagram', emoji: '📸' },
  { id: 'youtube', label: 'YouTube', emoji: '▶️' },
  { id: 'reels', label: 'Reels & Shorts', emoji: '🎬' },
  { id: 'twitter', label: 'X / Twitter', emoji: '𝕏' },
  { id: 'linkedin', label: 'LinkedIn', emoji: '💼' },
  { id: 'branding', label: 'Personal Brand', emoji: '🪪' },
  { id: 'blog', label: 'Blog & SEO', emoji: '✍️' },
  { id: 'business', label: 'Selling & Business', emoji: '🛍️' },
  { id: 'ads', label: 'Ads & Copy', emoji: '📣' },
  { id: 'money', label: 'Brand Deals & Money', emoji: '💸' },
  { id: 'email', label: 'Email & WhatsApp', emoji: '💬' },
  { id: 'local', label: 'Local Business', emoji: '🏪' },
  { id: 'coaching', label: 'Coaching & Courses', emoji: '🎓' },
  { id: 'podcast', label: 'Podcast & Audio', emoji: '🎙️' },
  { id: 'design', label: 'Design & Visuals', emoji: '🎨' },
  { id: 'productivity', label: 'Plan & Productivity', emoji: '🗂️' },
]

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
)
