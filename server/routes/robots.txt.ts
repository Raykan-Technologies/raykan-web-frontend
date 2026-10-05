// production: crawl everything but the API, point to the sitemap; anything else (previews, dev): stay out
export default defineEventHandler((event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  if (!getSiteIndexable(event)) return 'User-agent: *\nDisallow: /\n'

  const site = getSiteConfig(event).url.replace(/\/$/, '')
  return `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${site}/sitemap.xml\n`
})
