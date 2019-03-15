import BAvatar from './avatar'
import { registerComponents } from '../../utils/plugins'

const components = {
  BAvatar
}

export default {
  install(Vue) {
    registerComponents(Vue, components)
  }
}
