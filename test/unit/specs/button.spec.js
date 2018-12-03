import Vue from 'vue'
import FlyButton from '~/components/button/src/main'

describe('测试FlyButton组件', () => {
  let constructor = Vue.extend(FlyButton)
  let vm = new constructor().$mount()
  it('测试是否可以正确引用', () => {
    expect(vm.$el.tagName).to.equal('BUTTON')
    expect(vm.$el.className).to.equal('fly-button')
  })
})
