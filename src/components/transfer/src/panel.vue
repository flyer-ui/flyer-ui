<template>
    <div>
        <fly-row class='fly-transfer__header'>
            <fly-col :span='16'>
                <fly-checkbox
                 v-model="selectedAll"
                :indeterminate="indeterminate"
                @change="handleSelectAll"
                v-if='hasSelectAll'>{{title}}</fly-checkbox>
                <label v-else>{{title}}</label>
            </fly-col>
            <fly-col :span='8' align='right' class='fly-transfer__total'>
                {{selectedKeys.length}} / {{items.length}}
            </fly-col>
        </fly-row>
        <fly-checkbox-group v-model="selectedKeys" @change="handleSelectedItem" class='fly-transfer__body'>
            <div class='fly-transfer__item' v-for="(item,index) in items" :key="index">
                <fly-checkbox
                    :disabled="item.disabled || disabled"
                    :label='item.value'>
                    {{item.name}}
                </fly-checkbox>
            </div>
        </fly-checkbox-group>
        <div class='fly-transfer__footer'>
            <slot name='default'></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FlyTransferPanel',
  props: {
    hasSelectAll: Boolean,
    title: String,
    items: Array,
    disabled: Boolean
  },
  data () {
    return {
      indeterminate: false,
      selectedAll: false,
      selectedKeys: []
    }
  },
  methods: {
    handleSelectAll (value) {
      this.indeterminate = value
      this.selectedKeys = value ? this.items.map(item => item.value) : []
      this.indeterminate = false
      this.$emit('input', this.selectedKeys)
    },
    handleSelectedItem (values) {
      this.selectedAll = values.length === this.items.length && values.length > 0
      this.indeterminate = values.length > 0 && values.length < this.items.length
      this.$emit('input', this.selectedKeys)
    },
    resetState () {
      this.indeterminate = false
      this.selectedAll = false
    }
  }
}
</script>
