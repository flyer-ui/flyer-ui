<template>
    <div :class='["fly-tabs__pane",{"is-active":active}]'>
        <slot name='default'></slot>
    </div>
</template>

<script>
import {findParentByName} from '~/utils/index'
export default {
  name: 'FlyTabPane',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    name: String | Number
  },
  computed: {
    parent () {
      return findParentByName('FlyTabs', this)
    },
    active () {
      return this.name === this.parent.value
    }
  }
}
</script>
