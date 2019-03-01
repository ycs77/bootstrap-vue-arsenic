import { componentIsExist } from '~/util'

export default {
  name: 'AutoLink',
  functional: true,
  props: {
    // Options:
    // * auto:
    //   It will automatically find if there is a `nuxt-link` or `router-link`,
    //   if it is not found, the tag <a> will be used.
    // * router-link
    // * nuxt-link
    // * a
    // * none
    type: {
      type: String,
      default: 'auto',
      validator(value) {
        return [
          'auto',
          'router-link',
          'nuxt-link',
          'a',
          'none'
        ].some(v => v === value)
      }
    },

    to: [String, Object],

    // Original link
    target: String,

    // Router link
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: [String, Array],
      default: 'click'
    },

    // Nuxt link props
    noPrefetch: {
      type: Boolean,
      default: false
    },
    prefetchedClass: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    let name

    if (context.props.to) {
      if (
        context.props.type === 'nuxt-link' ||
        (context.props.type === 'auto' && componentIsExist('nuxt-link'))
      ) {
        // Nuxt link
        name = 'nuxt-link'
        context.data = Object.assign({}, context.data, {
          props: {
            to: context.props.to,
            noPrefetch: context.props.noPrefetch,
            prefetchedClass: context.props.prefetchedClass
          }
        })

      } else if (
        context.props.type === 'router-link' ||
        (context.props.type === 'auto' && componentIsExist('router-link'))
      ) {
        // Router link
        name = 'router-link'
        context.data = Object.assign({}, context.data, {
          props: {
            to: context.props.to,
            tag: context.props.tag,
            exact: context.props.exact,
            append: context.props.append,
            replace: context.props.replace,
            activeClass: context.props.activeClass,
            exactActiveClass: context.props.exactActiveClass,
            event: context.props.event
          }
        })

      } else if (
        context.props.type === 'a' ||
        context.props.type === 'auto'
      ) {
        // Original link
        name = 'a'
        context.data = Object.assign({}, context.data, {
          attrs: {
            href: context.props.to,
            target: context.props.target
          }
        })

      } else if (
        context.props.type === 'none'
      ) {
        // None
        name = 'div'

      } else {
        throw new Error('Component auto link prop "type" is invalid.')
      }
    } else {
      // None
      name = 'div'
    }

    return h(name, context.data, context.children)
  }
}
