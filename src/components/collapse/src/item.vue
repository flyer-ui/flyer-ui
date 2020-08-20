<template>
    <div class='fly-collapse__item'>
        <div class='fly-collapse__title' @click='handleClick'>
            <slot name='title'>
                {{title}}
            </slot>
            <fly-icon class='fly-collapse__icon' :name='iconName'></fly-icon>
        </div>
        <div class='fly-collapse__content' v-show='visible'>
            <slot name='default'></slot>
        </div>
    </div>
</template>

<script>
import {findParentByName} from '~/utils/index'
export default {
  name: 'FlyCollapseItem',
  props: {
    // 面板标题
    title: String,
    // 唯一标识名称
    name: String | Number
  },
  data () {
    return {
      model: false
    }
  },
  computed: {
    parent () {
      return findParentByName('FlyCollapse', this)
    },
    visible () {
      return this.parent.accordion ? this.name === this.parent.value : this.model
    },
    iconName () {
      return this.visible ? 'upward' : 'down'
    }
  },
  created () {
    this.model = this.name === this.parent.value
  },
  methods: {
    handleClick () {
      this.model = !this.model
      this.parent.$emit('input', this.name)
      this.parent.$emit('change', this.name)
    }
  }
}
</script>
