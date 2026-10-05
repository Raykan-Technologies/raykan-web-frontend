// privacy policy, written for the Philippine Data Privacy Act of 2012 (RA 10173); have it reviewed before launch
export default {
  title: 'Privacy Policy',
  // search and share copy, title gets the company suffix
  seo: {
    title: 'Privacy Policy',
    description: 'How Raykan Technologies collects, uses and protects the personal data you share through raykan.co, in line with the Data Privacy Act of 2012.',
  },
  hero: {
    title: 'Privacy Policy',
    description: 'What we collect when you visit raykan.co or contact us, and how we keep it safe.',
  },
  updated: 'Last updated: {date}',
  // date of the current version, shown as written
  updatedDate: 'October 5, 2026',
  links: {
    npc: 'National Privacy Commission',
    googlePrivacy: 'Privacy Policy',
    googleTerms: 'Terms of Service',
  },
  // each section: a heading, paragraphs, an optional list, and optional paragraphs after it.
  // {email}, {npc}, {googlePrivacy} and {googleTerms} become links
  sections: {
    intro: {
      heading: 'Who we are',
      body: [
        'Raykan Technologies (“Raykan”, “we”, “us”) builds software and IT solutions from Cebu City, Philippines. We respect your privacy and handle your personal data in line with the Data Privacy Act of 2012 (Republic Act No. 10173) and its implementing rules.',
        'This policy covers our website, raykan.co. It explains what personal data we collect, why we collect it, who we share it with and the rights you have over it.',
      ],
    },
    collect: {
      heading: 'What we collect',
      body: ['When you send us a message through our contact form, we collect:'],
      list: [
        'your full name and, if you give it, your company name',
        'your email address and, if you give it, your contact number',
        'the message you write to us',
      ],
      after: [
        'When you browse the site, our hosting provider automatically processes technical data such as your IP address, browser type and the pages you request. This is needed to deliver the site and protect it from abuse.',
        'We do not use advertising or analytics cookies. The site only keeps a small display preference (for example, whether the menu is open) in your browser’s local storage, and it is not used to identify or track you.',
      ],
    },
    use: {
      heading: 'How we use it',
      body: ['We use your personal data only to:'],
      list: [
        'reply to your inquiry and discuss the services you asked about',
        'prepare proposals or quotations you request',
        'keep the website secure and stop spam and abuse',
        'meet our legal obligations',
      ],
      after: ['We do not sell your personal data, and we will not send you marketing messages unless you ask us to.'],
    },
    recaptcha: {
      heading: 'Spam protection (Google reCAPTCHA)',
      body: [
        'Our contact form is protected by Google reCAPTCHA, which checks that messages are sent by a person and not a bot. To do this, reCAPTCHA collects information about your device and how you use the page and sends it to Google. Its use is subject to Google’s {googlePrivacy} and {googleTerms}.',
      ],
    },
    share: {
      heading: 'Who we share it with',
      body: ['We share personal data only with service providers that help us run the website, and only as much as they need:'],
      list: [
        'our website hosting provider, which serves the site and processes the form',
        'our email delivery provider, which sends your message to our inbox',
        'Google, for reCAPTCHA spam protection',
      ],
      after: [
        'Some of these providers may process data outside the Philippines. We choose providers that protect personal data with appropriate safeguards. We may also disclose personal data when the law requires it.',
      ],
    },
    retention: {
      heading: 'How long we keep it',
      body: [
        'We keep your inquiry only as long as we need it to respond to you and to handle any work or business relationship that follows, or as long as the law requires. After that, we securely delete it.',
      ],
    },
    security: {
      heading: 'How we protect it',
      body: [
        'The website is served only over an encrypted connection (HTTPS), and form submissions are checked on our servers. Only the Raykan staff who need to answer your inquiry can access it, and our service providers are required to protect the data they handle for us.',
      ],
    },
    rights: {
      heading: 'Your rights',
      body: ['Under the Data Privacy Act, you have the right to:'],
      list: [
        'be informed about how your personal data is processed',
        'access the personal data we hold about you',
        'have inaccurate or outdated data corrected',
        'object to the processing of your data',
        'have your data deleted or blocked',
        'get a copy of your data in a commonly used format',
        'be compensated for damages caused by unlawful processing',
      ],
      after: [
        'To use any of these rights, email us at {email}. If you believe your data privacy rights have been violated, you may also file a complaint with the {npc}.',
      ],
    },
    contact: {
      heading: 'Contact us',
      body: [
        'For questions about this policy or your personal data, email us at {email} or write to Raykan Technologies, Pardo, Cebu City, Cebu, PH 6000.',
      ],
    },
    changes: {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy from time to time. When we do, we will change the date at the top of this page.',
      ],
    },
  },
}
