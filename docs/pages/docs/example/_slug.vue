<template>
  <div>
    <m-nav />
    <div class="bd-example-component">
      <component :is="component" />
    </div>
  </div>
</template>

<script>
import { components as _meta } from '~/content'
import mNav from '~/components/nav.vue'
import mFooter from '~/components/footer.vue'
import startCase from 'lodash/startCase'

const getExample = name =>
  import('~/../src/components/' + name + '/example.vue' /* webpackChunkName: "docs/examples" */)

export default {
  layout: 'none',
  components: { mNav, mFooter },
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
  validate({ params }) {
    return Boolean(_meta[params.slug])
  },
  async asyncData({ params }) {
    return {
      meta: _meta[params.slug]
    }
  },
  async created() {
    // Import example compnent
    const exampleComponent = await getExample(this.$route.params.slug)
    this.component = exampleComponent.default
  }
}
</script>

<style lang="scss" scoped>
nav.bd-navbar {
  position: fixed;
  left: 0;
  right: 0;
}
.bd-example-component {
  margin-top: 4rem;
}
</style>
