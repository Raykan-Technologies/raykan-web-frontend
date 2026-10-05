// company profiles, shared by the social icons and the Organization JSON-LD (sameAs)
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61553746709358',
  linkedin: 'https://www.linkedin.com/company/raykan-technologies/',
  instagram: 'https://www.instagram.com/raykantech/',
} as const

export type TSocial = keyof typeof SOCIAL_LINKS

export const CONTACT_EMAIL = 'rbsesican@raykan.co'

// shown as written; `tel` is the dialable form
export const CONTACT_PHONE = { display: '(+63) 916 702 3816', tel: '+639167023816' } as const

// Kando product page (wp-raykan /kando)
export const KANDO_SIGN_UP_URL = 'https://app.kando.team/sign-up'
export const KANDO_CONTACT_EMAIL = 'rbsesican@raykan.co'
export const KANDO_CONTACT_PHONE = { display: '0916 702 3816', tel: '+639167023816' } as const

// contact form message limit, checked by the form and the server
export const CONTACT_MESSAGE_MAX = 1000

/**
 * Solution slugs, in wp-raykan menu order. Each one is also its route name and path
 * (kept at the root like the WordPress site, e.g. `/software-development`).
 */
export const SOLUTIONS = [
  'software-development',
  'data-science',
  'digital-marketing',
  'blockchain',
  'enterprise-resource-planning',
  'it-managed-service',
] as const

export type TSolution = typeof SOLUTIONS[number]
