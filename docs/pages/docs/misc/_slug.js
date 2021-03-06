import hljs from 'highlight.js'
import Main from '~/components/main'
import Section from '~/components/section'
import docsMixin from '~/plugins/docs-mixin'
import { misc as miscMeta, defaultConfig } from '~/content'

const getReadMe = name =>
  import(`~/markdown/misc/${name}/README.md` /* webpackChunkName: "docs/misc" */)

export default {
  name: 'BDMisc',
  layout: 'docs',
  mixins: [docsMixin],
  validate({ params }) {
    return Boolean(miscMeta[params.slug])
  },
  async asyncData({ params }) {
    let readme
    if (params.slug === 'changelog') {
      readme = await import('~/../CHANGELOG.md' /* webpackChunkName: "docs/misc" */)
    } else {
      readme = await getReadMe(params.slug)
    }
    readme = readme.default
    readme = readme.replace(
      '{{ defaultConfig }}',
      hljs.highlight('json', JSON.stringify(defaultConfig || {}, undefined, 2)).value
    )
    const meta = miscMeta[params.slug]
    return { readme, meta }
  },
  render(h) {
    // Readme section
    const $readmeSection = h(Section, { domProps: { innerHTML: this.readme } })
    return h(Main, { staticClass: 'bd-components' }, [$readmeSection])
  }
}
