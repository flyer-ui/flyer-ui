/***
 *@Name: fiyer v0.1.1 日期控件
 *@Author: Ken（郑鹏飞)
 *@License：MIT
 ***/
flyer.define("date", function(selector, options) {

    /*
     * 在这里写要实例插件的代码,定义的变量名以实际组件的名称为准
     */
    var Datepicker = function(selector, options) {
        return this.init(selector, options);
    }

    Datepicker.DEFAULTS = {

        //类型 String ,日期选择器的起始时间
        minDate: "1977-01-01",

        //类型 String,日期选择器的结束时间
        maxDate: "2099-12-31",

        //类型 String ,日期选择器的开始时间
        startDate: new Date(),

        //类型 Boolean ,是否显示确认按钮
        isSure: true,

        //类型 Boolean ,是否显示清空按钮
        isClear: true,

        //类型 Boolean ,是否显示今天按钮
        isToday: true,

        //类型 Boolean ,是否显示时分秒选择
        isTime: true,

        //类型 Boolean ,是否显示节日
        festival: true,

        //类型 Strint ,日期显示的格式
        format: "yyyy-mm-dd HH:MM:SS",

        //类型 Boolean ,时间范围是否精确到时分秒
        isPrecision: false,

        //类型 Function ,点击日期时触发的事件
        click: function() {
            return false;
        },

        //类型 Function ,选择好时间后触发的事件
        choose: function() {
            return false;
        }
    }

    Datepicker.prototype = {

        //页面加载的实例化入口
        init: function(selector, options) {
            this.options = $.extend(true, {}, Datepicker.DEFAULTS, options);
            this.selector = this.isJQuery(selector) ? selector : $(selector);
            this._date = this.getYMD(this.selector.val().replace(/-/ig, "/"));
            // this.template();
            this.initEvent();
        },

        //刷新 
        refresh: function() {
            this.template();
            this.events();
            this.isPickerBtnStatus();
        },

        //国际化配置
        i18n: {

        },

        //实例化一个容器模板
        template: function() {
            var ymd = this._date,
                opts = this.options;
            var arryHtmls = [
                '<div class="flyer-date" id="flyer-date-' + this.selector.attr("id") + '">',
                '<div class="flyer-date-header">',
                '<div class="flyer-date-year">',
                '<button class="prev"></button>',
                '<input type="text" class="flyer-year" value="' + ymd.year + '" readonly="true" />',
                '<button class="more"></button>',
                '<button class="next"></button>',
                '<div class="flyer-date-yearMore">',
                '<div class="prev-more"></div>',
                '<div class="years">',
                this.initYears(),
                '</div>',
                '<div class="next-more"></div>',
                '</div>',
                '</div>',
                '<div class="flyer-date-month">',
                '<button class="prev"></button>',
                '<input type="text" class="flyer-month" value="' + ymd.month + '" readonly="true" />',
                '<button class="more"></button>',
                '<button class="next"></button>',
                '<div class="flyer-date-monthMore">',
                this.initMonths(),
                '</div>',
                '</div>',
                '</div>',
                '<div class="flyer-date-body">',
                '<table>',
                '<thead>',
                '<tr>',
                '<th>日</th>',
                '<th>一</th>',
                '<th>二</th>',
                '<th>三</th>',
                '<th>四</th>',
                '<th>五</th>',
                '<th>六</th>',
                '</tr>',
                '</thead>',
                '<tbody>',
                this.initDays(),
                '</tbody>',
                '<tfoot></tfoot>',
                '</table>',
                '</div>',
                '<div class="flyer-date-footer">',
                (opts.isTime ? this.initHMS() : ''),
                '<div class="flyer-date-btn">',
                (opts.isClear ? '<button class="flyer-clear">清空</button>' : ''),
                (opts.isToday ? '<button class="flyer-today">今天</button>' : ''),
                (opts.isSure ? '<button class="flyer-confirm">确认</button>' : ''),
                '</div>',
                '</div>',
                '</div>'
            ];

            //this.selector.html(arryHtmls.join(""));
            if (this.container) {
                arryHtmls.splice(0, 1);
                arryHtmls.splice(arryHtmls.length - 1, 1)
                this.container.html(arryHtmls.join(""));
            } else {
                $("body").append(arryHtmls.join(""));
            }

            this.container = $("#flyer-date-" + this.selector.attr("id"));
            this.$header = this.container.find(".flyer-date-header");
            this.$headerYear = this.$header.find(".flyer-date-year");
            this.$headerMonth = this.$header.find(".flyer-date-month");
            this.$body = this.container.find(".flyer-date-body");
            this.$footer = this.container.find(".flyer-date-footer");
            this.$footerTime = this.$footer.find(".flyer-date-time");
            this.$footerBts = this.$footer.find(".flyer-date-btn");
        },

        //实例化年选择器
        initYears: function(year) {
            var arryHtmls = [],
                years = parseInt(year || this._date.year);
            for (var i = years - 4; i < years + 8; i++) {
                arryHtmls.push("<span class='" + (this.isEffectiveDateForYear(i) ? "" : "flyer-dont-select") + "' month='" + i + "'>" + i + "</span>")
            }

            return arryHtmls.join("");
        },

        //实例化月选择器
        initMonths: function() {
            var arryHtmls = [];
            for (var i = 1; i <= 12; i++) {
                arryHtmls.push("<span class='" + (this.ifEffectiveDateForMonth(i) ? "" : "flyer-dont-select") + "' month='" + i + "'>" + this.justShowText(i) + "</span>")
            }

            return arryHtmls.join("");
        },

        //实例化时分秒选择器
        initHMS: function() {

            var arryHtmls = ['<div class="flyer-date-time">',
                '<label>时间</label>',
                '<span class="hour">' + this._date.hours + '</span>:',
                '<span class="minute">' + this._date.minutes + '</span>:',
                '<span class="second">' + this._date.second + '</span>',
                this.initHours(),
                this.initMinutes(),
                this.initSeconds(),
                '</div>'
            ];

            return arryHtmls.join("");
        },

        //实例化日选择器
        initDays: function() {

            var arryHtmls = [],
                start = this.getStart(),
                end = this.getEnd(),
                ymd = this._date,
                days = this.getMonthDays(ymd.month, ymd.year),
                yes = false,
                length = days + start;

            //按星期分组
            for (var i = 1, j = 1, weekDay = 0; i <= length; i++) {

                if (weekDay == 0) {
                    arryHtmls.push("<tr>");
                }

                if (weekDay == start) {
                    yes = true;
                }

                if (j > days) {
                    yes = false;
                }

                if (yes) {
                    arryHtmls.push("<td class='" + (j == parseInt(this._date.day) ? "flyer-today " : "") + (this.isEffectiveDate(j) ? "" : "flyer-dont-select") + "'>" + j + "</td>");
                    j++;
                } else {
                    arryHtmls.push("<td class='flyer-dont-select'>" + "&nbsp;" + "</td>");
                }
                weekDay++;
                if (weekDay == 7) {
                    arryHtmls.push("</tr>");
                    weekDay = 0;
                }

            }

            return arryHtmls.join("");

        },

        //是否是在有效可选的时间内
        isEffectiveDate: function(day, month, year) {
            day = day || this._date.day;
            month = month || this._date.month;
            year = year || this._date.year;

            var date = new Date(this.precisionFormat(day, month, year));

            var minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate),
                curDate = date;

            return (curDate <= maxDate && curDate >= minDate);
        },

        precisionFormat: function(day, month, year) {
            var hh = this._date.hours,
                mm = this._date.minutes,
                ss = this._date.second;
            return this.options.isPrecision ? (year + "/" + month + "/" + day + " " + hh + ":" + mm + ":" + ss) :
                (year + "/" + month + "/" + day);
        },

        //判断是否在有效期的年份内
        isEffectiveDateForYear: function(year) {
            var minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate);

            return (year <= maxDate.getFullYear() && year >= minDate.getFullYear());
        },

        //判断是否在有效期的月份内
        ifEffectiveDateForMonth: function(month) {
            month = month || this._date.month;
            year = this._date.year;

            var date = new Date(year + "/" + month + "/01"),
                minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate),
                compareMinDate = new Date(minDate.getFullYear() + "/" + (minDate.getMonth() + 1) + "/01"),
                compareMaxDate = new Date(maxDate.getFullYear() + "/" + (maxDate.getMonth() + 1) + "/01");

            return (date <= compareMaxDate && date >= compareMinDate);
        },

        //是否是在有效可选的时间内
        isEffectiveForDate: function(date) {
            var minDate = new Date(this.minDate || this.options.minDate),
                maxDate = new Date(this.maxDate || this.options.maxDate),
                curDate = new Date(date);

            return (curDate <= maxDate && curDate >= minDate);
        },

        //判断面板上的按钮状态
        isPickerBtnStatus: function() {
            if (!this.isEffectiveForDate(new Date())) {
                this.$footerBts.find(".flyer-today").addClass("flyer-dont-select");
            } else {
                this.$footerBts.find(".flyer-today").removeClass("flyer-dont-select");
            }

            if (!this.isEffectiveForDate(this.formatDate())) {
                this.$footerBts.find(".flyer-confirm").addClass("flyer-dont-select");
            } else {
                this.$footerBts.find(".flyer-confirm").removeClass("flyer-dont-select");
            }
        },

        //实例化小时选择器面板
        initHours: function() {
            var _this = this;
            return ['<div class="flyer-date-hours">',
                '<div class="flyer-date-minTool">小时<span>x</span></div>',
                '<div class="flyer-hours">',
                (function() {
                    var arryHtmls = [];
                    for (var i = 1; i < 24; i++) {
                        arryHtmls.push("<span>" + _this.justShowText(i) + "</span>")
                    }
                    return arryHtmls.join("");
                })(),
                '</div>',
                '</div>'
            ].join("");
        },

        //实例化分钟选择器面板
        initMinutes: function() {
            var _this = this;
            return ['<div class="flyer-date-minutes">',
                '<div class="flyer-date-minTool">分钟<span>x</span></div>',
                '<div class="flyer-minutes">',
                (function() {
                    var arryHtmls = [];
                    for (var i = 1; i < 60; i++) {
                        arryHtmls.push("<span>" + _this.justShowText(i) + "</span>")
                    }
                    return arryHtmls.join("");
                })(),
                '</div>',
                '</div>'
            ].join("");
        },

        //实例化秒数的选择器面板
        initSeconds: function() {
            var _this = this;
            return ['<div class="flyer-date-seconds">',
                '<div class="flyer-date-minTool">秒数<span>x</span></div>',
                '<div class="flyer-seconds">',
                (function() {
                    var arryHtmls = [];
                    for (var i = 1; i < 60; i++) {
                        arryHtmls.push("<span>" + _this.justShowText(i) + "</span>")
                    }
                    return arryHtmls.join("");
                })(),
                '</div>',
                '</div>'
            ].join("");
        },

        //判断当天是润年还是平年
        isLeapYear: function(Year) {
            if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
                return (true);
            } else {
                return (false);
            }
        },

        //得到当天的年月日
        getYMD: function(date) {
            var curDate = new Date(date || this.options.startDate);
            return {
                year: curDate.getFullYear(),
                month: this.justShowText(curDate.getMonth() + 1),
                day: this.justShowText(curDate.getDate()),
                hours: this.justShowText(curDate.getHours()),
                minutes: this.justShowText(curDate.getMinutes()),
                second: this.justShowText(curDate.getSeconds())
            }
        },

        //较正日期显示格式
        justShowText: function(time) {
            return time >= 10 ? time : ("0" + time);
        },

        //得到月的天数
        getMonthDays: function(month, year) {
            switch (parseInt(month)) {
                case 2:
                    {
                        return this.isLeapYear(year) ? 29 : 28;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    {
                        return 30;
                    }
                    break;
                default:
                    {
                        return 31;
                    }
            }
        },

        //根据参数时间得到是星期几
        getDay: function(time) {
            return new Date(time).getDay();
        },

        //得到日期面板的起始时间
        getStart: function() {
            var ymd = this._date;
            return this.getDay(ymd.year + "/" + ymd.month + "/01");
        },

        //得到日期面板的结速时间
        getEnd: function() {
            var ymd = this._date;
            return this.getDay(ymd.year + "/" + ymd.month + "/" + this.getMonthDays(ymd.month, ymd.year));
        },

        //格式化日期
        formatDate: function() {
            return this.options.format
                .replace(/yyyy/ig, this._date.year)
                .replace(/mm/, this._date.month)
                .replace(/dd/ig, this._date.day)
                .replace(/hh/ig, this._date.hours)
                .replace(/MM/, this._date.minutes)
                .replace(/ss/ig, this._date.second);
        },

        //关闭日期选择面板
        close: function() {
            this.container.css({
                display: "none"
            });
        },

        //关闭所有日期选择面板
        closeAll: function() {
            $(".flyer-date").hide();
        },

        //设置最大可选日期
        setMaxDate: function(date) {
            this.maxDate = date;
        },

        //设置最小可选日期
        setMinDate: function(date) {
            this.minDate = date;
        },

        targetIsShow: function($target) {
            if ($target.hasClass("flyer-date-show")) {
                $target.removeClass("flyer-date-show");
            } else {
                $target.addClass("flyer-date-show");
            }
        },

        isJQuery: function(obj) {
            return obj instanceof jQuery;
        },

        //实例化挂载事件
        initEvent: function() {
            var _this = this;
            //点击控件框显示日期
            this.selector.on("click", function(e) {
                _this.closeAll();
                _this.refresh();
                var $datepicker = $("#flyer-date-" + _this.selector.attr("id")),
                    offset = _this.selector.offset();
                $datepicker.css({
                    top: (offset.top + _this.selector[0].offsetHeight) + "px",
                    left: offset.left + "px",
                    display: "block"
                });
                flyer.stop(e);
            });
        },

        //添加事件
        events: function() {
            var _this = this;

            //显示年面板
            this.$headerYear.on("click", ".more,.flyer-year", function() {
                var $target = $(this).parent().find(".flyer-date-yearMore");
                _this.targetIsShow($target);
            });

            //点击月面板
            this.$headerMonth.on("click", ".more,.flyer-month", function() {
                var $target = $(this).parent().find(".flyer-date-monthMore");
                _this.targetIsShow($target);
            });

            //点击左右年事件
            this.$headerYear.on("click", ".next,.prev", function() {
                var isNext = $(this).hasClass("next");
                _this._date.year = isNext ? (parseInt(_this._date.year) + 1) : (parseInt(_this._date.year) - 1);
                _this.refresh();
            });

            //点击左右月事件
            this.$headerMonth.on("click", ".next,.prev", function() {
                var isNext = $(this).hasClass("next");
                if (isNext) {
                    if (parseInt(_this._date.month) < 12) {
                        _this._date.month = _this.justShowText((parseInt(_this._date.month) + 1));
                    }
                } else {
                    if (parseInt(_this._date.month) > 1) {
                        _this._date.month = _this.justShowText((parseInt(_this._date.month) - 1))
                    }
                }
                _this.refresh();
            });

            //选中年点击后事件
            this.$headerMonth.on("click", ".flyer-date-monthMore span:not([class='flyer-dont-select'])", function() {
                _this._date.month = $(this).text();
                _this.refresh();
            })

            //自定义年点击后事件
            this.$headerYear.on("click", ".flyer-date-yearMore span:not([class='flyer-dont-select'])", function() {
                _this._date.year = $(this).text();
                _this.refresh();
            })

            //点击年面板上下刷新事件
            this.$headerYear.on("click", ".prev-more,.next-more", function() {
                var isNext = $(this).hasClass("next-more");
                if (isNext) {
                    _this.$headerYear.find(".years").html((_this.initYears(_this.$headerYear.find(".flyer-date-yearMore span").last(0).text())));
                } else {
                    _this.$headerYear.find(".years").html((_this.initYears(_this.$headerYear.find(".flyer-date-yearMore span").eq(0).text())));
                }
            })

            //点击日期天数的事件
            this.$body.find("td:not([class='flyer-dont-select'])").off("click");
            this.$body.on("click", "td:not([class='flyer-dont-select'])", function() {
                if (!$(this).hasClass("flyer-dont-select")) {
                    _this._date.day = _this.justShowText($(this).text());
                    _this.options.click.call(this, _this.formatDate(), _this._date);
                    _this.selector.val(_this.formatDate());
                    _this.options.choose.call(this, _this.formatDate(), _this._date);
                    _this.close();
                }
            });

            //给小时关闭按钮绑定事件
            this.$footerTime.on("click", ".hour,.flyer-date-hours .flyer-date-minTool span", function() {
                var $target = _this.$footerTime.find(".flyer-date-hours");
                _this.targetIsShow($target);
            });

            //给小时绑定选中事件
            this.$footerTime.on("click", ".flyer-date-hours .flyer-hours span", function() {

                var $target = _this.$footerTime.find(".flyer-date-hours");
                _this.targetIsShow($target);
                _this.$footerTime.find(".hour").html($(this).text());
                _this._date.hours = $(this).text();
                _this.refresh();
                //_this.isPickerBtnStatus();
            });

            //给秒数关闭按钮绑定事件
            this.$footerTime.on("click", ".minute,.flyer-date-minutes .flyer-date-minTool span", function() {
                var $target = _this.$footerTime.find(".flyer-date-minutes");
                _this.targetIsShow($target);

            });

            //给分钟绑定选中事件
            this.$footerTime.on("click", ".flyer-date-minutes .flyer-minutes span", function() {
                var $target = _this.$footerTime.find(".flyer-date-minutes");
                _this.targetIsShow($target);
                _this.$footerTime.find(".minute").html($(this).text());
                _this._date.minutes = $(this).text();
                _this.refresh();
            });

            //给秒数关闭按钮绑定事件
            this.$footerTime.on("click", ".second,.flyer-date-seconds .flyer-date-minTool span", function() {
                var $target = _this.$footerTime.find(".flyer-date-seconds");
                _this.targetIsShow($target);
            });

            //给秒数绑定选中事件
            this.$footerTime.on("click", ".flyer-date-seconds .flyer-seconds span", function() {
                var $target = _this.$footerTime.find(".flyer-date-seconds");
                _this.targetIsShow($target);
                _this.$footerTime.find(".second").html($(this).text());
                _this._date.second = $(this).text();
                _this.refresh();
            });

            //清空
            this.$footerBts.on("click", ".flyer-clear", function() {
                _this.selector.val("");
                _this._date = _this.getYMD();
                _this.close();
            });

            //今天
            this.$footerBts.on("click", ".flyer-today", function() {
                _this._date = _this.getYMD(new Date());
                _this.options.click.call(this, _this.formatDate(), _this._date);
                _this.selector.val(_this.formatDate());
                _this.options.choose.call(this, _this.formatDate(), _this._date);
                _this.close();
            });

            //确认
            this.$footerBts.on("click", ".flyer-confirm", function() {
                _this.options.click.call(this, _this.formatDate(), _this._date);
                _this.selector.val(_this.formatDate());
                _this.options.choose.call(this, _this.formatDate(), _this._date);
                _this.close();
            });

            $(this.container).on("click", function(e) {
                flyer.stop(e);
            })

            $(document).on("click", function(e) {
                //$("." + styles[4]).removeClass(styles[8]);
                _this.close();
            });
        }
    }

    return new Datepicker(selector, options);
});