import { SOLUTIONS } from '../../src/constants'
import { BLOG_PAGE_COUNT, BLOG_POSTS } from '../../src/views/blog/posts'

// a post's last change, and the newest one for the blog list pages
const postDate = (post: typeof BLOG_POSTS[number]) => post.updated ?? post.published
const newestPostDate = BLOG_POSTS.map(postDate).sort().at(-1)

// indexable pages, by hand: routes come from src/router, which the server can't discover.
// `lastmod` only where a real change date is known (blog); a guessed one makes crawlers ignore it
const PAGES: ReadonlyArray<{ path: string; lastmod?: string }> = [
  { path: '/' },
  { path: '/about' },
  { path: '/solutions' },
  { path: '/blog', lastmod: newestPostDate },
  ...Array.from({ length: BLOG_PAGE_COUNT - 1 }, (_, index) => ({ path: `/blog/page/${index + 2}`, lastmod: newestPostDate })),
  ...SOLUTIONS.map((solution) => ({ path: `/${solution}` })),
  { path: '/faq' },
  { path: '/contact-us' },
  { path: '/kando' },
  { path: '/privacy-policy' },
  { path: '/kando-privacy-policy' },
  ...BLOG_POSTS.map((post) => ({ path: `/blog/${post.slug}`, lastmod: postDate(post) })),
]

export default defineEventHandler((event) => {
  const site = getSiteConfig(event).url.replace(/\/$/, '')
  const urls = PAGES.map(({ path, lastmod }) => {
    const loc = `<loc>${site}${path}</loc>`
    return `  <url>${loc}${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
  }).join('\n')

  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
