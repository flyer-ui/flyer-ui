import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Icon from './components/icon/index'

const components = [
  Button,
  ButtonGroup,
  Icon
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '1.0.0',
  install,
  Button,
  ButtonGroup,
  Icon
}
