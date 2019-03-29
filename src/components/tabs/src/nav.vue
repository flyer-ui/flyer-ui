<script>
export default {
  name: 'FlyTagNav',
  props: {
    pane: {
      type: Object,
      default () {
        return {}
      },
      require: true
    }
  },
  created () {
    console.log('pane', this.pane)
  },
  render (h) {
    return (
      <div class='fly-tab__nav'>
        {this.pane.$slots.label || this.pane.label}
      </div>
    )
  }
}
</script>
