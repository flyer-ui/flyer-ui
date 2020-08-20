<template>
  <span class='fly-icon'>
    <i :class='`fly-icon fly-icon-${name}`' :style='{"font-size":fontSize}' @click='handleClick'></i>
    <span><slot name='default'></slot>
  </span>
  </span>
</template>
<script>
export default {
  name: 'FlyIcon',
  props: {
    name: String,
    fontSize: String
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>
