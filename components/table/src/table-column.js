export default {
    name:'FlyTableName',
    props:{
        type:{
            type:String,
            default:'default' // radio || checkout || default || expand
        },
        prop:String,
        label:String,
        labelClassName:String,
        className:String,
        colspan:Number,
        rowspan:Number,
        headerAlign:String,
        align:String,
        formatter:Function,
        minWidth:String,
        width:String,
        columnKey:String,
        sortable:Boolean,
        sortBy:String,
        sortOrders:String,
        sortMehtod:Function,
        filters:Array,
        filterMultiple:Boolean,
        filterMehtod:Function,
        row:Object
    },
    created(){
        
    },
    render(){

        return typeof this.formatter === 'function'?
            (
                <td>{this.formatter.call(this,this.row,this.prop,this.label)}</td>
            ):
            (
                <td>
                    <div>{this.row[this.prop]}</div>
                </td>
            )
    },
    renderError(h,err){
        return h('pre',{style:{color:'red'}},err.stack)
    }
}