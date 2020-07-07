<template>
    <div :class='["fly-modal",styles]' @click='handleModal' v-if="model">
      <div class='fly-modal__content' :style='{"width":width,"height":height}'>
        <div class='fly-modal__header' v-if='$slots.header || title'>
          <slot name='header'>
            <i :class='["fly-modal__icon",icon]'></i>
            {{title}}
            </slot>
        </div>
        <i v-if='closable' class='fly-icon-x fly-modal__close' @click='handleClose'></i>
        <div class='fly-modal__body'>
          <slot name='default'>{{content}}</slot>
        </div>
        <div class='fly-modal__footer'>
          <slot name='footer'>
            <fly-button type='primary' size='medium' :loading='showLoading' @click='handleConfrim'>{{confirmText}}</fly-button>
            <fly-button v-if='showCancel' size='medium' @click='handleCancel'>{{cancelText}}</fly-button>
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
    content: String,
    closable: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '80%'
    },
    height: {
      type: String,
      default: '300px'
    },
    confirmLoading: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    icon: String,
    type: {
      type: String,
      validator (value) {
        return ['success', 'confirm', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
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
    },
    styles () {
      return typeof this.type === 'undefined' ? '' : `is-${this.type}`
    },
    showCancel () {
      return ['success', 'info', 'warning', 'danger'].indexOf(this.type) < 0
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
      this.$emit('closed', $event)
    },
    handleCancel ($event) {
      this.model = false
      this.$emit('cancel', $event)
    },
    handleConfrim ($event) {
      if (!this.confirmLoading) {
        this.model = false
      } else {
        this.showLoading = this.confirmLoading
      }
      this.$emit('confirm', $event)
    },
    handleModal ($event) {
      if (this.maskClosable) {
        this.model = false
      }
    }
  }
}
</script>
