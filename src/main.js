import Button from './components/button/index'
import ButtonGroup from './components/button-group/index'
import Icon from './components/icon/index'
import Input from './components/input/index'
import Checkbox from './components/checkbox/index'
import CheckboxGroup from './components/checkbox-group/index'
import Radio from './components/radio/index'
import RadioGroup from './components/radio-group/index'
import Modal from './components/modal/index'
import Switch from './components/switch/index'
import Textarea from './components/textarea/index'
import Tag from './components/tag/index'
import InputNumber from './components/input-number/index'
import Card from './components/card/index'
import Alert from './components/alert/index'
import TimeLine from './components/timeline/index'
import TimeLineItem from './components/timeline-item/index'
import Tab from './components/tab/index'
import Transfer from './components/transfer/index'
import Rate from './components/rate/index'
import Select from './components/select/index'
import Upload from './components/upload/index'
import Slider from './components/slider/index'
import $message from './components/message/index'
import $modal from './components/modal/src/main.js'

const components = [
  Button,
  ButtonGroup,
  Icon,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Modal,
  Switch,
  Textarea,
  Tag,
  InputNumber,
  Card,
  Alert,
  TimeLine,
  TimeLineItem,
  Tab,
  Transfer,
  Rate,
  Select,
  Upload,
  Slider
]

const install = function (Vue) {
  Vue.prototype.$modal = $modal
  Vue.prototype.$message = $message
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.prototype.$modal = $modal
  window.Vue.prototype.$message = $message
  install(window.Vue)
}
export default {
  version: '1.0.3',
  install,
  Button,
  ButtonGroup,
  Icon,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Modal,
  Switch,
  Textarea,
  Tag,
  InputNumber,
  Card,
  Alert,
  TimeLine,
  TimeLineItem,
  Tab,
  Transfer,
  Rate,
  Select,
  Upload,
  Slider
}
