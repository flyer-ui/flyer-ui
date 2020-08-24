<script>
export default {
  name: 'FlyTabMore',
  props: {
    panes: Array
  },
  methods: {
    handleClick (pane) {
      this.$parent.handleChange(pane.name)
      this.$parent.handleUpdateVisiblePane(pane)
    },
    handleActive (pane) {
      if (this.$parent.value === pane.name) {
        this.$parent.handleUpdateVisiblePane(pane)
        return true
      }
      return false
    },
    handleRemove (name, $event) {
      if (this.disabled) {
        return false
      }
      $event.stopPropagation()
      this.$emit('remove', name)
    }
  },
  render (h) {
    return (
      <div class='fly-tabs__more'>
        {
          this._l(this.panes, (pane, index) => {
            return (
              <div on-click={($event) => this.handleClick(pane, $event)}
                key={index}
                class={['fly-tabs__nav', {'is-active': this.handleActive(pane)}]}>
                {pane.$slots.label || pane.label }
                <i class='fly-icon fly-icon-close fly-tabs__close'
                  on-click={($event) => { this.handleRemove(pane.name, $event) }}>
                </i>
              </div>
            )
          })
        }
      </div>
    )
  }
}
</script>
