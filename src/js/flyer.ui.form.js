/***
 *@Name: fiyer v0.1.1 表单组件
 *@Author: Ken(郑鹏飞)
 *@License：MIT
 ***/
flyer.define("form", function(selector, options, callback) {

    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Form = function(selector, options, callback) {
        return this.init(selector, options, callback);
    }

    Form.DEFAULTS = {

        //类型:Object,权限设置组
        rules: {},

        //类型:Object,消息提示设置组
        messages: {},

        //类型:String,提示事件标记,类似jQuery方式
        submit: ".submit",

        //类型:Boolean,是否表单提交
        isFormSumbit: false
    }

    Form.prototype = {

        //页面加载的实例化入口
        init: function(selector, options, callback) {

            this.options = $.extend(true, {}, Form.DEFAULTS, options);

            //得到一个表单实例值
            this.formElm = selector;

            this.formElm.attr("novalidate", "true");

            //获取验证配置
            this.getValidData();

            //内置一个错误提示记录
            this.errorMsg = {};

            this.initEvent(callback);
        },

        //加载事件，主要是实例化点击事件
        initEvent: function(callback) {
            var _this = this;
            $(this.formElm).find(this.options.submit).on("click", function(e) {
                try {
                    _this.submit(e, callback);
                } catch (ex) {
                    console.error(ex);
                    e.preventDefault();
                }
            });

        },

        //得到表单内的所有验证元素
        elements: function() {
            return $(this.formElm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled");
        },

        //得到元素的值
        elementValue: function(element) {

            //代码来源于 jquery.validation
            var $element = $(element),
                type = element.type,
                val, idx;

            if (this.checkable(element.type)) {
                val = $(this.formElm).find("[name='" + element.name + "']").filter(":checked").val();
            } else {
                val = $element.val();
            }

            return val;
        },

        //收集元素属性的配置
        attributeRules: function(element) {

            var _this = this,
                rules = {};
            for (var method in this.methods) {
                var attr = element.getAttribute(method);
                if (attr) {
                    rules[method] = attr;
                }
            }

            return rules;
        },

        //获取验证配置
        getValidData: function() {
            for (var i = 0, elements = this.elements(), rules = this.options.rules, len = elements.length; i < len; i++) {
                var name = elements[i].name,
                    rule = this.attributeRules(elements[i]);

                if (name.length > 0 && !this.isEmptyObject(rule)) {
                    rules[name] = rule;
                }
            }
        },

        //验证表单
        formCheck: function() {

            for (var i = 0, elements = this.elements(), rules = this.options.rules, len = elements.length; i < len; i++) {
                var name = elements[i].name;
                if (!this.check(elements[i])) {
                    this.showError(name, elements[i]);
                    return false;
                }
            }

            return true;
        },

        //得到元素的验证规则
        getElementRulesByName: function(name) {
            return this.options.rules[name];
        },

        //验证表单元素
        check: function(element) {

            var vaule = this.elementValue(element),
                name = element.name,
                rules = this.getElementRulesByName(name),
                result = true;
            this.errorMsg[name] = [];
            for (var rule in rules) {
                if (!this.methods[rule].call(this, vaule, element, rules[rule])) {
                    result = false;
                    this.errorMsg[name].push(this.defaultMessage(this.messages[rule], rules[rule]));
                }
            }
            return result;
        },

        //格式化函数
        format: function(source, params) {
            if (arguments.length === 1) {
                return function() {
                    var args = $.makeArray(arguments);
                    args.unshift(source);
                    return $.validator.format.apply(this, args);
                };
            }
            if (params === undefined) {
                return source;
            }
            if (arguments.length > 2 && params.constructor !== Array) {
                params = $.makeArray(arguments).slice(1);
            }
            if (params.constructor !== Array) {
                params = [params];
            }
            $.each(params, function(i, n) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                    return n;
                });
            });
            return source;
        },

        //内置消息提示语句
        messages: {
            required: "必选字段",
            remote: "请修正该字段",
            email: "请输入正确格式的电子邮件",
            url: "请输入合法的网址",
            date: "请输入合法的日期",
            dateISO: "请输入合法的日期 (ISO).",
            number: "请输入合法的数字",
            digits: "只能输入整数",
            creditcard: "请输入合法的信用卡号",
            equalTo: "请再次输入相同的值",
            accept: "请输入拥有合法后缀名的字符串",
            maxlength: "请输入一个长度最多是 {0} 的字符串",
            minlength: "请输入一个长度最少是 {0} 的字符串",
            rangelength: "请输入一个长度介于 {0} 和 {1} 之间的字符串",
            range: "请输入一个介于 {0} 和 {1} 之间的值",
            max: "请输入一个最大为 {0} 的值",
            min: "请输入一个最小为 {0} 的值"
        },

        defaultMessage: function(message, parameters) {
            var theregex = /\$?\{(\d+)\}/g;
            if (theregex.test(message)) {
                message = this.format(message, parameters);
            }
            return message;
        },

        //添加一个自定义验证方法
        addMethods: function(name, method, message) {
            this.methods[name] = mehthod;
            this.messages[name] = typeof message !== "undefined" ? message : this.message[name];
        },

        //验证是否是单选或复选框
        checkable: function(element) {
            return (/radio|checkbox/i).test(element.type);
        },

        isEmptyObject: function(o) {
            var i;
            for (i in o)
                return false;
            return true;
        },

        optional: function(element) {
            var val = this.elementValue(element);
            return !this.methods.required.call(this, val, element) && "dependency-mismatch";
        },

        findByName: function(name) {
            return $(this.formElm).find("[name='" + name + "']");
        },

        getLength: function(value, element) {
            switch (element.nodeName.toLowerCase()) {
                case "select":
                    return $("option:selected", element).length;
                case "input":
                    if (this.checkable(element)) {
                        return this.findByName(element.name).filter(":checked").length;
                    }
            }
            return value.length;
        },

        //内置验证方法
        methods: {

            //验证非空
            required: function(value, element, param) {

                // Check if dependency is met
                if (!param) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {

                    // Could be an array for select-multiple or a string, both are fine this way
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return value.length > 0;
            },

            //验证是否是邮箱
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },

            //验证是否是URL地址
            url: function(value, element) {
                return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            },

            //必须输入正确格式的日期，日期校验ie6出错，慎用
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },

            //必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性          
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },

            //必须输入合法的数字(负数，小数)
            number: function(value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },

            //必须输入整数
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },

            //输入长度最小是10的字符串(汉字算一个字符)
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param;
            },

            //输入长度最多是5的字符串(汉字算一个字符)
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param;
            },

            //输入长度必须介于 5 和 10 之间的字符串 ")(汉字算一个字符)
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },

            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },

            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },

            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },

            step: function(value, element, param) {

            },

            //输入值必须和#password相同
            equalTo: function(value, element, param) {

                var target = this.formElm.find("[name='" + param + "']");
                return value === target.val();
            },

            // http://jqueryvalidation.org/remote-method/
            remote: function(value, element, param, method) {

            }
        },

        //提交表单
        submit: function(event, callback) {

            this.elements().removeClass("flyer-form-error");
            this.formElm.find(".flyer-form-error").removeClass("flyer-form-error");
            if (this.formCheck()) {

                if (this.options.isFormSumbit) {
                    this.formElm.submit();
                } else {
                    if (typeof callback === "function") {
                        callback.call(this);
                    }
                    event.preventDefault();
                }

            } else {
                event.preventDefault();
            }
        },

        //提示错误信息
        showError: function(name, element) {

            if (flyer && flyer.msg) {
                flyer.closeAll("msg");
                var msg = "";
                for (var i = 0, msgs = this.errorMsg[name], len = msgs.length; i < len; i++) {
                    msg += msgs[i] + "</br>";
                }
                flyer.msg(msg);
            }
            var $elm = $(element);
            if ($elm.hasClass("filter-options")) {
                $elm.parent().addClass("flyer-form-error");
            } else if (this.checkable(element)) {
                if ((/radio/i).test(element.type)) {
                    this.findByName(name).next().addClass("flyer-form-error");
                } else {
                    this.findByName(name).parent().addClass("flyer-form-error");
                }
            } else {
                $elm.addClass("flyer-form-error");
            }

            $elm.focus();
        },

        //得到表单数据
        getData: function() {
            var data = [];
            for (var i = 0, elements = this.elements(), len = elements.length; i < len; i++) {
                data.push(JSON.parse('{"' + elements[i].name + '":"' + this.elementValue(elements[i]) + '"}'));
            }
            return data;
        }

    }

    return new Form(selector, options, callback);
});