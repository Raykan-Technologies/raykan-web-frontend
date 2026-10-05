import { useI18n } from 'vue-i18n'
import type { TPostBlock } from '@/components/elements'

/**
 * Reads a post's copy from i18n `blog.posts.<slug>`, shared by the post page and the post list
 */
export const usePostCopy = () => {
  const { t, te, tm, rt } = useI18n()
  type TMessage = Parameters<typeof rt>[0]

  const key = (slug: string, field: string) => `blog.posts.${slug}.${field}`
  const text = (slug: string, field: string) => t(key(slug, field))
  // the short search title when there is one
  const seoTitle = (slug: string) => text(slug, te(key(slug, 'seoTitle')) ? 'seoTitle' : 'title')

  // i18n blocks come back as message functions; resolve them to plain strings
  const blocks = (slug: string): Array<TPostBlock> => {
    const raw = tm(key(slug, 'body')) as Array<Record<string, unknown>>
    return (Array.isArray(raw) ? raw : []).map((block) => {
      const type = rt(block.type as TMessage) as TPostBlock['type']
      return type === 'ul' || type === 'ol'
        ? { type, items: (block.items as Array<TMessage>).map((item) => rt(item)) }
        : { type, text: rt(block.text as TMessage) }
    })
  }

  return { text, seoTitle, blocks }
}
