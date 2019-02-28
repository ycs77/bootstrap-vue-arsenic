<template>
  <div class="nav-sidebar nav-sidebar-light">
    <div class="nav-sidebar-inner-scroll">
      <div class="nav-sidebar-header">
        <div class="nav-sidebar-header-content">
          <div class="nav-sidebar-header-text">
            BNavSidebar
          </div>
        </div>
      </div>

      <ul class="nav-sidebar-items">
        <li v-for="item in items"
          :class="{
            active: itemActive(item),
            show: item.show
          }"
        >
          <template v-if="!isExistItemChildren(item)">
            <auto-link :to="item.to"
              class="nav-sidebar-item"
              @click="clickItem(item)"
            >
              <div class="nav-sidebar-item-icon">
                <i :class="item.iconClass"></i>
              </div>
              <div class="nav-sidebar-item-name">{{ item.label }}</div>
              <span class="badge badge-pill" v-if="item.badge">{{ item.badge }}</span>
            </auto-link>
          </template>

          <template v-else>
            <div class="nav-sidebar-item nav-sidebar-item-switch"
              @click="clickItem(item, true)"
            >
              <div class="nav-sidebar-item-icon">
                <i :class="item.iconClass"></i>
              </div>
              <div class="nav-sidebar-item-name">{{ item.label }}</div>
              <span class="badge badge-pill" v-if="item.badge">{{ item.badge }}</span>
              <span class="nav-sidebar-sub-icon">▾</span>
            </div>

            <collapse-transition>
              <ul class="nav-sidebar-sub-items" v-show="item.show">
                <li v-for="childItem in item.children"
                  :class="{
                    'no-icon': true,
                    active: itemActive(childItem)
                  }"
                >
                  <auto-link :to="childItem.to"
                    class="nav-sidebar-item nav-sidebar-sub-item"
                    @click="clickSubItem(childItem)"
                  >
                    <div class="nav-sidebar-item-name">{{ childItem.label }}</div>
                    <span class="badge badge-pill" v-if="item.badge">{{ childItem.badge }}</span>
                  </auto-link>
                </li>
              </ul>
            </collapse-transition>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AutoLink from '~c/base/auto-link'
import CollapseTransition from '~c/base/collapse-transition'

export default {
  name: 'BNavSidebar',
  components: {
    AutoLink,
    CollapseTransition
  },
  props: {
    //
  },
  data() {
    return {
      active: '',
      items: [
        {
          name: '1',
          label: 'Test',
          iconClass: 'fab fa-chrome'
        },
        {
          name: '2',
          label: 'Test',
          iconClass: 'fab fa-github',
          badge: 1
        },
        {
          name: '3',
          label: 'Test',
          iconClass: 'fab fa-github',
          children: [
            { name: '3-1', label: 'Test' },
            { name: '3-2', label: 'Test' }
          ]
        },
        {
          name: '4',
          label: 'Test',
          iconClass: 'fab fa-github',
          children: [
            { name: '4-1', label: 'Test' },
            { name: '4-2', label: 'Test' },
            { name: '4-3', label: 'Test' }
          ]
        }
      ]
    }
  },
  watch: {
    '$route': 'updateRouter'
  },
  methods: {
    clickItem(item, canShowSubItems = false) {
      if (!canShowSubItems && !this.$route) {
        this.updateActive(item.name)
      } else {
        this.showSubItems(item)
      }
    },
    clickSubItem(item) {
      if (!this.$route) {
        this.updateActive(item.name)
      }
    },

    // Methods
    showSubItems(item, show = null) {
      if (this.isExistItemChildren(item)) {
        this.$set(item, 'show', show !== null ? show : !item.show)
        this.$emit('on-change-subitems', item)
      }
    },
    updateActive(name) {
      this.active = name
      this.$emit('on-select', name)
    },
    updateRouter() {
      const item = this.findItem(this.$route.path)
      if (item) {
        this.updateActive(item.name)
      }
    },
    itemActive(item) {
      return item.name === this.active || this.hasItemChild(item, this.active)
    },
    isExistItemChildren(item) {
      return !!(item.children && item.children.length)
    },
    hasItemChild(item, itemChildName) {
      return this.isExistItemChildren(item)
        ? item.children.some(child => child.name === itemChildName)
        : false
    },
    findItem(itemTo) {
      let targetItem

      this.items.forEach(item => {
        if (!item.children) {
          if (item.to === itemTo) {
            targetItem = item
            return
          }
        } else {
          item.children.forEach(childItem => {
            if (childItem.to === itemTo) {
              targetItem = childItem
              return
            }
          })
        }
      })

      return targetItem
    }
  },
  mounted() {
    // Vue router
    if (this.$route) {
      this.updateRouter()
    }

    // Set whether the sub items can be displayed
    this.items.forEach(item => {
      if (this.isExistItemChildren(item)) {
        if (this.hasItemChild(item, this.active)) {
          this.showSubItems(item, true)
        } else {
          this.showSubItems(item, false)
        }
      }
    })
  }
}
</script>
