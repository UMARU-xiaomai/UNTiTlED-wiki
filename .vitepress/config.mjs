import {defineConfig} from '@lando/vitepress-theme-default-plus/config';

export default defineConfig({
  base: '/wiki/',
  lang: 'zh-CN',
  title: 'UNTiTlED Wiki',
  description: '未界音律UNTiTlED指南',

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '游玩指南', link: '/guide' },
      { text: '谱面创作', link: '/chart_making' },
      { text: '法律', link: '/legal' }
    ],

    darkMode: true
  }
})