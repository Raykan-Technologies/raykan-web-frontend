// privacy policy, written for the Philippine Data Privacy Act of 2012 (RA 10173); have it reviewed before launch.
// Blocks marked "contact form" are commented out while the form is hidden; uncomment them when it's back
export default {
  title: 'Privacy Policy',
  // search and share copy, title gets the company suffix
  seo: {
    title: 'Privacy Policy',
    description: 'How Raykan Technologies collects, uses and protects personal data on raykan.co, in line with the Philippine Data Privacy Act of 2012.',
  },
  hero: {
    title: 'Privacy Policy',
    description: 'What we collect when you visit raykan.co or get in touch, and how we keep it safe.',
  },
  updated: 'Last updated: {date}',
  // date of the current version, shown as written
  updatedDate: 'October 6, 2026',
  links: {
    npc: 'National Privacy Commission',
    googlePrivacy: 'Privacy Policy',
    googleTerms: 'Terms of Service',
  },
  // the policy in order: { type: 'h2' | 'h3' | 'p', text } or { type: 'ul', items }.
  // {email}, {npc}, {googlePrivacy} and {googleTerms} become links
  body: [
    { type: 'p', text: 'Raykan Technologies (“Raykan”, “we”, “us”) operates the website raykan.co. This policy explains how we collect, use, share and protect personal data when you use our website, in line with the Data Privacy Act of 2012 (Republic Act No. 10173) and its implementing rules.' },
    { type: 'p', text: 'By using our website, you agree to the collection and use of information as described in this policy.' },

    { type: 'h2', text: 'Information we collect' },
    { type: 'p', text: 'We collect only the information we need to run the website and to respond to you.' },

    { type: 'h3', text: 'Information you give us' },
    { type: 'p', text: 'When you email us, for example through the “Join our team” button or the email address on our site, we receive your email address, your name and anything you include in your message or attachments, such as a résumé.' },
    // contact form: uncomment when the form is back
    // { type: 'p', text: 'When you send us a message through our contact form, we collect:' },
    // { type: 'ul', items: [
    //   'your full name and, if you give it, your company name',
    //   'your email address and, if you give it, your contact number',
    //   'the message you write to us',
    // ] },

    { type: 'h3', text: 'Usage data' },
    { type: 'p', text: 'When you browse the site, our hosting provider automatically processes technical data such as your IP address, browser type and version, device type, the pages you visit and the time of your visit. This is needed to deliver the site, keep it secure and fix problems.' },

    { type: 'h3', text: 'Cookies and local storage' },
    { type: 'p', text: 'Cookies are small files a website stores on your device. We keep their use to a minimum:' },
    { type: 'ul', items: [
      'a cookie that remembers you dismissed our privacy notice, so it is not shown again',
      'a small display preference kept in your browser’s local storage, for example whether the menu is open',
    ] },
    { type: 'p', text: 'We do not use advertising or analytics cookies, and none of these are used to identify or track you. You can delete cookies and local storage at any time in your browser settings.' },

    { type: 'h2', text: 'How we use your information' },
    { type: 'p', text: 'We use personal data only to:' },
    { type: 'ul', items: [
      'reply to your inquiries and job applications',
      'discuss, prepare and provide the services you ask about',
      'keep the website running, secure and free of abuse',
      'detect and fix technical issues',
      'meet our legal obligations',
    ] },
    { type: 'p', text: 'We do not sell your personal data, and we will not send you marketing messages unless you ask us to.' },

    { type: 'h2', text: 'Transfer of data' },
    { type: 'p', text: 'Some of our service providers may store or process data on servers outside the Philippines, where data protection laws may differ. When this happens, we take reasonable steps to make sure your data is handled securely and in line with this policy.' },

    { type: 'h2', text: 'Disclosure of data' },
    { type: 'p', text: 'We may disclose personal data when we believe in good faith that it is needed to:' },
    { type: 'ul', items: [
      'comply with a law, regulation or lawful request from authorities',
      'protect the rights, property or safety of Raykan, our clients or the public',
      'prevent or investigate possible wrongdoing in connection with the website',
    ] },

    { type: 'h2', text: 'Security of data' },
    { type: 'p', text: 'The website is served only over an encrypted connection (HTTPS), and only the Raykan staff who need your information to respond to you can access it. While we use reasonable measures to protect personal data, no method of transmission over the internet or of electronic storage is completely secure, so we cannot guarantee absolute security.' },

    { type: 'h2', text: 'How long we keep it' },
    { type: 'p', text: 'We keep personal data only as long as we need it to respond to you and to handle any work or business relationship that follows, or as long as the law requires. After that, we securely delete it.' },

    { type: 'h2', text: 'Data deletion' },
    { type: 'p', text: 'You can ask us to delete the personal data we hold about you at any time. Email us at {email} with the subject “Data Deletion Request” and tell us which information you want deleted. We will confirm once it is done, unless the law requires us to keep it.' },

    { type: 'h2', text: 'Service providers' },
    { type: 'p', text: 'We work with a small number of service providers that help us run the website. They can access personal data only to do these tasks for us and must not use it for anything else:' },
    { type: 'ul', items: [
      'our website hosting provider, which serves the site',
      // contact form: uncomment when the form is back
      // 'our email delivery provider, which sends contact form messages to our inbox',
      // 'Google reCAPTCHA, which protects our contact form from spam',
    ] },
    // contact form: uncomment when the form is back (reCAPTCHA runs only on the form)
    // { type: 'p', text: 'Our contact form is protected by Google reCAPTCHA, which checks that messages are sent by a person and not a bot. To do this, reCAPTCHA collects information about your device and how you use the page and sends it to Google. Its use is subject to Google’s {googlePrivacy} and {googleTerms}.' },

    { type: 'h2', text: 'Analytics' },
    { type: 'p', text: 'We do not currently use analytics or tracking tools on this website. If we add any in the future, we will update this policy first.' },

    { type: 'h2', text: 'Links to other sites' },
    { type: 'p', text: 'Our website links to sites we do not operate, such as our social media pages and the Kando app. We have no control over their content or privacy practices, so we encourage you to read the privacy policy of every site you visit.' },

    { type: 'h2', text: 'Children’s privacy' },
    { type: 'p', text: 'Our website is not directed to anyone under the age of 18, and we do not knowingly collect personal data from children. If you believe a child has given us personal data, please contact us and we will delete it.' },

    { type: 'h2', text: 'Your rights under the Data Privacy Act' },
    { type: 'p', text: 'As a data subject, you have the right to:' },
    { type: 'ul', items: [
      'be informed about how your personal data is processed',
      'access the personal data we hold about you',
      'have inaccurate or outdated data corrected',
      'object to the processing of your data',
      'have your data deleted or blocked',
      'get a copy of your data in a commonly used format',
      'be compensated for damages caused by unlawful processing',
    ] },
    { type: 'p', text: 'To use any of these rights, email us at {email}. If you believe your data privacy rights have been violated, you may also file a complaint with the {npc}.' },

    { type: 'h2', text: 'Changes to this policy' },
    { type: 'p', text: 'We may update this policy from time to time. When we do, we will post the new version on this page and change the “Last updated” date at the top. We encourage you to review it now and then.' },

    { type: 'h2', text: 'Contact us' },
    { type: 'p', text: 'For questions about this policy or your personal data, email us at {email} or write to Raykan Technologies, Pardo, Cebu City, Cebu, PH 6000.' },
  ],
}
