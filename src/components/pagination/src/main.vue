<script>
export default {
  name: 'FlyPagination',
  props: {
    pageSize: {
      type: Number,
      required: true,
      default: 0
    },
    pageStart: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 7
    },
    total: {
      type: Number,
      required: true,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    },
    prevText: String,
    nextText: String
  },
  data () {
    return {
      index: 0,
      start: 0
    }
  },
  computed: {
    max () {
      return Math.ceil(this.total / this.pageSize)
    },
    mini () {
      return this.pageStart
    },
    balance () {
      // 减去最大值与最小值
      return this.pageCount - 2
    },
    increment () {
      return Math.ceil(this.balance / 2)
    },
    balanceStart: {
      get () {
        if (this.start === this.pageStart) {
          return this.pageStart
        } else if (this.start === this.max) {
          return this.start - (this.increment === 1 ? this.increment : this.increment * 2)
        } else if (this.pageCount <= 3) {
          return this.start
        }
        return this.start - this.increment
      },
      set (value) {
        this.start = value
      }
    },
    currentPage: {
      get () {
        return this.index
      },
      set (value) {
        this.index = value
        if (value >= this.balanceEnd || value <= this.balanceStart) {
          this.balanceStart = value
        }
      }
    },
    balanceEnd () {
      let end = 0
      if (this.balanceStart === this.pageStart) {
        end = this.balanceStart + this.balance
      } else if (this.pageCount <= 3) {
        end = this.balanceStart
      } else {
        end = this.balanceStart + this.increment * 2
      }
      return end <= this.max ? end : this.max
    },
    showMiniLimit () {
      return this.currentPage >= this.mini + this.balance
    },
    showMaxLimit () {
      return this.currentPage < this.max - this.balance
    },
    isFirstPage () {
      return this.currentPage === this.mini
    },
    isLastPage () {
      return this.currentPage === this.max
    }
  },
  methods: {
    handleClick (number) {
      this.currentPage = number
      this.$emit('input', this.currentPage)
      this.$emit('on-change', this.currentPage)
    },
    handlePrev () {
      if (this.isFirstPage) {
        return false
      }
      this.currentPage--
      this.$emit('input', this.currentPage)
      this.$emit('on-change', this.currentPage)
      this.$emit('on-prev', this.currentPage)
    },
    handleNext () {
      if (this.isLastPage) {
        return false
      }
      this.currentPage++
      this.$emit('input', this.currentPage)
      this.$emit('on-change', this.currentPage)
      this.$emit('on-next', this.currentPage)
    },
    showLimt (has) {
      if (!has) { return '' }
      return (<li class={['fly-pagination__number']}>
          ...
      </li>)
    }
  },
  created () {
    this.currentPage = this.value
    this.balanceStart = this.value
  },
  render (h) {
    return (
      <div class='fly-pagination'>
        <ul class='fly-pagination__pager'>
          <li class={['fly-pagination__number', {'is-disabled': this.isFirstPage}]} on-click={this.handlePrev}>
            <i class='fly-icon-chevron-left'></i>
          </li>
          <li class={['fly-pagination__number',
            {'is-active': this.mini === this.currentPage}]} on-click={($event) => { this.handleClick(this.mini) }}>
            {this.mini}
          </li>
          {this.showLimt(this.showMiniLimit)}
          {this._l(this.balanceEnd, (number, index) => {
            console.log('balanceEnd', this.balanceEnd)
            console.log('balanceStart', this.balanceStart)
            console.log('currentPage', this.currentPage)
            console.log('number', number)
            console.log('increment', this.increment)
            if (number < this.balanceStart || number === this.mini || number === this.max) { return '' }
            return (<li class={['fly-pagination__number',
              {'is-active': number === this.currentPage}]} on-click={($event) => { this.handleClick(number) }}>
              {number}
            </li>)
          })}
          {this.showLimt(this.showMaxLimit)}
          <li class={['fly-pagination__number', {'is-active': this.max === this.currentPage}]} on-click={$event => { this.handleClick(this.max) }}>
            {this.max}
          </li>
          <li class={['fly-pagination__number', {'is-disabled': this.isLastPage}]} on-click={this.handleNext}>
            <i class='fly-icon-chevron-right'></i>
          </li>
        </ul>
      </div>)
  }
}
</script>
