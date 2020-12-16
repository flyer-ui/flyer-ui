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
      type: [Number, String],
      default: 300
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOver: false,
      title: ''
    }
  },
  computed: {
    classes () {
      return {
        lineHeight: (this.lineHeight / 14) + 'rem',
        height: (this.auto && !this.isOver) ? '' : ((this.lineHeight * this.lines) / 14) + 'rem',
        width: this.width === 'auto' ? '100%' : ((parseInt(this.width) / 14) + 'rem')
      }
    }
  },
  methods: {
    refresh () {
      this.isOver = this.$refs.ele.scrollHeight > this.lineHeight * this.lines
      const nodes = this.$slots.default
      this.title = this.isOver ? (nodes.length > 0 ? nodes[0].text : '') : ''
    }
  },
  updated () {
    this.refresh()
  },
  mounted () {
    this.refresh()
  }
}
</script>
