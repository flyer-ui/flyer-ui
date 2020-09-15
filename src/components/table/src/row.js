export default {
  name: 'FlyTableBody',
  props: {
    rowData: Object,
    columns: Array
  },
  methods: {
    handleSelection () {

    },
    renderContent (h, column) {
      return (
        column.type === 'checkbox'
          ? <fly-checkbox change={this.handleSelection}></fly-checkbox>
          : ((column.$scopedSlots.default &&
          column.$scopedSlots.default(this.rowData)) ||
          this.rowData[column.prop])
      )
    }
  },
  render (h) {
    return (
      <tr>
        {
          this._l(this.columns, (column) => {
            return (
              <td class='fly-table__td'>
                {this.renderContent(h, column)}
              </td>
            )
          })
        }
      </tr>
    )
  }
}
