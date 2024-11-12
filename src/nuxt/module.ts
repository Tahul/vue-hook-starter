import { addAutoImport, createResolver, defineNuxtModule, resolveModule } from '@nuxt/kit'

export interface ModuleOptions {}

const DEFAULTS: ModuleOptions = {}

const CONFIG_KEY = 'vue-composable-starter'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-composable-starter',
    configKey: CONFIG_KEY,
    compatibility: {
      nuxt: '>=3.0.0',
      bridge: true,
    },
  },
  defaults: DEFAULTS,
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const resolveRuntimeModule = (path: string) => resolveModule(path, { paths: resolve('./runtime') })

    // Add auto imports
    addAutoImport([{ name: 'useToggle', as: 'useToggle', from: resolveRuntimeModule('../../index') }])
  },
})

interface ModulePublicRuntimeConfig {}

interface ModulePrivateRuntimeConfig {}

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      'vue-composable-starter': ModulePublicRuntimeConfig
    }
    privateRuntimeConfig?: {
      'vue-composable-starter': ModulePrivateRuntimeConfig
    }
  }
}
