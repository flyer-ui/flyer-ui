<template>
    <div class='fly-tab'>
      <div :class='["fly-tab__header",{"is-sscrollable":scrollable}]'>
         <span v-if='scrollable' class='fly-tab__left'>
           <i class='fly-icon-chevron-left' @click='handleLeftPull'></i>
         </span>
         <div class='fly-tab__scroll'>
          <div class='fly-tab__navs' :style='{"transform":`translate(${translateX}px)`}'>
            <fly-tab-nav ref='nav' :pane='nav' v-for='(nav,index) in navs'
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
  name: 'FlyTab',
  components: {
    FlyTabNav,
    FlyTabPane
  },
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
    },
    addable: {
      type: Boolean,
      default: false
    },
    showAllTags: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      navs: [],
      showList: false,
      scrollable: false,
      currentTranslateX: 0
    }
  },
  computed: {
    scrollWidth () {
      return this.scroll.scrollWidth - this.navsWidth
    },
    navsWidth () {
      return this.scroll.offsetWidth
    },
    scroll () {
      return document.getElementsByClassName('fly-tab__scroll')[0]
    },
    translateX: {
      get () {
        return this.currentTranslateX
      },
      set (value) {
        this.currentTranslateX = value
      }
    }
  },
  mounted () {
    this.findPaneInstance()
  },
  updated () {
    // this.findPaneInstance()
  },
  methods: {
    handleAddition () {
      this.$emit('on-addition')
    },
    handleLeftPull () {
      if (this.scroll.scrollWidth + this.translateX >= this.scroll.offsetWidth) {
        this.translateX = this.translateX - this.scroll.offsetWidth
      } else {
        this.translateX = this.translateX - (this.scroll.scrollWidth + this.translateX)
      }
    },
    handleRightPull () {
      if (this.translateX + this.scroll.offsetWidth < 0) {
        this.translateX = this.translateX + this.scroll.offsetWidth
      } else {
        this.translateX = 0
      }
    },
    handleShowList () {
      this.showList = !this.showList
    },
    findPaneInstance () {
      const paneSlots = this.$slots.default.filter((VNode) => {
        return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-tab-pane')
      })
      this.navs = paneSlots.map(({componentInstance}) => componentInstance)
      this.showPullButton = this.scroll.scrollWidth > this.scroll.offsetWidth
      // console.log(this.scroll.scrollWidth)
      console.log(this.navs)
    }
  }
}
</script>
