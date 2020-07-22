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
    value: [String, Number],
    disabled: Boolean,
    closable: Boolean
  },
  render (h) {
    return (
      <div on-click={this.handleClick} class={['fly-tab__nav',
        {'is-active': this.value === this.name},
        {'is-closable': this.closable},
        {'is-disabled': this.disabled}]}>
        {this.pane.$slots.label || this.pane.label}
        {this.closable ? <i class='fly-tab__close fly-icon-x' on-click={this.handleRemove}></i> : ''}
      </div>
    )
  },
  methods: {
    handleClick ($event) {
      if (this.disabled) {
        return false
      }
      this.$emit('input', this.name)
    },
    handleRemove ($event) {
      if (this.disabled) {
        return false
      }
      $event.stopPropagation()
      this.$emit('on-remove', this.name)
    }
  }
}
</script>
