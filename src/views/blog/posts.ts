/**
 * Blog posts, newest first. Copy lives in i18n `blog.posts.<slug>`; the cover is
 * public/blog/<slug>.webp (1600×900) and the share image public/og/blog-<slug>.jpg (1200×630).
 * Plain data only: the sitemap (server) reads it too.
 */
export interface IBlogPost {
  slug: string;
  // ISO dates (YYYY-MM-DD)
  published: string;
  updated?: string;
}

export const BLOG_POSTS: ReadonlyArray<IBlogPost> = [
  { slug: 'custom-vs-off-the-shelf-software', published: '2026-10-05' },
]

export const findPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug)

export const postCover = (slug: string) => `/blog/${slug}.webp`
export const postShareImage = (slug: string) => `/og/blog-${slug}.jpg`
