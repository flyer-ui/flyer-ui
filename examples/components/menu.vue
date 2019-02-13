<template>
   <div class='fly-demo-menus'>
     <ul class='fly-demo-menus__list'>
       <li v-for='(item,index) in data' :key='index' :class='`fly-demo-menus__${item.type}`'>
         <h3 v-if='item.type==="header"'>{{item.text}}</h3>
        <span v-if='item.type==="item"'>
          <router-link :to='getPath(item)' :class='{"is-pending":item.pending}'>{{item.text}}</router-link>
        </span>
       </li>
     </ul>
   </div>
</template>
<script>
export default {
  name: 'FlyMenu',
  props: {
    data: Array
  },
  methods: {
    getPath (item) {
      return `/${this.$route.params.lang}/${item.path}`
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~/components/themes/src/base/fly-common.scss';
@import '~/components/themes/src/base/fly-mixins.scss';

@include b('demo-menus'){
    width:15%;
    min-width:200px;
    box-sizing:border-box;
    padding:10px;
    position:relative;
    &:after{
      content:'';
      position: absolute;
      z-index:1;
      top:10px;
      right:1px;
      bottom:10px;
      border-right:1px solid $fly-border-color;
    }
    @include e('list'){
      list-style-type:none;
      margin:0px;
      padding:0px;
      box-sizing:border-box;
    }
    @include e('header'){

    }
    @include e('item'){
        line-height:36px;
        padding-left:10px;
        cursor:pointer;
        a:hover{
          color:$fly-primary-color;
        }
        a.router-link-active{
          color:$fly-primary-color;
        }
        .is-pending{
          color:$font-color-placeholder;
        }
    }
}
</style>
