<template>
    <li :class='[
    "fly-select__option",
    {"is-disabled":disabled},
    {"is-selected":selected}
    ]' @mouseup.stop='handleClick'>
        <slot name='default'>{{label}}</slot>
    </li>
</template>
<script>
export default {
  name: 'FlyOption',
  inject: ['parent'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    value: {
      required: false
    }
  },
  computed: {
    selected () {
      if (this.parent.multiple && Array.isArray(this.parent.value)) {
        const has = this.parent.value.findIndex((value) => {
          return value === this.value
        }) > -1
        if (has) {
          this.parent.handleMultiple({label: this.label, value: this.value})
        }
        return has
      } else {
        if (this.parent.value === this.value) {
          this.parent.handleSelected({label: this.label, value: this.value})
          return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    handleClick ($event) {
      if (!this.disabled) {
        this.parent.handleSelected({label: this.label, value: this.value}, $event)
      }
    }
  }
}
</script>
