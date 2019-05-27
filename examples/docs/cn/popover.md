<script>
    module.exports = {
        data(){
            return {
                citys:[{
                    label:'热门城市',
                    options:[
                    {
                        label:'广州',
                        value:'GZ'
                    },{
                        label:'深圳',
                        value:'SZ'
                    }]
                },{
                    label:'城市名',
                    options:[
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

## 汽泡提示

### 分组

::: demo

```html
<template>
  <fly-select placeholder="请选择一个城市" v-model="selected2">
    <fly-option-group
      :label="group.label"
      v-for="(group,index) in citys"
      :key="index"
    >
      <fly-option
        v-for="(city,index) in group.options"
        :key="index"
        :label="city.label"
        :value="city.value"
      >
      </fly-option>
    </fly-option-group>
  </fly-select>
</template>
<script>
  export default {
    data() {
      return {
        citys: [
          {
            label: "热门城市",
            options: [
              {
                label: "广州",
                value: "GZ"
              },
              {
                label: "深圳",
                value: "SZ"
              }
            ]
          },
          {
            label: "城市名",
            options: [
              {
                label: "东莞",
                value: "DG"
              },
              {
                label: "佛山",
                value: "FS"
              },
              {
                label: "清远",
                value: "QY"
              }
            ]
          }
        ]
      };
    }
  };
</script>
```

:::
