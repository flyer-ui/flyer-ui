export default {
  name: 'FlyTableHeader',
  props: {
    columns: Array
  },
  methods: {
    renderContent (h, column) {
      return (column.type === 'checkbox'
        ? <fly-checkbox></fly-checkbox>
        : column.label)
    },
    renderSort (h, column) {
      return (
        column.sortable ? <fly-icon class='fly-table__icon' name='sorting'></fly-icon> : ''
      )
    },
    renderFilter (h, column) {
      return (
        column.filterable ? <fly-icon class='fly-table__icon' name='filter'></fly-icon> : ''
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
