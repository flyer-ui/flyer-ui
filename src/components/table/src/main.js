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
        component => component.componentOptions
      )
      return columnInstances.map(instance => instance.componentOptions.propsData)
    },
    renderTh (h) {
      return (this._l(this.columns, (column) => {
        return (<th class='fly-table__th'>{column.label}</th>)
      }))
    },
    renderTd (h, row) {
      return (
        this._l(this.columns, (column) => {
          return (
            <td class='fly-table__td'>
              {row[column.prop]}
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
