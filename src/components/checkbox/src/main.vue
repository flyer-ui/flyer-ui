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
          :value='label'
          :name='name'
          type="checkbox" />
    </label>
</template>
<script>
export default{
  name: 'FlyCheckbox',
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
  data () {
    return {
      value: undefined
    }
  },
  created () {

  },
  computed: {
    model: {
      get () {
        return typeof this.value === 'undefined' ? this.checked : this.value
      },
      set (newValue) {
        this.value = newValue
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
