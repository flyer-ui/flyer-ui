<template>
    <div class='fly-modal is-dialog' @click='handleModal' v-show="model">
      <div class='fly-modal__content' :style='{"width":width}'>
        <div class='fly-modal__header' v-if='$slots.header || title'>
          <slot name='header'>{{title}}</slot>
        </div>
        <i v-if='closable' class='fly-icon-x fly-modal__close' @click='handleClose'></i>
        <div class='fly-modal__body'>
          <slot name='default'></slot>
        </div>
        <div class='fly-modal__footer'>
          <slot name='footer'>
            <fly-button type='primary' :loading='showLoading' @on-click='handleConfrim'>确认</fly-button>
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
    },
    width: {
      type: String,
      default: '50%'
    },
    confirmLoading: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selfModel: undefined,
      showLoading: false
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
  watch: {
    model (value) {
      if (!value) {
        this.showLoading = false
      }
    }
  },
  methods: {
    handleClose ($event) {
      this.model = false
      this.$emit('on-closed', $event)
    },
    handleCancel ($event) {
      this.model = false
      this.$emit('on-cancel', $event)
    },
    handleConfrim ($event) {
      if (!this.confirmLoading) {
        this.model = false
      } else {
        this.showLoading = this.confirmLoading
      }
      this.$emit('on-confirm', $event)
    },
    handleModal ($event) {
      if (this.maskClosable) {
        this.model = false
      }
    }
  }
}
</script>
