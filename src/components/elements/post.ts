import type { IPostLink, TPostBlock } from './types'

// date-only ISO strings parse as UTC midnight, so format in UTC to keep the same day everywhere
export const formatPostDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(iso))

// a block's text cut into plain parts and links, at its {0}, {1}, … markers
export const postSegments = (text: string, links: ReadonlyArray<IPostLink> = []): Array<string | IPostLink> =>
  text.split(/\{(\d+)\}/).map((part, index) => index % 2 ? links[Number(part)] ?? '' : part).filter((part) => part !== '')

// about 200 words a minute, at least 1
export const readingMinutes = (blocks: ReadonlyArray<TPostBlock>) => {
  const words = blocks
    .flatMap((block) => {
      if (block.type === 'img') return []
      if ('items' in block) return block.items
      return postSegments(block.text, block.links).map((part) => typeof part === 'string' ? part : part.text)
    })
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
