<template>
    <div class='fly-select-tag-detail' ref='tagDetail' v-show="visible">
        <fly-tag
        v-for='(tag,index) in tags'
        :key='index'
        closable
        @close='handleRemoveTag(tag)'
        class='fly-select__tag'
        >{{tag.label}}</fly-tag>
    </div>
</template>

<script>
import Popover from '~/mixins/popover'
import zIndexManager from '~/mixins/zIndex-manage'
export default {
  name: 'FlySelectTagDetail',
  inject: ['parent'],
  props: {
    tags: {
      type: [Array],
      default () {
        return []
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible () {
      if (this.popover) {
        this.popover.update()
      } else {
        this.init()
      }
    }
  },
  methods: {
    init () {
      this.referenceElm = this.parent.$refs.select
      this.popperElm = this.parent.$refs.tagsDetail.$el
      setTimeout(() => {
        this.popover = new Popover(this.popperElm, this.referenceElm, {
          offset: [10, 0],
          placement: 'right'
        })
        this.popover.$element.style.width = this.referenceElm.offsetWidth + 'px'
        this.popover.$element.style.zIndex = zIndexManager.get()
      }, 0)
    },
    handleRemoveTag (item) {
      this.parent.handleRemoveTag(item)
    }
  }
}
</script>
