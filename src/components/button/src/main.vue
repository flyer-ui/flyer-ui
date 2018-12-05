<template>
    <button
    :type='nativeType'
    :disabled='disabled'
    :class='[
    "fly-button",
    `fly-button-${type}`,
    {
      "fly-is-disabled":disabled,
      "fly-is-plain":plain,
      "fly-is-circle":circle,
      "fly-is-round":round
    }
    ]'><i v-if='loading' class=' fly-icon-loader fly-is-loading'></i><slot></slot></button>
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
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean
    }
  }
}
</script>
