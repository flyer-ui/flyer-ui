<template>
   <div>
     <h1>Hello Flyer-UI</h1>
     <fly-table width="500px" :columns="columns" :border="false" :data="data"></fly-table>
     <h1>Hello Flyer-UI 无表头</h1>
     <fly-table width="500px" :showHeader="false" :columns="columns" :data="data"></fly-table> 
     <h1>Hello Flyer-UI 空数据</h1>
     <fly-table width="500px" :showHeader="true" :columns="columns" :data="[]"></fly-table>
   </div>
</template>
<script type="text/babel">
import AutoComponent from './autoComponent.vue'
export default {
    name: 'App',
    components: {
        AutoComponent
    },
    data(){
        return {
            columns:[
                {
                    prop:'name',
                    label:'姓名'
                },
                {
                    prop:'sex',
                    label:'性别'
                },
                {
                    prop:'age',
                    label:'年龄'
                },
                {
                    prop:'address',
                    label:'地址',
                    formatter(row,prop){
                        return (
                            <a href="http://www.baidu.com">{row[prop]}</a>
                        )
                    }
                }
            ],
            data:[{
                name:'X先生',
                sex:'男',
                age:18,
                address:'广东省东莞市XXX'
            },
            {
                name:'X女士',
                sex:'女',
                age:16,
                address:'广东省东莞市XXX'
            }]
        }
    },
    created(){

    }
}
</script>
<style lang='scss'>
@import "../style/index.scss";
</style>