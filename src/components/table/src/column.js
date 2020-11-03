export default {
  name: 'FlyTableColumn',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
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
