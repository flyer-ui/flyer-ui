import {createTest, destroy} from '../util'

describe('util', () => {
  let comp = {
    name: 'test',
    template: '<button class="fly-button" type="submit"></button>',
    props: {
      attr: String
    }
  }
  let vm
  it('createTest done', () => {
    vm = createTest(comp)
    expect(vm.$el.className).to.equal('fly-button')
    vm = createTest(comp)
    vm = createTest(comp, {attr: 'attr'})
    expect(vm.$props.attr).to.equal('attr')
    vm = createTest(comp, true)
    expect(document.body.querySelector('.fly-button').tagName).to.equal('BUTTON')
  })
  it('destroy done', () => {
    destroy(vm)
    console.log(document.body)
    expect(document.body.querySelector('.fly-button').tagName).to.equal('BUTTON')
  })
})
