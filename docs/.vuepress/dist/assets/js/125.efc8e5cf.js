(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{354:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"事件驱动和非阻塞机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动和非阻塞机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动和非阻塞机制")]),s("h2",{attrs:{id:"异步编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步编程","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步编程")]),s("h3",{attrs:{id:"异步操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步操作")]),s("ul",[s("li",[s("p",[t._v("Node 采用 Chrome V8 引擎处理 JavaScript 脚本。V8 最大特点就是"),s("strong",[t._v("单线程运行")]),t._v("，一次只能运行一个任务。")])]),s("li",[s("p",[t._v("Node 大量采用异步操作（asynchronous operation），即任务不是马上执行，而是插在任务队列的尾部，等到前面的任务运行完后再执行。")])]),s("li",[s("p",[t._v("提高代码的响应能力。")])])]),s("p",[t._v("异步IO也叫非阻塞IO。例如读文件，传统的语言，基本都是读取完毕才能进行下一步操作。非阻塞就是Node的callback，不会影响下一步操作，等到文件读取完毕，回调函数自动被执行，而不是在等待。")]),s("h3",{attrs:{id:"异步操作回调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步操作回调","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步操作回调")]),s("p",[t._v("由于系统永远不知道用户什么时候会输入内容，所以代码不能永远停在一个地方。")]),s("p",[t._v("Node 中的操作方式就是以异步回调的方式解决无状态的问题。")]),s("h3",{attrs:{id:"回调函数的设计：错误优先"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调函数的设计：错误优先","aria-hidden":"true"}},[t._v("#")]),t._v(" 回调函数的设计：错误优先")]),s("p",[t._v("异步操作中，无法通过 try catch 捕获异常。")]),s("p",[t._v("这是因为回调函数主要用于异步操作，当回调函数运行时，前期的操作早结束了，错误的执行栈早就不存在了，传统的错误捕捉机制try…catch对于异步操作行不通，所以只能把错误交给回调函数处理。")]),s("p",[s("strong",[t._v("统一约定：")])]),s("p",[t._v("回调函数的第一个参数默认接收错误信息，第二个参数才是真正的回调数据（便于外界获取调用的错误情况）：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("foo1('赵小黑', 19, function(error, data) {\n  if(error)  throw error;\n  console.log(data);\n});\n")])]),s("h3",{attrs:{id:"异步回调的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步回调的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步回调的问题")]),s("p",[t._v("相比较于传统的代码：")]),s("ul",[s("li",[s("p",[t._v("异步事件驱动的代码")])]),s("li",[s("p",[t._v("不容易阅读")])]),s("li",[s("p",[t._v("不容易调试")])]),s("li",[s("p",[t._v("不容易维护")])])]),s("p",[t._v("另外还有个问题是"),s("strong",[t._v("回调地狱：")])]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("do1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("do2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("do3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token function"}},[t._v("do4")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("do5")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token function"}},[t._v("do6")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),s("h2",{attrs:{id:"进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程和线程")]),s("h3",{attrs:{id:"进程（进行中的程序）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程（进行中的程序）","aria-hidden":"true"}},[t._v("#")]),t._v(" 进程（进行中的程序）")]),s("ul",[s("li",[s("p",[t._v("每一个 "),s("strong",[t._v("正在运行")]),t._v(" 的应用程序都称之为进程。")])]),s("li",[s("p",[t._v("每一个应用程序运行都至少有一个进程。")])]),s("li",[s("p",[t._v("进程是用来给应用程序提供一个运行的环境。")])]),s("li",[s("p",[t._v("进程是操作系统为应用程序分配资源的一个单位。")])])]),s("h3",{attrs:{id:"线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程")]),s("ul",[s("li",[s("p",[t._v("用来执行应用程序中的代码")])]),s("li",[s("p",[t._v("在一个进程内部，可以有很多的线程")])]),s("li",[s("p",[t._v("在一个线程内部，同时只可以干一件事")])]),s("li",[s("p",[t._v("传统的开发方式大部分都是 I/O 阻塞的，所以需要多线程来更好的利用硬件资源。")])])]),s("p",[t._v("线程并不是越多越好。")]),s("h3",{attrs:{id:"多线程的弊端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多线程的弊端","aria-hidden":"true"}},[t._v("#")]),t._v(" 多线程的弊端")]),s("p",[t._v("缺点一：")]),s("pre",[s("code",[t._v("- 创建线程耗费。\n- 线程数量有限。\n- CPU 在不同线程之间转换，有个上下文转换，这个转换非常耗时。\n")])]),s("p",[t._v("所谓的多线程其实都是假的，对于单核CPU而言，它们无非是在抢占 CPU 资源。线程和线程之间需要"),s("strong",[t._v("切换和调度")]),t._v("，这是很耗费资源的。")]),s("p",[t._v("缺点二：")]),s("ul",[s("li",[t._v("线程之间共享某些数据，同步某个状态都很麻烦。")])]),s("p",[t._v("就算 CPU 是多核的，现在的问题是，线程与线程之间如果要共享数据，该怎么办？比如 A 线程要访问 B 线程的变量。")]),s("h2",{attrs:{id:"事件驱动和非阻塞机制-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动和非阻塞机制-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件驱动和非阻塞机制")]),s("p",[t._v("参考链接："),s("a",{attrs:{href:"https://www.kancloud.cn/revin/nodejs/176211",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.kancloud.cn/revin/nodejs/176211")])]),s("p",[t._v("总结：")]),s("ul",[s("li",[s("p",[t._v("Node 中将所有的阻塞操作交给了内部线程池实现。")])]),s("li",[s("p",[t._v("Node 主线程本身，主要就是不断的"),s("strong",[t._v("往返调度")]),t._v("。")])])]),s("h3",{attrs:{id:"平台实现差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平台实现差异","aria-hidden":"true"}},[t._v("#")]),t._v(" 平台实现差异")]),s("p",[t._v("由于 Windows 和 *nix 平台（其他平台）的差异，Node 提供了 libuv 作为抽象封装层，保证上层的 Node 与下层的自定义线程池及 IOCP 之间各自独立。")]),s("p",[t._v("如下图所示：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180301_2252.png",alt:""}})])])}],!1,null,null,null);a.default=r.exports}}]);