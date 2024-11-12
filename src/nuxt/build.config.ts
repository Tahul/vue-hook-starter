import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // TODO: check if this is the correct value
  externals: [
    'vue-composable-starter',
    '@nuxt/kit',
    '@nuxt/schema',
    'nuxt3',
    'nuxt',
    'vue',
    'defu',
    'csstype',
    '@vueuse/shared',
    'framesync',
    'style-value-types',
    '@vue/compiler-core',
    '@babel/parser',
    '@vue/shared',
    '@vueuse/core',
  ],
})
