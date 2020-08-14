<template>
    <div class='fly-menu__item' :class='{"is-active":active}'>
        <div @click="handleClick" ref='menu'>
          <slot name='default'>{{title}}</slot>
        </div>
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
    index: String | Number | Boolean
  },
  computed: {
    parent () {
      return findParentByName('FlyMenu', this)
    },
    subParent () {
      return findParentByName('FlySubMenu', this)
    },
    active () {
      return this.parent.defaultActive === this.index
    }
  },
  methods: {
    handleClick ($event) {
      if (this.hasChild) {
        return false
      }
      this.$emit('click', this.index, $event)
      this.parent.$emit('click', this.index, $event)
      this.subParent && this.subParent.setActive()
    }
  }
}
</script>
