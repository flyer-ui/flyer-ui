<template>
    <div :class='["fly-progress__inner"]' :style='{"width":`${percentage}%`}'>
    </div>
</template>

<script>
export default {
  name: 'FlyProgressItem',
  props: {
    percentage: {
      type: Number | String,
      required: true,
      default: 0
    }
  }
}
</script>
