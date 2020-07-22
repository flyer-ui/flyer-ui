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
