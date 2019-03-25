<template>
    <div class='fly-tab'>
      <div :class='["fly-tab__header",{"is-show-pull-button":showPullButton}]'>
         <span v-if='showPullButton' class='fly-tab__left'>
           <i class='fly-icon-chevron-left' @click='handleLeftPull'></i>
         </span>
         <div class='fly-tab__scroll'>
          <div class='fly-tab__navs' :style='{"transform":`translate(${translateX}px)`}'>
            <fly-tab-nav ref='nav' v-for='(nav,index) in navs'
            :key='index'>
            {{nav.label}}
            </fly-tab-nav>
          </div>
        </div>
        <span class='fly-tab__right'>
          <i class='fly-icon-chevron-right' v-if='showPullButton' @click='handleRightPull'></i>
          <i class='fly-icon-add' @click='handleAddition'></i>
          <i class='fly-icon-more-vertical' v-if='showAllTags' @click='handleShowList'></i>
          <div class='fly-tab__tab-list' v-show='showList'>
            <div v-for='(nav,index) in navs' :key='index'>
              {{nav.label}}
            </div>
          </div>
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
    showAllTags: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      navs: [],
      showList: false,
      showPullButton: false,
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
      console.log(this.scroll.scrollWidth)
    }
  }
}
</script>
