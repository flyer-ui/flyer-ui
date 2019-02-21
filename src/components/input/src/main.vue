<template>
    <div class='fly-input'>
       <slot></slot>
       <input :value='value' v-on:input='$emit("input",$event.target.value)'>
    </div>
</template>
<script>
export default {
  name: 'FlyInput',
  props: {
    value: String
  }
}
</script>
