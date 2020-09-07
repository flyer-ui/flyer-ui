export default {
  name: 'FlyTable',
  data () {
    return {
      columns: []
    }
  },
  props: {
    data: Array
  },
  methods: {
    getColumns () {
      const columnInstances = this.$slots.default.filter(
        component => component.componentInstance &&
        component.componentInstance.$options.name === 'FlyTableColumn'
      )
      return columnInstances.map(instance => instance.componentInstance)
    },
    renderTh (h) {
      return (this._l(this.columns, (column) => {
        return (<th class='fly-table__th'
          style={{'width': `${column.$attrs.width}px`}}>{column.label}</th>)
      }))
    },
    renderTd (h, row) {
      return (
        this._l(this.columns, (column) => {
          console.log(column)
          return (
            <td class='fly-table__td'>
              {(column.$scopedSlots.default && column.$scopedSlots.default(row)) || row[column.prop]}
            </td>
          )
        })
      )
    }
  },
  mounted () {
    this.columns = this.getColumns()
  },
  render (h) {
    return (
      <table class='fly-table'>
        <thead>
          {this.$slots.default}
          <tr>
            {this.renderTh(h)}
          </tr>
        </thead>
        <tbody>
          {
            this._l(this.data, (val) => {
              return (
                <tr>
                  {this.renderTd(h, val)}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
