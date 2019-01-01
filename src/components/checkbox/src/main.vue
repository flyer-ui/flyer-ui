<template>
    <label class='fly-checkbox'>
        <span :class='["fly-checkbox__input",{
          "has-checked":checked,
          "has-disabled":disabled
        }]'></span>
        <span class='fly-checkbox__label'>
          <slot></slot>
        </span>
        <input class='fly-checkbox__input-native'
          v-model="checked"
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
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
