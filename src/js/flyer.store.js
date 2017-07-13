/***
 *@Name: fiyer v0.1.1 类库
 *@Author: Ken (郑鹏飞)
 *@Site : http://www.flyerui.com
 *@License：MIT
 *备注：用于有端数据存诸(localStorage)
 IE8+:5MB
 Firfox8+：5.24MB
 Opera:2MB
 Chorme/Safari:2.6MB
 ***/
//定义成 flyer 内置模块

flyer.extend("store", function() {
    var regKey = /^[0-9A-Za-z_@-]*$/,
        store;

    //转换对象
    function init() {
        if (typeof store === "undefined") {
            store = window.localStorage;
        }
        return true;
    }

    //判断 localStorage 的 Key 值是否合法
    function isValidKey(key) {
        if (typeof key != "string") {
            return false;
        }
        return regKey.test(key);
    }

    return {

        //设置 localStorage 单条记录
        set: function(key, value) {
            var success = false;
            if (isValidKey(key) && init()) {
                try {
                    value += "";
                    store.setItem(key, value);
                    success = true;
                } catch (e) {}
            }
            return success;
        },

        //读取 localStorage 单条记录
        get: function(key) {
            if (isValidKey(key) && init()) {
                try {
                    return store.getItem(key);
                } catch (e) {}
            }
            return null;
        },

        //移除 localStorage 单条记录
        remove: function(key) {
            if (isValidKey(key) && init()) {
                try {
                    store.removeItem(key);
                    return true;
                } catch (e) {}
            }
            return false;
        },

        //清除 localStorage 所有记录
        clear: function() {
            if (init()) {
                try {
                    for (var key in store) {
                        store.removeItem(key);
                    }
                    return true;
                } catch (e) {}
                return false;
            }
        }
    }
});