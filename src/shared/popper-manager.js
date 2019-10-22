import { on } from '~/shared/dom'

const NODE_LIST = []

on(document, 'mouseup', $event =>
  NODE_LIST.forEach(node => {
    const target = $event.target
    if (!node || !node.$el) { return false }
    if (target === node.$el || node.$el.contains(target)) { return false }
    node.visible = false
  })
)

export default {
  push (node) {
    if (node) {
      NODE_LIST.push(node)
    }
  },
  pop (node) {
    const index = NODE_LIST.indexOf(node)
    if (index > -1) {
      NODE_LIST.splice(index, 1)
    }
  }
}
