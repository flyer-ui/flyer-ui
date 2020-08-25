<template>
    <div class='fly-sub-menu' @mousemove='handleMouseOver' @mouseout="handleMouseOut" ref='container'>
         <fly-menu-item hasChildren :index='index' ref='menu' :class='{"is-active":highlight}'>
            <slot name='title'>{{title}}</slot>
            <fly-icon :name='icon'></fly-icon>
        </fly-menu-item>
         <div class='fly-sub-menu__items' v-show='showChild' ref='subMenu'>
            <slot name='default'></slot>
        </div>
    </div>
</template>

<script>

import zIndexManage from '~/mixins/zIndex-manage'
import Popover from '~/mixins/popover'
import {on} from '@flyer-ui/commonality'
import FlyMenuItem from './item'
import {findParentByName} from '~/utils/index'

export default {
  name: 'FlySubMenu',
  components: {
    FlyMenuItem
  },
  data () {
    return {
      showChild: false,
      highlight: false,
      icon: 'down',
      childrenIndex: []
    }
  },
  computed: {
    parent () {
      return findParentByName('FlyMenu', this)
    }
  },
  watch: {
    'parent.defaultActive' () {
      this.highlight = false
    }
  },
  props: {
    // 标题
    title: String,
    // 索引值
    index: String | Number | Boolean
  },
  methods: {
    setActive (index, paths, $event) {
      const name = this.$parent.$options.name
      if (name === 'FlySubMenu') {
        this.$parent.setActive(index, [this.index, ...paths], $event)
      } else if (name === 'FlyMenu') {
        this.parent.$emit('click', index, [this.index, ...paths], $event)
      }
    },
    setHighlight () {
      this.highlight = true
      const name = this.$parent.$options.name
      if (name === 'FlySubMenu') {
        this.$parent.setHighlight()
      }
    },
    handleMouseOver ($event) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.showChild = true
      if (this.$parent.$options.name === 'FlySubMenu') {
        this.$refs.subMenu.style.left = `${this.$refs.container.offsetWidth + 20}px`
      } else {
        this.popover.update()
      }
    },
    handleMouseOut ($event) {
      this.timeout = setTimeout(() => {
        this.showChild = false
      }, 500)
    }
  },
  mounted () {
    if (this.$parent.$options.name === 'FlyMenu') {
      const element = this.$refs.subMenu
      const selector = this.$refs.container
      this.popover = new Popover(element, selector)
      this.popover.$element.style.zIndex = zIndexManage.get()
      on(element, 'mouseover', this.handleMouseOver)
      on(element, 'mouseout', this.handleMouseOut)
      document.body.appendChild(this.popover.$element)
    }
    this.$slots.default.forEach(node => {
      if (node.componentInstance) {
        this.childrenIndex.push(node.componentInstance.index)
      }
    })
  }
}
</script>
