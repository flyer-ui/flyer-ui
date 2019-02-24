<template>
   <div class='fly-checkbox-group'>
     <slot></slot>
   </div>
</template>
<script>
export default {
  name: 'FlyCheckboxGroup',
  props: {
    value: Array
  }
}
</script>
