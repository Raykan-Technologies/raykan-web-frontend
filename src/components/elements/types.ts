export type TIconTypes = 'default' | 'two-tone' | 'active' | 'error' | 'soft' | 'warning' | 'success' | 'none'

/**
 * Shape behind an RCard icon (see CARD_BADGES in badges.ts)
 */
export type TCardBadge = 'hexagon' | 'badge-circle' | 'badge-squircle' | 'badge-diamond' | 'badge-octagon' | 'badge-pentagon' | 'badge-blob'

/**
 * Section background/text presets (wp-raykan landing page)
 * - light: white (services)
 * - primary: brand blue, white text (hero, testimonials, about)
 * - accent-soft: light teal (metrics)
 * - transparent: no background
 */
export type TSectionTheme = 'light' | 'muted' | 'primary' | 'accent-soft' | 'transparent'

/**
 * Content width: `boxed` = 1140px, `full` = edge to edge, or any CSS length (e.g. `1600px`)
 */
export type TSectionWidth = 'boxed' | 'full' | (string & {})

/**
 * Horizontal padding beside the content
 * - default: the site-wide section padding (`--section-padding-x`, 40px / 24px on mobile)
 * - none: 0 (inner rows)
 */
export type TSectionGutter = 'default' | 'none'

/**
 * A value, or one per breakpoint (missing breakpoints inherit the larger one)
 */
export type TResponsive<T> = T | { desktop?: T; tablet?: T; mobile?: T }

/**
 * A CSS length, or one per breakpoint
 */
export type TResponsiveValue = TResponsive<string>

/**
 * Column layout: a count of equal columns (`3`) or Elementor-style widths in percent
 * (`[25, 54.333, 20]`, used as proportions so the gap never overflows)
 */
export type TSectionColumns = number | Array<number>

/**
 * Space between columns (Elementor column gap presets): 0, 10, 20, 30, 40, 60px
 */
export type TSectionGap = 'no' | 'narrow' | 'default' | 'extended' | 'wide' | 'wider'

/**
 * Button styles: `solid` (accent background) or `outline` (border in the current text color).
 * Kando page only: `kando` (orange), `kando-outline` (white, fills orange on hover), `kando-light` (white, grey border)
 */
export type TButtonVariant = 'solid' | 'outline' | 'kando' | 'kando-outline' | 'kando-light'

/**
 * An image slide for RCarousel
 */
export interface ICarouselImage {
    src: string;
    alt: string;
    /**
     * Rendered size in px (also reserves space before the image loads)
     */
    width?: number;
    height?: number;
}

/**
 * A block of a blog post body (RPost): a heading, paragraph or quote, or a list
 */
export type TPostBlock =
  | { type: 'h2' | 'h3' | 'p' | 'quote'; text: string }
  | { type: 'ul' | 'ol'; items: Array<string> }
