// ADBlock，CSS规则命中实现，广告隐藏
var hideElem = {
    init: function() {
        var url = window.location.href;
        var selectorRules = [];
        for (var i = 0; i < cssRules.length; i++) {
            var cssRule, params = cssRules[i].split("##");
            if (params.length > 1) {
                cssRule = params[1];
                // 匹配特定域名, ~开头的，根据ADBlock规则跳过隐藏
                var flagMatch = (new RegExp(params[0]).test(url)),
                    flagExcept = (new RegExp("~").test(params[0]));
                if (!flagMatch || (flagMatch && flagExcept)) {
                    continue;
                }
            } else {
                cssRule = params[0];
            }
            var selectors = document.querySelectorAll(cssRule);
            if (selectors.length) {
                selectorRules.push(cssRule);
            }     
        }
        this.elemHideEmulation(selectorRules);
    },
    elemHideEmulation: function(selectors)
    {
      if (!selectors || !selectors.length)
        return;
      var selector = selectors.join(", ");
      this.insertStyleRule(selector + "{display: none !important;}");
    },
    insertStyleRule: function(rule){
        var styleElement;
        var styleElements = document.head.getElementsByTagName("style");
        if (styleElements.length) {
            styleElement = styleElements[0];
        }
        else {
            styleElement = document.createElement("style");
            document.head.appendChild(styleElement);
        }
        styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    }
};

hideElem.init();