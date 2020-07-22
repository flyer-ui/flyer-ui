<script>
export default {
  name: 'FlyFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  render (h) {
    return h('footer', {
      class: ['fly-footer'],
      style: {
        height: this.height
      }
    }, this.$slots.default)
  }
}
</script>
