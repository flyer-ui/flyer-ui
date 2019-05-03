<template>
    <li :class='[
    "fly-select__option",
    {"is-disabled":disabled}
    ]' @mouseup='handleClick'>
        <slot name='default'>{{label}}</slot>
    </li>
</template>
<script>
import {findParentByName} from '~/utils/util'
import {stop} from '~/utils/dom'
export default {
  name: 'FlyOption',
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
    }
  },
  methods: {
    handleClick ($event) {
      stop($event)
      if (this.disabled) {
        return
      }
      this.parent.executeSelected({label: this.label, value: this.value}, $event)
    }
  }
}
</script>
