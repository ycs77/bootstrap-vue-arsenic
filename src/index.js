import * as componentPlugins from './components'
// import * as directivePlugins from './directives'
import { vueUse } from './utils/plugins'

const VuePlugin = {
  install(Vue, options) {
    // Register component plugins
    for (let plugin in componentPlugins) {
      let componentOptions
      if (typeof options === 'object') {
        if (plugin in options) {
          componentOptions = options[plugin]
        }
      }

      Vue.use(componentPlugins[plugin], componentOptions)
    }

    // // Register directive plugins
    // for (let plugin in directivePlugins) {
    //   Vue.use(directivePlugins[plugin])
    // }
  }
}

vueUse(VuePlugin)

export default VuePlugin
