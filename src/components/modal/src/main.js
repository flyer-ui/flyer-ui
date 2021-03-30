import Vue from 'vue'
import tmplModal from './main.vue'

let Instance = (options) => {
  options = Object.assign({}, {
    value: true,
    width: '460px',
    closable: false
  }, options)
  let Comp = Vue.extend(tmplModal)
  let vm = new Comp({propsData: options}).$mount(document.createElement('div'))
  vm.$on('confirm', () => {
    callback(vm, options.confirm)
    destroy(vm)
  })
  vm.$on('cancel', () => {
    callback(vm, options.cancel)
    destroy(vm)
  })
  vm.$on('closed', () => {
    callback(vm, options.closed)
    destroy(vm)
  })
  document.body.appendChild(vm.$el)
}

/** 事件回调模板 */
const callback = function (vm, fn) {
  vm.$set(vm.$props, 'value', false)
  typeof fn === 'function' && fn.apply(vm)
}

/** 回收内存 */
const destroy = function (vm) {
  vm.$destroy()
  if (vm.$el) {
    vm.$el.remove()
  }
  vm = null
}

let $Modal = {
  confirm (options) {
    Instance(Object.assign({}, {
      type: 'confirm',
      icon: 'fly-icon-help'
    }, options))
  },
  info (options) {
    Instance(Object.assign({}, {
      type: 'info',
      icon: 'fly-icon-info'
    }, options))
  },
  success (options) {
    Instance(Object.assign({}, {
      type: 'success',
      icon: 'fly-icon-success'
    }, options))
  },
  warning (options) {
    Instance(Object.assign({}, {
      type: 'warning',
      icon: 'fly-icon-warning'
    }, options))
  },
  danger (options) {
    Instance(Object.assign({}, {
      type: 'danger',
      icon: 'fly-icon-error'
    }, options))
  }
}

export default $Modal
