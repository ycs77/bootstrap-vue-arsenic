import BMenu from './menu'
import { registerComponents } from '../../utils/plugins'

const components = {
  BMenu
}

export default {
  install(Vue) {
    registerComponents(Vue, components)
  }
}
