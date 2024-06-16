export default {
  label: 'English',
  lang: 'en-US',
  link: '/en/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Examples', link: '/en/pages/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/en/pages/markdown-examples' },
          { text: 'Runtime API Examples', link: '/en/pages/api-examples' }
        ]
      },
      {
        text: 'nuxt',
        items: [{ text: 'nuxt + elysia', link: '/en/pages/nuxt/nuxt+elysia' }]
      }
    ]
  }
}

export const search = {}
