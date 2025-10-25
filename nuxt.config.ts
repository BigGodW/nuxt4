// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   nitro: {
    preset: 'node-server' // 或根据 EdgeOne 要求调整
  },
   app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Nuxt4 EdgeOne App',
      htmlAttrs: { lang: 'zh' }
    }
  },
  typescript: {
    typeCheck: true
  },
  
})
