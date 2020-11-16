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
// offset 要低消的间距
// placement = bottom | top | left | right
// selector 指定的位置

const Popover = function (element, selector, options = {
  placement: 'bottom'
}) {
  this.$element = element
  this.$selector = selector
  this.$options = Object.assign({}, Popover.DEFAULT_OPTIONS, options)
  this.init()
}
Popover.mode = process.env.NODE_ENV
Popover.DEFAULT_OPTIONS = {
  placement: 'bottom',
  offset: [0, 0]
}

const fn = Popover.prototype

fn.init = function () {
  this.$rect = this.getRectbySelector()
  this.$container = this.getContainer()
  this.$scroll = this.getScroll()
  this.checkElement()
  this.put('bottom')
}

/** 得到依靠元素的上下左右值 */
fn.getRectbySelector = function (selector) {
  selector = selector || this.$selector
  return selector.getBoundingClientRect()
}

/** 约束弹窗样式 */
fn.checkElement = function () {
  ['top', 'left', 'margin'].forEach((item) => {
    this.$element.style[item] = '0px'
  })
  this.$element.style['position'] = 'absolute'
}

/** 得到滚动条的高度和宽度 */
fn.getScroll = function () {
  return {
    top: Math.max(document.body.scrollTop, document.documentElement.scrollTop),
    left: Math.max(document.body.scrollLeft, document.documentElement.scrollLeft)
  }
}

/** 得到当前的容器 */
fn.getContainer = function () {
  return document.body || document.documentElement
}

/** 设置弹层的位置 */
fn.setTranslate = function (x, y) {
  x = x + this.$options.offset[0] || 0
  y = y + this.$options.offset[1] || 0
  this.$element.style.transform = `translate(${x}px,${y}px)`
}

fn.placements = {
  bottom: function () {
    const bottom = this.$container.offsetHeight - this.$rect.bottom
    if (bottom >= this.$element.offsetHeight) {
      this.setTranslate(this.$rect.left, this.$rect.bottom + this.$scroll.top)
    } else {
      this.placements.top.bind(this)()
    }
  },
  top: function () {
    if (this.$rect.top >= this.$element.offsetHeight) {
      this.setTranslate(this.$rect.left, this.$rect.top - this.$element.offsetHeight + this.$scroll.top)
    } else {
      this.placements.left.bind(this)()
    }
  },
  left: function () {
    if (this.$rect.left >= this.$element.offsetWidth) {
      // 判断默认下方的位置是否够放弹框
      const bottom = this.$container.offsetHeight - this.$rect.bottom
      // 得出溢出的高度
      const overHeight = this.$element.offsetHeight - this.$rect.height - bottom
      if (bottom >= this.$element.offsetHeight - this.$rect.height) {
        this.setTranslate(this.$rect.left - this.$element.offsetWidth, this.$rect.top + scroll.top)
      } else {
        this.setTranslate(this.$rect.left - this.$element.offsetWidth, this.$rect.top + this.$scroll.top - (
          bottom + overHeight
        ))
      }
    } else {
      this.placements.right.bind(this)()
    }
  },
  right: function () {
    const right = this.$container.offsetWidth - this.$rect.right
    if (right >= this.$element.offsetWidth) {
      // 判断默认下方的位置是否够放弹框
      const bottom = this.$container.offsetHeight - this.$rect.bottom
      // 得出溢出的高度
      const overHeight = this.$element.offsetHeight - this.$rect.height - bottom
      if (bottom >= this.$element.offsetHeight - this.$rect.height) {
        this.setTranslate(this.$rect.right, this.$rect.top + this.$scroll.top)
      } else {
        this.setTranslate(this.$rect.right, this.$rect.top + this.$scroll.top - (
          bottom + overHeight
        ))
      }
    } else {
      this.placements.bottom.bind(this)()
    }
  }
}

/** 放置弹层 */
fn.put = function (placement) {
  const put = this.placements[placement || this.$options.placement]
  typeof put === 'function' && put.apply(this)
}

/** 更新弹屏的位置 */
fn.update = function (options) {
  this.$options = Object.assign({}, this.$options, options)
  this.init()
}

export default Popover
