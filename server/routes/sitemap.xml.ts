import { SOLUTIONS } from '../../src/constants'

// indexable pages, by hand: routes come from src/router, which the server can't discover.
// Left out: privacy (hidden), blog and careers (placeholders until they get content)
const PATHS = [
  '/',
  '/about',
  '/solutions',
  ...SOLUTIONS.map((solution) => `/${solution}`),
  '/faq',
  '/contact-us',
  '/kando',
]

export default defineEventHandler((event) => {
  const site = getSiteConfig(event).url.replace(/\/$/, '')
  const urls = PATHS.map((path) => `  <url><loc>${site}${path === '/' ? '/' : path}</loc></url>`).join('\n')

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
