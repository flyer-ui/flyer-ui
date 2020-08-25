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
    name: String | Number,
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active () {
      return this.$parent.value === this.name
    }
  },
  render (h) {
    return (
      <div on-click={this.handleClick} class={['fly-tabs__nav',
        {'is-active': this.active},
        {'is-closable': this.closable},
        {'is-disabled': this.disabled}]}>
        {this.pane.$slots.label || this.pane.label}
        {this.closable ? <i class='fly-icon fly-icon-close fly-tabs__close' on-click={this.handleRemove}></i> : ''}
      </div>
    )
  },
  methods: {
    handleClick ($event) {
      if (this.disabled) {
        return false
      }
      this.$parent.handleChange(this.name)
    },
    handleRemove ($event) {
      if (this.disabled) {
        return false
      }
      $event.stopPropagation()
      this.$emit('remove', this.name)
    }
  }
}
</script>
