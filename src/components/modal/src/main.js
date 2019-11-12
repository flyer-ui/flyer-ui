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
    vm.$set(vm.$props, 'value', false)
    typeof options.onConfirm === 'function' && options.onConfirm.apply(vm)
  })
  vm.$on('cancel', () => {
    vm.$set(vm.$props, 'value', false)
    typeof options.onCancel === 'function' && options.onCancel.apply(vm)
  })
  vm.$on('closed', () => {
    vm.$set(vm.$props, 'value', false)
    typeof options.onClosed === 'function' && options.onClosed.apply(vm)
  })
  document.body.append(vm.$el)
}

let $Modal = {
  confirm (options) {
    Instance(Object.assign({}, {
      type: 'confirm',
      icon: 'fly-icon-help-circle'
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
      icon: 'fly-icon-check'
    }, options))
  },
  warning (options) {
    Instance(Object.assign({}, {
      type: 'warning',
      icon: 'fly-icon-alert-circle'
    }, options))
  },
  danger (options) {
    Instance(Object.assign({}, {
      type: 'danger',
      icon: 'fly-icon-x-circle'
    }, options))
  }
}

export default $Modal
