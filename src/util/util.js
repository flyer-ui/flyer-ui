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
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}
