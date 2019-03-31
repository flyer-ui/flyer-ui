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
    },
    name: [String, Number],
    value: [String, Number]
  },
  render (h) {
    return (
      <div on-click={this.handleClick} class={['fly-tab__nav',
        {'is-active': this.value === this.name}]}>
        {this.pane.$slots.label || this.pane.label}
      </div>
    )
  },
  methods: {
    handleClick ($event) {
      this.$emit('input', this.name)
    }
  }
}
</script>
