<template>
    <div class='fly-message__notice' v-if='value'>
        <div class='fly-message__content'>
          <i :class='["fly-message__icon",iconName,`is-${type}`]'></i>{{content}}
          <i v-if='colsable' @click='handleClose' class='fly-message__close fly-icon-x'></i>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyMessage',
  props: {
    value: Boolean,
    content: String,
    icon: String,
    duration: {
      type: Number,
      default: 0
    },
    colsable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator (value) {
        return ['success', 'info', 'warning', 'error'].indexOf(value) > -1
      },
      default: 'info'
    }
  },
  data () {
    return {
      selfModel: undefined
    }
  },
  created () {
    if (this.duration > 0) {
      this.startTimer()
    }
  },
  computed: {
    iconName () {
      switch (this.type) {
        case 'info':
        case 'warning':
          return 'fly-icon-info'
        case 'success':
          return 'fly-icon-check'
        case 'error':
          return 'fly-icon-x'
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('on-closed')
    },
    startTimer () {
      let timer = setTimeout(() => {
        this.$emit('on-closed')
        clearTimeout(timer)
      }, this.duration * 1000)
    }
  }
}
</script>
