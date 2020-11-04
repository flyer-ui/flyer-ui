import FlyCheckbox from '../../checkbox/index'
import {findParentByName} from '~/utils/index'
export default {
  name: 'FlyTableTd',
  components: {
    FlyCheckbox
  },
  data () {
    return {
      selected: false
    }
  },
  props: {
    rowData: Object,
    column: Object,
    rowIndex: Number
  },
  computed: {
    parent () {
      return findParentByName('FlyTable', this)
    }
  },
  methods: {
    handleSelection (checked) {
      if (checked) {
        this.parent.$store.addSelection(this.rowData[this.column.prop], this.rowData)
      } else {
        this.parent.$store.removeSelection(this.rowData[this.column.prop])
      }
    },
    renderCheckbox (h, column) {
      this.parent.$store.subscribe('selection', (keys) => {
        this.selected = !!keys.find((key) => {
          return key === String(this.rowData[column.prop])
        })
      })
      return <fly-checkbox value={this.selected} onChange={this.handleSelection}>{this.checked}</fly-checkbox>
    },
    renderIndex (h, column) {
      const index = column.index + this.rowIndex
      return typeof column.formatIndex === 'function' ? column.formatIndex.call(null, index) : index
    },
    renderContent (h, column) {
      switch (column.type) {
        case 'checkbox': {
          return this.renderCheckbox(h, column)
        }
        case 'index': {
          return this.renderIndex(h, column)
        }
        default: {
          return ((column.$scopedSlots.default &&
            column.$scopedSlots.default({row: this.rowData})) ||
            this.rowData[column.prop])
        }
      }
    }
  },
  render (h) {
    return (
      <td class='fly-table__td'>
        {this.renderContent(h, this.column)}
      </td>
    )
  }
}
