<template>
    <li :class='[
    "fly-select__option",
    {"is-disabled":disabled},
    {"is-selected":hasSeleted}
    ]' @mouseup.stop='handleClick'>
        <slot name='default'>{{label}}</slot>
    </li>
</template>
<script>
import {findParentByName} from '~/shared/util'
export default {
  name: 'FlyOption',
  inject: ['select'],
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
    parent () {
      return findParentByName('FlySelect', this)
    },
    hasSeleted () {
      return Array.isArray(this.select.value) ? this.select.value.findIndex((value) => {
        return value === this.value
      }) > -1 : this.select.value === this.value
    }
  },
  methods: {
    handleClick ($event) {
      if (this.disabled) {
        return
      }
      this.parent.executeSelected({label: this.label, value: this.value}, $event)
    }
  }
}
</script>
