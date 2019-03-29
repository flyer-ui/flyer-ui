<script>
export default {
  name: 'FlyTabs',
  props: {
    value: [String],
    type: {
      type: String,
      validator (value) {
        return ['simple'].indexOf(value) > -1
      }
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      panes: []
    }
  },
  methods: {
    // 收集分析子组件
    calcPaneInstances () {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter((VNode) => {
          return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-tab-pane')
        })
        this.panes = paneSlots.map(({componentInstance}) => componentInstance)
      }
    }
  },
  render (h) {
    return ''
  },
  mounted () {
    // 收集子组件
    this.calcPaneInstances()
  },
  updated () {
    // 收集子组件
    this.calcPaneInstances()
  }
}
</script>
