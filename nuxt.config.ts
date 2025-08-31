// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuetify.ts',{ src: '~/plugins/typed.js', mode: 'client' }
  ],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: ['nuxt-icon',"@nuxtjs/tailwindcss",'@nuxtjs/color-mode',(_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})