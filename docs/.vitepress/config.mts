import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EYEBALL ARCHIVE",
  description: "观测者终端 / 机密档案库",
  appearance: 'dark', // 强制暗黑模式

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '主终端', link: '/' },
      { text: '编年史', link: '/lore/the-birth-of-suns' },
      { text: '事故与日志', link: '/incidents/the-babel' },
      { text: '技术库', link: '/tech/starship-f-tps' }
    ],

    // 左侧目录树 (极其重要，这里决定了阅读顺序)
    sidebar: [
      {
        text: '📁 第一部分：世界观与编年史',
        items: [
          { text: '第1阶段：前五座“人造太阳”的诞生', link: '/lore/the-birth-of-suns' },
          { text: '第2阶段：月球工业革命的崛起', link: '/lore/lunar-industrial-revolution' },
          { text: '时代专题：追逐太阳-一块光伏瓦的三万六千公里奥德赛', link: 'lore/pv-odyssey'},
          { text: '绝密：初代太空电站构想白皮书', link: '/lore/gen-1-blueprint' }
        ]
      },
      {
        text: '📁 第二部分：工程与事故日志',
        items: [
          { text: '接口：第一阶段的巴别塔', link: '/incidents/the-babel' },
          { text: '切换点：毫秒边缘的绞肉机', link: '/incidents/the-handoff' },
          { text: '灯塔守望者：莫哈韦沙漠的绝对禁区', link: '/incidents/lighthouse-keeper' },
          // 等你把另外几篇发上去，只要在这里加一行代码就行：
          { text: '产能跃迁：长三角的流水线风暴', link: '/incidents/capacity-jump' }
        ]
      },
      {
        text: '📁 第三部分：技术提案库',
        items: [
          { text: '星舰柔性辐射防热盾系统 (F-TPS)', link: '/tech/starship-f-tps' }
        ]
      }
    ],

    // 页脚说明
    footer: {
      message: 'DATA STREAM ENCRYPTED // AETHER_NET_PROTOCOL_V4.2',
      copyright: 'Copyright © 2026 EYEBALL-ARCHIVE. All Rights Reserved.'
    },

    // 开启右上角的极速本地搜索功能
    search: {
      provider: 'local'
    }
  }
})
