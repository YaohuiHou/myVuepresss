(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{486:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"whistle网络抓包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whistle网络抓包","aria-hidden":"true"}},[t._v("#")]),t._v(" whistle网络抓包")]),s("h2",{attrs:{id:"手机设置代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手机设置代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 手机设置代理")]),s("p",[t._v("连接好指定的wifi后，点击那个wifi里的设置，将「代理」那一项，设置为手动，然后输入ip（电脑上的ip）、端口号（8899）。然后就可以通过电脑上的whistle工具，查看手机的网页请求。")]),s("p",[t._v("注意，要保证手机和电脑在同一个网络下。")]),s("h2",{attrs:{id:"捕获和拦截https请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获和拦截https请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 捕获和拦截https请求")]),s("p",[t._v("whistle安装证书后，可以拦截 https 请求。但是，我现在又不想拦截https请求了，该怎么卸载证书呢？")]),s("p",[t._v("我发现，证书无法卸载，正确的操作是：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180426_1621.png",alt:""}})]),s("p",[t._v("上图中，把红框部分，去掉勾选，就不捕获https了。谢谢azh童鞋。")]),s("p",[t._v("参考链接：")]),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.zhihu.com/question/21474174",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android 手机如何设置http代理？")])])]),s("li",[s("p",[s("a",{attrs:{href:"http://zhuscat.com/2017/09/20/https-proxy-on-ios/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Whistle 对 iOS HTTPS 进行抓包")])])])]),s("h2",{attrs:{id:"移动端调试神器-eruda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端调试神器-eruda","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动端调试神器:eruda")]),s("blockquote",[s("p",[t._v("手机连接代理时，如何看console.log的日志信息?")])]),s("blockquote",[s("p",[t._v("现在，代码里有console.log，如果是在电脑浏览器上看，可以直接在控制台查看console.log的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看console.log的内容呢？具体做法如下：")])]),s("p",[t._v("（1）在 whistle中，新建一个名叫"),s("code",[t._v("Eruda H5")]),t._v("的代理，代理中的内容是：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://xxx.com htmlAppend://{eruda.html}\n")])]),s("p",[t._v("(2)新建一个values，里面的内容是：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//cdn.bootcss.com/eruda/1.4.3/eruda.min.js"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    eruda"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("init")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("然后就OK了。")])])}],!1,null,null,null);a.default=e.exports}}]);