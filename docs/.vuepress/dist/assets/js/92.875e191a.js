(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{321:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"_02-前端错误监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-前端错误监控","aria-hidden":"true"}},[t._v("#")]),t._v(" 02.前端错误监控")]),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),s("p",[t._v("错误监控包含的内容是：")]),s("ul",[s("li",[s("p",[t._v("前端错误的分类")])]),s("li",[s("p",[t._v("每种错误的捕获方式")])]),s("li",[s("p",[t._v("上报错误的基本原理")])])]),s("p",[t._v("面试时，可能有两种问法：")]),s("ul",[s("li",[s("p",[t._v("如何监测 js 错误？（开门见山的方式）")])]),s("li",[s("p",[t._v("如何保证"),s("strong",[t._v("产品质量")]),t._v("？（其实问的也是错误监控）")])])]),s("h2",{attrs:{id:"前端错误的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端错误的分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端错误的分类")]),s("p",[t._v("包括两种：")]),s("ul",[s("li",[s("p",[t._v("即时运行错误（代码错误）")])]),s("li",[s("p",[t._v("资源加载错误")])])]),s("h2",{attrs:{id:"每种错误的捕获方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每种错误的捕获方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 每种错误的捕获方式")]),s("h3",{attrs:{id:"即时运行错误的捕获方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#即时运行错误的捕获方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 即时运行错误的捕获方式")]),s("p",[s("strong",[t._v("方式1")]),t._v("：try ... catch。")]),s("p",[t._v("这种方式要部署在代码中。")]),s("p",[s("strong",[t._v("方式2：")]),s("code",[t._v("window.onerror")]),t._v("函数。这个函数是全局的。")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\twindow.onerror = function(msg, url, row, col, error) { ... }\n")])]),s("p",[t._v("参数解释：")]),s("ul",[s("li",[s("p",[t._v("msg为异常基本信息")])]),s("li",[s("p",[t._v("source为发生异常Javascript文件的url")])]),s("li",[s("p",[t._v("row为发生错误的行号")])])]),s("p",[t._v("方式二中的"),s("code",[t._v("window.onerror")]),t._v("是属于DOM0的写法，我们也可以用DOM2的写法："),s("code",[t._v('window.addEventListener("error", fn);')]),t._v("也可以。")]),s("p",[s("strong",[t._v("问题延伸1：")])]),s("p",[s("code",[t._v("window.onerror")]),t._v("默认无法捕获"),s("strong",[t._v("跨域")]),t._v("的js运行错误。捕获出来的信息如下：（基本属于无效信息）")]),s("p",[t._v("比如说，我们的代码想引入B网站的"),s("code",[t._v("b.js")]),t._v("文件，怎么捕获它的异常呢？")]),s("p",[s("strong",[t._v("解决办法")]),t._v("：在方法二的基础之上，做如下操作：")]),s("p",[t._v("（1）在"),s("code",[t._v("b.js")]),t._v("文件里，加入如下 response header，表示允许跨域：（或者世界给静态资源"),s("code",[t._v("b.js")]),t._v("加这个 response header）")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tAccess-Control-Allow-Origin: *\n")])]),s("p",[t._v("（2）引入第三方的文件"),s("code",[t._v("b.js")]),t._v("时，在"),s("code",[t._v("<script>")]),t._v("标签中增加"),s("code",[t._v("crossorigin")]),t._v("属性；")]),s("p",[t._v("参考链接：")]),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/315ffe6797b8",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.onerror的总结")])])]),s("li",[s("p",[s("a",{attrs:{href:"http://www.cnblogs.com/hustskyking/archive/2015/08/20/fe-monitor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端代码异常日志收集与监控")])])]),s("li",[s("p",[s("a",{attrs:{href:"https://foio.github.io/javascript-global-exceptions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("捕获页面中全局Javascript异常")])])])]),s("p",[s("strong",[t._v("问题延伸2：")])]),s("p",[t._v("只靠方式二中的"),s("code",[t._v("window.onerror")]),t._v("是不够的，因为我们无法获取文件名是什么，不知道哪里出了错误。解决办法：把"),s("strong",[t._v("堆栈")]),t._v("信息作为msg打印出来，堆栈里很详细。")]),s("h3",{attrs:{id:"资源加载错误的捕获方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源加载错误的捕获方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源加载错误的捕获方式")]),s("p",[t._v("上面的window.onerror只能捕获即时运行错误，无法捕获资源加载错误。原理是：资源加载错误，并不会向上冒泡，object.onerror捕获后就会终止（不会冒泡给window），所以window.onerror并不能捕获资源加载错误。")]),s("p",[s("strong",[t._v("方式1")]),t._v("：object.onerror。img标签、script标签等节点都可以添加onerror事件，用来捕获资源加载的错误。")]),s("p",[s("strong",[t._v("方式2")]),t._v("：performance.getEntries。可以获取所有已加载资源的加载时长，通过这种方式，可以间接的拿到没有加载的资源错误。")]),s("p",[t._v("举例：")]),s("p",[t._v("浏览器打开一个网站，在Console控制台下，输入：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tperformance.getEntries().forEach(function(item){console.log(item.name)})\n")])]),s("p",[t._v("或者输入：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tperformance.getEntries().forEach(item=>{console.log(item.name)})\n")])]),s("p",[t._v("上面这个api，返回的是数组，既然是数组，就可以用forEach遍历。打印出来的资源就是"),s("strong",[t._v("已经成功加载")]),t._v("的资源。；")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_2030.png",alt:""}})]),s("p",[t._v("再输入"),s("code",[t._v("document.getElementsByTagName('img')")]),t._v("，就会显示出所有"),s("strong",[t._v("需要加载")]),t._v("的的img集合。")]),s("p",[t._v("于是，"),s("code",[t._v("document.getElementsByTagName('img')")]),t._v("获取的资源数组减去通过"),s("code",[t._v("performance.getEntries()")]),t._v("获取的资源数组，剩下的就是没有成功加载的，这种方式可以间接捕获到资源加载错误。")]),s("p",[t._v("这种方式非常有用，一定要记住。")]),s("p",[t._v("**方式3；**Error事件捕获。")]),s("p",[t._v("源加载错误，虽然会阻止冒泡，但是不会阻止捕获。我们可以在捕获阶段绑定error事件。例如：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_2040.png",alt:""}})]),s("p",[t._v("**总结：**如果我们能回答出后面的两种方式，面试官对我们的印象会大大增加。既可以体现出我们对错误监控的了解，还可以体现出我们对事件模型的掌握。")]),s("p",[t._v("参考链接：")]),s("ul",[s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/gaoning/p/7928497.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端错误监控原理与实战")]),t._v(" （作者的这篇文章参考了面试内容）")])]),s("h2",{attrs:{id:"错误上报的两种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误上报的两种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误上报的两种方式")]),s("p",[s("strong",[t._v("方式一")]),t._v("：采用Ajax通信的方式上报（此方式虽然可以上报错误，但是我们并不采用这种方式）")]),s("p",[t._v("**方式二：**利用Image对象上报（推荐。网站的监控体系都是采用的这种方式）")]),s("p",[t._v("方式二的实现方式如下：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("//通过Image对象进行错误上报")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'http://smyhvae.com/myPath?badjs=msg'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// myPath表示上报的路径（我要上报到哪里去）。后面的内容是自己加的参数。")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),s("p",[t._v("打开浏览器，效果如下：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_2055.png",alt:""}})]),s("p",[t._v("上图中，红色那一栏表明，我的请求已经发出去了。点进去看看：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180311_2057.png",alt:""}})]),s("p",[t._v("这种方式，不需要借助第三方的库，一行代码即可搞定。")])])}],!1,null,null,null);a.default=r.exports}}]);