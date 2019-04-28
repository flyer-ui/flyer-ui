<template>
    <div :class='["fly-select",{"is-disabled":disabled}]' ref='select'>
      <fly-input
      :value='selected'
      :placeholder='placeholder'
      :clearable='clearable'
      :disabled='disabled'
      readonly
      :suffix-icon='suffixIcon'
      @mouseup.native='showMenu'
      ref='reference'
      ></fly-input>
      <fly-select-dropdowns
       v-show='visible'
        ref='popper'>
        <slot name='default'></slot>
      </fly-select-dropdowns>
    </div>
</template>
<script>
import FlyInput from '~/components/input'
import FlySelectDropdowns from './dropdowns'
import PopperManager from '~/utils/popper-manager'
import {stop} from '~/utils/dom'

export default {
  name: 'FlySelect',
  components: {
    FlyInput,
    FlySelectDropdowns
  },
  props: {
    value: [Number, String, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: String
  },
  computed: {
    suffixIcon () {
      return this.visible ? 'fly-icon-chevron-up' : 'fly-icon-chevron-down'
    }
  },
  data () {
    return {
      visible: false,
      selected: ''
    }
  },
  methods: {
    showMenu ($event) {
      stop($event)
      if (this.disabled) return
      this.visible = !this.visible
      if (this.visible) {
        this.$refs.popper.$emit('updatePopper')
      }
    },
    executeSelected ({label, value}, $event) {
      this.selected = label
      this.showMenu($event)
      this.$emit('input', value)
      this.$emit('on-change', {value: value, label: label})
    }
  },
  mounted () {
    PopperManager.push(this)
  }
}
</script>
