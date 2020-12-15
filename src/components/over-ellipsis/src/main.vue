<template>
    <div :title='title' :class='["fly-over-ellipsis",{"is-over":isOver}]' ref='ele' :style="classes">
        <slot name='default'></slot>
    </div>
</template>

<script>
export default {
  name: 'FlyOverEllipsis',
  props: {
    lineHeight: {
      type: Number,
      default: 24
    },
    lines: {
      type: Number,
      default: 3
    },
    width: {
      type: Number,
      default: 300
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOver: false
    }
  },
  computed: {
    classes () {
      return {
        lineHeight: this.lineHeight + 'px',
        height: this.auto ? '' : (this.lineHeight * this.lines) + 'px',
        width: this.width + 'px'
      }
    },
    title () {
      const nodes = this.$slots.default
      return this.isOver ? (nodes.length > 0 ? nodes[0].text : '') : ''
    }
  },
  mounted () {
    this.isOver = this.$refs.ele.scrollHeight > this.lineHeight * this.lines
  }
}
</script>
