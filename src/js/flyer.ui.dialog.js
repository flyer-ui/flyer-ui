/***
 *@Name: fiyer v0.1.1 弹层组件
 *@Author: Ken (郑鹏飞)
 *@Site : http://www.flyerui.com
 *@License：MIT
 ***/
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
            var o = this.msg(text, options);

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