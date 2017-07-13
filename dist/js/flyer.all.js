/*
name:flyer-ui v 0.1.1类库
Author: Ken (郑鹏飞)
Site : http://www.flyerui.com
License：MIT
打包时间:2017-07-13
*/
(function(global, $, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("The plug-in needs to be on the support document rendering environment.");
            } else if (!$) {
                throw new Error("The plug-in needs to be on the support jQuery rendering environment.");
            }
            return factory(w);
        };

    } else {
        factory(global, $);
    }

})(typeof window !== "undefined" ? window : this, jQuery, function(window, $, noGlobal) {
    "use strick"

    //声明一个载体
    var fly = function() {
            this.vision = "0.1.1";
        },
        win = window,
        slice = Array.prototype.slice,
        loca = win.location,
        fn = fly.fn = fly.prototype = {
            /**
             * 
             * 对字符串进行占位符格式化,例如 format("{1},{2}","a","b");
             * @returns str
             */
            format: function() {
                var args = slice.call(arguments),
                    str, len = args.length;
                if (len > 0) {
                    for (var i = 1, str = args[0]; i < len; i++) {
                        str = str.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
                    }
                    return str;
                } else {
                    return this;
                }
            },
            /**
             * 格式化日期,format是格式化的格式，date是要格式化的日期
             * @param {any} format 
             * @param {any} date 
             * @returns 
             */
            formatDate: function(format, date) {
                if (!(format instanceof String)) {
                    flyer.log("error", "format参数未定义...");
                    return false;
                }
                date = this.getDate(date);
                return format
                    .replace(/yyyy/ig, date.year)
                    .replace(/mm/, this.fullTime(date.month))
                    .replace(/dd/ig, this.fullTime(date.day))
                    .replace(/hh/ig, this.fullTime(date.hours))
                    .replace(/MM/, this.fullTime(date.minutes))
                    .replace(/ss/ig, this.fullTime(date.seconds));
            },
            /**
             * 根据参数返回年月日时分秒对象,为空则返回当前时间
             * @param {any} date 
             * @returns 
             */
            getDate: function(date) {
                date = date || new Date();
                return {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate(),
                    hours: date.getHours(),
                    minutes: date.getMinutes(),
                    seconds: date.getSeconds()
                }
            },
            /**
             * 
             * 填充时间,判断时间是否是十位数，不是则前位补0
             * @param {any} time 
             * @returns 
             */
            fullTime: function(time) {
                return time >= 10 ? time : ("0" + time);
            },
            /**
             * 
             * 根据参数名称获取到URL的参数值
             * @param {any} name 
             * @returns 
             */
            getQueryString: function(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = loca.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            },
            /**
             * 
             * HTML字符串编码（可用于防止XSS攻击)
             * @param {any} text 
             * @returns 
             */
            escapeHTML: function(text) {
                if (typeof text === 'string' && text.length > 0) {
                    return text
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/\"/g, "&quot;")
                        .replace(/\'/g, "&#39;")
                        .replace(/ /g, "&nbsp;")
                        .replace(/\n/g, "<br/>")
                }
                return text;
            },
            /**
             * 
             * HTML字符串解码（可用于防止XSS攻击)
             * @param {any} text 
             * @returns 
             */
            unescapeHTML: function(text) {
                if (typeof text === 'string' && text.length > 0) {
                    return text
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, "\"")
                        .replace(/&#39;/g, "\'")
                        .replace(/&nbsp;/g, " ")
                        .replace(/<br\/>/g, "\n")
                }
                return text;
            },
            /**
             * 获取到当天时间
             * 
             * @returns 
             */
            today: function() {
                return new Date().toISOString().replace(/T.+/, "");
            },
            /**
             * 判断一个对象是否为空
             * 
             * @param {any} o 
             * @returns 
             */
            isEmptyObject: function(o) {
                var i;
                for (i in o)
                    return false;
                return true;
            },
            /**
             * 阻止冒炮事件
             * 
             * @param {any} e 
             */
            stop: function(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
            },
            /**
             * 
             * 得到当前函数的名称
             * @param {any} fn 
             * @returns 
             */
            getFnName: function(fn) {
                return (/^[\s\(]*function(?:\s+([\w$_][\w\d$_]*))?\(/).exec(fn.toString())[1] || '';
            },
            /**
             * 
             * 判断是否是无效的空值
             * @param {any} value 
             * @returns 
             */
            isEmpty: function(value) {
                var comparable = [null, "undefined", undefined, "N/A", "0", 0, "null", false, "false"];
                return comparable.indexOf(value) > 0 ? false : true;
            },
            /**
             * 
             * 判断是否是 Object 对象
             * @param {any} obj 
             * @returns 
             */
            isObject: function(obj) {
                return typeof obj === "object";
            },
            /**
             * 
             * 判断是否是 function 对象
             * @param {any} obj 
             * @returns 
             */
            isFunction: function(obj) {
                return typeof obj === "function";
            },
            /**
             * 
             * 判断是否是 string 对象
             * @param {any} obj 
             * @returns 
             */
            isString: function(obj) {
                return typeof obj === "string";
            },
            /**
             * 判断是否是 jQuery 对象
             * 
             * @param {any} obj 
             * @returns 
             */
            isjQuery: function(obj) {
                return obj instanceof jQuery;
            },
            /**
             * 判断是否是 undefined 对象
             * 
             * @param {any} obj 
             * @returns 
             */
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            /**
             * 在控制台输入信息，可自定义打印消息类型
             * 
             * @param {any} type 
             * @param {any} msg 
             */
            log: function(type, msg) {
                if (typeof console) {
                    var args = slice.call(arguments);
                    if (args.length === 1) {
                        msg = type;
                        console.log(msg);
                    } else if (args.length > 1) {
                        console[type](msg);
                    }
                }
            }
        }

    /**
     * 定义一个开放接口
     * 
     * @param {String} name 
     * @param {Object} callback 
     */
    fn.define = function(name, callback) {
        fn[name] = callback;
    }

    /**
     * 提供一个拓展的方法接口
     * 
     * @param {String | Object} namespace 
     * @param {Object} options 
     * @returns 
     */
    fn.extend = function(namespace, options) {
        var nspace = {},
            o;

        if (fn.isObject(namespace)) {
            options = namespace;
        } else if (fn.isFunction(namespace)) {
            options = namespace;
            options = options.call(this);
        }

        //如果存在包名 namespace ，则装载在包名下面
        if (fn.isString(namespace)) {
            for (o in options) {
                nspace[o] = options[o];
            }
            this[namespace] = nspace;
        } else {
            for (o in options) {
                this[o] = options[o];
            }
        }

        return this;
    }

    //实例化给并挂在 window 对象下
    window.flyer = new fly();
});
//定义成 flyer 内置模块

flyer.extend("store", function() {
    var regKey = /^[0-9A-Za-z_@-]*$/,
        store;

    //转换对象
    function init() {
        if (typeof store === "undefined") {
            store = window.localStorage;
        }
        return true;
    }

    //判断 localStorage 的 Key 值是否合法
    function isValidKey(key) {
        if (typeof key != "string") {
            return false;
        }
        return regKey.test(key);
    }

    return {

        //设置 localStorage 单条记录
        set: function(key, value) {
            var success = false;
            if (isValidKey(key) && init()) {
                try {
                    value += "";
                    store.setItem(key, value);
                    success = true;
                } catch (e) {}
            }
            return success;
        },

        //读取 localStorage 单条记录
        get: function(key) {
            if (isValidKey(key) && init()) {
                try {
                    return store.getItem(key);
                } catch (e) {}
            }
            return null;
        },

        //移除 localStorage 单条记录
        remove: function(key) {
            if (isValidKey(key) && init()) {
                try {
                    store.removeItem(key);
                    return true;
                } catch (e) {}
            }
            return false;
        },

        //清除 localStorage 所有记录
        clear: function() {
            if (init()) {
                try {
                    for (var key in store) {
                        store.removeItem(key);
                    }
                    return true;
                } catch (e) {}
                return false;
            }
        }
    }
});
flyer.define("combobox", function(selector, options) {

    /*
     *   功能说明：1、单选 2、多选 3、添加值 4、获取值
     */
    //定义一个样式数组集合
    var styles = ["flyer-combobox", "flyer-combobox-contents", "filter-options", "fa-angle-down", "flyer-combobox-items", "flyer-combobox-search", "fa-search", "selected", "open", "fa-angle-down", "fa-angle-up"],
        body = document.body,
        doc = document,
        loca = location,
        win = window;



    //声明一个下拉框构造函数 
    var ComboBox = function(selector, options) {
        return this.init(selector, options);
    }

    ComboBox.DEFAULTS = {

        //类型：Boolean ,是否支持多选，默认值为true
        isMulti: true,

        //类型：Boolean ,是否禁用,默认值为false
        disabled: false,

        //类型：Boolean ,是否允许索引内容,默认值为 true
        allowSearch: true,

        //类型：String ,显示值分隔的符号，默认值为 ;
        multipleSeparator: ";",

        //类型: String ,要绑定的键,默认值为 id
        fieldKey: "value",

        //是否必选,这个属性要配合flyerUI的表单插件才能有效果,默认值为true
        required: true,

        //下拉框组件名称,默认值为comboBox
        name: "comboBox",

        //类型: String ,要绑定的值,默认值为 value
        fieldValue: "text",

        //类型：String ,显示在下拉框上的 placeholder,默认值为 placeholder
        placeholder: "placeholder",

        //类型：String ,搜索的框里的placeholder,默认值为 “在这里可以快捷搜索到你想找的..”
        searchPlaceholder: "在这里可以快捷搜索到你想找的..",

        //类型：String ,请求服务数据源地址,默认值为空
        url: "",

        //类型：Array ,JSON数据Data ,优先于请求的服务数据源地址,默认值为 []
        data: [],

        //类型：Boolean ,是否可以选中全部
        selectAll: true,

        //类型：Boolean ,点击全选是否选中所有的值
        allowSelectAll: true,

        //类型：Function ,开放一个数据结构处理的方法
        fnDataProcessing: function() {
            this.data = this.data.rows;
        },

        //类型：Function,选中事件
        fnSelected: function() {
            return false;
        },

        //类型：Function ,选中之前事件
        fnBeforeSelected: function() {
            //废弃后的事件...
        },

        //类型：Function,先中之后事件
        fnAfterSelected: function() {
            //废弃后的事件...
        }

    }

    ComboBox.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, ComboBox.DEFAULTS, options);
            this.selector = selector;
            this[0] = $(selector);
            this._data = {};
            this.requestData();
        },

        //加载模板
        template: function() {
            var opts = this.options,
                _this = this;

            var arryHtmls = [
                '<div class="flyer-combobox">',
                '<div class="flyer-combobox-contents">',
                '<input type="text" class="filter-options" name="' + opts.name + '" required="' + opts.required + '" placeholder=' +
                opts.placeholder +
                ' readonly="readonly" /><i class="fa fa-angle-down"></i>',
                '</div>',
                '<div class="flyer-combobox-items">',
                opts.allowSearch ? '<div class="flyer-combobox-search"><input placeholder="' + opts.searchPlaceholder + '" type="text"><i class="fa fa-search"></i></div>' : "",
                '<ul>',
                _this.allowAllItem() ? "<li data-index='-1' data-key='-1' data-value='全部'><div>全部</div></li>" : "",
                _this.readerItems(),
                '</ul>',
                '</div>',
                '</div>'
            ]

            if (_this.isSelectHtml()) {
                this[0] = this[0].parent();
                this[0].append(arryHtmls.join(""));
            } else {
                this[0].html(arryHtmls.join(""));
            }

            this.$itemContainer = this[0].find("." + styles[4]);
            this.$contents = this[0].find("." + styles[1]);
            this.$items = this.$itemContainer.find("li");
            this.$filterOptions = this.$contents.find("." + styles[2]).eq(0);

        },

        //渲染下拉数据
        readerItems: function() {
            var arryHtmls = [],
                _this = this,
                opts = this.options,
                data = opts.data;

            for (var i = 0, len = data.length; i < len; i++) {
                arryHtmls.push('<li data-index=' + i + ' data-key=' + data[i][opts.fieldKey] + ' data-value=' + data[i][opts.fieldValue] + '><div>' + data[i][opts.fieldValue] + '</div></li>');
            }

            return arryHtmls.join("");
        },

        //拼装数据
        requestData: function() {
            var _this = this,
                opts = this.options,
                data = opts.data;

            if (data.length == 0 && opts.url.length > 0) {
                $.getJSON(this.options.url, function(data) {
                    opts.data = data;
                    opts.fnDataProcessing();
                    _this.template();
                    _this.initEvents();
                });
            } else if (this.isSelectHtml()) {
                _this.readHtmlToData();
                _this.template();
                _this.initEvents();
            } else {
                _this.template();
                _this.initEvents();
            }
        },

        //判断是否是 Select 标签
        isSelectHtml: function() {
            return this[0].prop("tagName") === "SELECT";
        },

        //如果是 Select 标签就将标签转换为JSON对象
        readHtmlToData: function() {
            var select = this[0].get(0),
                children = select.children;

            if (select) {
                select.style.display = "none";
                for (var i = 0, len = children.length; i < len; i++) {
                    var item = {};
                    for (var j = 0, attrs = children[i].attributes, jLen = attrs.length; j < jLen; j++) {
                        if (attrs[j].name.indexOf("data-") > -1) {
                            item[attrs[j].name.replace("data-", "")] = attrs[j].value;
                        }
                    }
                    item[this.options.fieldValue] = children[i].text;
                    this.options.data.push(item);
                }
            }
        },

        //添加事件
        initEvents: function() {

            var _this = this,
                opts = _this.options;

            _this.$contents.on("click", function(e) {
                if (_this.$itemContainer.hasClass(styles[8])) {
                    _this.hideItems.call(_this);
                } else {
                    _this.$itemContainer.addClass(styles[8]);
                    _this.$contents.find("i").removeClass(styles[9]).addClass(styles[10]);
                }
                flyer.stop(e);
            });

            _this.$items.each(function() {
                $(this).on("click", function(e) {

                    var $this = $(this),
                        del = $this.hasClass(styles[7]) ? true : false;

                    var item = {
                        fieldKey: $this.data("key"),
                        fieldValue: $this.data("value")
                    }
                    if (item.fieldKey == "-1" && item.fieldValue == "全部") {
                        _this.empty();
                    } else {
                        _this.unselectAll();
                    }

                    _this.showSelectedItem(item, del);

                    opts.fnSelected.call(_this, item, this, _this._data);

                    if (!opts.isMulti) {
                        _this.hideItems.call(_this);
                        _this.$items.removeClass(styles[7]);
                    }

                    if (del) {
                        $this.removeClass(styles[7]);
                    } else {
                        $this.addClass(styles[7]);
                    }
                    if (_this.allowAllItem()) {
                        _this.checkSelectAll();
                    }
                    flyer.stop(e);

                });
            });

            $(document).on("click", function(e) {
                //$("." + styles[4]).removeClass(styles[8]);
                _this.hideItems();
                flyer.stop(e);
            });

        },

        //是否允许添加全部选项
        allowAllItem: function() {
            var opts = this.options;
            return opts.selectAll && opts.isMulti && opts.data.length > 1;
        },

        //将选中的值显示在内容区域
        showSelectedItem: function(item, del) {

            var opts = this.options,
                keys = this.$filterOptions.data("key") || "",
                values = this.$filterOptions.val() || "";

            if (opts.isMulti) {

                //如果是删除
                if (del) {
                    keys = String(keys).replace((item.fieldKey + opts.multipleSeparator), "");
                    values = values.replace((item.fieldValue + opts.multipleSeparator), "");
                } else {
                    keys = String(keys) + item.fieldKey + opts.multipleSeparator;
                    values = values + item.fieldValue + opts.multipleSeparator;
                }
            } else {
                keys = item.fieldKey;
                values = item.fieldValue;
            }

            this.$filterOptions.val(values);
            this.$filterOptions.data("key", keys);

            //声明一个内部选中的数据
            this._data = {
                fieldKey: keys,
                fieldValue: values
            }
        },

        //全部选中
        selectAllItems: function(elm) {
            var _this = this,
                opts = this.options,
                $elm = $(elm);

            if ($elm.attr("all") == "select") {
                this.$items.removeClass(styles[7]);
                $elm.attr("all", "unselect");
                _this.empty();
            } else {

                this.$items.each(function() {
                    var $this = $(this),
                        item = {
                            fieldKey: $this.data("key"),
                            fieldValue: $this.data("value")
                        };
                    $this.addClass(styles[7]);
                    if (item.fieldKey != "-1") {
                        _this.showSelectedItem(item);
                    }
                });

                $elm.attr("all", "select");
            }
        },

        //移除选中的all项
        unselectAll: function() {
            var $all = this.$itemContainer.find("[data-index='-1']");
            if ($all.hasClass(styles[7])) {
                $all.removeClass(styles[7]);
                $all.attr("all", "select");
                this.empty();
            }
        },

        //检测是否是全部选中了
        checkSelectAll: function() {
            var selectedLength = this.$itemContainer.find("." + styles[7]).length,
                $all = this.$itemContainer.find("[data-index='-1']");
            if (selectedLength == this.options.data.length) {
                this.empty();
                $all.click();
            }
        },

        //隐藏下拉框
        hideItems: function() {
            this.$itemContainer.removeClass(styles[8]);
            this.$contents.find("i").removeClass(styles[10]).addClass(styles[9]);
        },

        //快捷检索出需要的数据
        filterData: function() {

        },

        //得到选中的值对象
        getSelectedData: function() {
            return this._data;
        },

        //得到选中的值
        getSelectedValue: function() {
            return this._data.fieldKey;
        },

        //得到选中的文本
        getSelectedText: function() {
            return this._data.fieldValue;
        },

        //给对象赋值
        setValue: function(data) {

            var $selectedItem = this.$itemContainer.find("[data-key='" + data.fieldKey + "']");
            this._data = {
                fieldKey: data.fieldKey,
                fieldValue: data.fieldValue || $selectedItem.data("value")
            }
            this.$filterOptions.val(this._data.fieldValue);
            this.$filterOptions.data("key", this._data.fieldKey);
            $selectedItem.addClass(styles[7]);
        },

        //给对象数组赋值
        setValues: function(data) {
            var keys = "",
                values = "",
                opts = this.options;
            for (var i = 0, len = data.length; i < len; i++) {
                var $selectedItem = this.$itemContainer.find("[data-key='" + data[i].fieldKey + "']");
                keys = keys + data[i].fieldKey + opts.multipleSeparator;
                values = values + (data[i].fieldValue || $selectedItem.data("value")) + opts.multipleSeparator;
                $selectedItem.addClass(styles[7]);
            }

            this._data = {
                fieldKey: keys,
                fieldValue: values
            }
            this.$filterOptions.val(this._data.fieldValue);
            this.$filterOptions.data("key", this._data.fieldKey);
        },

        //清空选中的值
        empty: function() {
            this._data = {
                fieldKey: "",
                fieldValue: ""
            }
            this.$filterOptions.val(this._data.fieldValue);
            this.$filterOptions.data("key", this._data.fieldKey);
            this.$items.removeClass(styles[7]);
        }
    }

    return new ComboBox(selector, options);
});
flyer.define("page", function(elm, opts) {

    //定义一个分页组件
    // elm 分页组件完成后要装入的容器
    // opts 分页组件时要定制的属性
    function pager(elm, opts) {
        return this.init(elm, opts);
    }

    //可定制的属性集
    pager.DEFAULTS = {

        //调用 API 的数据接口
        ajax: {

            //发送请求地址，默认为NULL
            URL: null,

            //待发送 Key / value 参数
            data: null
        },

        //类型:Array , 要传入的 JSON DATA, 默认为 NULL
        data: [],

        //类型:Int ,当前的页，默认值为 1
        curIndex: 1,

        //类型:Int ,起始页，默认值为 1
        pageIndex: 1,

        //类型:Int ,每页显示的大小
        pageSize: 5,

        //类型:String ,上一页显示的内容
        prevText: "<i class='fa fa-caret-left'></i>",

        //类型:String ,下一页显示的内容
        nextText: "<i class='fa fa-caret-right'></i>",

        //类型:Int ,数据总记录
        totalNum: 0,

        //类型:Int ,显示的长度
        pagerLen: 5,

        //类型:Int ,总页数值
        pageSum: 0,

        //类型:Boolean ,是否重新渲染分页，默认值为false
        isReload: false,

        //类型:Function ,点击翻页之前事件
        fnBeforeClick: function() { return false; },

        //类型:Function ,点击翻页事件
        fnClick: function() { return false; },

        //类型:Function ,点击翻页之后事件
        fnAfterClick: function() { return false; },

    }

    pager.prototype = {

        //加载分页控件
        init: function(elm, opts) {
            this.options = this.getOptions(opts);
            this[0] = elm;
            this.render();
        },

        //渲染分页控件
        render: function() {
            var
            //声明一个自身对象的副本用于当前作用域的调用
                _this = this,

                //声明一个定制属性的副本用于当前的作用域的调用
                opts = _this.options,

                //声明一个定制中的 ajax 属性副本
                ajax = opts.ajax;

            //得到总页值
            opts.pageSum = Math.ceil(opts.totalNum / opts.pageSize);

            //如果总页值小于或等于0 ，则不进行渲染
            if (opts.pageSum <= 0) {

                //清空之前的分页渲染
                $(this[0]).empty();
                return _this;
            }

            //如果页码最大值小于或等于设置的显示长度值
            //如果页码最大值减去设置的显示长度值等于设置的起始页
            //上述条件成立，则启用简单的模版渲染
            if (opts.pageSum <= opts.pagerLen || opts.pageSum - opts.pagerLen == opts.pageIndex) {
                $(this[0]).html(_this.simpleTemplate());
            } else {
                $(this[0]).html(_this.template());
            }

            _this.addEvent();

        },

        //得到配置属性对象
        getOptions: function(opts) {
            return $.extend(true, {}, pager.DEFAULTS, opts);
        },

        //重新渲染
        reload: function() {
            this.render();
        },

        //分页控件模版
        template: function() {
            var tmplHtml = "<div class=\"flyer-pager-wrapper\"><div class=\"flyer-pager-view\"><ul>",
                opts = this.options,

                //得到前后的间隔值
                space = Math.floor((opts.pagerLen - 2) / 2),

                //如果 space 的值为0，则默认为1
                space = space == 0 ? 1 : space,

                //定义起始页码值
                //如果当前页小于设置的页面显示长度，起始值等于页码起始值
                //如果当页码值大于或等于设置的页面显示长度而起始值等于减去前后的间隔值
                i = opts.curIndex < opts.pagerLen ? opts.pageIndex : opts.curIndex - space,

                //定义结束页码值
                //如果当前页小于设置的页面显示长度，起始值等于页码显示的长度值
                //如果当页码值大于或等于设置的页面显示长度而起始值等于减去前后的间隔值
                len = opts.curIndex < opts.pagerLen ? opts.pagerLen : opts.curIndex + space;

            //如果当前页码值加上页面显示长度值大于页码最大值，则调用页码最大值作为结束值
            //同时起始值等于最大值减去页码显示长度值
            //如果当前页码值加上页面显示长度值大于页码最大值，则调用页码最大值作为结束值
            //修改于 2016/07/25
            if (opts.curIndex + space * 2 > opts.pageSum - 1) {
                i = opts.pageSum - opts.pagerLen;
                len = opts.pageSum;
            }

            //加载上一页按扭
            tmplHtml += "<li class=\"prev\">" + opts.prevText + "</li>";

            //判断当前最大页是否大于显示的长度
            if (opts.curIndex >= opts.pagerLen) {

                //加载首页按钮
                tmplHtml += "<li>" + opts.pageIndex + "</li>";

                //加载首页前省略
                tmplHtml += "<li class=\"omit\">...</li>";
            }

            for (i; i <= len; i++) {
                if (opts.curIndex == i) {
                    tmplHtml += "<li class=\"active\">" + i + "</li>";
                } else {
                    tmplHtml += "<li>" + i + "</li>";
                }
            };

            if (opts.curIndex + space * 2 <= opts.pageSum - 1) {

                //加载尾页前省略
                tmplHtml += "<li class=\"omit\">...</li>";

                //加载尾页按钮
                tmplHtml += "<li>" + opts.pageSum + "</li>";
            }

            //加载下一页按钮
            tmplHtml += "<li class=\"next\">" + opts.nextText + "</li>";
            tmplHtml += "</ul></div></div>";

            return tmplHtml;

        },

        //简单的分页渲染
        simpleTemplate: function() {
            var tmplHtml = "<div class=\"flyer-pager-wrapper\"><div class=\"flyer-pager-view\"><ul>",
                opts = this.options,

                //渲染分页按钮的起始值
                i = opts.pageIndex;

            //渲染分页按钮的结束值
            len = opts.pageSum;

            //加载上一页按钮
            tmplHtml += "<li class=\"prev\">" + opts.prevText + "</li>";

            for (i; i <= len; i++) {
                if (opts.curIndex == i) {
                    tmplHtml += "<li class=\"active\">" + i + "</li>";
                } else {
                    tmplHtml += "<li>" + i + "</li>";
                }
            }

            //加载下一页按钮
            tmplHtml += "<li class=\"next\">" + opts.nextText + "</li>";
            tmplHtml += "</ul></div></div>";

            return tmplHtml;
        },

        //给所有分页添加事件
        addEvent: function() {
            var

            //声明一个自身对象的副本用于当前作用域的调用
                _this = this,

                //声明一个定制属性的副本用于当前作用域的调用
                opts = _this.options,

                //得到所有的 li 按钮
                $lis = $(_this[0]).find(".flyer-pager-view").find("li");

            $lis.each(function() {
                var $this = $(this);

                //存在 omit 类样式的不作处理
                if ($this.hasClass("omit")) {
                    return;
                }

                $this.on("click", function() {

                    //获取到当前页
                    if ($this.hasClass("next")) {

                        //如果当前值大于或等于最大的分页总值则不再处理
                        if (opts.curIndex >= opts.pageSum) {
                            return this;
                        }
                        opts.curIndex++;
                    } else if ($this.hasClass("prev")) {

                        //如果当前值小于或等于设的起始值则不再处理
                        if (opts.curIndex <= opts.pageIndex) {
                            return this;
                        }
                        opts.curIndex--;
                    } else {
                        opts.curIndex = parseInt($this.text());
                    }

                    //如果当前页不等于最大分页值，则直接返回不再继续处理
                    if (opts.curIndex <= opts.pageSum) {

                        _this.reload();

                        if ($this.hasClass("next") || $this.hasClass("prev")) {
                            var prevLi = $lis.parent().find(".active");
                            $lis.removeClass("active");
                            prevLi.next().addClass("active");
                        } else {
                            $lis.removeClass("active");
                            $this.addClass("active");
                        }

                        opts.fnClick.call(_this);
                    }
                });
            });
        }
    }

    return new pager(elm, opts);
});
flyer.extend(function(selector, options) {
    //定义一个样式数组集合
    var styles = ["flyer-modal", "flyer-dialog", "flyer-dialog-title", "flyer-dialog-toolbar", "flyer-close", "flyer-dialog-content", "flyer-dialog-footer", "flyer-btn", "flyer-dialog-move"],
        body = document.body,
        doc = document,
        loca = location,
        win = window;

    //定义一个弹框组件
    // selector 分页组件完成后要装入的容器
    // options 分页组件时要定制的属性
    var dialog = function(options) {
        return this.init(options);
    }

    //定制属性
    dialog.DEFAULTS = {

        //类型:String ,要挂载的容器对象。
        container: "body",

        //类型:String ,显示的标题,默认值为"",如果为空则不显示标题部分.
        title: "",

        //类型:String / DOM ,显示的内容，可以是文本型的也可以是DOM的加载 ,默认值为 ""
        content: "",

        //类型:Boolean ,是否可以移动,默认值为true
        isMove: true,

        //类型:Int ,计时器，这里一般用于定时关闭，默认值为 2000
        timer: 4000,

        //类型:String / Array ,弹层的位置定位，可以是文本型，也可以是数据值，数组类型索引值0为X坐标值，索引值1为Y坐标值，多写忽略，也就是只取前两值
        offset: "auto",

        //类型:Boolean ,是否固定显示在可视区域,默认为true
        fixed: true,

        //类型:String ,个性皮肤样式,默认值为""
        skin: "",

        //类型:Array ,宽高,以数组的形式,索引0是宽度，索引1是高度，多写忽略,也就是只取前两个值
        area: [],

        //类型:String ,按钮排列位置,可选值为 l 左对齐，c 居中对齐, r 右对齐(默认值)
        btnAlign: "c",

        //类型:Function ,点击弹框右上角关闭的事件.自身上下文等于整个弹框
        cancel: function() {
            return false;
        },

        //类型：Boolean ,是否显示右上角关闭按钮
        showCancelBtn: true,

        //类型:Boolean ,是否点击遮罩层关闭,默认为false
        modalClose: false,

        //类型: Boolean ,是否是对话框模式
        isModal: false,

        //类型：Boolean ,是否自动关闭,目前只针对消息框有效
        autoClose: true,

        //类型：String ,页面引用地址,用于显示在模态框的内容区域（目前只适用于模态框)，优先级高于 content
        pageUrl: "",

        //类型: String ,动画样式名称，需要自写好动画样式
        anim: "bounceInDown",

        //类型: Boolean 是否输出动画效果
        isOutAnim: true,

        //类型:Array ,按钮组,每个元素是一个对象，每个对象的结构由text类型String,显示文本，skin类型String ,按钮皮肤,click类型Function点击事件组成
        btns: [{
            text: "取消",
            skin: "",
            click: function() {
                this.close();
            }
        }]
    }

    dialog.prototype = {

        //装载组件
        init: function(options) {

            this.index = new Date().getTime();

            //内置一些属性，用于补漏
            this.options = $.extend(true, {}, dialog.DEFAULTS, options);

            //实例好要挂载的容器
            this.$container = $(this.options.container);
            this.template();
            this.bindEvents();
        },

        //添加事件
        bindEvents: function() {
            var _this = this,
                opts = _this.options;

            this.$title.on("mousedown", function(e) {
                _this.mousedown(e);
            });

            $(document).mousemove(function(e) {
                _this.mousemove(e);
            });

            $(document).mouseup(function(e) {
                _this.mouseup(e);
            });

            this.$btnClose.on("click", function(e) {
                opts.cancel.call(this);
                _this.close();
                flyer.stop(e);
            })
            for (var i = 0, optsBtns = opts.btns, btns = _this.$btns, len = this.$btns.length; i < len; i++) {
                (function(elm, evnt) {

                    //修复IE浏览器得不到function.name的bug
                    //$(elm).on(evnt.click.name, function() {
                    $(elm).on("click", function() {
                        evnt.click.call(_this, elm);
                    });
                })(btns[i], optsBtns[i]);
            };
        },

        //加载模板
        template: function() {

            var opts = this.options,
                _this = this;

            this.selector = styles[1] + this.index;
            this.modalSelector = styles[0] + this.selector;

            var arryHtmls = ['<div id="' + this.modalSelector + '" class="' + styles[0] + '"></div>',
                '<div id="' + this.selector + '" class="' + styles[1] + (opts.skin.length > 0 ? (" " + opts.skin) : "") + (opts.anim.length && opts.isOutAnim > 0 ? (" " + opts.anim) : "") + '">',
                '<div class="' + styles[2] + (opts.isMove ? ' flyer-move' : '') + '">',
                '<h4> ',
                opts.title,
                '</h4>',
                '</div>',
                '<div class="' + styles[3] + '">',
                opts.showCancelBtn ? '<i class="' + styles[4] + '">x</i>' : "",
                '</div>',
                '<div class="' + styles[5] + '">',
                opts.content,
                '</div>',
                '<div class="' + styles[6] + '">',
                this.builderBtn(),
                '</div>',
                '</div>'
            ];

            if (!opts.isModal) {
                arryHtmls.splice(0, 1);
            }

            this.$container.append(arryHtmls.join(""));

            this.$el = $("#" + this.selector);
            this.$title = this.$el.find("." + styles[2]);
            this.$content = this.$el.find("." + styles[5]);
            this.$footer = this.$el.find("." + styles[6]);
            this.$toolbar = this.$el.find("." + styles[3]);
            this.$btnClose = this.$el.find("." + styles[4]);
            this.$btns = this.$el.find("." + styles[7]);
            this.$modal = $("#" + this.modalSelector);

            this.handtailor();
            this.setOffset();
        },

        //根据定制属性展现
        handtailor: function() {

            var opts = this.options,
                _this = this;

            if (opts.modalClose && opts.isModal) {
                _this.$modal.on("click", function() {
                    _this.close();
                })
            }

            //如果标题未填写则不显示标题
            if (opts.title.length === 0) {
                this.$title.remove();
            }

            if (opts.area.length > 1) {
                this.$content.css({ "width": opts.area[0], "height": opts.area[1] });
            }

            if (opts.offset instanceof Array && opts.offset.length > 1) {
                this.$el.css({ "top": opts.offset[0], "left": opts.offset[1] });
            }

            if (opts.fixed) {
                this.$el.css("position", "fixed");
            }

            switch (opts.btnAlign) {
                case "c":
                    this.$footer.css("text-align", "center");
                    break;
                case "r":
                    this.$footer.css("text-align", "right");
                    break;
                case "l":
                    this.$footer.css("text-align", "left");
                    break;
            }
        },

        //鼠标移动点击时
        mousedown: function(e) {

            var opts = this.options,
                $title = $("#" + this.selector).find("." + styles[2]);

            this.isMove = typeof opts !== "undefined" && typeof opts.isMove != "undefined" ? opts.isMove : true;

            //配置了可以移动
            if (this.isMove) {
                this.offsetX = e.offsetX;
                this.offsetY = e.offsetY;
                this.$el.data("position", this.$el.css("position"));
                this.$el.css({ "position": "absolute", "top": (parseInt(this.$el.css("top")) + parseInt(this.getScrollTop())) });

                //屏蔽点击鼠标会选中文本内容
                document.body.onselectstart = function() {
                    return false;
                }
            }
        },

        //鼠标移动时
        mousemove: function(e) {
            if (this.isMove) {
                var x = e.clientX - this.offsetX,
                    y = e.clientY - this.offsetY + parseInt(this.getScrollTop());
                this.$el.css({ "top": y, "left": x });
            }
        },

        //鼠标移动松开时
        mouseup: function() {
            if (this.isMove) {
                this.isMove = false;
                this.$el.css({ "position": this.$el.data("position"), "top": (parseInt(this.$el.css("top")) - parseInt(this.getScrollTop())) });

                document.body.onselectstart = function() {
                    return true;
                }
            }
        },

        //生成操作按钮
        builderBtn: function() {
            var opts = this.options,
                btns = opts.btns,
                btnHtmls = [];
            for (var i = 0, len = btns.length; i < len; i++) {
                btnHtmls.push('<button class="' + styles[7] + ' ' + btns[i].skin + '">' + btns[i].text + '</button>');
            }
            return btnHtmls.join("");
        },

        //关闭层
        close: function() {
            this.$el.remove();
            this.$modal.remove();
        },

        //设置弹层的坐标
        setOffset: function() {
            var _this = this;
            switch (_this.options.offset) {
                case "auto":
                    {
                        var xy = this.getOffset(_this.$el.get(0));
                        _this.$el.css({
                            "top": String(xy.y) + "px",
                            "left": String(xy.x) + "px"
                        })
                    }
                    break;
            }
        },

        //得到当前滚动条的高度
        getScrollTop: function() {
            var h = document.documentElement.scrollTop;
            if (h == 0)
                h = document.body.scrollTop;
            return h;
        },

        //获得屏幕的中心坐标
        getOffset: function(self) {
            try {
                var mode = "body";
                var bodyX = $(mode).width();
                var bodyY = window.screen.height;
                var selfX = typeof self !== "undefined" ? self.offsetWidth : 0;
                var selfY = typeof self !== "undefined" ? self.offsetHeight : 0;
                return {
                    x: bodyX / 2 - selfX / 2,
                    y: bodyY / 2 - selfY / 2,
                    w: mode.offsetWidth,
                    h: mode.clientHeight
                };
            } catch (ex) {}
        }
    }

    //制作一些快捷弹框方法
    return {

        //提示框
        alert: function(text, options) {

            //确保参数的正确性
            options = options || {};
            options.content = text;
            options.title = options.title || "提示";
            options.skin = options.skin || "flyer-dialog-alert";
            var o = new dialog(options);
            //o.$el.addClass("flyer-dialog-alert");
            return o;
        },

        //确认提示框
        confirm: function(text, callback, options) {
            options = $.extend({
                btns: [{
                        text: "确定",
                        skin: "flyer-btn-blue",
                        click: function(elm) {
                            this.close();
                            if (typeof callback === "function") {
                                callback.call(this, elm, true);
                            }
                        }
                    },
                    {
                        text: "取消",
                        skin: "",
                        click: function(elm) {
                            this.close();
                            if (typeof callback === "function") {
                                callback.call(this, elm, false);
                            }
                        }
                    }
                ]
            }, options);
            options.content = text;
            options.skin = options.skin || "flyer-dialog-confirm";
            var o = new dialog(options);
            //o.$el.addClass("flyer-dialog-confirm");
            return o;
        },

        //打开一个模态框
        open: function(options) {
            options.skin = options.skin || "flyer-dialog-open";
            var o = new dialog(options);
            //o.$el.addClass("flyer-dialog-open");

            if (o.options.pageUrl.length > 0) {
                o.$content.load(o.options.pageUrl);
                o.setOffset();
            }

            return o;
        },

        // //加载提示
        // loadding: function(options) {
        //     var o = new dialog(options);
        //     o.$title.remove();
        //     o.$footer.remove();
        //     return o;
        // },

        //轻量消息层
        msg: function(text, options) {
            //确保参数的正确性
            options = options || {};
            options.content = text;
            options.showCancelBtn = typeof options.showCancelBtn !== "undefined" ? options.showCancelBtn : false;
            options.autoClose = typeof options.autoClose !== "undefined" ? options.autoClose : true;
            options.anim = options.anim || "bounceIn";
            options.skin = options.skin || "flyer-dialog-msg";
            var o = new dialog(options);
            //o.$el.addClass("flyer-dialog-msg");
            o.$title.remove();
            o.$footer.remove();

            if (options.autoClose) {
                setTimeout(function() {
                    o.close();
                }, o.options.timer);
            }

            return o;
        },

        tip: function(text, options) {

            //确保参数的正确性
            options = options || {};
            options.skin = options.skin || "flyer-dialog-tip";
            options.anim = options.anim || "bounceInDown";
            options.offset = options.offset || [0, 0];
            var o = ui.msg(text, options);

            return o;
        },

        //关闭层
        closeAll: function(type) {
            if (typeof type === "undefined") {
                $("." + styles[1]).remove();
                $("." + styles[0]).remove();
            } else {
                switch (type) {
                    case "alert":
                        $(".flyer-dialog-alert").remove();
                        break;
                    case "confirm":
                        $(".flyer-dialog-confirm").remove();
                        break;
                    case "open":
                        $(".flyer-dialog-open").remove();
                        break;
                    case "msg":
                        $(".flyer-dialog-msg").remove();
                        break;
                    case "tip":
                        $(".flyer-dialog-tip").remove();
                        break;
                }
            }
        }
    }
})
//定义成 flyer 内置模块
flyer.define("edit", function(selector, options) {
    /*
     * 在这里写要实例插件的代码
     */
    var Edit = function(selector, options) {
        return this.init(selector, options);
    }

    Edit.DEFAULTS = {

        //内置的属性
    }

    Edit.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Edit.DEFAULTS, options);

            //方法实例化代码
        }
    }

    return new Edit(selector, options);
});
flyer.define("date", function(selector, options) {

    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Datepicker = function(selector, options) {
        return this.init(selector, options);
    }

    Datepicker.DEFAULTS = {

        //类型 String ,日期选择器的起始时间
        minDate: "1977-01-01",

        //类型 String,日期选择器的结束时间
        maxDate: "2099-12-31",

        //类型 String ,日期选择器的开始时间
        startDate: new Date(),

        //类型 Boolean ,是否显示确认按钮
        isSure: true,

        //类型 Boolean ,是否显示清空按钮
        isClear: true,

        //类型 Boolean ,是否显示今天按钮
        isToday: true,

        //类型 Boolean ,是否显示时分秒选择
        isTime: true,

        //类型 Boolean ,是否显示节日
        festival: true,

        //类型 Strint ,日期显示的格式
        format: "yyyy-mm-dd HH:MM:SS",

        //类型 Boolean ,时间范围是否精确到时分秒
        isPrecision: false,

        //类型 Function ,点击日期时触发的事件
        click: function() {
            return false;
        },

        //类型 Function ,选择好时间后触发的事件
        choose: function() {
            return false;
        }
    }

    Datepicker.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Datepicker.DEFAULTS, options);
            this.selector = this.isJQuery(selector) ? selector : $(selector);
            this._date = this.getYMD(this.selector.val().replace(/-/ig, "/"));
            // this.template();
            this.initEvent();
        },

        //刷新 
        refresh: function() {
            this.template();
            this.events();
            this.isPickerBtnStatus();
        },

        //国际化配置
        i18n: {

        },

        //实例化一个容器模板
        template: function() {
            var ymd = this._date,
                opts = this.options;
            var arryHtmls = [
                '<div class="flyer-date" id="flyer-date-' + this.selector.attr("id") + '">',
                '<div class="flyer-date-header">',
                '<div class="flyer-date-year">',
                '<button class="prev"></button>',
                '<input type="text" class="flyer-year" value="' + ymd.year + '" readonly="true" />',
                '<button class="more"></button>',
                '<button class="next"></button>',
                '<div class="flyer-date-yearMore">',
                '<div class="prev-more"></div>',
                '<div class="years">',
                this.initYears(),
                '</div>',
                '<div class="next-more"></div>',
                '</div>',
                '</div>',
                '<div class="flyer-date-month">',
                '<button class="prev"></button>',
                '<input type="text" class="flyer-month" value="' + ymd.month + '" readonly="true" />',
                '<button class="more"></button>',
                '<button class="next"></button>',
                '<div class="flyer-date-monthMore">',
                this.initMonths(),
                '</div>',
                '</div>',
                '</div>',
                '<div class="flyer-date-body">',
                '<table>',
                '<thead>',
                '<tr>',
                '<th>日</th>',
                '<th>一</th>',
                '<th>二</th>',
                '<th>三</th>',
                '<th>四</th>',
                '<th>五</th>',
                '<th>六</th>',
                '</tr>',
                '</thead>',
                '<tbody>',
                this.initDays(),
                '</tbody>',
                '<tfoot></tfoot>',
                '</table>',
                '</div>',
                '<div class="flyer-date-footer">',
                (opts.isTime ? this.initHMS() : ''),
                '<div class="flyer-date-btn">',
                (opts.isClear ? '<button class="flyer-clear">清空</button>' : ''),
                (opts.isToday ? '<button class="flyer-today">今天</button>' : ''),
                (opts.isSure ? '<button class="flyer-confirm">确认</button>' : ''),
                '</div>',
                '</div>',
                '</div>'
            ];

            //this.selector.html(arryHtmls.join(""));
            if (this.container) {
                arryHtmls.splice(0, 1);
                arryHtmls.splice(arryHtmls.length - 1, 1)
                this.container.html(arryHtmls.join(""));
            } else {
                $("body").append(arryHtmls.join(""));
            }

            this.container = $("#flyer-date-" + this.selector.attr("id"));
            this.$header = this.container.find(".flyer-date-header");
            this.$headerYear = this.$header.find(".flyer-date-year");
            this.$headerMonth = this.$header.find(".flyer-date-month");
            this.$body = this.container.find(".flyer-date-body");
            this.$footer = this.container.find(".flyer-date-footer");
            this.$footerTime = this.$footer.find(".flyer-date-time");
            this.$footerBts = this.$footer.find(".flyer-date-btn");
        },

        //实例化年选择器
        initYears: function(year) {
            var arryHtmls = [],
                years = parseInt(year || this._date.year);
            for (var i = years - 4; i < years + 8; i++) {
                arryHtmls.push("<span class='" + (this.isEffectiveDateForYear(i) ? "" : "flyer-dont-select") + "' month='" + i + "'>" + i + "</span>")
            }

            return arryHtmls.join("");
        },

        //实例化月选择器
        initMonths: function() {
            var arryHtmls = [];
            for (var i = 1; i <= 12; i++) {
                arryHtmls.push("<span class='" + (this.ifEffectiveDateForMonth(i) ? "" : "flyer-dont-select") + "' month='" + i + "'>" + this.justShowText(i) + "</span>")
            }

            return arryHtmls.join("");
        },

        //实例化时分秒选择器
        initHMS: function() {

            var arryHtmls = ['<div class="flyer-date-time">',
                '<label>时间</label>',
                '<span class="hour">' + this._date.hours + '</span>:',
                '<span class="minute">' + this._date.minutes + '</span>:',
                '<span class="second">' + this._date.second + '</span>',
                this.initHours(),
                this.initMinutes(),
                this.initSeconds(),
                '</div>'
            ];

            return arryHtmls.join("");
        },

        //实例化日选择器
        initDays: function() {

            var arryHtmls = [],
                start = this.getStart(),
                end = this.getEnd(),
                ymd = this._date,
                days = this.getMonthDays(ymd.month, ymd.year),
                yes = false,
                length = days + start;

            //按星期分组
            for (var i = 1, j = 1, weekDay = 0; i <= length; i++) {

                if (weekDay == 0) {
                    arryHtmls.push("<tr>");
                }

                if (weekDay == start) {
                    yes = true;
                }

                if (j > days) {
                    yes = false;
                }

                if (yes) {
                    arryHtmls.push("<td class='" + (j == parseInt(this._date.day) ? "flyer-today " : "") + (this.isEffectiveDate(j) ? "" : "flyer-dont-select") + "'>" + j + "</td>");
                    j++;
                } else {
                    arryHtmls.push("<td class='flyer-dont-select'>" + "&nbsp;" + "</td>");
                }
                weekDay++;
                if (weekDay == 7) {
                    arryHtmls.push("</tr>");
                    weekDay = 0;
                }

            }

            return arryHtmls.join("");

        },

        //是否是在有效可选的时间内
        isEffectiveDate: function(day, month, year) {
            day = day || this._date.day;
            month = month || this._date.month;
            year = year || this._date.year;

            var date = new Date(this.precisionFormat(day, month, year));

            var minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate),
                curDate = date;

            return (curDate <= maxDate && curDate >= minDate);
        },

        precisionFormat: function(day, month, year) {
            var hh = this._date.hours,
                mm = this._date.minutes,
                ss = this._date.second;
            return this.options.isPrecision ? (year + "/" + month + "/" + day + " " + hh + ":" + mm + ":" + ss) :
                (year + "/" + month + "/" + day);
        },

        //判断是否在有效期的年份内
        isEffectiveDateForYear: function(year) {
            var minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate);

            return (year <= maxDate.getFullYear() && year >= minDate.getFullYear());
        },

        //判断是否在有效期的月份内
        ifEffectiveDateForMonth: function(month) {
            month = month || this._date.month;
            year = this._date.year;

            var date = new Date(year + "/" + month + "/01"),
                minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate),
                compareMinDate = new Date(minDate.getFullYear() + "/" + (minDate.getMonth() + 1) + "/01"),
                compareMaxDate = new Date(maxDate.getFullYear() + "/" + (maxDate.getMonth() + 1) + "/01");

            return (date <= compareMaxDate && date >= compareMinDate);
        },

        //是否是在有效可选的时间内
        isEffectiveForDate: function(date) {
            var minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate),
                curDate = new Date(date);

            return (curDate <= maxDate && curDate >= minDate);
        },

        //判断面板上的按钮状态
        isPickerBtnStatus: function() {
            if (!this.isEffectiveForDate(new Date())) {
                this.$footerBts.find(".flyer-today").addClass("flyer-dont-select");
            } else {
                this.$footerBts.find(".flyer-today").removeClass("flyer-dont-select");
            }

            if (!this.isEffectiveForDate(this.formatDate())) {
                this.$footerBts.find(".flyer-confirm").addClass("flyer-dont-select");
            } else {
                this.$footerBts.find(".flyer-confirm").removeClass("flyer-dont-select");
            }
        },

        //实例化小时选择器面板
        initHours: function() {
            var _this = this;
            return ['<div class="flyer-date-hours">',
                '<div class="flyer-date-minTool">小时<span>x</span></div>',
                '<div class="flyer-hours">',
                (function() {
                    var arryHtmls = [];
                    for (var i = 1; i < 24; i++) {
                        arryHtmls.push("<span>" + _this.justShowText(i) + "</span>")
                    }
                    return arryHtmls.join("");
                })(),
                '</div>',
                '</div>'
            ].join("");
        },

        //实例化分钟选择器面板
        initMinutes: function() {
            var _this = this;
            return ['<div class="flyer-date-minutes">',
                '<div class="flyer-date-minTool">分钟<span>x</span></div>',
                '<div class="flyer-minutes">',
                (function() {
                    var arryHtmls = [];
                    for (var i = 1; i < 60; i++) {
                        arryHtmls.push("<span>" + _this.justShowText(i) + "</span>")
                    }
                    return arryHtmls.join("");
                })(),
                '</div>',
                '</div>'
            ].join("");
        },

        //实例化秒数的选择器面板
        initSeconds: function() {
            var _this = this;
            return ['<div class="flyer-date-seconds">',
                '<div class="flyer-date-minTool">秒数<span>x</span></div>',
                '<div class="flyer-seconds">',
                (function() {
                    var arryHtmls = [];
                    for (var i = 1; i < 60; i++) {
                        arryHtmls.push("<span>" + _this.justShowText(i) + "</span>")
                    }
                    return arryHtmls.join("");
                })(),
                '</div>',
                '</div>'
            ].join("");
        },

        //判断当天是润年还是平年
        isLeapYear: function(Year) {
            if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
                return (true);
            } else {
                return (false);
            }
        },

        //得到当天的年月日
        getYMD: function(date) {
            var curDate = new Date(date || this.options.startDate);
            return {
                year: curDate.getFullYear(),
                month: this.justShowText(curDate.getMonth() + 1),
                day: this.justShowText(curDate.getDate()),
                hours: this.justShowText(curDate.getHours()),
                minutes: this.justShowText(curDate.getMinutes()),
                second: this.justShowText(curDate.getSeconds())
            }
        },

        //较正日期显示格式
        justShowText: function(time) {
            return time >= 10 ? time : ("0" + time);
        },

        //得到月的天数
        getMonthDays: function(month, year) {
            switch (parseInt(month)) {
                case 2:
                    {
                        return this.isLeapYear(year) ? 29 : 28;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    {
                        return 30;
                    }
                    break;
                default:
                    {
                        return 31;
                    }
            }
        },

        //根据参数时间得到是星期几
        getDay: function(time) {
            return new Date(time).getDay();
        },

        //得到日期面板的起始时间
        getStart: function() {
            var ymd = this._date;
            return this.getDay(ymd.year + "/" + ymd.month + "/01");
        },

        //得到日期面板的结速时间
        getEnd: function() {
            var ymd = this._date;
            return this.getDay(ymd.year + "/" + ymd.month + "/" + this.getMonthDays(ymd.month, ymd.year));
        },

        //格式化日期
        formatDate: function() {
            return this.options.format
                .replace(/yyyy/ig, this._date.year)
                .replace(/mm/, this._date.month)
                .replace(/dd/ig, this._date.day)
                .replace(/hh/ig, this._date.hours)
                .replace(/MM/, this._date.minutes)
                .replace(/ss/ig, this._date.second);
        },

        //关闭日期选择面板
        close: function() {
            this.container.css({
                display: "none"
            });
        },

        //关闭所有日期选择面板
        closeAll: function() {
            $(".flyer-date").hide();
        },

        //设置最大可选日期
        setMaxDate: function(date) {
            this.maxDate = date;
        },

        //设置最小可选日期
        setMinDate: function(date) {
            this.minDate = date;
        },

        targetIsShow: function($target) {
            if ($target.hasClass("flyer-date-show")) {
                $target.removeClass("flyer-date-show");
            } else {
                $target.addClass("flyer-date-show");
            }
        },

        isJQuery: function(obj) {
            return obj instanceof jQuery;
        },

        //实例化挂载事件
        initEvent: function() {
            var _this = this;
            //点击控件框显示日期
            this.selector.on("click", function(e) {
                _this.closeAll();
                _this.refresh();
                var $datepicker = $("#flyer-date-" + _this.selector.attr("id")),
                    offset = _this.selector.offset();
                $datepicker.css({
                    top: (offset.top + _this.selector[0].offsetHeight) + "px",
                    left: offset.left + "px",
                    display: "block"
                });
                flyer.stop(e);
            });
        },

        //添加事件
        events: function() {
            var _this = this;

            //显示年面板
            this.$headerYear.on("click", ".more,.flyer-year", function() {
                var $target = $(this).parent().find(".flyer-date-yearMore");
                _this.targetIsShow($target);
            });

            //点击月面板
            this.$headerMonth.on("click", ".more,.flyer-month", function() {
                var $target = $(this).parent().find(".flyer-date-monthMore");
                _this.targetIsShow($target);
            });

            //点击左右年事件
            this.$headerYear.on("click", ".next,.prev", function() {
                var isNext = $(this).hasClass("next");
                _this._date.year = isNext ? (parseInt(_this._date.year) + 1) : (parseInt(_this._date.year) - 1);
                _this.refresh();
            });

            //点击左右月事件
            this.$headerMonth.on("click", ".next,.prev", function() {
                var isNext = $(this).hasClass("next");
                if (isNext) {
                    if (parseInt(_this._date.month) < 12) {
                        _this._date.month = _this.justShowText((parseInt(_this._date.month) + 1));
                    }
                } else {
                    if (parseInt(_this._date.month) > 1) {
                        _this._date.month = _this.justShowText((parseInt(_this._date.month) - 1))
                    }
                }
                _this.refresh();
            });

            //选中年点击后事件
            this.$headerMonth.on("click", ".flyer-date-monthMore span:not([class='flyer-dont-select'])", function() {
                _this._date.month = $(this).text();
                _this.refresh();
            })

            //自定义年点击后事件
            this.$headerYear.on("click", ".flyer-date-yearMore span:not([class='flyer-dont-select'])", function() {
                _this._date.year = $(this).text();
                _this.refresh();
            })

            //点击年面板上下刷新事件
            this.$headerYear.on("click", ".prev-more,.next-more", function() {
                var isNext = $(this).hasClass("next-more");
                if (isNext) {
                    _this.$headerYear.find(".years").html((_this.initYears(_this.$headerYear.find(".flyer-date-yearMore span").last(0).text())));
                } else {
                    _this.$headerYear.find(".years").html((_this.initYears(_this.$headerYear.find(".flyer-date-yearMore span").eq(0).text())));
                }
            })

            //点击日期天数的事件
            this.$body.find("td:not([class='flyer-dont-select'])").off("click");
            this.$body.on("click", "td:not([class='flyer-dont-select'])", function() {
                if (!$(this).hasClass("flyer-dont-select")) {
                    _this._date.day = _this.justShowText($(this).text());
                    _this.options.click.call(this, _this.formatDate(), _this._date);
                    _this.selector.val(_this.formatDate());
                    _this.options.choose.call(this, _this.formatDate(), _this._date);
                    _this.close();
                }
            });

            //给小时关闭按钮绑定事件
            this.$footerTime.on("click", ".hour,.flyer-date-hours .flyer-date-minTool span", function() {
                var $target = _this.$footerTime.find(".flyer-date-hours");
                _this.targetIsShow($target);
            });

            //给小时绑定选中事件
            this.$footerTime.on("click", ".flyer-date-hours .flyer-hours span", function() {

                var $target = _this.$footerTime.find(".flyer-date-hours");
                _this.targetIsShow($target);
                _this.$footerTime.find(".hour").html($(this).text());
                _this._date.hours = $(this).text();
                _this.refresh();
                //_this.isPickerBtnStatus();
            });

            //给秒数关闭按钮绑定事件
            this.$footerTime.on("click", ".minute,.flyer-date-minutes .flyer-date-minTool span", function() {
                var $target = _this.$footerTime.find(".flyer-date-minutes");
                _this.targetIsShow($target);

            });

            //给分钟绑定选中事件
            this.$footerTime.on("click", ".flyer-date-minutes .flyer-minutes span", function() {
                var $target = _this.$footerTime.find(".flyer-date-minutes");
                _this.targetIsShow($target);
                _this.$footerTime.find(".minute").html($(this).text());
                _this._date.minutes = $(this).text();
                _this.refresh();
            });

            //给秒数关闭按钮绑定事件
            this.$footerTime.on("click", ".second,.flyer-date-seconds .flyer-date-minTool span", function() {
                var $target = _this.$footerTime.find(".flyer-date-seconds");
                _this.targetIsShow($target);
            });

            //给秒数绑定选中事件
            this.$footerTime.on("click", ".flyer-date-seconds .flyer-seconds span", function() {
                var $target = _this.$footerTime.find(".flyer-date-seconds");
                _this.targetIsShow($target);
                _this.$footerTime.find(".second").html($(this).text());
                _this._date.second = $(this).text();
                _this.refresh();
            });

            //清空
            this.$footerBts.on("click", ".flyer-clear", function() {
                _this.selector.val("");
                _this._date = _this.getYMD();
                _this.close();
            });

            //今天
            this.$footerBts.on("click", ".flyer-today", function() {
                _this._date = _this.getYMD(new Date());
                _this.options.click.call(this, _this.formatDate(), _this._date);
                _this.selector.val(_this.formatDate());
                _this.options.choose.call(this, _this.formatDate(), _this._date);
                _this.close();
            });

            //确认
            this.$footerBts.on("click", ".flyer-confirm", function() {
                _this.options.click.call(this, _this.formatDate(), _this._date);
                _this.selector.val(_this.formatDate());
                _this.options.choose.call(this, _this.formatDate(), _this._date);
                _this.close();
            });

            $(this.container).on("click", function(e) {
                flyer.stop(e);
            })

            $(document).on("click", function(e) {
                //$("." + styles[4]).removeClass(styles[8]);
                _this.close();
            });
        }
    }

    return new Datepicker(selector, options);
});

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
flyer.define("searches", function(selector, options) {

    function Searches(selector, options) {
        return this.init(selector, options);
    }

    //定义 检索框 的样式集合
    var styles = ["flyer-searches", "keywords", "flyer-seraches-input", "fa fa-close", "flyer-combobox-items", "hover"];

    //默认的定制属性集合
    Searches.DEFAULT = {

        //类型:Boolean ,是否允许多个关键词查询，默认是允许的
        isMulti: true,

        //类型:String ,请求数据的地址
        url: "",

        //类型:String ,对应的 Search Name名字
        searchName: "",

        //类型:String ,对应的数据主键值
        fieldValue: "",

        //类型:String ,显示的文本值
        fieldName: "",

        //类型:Array ,开放请求数据的方法
        requestData: [],

        //类型:Int ,事件响应的间隔时间,默认1秒
        spaceTime: 1000,

        //类型:String ,分隔符,默认;
        separtor: ";",

        //类型:Boolean ,是否去重
        distinck: true,

        //类型:String ,数据为空时的提示语句
        emptyMsg: "未检索到相关的数据..",

        //类型:Function ,是否去重相关的提示方法
        fnDistinckTips: function(key, that) {
            flyer.closeAll("msg");
            flyer.msg("你已经选择了[ " + $(that).text() + " ]");
        },

        //类型:Function ,开放一个数据结构处理的方法
        fnDataProcessing: function() {
            this._data = this._data.rows;
        },

        //类型:Function ,选中之后的方法
        fnSelected: function() {
            return false;
        }

    }

    Searches.prototype = {

        //加载 Searches 组件的入口
        init: function(elm, options) {

            //拼装 Searches 定制属性
            this.options = $.extend(true, {}, Searches.DEFAULT, options);

            this[0] = elm;

            $(this[0]).html(this.template());

            this.events();
        },

        //tab 的html模版
        template: function() {
            var tmplHtml = ['<div class="flyer-searches">',
                '<div class="keywords"></div>',
                '<input type="text" data-selected="" class="flyer-seraches-input" />',
                '<div class="flyer-combobox-items">',
                '<ul>',
                '</ul>',
                '</div>',
                '</div>'
            ];
            return tmplHtml.join("");
        },

        //获取数据源
        requestData: function(keyword) {

            var _this = this,
                opts = _this.options,
                data = {};

            //如果用户自定义了该方法，则优先运行自定义的方法
            if (typeof opts.requestData === "function") {
                opts.requestData.call(this, keyword);
            } else {
                data[opts.searchName] = keyword;
                $.ajax({
                    url: opts.url,
                    type: "get",
                    data: data,
                    success: function(data) {
                        _this._data = data;
                        opts.fnDataProcessing.call(_this, data);
                        _this.render(data);
                        _this.eventSelected();
                    }
                });
            }
        },

        //事件集
        events: function() {
            var
                _this = this,
                opts = _this.options,
                timer = null;
            _this.keyIndex = -1;
            _this.$input = $(_this[0]).find("." + styles[2]);
            _this.$keywords = $(_this[0]).find("." + styles[1]);
            _this.$items = $(_this[0]).find("." + styles[4]).find("ul");


            //文本框输入响应事件    
            _this.$input.on("keyup", function(e) {

                if (timer) {
                    clearInterval(timer);
                }

                var keyword = $(this).val().trim();;

                switch (e.keyCode) {
                    case 13:
                        {
                            var itemsStatus = _this.$items.parent().css("display");
                            if (keyword.length > 0 && itemsStatus == "none") {
                                _this.requestData(keyword);
                            } else {
                                _this.$items.find("." + styles[5]).click();
                                _this.$items.find("li").removeClass(styles[5])
                            }
                        }
                        return;
                    case 8:
                        {
                            _this.$items.parent().hide();
                            if (this.value.length == 0) {
                                if (this.getAttribute("del") == "del") {
                                    setTimeout(function() { _this.$keywords.find("span>i").last().click(); }, 100);
                                } else {
                                    this.setAttribute("del", "del");
                                    _this.$keywords.find("span").last().css("border", "1px solid #F7B824");
                                }
                            } else {
                                return false;
                            }
                        }
                        return;
                    case 38:
                        {
                            _this.keyUp();
                        }
                        return;
                    case 40:
                        {
                            _this.keyDown();
                        }
                        return;
                    default:
                        {
                            _this.$items.parent().hide();
                            this.setAttribute("del", null);
                            _this.$keywords.find("span").last().css("border", "inherit");
                        }
                        break;
                }

                timer = setTimeout(function() {
                    if (keyword.length > 0) {
                        _this.requestData(keyword);
                    }
                }, opts.spaceTime);

            });

            $(document).on("click", function(e) {
                _this.$items.parent().hide();
                flyer.stop(e);
            });

        },

        //检索出来的下拉数据选中事件
        eventSelected: function() {
            var _this = this,
                opts = _this.options;
            _this.$items.find("li").on("click", function() {

                //得到当前选中的 Key 值 
                var key = $(this).data("key");

                //如果设置了去重功能
                if (opts.distinck) {
                    if (_this.hasValue(key)) {
                        opts.fnDistinckTips.call(_this, key, this);
                        return false;
                    }
                }

                //插入一个标签
                _this.$keywords.append(_this.insertSpan.call(this, opts));

                //隐藏下拉框
                _this.$items.parent().hide();

                //获得选中前的数据
                var selectedValue = _this.$input.data("selected") || "";

                //记录最新选中的数据 
                _this.$input.data("selected", (selectedValue + key + ";"));

                //清空输入框
                _this.$input.val("");

                //添加标签事件
                _this.eventDeleteSpan();

                //开放一个选后的事件给用户
                opts.fnSelected.call(_this, this);

                //修正输入焦点位置
                setTimeout(function() { _this.$input.css("padding-left", _this.$keywords.get(0).offsetWidth + 10) }, 10);

                //初始化上下键的索引值
                _this.keyIndex = 0;
            })

        },

        //插入一个选中的标签
        insertSpan: function(opts) {
            var $this = $(this),
                html = "<span data-key='" + $this.data("key") + "'>" + $(this).text() + opts.separtor + "<i class='" + styles[3] + "'></i></span>";
            return html;
        },

        //删除一件选中的标签事件
        eventDeleteSpan: function() {
            var
                _this = this,
                $input = this.$input,
                opts = this.options;
            _this.$keywords.find("span>i").on("click", function() {
                var selectedValue = _this.$input.data("selected") || "";
                $input.data("selected", selectedValue.replace($(this).parent().data("key") + opts.separtor, ""));
                $(this).parent().remove();
                _this.$input.css("padding-left", _this.$keywords.get(0).offsetWidth);

                $input.attr("del", null);
                //开放一个选后的事件给用户
                opts.fnSelected.call(_this, this);
            });
        },

        //渲染数据成下拉表
        render: function() {
            var data = this._data;
            var arryHtmls = [],
                opts = this.options;

            //如果数据为空，则提示
            if (!data || data.length == 0) {
                arryHtmls.push("<li><div>" + opts.emptyMsg + "</div></li>");
            } else {
                for (var i = 0, len = data.length; i < len; i++) {
                    arryHtmls.push("<li data-key='" + data[i][opts.fieldValue] + "'><div>" + data[i][opts.fieldName] + "</div></li>");
                }
            }

            this.$items.html(arryHtmls.join(""));
            this.$items.parent().show();
        },

        //键盘向下选中
        keyUp: function() {
            //向上
            var
                _this = this,
                len = _this.$items.find("li").length;
            _this.$items.find("li").removeClass(styles[5]);

            if (_this.keyIndex == -1) {
                _this.keyIndex = len;
            }
            _this.keyIndex--;
            _this.$items.find("li").eq(_this.keyIndex).addClass(styles[5]);

        },

        //键盘向上选中
        keyDown: function() {
            //向下
            var
                _this = this,
                len = _this.$items.find("li").length;
            _this.$items.find("li").removeClass(styles[5]);
            _this.keyIndex++;
            if (_this.keyIndex == len) {
                _this.keyIndex = 0;
            }
            _this.$items.find("li").eq(_this.keyIndex).addClass(styles[5]);

        },

        //去掉重复选中
        hasValue: function(key) {
            var strKeys = this.$input.data("selected");
            var regs = new RegExp(key, "ig");
            return regs.test(strKeys);
        },

        //获取选中的值
        getSelectedData: function() {
            return {
                fieldValue: this.$input.data("selected"),
                fieldName: this.$keywords.find("span").text()
            }
        }
    }
    return new Searches(selector, options);
});
flyer.define("tab", function(selector, options) {

    //定义一个Tab 页签组件
    // selector 分页组件完成后要装入的容器
    // options 分页组件时要定制的属性
    function Tab(selector, options) {
        return this.init(selector, options);
    }
    //定义 Tab 页签的样式集合
    var styles = ["flyer-tab", "flyer-tab-title", "flyer-tab-content", "flyer-tab-active", "flyer-tab-item", "active"];

    //默认的定制属性集合
    Tab.DEFAULT = {

        //类型: Array ,tab 页签的标题
        tabs: [{

                //类型: String ,单个页签的标题
                title: "tab1",

                //类型: String ,单个页签对应的内容
                content: "",

                //类型: String ,单个页签对应的请求路径
                url: "",

                //类型: Boolean ,是否缓存
                cache: false
            },
            {
                //类型: String ,单个页签的标题
                title: "tab2",

                //类型: String ,单个页签对应的内容
                content: "",

                //类型: String ,单个页签对应的请求路径
                url: "",

                //类型: Boolean ,是否缓存
                cache: false
            }
        ],

        //是否缓存,这里的是否缓存区别于单个，该缓存设置是所有的页签都缓存
        //单个页签的缓存优先级高于全局的缓存设置
        //cache: false,

        //类型: Int ,默认选中的页签
        defaultIndex: 0,

        //类型:String ,个性皮肤样式,默认值为"flyer-tab-default",内置了三种风格:["flyer-tab-default","flyer-tab-simple","flyer-tab-card""]
        skin: "flyer-tab-default",

        //类型: Function ,点击之前事件
        beforeClick: function() {
            return false;
        },

        //类型: Function ,点击事件
        click: function() {
            return false;
        },

        //类型: Function ,点击之后事件
        afetrClick: function() {
            return false;
        },

        //类型: Function ,构建之前
        beforeCreated: function() {
            return false;
        },

        //类型: Function ,构建之后
        afterCreated: function() {
            return false;
        }
    }

    Tab.prototype = {

        //加载 Tab 页签组件的入口
        init: function(elm, options) {

            //拼装 Tab 页签定制属性
            this.options = $.extend(true, {}, Tab.DEFAULT, options);

            this[0] = elm;

            var opts = this.options,
                beforeCreated = opts.beforeCreated,
                afterCreaqted = opts.afterCreated,
                strHtml = "";

            beforeCreated.call(this, opts);

            this.hasTag();

            if (!this.haveTag) {
                $(this[0]).html(this.template());
            }

            this.events();

            afterCreaqted.call(this, opts);

            this.$tabs.eq(opts.defaultIndex).click();
        },

        //判断是否需要自生成 TAB 标签 
        hasTag: function() {
            if ($(this[0]).find("." + styles[0]).length > 0) {
                this.haveTag = true;
            } else {
                this.haveTag = false;
            }
        },

        //tab 的html模版
        template: function() {
            var
                opts = this.options,
                arryTitleHtml = [],
                arryContentHtml = [],
                tmplHtml = ['<div class="' + styles[0] + (opts.skin.length > 0 ? (" " + opts.skin) : "") + '">',
                    '<div class="' + styles[1] + '">',
                    '<ul>',
                    '</ul>',
                    '</div>',
                    '<div class="' + styles[2] + '">',
                    '</div>',
                    '</div>'
                ],
                strHtml = "";
            for (var i = 0, len = opts.tabs.length, tabs = opts.tabs; i < len; i++) {
                arryTitleHtml.push("<li data-index='" + i + "'>" + tabs[i].title + "</li>");
                arryContentHtml.push("<div class='" + styles[4] + "'></div>");

            }
            tmplHtml.splice(3, 0, arryTitleHtml.join(""));
            tmplHtml.splice(7, 0, arryContentHtml.join(""));
            strHtml = tmplHtml.join("");;
            return strHtml;
        },

        //事件集
        events: function() {
            var
                _this = this,
                _opts = this.options;
            _this.$title = $(this[0]).find("." + styles[1]);
            _this.$content = $(this[0]).find("." + styles[2]);
            _this.$tabs = this.$title.find("li");
            _this.$tabs.on("click", function() {
                var
                    $this = $(this),
                    index = $(this).data("index");
                _this.$tabs.removeClass(styles[3]);
                $this.addClass(styles[3]);
                if (!_this.haveTag) {
                    _this.fullContent(index);
                } else {
                    _this.showContent(index);
                }

                _opts.click.call(_this, this);
            });
        },

        //填充内容
        fullContent: function(index) {
            var tabData = this.options.tabs[index],
                $content = this.$content,
                $items = this.$content.find("." + styles[4]),
                $item = $items.eq(index),
                text = "";

            if ($item.length == 0) {
                return false;
            }

            text = $item.text();

            $items.removeClass(styles[5]);
            if (tabData.content) {
                if (!tabData.cache || text.length == 0) {
                    $item.html(tabData.content);
                }
            } else if (tabData.url) {
                if (!tabData.cache || text.length == 0) {
                    $item.load(tabData.url);
                }
            }
            $item.addClass(styles[5]);
        },

        //显示用户布局的内容
        showContent: function(index) {
            var $items = this.$content.find("." + styles[4]),
                $item = $items.eq(index);
            if ($item.length == 0) {
                return false;
            }
            $items.removeClass(styles[5]);
            $item.addClass(styles[5]);
        }
    }
    return new Tab(selector, options);
});
flyer.define("table", function(selector, options) {

    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Table = function(selector, options) {
        return this.init(selector, options);
    }

    Table.DEFAULTS = {

        //配置列属性
        columns: [],

        //配置静态数据
        data: [],

        //是否可以拖动列宽度
        resizer: false
    }

    //内置列的属性
    Table.COLUMN_DEFAULTS = {
        radio: false,
        checkbox: false,
        checkboxEnabled: true,
        field: undefined,
        title: undefined,
        titleTooltip: undefined,
        styles: {},
        className: undefined,
        sortable: false,
        order: 'asc', // asc, desc
        visible: true,
        formatter: undefined,
        sorter: undefined,
        sortName: undefined
    }

    Table.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Table.DEFAULTS, options);

            this.selector = selector;

            //方法实例化代码
            this.template();
            this.initHeaderThemes();
            this.initEvents();
            if (this.options.resizer) {
                this.initRgrips();
            }

        },

        //加载表格模版
        template: function() {

            var arryHtml = [
                '<div class="flyer-table-wrapper"><table class="flyer-table">',
                '<thead>',
                '<tr>',
                this.initHeader(),
                '</tr>',
                '</thead>',
                '<tbody>',
                this.initBody(),
                '</tbody>',
                '<tfoot>',
                '</tfoot>',
                '</table></div>'
            ];
            this.selector.html(arryHtml.join(""));

            this.$header = this.selector.find("thead");
            this.$body = this.selector.find("tbody");
        },

        //配置样式属性
        initHeaderThemes: function() {
            var _this = this,
                opts = _this.options,
                flagColumns = _this._flagColumns;
            this.$header.find("th").each(function() {
                var $this = $(this),
                    dataIndex = $this.data("index");
                $this.css(flagColumns[dataIndex].styles);
                $this.addClass(flagColumns[dataIndex].className);
            });
        },

        //加载表头
        initHeader: function() {
            var arryHtml = [];
            this._flagColumns = {};

            for (var i = 0, columns = this.options.columns, len = columns.length; i < len; i++) {
                this.options.columns[i] = $.extend(true, {}, Table.COLUMN_DEFAULTS, columns[i]);
                var column = columns[i];
                column._index = i;

                this._flagColumns[i] = column;

                if (column.visible) {
                    if (column.checkbox) {
                        arryHtml.push("<th data-index=" + column._index + "><input name='" + column.field + "' type='checkbox'/></th>");
                    } else if (column.radio) {
                        arryHtml.push("<th data-index=" + column._index + "><input name='" + column.field + "' type='radio'/></th>");
                    } else {
                        arryHtml.push("<th data-index=" + column._index + ">" + column.title + "</th>");
                    }
                }
            }

            return arryHtml.join("");
        },

        //加载表内容
        initBody: function() {
            var arryHtml = [];
            for (var j = 0, data = this.options.data, jLen = data.length; j < jLen; j++) {
                var arryTd = [];
                arryHtml.push("<tr>");
                for (var i = 0, columns = this.options.columns, len = columns.length; i < len; i++) {
                    var column = columns[i];
                    if (column.visible) {
                        if (column.checkbox) {
                            arryHtml.push("<td data-index=" + column._index + ">" + (typeof column.formatter === "function" ? column.formatter(data[j], data[j][column.field]) : ("<input name='" + column.field + "' type='checkbox'/>")) + "</td>");
                        } else if (column.radio) {
                            arryHtml.push("<td data-index=" + column._index + ">" + (typeof column.formatter === "function" ? column.formatter(data[j], data[j][column.field]) : ("<input name='" + column.field + "' type='radio'/>")) + "</td>");
                        } else {
                            arryTd.push("<td>" + (typeof column.formatter === "function" ? column.formatter(data[j], data[j][column.field]) : data[j][column.field]) + "</td>");
                        }
                    }
                }
                arryHtml.push(arryTd.join(""));
                arryHtml.push("</tr>");
            }

            return arryHtml.join("");
        },

        //加载表页脚
        initFooter: function() {

        },

        //加载事件
        initEvents: function() {
            this.checkAll();
        },

        //设置选中全部
        checkAll: function() {
            var _this = this;
            _this.$header.find("input[type='checkbox']").on("click", function() {
                var ckHead = this;
                _this.selector.find("input[name='" + ckHead.name + "']").each(function() {
                    this.checked = ckHead.checked;
                })
            });
        },

        //列拖动
        columnResizer: function(e) {
            var _this = this,
                $resizerItems = $(".flyer-rgrips").find(".flyer-rgrips-resizer"),
                $table = this.selector.find(".flyer-table"),
                tableLeft = $table.offset().left,
                tableWidth = $table.width();
            _this.ismove = false;

            $resizerItems.bind("mousedown", function(e) {
                document.body.onselectstart = function() {
                    return false;
                }
                _this.ismove = true;
                _this.rgripElm = $(this);
                _this.rgripElmLeft = parseInt(_this.rgripElm.css("left") || 0);
                _this.rgripNext = _this.rgripElm.next();
                _this.rgripPrev = _this.rgripElm.prev();
                _this.rgripNextLeft = parseInt(_this.rgripNext.css("left") || 0);
                _this.rgripPrevLeft = parseInt(_this.rgripPrev.css("left") || 0);
                _this.rgripTh = _this.$header.find("th[data-index='" + _this.rgripElm.data("index") + "']");
                _this.rgripNextTh = _this.rgripTh.next();
                _this.rgripPrevTh = _this.rgripTh.prev();

                _this.rgripElm.addClass("flyer-rgrips-drag");
                $table.addClass("user-select-none");
            });
            $(document).mousemove(function(e) {

                if (_this.ismove) {
                    var left = (_this.rgripElm.get(0).offsetWidth + e.clientX) - tableLeft;
                    //console.log(left);
                    //console.log(_this.rgripElm.offset().left + "," + _this.rgripElm.get(0).offsetWidth + "," + e.clientX + "," + tableLeft);
                    if (left < 0) {
                        left = 0;
                    } else if (left > tableWidth) {
                        left = tableWidth;
                    } else if (left > _this.rgripNextLeft) {
                        left = _this.rgripNextLeft;
                    } else if (left < _this.rgripPrevLeft) {
                        left = _this.rgripPrevLeft;
                    }
                    _this.rgripElm.css("left", left);

                }
            });
            $(document).mouseup(function(e) {
                document.body.onselectstart = function() {
                    return true;
                }

                if (_this.ismove) {
                    _this.ismove = false;
                    _this.dragWidth = _this.rgripElmLeft - parseInt(_this.rgripElm.css("left"));
                    _this.dragValue = parseInt(String(_this.dragWidth).replace("-", ""));
                    //_this.rgripTh.css("width", parseInt(_this.rgripTh.css("width")) + _this.dragValue);
                    if (_this.dragWidth < 0) {
                        _this.rgripNext.css("left", (_this.rgripNextLeft - _this.dragValue));
                        _this.rgripTh.css("width", parseInt(_this.rgripTh.css("width")) + _this.dragValue);
                        //_this.rgripNextTh.css("width", parseInt(_this.rgripNextTh.css("width")) + _this.dragValue);
                    } else if (_this.dragWidth > 0) {
                        _this.rgripPrev.css("left", (_this.rgripPrev - _this.dragValue));
                        //_this.rgripPrevTh.css("width", parseInt(_this.rgripPrevTh.css("width")) - _this.dragValue);
                        _this.rgripTh.css("width", parseInt(_this.rgripTh.css("width")) - _this.dragValue);
                    }

                    _this.rgripElm.removeClass("flyer-rgrips-drag");
                    $table.removeClass("user-select-none");
                    //_this._flagColumns[_this.rgripElm.data("index")].styles["width"] =
                }

            });
        },

        //构建可以拖动列宽的结构
        initRgrips: function() {
            var arryRgrips = [],
                $table = this.selector.find(".flyer-table"),
                tableWidth = $table.width(),
                tableHeight = $table.height(),
                tableLeft = $table.offset().left;

            arryRgrips.push("<div class='flyer-rgrips' style='width:" + tableWidth + "px;'>");
            //先将表格的列宽设置好
            this.$header.find("th").each(function() {

                var $this = $(this),
                    left = ($this.offset().left + $this.get(0).offsetWidth) - tableLeft;
                $this.css("width", $this.width());
                arryRgrips.push("<div style='left:" + left + "px;height:" + tableHeight + "px' data-index='" + $this.data("index") + "' class='flyer-rgrips-resizer'></div>")
            });
            $table.css("width", tableWidth);

            arryRgrips.push("</div>");
            $table.before(arryRgrips.join(""));
            this.columnResizer();
        }
    }
    return new Table(selector, options);
});
//定义成 flyer 内置模块
flyer.define("tree", function(selector, options) {

    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Tree = function(selector, options) {
            return this.init(selector, options);
        },
        styles = ["flyer-tree", "flyer-tree-root", "fa-caret-right", "fa-caret-down", "fa-folder-o", "fa-folder-open-o", "flyer-tree-show", "flyer-tree-node"];

    Tree.DEFAULTS = {

        //类型: Array ,用于装载树形菜单的数据
        data: [],

        //类型: String ,数据源的请求路径,优先级高于data
        url: "",

        //类型: String ,用于树形菜单的风格定义
        skin: "",

        //类型: Function ,用于装载树形菜单的数据
        click: function() {
            return false;
        }
    }

    //树形菜单组件节点JSON数据基本格式
    Tree.DEFAULTS_DATA = {

        //类型: String ,用于树形菜单节点显示的文本
        name: "Tree",

        //类型: Boolean ,用于树形菜单节点显示的文本
        spread: false,

        //类型: String ,用于树形菜单节点要跳转的链接地址
        href: "",

        //类型: String ,用于树形菜单节点跳转地址的方式,等同于A标签的target设置
        target: "_blank",

        //类型: Array ,同data节点，可无限延伸
        childrens: []
    }

    Tree.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Tree.DEFAULTS, options);
            this.selector = selector;
            this.template();
            this.events();
            this.__index = "";
        },

        //模板
        template: function() {
            var arryHtmls = ['<div class="' + styles[0] + '">',
                this.recursion(this.options.data, true, ""),
                '</div>'
            ];
            this.selector.append(arryHtmls.join(""));
        },

        recursion: function(nodes, spread, flag) {
            var arryHtmls = ['<ul class="flyer-tree-node ' + (spread ? "flyer-tree-show" : "") + '">'];
            for (var i = 0, _index, len = nodes.length; i < len; i++) {
                _index = String(flag).length > 0 ? (flag + "." + i) : i;
                nodes[i] = $.extend({}, true, Tree.DEFAULTS_DATA, nodes[i]);
                arryHtmls.push("<li>");
                arryHtmls.push('<i class="fa ' + (nodes[i].childrens.length > 0 ? (nodes[i].spread ? "fa-caret-down" : "fa-caret-right") : "") + '"></i>');
                arryHtmls.push('<i class="fa ' + (nodes[i].childrens.length > 0 ? (nodes[i].spread ? "fa-folder-open-o" : "fa-folder-o") : "fa-file-o") + '"></i>');
                arryHtmls.push('<a _index="' + _index + '"' + (nodes[i].href.length > 0 ? ('href="' + nodes[i].href + '" target="' + nodes[i].target + '"') : "") + '>' + nodes[i].name + '</a>');
                if (nodes[i].childrens.length > 0) {
                    arryHtmls.push(this.recursion(nodes[i].childrens, nodes[i].spread, _index));
                }
                arryHtmls.push("</li>");
            }
            arryHtmls.push("</ul>");
            return arryHtmls.join('');
        },

        //修改树形图表状态
        changeIcon: function(target, open) {

            var $parent = $(target).parent(),
                $icons = $parent.find("i");

            if (open) {
                $icons.eq(0).removeClass(styles[2]).addClass(styles[3]);
                $icons.eq(1).removeClass(styles[4]).addClass(styles[5]);
            } else {
                $icons.eq(0).removeClass(styles[3]).addClass(styles[2]);
                $icons.eq(1).removeClass(styles[5]).addClass(styles[4]);
            }

        },

        //加载事件
        events: function() {
            var _this = this,
                classs = [".flyer-tree", ".fa-caret-right", ".fa-folder-o", ".fa-folder-open-o", ".fa-caret-down"];
            this.selector.find(classs[0]).off("click", classs.splice(1, 4));
            this.selector.find(classs[0]).on("click", classs.splice(1, 4), function(e) {

                var $node = $(e.target).nextAll("." + styles[7]);

                if ($node.length > 0) {
                    if ($node.hasClass(styles[6])) {
                        $node.removeClass(styles[6]);
                        _this.changeIcon(e.target, false);
                    } else {
                        $node.addClass(styles[6]);
                        _this.changeIcon(e.target, true);
                    }
                }
                flyer.stop(e);
            });
            this.selector.find(classs[0]).off("click", "a");
            this.selector.find(classs[0]).on("click", "a", function(e) {
                _this.options.click.call(this, e.target, _this.getData(e.target.getAttribute("_index")));
            });
        },

        //通过形成的拓扑数据结构查找JSON对象里的值
        getData: function(tpIndex) {
            var arryIndex = String(tpIndex).split("."),
                item = this.options.data[arryIndex[0]];
            for (var i = 1, len = arryIndex.length; i < len; i++) {
                item = item.childrens[arryIndex[i]]
            }

            return item;
        }
    }

    return new Tree(selector, options);
});
flyer.define("upload", function(selector, options) {

    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Upload = function(selector, options) {
        return this.init(selector, options);
    }

    Upload.DEFAULTS = {

        //类型: String ,指定元素的选择器，默认直接查找class为layui-upload-file的元素
        elem: "flyer-upload-file",

        //类型: String ,按钮显示的文本
        text: "",

        //类型: String ,上传文件的地址
        url: "",

        //类型: String ,设置http类型，如：post、get。默认post。
        method: "post",

        //类型: String ,设定上传的文件类型。
        enctype: "multipart/form-data",

        //类型: String ,自定义可支持的文件扩展名
        ext: "",

        //类型: String ,上传控件的名称
        name: "avatar",

        //类型: Function ,上传成功后的事件
        success: function() {
            return false;
        }

    }

    Upload.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Upload.DEFAULTS, options);
            this.selector = selector;
            this.template();
            this.events();
            this.buildFrame();
            this.checkInput();
        },

        //加载模板
        template: function() {
            var
                _this = this,
                opts = _this.options,
                arryHtml = ['<div class="flyer-upload">',
                    '<form action="' + opts.url + '" enctype="' + opts.enctype + '" target="flyer_upload_iframe" method="' + opts.method + '">',
                    '</form>',
                    '<button class="flyer-btn flyer-btn-default">',
                    '<i class="fa fa-plus-square-o"></i>',
                    '<span>' + this.options.text + '</span>',
                    '</button>',
                    '</div>'
                ];

            this.selector.wrap(arryHtml.join(""));
            this.$form = this.selector.parent();
            this.$upload = this.$form.parent();
            this.$submit = this.$upload.find(".flyer-btn");
            this.buildFrame();
        },

        //生成一个iframe作用于无刷新提交
        buildFrame: function() {
            if ($("#flyer_upload_iframe").length == 0) {
                $("body").append('<iframe id="flyer_upload_iframe"  name="flyer_upload_iframe"></iframe>');
            }
        },

        //检测input[type='file']控件的完整性
        checkInput: function() {
            if (!this.selector.attr("name")) {
                this.selector.attr("name", this.options.name);
            }
        },

        //加载事件
        events: function() {
            var _this = this,
                opts = _this.options;
            this.$submit.on("click", function() {
                _this.selector.click();
            });
            _this.selector.on("change", function() {
                _this.$form.submit();

                var iframe = $("#flyer_upload_iframe"),
                    timer = setInterval(function() {

                        var res;
                        try {
                            res = iframe.contents().find('#rpsResult').text();
                        } catch (e) {
                            console.info('错误信息:' + e);
                            clearInterval(timer);
                        }
                        if (res) {
                            clearInterval(timer);
                            iframe.contents().find('body').html('');
                            try {
                                res = JSON.parse(res);
                            } catch (e) {
                                res = {};
                                return flyer.msg('请对上传接口返回JSON字符');
                            }
                            typeof opts.success === 'function' && opts.success(res, _this.selector);
                        }

                    }, 50);
            });

            this.selector.val("");
        }
    }

    return new Upload(selector, options);
});
//定义成 flyer 内置模块
flyer.define("codes", function(elm, opts) {

    /*
     *  定义一个代码修饰器的构造函数
     */
    var Codes = function(selector, options) {
        var _this = this;
        if (selector.length > 1) {
            selector.each(function() {
                _this.init($(this), options);
            })
        } else {
            _this.init(selector, options);
        }
    }

    //内置的属性
    Codes.DEFAULTS = {

        //类型：String,指定元素的标签种类,默认为pre
        tagName: "pre",

        //类型: String ,代码修饰器的标题,默认为Code
        title: "Code",

        //类型：String , 设置显示的高度，默认为auto
        height: "auto",

        //类型：Boolean ,是否转义html标签,默认为true
        encode: true,

        //类型: Boolean , 是否显示关于来源,默认为true
        about: true
    }

    Codes.prototype = {

        //实例化的入口
        init: function(selector, options) {
            this[0] = selector;
            this.options = $.extend(true, {}, Codes.DEFAULTS, options);
            this[0].replaceWith(this.template());
        },

        //渲染修饰器
        template: function() {
            var arryHtmls = ['<' + this.options.tagName + ' class="codes">',
                '<h1>',
                this.options.title, this.options.about ? '<a href="#">flyer.code</a>' : '',
                '</h1>',
                '<ol>',
                this.adornContent(),
                '</ol>',
                '</' + this.options.tagName + '>'
            ];
            return arryHtmls.join("");
        },

        //修饰内容
        adornContent: function() {
            var arryText = this[0].html(),
                arryHtmls = [];

            arryText = arryText ? arryText.split('\n') : "";

            for (var i = 0, len = arryText.length; i < len; i++) {
                if (this.options.encode) {
                    arryText[i] = flyer.escapeHTML(arryText[i]);
                }
                arryHtmls.push("<li>" + arryText[i] + "</li>");
            }
            return arryHtmls.join("");
        }
    }

    return new Codes(elm, opts);
});
(function($, fly) {
    for (var o in fly) {
        (function(o, $) {
            $.fn[o] = function(options) {
                return this.each(function() {
                    return fly[o](this, options);
                });
            }
        })(o, $)
    }
})(jQuery, flyer)