/***
 *@Name: fiyer v1.0 上传控件
 *@Author: Ken(郑鹏飞)
 *@License：LGPL
 *
 * <div class="flyer-upload">
        <form enctype="multipart/form-data">
            <input type="file" class="flyer-upload-file" value="上传图片" />
        </form>
        <button class="flyer-btn flyer-btn-default">
            <i class="fa fa-plus-square-o"></i>
            <span>上传图片</span>
        </button>
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
    var Upload = function(selector, options) {
        return this.init(selector, options);
    }

    Upload.DEFAULTS = {

        //类型: String ,指定元素的选择器，默认直接查找class为layui-upload-file的元素
        elem: "flyer-upload-file",

        //类型: String ,按钮显示的文本
        text: "",

        //类型: String ,上传文件的地址
        url: "http://172.16.24.243:8081/upload",

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

    //定义成 jQuery 组件
    $.fn.upload = function(opts) {
        return this.each(function() {
            this.Upload = new Upload(this, opts);
            return this;
        });
    }

    //定义成 flyer 内置模块
    if (typeof flyer === "object" && typeof flyer.define === "function") {
        flyer.define("upload", function(selector, options) {
            return new Upload(selector, options);
        });
    }

});