<template>
    <div class='fly-time-line__item'>
        <slot name='dot'><div :style='{"background":color}' :class='[
        "fly-time-line__dot",
        `fly-time-line__dot--${size}`,
        `is-${type}`]'><i :class='[icon]'></i></div></slot>
        <div class='fly-time-line__body'>
          <div v-if='placement==="top"' :class='["fly-time-line__timestamp",`is-${placement}`]'>{{timestamp}}</div>
          <slot></slot>
          <div v-if='placement==="bottom"' :class='["fly-time-line__timestamp",`is-${placement}`]'>{{timestamp}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyTimeLineItem',
  props: {
    timestamp: String,
    hideTimestamp: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      validator (value) {
        return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) > -1
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
