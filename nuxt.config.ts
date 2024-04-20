// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/': {
        prerender: false
      }
    }
  },
  devtools: { enabled: true }
})