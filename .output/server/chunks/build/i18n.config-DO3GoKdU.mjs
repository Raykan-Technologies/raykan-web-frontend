//#endregion
//#region src/i18n/messages.ts
var messages_default = { en: {
	about: { title: "About" },
	blog: { title: "Blog" },
	buttons: {
		joinOurTeam: "Join our team!",
		openMenu: "Open menu",
		closeMenu: "Close menu"
	},
	careers: { title: "Careers" },
	clients: {
		bond: "BOND",
		eliteAnywhere: "Elite Anywhere",
		kcFence: "K&C Fence Company",
		desertMoving: "Desert Moving Co.",
		bni: "BNI"
	},
	common: {
		companyName: "Raykan Technologies",
		copyright: "Ⓒ {year} Raykan Technologies. All Rights Reserved.",
		footerMenu: "Footer",
		rating: "Rated {rating} out of 5",
		carousel: {
			goToSlide: "Go to slide {index}",
			slideLabel: "{index} of {total}"
		},
		socials: {
			facebook: "Facebook",
			linkedin: "LinkedIn",
			instagram: "Instagram"
		}
	},
	contact: { title: "Contact Us" },
	errorPages: {
		400: {
			title: "Bad Request",
			description: "It seems you were trying to access a page which the server cannot process."
		},
		403: {
			title: "Access Forbidden",
			description: "It seems you were trying to access a page which you have no access to."
		},
		404: {
			title: "Page Not Found",
			description: "It seems you were trying to access a page which does not exist."
		}
	},
	faq: { title: "FAQ" },
	home: {
		title: "Home",
		hero: {
			tagline: "Driving Innovation, Empowering People",
			titleLine1: "Creating technologies",
			titleLine2: "that drives success",
			lead: "Build your dream custom software that {highlight} your business growth with Raykan Technologies.",
			leadHighlight: "empowers",
			startBuilding: "Start Building your Dreams!",
			meetTheTeam: "Meet the team",
			clientsLabel: "Our clients"
		},
		services: {
			label: "Services",
			title: "Unlock Your Company’s Potential with Our Solutions",
			text: "Our tailored services enhance efficiency, drive innovation, and fuel growth, empowering your business to thrive.",
			items: {
				"software-development": "We develop customized web and mobile apps designed to optimize your business operations.",
				"data-science": "We provide insights that allows you to make an informed, data-driven business decisions.",
				"enterprise-resource-planning": "Our ERP systems automate and streamline your business processes for a scalable operation.",
				"digital-marketing": "We connect you with your audience across various online platforms for an enhanced engagement.",
				"it-managed-service": "Our comprehensive IT management ensures your tech infrastructure operates seamlessly and securely.",
				"blockchain": "Our Blockchain as a Service (BaaS) delivers safe, immutable, and traceable data storage fit for your needs"
			}
		},
		testimonials: {
			label: "Testimonial",
			title: "Success Story with Raykan",
			text: "Through our tailored solutions and dedicated support, we’ve empowered businesses to build stronger teams and efficient operations.",
			items: {
				edenPilarye: {
					name: "Eden Pilarye",
					role: "Branch Manager at Elite Anywhere",
					quote: "\"Raykan Techonologies has been an exceptional partner in transforming our business operations. Their innovative solutions and expert team have significantly improved our efficiency and productivity. The level of professionalism and dedication they bring to every project is truly recommendable. We couldn't be happier with the results and highly recommend Raykan Technologies to any business looking to leverage top-notch technological services\""
				},
				jayVieSobiono: {
					name: "Jay Vie Sobiono",
					role: "Accounting Manager",
					quote: "\"With the help of BOND, our processes we're streamlined, allowing us to accomplish task more quickly and effectively. It has facilitated collaboration among team members, enhancing teamwork and productivity. With enhanced collaboration and efficiency, we have been able to reduce errors and ensure the accuracy of our data and operations\""
				}
			}
		},
		metrics: {
			label: "Metrics",
			title: "Raykan Results: Metrics that Matter",
			text: "At Raykan Technologies, we pride ourselves on delivering exceptional results. Our commitment to excellence is reflected in our impressive metrics.",
			items: {
				ticketResolution: "With a 100% ticket resolution rate last quarter, our support team's commitment to solving issues is clear. We prioritize addressing every client concern promptly, efficiently, and with care.",
				clientRetention: "Since 2019, we’ve proudly maintained a 100% client retention rate. Our focus on delivering personalized solutions and ongoing support has ensured that every client continues to trust and grow with us.",
				clientSatisfaction: "With a 97% client satisfaction rate for issue resolution, our support team's dedication speaks for itself. We are committed to assisting our clients swiftly and effectively."
			}
		},
		about: {
			title: "We are Raykan Technologies",
			statement: "We are a value-driven team determined to tailor specific solutions that match your needs and priorities. We deliver innovative solutions through extensive experience and technical expertise in the IT ecosystem. We guarantee addressing all your challenges with technical sophistication and satisfactory resolution. We produce exceptional outcomes in a collaborative environment.",
			closing: "We are Raykan.",
			startBuilding: "Start Building Now!",
			joinTeam: "Join our team"
		}
	},
	kando: { title: "Kando" },
	menus: {
		home: "Home",
		solutions: "Solutions",
		allSolutions: "All",
		about: "About",
		blog: "Blog",
		faq: "FAQ",
		contact: "Contact",
		kando: "Kando"
	},
	solutions: {
		title: "Solutions",
		items: {
			"software-development": "Software Development",
			"data-science": "Data Science",
			"digital-marketing": "Digital Marketing",
			"blockchain": "Blockchain",
			"enterprise-resource-planning": "Enterprise Resource Planning",
			"it-managed-service": "IT Managed Service"
		}
	}
} };
//#endregion
//#region src/i18n/i18n.config.ts
var i18n_config_default = () => ({
	legacy: false,
	fallbackLocale: "en",
	messages: messages_default
});

export { i18n_config_default as default };
//# sourceMappingURL=i18n.config-DO3GoKdU.mjs.map
