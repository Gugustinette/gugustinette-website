// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-25',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/content", "@nuxt/image"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'catppuccin-mocha',
            dark: 'catppuccin-mocha',
          }
        },
      }
    }
  },
})
