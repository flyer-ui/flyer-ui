<template>
    <div :class='["fly-select",
    {"is-disabled":disabled},
    {"is-clearable":clearable}]'
    ref='select'>
      <div class='fly-select__tags' ref='tags' v-if='multiple'>
        <fly-tag
        v-for='(item,index) in selectedList'
        :key='index'
        closable
        @close='handleRemoveTag(item)'
        class='fly-select__tag'
        >{{item.label}}</fly-tag>
        <fly-icon v-if='tagMore'
          @click="handleVisibleTags"
          class='fly-select__tags-more'
          name='checkmore'>
        </fly-icon>
      </div>
      <fly-input
      :value='singleValue'
      :placeholder='innerPlaceholder'
      :clearable='clearable'
      :disabled='disabled'
      readonly
      :suffix-icon='`fly-icon-${suffixIcon}`'
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
      <tag-panel :tags='selectedList' :visible='visibleTagMore'
        ref='tagsDetail'></tag-panel>
    </div>
</template>
<script>
import FlyInput from '~/components/input'
import FlySelectDropdowns from './dropdowns'
import PopperManager from '~/utils/popper-manager'
import {stop} from '@flyer-ui/commonality'
import TagPanel from './tag-panel'

export default {
  name: 'FlySelect',
  provide () {
    return {
      parent: this
    }
  },
  components: {
    FlyInput,
    FlySelectDropdowns,
    TagPanel
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
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  computed: {
    suffixIcon () {
      return this.visible ? 'upward' : 'down'
    },
    singleValue () {
      if (this.multiple) {
        return ''
      }
      return Array.isArray(this.selectedList) && this.selectedList.length > 0
        ? this.selectedList[0].label : ''
    },
    innerPlaceholder () {
      return this.multiple ? '' : this.placeholder
    }
  },
  watch: {
    selectedList () {
      if (Array.isArray(this.selectedList) && this.selectedList.length === 0) {
        this.visibleTagMore = false
      }
    }
  },
  data () {
    return {
      selectedList: [],
      visible: false,
      tagMore: true,
      visibleTagMore: false
    }
  },
  methods: {
    handleClear ($event) {
      stop($event)
      this.selectedList = []
      this.visible = false
      this.$emit('input', '')
      this.$emit('clear', $event)
      this.$emit('change', {})
    },
    handleRemoveTag (item) {
      this.removeSelectedItem(item)
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
    handleSelected (data, $event) {
      if (!this.multiple) {
        this.selectedList = [data]
        if ($event) {
          this.showMenu($event)
          this.$emit('input', data.value)
          this.$emit('change', data.value, data)
        }
      } else {
        if (this.isSelected(data)) {
          this.removeSelectedItem(data)
        } else {
          this.selectedList.push(data)
        }
        if ($event) {
          this.emitMutipleEvent()
        }
        this.$nextTick(() => {
          this.calcTagsHeight()
        })
      }
    },
    handleMultiple (data) {
      if (!this.isSelected(data)) {
        this.selectedList.push(data)
      }
    },
    handleBlur ($event) {
      this.$emit('blur', $event)
    },
    handleFocus ($event) {
      this.$emit('focus', $event)
    },
    findByValue (value) {
      return this.selectedList.findIndex(item => {
        return item.value === value
      })
    },
    isSelected (data) {
      return this.findByValue(data.value) > -1
    },
    removeSelectedItem (item) {
      const index = this.findByValue(item.value)
      this.selectedList.splice(index, 1)
      this.emitMutipleEvent()
    },
    emitMutipleEvent () {
      this.$emit('input', this.selectedList.map(item => item.value))
      this.$emit('change', this.selectedList.map(item => item.value), this.selectedList)
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
