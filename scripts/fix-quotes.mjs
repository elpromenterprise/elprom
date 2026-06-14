import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const files = ['promptundo-app.jsx', 'promptundo-icons.jsx', 'promptundo-demo.jsx', 'promptundo-modal.jsx']

for (const f of files) {
  const p = join(ROOT, f)
  let txt = await readFile(p, 'utf8')
  const before = txt.length
  txt = txt
    .replace(/“/g, '"')
    .replace(/”/g, '"')
    .replace(/‘/g, "'")
    .replace(/’/g, "'")
  await writeFile(p, txt, 'utf8')
  console.log(`${f}: ${before} -> ${txt.length} chars`)
}
