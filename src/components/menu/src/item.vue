<template>
    <div class='fly-menu__item' @click="handleClick" :class='{"is-active":active}'>
        <slot name='default'>{{title}}</slot>
    </div>
</template>

<script>
import {findParentByName} from '~/utils/index'
export default {
  name: 'FlyMenuItem',
  props: {
    // 标题
    title: String,
    // 索引值
    index: String | Number | Boolean,
    // 含子节点
    hasChildren: Boolean,
    // 节点数据
    nodeData: {
      type: Object
    }
  },
  computed: {
    parent () {
      return findParentByName('FlyMenu', this)
    },
    active () {
      if (this.parent.defaultActive === this.index) {
        const name = this.$parent.$options.name
        if (name === 'FlySubMenu') {
          this.$parent.setHighlight()
        }
        return true
      }
      return false
    }
  },
  methods: {
    handleClick ($event) {
      if (this.hasChildren) {
        return false
      }
      this.notify($event)
    },
    notify ($event) {
      const name = this.$parent.$options.name
      if (name === 'FlySubMenu') {
        this.$parent.setActive(this.index, [this.index], this.nodeData, $event)
      } else if (name === 'FlyMenu' || name === 'FlyMenuGroup') {
        this.parent.$emit('click', this.index, [this.index], this.nodeData, $event)
      }
    }
  }
}
</script>
