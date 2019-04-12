import BAvatar from './avatar'
import { mount } from '@vue/test-utils'

describe('avatar', () => {
  it('should have base classes', async () => {
    const wrapper = mount(BAvatar)
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).toContain('avatar-secondary')
    expect(wrapper.classes()).not.toContain('avatar-rounded')
    expect(wrapper.classes()).not.toContain('avatar-square')
  })

  it('should have default slot content', async () => {
    const wrapper = mount(BAvatar, {
      slots: {
        default: 'A'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.text()).toBe('A')
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).toContain('avatar-secondary')
    expect(wrapper.classes()).not.toContain('avatar-rounded')
    expect(wrapper.classes()).not.toContain('avatar-square')
  })

  it('should apply size', async () => {
    const wrapper = mount(BAvatar, {
      propsData: {
        size: '4rem'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).toContain('avatar-secondary')
    expect(wrapper.classes()).not.toContain('avatar-rounded')
    expect(wrapper.classes()).not.toContain('avatar-square')
    expect(wrapper.attributes().style).toBe(
      'font-size: calc(4rem / 2); width: 4rem; height: 4rem; max-width: 4rem; max-height: 4rem;'
    )
  })

  it('should apply font size', async () => {
    const wrapper = mount(BAvatar, {
      propsData: {
        'font-size': '1.75rem'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).toContain('avatar-secondary')
    expect(wrapper.classes()).not.toContain('avatar-rounded')
    expect(wrapper.classes()).not.toContain('avatar-square')
    expect(wrapper.attributes().style).toBe('font-size: 1.75rem;')
  })

  it('should apply variant class', async () => {
    const wrapper = mount(BAvatar, {
      propsData: {
        variant: 'danger'
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('avatar-danger')
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).not.toContain('avatar-rounded')
    expect(wrapper.classes()).not.toContain('avatar-square')
  })

  it('should apply rounded class', async () => {
    const wrapper = mount(BAvatar, {
      propsData: {
        rounded: true
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('avatar-rounded')
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).toContain('avatar-secondary')
    expect(wrapper.classes()).not.toContain('avatar-square')
  })

  it('should apply square class', async () => {
    const wrapper = mount(BAvatar, {
      propsData: {
        square: true
      }
    })
    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('avatar-square')
    expect(wrapper.classes()).toContain('avatar')
    expect(wrapper.classes()).toContain('avatar-secondary')
    expect(wrapper.classes()).not.toContain('avatar-rounded')
  })
})
