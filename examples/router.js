let button = r => require.ensure([], () => {
  r(require('./docs/zh-cn/button.md'))
}, 'button')
let test = r => require.ensure([], () => {
  r(require('./docs/zh-cn/test.md'))
}, 'test')
const routes = [
  {
    path: '/button',
    name: 'button',
    component: button
  },
  {
    path: '/',
    name: 'home',
    component: test
  }
]

export default routes
