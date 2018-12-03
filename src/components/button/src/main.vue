<template>
    <button class='fly-button'
    :type='nativeType'
    :class='[{

    }]'><slot></slot></button>
</template>
<script>
export default {
  name: 'FlyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
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
