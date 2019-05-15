<script>
export default {
  name: 'FlyMain',
  render (h) {
    return h('main', {
      class: ['fly-main']
    }, this.$slots.default)
  }
}
</script>
