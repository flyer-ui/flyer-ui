<template>
    <div :class='["fly-tab__pane",{"is-active":value === name}]'>
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
    name: [String, Number],
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    setActive (value) {
      this.value = value
    }
  }
}
</script>
