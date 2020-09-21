import Store from './store'
import TableHeader from './header'
import TableRow from './row'

export default {
  name: 'FlyTable',
  components: {
    TableHeader,
    TableRow
  },
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
    }
  },
  created () {
    this.$store = new Store()
    this.$store.setData(this.data)
    this.$store.addObserver((keys, selections) => {
      this.$emit('selection-change', keys, selections)
    })
  },
  mounted () {
    this.columns = this.getColumns()
  },
  render (h) {
    return (
      <table class='fly-table'>
        <thead>
          {this.$slots.default}
          <table-header columns={this.columns}></table-header>
        </thead>
        <tbody>
          {
            this._l(this.data, (rowData) => {
              return (
                <table-row rowData={rowData} columns={this.columns}></table-row>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
