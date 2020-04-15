(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{414:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"client-可视区-相关属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-可视区-相关属性","aria-hidden":"true"}},[t._v("#")]),t._v(" client(可视区)相关属性")]),a("h2",{attrs:{id:"client-家族的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-家族的组成","aria-hidden":"true"}},[t._v("#")]),t._v(" client 家族的组成")]),a("h3",{attrs:{id:"clientwidth-和-clientheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientwidth-和-clientheight","aria-hidden":"true"}},[t._v("#")]),t._v(" clientWidth 和 clientHeight")]),a("p",[t._v("元素调用时：")]),a("ul",[a("li",[a("p",[t._v("clientWidth：获取元素的可见宽度（width + padding）。")])]),a("li",[a("p",[t._v("clientHeight：获取元素的可见高度（height + padding）。")])])]),a("p",[t._v("body/html 调用时：")]),a("ul",[a("li",[a("p",[t._v("clientWidth：获取网页可视区域宽度。")])]),a("li",[a("p",[t._v("clientHeight：获取网页可视区域高度。")])])]),a("p",[a("strong",[t._v("声明")]),t._v("：")]),a("ul",[a("li",[a("p",[a("code",[t._v("clientWidth")]),t._v(" 和 "),a("code",[t._v("clientHeight")]),t._v(" 属性是只读的，不可修改。")])]),a("li",[a("p",[a("code",[t._v("clientWidth")]),t._v(" 和 "),a("code",[t._v("clientHeight")]),t._v(" 的值都是不带 px 的，返回的都是一个数字，可以直接进行计算。")])])]),a("h3",{attrs:{id:"clientx-和-clienty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientx-和-clienty","aria-hidden":"true"}},[t._v("#")]),t._v(" clientX 和 clientY")]),a("p",[t._v("event调用：")]),a("ul",[a("li",[a("p",[t._v("clientX：鼠标距离可视区域左侧距离。")])]),a("li",[a("p",[t._v("clientY：鼠标距离可视区域上侧距离。")])])]),a("h3",{attrs:{id:"clienttop-和-clientleft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clienttop-和-clientleft","aria-hidden":"true"}},[t._v("#")]),t._v(" clientTop 和 clientLeft")]),a("ul",[a("li",[a("p",[t._v("clientTop：盒子的上border。")])]),a("li",[a("p",[t._v("clientLeft：盒子的左border。")])])]),a("h2",{attrs:{id:"三大家族-offset-scroll-client-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三大家族-offset-scroll-client-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 三大家族 offset/scroll/client 的区别")]),a("h3",{attrs:{id:"区别1：宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别1：宽高","aria-hidden":"true"}},[t._v("#")]),t._v(" 区别1：宽高")]),a("ul",[a("li",[a("p",[t._v("offsetWidth  = width  + padding + border")])]),a("li",[a("p",[t._v("offsetHeight = height + padding + border")])]),a("li",[a("p",[t._v("scrollWidth   = 内容宽度（不包含border）")])]),a("li",[a("p",[t._v("scrollHeight  = 内容高度（不包含border）")])]),a("li",[a("p",[t._v("clientWidth  = width  + padding")])]),a("li",[a("p",[t._v("clientHeight = height + padding")])])]),a("h3",{attrs:{id:"区别2：上左"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别2：上左","aria-hidden":"true"}},[t._v("#")]),t._v(" 区别2：上左")]),a("p",[t._v("offsetTop/offsetLeft：")]),a("ul",[a("li",[t._v("调用者：任意元素。(盒子为主)")]),a("li",[t._v("作用：距离父系盒子中带有定位的距离。")])]),a("p",[t._v("scrollTop/scrollLeft：")]),a("ul",[a("li",[t._v("调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)")]),a("li",[t._v("作用：浏览器无法显示的部分（被卷去的部分）。")])]),a("p",[t._v("clientY/clientX：")]),a("ul",[a("li",[t._v("调用者：event")]),a("li",[t._v("作用：鼠标距离浏览器可视区域的距离（左、上）。")])]),a("h2",{attrs:{id:"函数封装：获取浏览器的宽高（可视区域）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数封装：获取浏览器的宽高（可视区域）","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数封装：获取浏览器的宽高（可视区域）")]),a("p",[t._v("函数封装如下：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//函数封装：获取屏幕可视区域的宽高")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("client")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//ie9及其以上的版本的写法")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"width"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"height"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compatMode "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"CSS1Compat"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//标准模式的写法（有DTD时）")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"width"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"height"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//没有DTD时的写法")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"width"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"height"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),a("p",[a("strong",[t._v("案例：根据浏览器的可视宽度，给定不同的背景的色。")])]),a("blockquote",[a("p",[t._v("PS：这个可以用来做响应式。")])]),a("p",[t._v("代码如下：（需要用到上面的封装好的方法）")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tools.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//需求：浏览器每次更改大小，判断是否符合某一标准然后给背景上色。")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//  // >960红色，大于640小于960蓝色，小于640绿色。")]),t._v("\n\n    window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onresize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//页面大小发生变化时，执行该函数。")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//页面加载的时候直接执行一次函数，确定浏览器可视区域的宽，给背景上色")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//封装成函数，然后指定的时候去调用和绑定函数名")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("client")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("960")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"red"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("client")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("640")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"green"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("上当代码中，"),a("code",[t._v("window.onresize")]),t._v("事件指的是：在窗口或框架被调整大小时发生。各个事件的解释如下：")]),a("ul",[a("li",[a("p",[t._v("window.onscroll        屏幕滑动")])]),a("li",[a("p",[t._v("window.onresize       浏览器大小变化")])]),a("li",[a("p",[t._v("window.onload\t        页面加载完毕")])]),a("li",[a("p",[t._v("div.onmousemove    鼠标在盒子上移动（注意：不是盒子移动）")])])]),a("h2",{attrs:{id:"获取显示器的分辨率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取显示器的分辨率","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取显示器的分辨率")]),a("p",[t._v("比如，我的电脑的显示器分辨率是：1920*1080。")]),a("p",[t._v("获取显示器的分辨率：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onresize")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"    "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("显示效果：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180203_2155.png",alt:""}})]),a("p",[t._v("上图中，不管我如何改变浏览器的窗口大小，title栏显示的值永远都是我的显示器分辨率：1920*1080。")]),a("h2",{attrs:{id:"我的公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 我的公众号")]),a("p",[t._v("想学习"),a("strong",[t._v("代码之外的技能")]),t._v("？不妨关注我的微信公众号："),a("strong",[t._v("千古壹号")]),t._v("（id："),a("code",[t._v("qianguyihao")]),t._v("）。")]),a("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20190101.png",alt:""}})])])}],!1,null,null,null);s.default=o.exports}}]);