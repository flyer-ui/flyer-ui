<template>
   <div class='fly-radio-group'>
     <slot></slot>
   </div>
</template>
<script>
export default {
  name: 'FlyRadioGroup',
  props: {
    value: [String, Boolean, Number]
  }
}
</script>
