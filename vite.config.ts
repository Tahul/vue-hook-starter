import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'demo/',
  plugins: [vue()],
  test: {
    include: ['**/*.spec.ts'],
  },
})
