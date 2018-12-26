<template>
    <label class='fly-checkbox'>
        <span :class='["fly-checkbox__input",{
          "has-checked":checked
        }]'></span>
        <span class='fly-checkbox__label'>
          <slot></slot>
        </span>
        <input class='fly-checkbox__input-native'
          v-model="checked"
          :value='label'
          type="checkbox" />
    </label>
</template>
<script>
export default{
  name: 'FlyCheckbox',
  props: {
    label: String,
    checked: false
  }
}
</script>
