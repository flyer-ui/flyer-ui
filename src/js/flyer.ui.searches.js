/***
 *@Name: fiyer v1.0 检索框组件
 *@Author: Ken (郑鹏飞)
 *创建于日期：2017/04/24
 *@Site : http://www.flyerui.com
 *@License：LGPL
<div class="flyer-searches">
    <div class="keywords"><span>唐四少1;<i class="fa fa-close"></i></span><span>唐四少123232;<i class="fa fa-close"></i></span></div><input type="text" class="flyer-seraches-input" id="txtSearch" />
    <div class="flyer-combobox-items" style="display:block">
        <ul>
            <li>
                <div>唐四少1</div>
            </li>
            <li>
                <div>唐四少2</div>
            </li>
            <li>
                <div>唐四少3</div>
            </li>
            <li>
                <div>唐四少4</div>
            </li>
        </ul>
    </div>
</div>
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
    //定义一个Tab 页签组件
    // selector 分页组件完成后要装入的容器
    // options 分页组件时要定制的属性
    function Searches(selector, options) {
        return this.init(selector, options);
    }
    //定义 Tab 页签的样式集合
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
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
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

    //定义成 jQuery 组件
    $.fn.searches = function(opts) {
        return this.each(function() {
            this.searches = new Searches(this, opts);
            return this;
        });
    }

    //定义成 flyer 内置模块
    flyer.define("searches", function(selector, options) {
        return new Searches(selector, options);
    })

});