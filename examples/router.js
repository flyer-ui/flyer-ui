import nav from './router.config.json'
const defaultLang = 'cn'
const currentLang = defaultLang
const loadMap = (path) => {
  return () => require.ensure([], () => {
    return require(`./docs/${currentLang}/${path}.md`)
  }, path)
}

const routes = []
nav.forEach((n) => {
  routes.push({
    path: n.path,
    name: n.path,
    component: loadMap(n.path)
  })
})

export default routes
