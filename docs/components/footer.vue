<template>
  <footer class="bd-footer text-muted">
    <div class="container">
      <ul class="bd-footer-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/docs/">Documentation</router-link></li>
        <li>
          <a href="https://github.com/ycs77/bootstrap-vue-arsenic" target="_blank">
            GitHub
          </a>
        </li>
      </ul>

      <p>
        BootstrapVueArsenic based on
        <a href="https://bootstrap-vue.js.org" target="_blank">BootstrapVue</a>
        <br />
        Currently v{{ version }}. Code licensed
        <a
          href="https://github.com/ycs77/bootstrap-vue-arsenic/blob/master/LICENSE"
          target="_blank"
        >
          MIT
        </a>
        . Docs generated with
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
      </p>
    </div>
  </footer>
</template>

<script>
import { version } from '~/content'

export default {
  computed: {
    version: () => version
  }
}
</script>
