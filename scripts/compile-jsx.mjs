/* Compile the 4 JSX files to plain JS using esbuild transform API.
 * Run: node scripts/compile-jsx.mjs  (called by npm run build)
 */
import { transform } from 'esbuild'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const files = [
  'promptundo-icons',
  'promptundo-demo',
  'promptundo-modal',
  'promptundo-app',
]

for (const name of files) {
  const src = await readFile(join(ROOT, name + '.jsx'), 'utf8')
  const { code } = await transform(src, {
    loader: 'jsx',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  })
  await writeFile(join(ROOT, name + '.build.js'), code, 'utf8')
  console.log(`✓ ${name}.jsx → ${name}.build.js`)
}
