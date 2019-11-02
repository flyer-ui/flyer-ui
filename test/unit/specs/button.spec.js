import Vue from 'vue'
import Button from '@/components/button'

describe('button', () => {
  it('button 测试props.text属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const constructor = Vue.extend(Button)
    const vm = new constructor({ propsData: { text: 'Hello' } }).$mount(div)
    expect(vm.$el.textContent).to.equal('Hello')
  })
})
