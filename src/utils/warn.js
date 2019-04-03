import { getNoWarn } from './env'

/**
 * Log a warning message to the console with bootstrap-vue-arsenic formatting sugar.
 * @param {string} message
 */
/* istanbul ignore next */
const warn = message => {
  if (!getNoWarn()) {
    console.warn(`[BootstrapVueArsenic warn]: ${message}`)
  }
}

export default warn
