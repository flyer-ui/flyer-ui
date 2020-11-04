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
  methods: {
    handleRowClick (event) {
      this.$emit('row-click',
        {
          row: this.rowData,
          column: this.columns,
          event: event
        }
      )
    }
  },
  render (h) {
    return (
      <tr onClick={this.handleRowClick}>
        {
          this._l(this.columns, (column, index) => {
            return (<FlyTableTd rowData={this.rowData} column={column}></FlyTableTd>)
          })
        }
      </tr>
    )
  }
}
