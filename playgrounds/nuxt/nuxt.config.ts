import { resolve } from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  features:{
    devLogs: false
  },
  alias: {
    'vue-composable-starter': resolve(__dirname, '../../src/index.ts'),
    'vue-composable-starter/nuxt': resolve(__dirname, '../../src/nuxt/src/module.ts'),
  },
  modules: [
    'vue-composable-starter/nuxt',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    includeWorkspace: true,
  },
})
