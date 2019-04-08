<template>
  <div class="container">
    <div class="bd-content" v-html="readme"></div>
  </div>
</template>

<script>
import { misc as _meta, defaultConfig } from '~/content'
import docsMixin from '~/plugins/docs-mixin'

const getReadMe = name =>
  import(`~/markdown/misc/${name}/README.md` /* webpackChunkName: "docs/misc" */)

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
    } else if (params.slug === 'settings') {
      readme = await getReadMe('settings')
    }
    readme = readme.default
    readme = readme.replace(
      '{{ defaultConfig }}',
      JSON.stringify(defaultConfig || {}, undefined, 2)
    )
    return {
      readme,
      meta
    }
  }
}
</script>
