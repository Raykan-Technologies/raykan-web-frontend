export default {
  title: 'Kando',
  // search and share copy, title gets the company suffix
  seo: {
    title: 'Kando HRMS: Timekeeping & Payroll',
    description: 'Kando is a Philippine-built HRMS by Raykan Technologies that automates timekeeping, payroll and all things HR, with flexible modules for local and global teams.',
  },
  logo: 'Kando',
  header: {
    back: 'Back to Raykan',
    demo: 'Book a free HRMS Demo',
    meeting: 'Book a meeting',
    menu: {
      home: 'Home',
      services: 'Services',
      core: 'Core',
    },
  },
  hero: {
    lead: 'Philippine-built HRMS for local and global teams',
    // {break}: new line on every screen, {mobileBreak}: phones only (wp-raykan)
    title: '{automated}{mobileBreak} {timekeeping},{mobileBreak} {payroll},{break}and {hr}!',
    automated: 'Automated',
    timekeeping: 'Timekeeping',
    payroll: 'Payroll',
    hr: 'All Things HR',
  },
  modules: {
    label: 'Kando Cloud Solutions',
    title: '{modules} For Your Specific {needs}',
    modules: 'HR Modules',
    needs: 'HR Needs',
    description: 'Kando full suite or modules. Kando offers scalable HRMS and flexible modules to power up your HR operations.',
    brochure: 'Download Kando Brochure',
    items: {
      doTime: {
        name: 'doTime',
        text: 'Efficient timekeeping system that streamlines attendance tracking for your diverse work schedules',
        imageAlt: 'Team working together on laptops at a shared desk',
      },
      doPayroll: {
        name: 'doPayroll',
        // wp-raykan: "Customize payroll system"
        text: 'Customizable payroll system that computes accurate salaries according to your payroll process',
        imageAlt: 'Colleagues reviewing payroll figures on a laptop',
      },
      doRecord: {
        name: 'doRecord',
        text: 'Comprehensive HRIS that keeps all employee data safe and in one place for better data management',
        imageAlt: 'Team going over employee records in a meeting',
      },
    },
  },
  pricing: {
    label: 'Your All-Access HRMS License',
    title: 'Begin your {highlight}',
    highlight: 'Kando Journey',
    description: 'One smart system to manage your people, time, and payroll effortlessly.',
    includes: 'Plan Includes:',
    getStarted: 'Get Started',
    plans: {
      doTime: {
        name: 'doTime',
        features: [
          'Real-Time Tracking',
          'Customizable Schedules',
          'Leave & Holiday Management',
          'Timesheet Reports',
          'Configurable Approval Workflows',
          'Task & Cost Center Tagging',
          'Dynamic Dashboard',
          'Multiple Kiosks',
          'Employee Self-Service',
        ],
      },
      doPayroll: {
        name: 'doPayroll',
        features: [
          'Automated Salary Calculations',
          'Tax & Compliance Management',
          'Benefits & Compensation Tracking',
          'Configurable Approval Workflows',
          'Dynamic Dashboard',
          'Employee Self-Service',
        ],
      },
      bundle: {
        name: 'bundle',
        features: [
          'All features of Timekeeping Module',
          'All features of Payroll Module',
        ],
      },
    },
  },
  features: {
    label: 'Our Core Features',
    title: 'What {highlight} Delivers',
    highlight: 'Kando',
    description: 'Above efficiency and productivity, Kando\'s promise is a technology that serves as HR\'s strategic partner. Kando is more than just a tool',
    imageAlt: 'Kando running on a laptop and a desktop monitor',
    // texts as on wp-raykan (cost-effective and customizable share one)
    items: {
      costEffective: {
        title: 'Cost-effective',
        text: 'Cut HR and payroll costs with one smart platform.',
      },
      payrollAccuracy: {
        title: '100% payroll accuracy',
        text: 'Adjust features to fit your business.',
      },
      customizable: {
        title: 'Highly customizable',
        text: 'Cut HR and payroll costs with one smart platform.',
      },
      timekeeping: {
        title: 'Flexible timekeeping',
        text: 'Track attendance your way, biometric, or web.',
      },
      selfService: {
        title: 'Employee self-service',
        text: 'Let staff manage their own HR needs anytime.',
      },
      morale: {
        title: 'Boost team morale',
        text: 'Keep employees happy with fair processes.',
      },
    },
  },
  footer: {
    contactUs: 'Contact Us',
    address: 'Pob. Pardo, Cebu City, Philippines',
    poweredBy: 'Powered by Raykan Technologies',
  },
}
