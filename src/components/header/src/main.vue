<script>
export default {
  name: 'FlyHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  render (h) {
    return h('header', {
      class: ['fly-header'],
      style: {
        height: this.height
      }
    }, this.$slots.default)
  }
}
</script>
