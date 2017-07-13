/***
 *@Name: fiyer v0.1.1 tab 组件
 *@Author: Ken (郑鹏飞)
 *创建于日期：2017/04/24
 *@Site : http://www.flyerui.com
 *@License：MIT
 ***/
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