## 安装
<template>
    <render-demo :renderHeade='renderHeade'>
     source
    </render-demo>
</template>
<script>
export default {
    name:'demo',
    methods:{
        renderHeade(h){
            return (<render-demo>sub source</render-demo>)
        }
    }
}
</script>