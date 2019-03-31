<template>
    <div class='fly-tab'>
      <div :class='["fly-tab__header",{"is-sscrollable":scrollable}]'>
         <span v-if='scrollable' class='fly-tab__left'>
           <i class='fly-icon-chevron-left' @click='handleLeftPull'></i>
         </span>
         <div class='fly-tab__scroll'>
          <div class='fly-tab__navs' :style='{"transform":`translate(${translateX}px)`}'>
            <fly-tab-nav ref='nav'
              v-model='model'
              :pane='pane'
              :name='pane.name'
              v-for='(pane,index) in panes'
              :key='index'>
            </fly-tab-nav>
          </div>
        </div>
        <span class='fly-tab__right'>
          <i class='fly-icon-chevron-right' v-if='scrollable' @click='handleRightPull'></i>
         </span>
      </div>
      <div class='fly-tab__content'>
        <slot name='default'></slot>
      </div>
    </div>
</template>
<script>
import FlyTabNav from './nav'
import FlyTabPane from './pane'
export default {
  name: 'FlyTabs',
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
      currentTranslateX: 0,
      selfModel: '',
      panes: []
    }
  },
  computed: {
    translateX: {
      get () {
        return this.currentTranslateX
      },
      set (value) {
        this.currentTranslateX = value
      }
    },
    model: {
      get () {
        return this.selfModel || this.value
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
    calcPaneInstances () {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter((VNode) => {
          return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-tab-pane')
        })
        this.panes = paneSlots.map(({componentInstance}) => componentInstance)
      } else if (this.panes.length !== 0) {
        this.panes = []
      }
    },
    updatePaneName () {
      this.panes.map((pane) => {
        pane.setActive(this.model)
      })
    }
  },
  mounted () {
    // 收集子组件
    this.calcPaneInstances()
    this.updatePaneName()
  },
  updated () {
    this.$nextTick(() => {
      console.log(this.$children)
      // this.calcPaneInstances()
    })
  }
}
</script>
