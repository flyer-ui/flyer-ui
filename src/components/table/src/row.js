import FlyTableTd from './td'

export default {
  name: 'FlyTableBody',
  components: {
    FlyTableTd
  },
  props: {
    rowData: Object,
    columns: Array
  },
  render (h) {
    return (
      <tr>
        {
          this._l(this.columns, (column, index) => {
            return (<FlyTableTd rowData={this.rowData} column={column}></FlyTableTd>)
          })
        }
      </tr>
    )
  }
}
