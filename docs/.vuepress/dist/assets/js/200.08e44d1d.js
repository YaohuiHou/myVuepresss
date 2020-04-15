(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{429:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("按照上面这种写法，假设创建10000个对象实例，就会创建10000个 sayName 方法。这种写法肯定是不合适的。我们为何不让所有的对象共享同一个方法呢？")]),a("p",[t._v("还有一种方式是，将sayName方法在全局作用域中定义：（不建议。原因看注释）")]),t._m(7),a("p",[t._v("比较好的方式是，在原型中添加sayName方法：")]),t._m(8),a("p",[t._v("这也就引入了我们本文要讲的「原型」。")]),t._m(9),t._m(10),a("p",[t._v("我们所创建的每一个函数，解析器都会向函数中添加一个属性 prototype。这个属性对应着一个对象，这个对象就是我们所谓的原型对象。")]),a("p",[t._v("如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的实例对象中都会有一个隐含的属性，指向该构造函数的原型，我们可以通过__proto__来访问该属性。")]),a("p",[t._v("代码举例：")]),t._m(11),t._m(12),t._m(13),a("p",[t._v("原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。")]),a("p",[t._v("以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，这样就不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。")]),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v("原型对象也是对象，所以它也有原型，当我们使用或访问一个对象的属性或方法时：")]),t._m(18),t._m(19),a("p",[t._v("第一次接触「原型」和「原型链」的时候，会比较难理解。多接触几次，再回过头来看，就慢慢熟悉了。")]),t._m(20),a("p",[t._v("我们先来看下面这段代码：")]),t._m(21),a("p",[t._v("打印结果：")]),t._m(22),t._m(23),t._m(24),a("p",[t._v("重写 toString() 方法，具体做法如下：")]),t._m(25),a("p",[t._v("打印结果：")]),t._m(26),a("p",[t._v("代码分析：")]),a("p",[t._v("上面的代码中，仔细看注释。我们重写了 Person 原型的 toString()，这样的话，可以保证对 Person 的所有实例生效。")]),t._m(27),t._m(28),a("p",[t._v("程序运行过程中会产生垃圾，这些垃圾积攒过多以后，会导致程序运行的速度过慢。所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾。")]),a("p",[t._v("当一个对象没有任何的变量或属性对它进行引用时，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。")]),a("p",[t._v("上面这句话，也可以这样理解：如果堆内存中的对象，没有任何变量指向它时，这个堆内存里的对象就会成为垃圾。")]),a("p",[t._v("JS拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁。我们不需要也不能进行垃圾回收的操作。我们仅仅需要做的是：如果你不再使用该对象，那么，将改对象的引用设置为 null 即可。")]),t._m(29),a("p",[t._v("想学习"),a("font",{attrs:{color:"#0000ff"}},[a("strong",[t._v("代码之外的技能")])]),t._v("？不妨关注我的微信公众号："),a("strong",[t._v("千古壹号")]),t._v("（id："),a("code",[t._v("qianguyihao")]),t._v("）。")],1),a("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),t._m(30)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在看本文之前，我们可以先复习上一篇文章：《03-JavaScript基础/12-对象的创建&构造函数.md》")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型对象-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型对象-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"原型的引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型的引入","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型的引入")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("        "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("//向对象中添加一个方法")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"我是"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//创建一个Person的实例")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"孙悟空"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("18")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"男"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"猪八戒"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("28")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"男"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        per"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sayName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        per2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sayName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("per"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sayName "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" per2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sayName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//打印结果为false")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("分析如下")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上方代码中，我们的sayName方法是写在构造函数 Person 内部的，然后在两个实例中进行了调用。造成的结果是，"),s("strong",[this._v("构造函数每执行一次，就会给每个实例创建一个新的 sayName 方法")]),this._v("。也就是说，每个实例的sayName都是唯一的。因此，最后一行代码的打印结果为false。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("        "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("//向对象中添加一个方法")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sayName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fun"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//将sayName方法在全局作用域中定义")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n         * 将函数定义在全局作用域，污染了全局作用域的命名空间\n         *  而且定义在全局作用域中也很不安全\n         */")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello大家好，我是:"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    Person"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello大家好，我是:"')]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"原型prototype的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型prototype的概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型prototype的概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("认识1")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 定义构造函数")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 打印结果：[object object]")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("per1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" Person"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 打印结果：true")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上方代码的最后一行：打印结果表明，"),s("code",[this._v("实例.__proto__")]),this._v(" 和 "),s("code",[this._v("构造函数.prototype")]),this._v("都指的是原型对象。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("认识2")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("认识3")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("in")]),this._v(" 检查对象中是否含有某个属性时，如果对象中没有但是"),s("strong",[this._v("原型中")]),this._v("有，也会返回true。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以使用对象的"),s("code",[this._v("hasOwnProperty()")]),this._v("来检查"),s("strong",[this._v("对象自身中")]),this._v("是否含有该属性。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("它会先在对象自身中寻找，如果有则直接使用；")])]),s("li",[s("p",[this._v("如果没有则会去原型对象中寻找，如果找到则直接使用；")])]),s("li",[s("p",[this._v("如果没有则去原型的原型中寻找，直到找到Object对象的原型。")])]),s("li",[s("p",[this._v("Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回 null")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"对象的-tostring-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的-tostring-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 对象的 toString() 方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"vae"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("26")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"男"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"per1 = "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" per1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"per1 = "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" per1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("per1 = [object Object]\nper1 = [object Object]\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面的代码中，我们尝试打印实例 per1 的内部信息，但是发现，无论是打印 "),s("code",[this._v("per1")]),this._v(" 还是打印 "),s("code",[this._v("per1.toString()")]),this._v("，结果都是"),s("code",[this._v("object")]),this._v("，这是为啥呢？分析如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("当我们直接在页面中打印一个对象时，其实是输出了对象的toString()方法的返回值。")])]),s("li",[s("p",[this._v("如果我们希望在打印对象时，不输出[object Object]，可以手动为对象添加一个toString()方法。意思是，重写 toString() 方法。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("//方式一：重写 Person 原型的toString方法。针对 Person 的所有实例生效")]),t._v("\n\tPerson"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("toString")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token string"}},[t._v('"Person[name="')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token string"}},[t._v('",age="')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token string"}},[t._v('",gender="')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n\t\t  "),a("span",{attrs:{class:"token string"}},[t._v('"]"')]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 方式二：仅重写实例 per1 的 toString方法。但是这种写法，只对 per1 生效， 对 per2 无效")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v('/*\n\tper1.toString = function() {\n\t\treturn (\n\t\t  "Person[name=" +\n\t\t  this.name +\n\t\t  ",age=" +\n\t\t  this.age +\n\t\t  ",gender=" +\n\t\t  this.gender +\n\t\t  "]"\n\t\t);\n\t};\n\t*/')]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"smyh"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("26")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"男"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"vae"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"男"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"per1 = "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" per1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"per2 = "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" per2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("per1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Person"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("smyh"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("26")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("gender"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("男"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nper2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Person"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("vae"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("gender"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("男"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从这个例子，我们可以看出 "),s("code",[this._v("prototype")]),this._v(" 的作用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"js的垃圾回收（gc）机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js的垃圾回收（gc）机制","aria-hidden":"true"}},[this._v("#")]),this._v(" JS的垃圾回收（GC）机制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我的公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号","aria-hidden":"true"}},[this._v("#")]),this._v(" 我的公众号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/2016040102.jpg",alt:""}})])}],!1,null,null,null);s.default=e.exports}}]);