// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "스튜디오두비",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=2",
      bodyAttrs: {
        class: 'bg-background',
      },
      meta: [
        { 
          hid: "description",
          name: "description",
          content: "Nuxt Shopping - 품질 좋은 다양한 상품들을 만나보실 수 있습니다."
        },
        {
          name: "keywords",
          content: "쇼핑, 의류, 운동, 악세사리",
        },
        { name: "author", content: "author" },
        { name: "og:type", property: "website" },
        { name: "og:site_name", property: "Nuxt shopping" },
        { name: "og:title", property: "og:title", content: "Nuxt Shopping" },
        {
          name: "og:description",
          property: "og:description",
          content:
            "Nuxt Shopping - 품질 좋은 다양한 상품들을 만나보실 수 있습니다.",
        },
        {
          name: "og:image",
          property: "og:image",
          content: "image주소",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Nuxt Shopping" },
        {
          name: "twitter:description",
          content:
            "Nuxt Shopping - 품질 좋은 다양한 상품들을 만나보실 수 있습니다.",
        },
        { name: "twitter:image", content: "image주소" },
      ],  
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
        { rel: 'preload', href: '/fonts/Bungee-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/Bungee-Regular.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-Thin.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-ExtraLight.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-Light.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-Regular.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-Medium.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-SemiBold.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
        { rel: 'preload', href: '/fonts/IBMPlexSansKR-Bold.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous', },
      ],
    },
  },
  compatibilityDate: '2025-01-13',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    'dayjs-nuxt',
    '@nuxt/eslint',
  ],
  plugins: [
    '~/plugins/dayjs.ts',
    '~/plugins/eslint.ts',
    '~/plugins/lodash.ts',
    '~/plugins/tailwind.ts'
  ],
  css: ['~/assets/styles/main.scss'],
})