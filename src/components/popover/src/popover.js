/**
 * 定义一个弹出层类
 *
 */
const Popover = function (element) {
  this.$element = element
  this.parentNodes = []
}

// 得到父窗体
Popover.prototype.getParentNodes = function (element) {
  if (element.nodeName !== 'BODY') {
    this.parentNodes.push(element)
    this.getParentNodes(element.offsetParent)
  }
}

Popover.prototype.getOuterSize = function () {
  return {
    offsetWidth: this.$element.offsetWidth,
    offsetHeight: this.$element.offsetHeight
  }
}

Popover.prototype.getOffsetParent = function () {
  let offsetTop = 0
  let offsetLeft = 0
  this.parentNodes.forEach(function (node) {
    offsetTop += node.offsetTop
    offsetLeft += node.offsetLeft
  })
  return {
    offsetTop: offsetTop,
    offsetLeft: offsetLeft
  }
}

Popover.prototype.getWindowSize = function () {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  }
}
