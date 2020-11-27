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
        @close='handleRemoveTag(index)'
        class='fly-select__tag'
        >{{item}}</fly-tag>
        <fly-icon v-if='tagMore' @click="handleVisibleTags" class='fly-select__tags-more' name='checkmore'></fly-icon>
      </div>
      <fly-input
      :value='singleValue'
      :placeholder='usablePlaceHolder'
      :clearable='clearable'
      :disabled='disabled'
      readonly
      :suffix-icon='suffixIcon'
      @mouseup.native='showMenu'
      @blur='handleBlur'
      @focus='handleFocus'
      @clear='handleClear'
      ref='reference'
      ></fly-input>
      <fly-select-dropdowns
        :visible='visible'
        ref='popper'>
        <slot name='default'></slot>
      </fly-select-dropdowns>
      <fly-tags-detail :tags='selected' :visible='visibleTagMore'
        ref='tagsDetail'></fly-tags-detail>
    </div>
</template>
<script>
import FlyInput from '~/components/input'
import FlySelectDropdowns from './dropdowns'
import PopperManager from '~/utils/popper-manager'
import {stop} from '@flyer-ui/commonality'
import FlyTagsDetail from './tag-detail'

export default {
  name: 'FlySelect',
  provide () {
    return {
      select: this
    }
  },
  components: {
    FlyInput,
    FlySelectDropdowns,
    FlyTagsDetail
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
      return this.visible ? 'fly-icon-upward' : 'fly-icon-down'
    },
    singleValue () {
      return this.multiple ? '' : this.selected
    },
    usablePlaceHolder () {
      return this.multiple && this.selectedValues.length > 0 ? '' : this.placeholder
    }
  },
  watch: {
    selected () {
      if (this.selected.length === 0) {
        this.visibleTagMore = false
      }
    }
  },
  data () {
    return {
      visible: false,
      selected: this.multiple ? '' : this.value,
      selectedValues: [],
      tagMore: false,
      visibleTagMore: false
    }
  },
  methods: {
    handleBlur ($event) {
      this.$emit('blur', $event)
    },
    handleFocus ($event) {
      this.$emit('focus', $event)
    },
    handleClear ($event) {
      stop($event)
      this.selected = ''
      this.visible = false
      this.$emit('input', '')
      this.$emit('clear', $event)
      this.$emit('change', {})
    },
    handleRemoveTag (index) {
      this.selected.splice(index, 1)
      this.selectedValues.splice(index, 1)
      this.$nextTick(() => {
        this.calcTagsHeight()
      })
    },
    handleVisibleTags () {
      this.visibleTagMore = !this.visibleTagMore
    },
    showMenu ($event) {
      stop($event)
      if (this.disabled) return
      this.visible = !this.visible
    },
    calcTagsHeight () {
      const eleTags = this.$refs.tags
      if (eleTags.scrollHeight > 30) {
        this.tagMore = true
      } else {
        this.tagMore = false
      }
    },
    executeSelected ({label, value}, $event) {
      if (!this.multiple) {
        this.selected = label
        if ($event) {
          this.showMenu($event)
          this.$emit('input', value)
          this.$emit('change', {value: value, label: label})
        }
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
          this.calcTagsHeight()
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
