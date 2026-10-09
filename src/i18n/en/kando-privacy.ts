export default {
  title: 'Kando App Privacy Policy',
  seo: {
    title: 'Kando App Privacy Policy',
    description: 'How the Kando mobile app by Raykan Technologies collects, uses, shares and protects personal data, in line with the Philippine Data Privacy Act of 2012.',
  },
  hero: {
    title: 'Kando App Privacy Policy',
    description: 'What the Kando mobile app collects, why it needs it, and how we keep it safe.',
  },
  updated: 'Last updated: {date}',
  updatedDate: 'October 9, 2026',
  links: {
    npc: 'National Privacy Commission',
    googlePrivacy: 'Google Privacy Policy',
    googleTerms: 'Google Terms of Service',
    websitePolicy: 'website privacy policy',
    kandoPolicy: 'Kando app privacy policy',
  },
  body: [
    { type: 'p', text: 'Raykan Technologies (“Raykan”, “we”, “us”) develops and operates Kando, a human resources and timekeeping platform, and the Kando mobile app for Android and iOS (the “app”). This policy explains how the app collects, uses, shares and protects personal data, in line with the Data Privacy Act of 2012 (Republic Act No. 10173) and its implementing rules.' },
    { type: 'p', text: 'This policy covers the Kando mobile app only. Our {websitePolicy} covers raykan.co.' },

    { type: 'h2', text: 'Who is responsible for your data' },
    { type: 'p', text: 'Kando is provided to organizations, such as your employer, under a contract with Raykan. Your organization creates your account, decides which Kando features are turned on, and decides how your work records are used. Your organization is the personal information controller of your employee records. Raykan processes those records on your organization’s behalf as a personal information processor, and only under its instructions and this policy.' },
    { type: 'p', text: 'You cannot create an account in the app. If you have questions about the records your organization keeps about you, contact your organization’s HR or Kando administrator first. You can also contact us at any time.' },

    { type: 'h2', text: 'Information we collect' },
    { type: 'p', text: 'The app collects only the information needed to provide Kando’s features to you and your organization.' },

    { type: 'h3', text: 'Account and sign-in information' },
    { type: 'ul', items: [
      'your organization’s Kando domain',
      'your email address or username, and your password when you sign in (your password is sent securely to our servers and is not stored on your device)',
      'a sign-in token and a copy of your basic profile, kept in your device’s secure storage (Android Keystore or iOS Keychain) so you stay signed in',
    ] },

    { type: 'h3', text: 'Employee information' },
    { type: 'p', text: 'Your organization provides, and the app shows you, information such as your name, email address, employee number, department, position, cost centers, work schedules, holidays, leave balances and approvers.' },

    { type: 'h3', text: 'Work records you create' },
    { type: 'ul', items: [
      'time logs: when you clock in, clock out, start or end a break, and any description, cost center or tags you add',
      'requests: leave, overtime, schedule change, manual time log and holiday swap requests, with any reason or note you write',
      'approvals and comments, if you approve requests for your team',
      'files you choose to attach to a request, such as a medical certificate (the app only reads files you pick yourself)',
    ] },

    { type: 'h3', text: 'Location' },
    { type: 'p', text: 'When you clock in, clock out, or start or end a break, the app reads your device’s precise location once and saves it with that time log, so your organization can confirm where work was recorded. The app also turns these coordinates into a readable address using your device’s built-in geocoding service, which is provided by Google on Android and by Apple on iOS.' },
    { type: 'p', text: 'The app uses location only while it is open. It does not track your location in the background or between time logs. The app asks for location permission before you can use it, and you can turn location access off at any time in your device settings, although clocking in may then be unavailable.' },

    { type: 'h3', text: 'Device, app and security information' },
    { type: 'ul', items: [
      'your app version, build number and device platform, sent with each request so we can keep the app compatible and fix problems',
      'your IP address and request times, which our servers record to deliver the service and keep it secure',
      'whether your device is connected to the internet, checked on your device only so the app can tell you when you are offline',
    ] },
    { type: 'p', text: 'To protect your organization’s data, the app checks whether it is running on a rooted or jailbroken device, has a debugger or hooking tool attached, or has been modified. For these checks the app uses freeRASP by Talsec, which processes technical information such as your device model, operating system version, app identifier and the security issues it detects. If a serious issue is found, the app signs you out.' },

    { type: 'h3', text: 'What we do not collect' },
    { type: 'p', text: 'The app does not access your contacts, camera, microphone or photo library (except files you pick to attach), and it does not use an advertising ID. The app has no advertising and no analytics or tracking tools.' },

    { type: 'h2', text: 'How we use your information' },
    { type: 'p', text: 'We use personal data only to:' },
    { type: 'ul', items: [
      'sign you in and keep your account secure',
      'record your time and attendance, and show your schedules, time logs and leave balances',
      'send your requests to your approvers and show you their decisions',
      'show real-time updates, such as when a request is approved',
      'protect the app and your organization’s data against tampering and misuse',
      'provide support, and detect and fix technical issues',
      'meet our legal and contractual obligations',
    ] },
    { type: 'p', text: 'We do not sell your personal data, use it for advertising, or send you marketing messages through the app.' },

    { type: 'h2', text: 'Who can see your information' },
    { type: 'ul', items: [
      'your organization: authorized HR staff, administrators, managers and approvers, according to your organization’s Kando settings',
      'Raykan staff, only when needed to run, support or secure Kando, and under confidentiality obligations',
    ] },

    { type: 'h2', text: 'Service providers' },
    { type: 'p', text: 'We work with a small number of service providers that help us run Kando. They can access personal data only to do these tasks for us and must not use it for anything else:' },
    { type: 'ul', items: [
      'Microsoft Azure, which hosts our servers, databases and file storage',
      'Pusher, which delivers real-time updates to the app',
      'Talsec, which provides the freeRASP security checks described above',
      'Google, which serves the fonts the app downloads and, on Android, provides the geocoding service',
      'Apple, which provides the geocoding service on iOS',
    ] },
    { type: 'p', text: 'Google’s handling of data is described in the {googlePrivacy}.' },

    { type: 'h2', text: 'Transfer of data' },
    { type: 'p', text: 'Some of our service providers may store or process data on servers outside the Philippines, where data protection laws may differ. When this happens, we take reasonable steps to make sure your data is handled securely and in line with this policy.' },

    { type: 'h2', text: 'Disclosure of data' },
    { type: 'p', text: 'We may disclose personal data when we believe in good faith that it is needed to:' },
    { type: 'ul', items: [
      'comply with a law, regulation or lawful request from authorities',
      'protect the rights, property or safety of Raykan, our clients, their employees or the public',
      'prevent or investigate possible wrongdoing in connection with Kando',
    ] },

    { type: 'h2', text: 'Security of data' },
    { type: 'p', text: 'All data between the app and our servers is sent over an encrypted connection (HTTPS). Sign-in information on your device is kept in secure storage, app data is excluded from device backups, and access to our systems is limited to authorized staff. While we use reasonable measures to protect personal data, no method of transmission over the internet or of electronic storage is completely secure, so we cannot guarantee absolute security.' },

    { type: 'h2', text: 'How long we keep it' },
    { type: 'p', text: 'We keep your employee and work records for as long as your organization uses Kando and keeps your account, or longer when your organization must keep them under labor, tax or other laws. When your organization’s contract with Raykan ends, we delete or return its data as agreed in that contract. Sign-in information on your device is removed when you sign out or uninstall the app.' },

    { type: 'h2', text: 'Data deletion' },
    { type: 'p', text: 'To have your Kando account or data deleted, ask your organization’s HR or Kando administrator, who manages your account. You can also email us at {email} with the subject “Kando Data Deletion Request”, and tell us your organization and which information you want deleted. We will work with your organization and confirm once it is done. Some records, such as time logs your organization must keep by law, may be kept until that period ends.' },

    { type: 'h2', text: 'Your choices' },
    { type: 'ul', items: [
      'turn location access on or off in your device settings',
      'sign out of the app at any time, which removes your sign-in information from the device',
      'uninstall the app, which removes all app data stored on the device',
    ] },

    { type: 'h2', text: 'Children’s privacy' },
    { type: 'p', text: 'The app is meant for employees and is not directed to anyone under the age of 18. We do not knowingly collect personal data from children. If you believe a child has given us personal data, please contact us and we will delete it.' },

    { type: 'h2', text: 'Your rights under the Data Privacy Act' },
    { type: 'p', text: 'As a data subject, you have the right to:' },
    { type: 'ul', items: [
      'be informed about how your personal data is processed',
      'access the personal data held about you',
      'have inaccurate or outdated data corrected',
      'object to the processing of your data',
      'have your data deleted or blocked',
      'get a copy of your data in a commonly used format',
      'be compensated for damages caused by unlawful processing',
    ] },
    { type: 'p', text: 'To use any of these rights, contact your organization or email us at {email}. If you believe your data privacy rights have been violated, you may also file a complaint with the {npc}.' },

    { type: 'h2', text: 'Changes to this policy' },
    { type: 'p', text: 'We may update this policy from time to time, for example when we add features to the app. When we do, we will post the new version on this page and change the “Last updated” date at the top.' },

    { type: 'h2', text: 'Contact us' },
    { type: 'p', text: 'For questions about this policy or your personal data, email us at {email} or write to Raykan Technologies, Pardo, Cebu City, Cebu, PH 6000.' },
  ],
}
