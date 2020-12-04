<template>
    <div class='fly-form'>
        <slot name='default'></slot>
    </div>
</template>
<script>
import {error, hasOwn, _toString} from '~/utils/'
export default {
  name: 'FlyForm',
  props: {
    value: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      errors: {},
      items: []
    }
  },
  methods: {
    /** 添加一个错误信息 */
    addError (rule, val) {
      if (!this.errors[rule]) {
        this.errors[rule] = []
      }
      this.errors[rule].push({
        key: rule,
        message: val.message
      })
    },
    /** 判断是否为空 */
    isRequired (rule, val) {
      if (hasOwn(val, 'required') && val.required) {
        const value = this.value[rule]
        if (['string', 'number', 'boolean'].indexOf(typeof value) > -1 && value.toString().length === 0) {
          this.addError(rule, val)
        } else if (['undefined', 'null'].indexOf(typeof value) > -1) {
          this.addError(rule, val)
        }
      }
    },
    /** 判断是否设置有自定义验证 */
    isValidator (rule, val) {
      if (hasOwn(val, 'validator') && typeof val.validator === 'function') {
        val.validator.call(null,
          rule, this.value[rule], (error) => {
            if (_toString.call(error) === '[object Error]') {
              this.addError(rule, error)
            }
          })
      }
    },
    /** 获取所有的子表单 */
    getItems () {
      this.items = this.$slots.default.filter(VNode => {
        return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'fly-form-item')
      })
      this.items = this.items.map(item => item.componentInstance)
    },
    /** 验证表单 */
    validate (callback) {
      this.resetForm()
      for (const rule in this.rules) {
        if (Array.isArray(this.rules[rule])) {
          this.rules[rule].forEach(val => {
            this.isRequired(rule, val)
            this.isValidator(rule, val)
          })
        } else {
          error(`The "${rule}" must be an array type.`)
        }
      }
      if (typeof callback === 'function') {
        if (Object.keys(this.errors).length > 0) {
          // eslint-disable-next-line no-useless-call
          callback.call(null, false)
          for (const error in this.errors) {
            const item = this.items.find(item => item.prop === error)
            item && item.showError(this.errors[error][0].message)
          }
        } else {
          // eslint-disable-next-line no-useless-call
          callback.call(null, true)
        }
      }
    },
    resetForm () {
      this.errors = {}
      this.items.forEach(item => {
        item && item.hideError()
      })
    }
  },
  mounted () {
    this.getItems()
  }
}
</script>
