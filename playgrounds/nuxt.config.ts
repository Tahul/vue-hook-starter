import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt3'
import MyModule from '../src/nuxt/module'

export default defineNuxtConfig({
  // Alias for local development
  alias: {
    'vue-composable-starter': resolve(__dirname, '../src/index.ts'),
  },
  // Import module from src
  modules: [MyModule],
})
