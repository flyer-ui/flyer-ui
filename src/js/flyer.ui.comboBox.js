/***
 *@Name: fiyer v1.0 下拉组件
 *@Author: Ken (郑鹏飞)
 *创建于日期：2016/03/30
 *@Site : http://www.flyerui.com
 *@License：LGPL
 ***/
(function(global, $, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("该插件需要在支持document的渲染环境上.");
            } else if (!$) {
                throw new Error("该插件需要在支持加载了jQuery类库的渲染环境上.");
            }
            return factory(w);
        };

    } else {
        factory(global, $);
    }

})(typeof window !== "undefined" ? window : this, jQuery, function(window, $, noGlobal) {
    "use strick"
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
                _this.stop(e);
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
                    _this.stop(e);

                });
            });

            $(document).on("click", function(e) {
                //$("." + styles[4]).removeClass(styles[8]);
                _this.hideItems();
                _this.stop(e);
            });

        },

        //是否允许添加全部选项
        allowAllItem: function() {
            var opts = this.options;
            return opts.selectAll && opts.isMulti && opts.data.length > 1;
        },

        //阻止冒炮事件
        stop: function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
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

    //定义成 jQuery 组件
    $.fn.combobox = function(opts) {
        return this.each(function() {
            this.ComboBox = new ComboBox(this, opts);
            return this;
        });
    }

    //定义成 flyer 内置模块
    if (typeof flyer === "object" && typeof flyer.define === "function") {
        flyer.define("combobox", function(selector, options) {
            return new ComboBox(selector, options);
        });
    }

});