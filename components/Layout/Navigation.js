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
    { name: 'News', href: 'https://osmiumcg.notion.site/News-and-Articles-5d3c73acbcce4d5b8446e01a4f030199' },
    { name: 'Careers', href: 'https://osmiumcg.notion.site/OCG-Job-Board-99b46a83c23947a5a9a3fbfe8fff5dfc' },
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
