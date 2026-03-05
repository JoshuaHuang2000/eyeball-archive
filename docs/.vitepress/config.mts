import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EYEBALL ARCHIVE",
  description: "观测者终端 / 机密档案库",
  appearance: 'dark', // 强制暗黑模式
  themeConfig: {
    nav: [
      { text: '主终端', link: '/' },
      { text: '普罗米修斯-以太计划', link: '/prometheus/' }
    ],
    sidebar: {
      '/prometheus/': [
        {
          text: '机密档案',
          items: [
            { text: '光之脊：撕裂的张拉整体', link: '/prometheus/spine' }
          ]
        }
      ]
    }
  }
})
