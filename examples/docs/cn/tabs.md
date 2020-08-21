<script>
  module.exports = {
        data(){
            return {
                activeName:'tab1',
                tabName:'first',
                tabName1:'visible',
                index:2,
                tabs:[{
                    label:'tab1',
                    name:'tab1',
                    content:'Tab Content1'
                }]
            }
        },
        methods:{
            handleAddition(){
                const tabName = 'tab'+ this.index++
                this.tabs.push({
                    label:tabName,
                    name:tabName,
                    // disabled:this.index % 2 === 0 ? true:false,
                    content:`Tab Content ${tabName}`
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
  <fly-tabs v-model="tabName">
    <fly-tab-pane name="first" label="选项卡一">
      选项卡内容一<br/>
      选项卡内容一<br/>
      选项卡内容一<br/>
    </fly-tab-pane>
    <fly-tab-pane name="second" label="选项卡二">
      选项卡内容二<br/>
      选项卡内容二<br/>
      选项卡内容二<br/>
    </fly-tab-pane>
    <fly-tab-pane name="third" label="选项卡三">
      选项卡内容三<br/>
      选项卡内容三<br/>
      选项卡内容三<br/>
    </fly-tab-pane>
  </fly-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabName: "first"
      };
    }
  };
</script>
```

:::

### 自定义头部及指定 tab 禁用

::: demo

```html
<template>
  <fly-tabs v-model="tabName1">
    <fly-tab-pane name="visible">
      <template slot='label'>
        正文<fly-icon name='visible'></fly-icon>
      </template>
      <pre>
1.子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”《学而》

2.曾子曰：“吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”《学而》

3.子曰：“吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。”《为政》

4.子曰：“温故而知新，可以为师矣。”《为政》

5.子曰：“学而不思则罔，思而不学则殆。”《为政》

6.子曰：“贤哉，回也！一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉，回也！”《雍也》

7.子曰：“知之者不如好之者，好之者不如乐之者。”《雍也》

8.子曰：“饭疏食,饮水，曲肱而枕之，乐亦在其中矣。不义而富且贵，于我如浮云。”《述而》

9.子曰：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”《述而》

10.子在川上曰：“逝者如斯夫，不舍昼夜。”《子罕》

11.子曰：“三军可夺帅也， 匹夫不可夺志也。”《子罕》

12.子夏曰：“博学而笃志，切问而近思，仁在其中矣。”《子张》
      </pre>
    </fly-tab-pane>
    <fly-tab-pane name="eye_protection">
      <template slot='label'>
        译文<fly-icon name='eye_protection'></fly-icon>
      </template>
      <pre>
孔子说：“学了知识之后时常去温习，不是很愉快吗？ [5]  有志同道合的人从远方来，不是很快乐吗？人家不了解我，我却不恼怒，不是有才德的人吗？”

曾子说：“我每日多次进行自我检查：替人谋划事情是否竭尽自己的心力了呢？同朋友交往是否诚实可信了呢？老师传授的知识是否复习了呢？”

孔子说：“我十五岁开始有志于做学问，三十岁便小有所成，四十岁能（通达事理）不被外物所迷惑，五十岁能知道上天的意旨，
六十岁能听得进不同的意见，到七十岁才做事能随心所欲，不会超过规矩。”

孔子说：“温习学过的知识，可以获得新的理解与体会，那么就可以凭借这一点去当（别人的）老师了。”

孔子说：“只学习却不思考，就会感到迷惑而无所适从;只空想却不学习，就会疑惑而无所适从。”

孔子说：“多么贤德啊，颜回！一碗饭，一瓢水，住在简陋的小巷子里，别人都不能忍受这种穷困清苦，
颜回却不改变他（爱好学习）的乐趣。多么贤德啊，颜回！”

孔子说：“知道学习的人比不上爱好学习的人；爱好学习的人比不上以学习为快乐的人。”

孔子说：“吃粗粮，喝冷水，弯着胳膊枕着它睡，乐趣也在这当中。用不正当的手段得来的财富和地位，对我来说就像天上的浮云一样。”

孔子说：“在多个人的行列里，其中一定有人可以做我的老师。我选择他的优点向他学习，发现他的缺点（如果自己也有）就对照着改正自己的缺点。”

孔子在河岸上说：“逝去的一切 [6]  像河水一样流去， 日夜不停。”

孔子说：“军队的主帅可以改变，平民百姓的志向却不可改变。”

子夏说：“博览群书并广泛学习，而且能坚守自己的志向，恳切地提问，多思考当前的事，仁德就在其中了。”
      </pre>
    </fly-tab-pane>
    <fly-tab-pane disabled name="map">
      <template slot='label'>
        待开放
      </template>
      <div>
        待开放
      </div>
    </fly-tab-pane>
  </fly-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabName1: "visible"
      };
    }
  };
</script>
```

:::

### 动态添加

::: demo

```html
<template>
  <div style="width:700px">
    <fly-button @click="handleAddition">Add Tab</fly-button>
    <fly-tabs
      ref="tabs"
      closable
      v-model="activeName"
      @remove="handleRemove"
      @addition="handleAddition"
    >
      <fly-tab-pane
        :key="index"
        :disabled="tab.disabled"
        :name="tab.name"
        v-for="(tab,index) in tabs"
        :label="tab.label"
      >
        {{tab.content}}
      </fly-tab-pane>
    </fly-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "tab1",
        tabName: "first",
        index: 2,
        tabs: [
          {
            label: "tab1",
            name: "tab1",
            content: "tab content1"
          }
        ]
      };
    },
    methods: {
      handleAddition() {
        const tabName = "tab" + this.index++;
        this.tabs.push({
          label: tabName,
          name: tabName,
          disabled: this.index % 2 === 0 ? true : false,
          content: `tab content ${tabName}`
        });
        this.activeName = tabName;
      },
      handleRemove(name) {
        const index = this.tabs.findIndex(tab => {
          return tab.name === name;
        });
        const nextTab = this.tabs[index + 1] || this.tabs[index - 1];
        this.tabs.splice(index, 1);
        this.activeName = nextTab.name;
      }
    }
  };
</script>
```

:::

### Tab - 可定制属性

| 属性名称        | 类型    | 默认值 | 可选值       | 说明           |
| --------------- | ------- | ------ | ------------ | -------------- |
| value / v-model | String  | -      | -            | 绑定的值       |
| type            | String  | -      | simple       | 卡片的风格     |
| closable        | Boolean | false  | true / false | tab 是否可关闭 |

### Tab - 可定制的事件

| 事件名称   | 返回值 | 说明                                   |
| ---------- | ------ | -------------------------------------- |
| added   | -      | 添加 tab 事件之后                      |
| remove  | -      | 删除 tag 事件，一般用于动态生成的 tabs |
| changed | -      | 切换了 tab 之后                        |

### Tab-pane - 可定制属性

| 属性名称 | 类型    | 默认值 | 可选值       | 说明                                                                              |
| -------- | ------- | ------ | ------------ | --------------------------------------------------------------------------------- |
| label    | String  | -      | -            | 选项卡标题                                                                        |
| disabled | Boolean | false  | true / false | 是否禁用                                                                          |
| closable | Boolean | false  | true / false | tab 是否可关闭                                                                    |
| name     | String  | -      | -            | 与选项卡 activeName 对应的标识符，表示选项卡别名,如未配置则默认按排列顺序数字标识 |
