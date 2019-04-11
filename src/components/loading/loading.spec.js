import Loading from './loading'
import LoadingPlugin from '../loading'
import BSpinner from 'bootstrap-vue/es/components/spinner/spinner'
import { resetConfig } from '../../utils/config'
import StubComponent from '../../../tests/stub-component.vue'
import { createLocalVue, mount } from '@vue/test-utils'

describe('loading', () => {
  it('hidden loading and spinner renders comment node', async () => {
    const wrapper = mount(Loading)
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.isEmpty()).toBe(true)
    expect(wrapper.html()).not.toBeDefined()

    wrapper.destroy()
  })

  it('visible loading and spinner has default class names', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: true
      },
      stubs: {
        BSpinner
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('loading')
    expect(wrapper.classes()).not.toContain('fade')
    expect(wrapper.classes()).not.toContain('show')
    expect(wrapper.classes()).not.toContain('loading-fixed')

    const spinner = wrapper.find(BSpinner)
    expect(spinner.is(BSpinner)).toBe(true)
    expect(spinner.classes()).toContain('spinner-border')
    expect(spinner.classes()).toContain('text-primary')
    expect(spinner.classes()).not.toContain('spinner-border-sm')

    wrapper.destroy()
  })

  it('shoud have default slot content', async () => {
    const wrapper = mount(Loading, {
      slots: {
        default: 'Loading...'
      },
      propsData: {
        show: true
      },
      stubs: {
        BSpinner
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.text()).toBe('Loading...')
    expect(wrapper.find(BSpinner).exists()).toBe(false)

    wrapper.destroy()
  })

  it('shoud apply variant class', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: true,
        variant: 'danger'
      },
      stubs: {
        BSpinner
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)

    const spinner = wrapper.find(BSpinner)
    expect(spinner.is(BSpinner)).toBe(true)
    expect(spinner.classes()).toContain('spinner-border')
    expect(spinner.classes()).toContain('text-danger')

    wrapper.destroy()
  })

  it('shoud have spinner type class', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: true,
        type: 'grow'
      },
      stubs: {
        BSpinner
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)

    const spinner = wrapper.find(BSpinner)
    expect(spinner.is(BSpinner)).toBe(true)
    expect(spinner.classes()).toContain('spinner-grow')
    expect(spinner.classes()).toContain('text-primary')

    wrapper.destroy()
  })

  it('shoud have spinner small class', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: true,
        small: true
      },
      stubs: {
        BSpinner
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)

    const spinner = wrapper.find(BSpinner)
    expect(spinner.is(BSpinner)).toBe(true)
    expect(spinner.classes()).toContain('spinner-border')
    expect(spinner.classes()).toContain('spinner-border-sm')
    expect(spinner.classes()).toContain('text-primary')

    wrapper.destroy()
  })

  it('should apply loading fixed', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: true,
        fixed: true
      },
      stubs: {
        BSpinner
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('loading-fixed')
    expect(wrapper.classes()).toContain('loading')
    expect(wrapper.classes()).not.toContain('fade')
    expect(wrapper.classes()).not.toContain('show')

    wrapper.destroy()
  })

  it('should have class fade when prop fade=true', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: true,
        fade: true
      },
      stubs: {
        BSpinner,
        // the builtin stub doesn't execute the transition hooks
        // so we let it use the real transition component
        transition: false
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('loading')
    expect(wrapper.classes()).toContain('fade')
    expect(wrapper.classes()).toContain('show')

    wrapper.destroy()
  })

  it('fade transition works', async () => {
    const wrapper = mount(Loading, {
      propsData: {
        show: false,
        fade: true
      },
      stubs: {
        BSpinner,
        // the builtin stub doesn't execute the transition hooks
        // so we let it use the real transition component
        transition: false
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.html()).not.toBeDefined()

    wrapper.setProps({
      show: true
    })

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('loading')
    expect(wrapper.classes()).toContain('fade')
    expect(wrapper.classes()).toContain('show')

    wrapper.setProps({
      show: false
    })

    await new Promise(resolve => requestAnimationFrame(resolve))

    expect(wrapper.isEmpty()).toBe(true)
    expect(wrapper.html()).not.toBeDefined()

    wrapper.destroy()
  })

  it('should apply global config slot on string', async () => {
    const localVue = createLocalVue()
    localVue.use(LoadingPlugin, {
      BLoading: {
        slot: 'Loading...'
      }
    })

    const wrapper = mount(Loading, {
      propsData: {
        show: true
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.text()).toBe('Loading...')
    expect(wrapper.find(BSpinner).exists()).toBe(false)

    wrapper.destroy()
    resetConfig()
  })

  it('should apply global config slot on component', async () => {
    const localVue = createLocalVue()
    localVue.use(LoadingPlugin, {
      BLoading: {
        slot: StubComponent
      }
    })

    const wrapper = mount(Loading, {
      propsData: {
        show: true
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.find(StubComponent).exists()).toBe(true)
    expect(wrapper.find(BSpinner).exists()).toBe(false)

    wrapper.destroy()
    resetConfig()
  })
})
