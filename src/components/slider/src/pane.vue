<template>
    <div>
       <div class='header'>
            <slot></slot>
       </div>
       <div class='body'>
           <ul>
               <li v-for='(item,index) in list' :key='index'>{{item}}</li>
           </ul>
       </div>
    </div>
</template>
<script>
export default {
  name: 'FlyPane',
  props: {
    list: Array
  }
}
</script>
