
<script>
export default {
  name: 'FlyRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'flex'
    },
    justifyContent: {
      type: String,
      default: 'stretch',
      validator (value) {
        return ['stretch', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between'].indexOf(value) > -1
      }
    },
    alignItems: {
      type: String,
      default: 'stretch',
      validator (value) {
        return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) > -1
      }
    },
    tagName: {
      type: String,
      default: 'div'
    }
  },
  render (h) {
    return h(this.tagName, {
      class: ['fly-row'],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
