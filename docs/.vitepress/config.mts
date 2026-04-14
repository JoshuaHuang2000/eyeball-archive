import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EYEBALL ARCHIVE",
  description: "观测者终端",
  appearance: 'dark',

  themeConfig: {
    // 顶部导航栏 (横向菜单)
    nav: [
      { text: '主终端', link: '/' },
      { text: '科幻作品', link: '/prometheus/lore/the-birth-of-suns' },
      { text: '航空与工程学笔记', link: '/aviation/stealth-misconceptions' },
      { text: '评注与书评', link: '/commentary/hail-mary' },
      { text: '客座文章', link: '/guest-articles/iran-nuclear-program-1' },
      { text: '小工具', link: '/tools/aero-performance-calculator' }
    ],

    // 左侧目录树 (采用对象结构，实现双区隔离)
    sidebar: {
      // 扇区 Alpha：科幻作品（普罗米修斯 + 挽救计划）
      '/prometheus/': [
        {
          text: '🔥 普罗米修斯-以太计划',
          collapsed: false,
          items: [
            { text: '第1阶段：前五座”人造太阳”的诞生', link: '/prometheus/lore/the-birth-of-suns' },
            { text: '第2阶段：月球工业革命的崛起', link: '/prometheus/lore/lunar-industrial-revolution' },
            { text: '时代专题：追逐太阳-一块光伏瓦的三万六千公里奥德赛', link: '/prometheus/lore/pv-odyssey'},
            { text: '初代太空电站构想白皮书', link: '/prometheus/lore/gen-1-blueprint' },
            { text: '接口：第一阶段的巴别塔', link: '/prometheus/incidents/the-babel' },
            { text: '切换点：毫秒边缘的绞肉机', link: '/prometheus/incidents/the-handoff' },
            { text: '灯塔守望者：莫哈韦沙漠的绝对禁区', link: '/prometheus/incidents/lighthouse-keeper' },
            { text: '星舰柔性辐射防热盾系统 (F-TPS)', link: '/prometheus/tech/starship-f-tps' }
          ]
        },
        {
          text: '🚀 挽救计划：替代宇宙',
          collapsed: false,
          items: [
            { text: '深空纪元：世界观设定', link: '/hail_mary_alt/deep-space-era' },
            { text: '分歧点：叙事正文', link: '/hail_mary_alt/point-of-divergence' }
          ]
        }
      ],
      '/hail_mary_alt/': [
        {
          text: '🔥 普罗米修斯-以太计划',
          collapsed: false,
          items: [
            { text: '第1阶段：前五座”人造太阳”的诞生', link: '/prometheus/lore/the-birth-of-suns' },
            { text: '第2阶段：月球工业革命的崛起', link: '/prometheus/lore/lunar-industrial-revolution' },
            { text: '时代专题：追逐太阳-一块光伏瓦的三万六千公里奥德赛', link: '/prometheus/lore/pv-odyssey'},
            { text: '初代太空电站构想白皮书', link: '/prometheus/lore/gen-1-blueprint' },
            { text: '接口：第一阶段的巴别塔', link: '/prometheus/incidents/the-babel' },
            { text: '切换点：毫秒边缘的绞肉机', link: '/prometheus/incidents/the-handoff' },
            { text: '灯塔守望者：莫哈韦沙漠的绝对禁区', link: '/prometheus/incidents/lighthouse-keeper' },
            { text: '星舰柔性辐射防热盾系统 (F-TPS)', link: '/prometheus/tech/starship-f-tps' }
          ]
        },
        {
          text: '🚀 挽救计划：替代宇宙',
          collapsed: false,
          items: [
            { text: '深空纪元：世界观设定', link: '/hail_mary_alt/deep-space-era' },
            { text: '分歧点：叙事正文', link: '/hail_mary_alt/point-of-divergence' }
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

      // 扇区 Epsilon：当网址带有 /tools/ 时，显示小工具侧边栏
      '/tools/': [
        {
          text: '🔧 小工具',
          collapsed: false,
          items: [
            { text: '航空性能计算器', link: '/tools/aero-performance-calculator' }
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
      message: 'DATA STREAM ENCRYPTED // OBSERVER_PROTOCOL_ACTIVE  ·  私信联系：<a href="mailto:eyeball@eyeball-archive.com">eyeball@eyeball-archive.com</a>',
      copyright: 'Copyright © 2026 EYEBALL-ARCHIVE. All Rights Reserved.'
    },

    search: {
      provider: 'local'
    }
  }
})