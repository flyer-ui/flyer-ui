/***
 *@Name: fiyer v0.1.1 代码修饰器
 *@Author: Ken (郑鹏飞)
 *@Site : http://www.flyerui.com
 *@License：MIT
 ***/
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