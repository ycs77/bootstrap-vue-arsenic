import { getComponentConfig } from '../../utils/config'
import { requestAF } from '../../utils/dom'

const NAME = 'BLoading'

export default {
  name: NAME,
  model: {
    prop: 'show',
    event: 'input'
  },
  props: {
    variant: {
      type: String,
      default: () => getComponentConfig(NAME, 'variant')
    },
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: () => getComponentConfig(NAME, 'type')
    },
    small: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: () => getComponentConfig(NAME, 'fade')
    },
    fixed: {
      type: Boolean,
      default: () => getComponentConfig(NAME, 'fixed')
    }
  },
  data() {
    return {
      showClass: this.fade && this.show
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('started')
      } else {
        this.$emit('ended')
      }
    }
  },
  methods: {
    onBeforeEnter() {
      if (this.fade) {
        requestAF(() => {
          this.showClass = true
        })
      }
    },
    onBeforeLeave() /* istanbul ignore next: does not appear to be called in vue-test-utils */ {
      this.showClass = false
    }
  },
  render(h) {
    let $loading
    let $spinner
    const slot = getComponentConfig(NAME, 'slot')
    if (this.show) {
      if (this.$slots.default) {
        $spinner = this.$slots.default
      } else if (slot && typeof slot === 'string') {
        // slot is pure text
        // _v is createTextVNode method
        $spinner = this._v(slot)
      } else if (typeof slot === 'object') {
        // slot is Vue component
        $spinner = h(slot)
      } else {
        $spinner = h('b-spinner', {
          props: {
            type: this.type,
            label: 'Loading...',
            variant: this.variant || 'primary',
            small: this.small
          }
        })
      }

      $loading = h(
        'div',
        {
          class: {
            loading: true,
            fade: this.fade,
            show: this.showClass,
            'loading-fixed': this.fixed
          }
        },
        [$spinner]
      )
      $loading = [$loading]
    }
    return h(
      'transition',
      {
        props: {
          'enter-class': '',
          'enter-active-class': '',
          'enter-to-class': '',
          'leave-class': 'show',
          'leave-active-class': '',
          'leave-to-class': ''
        },
        on: {
          beforeEnter: this.onBeforeEnter,
          beforeLeave: this.onBeforeLeave
        }
      },
      $loading
    )
  }
}
