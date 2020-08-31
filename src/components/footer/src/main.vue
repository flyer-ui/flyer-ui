<script>
export default {
  name: 'FlyFooter',
  props: {
    height: {
      type: String
    }
  },
  render (h) {
    return h('footer', {
      class: ['fly-footer'],
      style: {
        // 设置最小高度为60px
        minHeight: this.height
      }
    }, this.$slots.default)
  }
}
</script>
