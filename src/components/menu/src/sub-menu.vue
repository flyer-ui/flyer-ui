<template>
    <div class='fly-sub-menu'>
         <fly-menu-item @mousemove.native="temp" :index='index' ref='menu'>
            <slot name='title'>{{title}}</slot>
            <fly-icon :name='icon'></fly-icon>
        </fly-menu-item>
         <div class='fly-sub-menu__items' v-show='showChild' ref='subMenu'>
            <slot name='default'></slot>
        </div>
    </div>
</template>

<script>
import zIndexManage from '~/mixins/zIndexManage'
import Popover from '~/mixins/popover'
import {stop, debounce} from '@flyer-ui/commonality'
import FlyMenuItem from './item'

export default {
  name: 'FlySubMenu',
  components: {
    FlyMenuItem
  },
  data () {
    return {
      showChild: false,
      icon: 'down'
    }
  },
  computed: {
    hasChild () {
      return !!this.$slots.default
    }
  },
  props: {
    // 标题
    title: String,
    // 索引值
    index: String | Number | Boolean
  },
  methods: {
    setActive () {
      console.log('The component is set to active state.')
    },
    temp () {
      return debounce(() => {
        if (this.hasChild) {
          const menu = this.$refs.menu.$el
          const subMenu = this.$refs.subMenu
          const popover = new Popover(subMenu, menu)
          let timeout = null

          popover.$element.style.zIndex = zIndexManage.get()
          console.log('menu', menu)
          console.log('subMenu', subMenu)
          menu.addEventListener('mouseover', (e) => {
            stop(e)
            this.showChild = true
            this.icon = 'upward'
            clearTimeout(timeout)
          })
          subMenu.addEventListener('mouseover', (e) => {
            stop(e)
            clearTimeout(timeout)
            this.showChild = true
            this.icon = 'upward'
          })
          menu.addEventListener('mouseout', (e) => {
            stop(e)
            // this.showChild = false
            timeout = setTimeout(() => {
              this.showChild = false
              this.icon = 'down'
            }, 100)
          })
          subMenu.addEventListener('mouseout', (e) => {
            stop(e)
            // this.showChild = false
            timeout = setTimeout(() => {
              this.showChild = false
              this.icon = 'down'
            }, 100)
          })
          // if (this.index === 4.4) {
          //   console.log('This is a special one.', subMenu.$parent)
          //   debugger
          //   subMenu.parentNode.appendChild(popover.$element)
          // } else {
          //   document.body.appendChild(popover.$element)
          // }
          document.body.appendChild(popover.$element)
        }
      }, 10)()
    }
  }
}
</script>
