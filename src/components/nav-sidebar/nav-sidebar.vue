<template>
  <div class="nav-sidebar nav-sidebar-light">
    <div class="nav-sidebar-inner-scroll">
      <div class="nav-sidebar-header">
        <div>
          <div class="nav-sidebar-header-text">
            BNavSidebar
          </div>
        </div>
      </div>

      <ul class="nav-sidebar-items">
        <li v-for="item in items"
          :class="{ active: active === item.name }"
          @click="clickItem(item.name)"
        >
          <a href="javascript: void(0)">
            <div class="nav-sidebar-item-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="nav-sidebar-item-name">
              {{ item.label }}
            </div>
            <span class="badge badge-pill">
              1
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-nav-sidebar',
  props: {
    //
  },
  data() {
    return {
      active: '1',
      items: [
        { name: '1', label: 'Test' },
        { name: '2', label: 'Test' },
        { name: '3', label: 'Test' },
        { name: '4', label: 'Test' },
        { name: '5', label: 'Test' },
        { name: '6', label: 'Test' }
      ]
    }
  },
  methods: {
    clickItem(name) {
      this.active = name
    }
  }
}
</script>
