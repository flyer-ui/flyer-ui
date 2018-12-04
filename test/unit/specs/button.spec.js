import {createTest, destroy} from '../util'
import FlyButton from '~/components/button/src/main'

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
  })
  it('type done', () => {
    vm = createTest(FlyButton, {
      type: 'primary'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-primary')
  })
})
