<template>
    <div class='fly-menu__item' :class='{"is-active":active}'>
        <div @click="handleClick"><slot name='default'>{{title}}</slot></div>
        <div class='fly-menu__sub-item'>
            <slot name='sub-menu'></slot>
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
    active () {
      return this.parent.value === this.index
    }
  },
  methods: {
    handleClick ($event) {
      this.$emit('click', this.index, $event)
      this.parent.$emit('click', this.index)
    }
  }
}
</script>
