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
  watch: {
    data () {
      if (this.$store) {
        this.$store.selections = {}
        this.$store.setData(this.data)
        this.$store.publish('selection')
      }
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    }
  },
  methods: {
    getColumns () {
      const columnInstances = this.$slots.default.filter(
        component => component.componentInstance &&
        component.componentInstance.$options.name === 'FlyTableColumn'
      )
      return columnInstances.map(instance => instance.componentInstance)
    },
    initStore () {
      this.$store = new Store()
      this.$store.setData(this.data)
      this.$store.subscribe('selection', (keys, selections) => {
        this.$emit('selection-change', keys, selections)
      })
      this.$store.subscribe('sort', () => {
        this.$emit('sort-change')
      })
      this.$store.subscribe('filter', (filtered) => {
        this.$emit('filter-change', filtered)
      })
    },
    renderContent () {
      return this._l(this.data, (rowData, index) => {
        return (
          <table-row on-row-click={this.handleRowClick}
            rowData={rowData}
            rowIndex={index}
            columns={this.columns}></table-row>
        )
      })
    },
    renderEmpty () {
      return <tr>
        <td class='fly-table__empty-text' colspan={this.columns.length}>
          {this.emptyText}
        </td>
      </tr>
    },
    handleRowClick (args) {
      this.$emit('row-click', args)
    }
  },
  created () {
    this.initStore()
  },
  mounted () {
    this.columns = this.getColumns()
  },
  render (h) {
    return (
      <table class='fly-table'>
        <colgroup>
          {
            this._l(this.columns, column => {
              return <col width={column.width}></col>
            })
          }
        </colgroup>
        <thead>
          {this.$slots.default}
          <table-header columns={this.columns}></table-header>
        </thead>
        <tbody>
          {
            this.data.length > 0 ? this.renderContent() : this.renderEmpty()
          }
        </tbody>
      </table>
    )
  }
}
