<script>
export default {
  name: 'FlyAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  render (h) {
    return h('aside', {
      class: ['fly-aside'],
      style: {
        width: this.width
      }
    }, this.$slots.default)
  }
}
</script>
