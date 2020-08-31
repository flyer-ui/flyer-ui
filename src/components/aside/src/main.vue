<script>
export default {
  name: 'FlyAside',
  props: {
    width: {
      type: String
    }
  },
  render (h) {
    return h('aside', {
      class: ['fly-aside'],
      style: {
        minWidth: this.width
      }
    }, this.$slots.default)
  }
}
</script>
