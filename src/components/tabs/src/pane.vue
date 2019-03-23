<template>
    <div class='fly-tab__pane'>
        <slot name='default'></slot>
    </div>
</template>
<script>
export default {
  name: 'FlyTabPane',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    closable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
