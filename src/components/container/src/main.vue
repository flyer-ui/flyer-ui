<script>
export default {
  name: 'FlyContainer',
  props: {
    direction: {
      type: String,
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      },
      default: 'horizontal'
    }
  },
  render (h) {
    return h('section', {
      class: ['fly-container', `is-${this.direction}`]
    }, this.$slots.default)
  }
}
</script>
