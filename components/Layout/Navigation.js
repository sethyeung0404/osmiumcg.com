export const navigation = {
  categories: [
    {
      id: 'about',
      name: 'About',
      items: [
        { name: 'Overview', href: '/about-us/overview' },
        { name: 'Our Philosophy', href: '/about-us/our-philosophy' },
        { name: 'Sustainability', href: '/about-us/sustainability' },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      items: [
        { name: 'Recruitment', href: '/solutions/recruitment' },
        { name: 'HR Solutions', href: '/solutions/hr-solutions' },
        {
          name: 'Performance Management',
          href: '/solutions/performance-management',
        },
      ],
    },
    {
      id: 'specialization',
      name: 'Specialization',
      items: [
        {
          name: 'Banking and Financial Services Recruitment',
          href: '/specialization/banking-financial-services',
        },
        { name: 'TMT Recruitment', href: '/specialization/tmt' },
      ],
    },
  ],
  pages: [
    { name: 'Events', href: '/contact_us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
}

export const language = [
  {
    name: 'English',
    href: '*',
    locale: 'en-US',
  },
  {
    name: '繁体中文',
    href: '*',
    locale: 'zh-HK',
  },
  {
    name: '简體中文',
    href: '*',
    locale: 'zh-CN',
  },
  {
    name: '日本語',
    href: '*',
    locale: 'ja',
  },
]
