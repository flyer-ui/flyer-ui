<template>
    <div class='fly-tabs'>
        <div class='fly-tabs__navs' ref='selector'>
          <tab-nav
              v-model='model'
              :pane='pane'
              :closable='closable'
              :disabled='pane.disabled'
              :name='pane.name || index'
              v-for='(pane,index) in visiblePanes'
              :key='index'>
          </tab-nav>
          <fly-icon
            v-show='showMore'
            @mouseover.native="handleMouseOverIcon"
            name='checkmore'
            class='fly-tabs__more-icon'
            font-size='18px'>
          </fly-icon>
        </div>
        <slot name='default'></slot>
        <tab-more ref='element'></tab-more>
    </div>
</template>

<script>
import TabNav from './nav'
import TabMore from './more'
import Popover from '~/mixins/popover.js'
export default {
  name: 'FlyTabs',
  components: {
    TabNav,
    TabMore
  },
  props: {
    value: String | Number,
    closable: {
      type: Boolean,
      default: false
    },
    // 显示页签的长度
    visibleTabs: {
      type: Number,
      default: 1
    }
  },
  computed: {
    showMore () {
      return this.visiblePanes.length < this.panes.length
    }
  },
  data () {
    return {
      model: '',
      panes: [],
      visiblePanes: []
    }
  },
  methods: {
    handlePanes () {
      const slots = this.$slots.default.filter(VNode => {
        return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-tab-pane')
      })
      if (this.panes.length === slots.length) {
        return false
      }
      this.panes = []
      this.visiblePanes = []
      slots.forEach((slot, index) => {
        this.panes.push(slot.componentInstance)
        if (this.visibleTabs > index) {
          this.visiblePanes.push(slot.componentInstance)
        }
      })
    },
    handlePopover () {
      Popover.mode = 'development'
      const element = this.$refs.element.$el
      const selector = this.$refs.selector
      this.popover = new Popover(
        element,
        selector,
        {placement: 'bottom'}
      )
      document.body.appendChild(this.popover.$element)
    },
    handleMouseOverIcon () {
      this.popover.update()
    }
  },
  created () {
    this.model = this.value
  },
  updated () {
    this.handlePanes()
  },
  mounted () {
    this.handlePanes()
    this.$nextTick(() => {
      this.handlePopover()
    })
  }
}
</script>
