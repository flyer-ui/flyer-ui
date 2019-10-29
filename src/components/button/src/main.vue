<template>
    <button
    :type='nativeType'
    :disabled='disabled'
    @click="handleClick"
    :class='[
    "fly-button",
    `fly-button--${type}`,
    `fly-button--${size}`,
    {
      "is-disabled":disabled,
      "is-loading":loading,
      "is-plain":plain,
      "is-circle":circle,
      "is-round":round
    }
    ]'>
      <i v-if='hasIcon' :class="['icon','loader']"></i>
      <slot name='default'></slot>
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
      default: 'medium',
      validator (value) {
        return ['large', 'medium', 'small', 'mini'].indexOf(value) > -1
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean
    }
  },
  compute: {
    hasIcon () {
      return this.icon.length > 0 || this.loading
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
