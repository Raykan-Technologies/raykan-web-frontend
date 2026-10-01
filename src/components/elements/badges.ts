import type { TCardBadge } from './types'

/** Every RCard badge shape */
export const CARD_BADGES: ReadonlyArray<TCardBadge> = [
  'hexagon',
  'badge-circle',
  'badge-squircle',
  'badge-diamond',
  'badge-octagon',
  'badge-pentagon',
  'badge-blob',
]

// small seeded PRNG (mulberry32) from a string hash (FNV-1a)
const seededRandom = (seed: string) => {
  let state = [...seed].reduce((hash, char) => Math.imul(hash ^ char.charCodeAt(0), 16777619), 2166136261)

  return () => {
    state = (state + 0x6D2B79F5) | 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Random-looking badge shapes for `count` cards: a shuffle of every shape, cycled so
 * neighbours never repeat. Seeded, so server and browser pick the same shapes.
 */
export const pickCardBadges = (seed: string, count: number): TCardBadge[] => {
  const random = seededRandom(seed)
  const shapes = [...CARD_BADGES]

  for (let i = shapes.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[shapes[i], shapes[j]] = [shapes[j]!, shapes[i]!]
  }

  return Array.from({ length: count }, (_, index) => shapes[index % shapes.length]!)
}
