<template>
    <div v-show='visible' class='fly-table__filter-panel' ref='element'>
      <filter-multiple
        @filtered='handleFiltered'
        v-if='filters.length>0 && filterMultiple'
        v-bind="$props">
      </filter-multiple>
      <filter-single
        @filtered='handleFiltered'
        v-if='filters.length>0 && !filterMultiple'
        v-bind="$props">
      </filter-single>
      <div v-if='filters.length===0' class='fly-table__filter-panel-empty'>
        没有过滤条件
      </div>
    </div>
</template>

<script>
import Popover from '~/mixins/popover.js'
import zIndexManage from '~/mixins/zIndex-manage.js'
import PopperManager from '~/utils/popper-manager'
import FilterMultiple from './filter-multiple'
import FilterSingle from './filter-single'

export default {
  name: 'FlyTableFilterPanel',
  components: {
    FilterMultiple,
    FilterSingle
  },
  data () {
    return {
      visible: false
    }
  },
  props: {
    filters: {
      type: Array,
      default () {
        return []
      }
    },
    filterMultiple: {
      type: Boolean,
      default: true
    },
    filteredValue: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handlePopover () {
      if (!this.$refs.element) {
        return
      }
      const element = this.$refs.element
      const selector = this.$parent.$el
      this.popover = new Popover(
        element,
        selector,
        {placement: 'bottom'}
      )
      this.popover.$element.style.zIndex = zIndexManage.get()
      document.body.appendChild(this.popover.$element)
    },
    handleFiltered (filtered) {
      this.$emit('filtered', filtered)
      this.visible = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.handlePopover()
    })
    PopperManager.push(this)
  }
}
</script>
