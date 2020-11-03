import FlyTableTh from './th'
import {findParentByName} from '~/utils/index'
export default {
  name: 'FlyTableHeader',
  components: {
    FlyTableTh
  },
  data () {
    return {
      sortProp: null
    }
  },
  props: {
    columns: Array
  },
  computed: {
    parent () {
      return findParentByName('FlyTable', this)
    }
  },
  methods: {
    handleSort (column, explain) {
      this.sortProp = column.prop
      this.parent.$store.setSortField(column, explain)
    }
  },
  render (h) {
    return (
      <tr>
        {this._l(this.columns, (column) => {
          return (<FlyTableTh sortProp={this.sortProp} column={column}></FlyTableTh>)
        })}
      </tr>
    )
  }
}
