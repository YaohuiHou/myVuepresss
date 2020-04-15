(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{498:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("今天，在QQ群有个群友问了个问题：“nodejs读取图片，转成base64，怎么读取呢？” 想了一下，他想问的应该是 怎么样把图片嵌入到网页中去，即如何把图片转成对应的 datauri。")]),s("p",[t._v("是个不错的问题，而且也是个很常用的功能。快速实现了个简单的demo，这里顺便记录一下。")]),t._m(2),s("p",[t._v("思路很直观：1、读取图片二进制数据 -> 2、转成base64字符串 -> 3、转成datauri。")]),t._m(3),s("blockquote",[s("p",[t._v("data:["),s("mediatype",[t._v("][;base64],"),s("data")])],1)]),s("p",[t._v("具体到png图片，大概如下，其中 “xxx” 就是前面的base64字符串了。接下来，我们看下在nodejs里该如何实现")]),t._m(4),t._m(5),s("p",[t._v("首先，读取本地图片二进制数据。")]),t._m(6),s("p",[t._v("然后，将二进制数据转换成base64编码的字符串。")]),t._m(7),s("p",[t._v("最后，转换成datauri的格式。")]),t._m(8),s("p",[t._v("完整例子代码如下，代码非常少：")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),s("p",[t._v("Base64笔记：http://www.ruanyifeng.com/blog/2008/06/base64.html\nData URIs：https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"将图片转成datauri嵌入到html-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将图片转成datauri嵌入到html-ok","aria-hidden":"true"}},[this._v("#")]),this._v(" 将图片转成datauri嵌入到html(ok)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"问题：将图片转成datauri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题：将图片转成datauri","aria-hidden":"true"}},[this._v("#")]),this._v(" 问题：将图片转成datauri")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现思路")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("关于base64的介绍，可以参考阮一峰老师的"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2008/06/base64.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("文章")]),this._v("。而 datauri 的格式如下")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("data: image/png;base64, xxx")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 具体实现")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" filepath "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./1.png'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" base64Str "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'base64'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" datauri "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'data:image/png;base64,'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" base64Str"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" filepath "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./1.png'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" base64Str "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'base64'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" datauri "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'data:image/png;base64,'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" base64Str"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datauri"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"github-demo地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-demo地址","aria-hidden":"true"}},[this._v("#")]),this._v(" github demo地址")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("demo地址请"),a("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide/tree/master/examples/2016.11.15-base64-datauri",target:"_blank",rel:"noopener noreferrer"}},[this._v("点击这里")]),this._v("，或者")])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/chyingp/nodejs-learning-guide.git\n"),a("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" nodejs-learning-guide/examples/2016.11.15-base64-datauri\nnode server.js\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("然后在浏览器访问 "),a("a",{attrs:{href:"http://127.0.0.1:3000",target:"_blank",rel:"noopener noreferrer"}},[this._v("http://127.0.0.1:3000")]),this._v("，就可以看到效果 😃")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关链接")])}],!1,null,null,null);a.default=e.exports}}]);