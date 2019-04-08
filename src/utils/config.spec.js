import {
  setConfig,
  resetConfig,
  getConfig,
  getDefaults,
  getConfigValue,
  getComponentConfig,
  getBreakpoints,
  getBreakpointsUp,
  getBreakpointsDown
} from './config'
import looseEqual from './loose-equal'
import { createLocalVue } from '@vue/test-utils'
import BootstrapVueArsenic from '../../src'
import AvatarPlugin from '../components/avatar'
import BAConfigPlugin from '../ba-config'

describe('utils/config', () => {
  afterEach(() => {
    resetConfig()
  })

  it('getConfigValue() works', async () => {
    expect(getConfigValue('breakpoints')).toEqual(['xs', 'sm', 'md', 'lg', 'xl'])
    // Should return a deep clone
    expect(getConfigValue('breakpoints')).not.toBe(getConfigValue('breakpoints'))
    // Should return null for not found
    expect(getConfigValue('foo.bar[1].baz')).toBe(null)
  })

  it('getComponentConfig() works', async () => {
    // Specific component config key
    expect(getComponentConfig('BAvatar', 'variant')).toEqual('secondary')
    // Component's full config
    expect(getComponentConfig('BAvatar')).toEqual(getDefaults().BAvatar)
    // Should return a deep clone for full config
    expect(getComponentConfig('BAvatar')).not.toBe(getDefaults().BAvatar)
    // Should return empty object for not found component
    expect(getComponentConfig('foobar')).toEqual({})
    // Should return null for not found component key
    expect(getComponentConfig('BAvatar', 'foobar')).toBe(null)
  })

  it('getBreakpoints() works', async () => {
    expect(getBreakpoints()).toEqual(['xs', 'sm', 'md', 'lg', 'xl'])
    // Should return a deep clone
    expect(getBreakpoints()).not.toBe(getBreakpoints())
  })

  it('getBreakpointsUp() works', async () => {
    expect(getBreakpointsUp()).toEqual(['', 'sm', 'md', 'lg', 'xl'])
    // Should return a deep clone
    expect(getBreakpointsUp()).not.toBe(getBreakpointsUp())
  })

  it('getBreakpointsDown() works', async () => {
    expect(getBreakpointsDown()).toEqual(['xs', 'sm', 'md', 'lg', ''])
    // Should return a deep clone
    expect(getBreakpointsDown()).not.toBe(getBreakpointsDown())
  })

  it('getDefaults() returns deep clone', async () => {
    const defaults = getDefaults()

    expect(Object.keys(defaults).length).toBeGreaterThan(1)
    expect(getDefaults()).toEqual(defaults)
    expect(getDefaults()).not.toBe(defaults)

    // Each key should be a clone (top level key test)
    expect(
      Object.keys(defaults).every(key => {
        // Should not point to the same reference
        const param = getConfigValue(key)
        return param !== defaults[key] && looseEqual(param, defaults[key])
      })
    ).toBe(true)

    // TODO: Test each nested key (if Array or plain Object)
  })

  it('getConfig() return current empty user config', async () => {
    expect(getConfig()).toEqual({})
  })

  it('setConfig() works', async () => {
    const testConfig = {
      BAvatar: { variant: 'danger' }
    }
    const testBreakpoints = {
      breakpoints: ['aa', 'bb', 'cc', 'dd', 'ee']
    }

    const defaults = getDefaults()

    expect(getConfig()).toEqual({})

    // Try a conponent config
    setConfig(testConfig)
    expect(getConfig()).toEqual(testConfig)
    expect(getConfig()).not.toBe(testConfig)
    expect(getComponentConfig('BAvatar')).toEqual(testConfig.BAvatar)
    expect(getComponentConfig('BAvatar', 'variant')).toEqual('danger')

    // Try breakpoint config (should merge)
    setConfig(testBreakpoints)
    expect(getBreakpoints()).toEqual(testBreakpoints.breakpoints)
    expect(getBreakpoints()).not.toBe(testBreakpoints.breakpoints)
    expect(getConfigValue('breakpoints')).toEqual(testBreakpoints.breakpoints)
    // should leave previous config
    expect(getComponentConfig('BAvatar', 'variant')).toEqual('danger')
    // Should merge config
    expect(getConfig()).toEqual({ ...testConfig, ...testBreakpoints })

    // Reset the configuration
    resetConfig()
    expect(getConfig()).toEqual({})
    expect(getComponentConfig('BAvatar', 'variant')).toEqual('secondary')
    expect(getComponentConfig('BAvatar', 'variant')).toEqual(defaults.BAvatar.variant)
    expect(getBreakpoints()).toEqual(['xs', 'sm', 'md', 'lg', 'xl'])
  })

  it('config via Vue.use(BootstrapVueArsenic) works', async () => {
    const testConfig = {
      BAvatar: { variant: 'foobar' }
    }
    const localVue = createLocalVue()

    expect(getConfig()).toEqual({})

    localVue.use(BootstrapVueArsenic, testConfig)
    expect(getConfig()).toEqual(testConfig)

    // Reset the configuration
    resetConfig()
    expect(getConfig()).toEqual({})
  })

  it('config via Vue.use(ComponentPlugin) works', async () => {
    const testConfig = {
      BAvatar: { variant: 'foobar' }
    }
    const localVue = createLocalVue()

    expect(getConfig()).toEqual({})

    localVue.use(AvatarPlugin, testConfig)
    expect(getConfig()).toEqual(testConfig)

    // Reset the configuration
    resetConfig()
    expect(getConfig()).toEqual({})
  })

  it('config via Vue.use(BAConfig) works', async () => {
    const testConfig = {
      BAvatar: { variant: 'foobar' }
    }
    const localVue = createLocalVue()

    expect(getConfig()).toEqual({})

    localVue.use(BAConfigPlugin, testConfig)
    expect(getConfig()).toEqual(testConfig)

    // Reset the configuration
    resetConfig()
    expect(getConfig()).toEqual({})
  })
})
