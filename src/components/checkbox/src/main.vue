<template>
    <label class='fly-checkbox'>
        <span :class='["fly-checkbox__input",{
          "has-checked":model,
          "has-disabled":disabled
        }]'></span>
        <span class='fly-checkbox__label'>
          <slot></slot>
        </span>
        <input class='fly-checkbox__input-native'
          v-model="model"
          :disabled="disabled"
          :value='label'
          :name='name'
          type="checkbox" />
    </label>
</template>
<script>
export default{
  name: 'FlyCheckbox',
  data () {
    return {
      value: undefined
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return typeof this.value === 'undefined' ? this.checked : this.value
      },
      set (newValue) {
        this.value = newValue
      }
    }
  }
}
</script>
