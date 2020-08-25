<template>
    <div class='fly-collapse'>
        <slot name='default'></slot>
    </div>
</template>

<script>
export default {
  name: 'FlyCollapse',
  props: {
    value: String | Number,
    accordion: {
      type: Boolean,
      default: false
    }
  }
}
</script>
