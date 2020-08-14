<template>
    <div class='fly-progress'>
        <div :class='["fly-progress__bar",{"is-show-text":isShowStatus}]'>
            <div class='fly-progress__outer'>
                <div :class='["fly-progress__inner",`is-${status}`]' :style='{"width":`${percentage}%`}'>
                </div>
            </div>
        </div>
        <span v-if='isShowText' class='fly-progress__text'>
            <slot name='text' v-bind:percentage='percentage'>{{percentage}}%</slot>
        </span>
        <span v-if='isShowStatus' :class='["fly-progress__status",`is-${status}`]'>
            <slot name='status' v-bind:status='status'>
                <fly-icon :name='statusName'></fly-icon>
            </slot>
        </span>
    </div>
</template>
<script>
export default {
  name: 'FlyProgress',
  props: {
    percentage: {
      type: Number | String,
      required: true,
      default: 0
    },
    showText: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      validator (value) {
        return ['normal', 'success', 'error'].indexOf(value) > -1
      },
      default: 'normal'
    }
  },
  computed: {
    statusName: {
      get () {
        switch (this.status) {
          case 'success':
            return 'success'
          case 'error':
            return 'error'
        }
      }
    },
    isShowStatus: {
      get () {
        return status !== 'normal' && this.showText
      }
    },
    isShowText: {
      get () {
        return this.showText && this.status === 'normal'
      }
    }
  }
}
</script>
