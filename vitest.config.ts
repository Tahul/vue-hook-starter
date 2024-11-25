import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  root: __dirname,
  plugins: [
    vue()
  ],
  define: {
    dev: JSON.stringify(false),
  },
  test: {
    environment: 'happy-dom',
    include: ['./tests/**/*.spec.ts'],
    // Temporarily disable `transform` test
    exclude: ['./tests/transform.spec.ts'],
  },
  resolve: {
    alias: [
      {
        find: 'vue-composable-starter',
        replacement: resolve(__dirname, './src/index.ts'),
      },
    ],
  },
})