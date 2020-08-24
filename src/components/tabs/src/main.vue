<template>
    <div class='fly-tabs'>
        <div class='fly-tabs__navs' ref='selector'>
          <tab-nav
              :pane='pane'
              :closable='closable'
              :disabled='pane.disabled'
              :name='pane.name || index'
              @remove='handleRemove'
              v-for='(pane,index) in visiblePanes'
              :key='index'>
          </tab-nav>
          <fly-icon
            v-show='showMore'
            @mouseover.native="handleMouseOverIcon"
            @mouseout.native="handleMouseOutIcon"
            :name='iconName'
            class='fly-tabs__more-icon'>
          </fly-icon>
        </div>
        <slot name='default'></slot>
        <tab-more
        ref='element'
        :panes='panes'
        @mouseover.native="handleMouseOverIcon"
        @mouseout.native="handleMouseOutIcon"
        @remove='handleRemove'
        v-show="showMorePane"></tab-more>
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
      default: 10
    }
  },
  computed: {
    showMore () {
      return this.visiblePanes.length < this.panes.length
    },
    iconName () {
      return this.showMorePane ? 'upward' : 'down'
    }
  },
  data () {
    return {
      model: '',
      panes: [],
      visiblePanes: [],
      showMorePane: false
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
      this.morePanes = []
      slots.forEach((slot, index) => {
        this.panes.push(slot.componentInstance)
        if (this.visibleTabs > index) {
          this.visiblePanes.push(slot.componentInstance)
        }
      })
    },
    handlePopover () {
      // Popover.mode = 'development'
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
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.showMorePane = true
      this.$nextTick(() => {
        const element = this.$refs.element.$el
        const selector = this.$refs.selector
        this.popover.update({
          offset: [
            (selector.offsetWidth - element.offsetWidth), 0
          ]
        })
      })
    },
    handleMouseOutIcon () {
      this.timeout = setTimeout(() => {
        this.showMorePane = false
      }, 500)
    },
    handleUpdateVisiblePane (pane) {
      if (this.visiblePanes.findIndex(visiblePane => {
        return pane.name === visiblePane.name
      }) < 0) {
        this.visiblePanes.pop()
        this.visiblePanes.push(pane)
      }
    },
    handleRemove (name) {
      if (name) {
        this.$emit('remove', name)
      }
    },
    handleChange (name) {
      this.$emit('input', name)
      this.$emit('change', name)
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
