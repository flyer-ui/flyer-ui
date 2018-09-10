import Table from '../components/table'
const components = [
	Table
]
const install = (Vue) => {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}
module.exports = {
	version: '1.0.0',
	Table,
	install
}

module.exports.default = module.exports