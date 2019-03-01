<template>
  <div :class="['nav-sidebar', `nav-sidebar-${theme}`]">
    <div class="nav-sidebar-inner-scroll">
      <div class="nav-sidebar-header">
        <div class="nav-sidebar-header-content">
          <div class="nav-sidebar-header-text">
            BNavSidebar
          </div>
        </div>
      </div>

      <ul class="nav-sidebar-menu">
        <li v-for="item in vItems"
          :class="{
            active: itemActive(item),
            show: item.show
          }"
        >
          <template v-if="!isExistItemChildren(item)">
            <auto-link :to="item.to"
              class="nav-sidebar-item"
              :type="linkType"
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
              <ul class="nav-sidebar-sub-menu" v-show="item.show">
                <li v-for="childItem in item.children"
                  :class="{
                    'no-icon': true,
                    active: itemActive(childItem)
                  }"
                >
                  <auto-link :to="childItem.to"
                    class="nav-sidebar-item nav-sidebar-sub-item"
                    :type="linkType"
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

const COMPONENT_NAME = 'BNavSidebar'

export default {
  name: COMPONENT_NAME,
  components: {
    AutoLink,
    CollapseTransition
  },
  props: {
    items: {
      type: Array,
      required: true,
      validator(items) {
        const requiredAttrs = ['name', 'label']

        for (const i in items) {
          const item = items[i]
          if (!item.children) {
            if (!requiredAttrs.every(v => item[v])) {
              return false
            }
          } else {
            for (const c in item.children) {
              const itemChild = item.children[c]
              if (!requiredAttrs.every(v => itemChild[v])) {
                return false
              }
            }
          }
        }

        return true
      }
    },
    active: String,
    theme: {
      type: String,
      default: 'light',
      validator(value) {
        return ['light', 'dark'].some(v => v === value)
      }
    },
    linkType: {
      type: String,
      default: 'auto',
      validator(value) {
        return [
          'auto',
          'router-link',
          'nuxt-link',
          'a',
          'none'
        ].some(v => v === value)
      }
    }
  },
  data() {
    return {
      vItems: this.items,
      vActive: this.active
    }
  },
  watch: {
    '$route': 'updateRouter'
  },
  methods: {
    clickItem(item, canShowSubMenu = false) {
      if (!canShowSubMenu) {
        this.updateActive(item.name)
      } else {
        this.showSubMenu(item)
      }
    },
    clickSubItem(item) {
      this.updateActive(item.name)
    },

    // Methods
    showSubMenu(item, show = null) {
      if (this.isExistItemChildren(item)) {
        this.$set(item, 'show', show !== null ? show : !item.show)
        this.$emit('on-change-submenu', item)
      }
    },
    updateActive(name) {
      this.vActive = name
      this.$emit('on-select', name)
    },
    updateRouter() {
      const item = this.findItem(this.$route.path)
      if (item) {
        this.updateActive(item.name)
      }
    },
    itemActive(item) {
      return item.name === this.vActive || this.hasItemChild(item, this.vActive)
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

      this.vItems.forEach(item => {
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

    // Set whether the sub menu can be displayed
    this.vItems.forEach(item => {
      if (this.isExistItemChildren(item)) {
        if (this.hasItemChild(item, this.vActive)) {
          this.showSubMenu(item, true)
        } else {
          this.showSubMenu(item, false)
        }
      }
    })
  }
}
</script>
