<template>
    <transition>
      <div class='fly-table'>
        <div class='fly-table-toolbar'>
        </div>
        <div class='fly-table-header' :class="getClass()" v-if="showHeader">
           <table :style="getStyle()">
            <thead>
              <th v-for='(column,index) in columns' :key='index'>
                  <div>{{column.label}}</div>
                  <div class="fly-table-header_querying">
                      <div class="fly-table-header_querying_filter">
                        <i class="icon-filter"></i>
                      </div>
                      <div class="fly-table-header_querying_sortable">
                           <i class="icon-chevron-up"></i>
                           <i class="icon-chevron-down"></i>
                      </div>
                  </div>
              </th>
            </thead>
          </table>
        </div>
        <div class='fly-table-body' :class="getClass()" v-if="data.length>0">
           <table :style="getStyle()">
            <tbody>
             <tr v-for="(row,index) in data" :key="index">
                <td v-for='(column,index) in columns' :key='index'>
                    <table-column :row="row" v-bind="column"></table-column>
                </td>
             </tr>
            </tbody>
           </table>
        </div>
        <div class='fly-table-empty' :class="getClass()" v-else>
            <table :style="getStyle()">
                <tbody>
                    <tr>
                        <td>
                          <div>{{this.emptyText}}</div>
                        </td>
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
    props:{
        columns:{
            type:Array,
            required:true
        },
        data:{
            type:Array,
            required:true
        },
        width:{
            type:String,
            default:'auto'
        },
        height:{
            type:String,
            default:'auto'
        },
        maxHeight:{
            type:String,
            default:'auto'
        },
        showHeader:{
            type:Boolean,
            default:true
        },
        emptyText:{
            type:String,
            default:'The data in the table is empty.'
        },
        border:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        getStyle(){
            return {
                width:this.width
            }
        },
        getClass(){
            return {
                'fly-table-no_border':!this.border
            }
        }
    }
}
</script>
