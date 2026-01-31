import {defineConfig} from '@lando/vitepress-theme-default-plus/config';

export default defineConfig({
  base: '/wiki/',
  lang: 'zh-CN',
  title: 'UNTiTlED Wiki',
  description: '未界音律UNTiTlED指南',
      head: [
      // 设置 favicon 图标
      ['link', { rel: 'icon', href: '/wiki/img/UNTiTlED_Logo_Icon.ico' }],
    ],

  themeConfig: {
    logo: '/img/UNTiTlED_Logo_Icon.ico',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '回到官网', link: 'https://untitledrhythm.online/' },
      { text: '首页', link: '/' },
      { text: '游玩指南', link: '/guide' },
      { text: '游戏玩法', link: '/game_play' },
      { text: '游戏剧情', link: '/story' },
      { text: '谱面创作', link: '/chart_making' },
      { text: '规章制度', link: '/rules' },
      { text: '新闻动态', link: '/news' },
      { text: '法律', link: '/legal' }
    ],

    darkMode: true

  },
});