<template>
    <button class='fly-button fly-button-default'><slot></slot></button>
</template>
<script>
export default {
  name: 'FlyButton',
  props: {
    size: {
      type: String
    },
    type: {
      type: String
    },
    palin: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loadding: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    nativeType: {
      type: String
    }
  }
}
</script>
