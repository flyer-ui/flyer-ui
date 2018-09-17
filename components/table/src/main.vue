<template>
    <transition>
      <div class='fly-table'>
        <div class='fly-table-toolbar'>
        </div>
        <div class='fly-table-header'>
           <table>
            <thead>
              <th v-for='(column,index) in richColumns' :key='index'>{{column.title}}</th>
            </thead>
          </table>
        </div>
        <div class='fly-table-body'>
           <table>
            <tbody>
             <tr>
                <td v-for='(column,index) in richColumns' :key='index'>{{column.title}}</td>
             </tr>
            </tbody>
           </table>
        </div>
        <div class='fly-table-footer'></div>
      </div>
    </transition>
</template>
<script>
export default {
    name: 'FlyTable',
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
                    title: `标题${i}`
                })
            }
            return cols
        }
    }
}
</script>
