<template>
<div :class="['fly-color-card',{'is-change':hasChange}]">
  <div :class="['fly-color-card__primary',
      {'is-border':type==='Border'},{'is-change':hasChange}]" :style="{'background':color,'opacity':`${grade/10}`}">
    <div>{{text}}</div>
      <div>{{color}}</div>
    </div>
    <div v-if='hasChange' :class="['fly-color-card__change',
    {'is-border':type==='Border'}]">
      <ul>
        <li v-for='(change,index) in changeNums' :key="index" :style="{'background':color,'opacity':`${change/10}`}">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyColorCard',
  props: {
    color: String,
    type: {
      type: String,
      validator (value) {
        return ['Border', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Title', 'Subtitle', 'Text', 'Placeholder'].indexOf(value) > -1
      }
    },
    text: String,
    hasChange: {
      type: Boolean,
      default: false
    },
    grade: {
      type: Number
    }
  },
  data () {
    return {
      changeNums: [8, 7, 5, 1]
    }
  }
}
</script>
