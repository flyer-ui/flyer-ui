<template>
    <transition>
      <div class='fly-table'>
        <div class='fly-table-toolbar'>
        </div>
        <div class='fly-table-header'>
           <table style="width:600px;">
            <thead>
              <td v-for='(column,index) in richColumns' :key='index'>{{column.title}}</td>
            </thead>
          </table>
        </div>
        <div class='fly-table-body'>
           <table style="width:600px;">
            <tbody>
             <tr>
                <!-- <td v-for='(column,index) in richColumns' :key='index'>{{column.title}}></td> -->
                <table-column v-for='(column,index) in richColumns' :key='index'>{{column.title}}></table-column>
             </tr>
             <tr>
                 <td colspan="10">ad</td>
             </tr>
            </tbody>
           </table>
        </div>
        <div class='fly-table-footer'></div>
      </div>
    </transition>
</template>
<script>
import TableColumn from './table-column'
export default {
    name: 'FlyTable',
    components:{
        TableColumn
    },
    data() {
        return {
            columns: []
        }
    },
    computed: {
        richColumns() {
            let cols = []
            for (let i = 0; i < 10; i++) {
                cols.push({
                    title: `${['标题','title'][Math.round(Math.random())]}${i}`
                })
            }
            return cols
        }
    }
}
</script>
