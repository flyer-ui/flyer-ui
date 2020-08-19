<template>
    <div class='fly-select-dropdowns'>
        <ul class='fly-select-dropdowns__list'>
            <slot></slot>
        </ul>
    </div>
</template>
<script>
import Popover from '~/mixins/popover'
import zIndexManager from '~/mixins/zIndexManage'
export default {
  name: 'FlySelectDropdowns',
  mounted () {
    this.referenceElm = this.$parent.$refs.select
    this.popperElm = this.$parent.$refs.popper.$el
    this.popover = new Popover(this.popperElm, this.referenceElm)
    this.popover.$element.style.minWidth = this.referenceElm.offsetWidth + 'px'
    this.popover.$element.style.zIndex = zIndexManager.get()
    document.body.appendChild(this.popover.$element)
  }
}
</script>
