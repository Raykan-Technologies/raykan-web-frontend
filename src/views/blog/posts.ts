/**
 * Blog posts, newest first. Copy lives in i18n `blog.posts.<slug>`; the cover is
 * public/images/blog/<slug>.webp (1600×900) and the share image public/og/blog-<slug>.jpg (1200×630).
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
  // migrated from wp-raykan, original publish dates
  { slug: 'raykan-5th-anniversary', published: '2024-08-14' },
  { slug: 'implementing-new-technology', published: '2024-07-11' },
  { slug: 'optimizing-your-erp-system', published: '2024-03-18' },
  { slug: 'work-chronicles-team-success', published: '2024-02-21' },
]

export const findPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug)

// posts per list page; page 1 is /blog, the rest /blog/page/<n>
export const BLOG_PAGE_SIZE = 10
export const BLOG_PAGE_COUNT = Math.max(1, Math.ceil(BLOG_POSTS.length / BLOG_PAGE_SIZE))
export const postsOnPage = (page: number) => BLOG_POSTS.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE)

// not under public/blog: a folder there would make /blog redirect to /blog/
export const postCover = (slug: string) => `/images/blog/${slug}.webp`
export const postShareImage = (slug: string) => `/og/blog-${slug}.jpg`
