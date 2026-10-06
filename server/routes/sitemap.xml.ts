import { SOLUTIONS } from '../../src/constants'
import { BLOG_PAGE_COUNT, BLOG_POSTS } from '../../src/views/blog/posts'

// indexable pages, by hand: routes come from src/router, which the server can't discover
const PATHS = [
  '/',
  '/about',
  '/solutions',
  '/blog',
  ...Array.from({ length: BLOG_PAGE_COUNT - 1 }, (_, index) => `/blog/page/${index + 2}`),
  ...SOLUTIONS.map((solution) => `/${solution}`),
  '/faq',
  '/contact-us',
  '/kando',
  '/privacy-policy',
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
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
