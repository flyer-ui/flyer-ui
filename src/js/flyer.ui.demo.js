/***
 *@Name: fiyer v1.0 [这里写组件名称]
 *@Author: [作者名称]
 *@License：LGPL
 *备注:关于 flyer  插件拓展的使用说明及规范范本.
 ***/
(function(global, $, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {

        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("该插件需要在支持document的渲染环境上.");
            } else if (!$) {
                throw new Error("该插件需要在支持加载了jQuery类库的渲染环境上.");
            }
            return factory(w, $);
        };

    } else {
        factory(global, $);
    }

})(typeof window !== "undefined" ? window : this, jQuery, function(window, $, noGlobal) {
    "use strick"
    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Demo = function(selector, options) {
        return this.init(selector, options);
    }

    Demo.DEFAULTS = {

        //内置的属性
    }

    Demo.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Demo.DEFAULTS, options);

            //方法实例化代码
        }
    }

    //定义成 jQuery 组件
    $.fn.demo = function(opts) {
        return this.each(function() {
            this.Demo = new Demo(this, opts);
            return this;
        });
    }

    //定义成 flyer 内置模块
    if (typeof flyer === "object" && typeof flyer.define === "function") {
        flyer.define("demo", function(selector, options) {
            return new Demo(selector, options);
        });
    }

});