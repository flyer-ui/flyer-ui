<script>
    module.exports = {
        data(){
            return {
                current:'001',
                current2:2,
                items:[
                    {
                        text:'菜单一',
                        value:'001'
                    },
                    {
                        text:'菜单二',
                        value:'002'
                    },
                    {
                        text:'菜单三',
                        value:'003'
                    }
                ]
            }
        },
        methods:{
            handleClick(index,$event){
                this.current = index
                console.log(index,$event,this.current)
            },
            handleClick2(index){
                this.current2 = index
            }
        }
    }
</script>

## Menu 导航条

### 基本使用
::: demo
```html
<template>
    <fly-menu :default-active='current' @click='handleClick'>
        <fly-menu-group>
            <fly-menu-item  
                v-for='(item,index) in items' 
                :index='item.value'
                :key='index'>
                {{item.text}}
            </fly-menu-item>
        </fly-menu-group>
    </fly-menu>
</template>
```
```JS
export default {
    data(){
        return {
            current:'001',
            items:[
                {
                    text:'菜单一',
                    value:'001'
                },
                {
                    text:'菜单二',
                    value:'002'
                },
                {
                    text:'菜单三',
                    value:'003'
                }
            ]
        }
    },
    methods:{
        handleClick(index,$event){
            this.current = index
            console.log(index,$event,this.current)
        }
    }
}
```
::: 


### 静态写法
:::demo
```html
<template>
    <fly-menu :default-active='current2' @click='handleClick2'>
        <fly-menu-item :index='1'>
            首页
        </fly-menu-item>
        <fly-menu-group>
            <fly-menu-item :index='2'>
                商品
            </fly-menu-item>
            <fly-sub-menu title='行情' :index='3'>
                <fly-menu-item :index='3.1'>
                    价格分析
                </fly-menu-item>
                <fly-menu-item :index='3.2'>
                    卖家趋势
                </fly-menu-item>
                <fly-menu-item :index='3.3'>
                    买家趋势
                </fly-menu-item>
            </fly-sub-menu>
        </fly-menu-group>
        <fly-sub-menu title='设置' :index='4'>
            <fly-menu-item :index='4.1'>
                API管理
            </fly-menu-item>
            <fly-menu-item :index='4.2'>
                用户管理
            </fly-menu-item>
            <fly-menu-item :index='4.3'>
                API管理
            </fly-menu-item>
            <fly-sub-menu title='含二级菜单' :index='4.4'>
                <fly-menu-item index='4.4.1'>
                    菜单一
                </fly-menu-item>
                <fly-menu-item index='4.4.2'>
                    菜单二
                </fly-menu-item>
                <fly-menu-item index='4.4.3'>
                    菜单三
                </fly-menu-item>
            </fly-sub-menu>
        </fly-sub-menu>
    </fly-menu>
</template>
```
:::

### Menu - 可定制的属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| default-active | String / Number / Boolean | -      | -            | 绑定的值      |

### Menu-Item - 可定制的属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| index | String / Number / Boolean | -      | -            | 唯一标识符      |

### Menu - 可定制的事件

| 事件名称  | 返回值                   | 说明                                        |
| --------- | ------------------------ | ------------------------------------------- |
| click   | (index,Event)           | 点击菜单时触发                     |

### Menu-Item - 可定制的事件

| 事件名称  | 返回值                   | 说明                                        |
| --------- | ------------------------ | ------------------------------------------- |
| click   | (index,Event)           | 点击菜单时触发                     |