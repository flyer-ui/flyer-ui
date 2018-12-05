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
    vm = createTest(FlyButton, {
      nativeType: 'reset'
    })
    expect(vm.$el.type).to.equal('reset')
    vm = createTest(FlyButton, {
      nativeType: 'button'
    })
    expect(vm.$el.type).to.equal('button')
  })
  it('type done', () => {
    vm = createTest(FlyButton, {
      type: 'primary'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-primary')
    vm = createTest(FlyButton, {
      type: 'default'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-default')
    vm = createTest(FlyButton, {
      type: 'warning'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-warning')
    vm = createTest(FlyButton, {
      type: 'danger'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-danger')
    vm = createTest(FlyButton, {
      type: 'success'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-success')
    vm = createTest(FlyButton, {
      type: 'info'
    })
    expect(vm.$el.className).to.equal('fly-button fly-button-info')
  })
  it('disabled done', () => {
    vm = createTest(FlyButton, {
      disabled: true
    })
    expect(vm.$el.getAttribute('disabled')).to.equal('disabled')
  })
  // it('icon done', () => {
  //   vm = createTest(FlyButton, {
  //     icon: 'true'
  //   })
  //   expect(vm.$el.getAttribute('disabled')).to.equal('disabled')
  // })
})
