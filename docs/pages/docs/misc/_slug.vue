<template>
  <div class="container">
    <div class="bd-content" v-html="readme"></div>
  </div>
</template>

<script>
import { misc as _meta } from '~/content'
import docsMixin from '~/plugins/docs-mixin'

export default {
  mixins: [docsMixin],
  layout: 'docs',

  validate({ params }) {
    return Boolean(_meta[params.slug])
  },

  async asyncData({ params }) {
    const meta = _meta[params.slug]
    let readme

    if (params.slug === 'changelog') {
      readme = await import('~/../CHANGELOG.md' /* webpackChunkName: "docs/misc" */)
    }

    return {
      readme: readme.default,
      meta
    }
  }
}
</script>
