let button = () => require.ensure([], () => {
  return require('./docs/zh-cn/button.md')
}, 'button')
let test = () => require.ensure([], () => {
  return require('./docs/zh-cn/test.md')
}, 'test')
let font = () => require.ensure([], () => {
  return require('./docs/zh-cn/font.md')
}, 'font')
let color = () => require.ensure([], () => {
  return require('./docs/zh-cn/color.md')
}, 'color')
const routes = [
  {
    path: '/button',
    name: 'button',
    component: button
  },
  {
    path: '/font',
    name: 'font',
    component: font
  },
  {
    path: '/color',
    name: 'color',
    component: color
  },
  {
    path: '/',
    name: 'home',
    component: test
  }
]

export default routes
