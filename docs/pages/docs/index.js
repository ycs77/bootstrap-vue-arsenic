// import { bootstrapVersion, bootstrapVueVersion, vueVersion, nuxtVersion, defaultConfig } from '~/content'
import { bootstrapVersion, bootstrapVueVersion, vueVersion, nuxtVersion } from '~/content'
import docsMixin from '~/plugins/docs-mixin'
import readme from '~/markdown/intro/README.md'

export default {
  mixins: [docsMixin],
  data() {
    return {
      bootstrapVersion,
      bootstrapVueVersion,
      nuxtVersion,
      vueVersion
    }
  },
  // We use a string template here so that the docs README can do interpolation
  template: `<main class="container"><div class="bd-content">${readme}</div></main>`,
  layout: 'docs'
}
