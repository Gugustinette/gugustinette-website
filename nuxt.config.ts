// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/content", "@nuxt/image"],

  content: {
    highlight: {
      theme: {
        default: 'catppuccin-mocha',
        dark: 'catppuccin-mocha',
      }
    },
  },
})
