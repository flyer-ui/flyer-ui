import Vue from 'vue'
import FlyButton from '~/components/button/src/main'

let id = 0
function createElm () {
  let div = document.createElement('div')
  div.id = 'app' + ++id
  document.body.appendChild(div)
  return div
}

describe('Button', () => {
  let constructor = Vue.extend(FlyButton)
  it('create done', () => {
    let vm = new constructor().$mount()
    expect(vm.$el.tagName).to.equal('BUTTON')
    expect(vm.$el.classList.contains('fly-button')).equal(true)
  })
  it('native-type done', () => {
    let vm = new constructor({
      propsData: {
        nativeType: 'submit'
      }
    }).$mount(createElm())
    expect(vm.$el.type).to.equal('submit')
  })
})
