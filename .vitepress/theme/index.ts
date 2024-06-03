// @unocss-include
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import 'uno:components.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-top': () => h('div', { class: 'only-badge-green mb10' }, 'This is the aside-top slot')
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
