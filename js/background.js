// ADBlock，网络资源阻塞，阻止广告脚本下载

// 需要阻塞的网络请求url
var blockUrl = [
    "*://d1.sina.com.cn/litong/zhitou/sspnew.js*",
    "*://d5.sina.com.cn/litong/zhitou/sinaads/release/sinaads.js*",
    "*://d7.sina.com.cn/litong/zhitou/sinaads/src/spec/sinaads_ck.js*",
    "*://www.sinaimg.cn/unipro/pub/suda_s_v851c.js*",
    "*://d8.sina.com.cn/litong/zhitou/sinaads/release/spec/getSinaadsExParamsForBlog.js*",
    "*://d8.sina.com.cn/litong/zhitou/sinaads/demo/changwy/link/blog_bottom_float.js*",
    "*://pagead2.googlesyndication.com/pagead/show_ads.js*",
    "*://m.69shu.com/app/app_down_ad_logo.png*",
    "*://www.piaohua.com/js/yzz/*"
];
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: blockUrl},
    ["blocking"]
);