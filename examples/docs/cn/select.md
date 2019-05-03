<script>
module.exports = {
    data(){
        return {
            selected1:'',
            selected2:'',
            citys:[{
                    label:'广州',
                    value:'GZ'
                },{
                    label:'深圳',
                    value:'SZ'
                },{
                    label:'东莞',
                    value:'DG'
                },{
                    label:'佛山',
                    value:'FS'
                },{
                    label:'清远',
                    value:'QY'
                }],
            cityGroups:[{
                label:'热门城市',
                citys:[
                {
                    label:'广州',
                    value:'GZ'
                },{
                    label:'深圳',
                    value:'SZ'
                }]
            },{
                label:'城市名',
                citys:[
                    {
                        label:'东莞',
                        value:'DG'
                    },{
                        label:'佛山',
                        value:'FS'
                    },{
                        label:'清远',
                        value:'QY'
                    }
                ]
            }]
        }
    },
    methods:{
        handleChange({value,label}){
            this.$message.info(`value:${value},label:${label}`,3)
        },
        handleFocus($evnet){
            this.$refs.select.focus()
            console.log('focus',$evnet)
        },
        handleBlur($event){
            this.$refs.select.blur()
            console.log('blur',$event)
        },
        handleClear($event){
            console.log('clear',$event)
        }
    }
}
</script>

## Select 下拉框

### 基本使用

:::demo
```html
<template>
    <fly-select @on-change='handleChange'
    @on-blur='handleBlur'
    @on-focus='handleFocus'
     v-model='selected1' 
     placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' value='DG'>
        </fly-option>
        <fly-option label='广州' value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
    {{selected1}}
</template>
<script>
export default {
    data(){
        return {
            selected1:''
        }
    },
    methods:{
        handleChange({value,label}){
            this.$message.info(`value:${value},label:${label}`)
        },
        handleFocus($evnet){
            console.log('focus',$evnet)
        },
        handleBlur($event){
            console.log('blur',$event)
        }
    }
}
</script>
```
:::

### 禁用状态

::: demo
```html
<template>
    <fly-select disabled placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' value='DG'>
        </fly-option>
        <fly-option label='广州' value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
</template>
```
:::

### 有禁用选项

::: demo
```html
<template>
    <fly-select  placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' disabled value='DG'>
        </fly-option>
        <fly-option label='广州' disabled value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
</template>
```
:::

### 可清空单选

::: demo
```html
<template>
    <fly-select ref='select' 
    clearable 
    @on-clear='handleClear' 
    placeholder='请选择'>
        <fly-option label='深圳' value='SZ'>
        </fly-option>
        <fly-option label='东莞' value='DG'>
        </fly-option>
        <fly-option label='广州' value='GZ'>
        </fly-option>
        <fly-option label='佛山' value='FS'>
        </fly-option>
        <fly-option label='清远' value='QY'>
        </fly-option>
        <fly-option label='河源' value='HY'>
        </fly-option>
    </fly-select>
    <fly-button @on-click='handleFocus'>设置焦点</fly-button>
    <fly-button @on-click='handleBlur'>去除焦点</fly-button>
</template>
<script>
 export default {
     methods:{
         handleClear($event){
            console.log('clear',$event)
         }
     }
 }
</script>
```
:::

### 自定义模版

::: demo
```html
<template>
    <fly-select placeholder='请选择一个城市' v-model='selected2'>
        <fly-option v-for='(city,index) in citys' 
        :key='index'
        :label='city.label' 
        :value='city.value'
        >
            <span style='float:left;'>{{city.label}}</span>
            <span style='float:right;color:#ccc'>{{city.value}}</span>
        </fly-option>
    </fly-select>
</template>
<script>
    export default {
        data(){
            return {
                selected2:'',
                citys:[{
                    label:'广州',
                    value:'GZ'
                },{
                    label:'深圳',
                    value:'SZ'
                },{
                    label:'东莞',
                    value:'DG'
                },{
                    label:'佛山',
                    value:'FS'
                },{
                    label:'清远',
                    value:'QY'
                }]
            }
        }
    }
</script>
```
:::

### 分组

::: demo
```html
<template>
    <fly-select placeholder='请选择一个城市' v-model='selected2'>
        <fly-option-group :label='group.label' v-for='(group,index) in cityGroups' :key='index'>
            <fly-option v-for='(city,index) in group.citys' 
            :key='index'
            :label='city.label' 
            :value='city.value'>
            </fly-option>
        </fly-option-group>
    </fly-select>
</template>
<script>
    export default {
        data(){
            return {
                cityGroups:[{
                    label:'热门城市',
                    citys:[
                    {
                        label:'广州',
                        value:'GZ'
                    },{
                        label:'深圳',
                        value:'SZ'
                    }]
                },{
                    label:'城市名',
                    citys:[
                        {
                            label:'东莞',
                            value:'DG'
                        },{
                            label:'佛山',
                            value:'FS'
                        },{
                            label:'清远',
                            value:'QY'
                        }
                    ]
                }]
            }
        }
    }
</script>
```
:::


### Select - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String / Number | - | - | 绑定的值 |
disabled | Boolean | false  | true / false | 是否设置为禁用  |
readonly | Boolean | false  | true / false | 是否设置为只读  |
clearable | Boolean | flase | true / false | 是否设置为可清除 |
multiple | Boolean | false | true / false | 是否设置为多选 |
placeholder | String | - | - | 设置占位提示文本 |

### Option - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
disabled | Boolean | false  | true / false | 是否设置为禁用  |
label | String/Number | -  | - | 是否设置为只读  |
value | String/Number | - | - | 是否设置为可清除 |


### Select - 可定制事件
事件名称 | 返回值 | 说明
---------|----------|---------
 on-change | 更新后的值[object:{value,label}] | 在点击选项状态变更时触发。
 on-blur | (event:Event) | 当input失去焦点时触发 
 on-focus | (event:Event) |当input获得焦点时触发 
 on-clear | (event:Event) |当单选模式下，点击清空按钮触发

 ### Select - 可定制方法
方法名 | 说明 | 参数
---------|----------|---------
 focus | 使 input 获取焦点 | -
 blur | 使 input 失去焦点，并隐藏下拉框 | -
