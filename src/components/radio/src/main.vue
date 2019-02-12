<template>
    <label class='fly-radio'>
        <span :class='["fly-radio__input",{
          "has-checked":model,
          "has-disabled":disabled
        }]'></span>
        <span class='fly-radio__label'>
          <slot></slot>
        </span>
        <input class='fly-radio__input-native'
          v-model="model"
          :disabled="disabled"
          :checked='model'
          :value='label'
          :name='name'
          type="radio" />
    </label>
</template>
<script>
export default{
  name: 'FlyRadio',
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
        return typeof this.value === 'undefined' ? this.checked : true
      },
      set (newValue) {
        this.value = newValue
      }
    }
  }
}
</script>
