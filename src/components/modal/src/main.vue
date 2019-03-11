<template>
    <div class='fly-modal is-dialog' v-show="model">
      <div class='fly-modal__content'>
        <div class='fly-modal__header' v-if='$slots.header || title'>
          <slot name='header'>{{title}}</slot>
          <i v-if='closable' class='fly-icon-x fly-modal__close' @click='handleClose'></i>
        </div>
        <div class='fly-modal__body'>
          <slot name='default'></slot>
        </div>
        <div class='fly-modal__footer'>
          <slot name='footer'>
            <fly-button type='primary' @on-click='handleClose'>确认</fly-button>
            <fly-button @on-click='handleCancel'>取消</fly-button>
          </slot>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'FlyModal',
  props: {
    value: Boolean,
    title: String,
    closable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      selfModel: undefined
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.selfModel = value
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleClose ($event) {
      this.model = false
      this.$emit('on-close', $event)
    },
    handleCancel () {
      this.model = false
    },
    handleConfrim () {
      this.model = false
    }
  }
}
</script>
