
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
  computed: {
    style () {
      return {
        'padding-left': this.$parent.gutter > 0 ? `${this.$parent.gutter / 2}px` : '',
        'padding-right': this.$parent.gutter > 0 ? `${this.$parent.gutter / 2}px` : ''
      }
    }
  },
  render (h) {
    return h(this.tagName, {
      class: ['fly-col-' + this.span, this.offset > 0 ? ' fly-col-offset-' + this.offset : ''],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
