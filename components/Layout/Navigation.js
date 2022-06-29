export const navigation = {
  categories: [
    {
      id: 'about',
      name: 'About',
      items: [
        { name: 'Overview', href: '/about-us/overview' },
        { name: 'Philosophy', href: '/about-us/our-philosophy' },
        { name: 'Sustainability', href: '/about-us/sustainability' },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      items: [
        { name: 'Recruitment', href: '/solutions/recruitment' },
        { name: 'HR', href: '/solutions/hr-solutions' },
        {
          name: 'Performance',
          href: '/solutions/performance-management',
        },
      ],
    },
    {
      id: 'specialization',
      name: 'Specialization',
      items: [
        {
          name: 'FDFS',
          href: '/specialization/financial-services',
        },
        { name: 'TBCG', href: '/specialization/technology' },
      ],
    },
  ],
  pages: [
    { name: 'Careers', href: 'https://osmiumcg.notion.site/OCG-Public-Wiki-f0538b6b26d449039b937c6a0f52ef02' },
    { name: 'Contact', href: '/contact-us' },
  ],
}

export const language = [
  {
    name: 'English',
    href: '*',
    locale: 'en-US',
  },
  {
    name: '繁體中文',
    href: '*',
    locale: 'zh-HK',
  },
  {
    name: '简体中文',
    href: '*',
    locale: 'zh-CN',
  },
  {
    name: '日本語',
    href: '*',
    locale: 'ja-JP',
  },
]
