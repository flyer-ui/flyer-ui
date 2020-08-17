<template>
    <div :class='["fly-progress__inner",`is-${status}`]'
        :style='{"width":`${percentage}%`}'>
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
    },
    status: {
      type: String,
      validator (value) {
        return ['normal', 'success', 'error'].indexOf(value) > -1
      },
      default: 'normal'
    }
  }
}
</script>
