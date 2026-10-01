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
  },
}
