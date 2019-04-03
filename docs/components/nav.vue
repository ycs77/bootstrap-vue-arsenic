<template>
  <b-navbar toggleable="md" class="navbar-dark bd-navbar" sticky>
    <b-navbar-brand to="/" exact>
      <svg
        class="d-block"
        width="36"
        height="36"
        viewBox="0 0 612 612"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        fill="#fff"
      >
        <path
          d="M510,8 C561.846401,8.16468012 603.83532,50.1535995 604,102 L604,510 C603.83532,561.846401 561.846401,603.83532 510,604 L102,604 C50.1535995,603.83532 8.16468012,561.846401 8,510 L8,102 C8.16468012,50.1535995 50.1535995,8.16468012 102,8 L510,8 L510,8 Z M510,0 L102,0 C45.9,6.21724894e-15 0,45.9 0,102 L0,510 C0,566.1 45.9,612 102,612 L510,612 C566.1,612 612,566.1 612,510 L612,102 C612,45.9 566.1,6.21724894e-15 510,0 Z"
          fill-rule="nonzero"
        />
        <text id="BV" font-family="Arial" font-size="350" font-weight="light" letter-spacing="2">
          <tspan x="72.0527344" y="446">B</tspan>
          <tspan x="307.5" y="446">A</tspan>
        </text>
      </svg>
      <span class="sr-only">Home</span>
    </b-navbar-brand>

    <b-navbar-toggle target="bd-main-nav"></b-navbar-toggle>

    <b-collapse id="bd-main-nav" is-nav class="justify-content-between">
      <b-navbar-nav>
        <b-nav-item to="/docs" exact>Docs</b-nav-item>
        <b-nav-item to="/docs/components" active-class="active">Components</b-nav-item>
        <!-- <b-nav-item to="/docs/directives" active-class="active">Directives</b-nav-item> -->
        <!-- <b-nav-item to="/docs/reference" active-class="active">Reference</b-nav-item> -->
        <b-nav-item to="/docs/misc" active-class="active">Misc</b-nav-item>
        <b-nav-item to="/play" active-class="active">Play</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item href="https://github.com/ycs77/bootstrap-vue-arsenic" target="_blank">
          <svg
            class="navbar-nav-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 499.36"
            focusable="false"
          >
            <title>GitHub</title>
            <path
              d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
          <span class="sr-only">GitHub</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.main-nav {
  box-shadow: 0 0 5px rgba(57, 70, 78, 0.2) !important;
  background: white;
  z-index: 1050;
  padding-bottom: 0;
}

.main-nav .nav-link,
.main-nav .navbar-brand {
  padding-bottom: 10px;
  border-bottom: 3px solid transparent;
}

.main-nav .nav-link.nuxt-link-active {
  border-bottom: 3px solid #4fc08d;
}

.navbar-brand img {
  height: 1.5em;
  padding-right: 0.5em;
}
</style>

<script>
export default {
  //
}
</script>
