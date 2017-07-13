/***
 *@Name: fiyer v1.0 弹层组件
 *@Author: Ken (郑鹏飞)
 *@Site : http://www.15ae.com
 *@License：LGPL
 ***/
flyer.define("ui", function() {
    "use strick"
    var fly = this;

    var styles = ["flyer-modal", "flyer-dialog", "flyer-dialog-title", "flyer-dialog-toolbar", "flyer-close", "flyer-dialog-content", "flyer-dialog-footer", "flyer-btn"],
        body = document.body,
        doc = document,
        loca = location,
        win = window;

    var class_col = {
        shade: "flyer-shade", //遮罩层的样式
        shade_loadding: "flyer-shade-loadding",
        dialog_container: "flyer-dialog-container", //弹出框容器
        dialog_title: "flyer-dialog-title", //弹出框标题
        dialog_move: "flyer-dialog-move", //弹出框副本样式，一般用于框位置移动时
        dialog_input: "flyer-dialog-input", //prompt弹框里输入框的样式
        dialog_textarea: "flyer-dialog-textarea", //prompt弹框多输入框的样式
        flyer_adim: "flyer-anim",
        flyer_msg: "flyer_msg"
    };
    //控件编号集合便于管理，有些是控件的前缀或者后缀
    var ctl_ids = {
        shade: "flyer-shade", //遮罩层的编号
        shade_loadding: "flyer-shade-loadding",
        dialog_container: "flyer-dialog-container", //弹出框容器编号
        dialog_title: "flyer-dialog-title", //弹出框标题
        dialog_move: "flyer-dialog-move", //弹出框副本样式，一般用于框位置移动时
        dialog_input: "flyer-dialog-input" //prompt弹框里控件的编号
    };
    //全局变量
    var global = {
        index: 0, //记录当前元素的ID增长值
        offsetX: 0, //层移动时的鼠标坐标X
        offsetY: 0, //层移动时的鼠标坐标Y
        isMove: false, //层移动时是否还可以移动
        isModal: true, //是否是对话框模式
        copies: null, //记录弹框副本移动时的对象
        self: null, //弹框的类型
        dialog_type: alert
    };
    var dialogType = {
        alert: "1",
        comfirm: "2",
        msg: "3",
        prompt: "4",
        open: "5",
        tips: "6"
    };

    var ui = fly.prototype.ui = {
        //遮罩层
        shade: function() {
            $(document.body).append("<div style='z-index:" + untity.getCurrentDate() + "' class='" + class_col.shade + "' id='" +
                ctl_ids.shade + global.index + "'></div>");
            setTimeout(function() {
                $(ctl_ids.shade + global.index).show()
            }, 50);
            return global.index;
        },
        //提示框,可以扩展点击确定后触发一个函数
        alert: function(msg, options, callback) {
            msg = msg || "";
            global.dialog_type = dialogType.alert;
            if (typeof(options) == "function") callback = options;
            var that = parts.open(msg, $.extend({
                title: "消息",
                content: typeof(msg) == "undefined" ? "" : msg,
                buttons: [{
                    text: "确定",
                    click: function() {
                        ui.close(that.index);
                        if (callback)
                            callback();
                    }
                }]
            }, options));
        },
        loadding: function() {
            global.index++;
            flyer.shade();
            $(document.body).append("<div style='z-index:" + untity.getCurrentDate() + "' id='" +
                ctl_ids.shade_loadding + global.index + "' class='" + class_col.shade_loadding + "'><img src='../css/imgs/load.gif'></div>");
            setTimeout(function() {
                $(ctl_ids.shade_loadding + global.index).show()
            }, 10);
            return global.index;
        },
        closeLoadding: function(index) {
            index = typeof index === "undefined" ? global.index : index;
            $("#" + ctl_ids.shade + index).remove();
            $("#" + ctl_ids.shade_loadding + index).remove();
            global.index--;
        },
        //消息框,目前仅作为消息提示，且一定时间后自动消失
        msg: function(msg) {
            global.dialog_type = dialogType.msg;
            options = typeof options === "undefined" ? {} : options;
            var oMsg = parts.open(msg, { isModal: false, content: msg });
            options.time = typeof(options.time) != "undefined" ? options.time : 4000;
            if (options.time > 0) {
                setTimeout(function() {
                    flyer.close(oMsg.index);
                }, options.time);
            }
        },
        //询问框,默认是”确定,取消"可以在options中设置按钮的数量和点击后的事件
        confirm: function(msg, options, callback) {
            global.dialog_type = dialogType.comfirm;
            if (typeof(options) == "function") callback = options;
            var that = parts.open(msg, $.extend({
                title: "消息",
                content: typeof(msg) == "undefined" ? "" : msg,
                buttons: [{
                    text: "确定",
                    click: function() {
                        ui.close(that.index);
                        if (typeof(callback) == "function") {
                            callback(true, $("#" + ctl_ids.dialog_input + global.index).val());
                        }
                    }
                }, {
                    text: "取消",
                    click: function() {
                        ui.close(that.index);
                        if (typeof(callback) == "function") {
                            callback(false, $("#" + ctl_ids.dialog_input + global.index).val());
                        }
                    }
                }]
            }, options));
        },
        //prompt框
        prompt: function(defaultValue, options, callback) {
            global.dialog_type = dialogType.prompt;
            if (typeof(options) == "function") callback = options;
            var that = parts.open(defaultValue, $.extend({
                title: "消息",
                content: typeof(msg) == "undefined" ? "" : msg,
                buttons: [{
                    text: "确定",
                    click: function() {
                        var vValue = $("#" + ctl_ids.dialog_input + global.index).val();
                        ui.close(that.index);
                        if (typeof(callback) == "function") {
                            callback(true, vValue);
                        }
                    }
                }, {
                    text: "取消",
                    click: function() {
                        var vValue = $("#" + ctl_ids.dialog_input + global.index).val();
                        ui.close(that.index);
                        if (typeof(callback) == "function") {
                            callback(false, vValue);
                        }
                    }
                }]
            }, options));
        },
        //弹父窗体
        open: function(options) {
            global.dialog_type = dialogType.open;
            var that = parts.open(null, $.extend({
                title: "子窗体标题",
                url: null,
                width: 400,
                height: 400
            }, options));
        },
        //关闭
        close: function(index) {

            if (typeof(index) != "number" && typeof(index) == "object") {
                index = $(index).attr("_id");
            } else if (typeof(index) == "string" && typeof(index) != "object") {
                index = index.replace(/[^\d]+/ig, "");
            }
            var vchild = untity.byId("flyer-dialog-container" + index);
            if (vchild) {
                if (global.dialog_type == dialogType.open) {
                    try {
                        var frame = $(vchild).find("iframe").get(0);
                        frame.contentWindow.document.write('');
                        frame.contentWindow.close();
                    } catch (e) {}
                }
                document.body.removeChild(vchild);
            }
            vchild = untity.byId("flyer-shade" + index);
            if (vchild)
                document.body.removeChild(vchild);

        },
        error: function(source) {
            if (console && console.log) {
                console.log(source);
            } else {
                alert(source);
            }
        },
        browser: function() {
            var uaMatch = function(ua) {
                ua = ua.toLowerCase();

                var match = rwebkit.exec(ua) ||
                    ropera.exec(ua) ||
                    rmsie.exec(ua) ||
                    ua.indexOf("compatible") < 0 && rmozilla.exec(ua) || [];

                return {
                    browser: match[1] || "",
                    version: match[2] || "0"
                };
            }
            var rwebkit = /(webkit)\/([\w.]+)/,
                ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                rmsie = /(msie) ([\w.]+)/,
                rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
                browser = {},
                ua = window.navigator.userAgent,
                browserMatch = uaMatch(ua);

            if (browserMatch.browser) {
                browser[browserMatch.browser] = true;
                browser.version = browserMatch.version;
            }
            return browser;
        }()
    }

    //部件类
    var parts = {
        //打开一个框,这里可用于全局
        open: function(msg, options) {
            global.index++; //累计当前打开的值，便于关闭时查找
            global.isModal = typeof(options.isModal) != "undefined" ? options.isModal : true;
            if (global.isModal)
                flyer.shade(); //弹出遮罩层
            var contniaer = parts.builderContniaer(options);
            if (global.dialog_type != dialogType.msg) {
                contniaer.appendChild(parts.builderTitle(options));
            }
            contniaer.appendChild(parts.builderBody(options));
            if (global.dialog_type != dialogType.msg) {
                contniaer.appendChild(parts.builderFooter(options));
            }
            var setWin = parts.builderSetWin();
            setWin.onclick = function() {
                flyer.close(contniaer);
            }
            contniaer.appendChild(setWin);
            document.body.appendChild(contniaer);
            var centerXY = untity.getCenterXY(contniaer);
            contniaer.style.top = centerXY.y + "px";
            contniaer.style.left = centerXY.x + "px";

            if (global.dialog_type == dialogType.open && !options.isFrame) {
                $("#flyer-dialog-body" + global.index).load(options.url);
            }
            return {
                elm: contniaer,
                index: global.index
            };
        },
        builderContniaer: function(options) {
            var contniaer = document.createElement("div");
            contniaer.className = class_col.dialog_container + " " + class_col.flyer_adim + " " + (global.dialog_type == dialogType.msg ? class_col.flyer_msg : "");
            contniaer.id = ctl_ids.dialog_container + global.index;
            $(contniaer).css("z-index", untity.getCurrentDate());
            $(contniaer).attr("_id", global.index);
            if (typeof(options) != "undefined" && typeof(options.width) != "undefined" && typeof(options.height) != "undefined") {
                $(contniaer).css("width", options.width);
                $(contniaer).css("height", options.height);
            }
            return contniaer;
        },
        builderTitle: function(options) {
            var title = document.createElement("div");
            title.className = class_col.dialog_title;
            title.id = ctl_ids.dialog_title + global.index;
            $(title).attr("_id", global.index);
            title.innerHTML = options.title;
            global.isMove = typeof(options.isDarag) != "undefined" ? options.isDarag : true;
            if (global.isMove) {
                title.style.cursor = "move";
            }
            $(title).mousedown(function() {
                global.isMove = typeof(options.isDarag) != "undefined" ? options.isDarag : true;
                if (global.isMove) {
                    var copies = parts.builderMove();
                    var self = untity.byId(ctl_ids.dialog_container + $(title).attr("_id"));
                    global.copies = copies;
                    global.self = self;
                    untity.mouseDown(copies, self);
                    var vEvent = window.event || arguments.callee.caller.arguments[0];
                    global.offsetX = vEvent.offsetX;
                    global.offsetY = vEvent.offsetY;
                    document.body.appendChild(copies);
                    //屏蔽点击鼠标会选中文本内容
                    document.body.onselectstart = function() {
                        return false;
                    }
                }
            });
            $(document).mousemove(function() {
                if (global.isMove)
                    untity.mouseOver(global.copies);
            });

            $(document).mouseup(function() {
                untity.mouseOut(global.self);
                global.isMove = false;
                document.body.onselectstart = function() {
                    return true;
                }
            });
            return title;
        },
        builderButton: function(button) {
            var a = document.createElement("a");
            a.className = "flyer-button flyer-dialog-btn";
            a.id = "flyer-button" + global.index;
            a.innerHTML = typeof button != "undefined" ? button.text : "Yes";
            $(a).bind("click", button.click);
            return a;
        },
        builderFooter: function(options) {
            var footer = document.createElement("div");
            footer.className = "flyer-dialog-footer";
            footer.id = "flyer-dialog-footer" + global.index;
            for (var btn in options.buttons) {
                footer.appendChild(parts.builderButton(options.buttons[btn]));
            }
            return footer;
        },
        builderBody: function(options) {
            var body = document.createElement("div");
            body.className = "flyer-dialog-body";
            body.id = "flyer-dialog-body" + global.index;

            switch (global.dialog_type) {
                case dialogType.alert:
                case dialogType.comfirm:
                    {
                        if (typeof(options.type) != "undefined" && options.type != null && options.type.length > 0) {
                            options.content = "<i class='flyer-dialog-icon flyer-dialog-icon-" +
                                options.type + "'></i><div class='flyer-dialog-padding'>" + options.content + "</div></div>";

                        }
                    }
                    break;
                case dialogType.prompt:
                    {
                        options.content = parts.builderInput(options).outerHTML;
                    }
                    break;
                case dialogType.open:
                    {
                        if (options.isFrame) {
                            $(body).css("padding", "0px");
                            options.content = "<iframe name='flyer_iframe_" + global.index + "' scrolling='auto' frameborder='0' height='" +
                                (options.height - 37) +
                                "' width='" +
                                (options.width) +
                                "' allowtransparency='true' src='" + untity.appendFrameUrl(options.url) +
                                "'></iframe>";
                        }

                    }
                    break;
            }

            body.innerHTML = options.content;
            return body;
        },
        builderSetWin: function() {
            var body = document.createElement("span");
            body.className = "flyer-dialog-setwin";
            body.id = "flyer-dialog-setwin" + global.index;
            body.innerHTML = "<a class=\"flyer-dialog-close\" href=\"javascript:void(0)\"></a>";
            return body;
        },
        builderMove: function() {
            var move = document.createElement("div");
            move.className = class_col.dialog_move;
            move.id = ctl_ids.dialog_move + global.index;
            return move;
        },
        builderInput: function(options) {
            var vType = typeof(options.type) != "undefined" ? options.type : "text";
            var vElement = null;
            switch (vType.toLowerCase()) {
                case "textarea":
                    {
                        vElement = document.createElement("textarea");
                        vElement.className = class_col.dialog_textarea;
                    }
                    break;
                default:
                    {
                        vElement = document.createElement("input");
                        vElement.className = class_col.dialog_input;
                        vElement.type = vType;
                    }
                    break;
            }
            vElement.id = ctl_ids.dialog_input + global.index;
            vElement.maxLength = options.maxLength || 999999;
            return vElement;
        },
        builderDiv: function(options) {
            var div = document.createElement("div");
            return div;
        }
    }

    //辅助类
    var untity = {
        //获得屏幕的中心坐标
        getCenterXY: function(self) {
            try {
                var mode = document.documentElement || document.body;
                var bodyX = mode.offsetWidth || mode.clientWidth;
                var bodyY = mode.clientHeight || mode.clientHeight;
                var selfX = typeof self != "undefined" ? self.offsetWidth : 0;
                var selfY = typeof self != "undefined" ? self.offsetHeight : 0;
                return {
                    x: (bodyX - selfX) / 2,
                    y: (bodyY - selfY) / 2,
                    w: mode.offsetWidth,
                    h: mode.clientHeight
                };
            } catch (ex) {}
        },
        //能过控件编号得天一个DOM控件对象
        byId: function(id) {
            return document.getElementById(id);
        },
        //鼠标悬浮时，这里一般用在层拖动时
        mouseOver: function(copies) {
            var vEvent = window.event || arguments.callee.caller.arguments[0];
            var y, x = 0;
            x = parseInt(vEvent.clientX) - parseInt(global.offsetX);
            y = parseInt(vEvent.clientY) - parseInt(global.offsetY) + parseInt(untity.getScrollTop());
            if (copies) {
                copies.style.top = y + "px";
                copies.style.left = x + "px";
            }
        },
        //鼠标离开时，这里一般用在层拖动时
        mouseOut: function(self) {
            var copies = untity.byId(ctl_ids.dialog_move + global.index);
            if (self != null && copies != null) {
                self.style.top = (parseInt(untity.getNumber(copies.style.top)) - parseInt(untity.getScrollTop())) + "px";
                self.style.left = copies.style.left;
                document.body.removeChild(copies);
            }
        },
        //鼠标按钮松开后，这里一般用在层拖动时
        mouseDown: function(copies, self) {
            copies.style.top = (parseInt(untity.getNumber(self.style.top)) + parseInt(untity.getScrollTop())) + "px";
            copies.style.left = self.style.left;
            copies.style.width = (self.offsetWidth - 6) + "px";
            copies.style.height = (self.offsetHeight - 6) + "px";
        },
        //获取当前时间
        getCurrentDate: function(format) {
            format = typeof(format) == "undefined" ? "" : format;
            var vDate = new Date();
            return vDate.getFullYear() + format + (vDate.getMonth() + 1) + format + vDate.getDate()
        },
        //追加iFrame的URL链接，用于清掉iFrame的缓存
        appendFrameUrl: function(v) {
            return v + (/[\?]/ig.test(v) ? "&" : "?") + "v=" + Math.random();
        },
        getNumber: function(v) {
            return v.toString().replace(/[^\d\.]+/ig, "");
        },
        getScrollTop: function() {
            var h = document.documentElement.scrollTop;
            if (h == 0)
                h = document.body.scrollTop;
            return h;
        }
    };
});