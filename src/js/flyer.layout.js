"use strick"

function navEvents() {
    var $links = $(".flyer-layout-tree").find(".flyer-layout-link");
    $links.off("click");
    $links.on("click", function() {
        var href = $(this).data("href");
        location.hash = "#" + href.substring(0, href.lastIndexOf('.'));
        if (href === "#index") {
            return false;
        }
        $(".flyer-layout-content").load(href);
        $links.removeClass("flyer-layout-linkActive");
        $(this).addClass("flyer-layout-linkActive");
    });
}

function hashListen() {
    var hashValue = location.hash.replace("#", ""),
        $links = $(".flyer-layout-tree").find(".flyer-layout-link");

    if (hashValue.length > 0) {
        $(".flyer-layout-content").load(hashValue + ".html");
        $links.removeClass("flyer-layout-linkActive");
        $links.prevObject.find("[data-href='" + hashValue + ".html']").addClass("flyer-layout-linkActive");
    } else {
        if (location.href.indexOf("demo") < 0) {
            $(".flyer-layout-content").load("startUse.html");
            $links.prevObject.find("[data-href='startUse.html']").addClass("flyer-layout-linkActive");
        } else {
            $(".flyer-layout-content").load("onlineTest.html");
            $links.prevObject.find("[data-href='onlineTest.html']").addClass("flyer-layout-linkActive");
        }

    }
}

function run() {
    var strValue = parent.getValue();
    px(strValue);
}

function px(strValue) {
    var reg = /<script[^>]*>[^<>]*<\/script>/ig,
        d = {
            html: "",
            script: ""
        },
        v = strValue;
    d.script = v.match(reg);
    d.html = v.replace(reg, "");
    $(".view-code").html(d.html);
    for (var i = 0, len = d.script.length; i < len; i++) {
        var strEval = d.script[i].replace(/<script[^>]*>/ig, "").replace(/<\/script>/ig, "");
        console.log(strEval);
        eval(strEval);
    }
}
window.onhashchange = function() {
    hashListen();
}
$(window).load(function() {
    navEvents();
    hashListen();
});