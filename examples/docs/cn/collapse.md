<script>
    module.exports = {
        data(){
            return {
                activeName:'name1',
                activeName2:'name1',
                activeName3:'name1',
                iconName:'down'
            }
        },
        methods:{
            handleChange(name){
                console.log('executing handleChange.',name)
                // this.activeName = name
            }
        }
    }
</script>

## Collapse 折叠面板

### 基本使用

::: demo
```html
<template>
    <fly-collapse v-model='activeName' @change='handleChange'>
        <fly-collapse-item title='孔子说' name='name1'>
            “学了（知识）然后按一定的时间复习它，不也是很愉快吗？有志同道合的人从远方来，不也是很快乐吗？
            人家不了解我，我却不恼怒，不也是道德上有修养的人吗？”
        </fly-collapse-item>
        <fly-collapse-item title='曾子说' name='name2'> 
            “我每天多次反省自己：替别人办事是不是尽心竭力了呢？同朋友交往是不是诚实可信了呢？老师传授的知识是不是复习了呢？”
        </fly-collapse-item>
        <fly-collapse-item title='孔子说' name='name3'> 
            “我十五岁开始有志于做学问，三十岁便小有所成，四十岁能（通达事理）不被外物所迷惑，五十岁能知道上天的意旨，
            六十岁能听得进不同的意见，到七十岁才做事能随心所欲，不会超过规矩。”
        </fly-collapse-item>
        <fly-collapse-item title='孔子说' name='name4'> 
            “温习学过的知识，可以获得新的理解与体会，那么就可以凭借这一点去当（别人的）老师了。”
        </fly-collapse-item>
    </fly-collapse>
</template>
```
```JS
export default = {
    data(){
        return {
            activeName:'name1',
            iconName:'down'
        }
    },
    methods:{
        handleChange(name){
            console.log('executing handleChange.',name)
            // this.activeName = name
        }
    }
}
```
:::

### 手风琴模式

::: demo
```html
<template>
    <fly-collapse v-model='activeName' accordion @change='handleChange'>
        <fly-collapse-item title='孔子说' name='name1'>
            “学了（知识）然后按一定的时间复习它，不也是很愉快吗？有志同道合的人从远方来，不也是很快乐吗？
            人家不了解我，我却不恼怒，不也是道德上有修养的人吗？”
        </fly-collapse-item>
        <fly-collapse-item title='曾子说' name='name2'> 
            “我每天多次反省自己：替别人办事是不是尽心竭力了呢？同朋友交往是不是诚实可信了呢？老师传授的知识是不是复习了呢？”
        </fly-collapse-item>
        <fly-collapse-item title='孔子说' name='name3'> 
            “我十五岁开始有志于做学问，三十岁便小有所成，四十岁能（通达事理）不被外物所迷惑，五十岁能知道上天的意旨，
            六十岁能听得进不同的意见，到七十岁才做事能随心所欲，不会超过规矩。”
        </fly-collapse-item>
        <fly-collapse-item title='孔子说' name='name4'> 
            “温习学过的知识，可以获得新的理解与体会，那么就可以凭借这一点去当（别人的）老师了。”
        </fly-collapse-item>
    </fly-collapse>
</template>
```
```JS
export default = {
    data(){
        return {
            activeName2:'name1',
            iconName:'down'
        }
    },
    methods:{
        handleChange(name){
            console.log('executing handleChange.',name)
            // this.activeName = name
        }
    }
}
```
:::

### 自定义标题
::: demo
```html
<template>
    <fly-collapse v-model='activeName3' @change='handleChange'>
        <fly-collapse-item title='孔子说' name='name1'>
            “学了（知识）然后按一定的时间复习它，不也是很愉快吗？有志同道合的人从远方来，不也是很快乐吗？
            人家不了解我，我却不恼怒，不也是道德上有修养的人吗？”
        </fly-collapse-item>
        <fly-collapse-item name='name2'> 
            <template slot='title'>
                曾子说
                <fly-icon name='warning' font-size='12px'></fly-icon>
            </template>
            “我每天多次反省自己：替别人办事是不是尽心竭力了呢？同朋友交往是不是诚实可信了呢？老师传授的知识是不是复习了呢？”
        </fly-collapse-item>
        <fly-collapse-item title='孔子说' name='name3'> 
            “我十五岁开始有志于做学问，三十岁便小有所成，四十岁能（通达事理）不被外物所迷惑，五十岁能知道上天的意旨，
            六十岁能听得进不同的意见，到七十岁才做事能随心所欲，不会超过规矩。”
        </fly-collapse-item>
        <fly-collapse-item title='孔子说' name='name4'> 
            “温习学过的知识，可以获得新的理解与体会，那么就可以凭借这一点去当（别人的）老师了。”
        </fly-collapse-item>
    </fly-collapse>
</template>
```
```JS
export default = {
    data(){
        return {
            activeName3:'name1',
            iconName:'down'
        }
    },
    methods:{
        handleChange(name){
            console.log('executing handleChange.',name)
            // this.activeName = name
        }
    }
}
```
:::

### Collapse - 可定制的属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| active-name | String / Number  | -      | -            | 绑定的值      |
| accordion | Boolean  | False      | -            | 是否是手风琴模式      |

### Collapse-Item - 可定制的属性

| 属性名称        | 类型            | 默认值 | 可选值       | 说明                  |
| --------------- | --------------- | ------ | ------------ | --------------------- |
| title | String | -      | -            | 面板的标题      |
| name | String/Number | -      | -            | 唯一标识符      |
| disabled | Boolean | -      | -            | 是否禁用      |

### Collapse - 可定制的事件

| 事件名称  | 返回值                   | 说明                                        |
| --------- | ------------------------ | ------------------------------------------- |
| change   | (name)           | 变更面板时触发的事件，参数为变更后最新的激活名称。                     |