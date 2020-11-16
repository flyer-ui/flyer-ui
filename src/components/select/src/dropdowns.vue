<template>
    <div class='fly-select-dropdowns' v-show='visible'>
        <ul class='fly-select-dropdowns__list'>
            <slot></slot>
        </ul>
        <div class='fly-select-dropdowns__arrow'></div>
    </div>
</template>
<script>
import Popover from '~/mixins/popover'
import zIndexManager from '~/mixins/zIndex-manage'
export default {
  name: 'FlySelectDropdowns',
  props: {
    visible: Boolean
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
      this.referenceElm = this.$parent.$refs.select
      this.popperElm = this.$parent.$refs.popper.$el
      this.popover = new Popover(this.popperElm, this.referenceElm, {
        offset: [0, 10]
      })
      this.popover.$element.style.minWidth = this.referenceElm.offsetWidth + 'px'
      this.popover.$element.style.zIndex = zIndexManager.get()
      document.body.appendChild(this.popover.$element)
    }
  }
}
</script>
