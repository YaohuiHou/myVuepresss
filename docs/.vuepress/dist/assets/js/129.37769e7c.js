(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{358:function(a,e,t){"use strict";t.r(e);var r=t(1),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs","aria-hidden":"true"}},[a._v("#")]),a._v(" CommonJS")]),t("h2",{attrs:{id:"全局对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 全局对象")]),t("h3",{attrs:{id:"global"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global","aria-hidden":"true"}},[a._v("#")]),a._v(" global")]),t("p",[a._v("类似于客户端 JavaScript 运行环境中的 window。")]),t("h2",{attrs:{id:"process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process","aria-hidden":"true"}},[a._v("#")]),a._v(" process")]),t("p",[a._v("用于获取当前的 Node 进程信息，一般用于获取环境变量之类的信息。")]),t("h3",{attrs:{id:"console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console","aria-hidden":"true"}},[a._v("#")]),a._v(" console")]),t("p",[a._v("Node 中内置的 console 模块，提供操作控制台的输入输出功能，常见使用方式与客户端类似。")]),t("h2",{attrs:{id:"全局函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 全局函数")]),t("ul",[t("li",[t("p",[a._v("setInterval(callback, millisecond)")])]),t("li",[t("p",[a._v("clearInterval(timer)")])]),t("li",[t("p",[a._v("setTimeout(callback, millisecond)")])]),t("li",[t("p",[a._v("clearTimeout(timer)")])]),t("li",[t("p",[a._v("Buffer：Class")]),t("ul",[t("li",[a._v("用于操作二进制数据")]),t("li",[a._v("以后介绍")])])])]),t("h2",{attrs:{id:"node-调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-调试","aria-hidden":"true"}},[a._v("#")]),a._v(" Node 调试")]),t("h3",{attrs:{id:"最简单的调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最简单的调试","aria-hidden":"true"}},[a._v("#")]),a._v(" 最简单的调试")]),t("p",[a._v("最方便也是最简单的调试：console.log()")]),t("h3",{attrs:{id:"node-原生的调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-原生的调试","aria-hidden":"true"}},[a._v("#")]),a._v(" Node 原生的调试")]),t("p",[a._v("网址："),t("a",{attrs:{href:"https://nodejs.org/api/debugger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://nodejs.org/api/debugger.html")])]),t("h3",{attrs:{id:"第三方模块提供的调试工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块提供的调试工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 第三方模块提供的调试工具")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ npm install node-inspector –g   //方式一\n\n\n$ npm install devtool -g          //方式二\n")])]),t("h3",{attrs:{id:"开发工具的调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发工具的调试","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发工具的调试")]),t("ul",[t("li",[t("p",[a._v("Visual Studio Code")])]),t("li",[t("p",[a._v("WebStorm")])])]),t("h2",{attrs:{id:"模块化结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块化结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 模块化结构")]),t("p",[a._v("Node 实现 CommonJS 规范，所以可以使用模块化的方式组织代码结构。")]),t("ul",[t("li",[t("p",[a._v("Node 采用的模块化结构是按照 CommonJS 规范。")])]),t("li",[t("p",[a._v("模块与文件是一一对应关系，即加载一个模块，实际上就是加载对应的一个模块文件。")])])]),t("h3",{attrs:{id:"commonjs-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-规范","aria-hidden":"true"}},[a._v("#")]),a._v(" CommonJS 规范")]),t("p",[a._v("CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构。")]),t("p",[a._v("参考链接：")]),t("ul",[t("li",[t("a",{attrs:{href:"http://wiki.commonjs.org/wiki/CommonJS",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://wiki.commonjs.org/wiki/CommonJS")])])]),t("h3",{attrs:{id:"常用内置模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用内置模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用内置模块")]),t("ul",[t("li",[t("p",[t("code",[a._v("path")]),a._v("：处理文件路径。")])]),t("li",[t("p",[t("code",[a._v("fs")]),a._v("：操作（CRUD）文件系统。")])]),t("li",[t("p",[t("code",[a._v("child_process")]),a._v("：新建子进程。")])]),t("li",[t("p",[t("code",[a._v("util")]),a._v("：提供一系列实用小工具。")])]),t("li",[t("p",[t("code",[a._v("http")]),a._v("：提供 HTTP 服务器功能。")])]),t("li",[t("p",[t("code",[a._v("url")]),a._v("：用于解析 URL。")])]),t("li",[t("p",[t("code",[a._v("querystring")]),a._v("：解析 URL 中的查询字符串。")])]),t("li",[t("p",[t("code",[a._v("crypto")]),a._v("：提供加密和解密功能。")])])]),t("p",[a._v("总结：更多内容可以参考 api文档："),t("a",{attrs:{href:"https://nodejs.org/api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://nodejs.org/api/")])]),t("h2",{attrs:{id:"文件系统操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件系统操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件系统操作")]),t("h3",{attrs:{id:"相关模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关模块","aria-hidden":"true"}},[a._v("#")]),a._v(" 相关模块")]),t("ul",[t("li",[t("p",[a._v("fs：基础的文件操作 API")])]),t("li",[t("p",[a._v("path：提供和路径相关的操作 API")])]),t("li",[t("p",[a._v("readline：用于读取大文本文件，一行一行读")])]),t("li",[t("p",[a._v("fs-extra（第三方）："),t("a",{attrs:{href:"https://www.npmjs.com/package/fs-extra",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.npmjs.com/package/fs-extra")])])])])])}],!1,null,null,null);e.default=s.exports}}]);