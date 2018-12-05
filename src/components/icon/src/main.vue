<template>
    <i :class='`fly-icon-${name}`'></i>
</template>
<script>
export default {
  name: 'FlyIcon',
  props: {
    name: String
  }
}
</script>
