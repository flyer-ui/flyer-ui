<template>
    <div class='fly-tabs__more'>
        <div @click="handleClick(pane)"
          :class='["fly-tabs__nav",{"is-active": handleActive(pane)}]'
          v-for='(pane,index) in panes'
          :key='index'>
          {{pane.label||pane.$slot.label}}
          <i class='fly-icon fly-icon-close fly-tabs__close' @click="($event)=>{handleRemove(pane.name,$event)}"></i>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FlyTabMore',
  props: {
    panes: Array
  },
  methods: {
    handleClick (pane) {
      this.$parent.handleChange(pane.name)
      this.$parent.handleUpdateVisiblePane(pane)
    },
    handleActive (pane) {
      if (this.$parent.value === pane.name) {
        this.$parent.handleUpdateVisiblePane(pane)
        return true
      }
      return false
    },
    handleRemove (name, $event) {
      if (this.disabled) {
        return false
      }
      $event.stopPropagation()
      this.$emit('remove', name)
    }
  }
}
</script>
