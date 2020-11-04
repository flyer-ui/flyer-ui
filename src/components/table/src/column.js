export default {
  name: 'FlyTableColumn',
  props: {
    type: {
      // checkbox index normal
      type: String,
      default: 'normal'
    },
    // 类型为index时，指定的起始页，默认从0开始
    index: {
      type: Number,
      default: 0
    },
    // 类型为index时，自定义排序显示的方式
    formatIndex: Function,
    width: String,
    prop: String,
    label: String,
    sortable: Boolean,
    sortMethod: Function,
    filterable: Boolean,
    filters: {
      type: Array,
      default () {
        return []
      }
    },
    filterMultiple: {
      type: Boolean,
      default: true
    },
    filteredValue: {
      type: Array,
      default () {
        return []
      }
    }
  },
  render (h) {
    return ('')
  }
}
