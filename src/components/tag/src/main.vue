<template>
    <span v-show="selfShow" :class='["fly-tag",`fly-tag--${type}`]'>
        <slot></slot>
        <span class='fly-tag__close' v-if='closable'>
            <i class='fly-icon fly-icon-close fly-tag__close' @click='handleClose'></i>
        </span>
    </span>
</template>
<script>
export default {
  name: 'FlyTag',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selfShow: true
    }
  },
  methods: {
    handleClose () {
      this.selfShow = false
      this.$emit('close')
    }
  }
}
</script>
