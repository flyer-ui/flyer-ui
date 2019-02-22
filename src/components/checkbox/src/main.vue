<template>
    <label class='fly-checkbox'>
        <span :class='["fly-checkbox__input",{
          "is-checked":isChecked,
          "is-disabled":disabled
        }]'></span>
        <span class='fly-checkbox__label'>
          <slot></slot>
        </span>
        <input class='fly-checkbox__input-native'
          v-model="model"
          :disabled="disabled"
          :value="label"
          :name='name'
          type="checkbox" />
    </label>
</template>
<script>
export default{
  name: 'FlyCheckbox',
  props: {
    value: {
      type: [String, Boolean, Number, Array],
      default: ''
    },
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
    trueLabel: {
      type: [String, Number]
    },
    falseLabel: {
      type: [String, Number]
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  created () {

  },
  computed: {
    model: {
      get () {
        return this.value || this.checked
      },
      set (newValue) {
        console.log(newValue)
        this.$emit('input', newValue)
      }
    },
    isChecked: {
      get () {
        return this.model
      }
    }
  }
}
</script>
