<template>
    <li class='fly-select-option'>
        <slot name='default'>{{label}}</slot>
    </li>
</template>
<script>
export default {
  name: 'FlyOption',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    value: String
  }
}
</script>
