<template>
    <div class='fly-table__filter-panel-list'>
        <div class="fly-table__filter-panel-item"
         @click="handleConfirme(filter.value)" v-for='(filter,index) in Filters'
            :key='index'>
            {{filter.text}}
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
  computed: {
    Filters () {
      const filters = this.filters
      if (filters.length > 0 && filters.findIndex(filter => filter.value === '-1') === 0) {
        filters.unshift({
          text: '全部',
          value: '-1'
        })
      }
      return filters
    }
  },
  methods: {
    handleConfirme (value) {
      this.$emit('filtered', value)
    }
  }
}
</script>
