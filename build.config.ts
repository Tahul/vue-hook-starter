import consola from 'consola'
import { copySync } from 'fs-extra'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['@nuxt/schema', '@nuxt/schema-edge', '@nuxt/kit', '@nuxt/kit-edge', 'nuxt', 'nuxt-edge', 'nuxt3', 'vue'],
  entries: [
    // Plugin
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'esm',
      ext: 'mjs',
    },
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'cjs',
      ext: 'cjs',
    },
    // Nuxt
    {
      input: 'src/nuxt/module.ts',
      outDir: 'dist',
      name: 'nuxt',
      format: 'esm',
      ext: 'mjs',
    },
    {
      input: 'src/nuxt/module.ts',
      outDir: 'dist',
      name: 'nuxt',
      format: 'cjs',
      ext: 'cjs',
    },
  ],
  hooks: {
    'build:done': () => {
      copySync('src/nuxt/runtime', 'dist/runtime')

      consola.info('Nuxt runtime copied to `dist/`!')
    },
  },
})
