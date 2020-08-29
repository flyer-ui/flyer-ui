<template>
    <div class='fly-scrollbar'>
        <div class='fly-scrollbar__content' ref='content'
        @mousewheel="handleWheel">
          <slot name='default'></slot>
        </div>
        <div class='fly-scrollbar__rail'
        @mousedown="handleSliderDown"
        ref='rail'>
          <div class='fly-scrollbar__slider'
            ref='slider'>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FlyScrollbar',
  data () {
    return {
      state: false
    }
  },
  methods: {
    handleWheel () {
      if (this.$flyContent) {
        this.calcSliderMove()
      }
    },
    handleSliderDown ($event) {
      console.log('开始')
      this.state = true
      this.lastPageY = $event.pageY
      this.$flyContent.style.userSelect = 'none'
      console.log($event.pageY)
    },
    handleSliderUp () {
      console.log('结束')
      this.state = false
      this.$flyContent.style.userSelect = 'inherit'
    },
    handleSliderMove ($event) {
      if (this.state === true) {
        const offsetY = $event.pageY - this.lastPageY
        // this.lastPageY = $event.pageY
        this.$flyContent.scrollTop = (parseInt(offsetY) * this.$flyRail.offsetHeight) / 100
        setTimeout(this.calcSliderMove, 0)
        console.log($event.pageY - this.lastPageY)
      }
    },
    /** 计算滚动条的高度 */
    calcSliderHeight () {
      this.$flyRail = this.$refs.rail
      this.$flyContent = this.$refs.content
      const railHeight = this.$flyRail.offsetHeight
      const wrapHeight = this.$flyContent.scrollHeight
      const sliderHeight = this.rate = Math.ceil((railHeight / wrapHeight) * 100)
      console.log('rate', this.rate)
      this.$refs.slider.style.height = `${sliderHeight}%`
    },
    calcSliderMove () {
      const contentTop = this.$flyContent.scrollTop
      let sliderTop = Math.ceil((contentTop / this.$flyRail.offsetHeight) * 100)
      if (sliderTop + this.$refs.slider.offsetHeight >= this.$flyRail.offsetHeight) {
        sliderTop = this.$flyRail.offsetHeight - this.$refs.slider.offsetHeight
      }
      this.$refs.slider.style.transform = `translateY(${sliderTop}px)`
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.calcSliderHeight()
    })
    document.body.addEventListener('mouseup', (e) => {
      this.handleSliderUp(e)
    })
    document.body.addEventListener('mousemove', (e) => {
      this.handleSliderMove(e)
    })
  }
}
</script>
