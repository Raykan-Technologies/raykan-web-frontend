import type { TPostBlock } from './types'

// date-only ISO strings parse as UTC midnight, so format in UTC to keep the same day everywhere
export const formatPostDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(iso))

// about 200 words a minute, at least 1
export const readingMinutes = (blocks: ReadonlyArray<TPostBlock>) => {
  const words = blocks
    .flatMap((block) => 'items' in block ? block.items : [block.text])
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
