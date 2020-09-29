<template>
    <div>
        <fly-checkbox-group class='fly-table__filter-panel-list' v-model="filtered">
            <fly-checkbox
            class="fly-table__filter-panel-item"
            v-for='(filter,index) in filters'
            :key='index'
            :label="filter.value">
            {{filter.text}}
            </fly-checkbox>
        </fly-checkbox-group>
        <div class='fly-table__filter-panel-buttons'>
            <fly-button size='small'
            :disabled="filtered.length===0"
            @click='handleConfirme'
            >确定</fly-button>
            <fly-button size='small'
            @click='handleReset'>重置</fly-button>
        </div>
    </div>
</template>

<script>
import FlyCheckbox from '~/components/checkbox'

export default {
  name: 'FlyTableFilterMultiplePanel',
  components: {
    FlyCheckbox
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
  data () {
    return {
      filtered: []
    }
  },
  methods: {
    handleConfirme () {
      this.$emit('filtered', this.filtered)
    },
    handleReset () {
      this.filtered = []
      this.$emit('filtered', this.filtered)
    }
  }
}
</script>
