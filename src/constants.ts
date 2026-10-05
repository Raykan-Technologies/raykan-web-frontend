// company profiles, shared by the social icons and the Organization JSON-LD (sameAs)
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61553746709358',
  linkedin: 'https://www.linkedin.com/company/raykan-technologies/',
  instagram: 'https://www.instagram.com/raykantech/',
} as const

export type TSocial = keyof typeof SOCIAL_LINKS

export const CONTACT_EMAIL = 'info@raykan.co'

// shown as written; `tel` is the dialable form
export const CONTACT_PHONE = { display: '(+63) 991 549 2455', tel: '+639915492455' } as const

// Kando product page (wp-raykan /kando)
export const KANDO_SIGN_UP_URL = 'https://app.kando.team/sign-up'
export const KANDO_CONTACT_EMAIL = 'rbsesican@raykan.co'
export const KANDO_CONTACT_PHONE = { display: '0916 702 3816', tel: '+639167023816' } as const
