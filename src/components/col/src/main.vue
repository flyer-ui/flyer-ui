
<script>
export default {
  name: 'FlyCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    tagName: {
      type: String,
      default: 'div'
    }
  },
  render (h) {
    return h(this.tagName, {
      class: ['fly-col-' + this.span],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
