export type TIconTypes = 'default' | 'two-tone' | 'active' | 'error' | 'soft' | 'warning' | 'success' | 'none'

/**
 * Section background/text presets (wp-raykan landing page)
 * - light: white (services)
 * - primary: brand blue, white text (hero, testimonials, about)
 * - accent-soft: light teal (metrics)
 * - transparent: no background
 */
export type TSectionTheme = 'light' | 'primary' | 'accent-soft' | 'transparent'

/**
 * Content width: `boxed` = 1140px, `full` = edge to edge, or any CSS length (e.g. `1600px`)
 */
export type TSectionWidth = 'boxed' | 'full' | (string & {})

/**
 * Horizontal padding inside the content container
 * - none: 0
 * - sm: 10px (Elementor column default)
 * - md: 20px desktop / 20px tablet / 24px mobile
 * - lg: 124px desktop / 40px tablet / 24px mobile (hero)
 */
export type TSectionGutter = 'none' | 'sm' | 'md' | 'lg'

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
