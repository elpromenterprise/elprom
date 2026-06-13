/* Tiny zero-dependency static file server for local dev.
 * Serves the project root (index.html + promptadda-*.{js,jsx}).
 * Run:  npm run dev   →   http://localhost:5173
 */
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(fileURLToPath(import.meta.url), '..', '..')
const PORT = process.env.PORT || 5173

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
}

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    if (urlPath === '/' || urlPath === '') urlPath = '/index.html'
    // prevent path traversal
    const filePath = normalize(join(ROOT, urlPath))
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return }
    const data = await readFile(filePath)
    res.writeHead(200, { 'Content-Type': TYPES[extname(filePath)] || 'application/octet-stream' })
    res.end(data)
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not found')
  }
})

server.listen(PORT, () => {
  console.log(`\n  PromptAdda → http://localhost:${PORT}/\n`)
})
