import {createTest, destroy} from '../util'
import FlyButton from '~/components/button'

describe('Button', () => {
  let vm
  afterEach(() => {
    destroy(vm)
  })
  it('create done', () => {
    vm = createTest(FlyButton)
    expect(vm.$el.tagName).to.equal('BUTTON')
    expect(vm.$el.classList.contains('fly-button')).equal(true)
  })
  it('native-type done', () => {
    vm = createTest(FlyButton, {
      nativeType: 'submit'
    })
    expect(vm.$el.type).to.equal('submit')
    vm = createTest(FlyButton, {
      nativeType: 'reset'
    })
    expect(vm.$el.type).to.equal('reset')
    vm = createTest(FlyButton, {
      nativeType: 'button'
    })
    expect(vm.$el.type).to.equal('button')
  })
})
