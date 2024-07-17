import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Gis",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local', // 开启站内搜索 - 这里的搜索不是根据内容，而是根据标题进行搜索匹配
    },
    outline: {
      level: "deep", // 显示2-6级标题
      label: '大纲' // 文字显示
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '指引',
        items: [
          { text: 'Markdown基础用法', link: '/markdown-examples' },
          { text: 'vitePress基础配置', link: '/api-examples' }
        ]
      },
      {
        text: 'ArcGis for javascript Api',
        items: [
          { text: '开始创建', link: '/ArcGisViews/arcgisforjsApi' },
          { text: '画点', link: '/ArcGisViews/drawPointApi' },
        ]
      },
      {
        text: 'mapbox Api',
        items: [
          { text: 'GisBox文档', link: '/mapboxApi' },
        ]
      }
    ],
    docFooter: {
      prev: '上一页', // 可以随意配置喜欢的
      next: '下一页',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
