//
// Utility Plugin for setting the configuration
//
import { setConfig } from './utils/config'

const BAConfigPlugin = {
  install(Vue, config = {}) {
    setConfig(config)
  }
}

export default BAConfigPlugin
