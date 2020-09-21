import FlyCheckbox from '../../checkbox/index'
import {findParentByName} from '~/utils/index'
export default {
  name: 'FlyTableTh',
  components: {
    FlyCheckbox
  },
  data () {
    return {
      sortExplain: 'desc',
      indeterminate: false,
      value: false
    }
  },
  props: {
    sortProp: String,
    column: Object
  },
  computed: {
    parent () {
      return findParentByName('FlyTable', this)
    }
  },
  methods: {
    handleCheckboxAll (value) {
      this.parent.$store.addAllSelection(this.column.prop, value)
    },
    handleSort (column) {
      if (this.sortExplain === 'asc') {
        this.sortExplain = 'desc'
      } else {
        this.sortExplain = 'asc'
      }
      this.$parent.handleSort(column.prop, this.sortExplain)
    },
    renderCheckbox (h, column) {
      this.parent.$store.addObserver((keys = []) => {
        const data = this.parent.$store.getData()
        this.indeterminate = keys.length > 0 && keys.length < data.length
        this.value = keys.length === data.length
      })
      return <fly-checkbox value={this.value} indeterminate={this.indeterminate} onChange={this.handleCheckboxAll}></fly-checkbox>
    },
    renderContent (h, column) {
      return (column.type === 'checkbox'
        ? this.renderCheckbox(h, column)
        : column.label)
    },
    renderSort (h, column) {
      return (
        column.sortable
          ? <fly-icon
            onClick={() => this.handleSort(column)}
            class={['fly-table__icon', {'is-active': this.sortProp === column.prop}]}
            name='sorting'>
          </fly-icon> : ''
      )
    },
    renderFilter (h, column) {
      return (
        column.filterable
          ? <fly-icon
            onClick={() => this.handleFilter}
            class='fly-table__icon' name='filter'>
          </fly-icon>
          : ''
      )
    }
  },
  render (h) {
    return (<th class='fly-table__th'
      style={{'width': `${this.column.width}px`}}>
      {this.renderContent(h, this.column)}
      {this.renderSort(h, this.column)}
      {this.renderFilter(h, this.column)}
    </th>)
  }
}
