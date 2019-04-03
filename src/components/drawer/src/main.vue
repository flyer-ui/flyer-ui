<template>
    <div class='fly-drawer' v-show='model' :style='{"width":width}'>
        <div class='fly-drawer__mask' @click='handleClickMask'></div>
        <div class='fly-drawer__content'>
            <div class='fly-drawer__header'>
                <slot name='header'></slot>
                <i class='fly-drawer__close fly-icon-x' v-if='showClose' @click='handleClose'></i>
            </div>
            <div class='fly-drawer__body'>
                <slot name='default'></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyDrawer',
  props: {
    value: Boolean,
    width: String,
    showClose: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      selfModel: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (newValue) {
        this.value = newValue
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    handleClose ($event) {
      this.model = false
      this.$emit('on-closed', $event)
    },
    handleClickMask ($event) {
      if (this.maskClosable) {
        this.model = false
        this.$emit('on-closed', $event)
      }
    }
  }
}
</script>
