<script>
    export default {
        data(){
            return {
                activeName:'tab1',
                tabName:'first',
                tabName1:'shield',
                index:2,
                tabs:[{
                    label:'tab1',
                    name:'tab1',
                    content:'tab content1'
                }]
            }
        },
        methods:{
            handleAddition(){
                const tabName = 'tab'+ this.index++
                this.tabs.push({
                    label:tabName,
                    name:tabName,
                    disabled:this.index % 2 === 0 ? true:false,
                    content:`tab content ${tabName}`
                })
                this.activeName = tabName
            },
            handleRemove(name){
                const index = this.tabs.findIndex((tab)=>{return tab.name === name})
                const nextTab = this.tabs[index+1]||this.tabs[index-1]
                this.tabs.splice(index,1)
                this.activeName = nextTab.name
            }
        }
    }
</script>
## Tab 选项卡

### 基本使用

::: demo
```html
<template>
    <fly-tabs v-model='tabName'>
        <fly-tab-pane name='first' label='选项卡一'>
            <div>
                选项卡内容一
            </div>
        </fly-tab-pane>
        <fly-tab-pane name='second' label='选项卡二'>
            <div>
                选项卡内容二
            </div>
        </fly-tab-pane>
        <fly-tab-pane name='third' label='选项卡三'>
            <div>
                选项卡内容三
            </div>
        </fly-tab-pane>
    </fly-tabs>
</template>
<script>
    export default {
        data(){
            return {
                tabName:'first'
            }
        }
    }
</script>
```
:::

### 自定义头部及指定tab禁用
::: demo
```html
<template>
    <fly-tabs v-model='tabName1'>
        <fly-tab-pane name='shield'>
            <span slot='label'><fly-icon class='fly-demo-block__icon' name='shield'></fly-icon>shield</span>
            <div>
                Shield
            </div>
        </fly-tab-pane>
        <fly-tab-pane name='mail'>
            <span slot='label'><fly-icon class='fly-demo-block__icon' name='mail'></fly-icon>mail</span>
            <div>
                mail
            </div>
        </fly-tab-pane>
        <fly-tab-pane disabled name='map'>
            <span slot='label'><fly-icon class='fly-demo-block__icon' name='map'></fly-icon>map</span>
            <div>
                map
            </div>
        </fly-tab-pane>
        <fly-tab-pane name='twitter'>
            <span slot='label'><fly-icon class='fly-demo-block__icon' name='twitter'></fly-icon>twitter</span>
            <div>
                twitter
            </div>
        </fly-tab-pane>
    </fly-tabs>
</template>
<script>
    export default {
        data(){
            return {
                tabName1:'shield'
            }
        }
    }
</script>
```
:::

### 动态添加

::: demo
```html
<template>
    <div style='width:700px'>
        <fly-button @on-click='handleAddition'>Add Tab</fly-button>
        <fly-tabs ref='tabs' closable 
        v-model='activeName' 
        @on-remove='handleRemove' 
        @on-addition='handleAddition'>
            <fly-tab-pane 
            :key='index' 
            :disabled='tab.disabled'
            :name='tab.name' 
            v-for='(tab,index) in tabs' :label='tab.label'>
                {{tab.content}}
            </fly-tab-pane>
        </fly-tabs>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                activeName:'tab1',
                tabName:'first',
                index:2,
                tabs:[{
                    label:'tab1',
                    name:'tab1',
                    content:'tab content1'
                }]
            }
        },
        methods:{
            handleAddition(){
                const tabName = 'tab'+ this.index++
                this.tabs.push({
                    label:tabName,
                    name:tabName,
                    disabled:this.index % 2 === 0 ? true:false,
                    content:`tab content ${tabName}`
                })
                this.activeName = tabName
            },
            handleRemove(name){
                const index = this.tabs.findIndex((tab)=>{return tab.name === name})
                const nextTab = this.tabs[index+1]||this.tabs[index-1]
                this.tabs.splice(index,1)
                this.activeName = nextTab.name
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

### Tab - 可定制的事件

事件名称 | 返回值 | 说明
---------|----------|---------
 on-added | - |  添加tab事件之后
 on-remove | - | 删除tag事件，一般用于动态生成的tabs
 on-changed | - | 切换了tab之后

 ### Tab-pane - 可定制属性

属性名称 | 类型 | 默认值  | 可选值  | 说明  |
---------|----------|---------|---------|--------|
label |  String  | - | - | 选项卡标题  |
disabled | Boolean | false  | true / false | 是否禁用 |
closable | Boolean | false  | true / false | tab是否可关闭  |
name | String | -  | - | 与选项卡 activeName 对应的标识符，表示选项卡别名,如未配置则默认按排列顺序数字标识 |
