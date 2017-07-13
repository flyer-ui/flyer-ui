/***
 *@Name: fiyer v0.1.1 类库
 *@Author: Ken (郑鹏飞)
 *@Site : http://www.flyerui.com
 *@License：MIT
 *备注：将 flyer 挂载在 jQuery 插件上
 ***/
(function($, fly) {
    for (var o in fly) {
        (function(o, $) {
            $.fn[o] = function(options) {
                return this.each(function() {
                    return fly[o](this, options);
                });
            }
        })(o, $)
    }
})(jQuery, flyer)