import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Icon from './components/icon/index'
import Input from './components/input/index'
import Checkbox from './components/checkbox/index'
import Radio from './components/radio/index'
import Dialog from './components/dialog/index'

const components = [
  Button,
  ButtonGroup,
  Icon,
  Input,
  Checkbox,
  Radio,
  Dialog
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
  Icon,
  Input,
  Checkbox,
  Radio,
  Dialog
}
