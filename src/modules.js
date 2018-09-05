export default {
    define: function (name, deps, fn) {
        this[name] = fn.call(fn, deps)
    },
    require: function (name) {
        return this[name]
    }
}