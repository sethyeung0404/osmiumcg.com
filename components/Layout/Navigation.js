export const navigation = {
  categories: [
    {
      id: 'about',
      name: 'About',
      featured: [
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            '',
          imageAlt:
            '',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Overview', href: '/about_us/overview' },
            { name: 'Our Philosophy', href: '/about_us/our-philosophy' },
            { name: 'Sustainability', href: '/about_us/sustainability' },
          ],
        },
      ],
    },
    {
      id: 'solutions',
      name: 'Solutions',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
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
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'specialization',
      name: 'Specialization',
      featured: [],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            {
              name: 'Banking and Financial Services Recruitment',
              href: '/specialization/banking-financial-services',
            },
            { name: 'TMT Recruitment', href: '/specialization/tmt' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact_us' },
  ],
}

export const language = [
  {
    name: 'English',
    href: '/locale/en',
  },
  {
    name: '繁体中文',
    href: '/locale/zh_HK',
  },
  {
    name: '简體中文',
    href: '/locale/zh_CN',
  },
  {
    name: '日本語',
    href: '/locale/ja_JP',
  },
]
