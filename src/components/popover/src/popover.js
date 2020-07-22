/**
 * 定义一个弹出层类
 *
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
  this.parentNodes = []
  this.init()
}

Popover.prototype.init = function (options) {
  this.getParentNodes(this.$selector)
}

Popover.prototype.getParentNodes = function (selector) {
  selector = selector || this.$selector
  if (selector.nodeName !== 'BODY') {
    this.parentNodes.push(selector)
    this.getParentNodes(selector.offsetParent)
  }
}

// 计算自身大小
Popover.prototype.getOuterSize = function (element) {
  return {
    offsetWidth: element.offsetWidth,
    offsetHeight: element.offsetHeight
  }
}

// 算出上右下左的空间
Popover.prototype.getOffsetParent = function () {
  let offsetTop = 0
  let offsetLeft = 0
  let offsetRight = 0
  let offsetBottom = 0
  const windowSize = this.getWindowSize()
  const outerSize = this.getOuterSize(this.$selector)

  this.parentNodes.forEach(function (node) {
    offsetTop += node.offsetTop
    offsetLeft += node.offsetLeft
  })
  offsetRight = windowSize.width - outerSize.offsetWidth - offsetLeft
  offsetBottom = windowSize.height - outerSize.offsetHeight - offsetTop
  return {
    offsetTop: offsetTop,
    offsetLeft: offsetLeft,
    offsetRight: offsetRight,
    offsetBottom: offsetBottom
  }
}

// 得到可视窗体的大小
Popover.prototype.getWindowSize = function () {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  }
}

var selector = document.querySelector('.fly-button')
var element = document.querySelector('#test')

/* eslint-disable */
new Popover(element, selector)
