import FlyCheckbox from '../../checkbox/index'
import {findParentByName} from '~/utils/index'
import FilterPanel from './filter-panel.vue'

export default {
  name: 'FlyTableTh',
  components: {
    FlyCheckbox,
    FilterPanel
  },
  data () {
    return {
      sortExplain: 'desc',
      indeterminate: false,
      value: false,
      filtered: []
    }
  },
  props: {
    sortProp: String,
    column: Object
  },
  computed: {
    parent () {
      return findParentByName('FlyTable', this)
    },
    iconActive () {
      if (Array.isArray(this.filtered)) {
        return this.filtered.length > 0
      } else {
        return this.filtered !== '-1'
      }
    }
  },
  methods: {
    handleCheckboxAll (value) {
      this.parent.$store.addAllSelection(this.column.prop, value)
    },
    handleSort (column, sortExplain) {
      this.sortExplain = sortExplain
      this.$parent.handleSort(column, this.sortExplain)
    },
    handleFilter () {
      this.$refs.element.visible = !this.$refs.element.visible
    },
    handleFiltered (filtered) {
      this.filtered = filtered
      this.parent.$store.setFilterd(this.column.prop, filtered)
    },
    renderCheckbox (h, column) {
      const setSelected = (keys)=>{
        const data = this.parent.$store.getData()
        this.indeterminate = keys.length > 0 && keys.length < data.length
        this.value = keys.length === data.length && keys.length > 0
      }
      this.parent.$store.subscribe('selection', (keys = []) => {
        setSelected(keys)
      })
      const keys = this.parent.$store.getSelectionKeys()
      setSelected(keys)
      return <fly-checkbox
        value={this.value}
        indeterminate={this.indeterminate}
        onChange={this.handleCheckboxAll}>
      </fly-checkbox>
    },
    renderContent (h, column) {
      return (column.type === 'checkbox'
        ? this.renderCheckbox(h, column)
        : column.label)
    },
    renderSort (h, column) {
      return (
        column.sortable
          ? (<div class='fly-table__icon-sort'>
            <fly-icon
              onClick={() => this.handleSort(column, 'asc')}
              class={['fly-table__icon is-ascing',
                {'is-active': this.sortProp === column.prop && this.sortExplain === 'asc'}]}
              name='arrow-up'>
            </fly-icon>
            <fly-icon
              onClick={() => this.handleSort(column, 'desc')}
              class={['fly-table__icon is-descending',
                {'is-active': this.sortProp === column.prop && this.sortExplain === 'desc'}]}
              name='arrow-down'>
            </fly-icon>
          </div>) : ''
      )
    },
    renderFilter (h, column) {
      return (
        column.filterable
          ? (<fly-icon
            onClick={() => this.handleFilter()}
            class={['fly-table__icon', {'is-active': this.iconActive}]} name='filter'>
            <FilterPanel
              on-filtered={this.handleFiltered}
              filters={column.filters}
              filterMultiple={column.filterMultiple}
              filteredValue={column.filteredValue}
              ref='element'></FilterPanel>
          </fly-icon>)
          : ''
      )
    }
  },
  render (h) {
    return (<th class='fly-table__th'>
      {this.renderContent(h, this.column)}
      {this.renderSort(h, this.column)}
      {this.renderFilter(h, this.column)}
    </th>)
  }
}
