<template>
   <div>
     <!-- <h1>Hello Flyer-UI</h1>
     <fly-table width="500px" :columns="columns" :border="false" :data="data"></fly-table>
     <h1>Hello Flyer-UI 无表头</h1>
     <fly-table width="500px" :showHeader="false" :columns="columns" :data="data"></fly-table> 
     <h1>Hello Flyer-UI 空数据</h1>
     <fly-table width="500px" :showHeader="true" :columns="columns" :data="[]"></fly-table>
      <h1>Hello Flyer-UI 有边框</h1>
     <fly-table width="500px" :showHeader="true" :columns="columns" :data="data"></fly-table> -->
     <div class='fly-table'>
         <div class='fly-table-toolbar'></div>
         <div class='fly-table-header'>
             <table style="width:600px;">
                 <tr>
                    <th><i class='icon-chevron-right'></i></th>
                    <th><label class="fly-checkbox"><input type="checkbox"/><i class="icon-check"></i></label></th>
                    <th>
                        <span>姓名</span>
                        <div class="fly-table-filter">
                            <i class="icon-filter"></i>
                        </div>
                        <div class="fly-table-order">
                            <i class="icon-chevron-up"></i>
                            <i class="icon-chevron-down"></i>
                        </div>
                    </th>
                    <th>
                        年龄
                    </th>
                    <th>
                        性别
                    </th>
                    <th>
                        地址
                    </th>
                 </tr>
             </table>
         </div>
         <div class='fly-table-body'>
             <table style="width:600px;">
                <tr>
                    <td><i class='icon-chevron-right'></i></td>
                    <td><label class="fly-checkbox"><input type="checkbox"/><i class="icon-check"></i></label></td>
                    <td>小郑</td>
                    <td>31</td>
                    <td>男</td>
                    <td>广东省东莞市万江区</td>
                </tr>
                <tr>
                    <td colspan="6">
                        <div>
                            子表内容区
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><i class='icon-chevron-right'></i></td>
                    <td><label class="fly-checkbox"><input type="checkbox"/><i class="icon-check"></i></label></td>
                    <td>小刘</td>
                    <td>21</td>
                    <td>男</td>
                    <td>不详</td>
                </tr>
                <tr>
                    <td colspan="6">
                        <div>
                            子表内容区
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><i class='icon-chevron-right'></i></td>
                    <td><label class="fly-checkbox"><input type="checkbox"/><i class="icon-check"></i></label></td>
                    <td>小许</td>
                    <td>28</td>
                    <td>女</td>
                    <td>不详</td>
                </tr>
                <tr>
                    <td colspan="6">
                        <div>
                            子表内容区
                        </div>
                    </td>
                </tr>
             </table>
         </div>
         <div class='fly-table-empty'></div>
         <div class='fly-table-footer'></div>
     </div>
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
                            <div><a href="http://www.baidu.com">{row[prop]}</a></div>
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
<style lang="css">
    @import url("../style/icon.css");
</style>