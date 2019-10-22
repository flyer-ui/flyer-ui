const hasOwnProperty = Object.prototype.hasOwnProperty
const _toString = Object.prototype.toString

export const emptyObject = Object.freeze({})

/**
 * 执行一个空操作
 *
 * @export
 * @param {any} args
 */
export function noop (...args) {}

/**
 *  查找自身的父节点为name的组件
 *
 * @export
 * @param {*} name
 * @param {*} self
 * @returns
 */
export function findParentByName (name, self) {
  let parent = self.$parent
  while (parent) {
    if (parent.$options.name !== name) {
      parent = parent.$parent
    } else {
      return parent
    }
  }
  return parent
}

/**
 *一个精确添加的方法，思路参考:https://github.com/camsong/blog/issues/9
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseAddition (num1 = 0, num2 = 0) {
  const num1Mantissa = (num1.toString().split('.')[1] || '').length
  const num2Mantissa = (num1.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(num1Mantissa, num2Mantissa))
  return (num1 * baseNum + num2 * baseNum) / baseNum
}

/**
 *一个精确减法的方法，思路参考:https://github.com/camsong/blog/issues/9
 *
 * @export
 * @param {number} [num1=0]
 * @param {number} [num2=0]
 * @returns
 */
export function preciseReduce (num1 = 0, num2 = 0) {
  const num1Mantissa = (num1.toString().split('.')[1] || '').length
  const num2Mantissa = (num1.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(num1Mantissa, num2Mantissa))
  return (num1 * baseNum - num2 * baseNum) / baseNum
}

/**
 * 判断对象是否是纯粹的对象类型
 *
 * @export
 * @param {*} obj
 * @returns
 */
export function isPlainObject (obj) {
  if (_toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

/**
 *  检测对象里是否包含有指定属性
 *
 * @export
 * @param {Object} obj
 * @param {String} key
 * @returns Boolean
 */
export function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 *  混合对象里的属性到指定的对象上
 *
 * @export
 * @param {Object} to
 * @param {Object} _from
 * @returns Object
 */
export function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * 确保只执行一次函数
 *
 * @export
 * @param {Function} fn
 * @returns Function
 */
export function once (fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

/**
 * 深度拷贝一个目标
 *
 * @export
 * @param {any} target
 * @returns any
 */
export function deepClone (target) {
  let value
  if (isPlainObject(target)) {
    value = {}
  } else if (Array.isArray(target)) {
    value = []
  } else {
    return target
  }
  for (const key in target) {
    const dataType = _toString.call(target[key])
    if (dataType === '[object Object]' || dataType === '[object Array]') {
      value[key] = deepClone(target[key])
    } else {
      value[key] = target
    }
  }
  return value
}
