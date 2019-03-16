import Vue from 'vue'
import tmplModal from './main.vue'

let Instance = (content, type, duration) => {
  let container = document.getElementsByClassName('fly-message')
  if (container.length === 0) {
    container = document.createElement('div')
    container.className = 'fly-message'
    document.body.append(container)
  } else {
    container = container[0]
  }

  let Comp = Vue.extend(tmplModal)
  let vm = new Comp({propsData: {
    content: content,
    value: true,
    type: type,
    duration: duration}}).$mount(document.createElement('span'))

  vm.$on('on-closed', () => {
    vm.$set(vm.$props, 'value', false)
  })
  container.append(vm.$el)
}

let $Message = {
  info: (content, duration) => {
    Instance(content, 'info', duration)
  },
  success: (content, duration) => {
    Instance(content, 'success', duration)
  },
  warning: (content, duration) => {
    Instance(content, 'warning', duration)
  },
  error: (content, duration) => {
    Instance(content, 'error', duration)
  }
}

export default $Message
