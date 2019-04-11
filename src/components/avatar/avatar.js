import { mergeData } from 'vue-functional-data-merge'
import { getComponentConfig } from '../../utils/config'

const NAME = 'BAvatar'

export const props = {
  img: String,
  size: String,
  fontSize: String,
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: () => getComponentConfig(NAME, 'variant')
  },
  rounded: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  }
}

export default {
  name: NAME,
  functional: true,
  props,
  render(h, { props, data, children }) {
    const imgStyle = props.img ? { 'background-image': `url(${props.img})` } : {}

    const sizeStyle = props.size
      ? {
          width: props.size,
          height: props.size,
          'max-width': props.size,
          'max-height': props.size
        }
      : {}

    const componentData = {
      class: [
        'avatar',
        !props.variant ? 'avatar-secondary' : `avatar-${props.variant}`,
        {
          'avatar-rounded': Boolean(props.rounded),
          'avatar-square': Boolean(props.square)
        }
      ],
      style: Object.assign(
        {
          'font-size': props.fontSize || `calc(${props.size} / 2)`
        },
        imgStyle,
        sizeStyle
      ),
      props
    }

    return h(props.tag, mergeData(data, componentData), children)
  }
}
