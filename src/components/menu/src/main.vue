<template>
    <div class='fly-menu'>
        <slot name='default'></slot>
    </div>
</template>

<script>

export default {
  name: 'FlyMenu',
  props: {
    value: {
      type: [String, Number, Boolean]
    }
  }
}
</script>
