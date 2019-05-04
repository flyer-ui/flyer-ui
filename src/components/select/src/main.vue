<template>
    <div :class='["fly-select",
    {"is-disabled":disabled},
    {"is-clearable":clearable}]'
    ref='select'>
      <div class='fly-select__tags' ref='tags' v-if='multiple'>
        <fly-tag
        v-for='(item,index) in selected'
        :key='item'
        closable
        @on-close='handleRemoveTag(index)'
        class='fly-select__tag'
        >{{item}}</fly-tag>
      </div>
      <fly-input
      :value='singleValue'
      :placeholder='usablePlaceHolder'
      :clearable='clearable'
      :disabled='disabled'
      readonly
      :suffix-icon='suffixIcon'
      @mouseup.native='showMenu'
      @on-blur='handleBlur'
      @on-focus='handleFocus'
      @on-clear='handleClear'
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
  provide () {
    return {
      select: this
    }
  },
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
    },
    singleValue () {
      return this.multiple ? '' : this.selected
    },
    usablePlaceHolder () {
      return this.multiple && this.selectedValues.length > 0 ? '' : this.placeholder
    }
  },
  data () {
    return {
      visible: false,
      selected: '',
      selectedValues: []
    }
  },
  methods: {
    handleBlur ($event) {
      this.$emit('on-blur', $event)
    },
    handleFocus ($event) {
      this.$emit('on-focus', $event)
    },
    handleClear ($event) {
      stop($event)
      this.selected = ''
      this.visible = false
      this.$emit('input', '')
      this.$emit('on-clear', $event)
      this.$emit('on-change', {})
    },
    handleRemoveTag (index) {
      this.selected.splice(index, 1)
      this.selectedValues.splice(index, 1)
      this.$nextTick(() => {
        this.calcInputHeight()
      })
    },
    showMenu ($event) {
      stop($event)
      if (this.disabled) return
      this.visible = !this.visible
      if (this.visible) {
        this.$refs.popper.$emit('updatePopper')
      }
    },
    executeSelected ({label, value}, $event) {
      if (!this.multiple) {
        this.selected = label
        this.showMenu($event)
        this.$emit('input', value)
        this.$emit('on-change', {value: value, label: label})
      } else {
        if (!Array.isArray(this.selected)) {
          this.selected = []
        }
        if (this.hasValue(value)) {
          this.removeValue(value)
          this.removeLabel(label)
        } else {
          this.selected.push(label)
          this.selectedValues.push(value)
        }
        this.$emit('input', this.selectedValues)
        this.$nextTick(() => {
          this.calcInputHeight()
        })
      }
    },
    findByValue (value) {
      return this.selectedValues.findIndex(_ => {
        return _ === value
      })
    },
    findByLabel (label) {
      return this.selected.findIndex(_ => {
        return _ === label
      })
    },
    hasValue (value) {
      return this.findByValue(value) > -1
    },
    removeValue (value) {
      this.selectedValues.splice(this.findByValue(value), 1)
    },
    removeLabel (label) {
      this.selected.splice(this.findByLabel(label), 1)
    },
    calcInputHeight () {
      const th = this.$refs.tags.offsetHeight
      const input = this.$refs.reference.$el.querySelector('.fly-input__native')
      if (!this.nativeHeight) {
        this.nativeHeight = input.offsetHeight
      }
      if (this.nativeHeight < th) {
        input.style.height = th + 'px'
      } else {
        input.style.height = this.nativeHeight + 'px'
      }
    },
    focus () {
      this.$refs.reference.focus()
    },
    blur () {
      this.$refs.reference.blur()
      this.visible = false
    }
  },
  mounted () {
    PopperManager.push(this)
  }
}
</script>
