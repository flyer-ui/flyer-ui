/*
 *@Name : flyer v0.1.1 分页组件
 *@Author : Ken( 郑鹏飞 )
 *@Date : 2016 / 07 / 19
 *@Site : http://www.flyerui.com
 *@License : LGPL
 */
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