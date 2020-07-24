/**
 * 定义一个弹出层类
 *
 *  一、点击时计算出上空间，下空间，左空间，右空间。
    二、计算弹出框的大小。
    三、根据参数指定位置。
    四、计算指定的位置高、宽是否都能够放下，不能放下需要从对立面逐个比较。
 */

// 得到所有的父窗体
// element 要弹出来的元素
// placement = bottom | top | left | right
// selector 指定的位置
const Popover = function (element, selector, options = {
  placement: 'bottom'
}) {
  this.$element = element
  this.$selector = selector
}
const fn = Popover.prototype

/** 得到依靠元素的上下左右值 */
fn.getRectbySelector = function (selector) {
  selector = selector || this.$selector
  return selector.getBoundingClientRect()
}

/** 得到页面可视容器大小 */
fn.getVisualSize = function () {
  const visual = document.body
  return {
    height: visual.offsetWidth,
    width: visual.offsetWidth
  }
}

/** 得到弹出元素的大小 */
fn.getElementSize = function (element) {
  element = element || this.$element
  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  }
}

/** 得到选择器的大小 */
fn.getSelectorSize = function (selector) {
  return {
    height: selector.offsetHeight,
    width: selector.offsetWidth
  }
}

/** 得到滚动条的高度和宽度 */
fn.getScroll = function () {
  return {
    top: Math.max(document.body.scrollTop, document.documentElement.scrollTop),
    left: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft)
  }
}

fn.getSpace = function () {
  const rect = this.getRectbySelector(this.$selector)
  const visualSize = this.getVisualSize()
  const floor = function (value) {
    return Math.floor(value)
  }
  return {
    top: {
      // 高度
      h: floor(rect.top),
      // 等比宽度
      w: floor(rect.width),
      // 左间距
      l: floor(rect.left),
      // 右间距
      r: floor(rect.right),
      // 左向最大宽度
      wl: floor(rect.left + rect.width),
      // 右向最大宽度
      wr: floor(rect.right + rect.width)
    },
    bottom: {
      // 高度
      h: floor(visualSize.height - rect.bottom),
      // 等比宽度
      w: floor(rect.width),
      // 左间距
      l: floor(rect.left),
      // 右间距
      r: floor(rect.right),
      // 左向最大宽度
      wl: floor(rect.left + rect.width),
      // 右向最大宽度
      wr: floor(rect.right + rect.width)
    },
    left: {
      // 高度
      h: floor(rect.height),
      // 等比宽度
      w: floor(rect.left),
      // 左上最大高度
      hl: floor(rect.height + rect.top),
      // 左下最大高度
      hr: floor(rect.height + visualSize.height - rect.bottom)
    },
    right: {
      // 高度
      h: floor(rect.height),
      // 等比宽度
      w: floor(rect.right),
      // 右上最大高度
      hl: floor(rect.height + rect.top),
      // 右下最大高度
      hr: floor(rect.height + visualSize.height - rect.bottom)
    }
  }
}

// document.body.scrollTop || document.documentElement.scrollTop

const selector = document.querySelector('.flag')
const element = document.querySelector('#test')

const popover = new Popover(element, selector, {
})

const rect = popover.getRectbySelector()
const scroll = popover.getScroll()

setTimeout(() => {
  console.log('实行在下方')
  element.style.transform = `translate(${rect.left}px,${rect.bottom + scroll.top}px)`
}, 1000 * 1)

setTimeout(() => {
  console.log('实行在左方')
  element.style.transform = `translate(${rect.left - element.offsetWidth}px,${rect.top + scroll.top}px)`
}, 1000 * 3)

setTimeout(() => {
  console.log('实行在右方')
  element.style.transform = `translate(${rect.right}px,${rect.top + scroll.top}px)`
}, 1000 * 6)

setTimeout(() => {
  console.log('实行在顶部')
  element.style.transform = `translate(${rect.left}px,${rect.top - element.offsetHeight + scroll.top}px)`
}, 1000 * 9)

// setTimeout(() => {
//   console.log('实行在顶部')
//   element.style.transform = `translate(${rect.left}px,${rect.top - element.offsetHeight}px)`
// }, 1000 * 6)

console.log('rect', rect)
// export default Popover
