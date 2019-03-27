<script>
import FlyPane from './pane'
export default {
  name: 'render-demo',
  components: {
    FlyPane
  },
  data () {
    return {
      message: 'Hello world'
    }
  },
  props: {
    level: Number,
    renderHeade: Function
  },
  render (h) {
    return (
      <div>
        <div>{this.renderHeade ? this.renderHeade.call(this._renderProxy, h) : ''}</div>
        <div>{this.message}</div>
        <div><fly-pane list={[1, 2, 3, 4]}>{this.$slots.default}</fly-pane></div>
      </div>)
  }
}
</script>
