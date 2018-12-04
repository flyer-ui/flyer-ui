import Vue from 'vue'

// 创建一个DOM标签
let id = 0
function createElm () {
  let div = document.createElement('div')
  div.id = 'app' + ++id
  document.body.appendChild(div)
  return div
}

// 回收实例的内存
exports.destroy = (vm) => {
  vm.$destroy && vm.$destroy()
  vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el)
}

// 创建一个测试例子
exports.createTest = (comp, propsData = {}, mounted = false) => {
  if (typeof propsData === 'boolean') {
    mounted = propsData
    propsData = {}
  }
  let elm = createElm()
  let constructor = Vue.extend(comp)
  return new constructor({propsData}).$mount(mounted ? null : elm)
}
