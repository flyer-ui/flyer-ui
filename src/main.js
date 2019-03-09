import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Icon from './components/icon/index'
import Input from './components/input/index'
import Checkbox from './components/checkbox/index'
import CheckboxGroup from './components/checkbox-group/index'
import Radio from './components/radio/index'
import RadioGroup from './components/radio-group/index'
import Dialog from './components/dialog/index'
import Switch from './components/switch/index'
import Textarea from './components/textarea/index'
import Tag from './components/tag/index'
import InputNumber from './components/input-number/index'
import Card from './components/card/index'
const components = [
  Button,
  ButtonGroup,
  Icon,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Dialog,
  Switch,
  Textarea,
  Tag,
  InputNumber,
  Card
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  version: '1.0.0',
  install,
  Button,
  ButtonGroup,
  Icon,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Dialog,
  Switch,
  Textarea,
  Tag,
  InputNumber,
  Card
}
