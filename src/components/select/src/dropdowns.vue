<template>
    <div class='fly-select-dropdowns' :style='{"min-width":minWidth}'>
        <ul class='fly-select-dropdowns__list'>
            <slot></slot>
        </ul>
    </div>
</template>
<script>
import VuePopper from '~/mixins/vue-popper'
export default {
  name: 'FlySelectDropdowns',
  mixins: [VuePopper],
  data () {
    return {
      minWidth: 0
    }
  },
  mounted () {
    this.referenceElm = this.$parent.$refs.reference.$el
    this.popperElm = this.$parent.$refs.popper.$el
    this.$on('updatePopper', () => {
      this.$parent.visible && this.updatePopper()
    })
    this.minWidth = this.referenceElm.offsetWidth + 'px'
  }
}
</script>
