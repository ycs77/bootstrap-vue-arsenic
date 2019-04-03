<template>
  <main id="content" class="bd-masthead" role="main">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 mx-auto col-md-6 order-md-2">
          <img src="~/static/icon.png" alt="Logo" class="img-fluid mx-auto d-block mb-3 mb-md-0" />
        </div>
        <div class="col-md-6 order-md-1 text-center text-md-left pr-md-5">
          <h1 class="mb-3 bd-text-purple-bright">Bootstrap Vue Arsenic</h1>
          <p class="lead mb-3">
            The
            <a href="https://bootstrap-vue.js.org" target="_blank">BootstrapVue</a>
            admin components.
          </p>
          <p class="mb-2 text-muted">
            <a href="https://getbootstrap.com" target="_blank">Bootstrap 4</a>
            is the world's most popular framework for building responsive, mobile-first sites.
          </p>
          <p class="mb-2 text-muted">
            <a href="https://vuejs.org" target="_blank">Vue.js</a>
            (pronounced /vjuË, like view) is a progressive framework for building user interfaces.
          </p>
          <p class="mb-4 text-muted">
            <a href="https://bootstrap-vue.js.org" target="_blank">BootstrapVue</a>
            provides one of the most comprehensive implementations of Bootstrap V4 components and
            grid system available for Vue.js 2.5+, complete with extensive and automated WAI-ARIA
            accessibility markup.
          </p>
          <div class="d-flex flex-column flex-md-row lead mb-3">
            <b-btn to="/docs" variant="bd-primary" size="lg" class="mb-3 mb-md-0 mr-md-3">
              Get started
            </b-btn>
            <b-btn
              href="https://github.com/ycs77/bootstrap-vue-arsenic"
              variant="outline-secondary"
              size="lg"
              target="_blank"
            >
              GitHub
            </b-btn>
          </div>
          <b-link class="text-muted mb-0" to="/docs/misc/changelog">
            Currently v{{ version }}
          </b-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { version } from '~/content'

export default {
  computed: {
    version: () => version
  }
}
</script>
