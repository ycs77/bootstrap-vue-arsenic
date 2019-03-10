# Getting Started

## General

If you are using module bundlers like [webpack](https://webpack.js.org/),
[rollup.js](https://rollupjs.org), etc you may prefer to directly include the package into your
project. To get started, use `yarn` or `npm` to get the latest version of Bootstrap 4, Vue,
BootstrapVue and BootstrapVueArsenic:

```bash
# With npm
npm i bootstrap vue bootstrap-vue bootstrap-vue-arsenic

# With yarn
yarn add bootstrap vue bootstrap-vue bootstrap-vue-arsenic
```

Then, register BootstrapVueArsenic plugin in your app entry point:

```js
// app.js
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import BootstrapVueArsenic from 'bootstrap-vue-arsenic'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueArsenic)
```

And import Bootstrap and BootstrapVueArsenic `css` files:

```js
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue-arsenic/dist/bootstrap-vue-arsenic.css'
```

Or import Bootstrap and BootstrapVueArsenic `scss` files via a custom SCSS file:

```scss
// custom.scss
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import 'node_modules/bootstrap-vue-arsenic/src/index.scss';
```

```js
// app.js
import 'custom.scss'
```

Be sure to include your custom variables before `bootstrap.scss` and include BootstrapVueArsenic
SCSS _after_ Bootstrap SCSS to ensure variables are set up correctly.

**Note**: _Requires webpack configuration to load CSS/SCSS files
([official guide](https://webpack.js.org/guides/asset-management/#loading-css))_.

<!-- ## Nuxt.js plugin module

Install dependencies:

```bash
# With npm
npm i bootstrap-vue-arsenic

# With yarn
yarn add bootstrap-vue-arsenic
```

Add `bootstrap-vue-arsenic/nuxt` to modules section of **nuxt.config.js**.

This will include both `boostrap.css` and `bootstrap-vue-arsenic.css` default CSS.

```js
{
  modules: ['bootstrap-vue-arsenic/nuxt']
}
```

If you are using custom Bootstrap SCSS, you can disable automatic inclusion of Bootstrap, BootstrapVue and
BootstrapVueArsenic pre-compiled CSS files by setting the following option(s) to `false`:

```js
{
  modules: [
    'bootstrap-vue/nuxt',
    'bootstrap-vue-arsenic/nuxt'
  ],
  BootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },
  BootstrapVueArsenic: {
    css: false
  }
}
```

BootstrapVue and BootstrapVueArsenic's custom CSS relies on some Bootstrap SCSS variables.
You can include Bootstrap, BootstrapVue and BootstrapVueArsenic SCSS in your project's custom SCSS file:

```scss
// custom.scss

// Custom overrides go first
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 640px,
  lg: 992px,
  xl: 1300px
);

// Then include the following
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/src/index.scss';
@import 'bootstrap-vue-arsenic/src/index.scss';
```

In your app main entry point include the single custom SCSS file (when using `sass-loader`):

```js
// app.js
import 'custom.scss'
``` -->

### Tree shaking with Nuxt.js

If you wish to reduce your bundle size because you only use a subset of the available
BootstrapVueArsenic plugins, you can configure the list of BootstrapVueArsenic `componentPlugins`
you want to globally install in your Nuxt.js project.

```js
{
  modules: [
    'bootstrap-vue/nuxt',
    'bootstrap-vue-arsenic/nuxt'
  ],
  BootstrapVueArsenic: {
    componentPlugins: [
      'Avatar',
      'Loading'
    ]
  }
}
```

## Vue CLI 3

Create a new project in the directory `my-project`:

```bash
npx @vue/cli create my-project
```

Enter the `my-project` directory and install `bootstrap-vue` and `bootstrap-vue-arsenic`:

```bash
npm i bootstrap-vue bootstrap-vue-arsenic
```

Under the hood, Vue CLI uses webpack, so we can register the BootstrapVue and BootstrapVueArsenic
plugin as with the webpack instructions.

```js
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import BootstrapVueArsenic from 'bootstrap-vue-arsenic'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueArsenic)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue-arsenic/dist/bootstrap-vue-arsenic.css'
```

Optionally, you can import components individually, as [below](#individual-components). To shorten
import paths, we can add a webpack alias via `vue.config.js`.

```js
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components'),
        'bootstrap-a-components': path.resolve(
          __dirname,
          'node_modules/bootstrap-vue-arsenic/es/components'
        )
      }
    }
  }
}
```

For additional configuration for Vue CLI 3 for using project relative paths for image src props on
various BootstrapVue and BootstrapVueArsenic components, refer to the Vue CLI 3 section of the
[Image Src Resolving](/docs/reference/images#vue-cli-3-support) reference page.

## Individual components

If you would like to only pull in a specific component or set of components, you can do this by
directly importing those components.

To cherry pick a component/directive, start by importing it in the file where it is being used:

```js
import BAvatar from 'bootstrap-vue-arsenic/es/components/avatar/avatar'
import BLoading from 'bootstrap-vue-arsenic/es/components/loading/loading'
```

Then add it to your component definition:

```js
Vue.component('my-component', {
  components: {
    'b-avatar': BAvatar,
    'b-loading': BLoading
  }
})
```

Or register them globally:

```js
Vue.component('b-avatar', BAvatar)
Vue.component('b-loading', BLoading)
```

Vue and ES2015 allow for various syntaxes here, so feel free to utilize kebab-casing (shown),
camelCasing, PascalCasing, and/or object property shorthand.

### Component groups as Vue plugins

You can also import component groups as Vue plugins by importing the component group or directive
directory:

```js
// This imports <b-avatar> as a plugin:
import { Avatar } from 'bootstrap-vue-arsenic/es/components'
Vue.use(Avatar)
```

Refer to the component documentation for details.

### webpack + Babel

When importing components individually, you must configure your app to properly build the
BootstrapVue and BootstrapVueArsenic library source code. This commonly involves white-listing the
node module for your babel loader rule in webpack.

```js
// webpack.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          // Use `include` vs `exclude` to whitelist vs blacklist
          path.resolve(__dirname, 'src'), // Whitelist your app source files
          require.resolve('bootstrap-vue'), // Whitelist bootstrap-vue
          require.resolve('bootstrap-vue-arsenic') // Whitelist bootstrap-vue-arsenic
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
```

## Browser

```html
<!-- Add this to <head> -->
<link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/bootstrap-vue/dist/bootstrap-vue.min.css"
/>
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/bootstrap-vue-arsenic/dist/bootstrap-vue-arsenic.min.css"
/>

<script src="//unpkg.com/@babel/polyfill/dist/polyfill.min.js"></script>
<script src="//unpkg.com/vue/dist/vue.min.js"></script>
<script src="//unpkg.com/bootstrap-vue/dist/bootstrap-vue.min.js"></script>
<script src="//unpkg.com/bootstrap-vue-arsenic/dist/bootstrap-vue-arsenic.min.js"></script>
```

## Build Variants

Choosing the best variant for your build environment / packager helps less bundle sizes. If your
bundler supports es modules, it will automatically prefer it over commonjs.

| Variant        | Environments          | Package path                                                                           |
| -------------- | --------------------- | -------------------------------------------------------------------------------------- |
| **ES Module**  | webpack 2 / rollup.js | `es/index.js`                                                                          |
| **ESM Module** | webpack 2 / rollup.js | `dist/bootstrap-vue-arsenic.esm.js` _or_ `dist/bootstrap-vue-arsenic.esm.min.js`       |
| commonjs2      | webpack 1 / ...       | `dist/bootstrap-vue-arsenic.common.js` _or_ `dist/bootstrap-vue-arsenic.common.min.js` |
| UMD            | Browser               | `dist/bootstrap-vue-arsenic.js` _or_ `dist/bootstrap-vue-arsenic.min.js`               |

## Browser Support

### CSS

BootstrapVueArsenic is to be used with Bootstrap 4 CSS/SCSS. Please see
[Browsers and devices](https://getbootstrap.com/docs/4.3/getting-started/browsers-devices) for more
information about browsers currently supported by Bootstrap 4.

### JS

BootstrapVueArsenic is written in Vue! So this is up to your project and bundler which browsers are
supported.

If you want to support older IE, Android and IOS devices, you may want to use
[Babel Polyfill](https://babeljs.io/docs/usage/polyfill):

- `npm install @babel/polyfill`
- Import it in your app main entry point with `import '@babel/polyfill'`

## Tooling Support

### VS Code + Vetur

If you are using [VS Code](https://code.visualstudio.com/) as your text editor, BootstrapVueArsenic
has intellisense autocompletion for component attributes available when using the
[Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

[Twitter: Vetur + BootstrapVue](https://twitter.com/AlexSashaRegan/status/912769997776158723)
