/***
 *@Name: fiyer v1.0 树形菜单控件
 *@Author: Ken（郑鹏飞）
 *@License：LGPL
 *备注:关于 flyer  插件拓展的使用说明及规范范本.
  <div class="flyer-tree">
    <ul class="flyer-tree-root">
        <li><i class="fa fa-caret-right"></i><a><i class="fa fa-folder-o"></i>Tree1</a>
            <ul class="flyer-tree-node">
                <li>
                    <i class="fa"></i><a><i class="fa fa-file-o"></i>Tree1.1</a>
                </li>
                <li>
                    <i class="fa"></i><a><i class="fa fa-file-o"></i>Tree1.2</a>
                </li>
                <li>
                    <i class="fa"></i><a><i class="fa fa-file-o"></i>Tree1.3</a>
                </li>
            </ul>
        </li>
        <li><i class="fa fa-caret-right"></i><a><i class="fa fa-folder-o"></i>Tree2</a>
            <ul class="flyer-tree-node">
                <ul>
                    <li>
                        <i class="fa"></i><a><i class="fa fa-file-o"></i>Tree2.1</a>
                    </li>
                    <li>
                        <i class="fa fa-caret-right"></i><a><i class="fa fa-folder-o"></i>Tree2.2</a>
                        <ul class="flyer-tree-node">
                            <ul>
                                <li>
                                    <i class="fa"></i><a><i class="fa fa-file-o"></i>Tree2.2.1</a>
                                </li>
                                <li>
                                    <i class="fa"></i><a><i class="fa fa-file-o"></i>Tree2.2.2</a>
                                </li>
                            </ul>
                        </ul>
                    </li>
                </ul>
            </ul>
        </li>
        <li><i class="fa"></i><a><i class="fa fa-file-o"></i>Tree3</a></li>
        <li><i class="fa"></i><a><i class="fa fa-file-o"></i>Tree4</a></li>
    </ul>
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
                _this.stop(e);
            });
            this.selector.find(classs[0]).off("click", "a");
            this.selector.find(classs[0]).on("click", "a", function(e) {
                _this.options.click.call(this, e.target, _this.getData(e.target.getAttribute("_index")));
            });
        },

        stop: function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
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

    //定义成 jQuery 组件
    $.fn.tree = function(opts) {
        return this.each(function() {
            this.tree = new Tree(this, opts);
            return this;
        });
    }

    //定义成 flyer 内置模块
    if (typeof flyer === "object" && typeof flyer.define === "function") {
        flyer.define("tree", function(selector, options) {
            return new Tree(selector, options);
        });
    }

});