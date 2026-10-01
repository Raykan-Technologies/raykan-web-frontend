// company profiles, shared by the social icons and the Organization JSON-LD (sameAs)
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61553746709358',
  linkedin: 'https://www.linkedin.com/company/raykan-technologies/',
  instagram: 'https://www.instagram.com/raykantech/',
} as const

export type TSocial = keyof typeof SOCIAL_LINKS

export const CONTACT_EMAIL = 'info@raykan.co'
