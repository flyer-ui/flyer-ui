<template>
    <div class='fly-menu'>
        <slot name='default'></slot>
    </div>
</template>

<script>

export default {
  name: 'FlyMenu',
  props: {
    defaultActive: {
      type: [String, Number, Boolean]
    }
  }
}
</script>
