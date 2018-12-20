<template>
    <button
    :type='nativeType'
    :disabled='disabled'
    :class='[
    "fly-button",
    `fly-button--${type}`,
    `fly-button--${size}`,
    {
      "has-disabled":disabled,
      "has-loading":loading,
      "has-plain":plain,
      "has-circle":circle,
      "has-round":round
    }
    ]'>
      <i v-if='loading' class='fly-icon-loader'></i>
      <i v-if='icon' :class='icon'></i>
      <slot></slot>
    </button>
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
      type: String,
      default: 'medium'
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
