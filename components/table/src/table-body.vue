<template>
    <table>
        <tbody>
            <tr v-for="(row,index) in data" :key="index">
                <td v-for='(column,index) in columns' :key='index'>
                    <table-column :row="row" v-bind="column"></table-column>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import TableColumn from './table-column'
export default {
    name:'FlyTableBody',
    components:{
        TableColumn
    },
    props:{
        data:Array,
        columns:Array
    },
    created(){
    }
}
</script>