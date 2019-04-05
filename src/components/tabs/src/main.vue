<template>
    <div class='fly-tab'>
      <div :class='["fly-tab__header",{"is-scrollable":scrollable}]'>
         <span v-if='scrollable' class='fly-tab__left'>
           <i class='fly-icon-chevron-left' @click='handlePrev'></i>
         </span>
         <div ref='scrollBar' class='fly-tab__scroll'>
          <div ref='navs' class='fly-tab__navs' :style='{"transform":`translate(-${movingWidth}px)`}'>
            <fly-tab-nav
              v-model='model'
              :pane='pane'
              :closable='closable'
              :disabled='pane.disabled'
              @on-remove='handleRemove'
              :name='pane.name || index'
              v-for='(pane,index) in panes'
              :key='index'>
            </fly-tab-nav>
          </div>
        </div>
        <span class='fly-tab__right'>
          <i class='fly-icon-chevron-right' v-if='scrollable' @click='handleNext'></i>
         </span>
      </div>
      <div class='fly-tab__content'>
        <slot name='default'></slot>
      </div>
    </div>
</template>
<script>
import pager from '~/mixins/pager'
import FlyTabNav from './nav'
import FlyTabPane from './pane'
export default {
  name: 'FlyTabs',
  mixins: [pager],
  components: {
    FlyTabNav,
    FlyTabPane
  },
  props: {
    value: [String, Number],
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
      showList: false,
      scrollable: false,
      selfModel: '',
      panes: []
    }
  },
  computed: {
    model: {
      get () {
        return this.selfModel || this.value || 0
      },
      set (value) {
        this.selfModel = value
        this.updatePaneName()
        this.$emit('input', value)
      }
    }
  },
  methods: {
    // 收集分析子组件
    calcPaneInstances (isLabelUpdated = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter((VNode) => {
          return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-tab-pane')
        })
        const panes = paneSlots.map(({ componentInstance }) => componentInstance)
        const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]))
        if (isLabelUpdated || panesChanged) {
          this.panes = panes
          this.$nextTick(() => {
            this.currentPage = this.calcScrollBar().totalPage
            this.calcBalanceWidth()
            this.scrollable = this.currentPage > 0
          })
        }
      } else if (this.panes.length !== 0) {
        this.panes = []
      }
      // this.scrollable = true
    },
    updatePaneName () {
      this.panes.map((pane) => {
        pane.setActive(this.model)
      })
    },
    handleAddition () {
      this.$emit('on-addition')
    },
    handleShowList () {
      this.showList = !this.showList
    },
    handleRemove (name) {
      if (name) {
        this.$emit('on-remove', name)
      }
    }
  },
  mounted () {
    this.calcPaneInstances()
    this.updatePaneName()
    this.referenceScroll = this.$refs.scrollBar
    this.referenceNavs = this.$refs.navs
  },
  updated () {
    this.calcPaneInstances()
    this.updatePaneName()
    this.referenceScroll = this.$refs.scrollBar
    this.referenceNavs = this.$refs.navs
    this.model = this.value
  }
}
</script>
