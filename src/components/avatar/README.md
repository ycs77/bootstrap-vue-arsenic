# Avatar

The user avatar, can use pictures or text and color backgrounds.

```html
<template>
  <b-avatar img="user.svg" />
  <b-avatar>A</b-avatar>
</template>

<!-- b-avatar.vue -->
```

## Size

Via the `size` prop to set avatar width and height. If no size is specified `2.5rem` will be used.

```html
<template>
  <b-avatar img="user.svg" size="1.5rem" />
  <b-avatar img="user.svg" />
  <b-avatar img="user.svg" size="4rem" />
  <b-avatar size="1.5rem">A</b-avatar>
  <b-avatar>A</b-avatar>
  <b-avatar size="4rem">A</b-avatar>
</template>

<!-- b-avatar-size.vue -->
```

## Font size

Via the `font-size` prop to set avatar font size. If no font size is specified, the avatar `size / 2` will be used.

```html
<template>
  <b-avatar font-size="0.5rem">A</b-avatar>
  <b-avatar>A</b-avatar>
  <b-avatar font-size="1.75rem">A</b-avatar>
</template>

<!-- b-avatar-font-size.vue -->
```

## Contextual variations

Add any of the following variants via the `variant` prop to change the appearance of a `<b-avatar>`: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, and `dark`. If no variant is specified `secondary` will be used.

```html
<template>
  <b-avatar variant="primary">A</b-avatar>
  <b-avatar variant="secondary">A</b-avatar>
  <b-avatar variant="success">A</b-avatar>
  <b-avatar variant="danger">A</b-avatar>
  <b-avatar variant="warning">A</b-avatar>
  <b-avatar variant="info">A</b-avatar>
  <b-avatar variant="light">A</b-avatar>
  <b-avatar variant="dark">A</b-avatar>
</template>

<!-- b-avatar-variations.vue -->
```

## Round and Square

Via the `rounded` prop to set avatar round angle, or via the `square` prop to set square avatar.

```html
<template>
  <b-avatar>C</b-avatar>
  <b-avatar rounded>R</b-avatar>
  <b-avatar square>N</b-avatar>
</template>

<!-- b-avatar-rounded-square.vue -->
```
