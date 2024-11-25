import type { App } from 'vue'
import type { VueComposableStarterPluginOptions } from '../types'
import { resolve } from 'node:path'
import { addImportsDir } from '@nuxt/kit'
import ToggleComponent from '../components/Toggle'

export const VueComposableStarterPlugin = {
  install(app: App, _options?: VueComposableStarterPluginOptions) {
    // app.provide(EXAMPLE, options?.example)

    // Add auto imports
    addImportsDir(resolve('./runtime/composables'))

    app.component('Toggle', ToggleComponent)
  },
}

export default VueComposableStarterPlugin
