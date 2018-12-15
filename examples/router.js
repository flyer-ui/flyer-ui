import nav from './router.config.json'
const defaultLang = 'cn'
const currentLang = defaultLang
const LOAD_MAP = {
  'cn': (path) => {
    return () => require.ensure([], () => {
      return require(`./docs/cn/${path}.md`)
    }, 'cn')
  }
}
const load = (path) => {
  return LOAD_MAP[currentLang](path)
}
const routes = [{
  path: '/',
  name: 'home',
  component: load('test')
}]
nav[currentLang].forEach((n) => {
  if (n.type === 'item') {
    let component = load(n.path)
    let route = {
      path: `/${n.path}`,
      name: Math.random().toString(),
      component: component.default || component
    }
    routes.push(route)
  }
})

export default routes
