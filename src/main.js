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
import Tabs from './components/tabs/index'
import TabPane from './components/tab-pane/index'
import Transfer from './components/transfer/index'
import Tree from './components/tree/index'
import Rate from './components/rate/index'
import Select from './components/select/index'
import Option from './components/option/index'
import OptionGroup from './components/option-group/index'
import Upload from './components/upload/index'
import Slider from './components/slider/index'
import Progress from './components/progress/index'
import Pagination from './components/pagination/index'
import Popover from './components/popover/index'
import Tooltip from './components/tooltip/index'
import Drawer from './components/drawer/index'
import Row from './components/row/index'
import Col from './components/col/index'
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
  TabPane,
  Tree,
  InputNumber,
  Card,
  Alert,
  TimeLine,
  TimeLineItem,
  Tabs,
  Transfer,
  Rate,
  Select,
  Option,
  OptionGroup,
  Upload,
  Slider,
  Progress,
  Pagination,
  Popover,
  Tooltip,
  Drawer,
  Row,
  Col
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
  Tree,
  Tabs,
  TabPane,
  Transfer,
  Rate,
  Select,
  Option,
  OptionGroup,
  Upload,
  Slider,
  Progress,
  Pagination,
  Popover,
  Tooltip,
  Drawer,
  Row,
  Col
}
