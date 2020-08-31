<script>
export default {
  name: 'FlyHeader',
  props: {
    height: {
      type: String
    }
  },
  render (h) {
    return h('header', {
      class: ['fly-header'],
      style: {
        // 设置最小高度为60px
        minHeight: this.height
      }
    }, this.$slots.default)
  }
}
</script>
