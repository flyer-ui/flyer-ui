<template>
    <button class='fly-button fly-button-default'><slot></slot></button>
</template>
<script>
export default {
  name: 'FlyButton',
  props: {
    type: {
      type: String
    },
    nativeType: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    loadding: {
      type: Boolean,
      default: false
    }
  }
}
</script>
