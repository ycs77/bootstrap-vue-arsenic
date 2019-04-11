import BLoading from './loading'
import { installFactory } from '../../utils/plugins'

const components = {
  BLoading
}

export default {
  install: installFactory({ components })
}
