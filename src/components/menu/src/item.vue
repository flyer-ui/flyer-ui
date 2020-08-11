<template>
    <div class='fly-menu__item' :class='{"is-active":active,"is-has-child":hasChild}'>
        <div @click="handleClick" ref='menu'>
          <slot name='default'>{{title}}</slot>
          <fly-icon :name='iconName' v-if='hasChild'></fly-icon>
        </div>
        <div class='fly-menu__sub-item' v-show='showChild' ref='subMenu'>
            <slot name='sub-menu'></slot>
        </div>
    </div>
</template>

<script>
import {findParentByName} from '~/utils/index'
import Popover from '~/mixins/popover'
import {stop} from '@flyer-ui/commonality'

export default {
  name: 'FlyMenuItem',
  data () {
    return {
      showChild: false,
      iconName: 'down'
    }
  },
  props: {
    // 标题
    title: String,
    // 索引值
    index: String | Number | Boolean
  },
  computed: {
    parent () {
      return findParentByName('FlyMenu', this)
    },
    active () {
      return this.parent.value === this.index
    },
    hasChild () {
      return !!this.$slots['sub-menu']
    }
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', this.index, $event)
      this.parent.$emit('click', this.index)
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.hasChild) {
        const menu = this.$refs.menu
        const subMenu = this.$refs.subMenu
        const popover = new Popover(subMenu, menu)
        let timeout = null

        popover.$element.style.zIndex = 999
        // popover.$element.style.display = 'block'
        console.log('menu', menu)
        console.log('subMenu', subMenu)
        menu.addEventListener('mouseover', (e) => {
          stop(e)
          this.showChild = true
          this.iconName = 'upward'
          clearTimeout(timeout)
        })
        subMenu.addEventListener('mouseover', (e) => {
          stop(e)
          clearTimeout(timeout)
          this.showChild = true
          this.iconName = 'upward'
        })
        menu.addEventListener('mouseout', (e) => {
          stop(e)
          // this.showChild = false
          timeout = setTimeout(() => {
            this.showChild = false
            this.iconName = 'down'
          }, 200)
        })
        subMenu.addEventListener('mouseout', (e) => {
          stop(e)
          // this.showChild = false
          timeout = setTimeout(() => {
            this.showChild = false
            this.iconName = 'down'
          }, 200)
        })
        document.body.appendChild(popover.$element)
        console.log(popover)
      }
    })
  }
}
</script>
