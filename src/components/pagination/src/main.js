export default {
  name: 'FlyPagination',
  props: {
    // 页面大小
    pageSize: {
      type: Number,
      required: true,
      default: 0
    },
    // 起始页
    pageStart: {
      type: Number,
      default: 1
    },
    // 分页器长度，一个大于等于5及小于等于21的奇数
    pagerCount: {
      type: Number,
      validateor (value) {
        return value >= 5 && value <= 21
      },
      default: 7
    },
    // 数据总条目
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
      currentPage: 0
    }
  },
  computed: {
    end () {
      return Math.ceil(this.total / this.pageSize)
    },
    start () {
      return this.pageStart
    },
    rest () {
      // 减去最大值与最小值
      return this.pagerCount - 2
    },
    extendValue () {
      return Math.trunc(this.rest / 2)
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
      this.$emit('change', this.currentPage)
    },
    handlePrev () {
      if (this.isFirstPage) {
        return false
      }
      this.currentPage--
      this.$emit('input', this.currentPage)
      this.$emit('change', this.currentPage)
      this.$emit('prev', this.currentPage)
    },
    handleNext () {
      if (this.isLastPage) {
        return false
      }
      this.currentPage++
      this.$emit('input', this.currentPage)
      this.$emit('change', this.currentPage)
      this.$emit('next', this.currentPage)
    },
    showLimt (has) {
      if (!has) { return '' }
      return (<li class={['fly-pagination__number']}>
            ...
      </li>)
    },
    getDynamicEnd () {
      // 处理页码器边界
      if (this.currentPage === this.start) {
        // 如果当前页码等于边界起始点，则直接从起始点加上余值(rest)
        return this.start + this.rest
      } else if (this.currentPage === this.end) {
        // 如果当前页码等于边界终点，则直接从终点减去余值(rest)
        return this.end
      }
      let value = this.currentPage + this.extendValue
      value = value > this.end ? this.end : value
      return value
    },
    getDynamicStart () {
      // 处理页码器边界
      if (this.currentPage === this.start) {
        // 如果当前页码等于边界起始点，则直接从起始点加上余值(rest)
        return this.start
      } else if (this.currentPage === this.end) {
        // 如果当前页码等于边界终点，则直接从终点减去余值(rest)
        return this.end - this.rest
      }

      let value = this.currentPage - this.extendValue
      value = value < this.start ? this.start : value
      return value
    }
  },
  created () {
    this.currentPage = this.value
  },
  render () {
    let dynamicEnd = this.getDynamicEnd()
    let dynamicStart = this.getDynamicStart()

    // 如果动态页码的起始值等于页码器的边界起始值，补一位动态页码终点值
    if (dynamicStart === this.start && this.currentPage !== this.pageStart) {
      let i = this.currentPage - this.start
      for (i; i <= this.extendValue; i++) {
        dynamicEnd++
      }
    }

    // 如果动态页码的终点值等于页码器的边界终点值，补一位动态页码起始值
    if (dynamicEnd === this.end && this.currentPage !== this.end) {
      let i = this.end - this.currentPage
      for (i; i <= this.extendValue; i++) {
        dynamicStart--
      }
    }

    const showMiniLimit = dynamicStart - this.start > 1
    const showMaxLimit = this.end - dynamicEnd > 1
    return (
      <div class='fly-pagination'>
        <ul class='fly-pagination__pager'>
          <li class={['fly-pagination__number', {'is-disabled': this.isFirstPage}]} on-click={this.handlePrev}>
            <i class='fly-icon fly-icon-back fly-pagination__back'></i>
          </li>
          <li class={['fly-pagination__number',
            {'is-active': this.start === this.currentPage}]} on-click={() => { this.handleClick(this.start) }}>
            {this.start}
          </li>
          {this.showLimt(showMiniLimit)}
          {this._l(dynamicEnd, (number) => {
            if (number < dynamicStart || number === this.start || number === this.end) { return '' }
            return (<li class={['fly-pagination__number',
              {'is-active': number === this.currentPage}]} on-click={() => { this.handleClick(number) }}>
              {number}
            </li>)
          })}
          {this.showLimt(showMaxLimit)}
          <li class={['fly-pagination__number', {'is-active': this.end === this.currentPage}]} on-click={$event => { this.handleClick(this.end) }}>
            {this.end}
          </li>
          <li class={['fly-pagination__number', {'is-disabled': this.isLastPage}]} on-click={this.handleNext}>
            <i class='fly-icon fly-icon-next fly-pagination__next'></i>
          </li>
        </ul>
      </div>)
  }
}
