
export default {
  data () {
    return {
      currentPage: 0,
      referenceScroll: null,
      referenceNavs: null,
      movingWidth: 0
    }
  },
  methods: {
    handlePrev () {
      if (this.currentPage > 0) {
        this.currentPage -= 1
        this.calcBalanceWidth()
      }
    },
    handleNext () {
      const scrollBar = this.calcScrollBar()
      if (this.currentPage < scrollBar.totalPage) {
        this.currentPage += 1
        this.calcBalanceWidth()
      }
    },
    calcBalanceWidth () {
      const scrollBar = this.calcScrollBar()
      if (scrollBar.balanceWidth > 0 && this.currentPage === scrollBar.totalPage) {
        // 减一的原因是因为起始值是从0开始
        this.movingWidth = (this.currentPage - 1) * scrollBar.offsetWidth + scrollBar.balanceWidth
      } else {
        this.movingWidth = this.currentPage * scrollBar.offsetWidth
      }
    },
    calcScrollBar () {
      const movableWidth = this.referenceNavs.scrollWidth > this.referenceScroll.offsetWidth ? this.referenceNavs.scrollWidth - this.referenceScroll.offsetWidth : 0
      const offsetWidth = this.referenceScroll.offsetWidth
      return {
        movableWidth: movableWidth,
        offsetWidth: offsetWidth,
        totalPage: Math.trunc(movableWidth / offsetWidth) + (movableWidth % offsetWidth > 0 ? 1 : 0),
        balanceWidth: movableWidth - Math.trunc(movableWidth / offsetWidth) * offsetWidth
      }
    }
  }
}
