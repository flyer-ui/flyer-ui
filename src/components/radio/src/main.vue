<template>
    <label class='fly-radio'>
        <span :class='["fly-radio__input",{
          "has-checked":checked,
          "has-disabled":disabled
        }]'></span>
        <span class='fly-radio__label'>
          <slot></slot>
        </span>
        <input class='fly-radio__input-native'
          v-model="checked"
          :disabled="disabled"
          :value='label'
          :name='name'
          type="radio" />
    </label>
</template>
<script>
export default{
  name: 'FlyRadio',
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
  }
}
</script>
