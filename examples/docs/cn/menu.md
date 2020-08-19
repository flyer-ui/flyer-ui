<script>
    module.exports = {
        data(){
            return {
                current:'001',
                current2:'3.4.4.5.3',
                items:[
                    {
                        text:'首页',
                        value:'001'
                    },
                    {
                        text:'商品',
                        value:'002'
                    },
                    {
                        text:'行情',
                        value:'003'
                    },
                    {
                        text:'数据',
                        value:'004'
                    },
                    {
                        text:'设置',
                        value:'005'
                    }
                ]
            }
        },
        methods:{
            handleClick(index,paths,$event){
                this.current = index
                console.log('current',index,this.current,paths,$event)
            },
            handleClick2(index,paths,$event){
                this.current2 = index
                console.log('current2',index,this.current2,paths,$event)
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
        <fly-menu-item  
            v-for='(item,index) in items' 
            :index='item.value'
            :key='index'>
            {{item.text}}
        </fly-menu-item>
    </fly-menu>
</template>
```
```JS
export default {
    data(){
        return {
            current:'001',
            current2:2,
            items:[
                {
                    text:'首页',
                    value:'001'
                },
                {
                    text:'商品',
                    value:'002'
                },
                {
                    text:'行情',
                    value:'003'
                },
                {
                    text:'数据',
                    value:'004'
                },
                {
                    text:'设置',
                    value:'005'
                }
            ]
        }
    },
    methods:{
        handleClick(index,paths,$event){
            this.current = index
            console.log(index,paths,this.current,$event)
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
        <fly-menu-item index='1'>
            首页
        </fly-menu-item>
        <fly-menu-item index='2'>
            商品
        </fly-menu-item>
        <fly-sub-menu title='行情' index='3'>
            <fly-menu-item index='3.1'>
                3.1
            </fly-menu-item>
            <fly-menu-item index='3.2'>
                3.2
            </fly-menu-item>
            <fly-menu-item index='3.3'>
                3.3
            </fly-menu-item>
            <fly-sub-menu title='3.4' index='3.4'>
                <fly-menu-item index='3.4.1'>
                    3.4.1
                </fly-menu-item>
                <fly-menu-item index='3.4.2'>
                    3.4.2
                </fly-menu-item>
                <fly-sub-menu title='3.4.3' index='3.4.3'>
                    <fly-menu-item index='3.4.3.1'>
                        3.4.3.1
                    </fly-menu-item>
                    <fly-menu-item index='3.4.3.2'>
                        3.4.3.2
                    </fly-menu-item>
                    <fly-menu-item index='3.4.3.3'>
                        3.4.3.3
                    </fly-menu-item>
                </fly-sub-menu>
                <fly-menu-item index='3.4.4'>
                    3.4.4
                </fly-menu-item>
                <fly-sub-menu title='3.4.5' index='3.4.5'>
                    <fly-menu-item index='3.4.5.1'>
                        3.4.5.1
                    </fly-menu-item>
                    <fly-menu-item index='3.4.5.2'>
                        3.4.5.2
                    </fly-menu-item>
                    <fly-menu-item index='3.4.5.3'>
                        3.4.5.3
                    </fly-menu-item>
                    <fly-sub-menu title='3.4.5.4' index='3.4.5.4'>
                        <fly-menu-item index='3.4.4.5.1'>
                            3.4.4.5.1
                        </fly-menu-item>
                        <fly-menu-item index='3.4.4.5.2'>
                            3.4.4.5.2
                        </fly-menu-item>
                        <fly-menu-item index='3.4.4.5.3'>
                            3.4.4.5.3
                        </fly-menu-item>
                    </fly-sub-menu>
                </fly-sub-menu>
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
