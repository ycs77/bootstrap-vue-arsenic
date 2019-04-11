# Loading

> The `<b-loading>` component is display loading state icon. Default wrapper is the BootstrapVue [<b-spinner>](https://bootstrap-vue.js.org/docs/components/spinner) component.

```html
<template>
  <div>
    <b-form-checkbox v-model="loading" switch>
      Switch Loading Status
    </b-form-checkbox>
    <div v-if="!loading" class="py-3">
      <h3>Loading</h3>
      <p>Loading can show the loading state icon.</p>
    </div>
    <b-loading :show="loading"></b-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>

<!-- b-loading.vue -->
```

## Loading contextual variations

Add any of the following variants via the `variant` prop to change the appearance of a `<b-loading>`:
`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`. If no variant
is specified `primary` will be used.

```html
<template>
  <b-loading :show="true" variant="primary"></b-loading>
  <b-loading :show="true" variant="secondary"></b-loading>
  <b-loading :show="true" variant="success"></b-loading>
  <b-loading :show="true" variant="danger"></b-loading>
  <b-loading :show="true" variant="warning"></b-loading>
  <b-loading :show="true" variant="info"></b-loading>
  <b-loading :show="true" variant="light"></b-loading>
  <b-loading :show="true" variant="dark"></b-loading>
</template>

<!-- b-loading-variations.vue -->
```

## Loading type

Via the `type` prop to set loading type. [Bootstrap](https://bootstrap-vue.js.org) includes two types of spinners. The default spinner type is called `border` (spinning circle border), and the optional type `grow` (a throbber style indicator).

```html
<template>
  <b-loading :show="true" type="grow"></b-loading>
</template>

<!-- b-loading-type.vue -->
```

## Loading size

Via the `size` prop to set size loading.

```html
<template>
  <b-loading :show="true"></b-loading>
  <b-loading :show="true" small></b-loading>
</template>

<!-- b-loading-size.vue -->
```

## Fixed loading

Via the `fixed` prop to enable fixed loading.

```html
<template>
  <div class="position-relative">
    <div class="p-3">
      <h3>Loading</h3>
      <p>Loading can show the loading state icon.</p>
      <button @click="startLoading" class="btn btn-primary">Start loading 2 seconds</button>
    </div>
    <b-loading :show="loading" fixed></b-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    startLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<!-- b-loading-fixed.vue -->
```

## Fading loading

Use the `fade` prop to enable animation. By default loading are not animated.
It is recommended to attach `fixed` prop when using.

```html
<template>
  <div class="position-relative">
    <div class="p-3">
      <h3>Loading</h3>
      <p>Loading can show the loading state icon.</p>
      <button @click="startLoading" class="btn btn-primary">Start loading 2 seconds</button>
    </div>
    <b-loading :show="loading" fixed fade></b-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    startLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<!-- b-loading-fading.vue -->
```

## Set global render loading content

Set global config render loading content use string.

```js
Vue.use(Loading, {
  BLoading: {
    slot: 'Loading...'
  }
})
```

Or set Vue component.

```js
import CustomLoadingComponent from './components/custom-loading.vue'

Vue.use(Loading, {
  BLoading: {
    slot: CustomLoadingComponent
  }
})
```
