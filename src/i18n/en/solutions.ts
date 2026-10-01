export default {
  title: 'Solutions',
  items: {
    'software-development': 'Software Development',
    'data-science': 'Data Science',
    'digital-marketing': 'Digital Marketing',
    'blockchain': 'Blockchain',
    'enterprise-resource-planning': 'Enterprise Resource Planning',
    'it-managed-service': 'IT Managed Service',
  },
  // copy per solution page, one key per section
  pages: {
    'software-development': {
      // search and share copy, title gets the company suffix
      seo: {
        title: 'Custom Software Development Services',
        description: 'Raykan builds custom web, mobile, desktop and game applications that solve complex problems, improve efficiency and help your business grow.',
        imageAlt: 'Software developer writing code across a monitor, laptop and tablet',
      },
      hero: {
        description: 'Build your dream custom software that empowers your business growth with Raykan Technologies.',
      },
      offerings: {
        title: 'Custom Web and Mobile Application Development Solutions',
        description: 'We develop custom web and mobile applications, delivering scalable, high-quality solutions. Our expertise ensures seamless, responsive, and user-focused experiences across all platforms.',
        items: {
          web: {
            title: 'Web Application',
            text: 'Create software solutions to help your business stand out from the vast world of the internet.',
          },
          mobile: {
            title: 'Mobile Application',
            text: 'Formulate a convenient and efficient programs easily accessible through mobile devices.',
          },
          desktop: {
            title: 'Desktop Application',
            text: 'Develops, installs, and maintains desktop software tailored to enhance user productivity and streamline workflows, ensuring smooth operation and high performance.',
          },
          game: {
            title: 'Game Application',
            text: 'Designs, develops, and optimizes engaging, interactive games across platforms to provide seamless entertainment and immersive user experiences.',
          },
        },
      },
    },
    'data-science': {
      seo: {
        title: 'Data Science and Analytics Services',
        description: 'Raykan turns complex data into actionable insights through data mining, business intelligence and data engineering that drive growth and efficiency.',
        imageAlt: 'Data engineer with a laptop in front of server racks in a data center',
      },
      hero: {
        description: 'Gathering, storing and analyzing data to create effective solutions for your business.',
      },
      offerings: {
        title: 'Advanced Data Science Solutions',
        description: 'We specialize in data science, leveraging advanced analytics to transform complex data into valuable insights and support informed decision-making. Our approach helps businesses unlock the full potential of their data to drive growth and efficiency.',
        items: {
          mining: {
            title: 'Data Mining and Statistical Analysis',
            text: 'Mining algorithms to create statistical and practical approaches.',
          },
          intelligence: {
            title: 'Business Intelligence and Strategy Making',
            text: 'Studying business models and creating effective solutions.',
          },
          // wp-raykan says "Date Warehousing", a typo
          engineering: {
            title: 'Data Engineering and Data Warehousing',
            text: 'Formulating processes to gather and store information.',
          },
        },
      },
    },
    'digital-marketing': {
      seo: {
        title: 'Digital Marketing and SEO Services',
        description: 'Grow your online presence with SEO, pay-per-click, social media, content, email and mobile marketing campaigns built by Raykan Technologies.',
        imageAlt: 'Marketing team reviewing campaign charts on paper and a laptop',
      },
      hero: {
        description: 'Software solutions to better reach your target audience through the use of the internet and various forms of digital media.',
      },
      // wp-raykan offerings are titles only, without text
      offerings: {
        title: 'Cutting-Edge Digital Marketing Services',
        description: 'We offer digital marketing services, including SEO, social media management, content marketing, PPC, and email campaigns, to enhance your online presence and drive results.',
        items: {
          seo: { title: 'Search Engine Optimization' },
          ppc: { title: 'Pay-per-click' },
          social: { title: 'Social Media Marketing' },
          content: { title: 'Content Marketing' },
          email: { title: 'Email Marketing' },
          mobile: { title: 'Mobile Marketing' },
          analysis: { title: 'Marketing Analysis' },
          affiliate: { title: 'Affiliate Analysis' },
        },
      },
    },
    'blockchain': {
      seo: {
        title: 'Blockchain Development Services',
        description: 'Secure blockchain solutions from Raykan Technologies: cryptocurrency development, DApps, smart contracts, decentralized storage and supply chain tracking.',
        imageAlt: 'Blockchain developers writing code at their workstations',
      },
      hero: {
        description: 'Create a database that effectively stores information digitally and connects them to a chain for effective data dissemination.',
      },
      // wp-raykan copy, with its typos and grammar fixed
      offerings: {
        title: 'Secure Blockchain Solutions',
        description: 'We provide blockchain solutions that enable secure, transparent, and decentralized transactions. Our services include blockchain development, and smart contract implementation to strengthen your online presence and achieve impactful results.',
        items: {
          cryptocurrency: {
            title: 'Cryptocurrency Development',
            text: 'Cryptocurrency development services to successfully implement your custom-made altcoin.',
          },
          dapps: {
            title: 'DApps',
            text: 'Building Decentralized Applications (DApps) running on decentralized peer-to-peer (P2P) networks.',
          },
          contracts: {
            title: 'Smart Contracts',
            text: 'Automated contracts that execute when certain conditions are met, without the need for a mediator.',
          },
          storage: {
            title: 'Decentralized Storage',
            text: 'Create a reliable decentralized storage that has better security than traditional centralized storage.',
          },
          supplyChain: {
            title: 'Supply Chain Management',
            text: 'Effectively track products on the supply chain from raw materials to finished product, with improved transparency and accountability.',
          },
        },
      },
    },
    'enterprise-resource-planning': {
      seo: {
        title: 'SAP ERP Implementation Services',
        description: 'Raykan implements SAP ERP across finance, supply chain, sales, manufacturing and analytics, integrating and automating your business processes.',
        imageAlt: 'Business team planning together around laptops in an office',
      },
      hero: {
        description: 'Maintain important business information like policies and standards with SAP implementation.',
      },
      // wp-raykan offerings are titles only, without text
      offerings: {
        title: 'SAP Business Modules',
        description: 'We offer SAP ERP solutions across key business modules, including finance, supply chain, human resources, and analytics. Our expertise ensures seamless integration and automation, driving efficiency and strategic growth for your organization.',
        items: {
          projectManagement: { title: 'Project Management' },
          spendAnalysis: { title: 'Spend Analysis' },
          businessPlanning: { title: 'Integrated Business Planning' },
          dataManagement: { title: 'Modeling and Data Management' },
          managementAccounting: { title: 'Management Accounting' },
          financialAccounting: { title: 'Financial Accounting' },
          finance: { title: 'Finance Implementation' },
          manufacturing: { title: 'Manufacturing Implementation' },
          sales: { title: 'Sales Implementation' },
          commerce: { title: 'Commerce' },
          security: { title: 'System Security Architect' },
        },
      },
    },
  },
}
