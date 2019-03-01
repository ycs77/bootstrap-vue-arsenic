# Nav sidebar

Provides a basic sidebar with responsive.

```html
<!-- b-nav-sidebar.vue -->

<template>
  <b-nav-sidebar :items="items" />
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            name: '1',
            label: 'Test',
            iconClass: 'fas fa-home'
          },
          {
            name: '2',
            label: 'Test',
            iconClass: 'fas fa-home',
            badge: 1
          },
          {
            name: '3',
            label: 'Test',
            iconClass: 'fas fa-home',
            children: [
              { name: '3-1', label: 'Test' },
              { name: '3-2', label: 'Test' }
            ]
          },
          {
            name: '4',
            label: 'Test',
            iconClass: 'fas fa-home',
            children: [
              { name: '4-1', label: 'Test' },
              { name: '4-2', label: 'Test' },
              { name: '4-3', label: 'Test' }
            ]
          }
        ]
      }
    }
  }
</script>
```

## API

### Props

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ------- |
|      |             |      |         |

### Events

| Name              | Description                                     | Return |
| ----------------- | ----------------------------------------------- | ------ |
| on-select         | Triggered when updating item                    | name   |
| on-change-submenu | Triggered when the sub menu is turned on or off | item   |

### Methods

| Name         | Description                 | Params            |
| ------------ | --------------------------- | ----------------- |
| showSubMenu  | Manually display sub menu   | item, show = null |
| updateActive | Manually update active item | name              |

### Slots

| Name | Description |
| ---- | ----------- |
|      |             |
