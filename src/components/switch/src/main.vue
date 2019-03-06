<template>
    <label class='fly-switch' :class='{
      "is-checked":isChecked
    }'>
        <input type='checkbox' v-model="model" class='fly-switch__native'/>
        <span>&nbsp;</span>
    </label>
</template>
<script>
export default {
  name: 'FlySwitch',
  props: {
    value: [String, Boolean, Number],
    checked: Boolean
  },
  data () {
    return {
      selfModel: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.selfModel || this.checked
      },
      set (newValue) {
        this.selfModel = newValue
        this.$emit('input', newValue)
      }
    },
    isChecked () {
      return this.model
    }
  }
}
</script>
