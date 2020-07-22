<template>
    <div class='fly-timeline__item'>
       <div :style='{"background":color}' :class='[
        "fly-timeline__dot",
        `fly-timeline__dot--${size}`,
        `is-${type}`]'>
          <slot name='dot'><i :class='[icon]'></i></slot>
        </div>
        <div class='fly-timeline__body'>
          <div v-if='placement==="top" && !hideTimestamp'
          :class='["fly-timeline__timestamp",`is-${placement}`]'>{{timestamp}}</div>
          <slot></slot>
          <div v-if='placement==="bottom" && !hideTimestamp'
          :class='["fly-timeline__timestamp",`is-${placement}`]'>{{timestamp}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyTimelineItem',
  props: {
    timestamp: String,
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator (value) {
        return ['default', 'primary', 'success', 'warning', 'danger', 'info'].indexOf(value) > -1
      },
      default: 'default'
    },
    placement: {
      type: String,
      validator (value) {
        return ['bottom', 'top'].indexOf(value) > -1
      },
      default: 'top'
    },
    color: String,
    size: {
      type: String,
      validator (value) {
        return ['normal', 'large'].indexOf(value) > -1
      },
      default: 'normal'
    },
    icon: String
  }
}
</script>
