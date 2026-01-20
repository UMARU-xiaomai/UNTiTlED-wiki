import { defineConfig } from '@lando/vitepress-theme-default-plus/config';

export default defineConfig({
  base: '/UNTiTlED-wiki/',
  lang: 'zh-CN',
  title: 'UNTiTlED Wiki',
  description: '未界音律UNTiTlED指南',

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],

    darkMode: true
  }
})
