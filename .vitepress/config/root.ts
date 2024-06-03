export default {
  label: '中文',
  lang: 'zh-CN',
  link: '/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '案例', link: 'pages/markdown-examples' }
    ],
    sidebar: [
      {
        text: '案例',
        items: [
          { text: 'Markdown 案例', link: 'pages/markdown-examples' },
          { text: 'Runtime API 案例', link: 'pages/api-examples' }
        ]
      }
    ]
  }
}

export const search = {
  root: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        displayDetails: '显示详细信息',
        backButtonTitle: '返回',
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭'
        }
      }
    }
  }
}
