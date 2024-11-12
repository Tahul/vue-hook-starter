import type { App } from 'vue'
import { VueComposableStarterPluginOptions } from '../types'
import { addImportsDir } from '@nuxt/kit'
import { resolve } from 'node:path'

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
