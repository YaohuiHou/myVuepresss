(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{422:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"包装类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类","aria-hidden":"true"}},[t._v("#")]),t._v(" 包装类")]),a("h2",{attrs:{id:"包装类-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 包装类")]),a("h3",{attrs:{id:"包装类的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类的介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 包装类的介绍")]),a("p",[t._v("我们都知道，js中的数据类型包括以下几种。")]),a("ul",[a("li",[a("p",[t._v("基本数据类型：String、Number、Boolean、Null、Undefined")])]),a("li",[a("p",[t._v("引用数据类型：Object")])])]),a("p",[t._v("JS为我们提供了"),a("strong",[t._v("三个包装类")]),t._v("：")]),a("ul",[a("li",[a("p",[t._v("String()：将基本数据类型字符串，转换为String对象。")])]),a("li",[a("p",[t._v("Number()：将基本数据类型的数字，转换为Number对象。")])]),a("li",[a("p",[t._v("Boolean()：将基本数据类型的布尔值，转换为Boolean对象。")])])]),a("p",[t._v("通过上面这这三个包装类，我们可以"),a("strong",[t._v("将基本数据类型的数据转换为对象")]),t._v("。")]),a("p",[t._v("代码举例：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bool "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" num"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 打印结果：object")]),t._v("\n")])]),a("p",[a("strong",[t._v("需要注意的是")]),t._v("：我们在实际应用中不会使用基本数据类型的对象。如果使用基本数据类型的对象，在做一些比较时可能会带来一些"),a("strong",[t._v("不可预期")]),t._v("的结果。")]),a("p",[t._v("比如说：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" boo1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" boo2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boo1 "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" boo2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 打印结果竟然是：false")]),t._v("\n")])]),a("p",[t._v("再比如说：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" boo3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boo3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'qianguyihao'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 这行代码竟然执行了")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h3",{attrs:{id:"基本数据类型不能添加属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型不能添加属性和方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本数据类型不能添加属性和方法")]),a("p",[t._v("方法和属性只能添加给对象，不能添加给基本数据类型。")]),a("p",[a("strong",[t._v("注意")]),t._v("：当我们对一些基本数据类型的值去调用属性和方法时，浏览器会"),a("strong",[t._v("临时使用包装类将其转换为对象")]),t._v("，然后在调用对象的属性和方法；调用完以后，在将其转换为基本数据类型。")]),a("p",[t._v("代码举例：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tstr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 将 number 类型转换为 string 类型")]),t._v("\n\tstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"千古壹号"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 添加属性")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 打印结果：string")]),t._v("\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 打印结果：undefined")]),t._v("\n")])]),a("p",[t._v("再比如，String 对象的很多内置方法，也可以直接给字符串用。此时，也是临时将字符串转换为 String 对象，然后再调用内置方法。")]),a("h2",{attrs:{id:"我的公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 我的公众号")]),a("p",[t._v("想学习"),a("strong",[t._v("代码之外的技能")]),t._v("？不妨关注我的微信公众号："),a("strong",[t._v("千古壹号")]),t._v("（id："),a("code",[t._v("qianguyihao")]),t._v("）。")]),a("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20190101.png",alt:""}})])])}],!1,null,null,null);s.default=o.exports}}]);