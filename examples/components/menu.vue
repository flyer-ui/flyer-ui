<template>
   <div class='fly-demo-menus'>
     <ul class='fly-demo-menus_list'>
       <li v-for='(item,index) in items' :key='index' :class='`fly-demo-menus_list_${item.type}`'>
         <h3 v-if='item.type==="header"'>{{item.text}}</h3>
        <span v-if='item.type==="item"'><router-link :to='item.to'>{{item.text}}</router-link></span>
       </li>
     </ul>
   </div>
</template>
<script>
export default {
  name: 'FlyMenu',
  data () {
    return {
      items: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      let data = [{
        text: '开发指南',
        type: 'header',
        to: '/'
      }, {
        text: '安装',
        type: 'item',
        to: '/'
      }, {
        text: '快速上手',
        type: 'item',
        to: '/'
      }, {
        text: '国际化',
        type: 'item',
        to: '/'
      }, {
        text: '自定义主题',
        type: 'item',
        to: '/'
      }, {
        text: '组件',
        type: 'header',
        to: '/'
      }, {
        text: 'Button 按钮',
        type: 'item',
        to: 'button'
      }]
      this.items = data
    }
  }
}
</script>
<style lang='scss' scoped>
$width:15%;
.fly-demo-menus{
    width:$width;
    min-width:200px;
    box-sizing:border-box;
    border-right:1px solid #dedede;
    padding:10px;
    &_list{
      list-style-type:none;
      margin:0px;
      padding:0px;
      box-sizing:border-box;
      &_header{

      }
      &_item{
        line-height:36px;
        padding-left:10px;
        cursor:pointer;
        a:hover{
          color:#3e8ef7;
        }
      }
    }
}
</style>
