import {createTest, destroy} from '../util'
import FlyIcon from '~/components/icon/src/main'

describe('Icon', () => {
  let vm
  afterEach(() => {
    destroy(vm)
  })
  it('name done', () => {
    vm = createTest(FlyIcon, {
      name: 'activity'
    })
    expect(vm.$el.className).to.equal('fly-icon-activity')
  })
})
