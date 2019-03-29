<script>
    export default {
        data(){
            return {
                index:1,
                tabName:'',
                tabs:[{
                    label:'tab1',
                    content:'tab content1'
                }]
            }
        },
        methods:{
            handleAddition(){
                this.tabs.push({
                    label:`tab ${this.index++}`,
                    content:`tab content ${this.index++}`
                })
                this.$refs.tabs.findPaneInstance()
            }
        }
    }
</script>
## Tab 选项卡

### 基本使用

::: demo
```html
<template>
    <fly-tab v-model='tabName'>
        <fly-tab-pane>
            <span slot='label'>选项卡一</span>
            <div>
                选项卡内容一
            </div>
        </fly-tab-pane>
        <fly-tab-pane label='选项卡二'>
            <div>
                选项卡内容二
            </div>
        </fly-tab-pane>
    </fly-tab>
</template>
```
:::

### 动态添加

::: demo
```html
<template>
    <div style='width:700px'>
        <fly-tab ref='tabs' v-model='tabName' @on-addition='handleAddition'>
            <fly-tab-pane :key='index' v-for='(tab,index) in tabs' :label='tab.label'>
                {{tab.content}}
            </fly-tab-pane>
        </fly-tab>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                index:1,
                tabName:'',
                tabs:[{
                    label:'tab1',
                    content:'tab content1'
                }]
            }
        },
        methods:{
            handleAddition(){
                let num = this.index + 1;
                this.tabs.push({
                    label:`tab ${num}`,
                    content:`tab content ${num}`
                })
                this.$refs.tabs.findPaneInstance()
            }
        }
    }
</script>
```
:::


### Tab - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
value / v-model | String | - | - | 绑定的值
type |  String  | - | simple | 卡片的风格  |
closable | Boolean | false  | true / false | tab是否可关闭  |

<!-- addable | Boolean | false  | true / false |  tab是否可增加 | -->
<!-- show-all-tags | Boolean | true  | true / false | tab多过时是否显示辅助查看列表  | -->
 <!-- fixed-width| String | - | - | 设置tab宽度，有值之后就是固定宽度，不会自动适应宽度  | -->

### Tab - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-added | - |  添加tab事件之后
 on-deleted | - | 在删除tab事件之后
 on-changed | - | 切换了tab之后

 ### Tab-pane - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
label |  String  | - | - | 选项卡标题  |
disabled | Boolean | false  | true / false | 是否禁用 |
name | String | -  | - | 与选项卡 activeName 对应的标识符，表示选项卡别名,如未配置则默认按排列顺序数字标识 |
