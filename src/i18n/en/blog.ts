export default {
  title: 'Blog',
  backToBlog: 'All posts',
  list: {
    title: 'Latest Posts',
  },
  hero: {
    title: 'Blog',
    description: 'Insights, news and stories from the Raykan Technologies team.',
  },
  // search and share copy, title gets the company suffix (wp-raykan Yoast, shortened)
  seo: {
    title: 'Blog: Software Development Insights',
    description: 'Stay up to date with the latest software development insights, trends and best practices, with expert advice from the Raykan Technologies team.',
  },
  // one entry per post in src/views/blog/posts.ts. `seoTitle` (optional) is a shorter title for search,
  // about 35 characters, when `title` is too long with the company suffix. `body` is a list of blocks:
  // { type: 'h2' | 'h3' | 'p' | 'quote', text } or { type: 'ul' | 'ol', items }
  posts: {
    // DRAFT for review: written by Claude, check the facts and tone before publishing
    'custom-vs-off-the-shelf-software': {
      title: 'Custom vs. Off-the-Shelf Software: How to Choose the Right Fit',
      seoTitle: 'Custom vs. Off-the-Shelf Software',
      description: 'Should you buy ready-made software or build your own? Compare cost, fit, speed and growth to choose the right option for your business.',
      category: 'Software Development',
      author: 'Raykan Technologies',
      imageAlt: 'Two developers working on code at their monitors in a bright office',
      body: [
        { type: 'p', text: 'Every growing business reaches the same crossroads: the spreadsheets, email threads and patchwork tools that got you here start slowing you down. The next step is software, but which kind? Buy a ready-made product, or build something made for the way you work?' },
        { type: 'p', text: 'There is no single right answer. The best choice depends on how unique your processes are, how fast you need to move and where you want to be in a few years. Here is how to weigh it.' },
        { type: 'h2', text: 'What off-the-shelf software is' },
        { type: 'p', text: 'Off-the-shelf software is built once and sold to many customers: accounting packages, CRMs, project management tools and most apps you can sign up for today. You get a proven product quickly, usually for a monthly fee, and the vendor handles updates and hosting.' },
        { type: 'h2', text: 'What custom software is' },
        { type: 'p', text: 'Custom software is designed and built for one business. It follows your workflows, connects to the systems you already use and changes when your business changes. You own what is built, and nobody else has the same tool.' },
        { type: 'h2', text: 'When off-the-shelf makes sense' },
        { type: 'ul', items: [
          'Your process is standard, like payroll, email or basic bookkeeping.',
          'You need something working this week, not in a few months.',
          'Your budget is limited and a subscription fits it better than a project.',
          'A popular product already covers most of what you need.',
        ] },
        { type: 'h2', text: 'When custom software pays off' },
        { type: 'ul', items: [
          'Your workflow is what sets you apart, and generic tools force you to work around them.',
          'Your team copies data between several tools by hand every day.',
          'Per-user subscription costs keep rising as you hire.',
          'You need full control over your data, security or integrations.',
          'You plan to scale, and you want software that grows with you instead of holding you back.',
        ] },
        { type: 'h2', text: 'Look at the true cost' },
        { type: 'p', text: 'Off-the-shelf tools look cheaper on day one, and often they are. But add up subscriptions over three to five years, the extra tools you need to fill the gaps, and the hours your team spends on workarounds. Sometimes the total is higher than it looks.' },
        { type: 'p', text: 'Custom software costs more up front and needs ongoing maintenance. In return, it removes manual work, fits your process exactly and stays an asset you own. The right comparison is not the price tag, but the cost and value over the years you will use it.' },
        { type: 'h2', text: 'The middle path: customize and connect' },
        { type: 'p', text: 'It is rarely all or nothing. Many businesses keep standard tools for standard jobs and add custom pieces where it counts: an integration that syncs two systems, a portal for clients, or a module that automates the one process no product handles well.' },
        { type: 'quote', text: 'Buy what is standard, build what makes you different.' },
        { type: 'h2', text: 'Questions to ask before you decide' },
        { type: 'ol', items: [
          'Which tasks take the most manual time today?',
          'How much of the work does an existing product really cover, and what would you have to change to fit it?',
          'What will the option cost over three to five years, not just this year?',
          'Who owns the data, and how easily can you move it later?',
          'How will the software keep up as your team and customers grow?',
        ] },
        { type: 'h2', text: 'Final thoughts' },
        { type: 'p', text: 'Choosing software is a business decision before it is a technical one. Start with the problem you need to solve, be honest about how unique your process is, and compare the long-term cost of each path.' },
        { type: 'p', text: 'Not sure which way to go? Our team can review your current tools and processes and recommend the option that fits, whether that is a ready-made product, a custom build or a mix of both.' },
      ],
    },
  },
}
