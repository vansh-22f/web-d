// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  // do LayoutTransition instead of page one for layout transition
  devtools: { enabled: false },
  modules:['@nuxtjs/tailwindcss']
})
