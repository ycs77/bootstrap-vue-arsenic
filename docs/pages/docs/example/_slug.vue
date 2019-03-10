<template>
  <component :is="component" />
</template>

<script>
import { components as _meta } from '~/content'
import docsMixin from '~/plugins/docs-mixin'
import startCase from 'lodash/startCase'

const getExample = name =>
  import('~/../src/components/' + name + '/example.vue' /* webpackChunkName: "docs/examples" */)

export default {
  mixins: [docsMixin],
  layout: 'none',
  head() {
    return {
      title: `${this.meta && this.meta.title + ' example'} - BootstrapVueArsenic`
    }
  },
  data() {
    return {
      component: 'div'
    }
  },
  async asyncData({ params }) {
    const meta = _meta[params.slug]

    return {
      meta
    }
  },
  validate({ params }) {
    return Boolean(_meta[params.slug])
  },
  async created() {
    // Import example compnent
    const exampleComponent = await getExample(this.$route.params.slug)
    this.component = exampleComponent.default
  }
}
</script>
