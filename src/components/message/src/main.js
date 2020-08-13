import Vue from 'vue'
import tmpl from './main.vue'
import {isPlainObject} from '@flyer-ui/commonality'

let Instance = (content, type, duration, options) => {
  let container = document.getElementsByClassName('fly-message')
  if (container.length === 0) {
    container = document.createElement('div')
    container.className = 'fly-message'
    document.body.appendChild(container)
  } else {
    container = container[0]
  }

  if (isPlainObject(duration)) {
    options = duration
    duration = -1
  }

  let Comp = Vue.extend(tmpl)
  options = Object.assign({}, {
    content: content,
    value: true,
    type: type,
    duration: duration
  }, options)
  let vm = new Comp({propsData: options}).$mount(document.createElement('div'))

  vm.$on('closed', () => {
    vm.$set(vm.$props, 'value', false)
    typeof options.onClosed === 'function' && options.onClosed.apply(vm)
  })
  container.appendChild(vm.$el)
}

let $Message = {
  info: (content, duration, options) => {
    Instance(content, 'info', duration, options)
  },
  success: (content, duration, options) => {
    Instance(content, 'success', duration, options)
  },
  warning: (content, duration, options) => {
    Instance(content, 'warning', duration, options)
  },
  error: (content, duration, options) => {
    Instance(content, 'error', duration, options)
  },
  loading: (content, duration, options) => {
    Instance(content, 'loading', duration, options)
  }
}

export default $Message
