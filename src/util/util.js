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
