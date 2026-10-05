// the old site was WordPress (and was hacked); its URLs answer 410 Gone so search engines drop them
// and bots probing wp-login, xmlrpc and friends get a cheap, final answer
const LEGACY = /^\/(?:wp-(?:admin|content|includes|json)(?:\/|$)|[^?]*\.php(?:$|[/?]))/i

export default defineEventHandler((event) => {
  if (!LEGACY.test(event.path)) return
  setResponseStatus(event, 410, 'Gone')
  setResponseHeader(event, 'X-Robots-Tag', 'noindex')
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return 'Gone'
})
