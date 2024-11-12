import type { App } from 'vue'
import type { VueComposableStarterPluginOptions } from '../types'
import { resolve } from 'node:path'
import { addImportsDir } from '@nuxt/kit'

export const VueComposableStarterPlugin = {
  install(app: App, options?: VueComposableStarterPluginOptions) {
    // app.provide(EXAMPLE, options?.example)

    // Add auto imports
    addImportsDir(resolve('./runtime/composables'))

    // Register <Motion> component
    // app.component('Motion', MotionComponent)

    // Register <MotionGroup> component
    // app.component('MotionGroup', MotionGroupComponent)
  },
}

export default VueComposableStarterPlugin
