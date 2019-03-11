<template>
    <i :class='`fly-icon-${name}`' @click='handleClick'></i>
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
