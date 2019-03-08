<template>
    <span v-show="selfShow" :class='["fly-tag",`is-${type}`]'>
        <slot></slot>
        <span class='fly-tag__close' @click='handleClose' v-if='closable'>
            <i class='fly-icon-x'></i>
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
      this.$emit('on-close')
    }
  }
}
</script>
