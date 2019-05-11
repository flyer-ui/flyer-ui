import navs from './router.config.json'
const defaultLang = 'cn'
const currentLang = defaultLang
const LOAD_MAP = {
  'cn': (path) => {
    return () => require.ensure([], () => {
      return require(`./docs/cn/${path}.md`)
    }, 'cn')
  },
  'en': (path) => {
    return () => require.ensure([], () => {
      return require(`./docs/en/${path}.md`)
    })
  }
}
const load = (path) => {
  return LOAD_MAP[currentLang](path)
}
const routes = [{
  path: '/',
  redirect: '/cn'
}, {
  path: '/:lang',
  name: 'home',
  component: load('installation')
}]
navs[currentLang].forEach((nav) => {
  if (nav.path !== '/') {
    let component = load(nav.path)
    let route = {
      path: `/:lang/${nav.path}`,
      name: nav.path,
      component: component.default || component
    }
    routes.push(route)
  }
})
export default routes
