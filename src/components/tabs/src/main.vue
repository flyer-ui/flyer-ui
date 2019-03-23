<template>
    <div class='fly-tab'>
      <div class='fly-tab__header is-show-list'>
         <span class='fly-tab__left'>
           <i class='fly-icon-chevron-left'></i>
         </span>
          <div class='fly-tab__navs'>
            <fly-tab-nav ref='nav' v-for='(nav,index) in navs'
            :key='index'>
            {{nav.label}}
            </fly-tab-nav>
          </div>
        <span class='fly-tab__right'>
          <i class='fly-icon-chevron-right'></i>
          <i class='fly-icon-add'></i>
          <i class='fly-icon-more-vertical'></i>
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
    }
  },
  data () {
    return {
      navs: []
    }
  },
  mounted () {
    this.findPaneInstance()
  },
  methods: {
    findPaneInstance () {
      const paneSlots = this.$slots.default.filter((VNode) => {
        return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-tab-pane')
      })
      this.navs = paneSlots.map(({componentInstance}) => componentInstance)
      console.log(this.navs)
      console.log(this)
    }
  }
}
</script>
