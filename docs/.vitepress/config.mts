import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EYEBALL ARCHIVE",
  description: "观测者终端 / 机密档案库",
  appearance: 'dark',

  themeConfig: {
    // 顶部导航栏 (横向菜单)
    nav: [
      { text: '主终端', link: '/' },
      { text: '普罗米修斯-以太计划', link: '/prometheus/lore/the-birth-of-suns' },
      { text: '航空与工程学笔记', link: '/aviation/stealth-misconceptions' },
      { text: '评注与书评', link: '/commentary/hail-mary' },
      { text: '客座文章', link: '/guest-articles/iran-nuclear-program-1' }
    ],

    // 左侧目录树 (采用对象结构，实现双区隔离)
    sidebar: {
      // 扇区 Alpha：当网址带有 /prometheus/ 时，显示这个侧边栏
      '/prometheus/': [
        {
          text: '📁 第一部分：世界观与编年史',
          collapsed: false,
          items: [
            { text: '第1阶段：前五座“人造太阳”的诞生', link: '/prometheus/lore/the-birth-of-suns' },
            { text: '第2阶段：月球工业革命的崛起', link: '/prometheus/lore/lunar-industrial-revolution' },
            { text: '时代专题：追逐太阳-一块光伏瓦的三万六千公里奥德赛', link: '/prometheus/lore/pv-odyssey'},
            { text: '绝密：初代太空电站构想白皮书', link: '/prometheus/lore/gen-1-blueprint' }
          ]
        },
        {
          text: '📁 第二部分：工程与事故日志',
          collapsed: false,
          items: [
            { text: '接口：第一阶段的巴别塔', link: '/prometheus/incidents/the-babel' },
            { text: '切换点：毫秒边缘的绞肉机', link: '/prometheus/incidents/the-handoff' },
            { text: '灯塔守望者：莫哈韦沙漠的绝对禁区', link: '/prometheus/incidents/lighthouse-keeper' }
          ]
        },
        {
          text: '📁 第三部分：技术提案库',
          collapsed: false,
          items: [
            { text: '星舰柔性辐射防热盾系统 (F-TPS)', link: '/prometheus/tech/starship-f-tps' }
          ]
        }
      ],

      // 扇区 Gamma：当网址带有 /commentary/ 时，显示评注侧边栏
      '/commentary/': [
        {
          text: '📝 评注与书评',
          collapsed: false,
          items: [
            { text: '《挽救计划》核心硬伤与替代方案推演', link: '/commentary/hail-mary' }
          ]
        }
      ],

      // 扇区 Delta：当网址带有 /guest-articles/ 时，显示客座文章侧边栏
      '/guest-articles/': [
        {
          text: '📰 客座文章',
          collapsed: false,
          items: [
            { text: '伊朗核计划到底怎么回事？(上)', link: '/guest-articles/iran-nuclear-program-1' }
          ]
        }
      ],

      // 扇区 Beta：当网址带有 /aviation/ 时，显示这个航空专区侧边栏
      '/aviation/': [
        {
          text: '✈️ 航空与工程物理笔记',
          collapsed: false,
          items: [
            { text: '澄清对隐身技术的常见误解', link: '/aviation/stealth-misconceptions' },
            { text: '飞机为什么能飞？航空史与物理', link: '/aviation/how-planes-fly' },
            { text: '空速、表速与涡扇引擎的谬误', link: '/aviation/aero-concepts' }
          ]
        }
      ]
    },

    footer: {
      message: 'DATA STREAM ENCRYPTED // OBSERVER_PROTOCOL_ACTIVE',
      copyright: 'Copyright © 2026 EYEBALL-ARCHIVE. All Rights Reserved.'
    },

    search: {
      provider: 'local'
    }
  }
})