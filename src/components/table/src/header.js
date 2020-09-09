
export default {
  name: 'FlyTableHeader',
  data () {
    return {
      sortProp: null
    }
  },
  props: {
    columns: Array
  },
  methods: {
    handleCheckboxAll (value) {
      console.log('The all select button was clicked.', value)
    },
    handleSort (column) {
      this.sortProp = column.prop
    },
    renderContent (h, column) {
      return (column.type === 'checkbox'
        ? <fly-checkbox onChange={this.handleCheckboxAll}></fly-checkbox>
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
    return (
      <tr>
        {this._l(this.columns, (column) => {
          return (<th class='fly-table__th'
            style={{'width': `${column.width}px`}}>
            {this.renderContent(h, column)}
            {this.renderSort(h, column)}
            {this.renderFilter(h, column)}
          </th>)
        })}
      </tr>
    )
  }
}
