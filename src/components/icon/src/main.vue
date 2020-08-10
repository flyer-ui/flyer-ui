<template>
  <span class='fly-icon'>
    <i :class='`fly-icon fly-icon-${name}`' @click='handleClick'></i><span><slot name='default'></slot></span>
  </span>
</template>
<script>
export default {
  name: 'FlyIcon',
  props: {
    name: String
  },
  methods: {
    handleClick ($event) {
      this.$emit('on-click', $event)
    }
  }
}
</script>
