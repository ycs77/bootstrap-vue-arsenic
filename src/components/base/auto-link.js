import { componentIsExist } from '~/util'

export default {
  name: 'AutoLink',
  functional: true,
  props: {
    // Options:
    // * NOT SET (auto):
    //   If nuxt-link exist, auto use it; next is router-link; last is tag a(original link).
    // * router-link
    // * nuxt-link
    // * a
    type: String,

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

    if (
      context.props.type === 'nuxt-link' ||
      (!context.props.type && componentIsExist('nuxt-link'))
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
      (!context.props.type && componentIsExist('router-link'))
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
      !context.props.type
    ) {
      // Original link
      name = 'a'
      context.data = Object.assign({}, context.data, {
        attrs: {
          href: context.props.to,
          target: context.props.target
        }
      })
    }

    return h(name, context.data, context.children)
  }
}
