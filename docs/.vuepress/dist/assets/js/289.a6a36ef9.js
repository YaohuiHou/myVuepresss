(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{518:function(t,s,n){"use strict";n.r(s);var a=n(1),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"nodejs进阶：服务端字符编解码-乱码处理-ok"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs进阶：服务端字符编解码-乱码处理-ok","aria-hidden":"true"}},[t._v("#")]),t._v(" Nodejs进阶：服务端字符编解码&乱码处理(ok)")]),n("h2",{attrs:{id:"写在前面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在前面","aria-hidden":"true"}},[t._v("#")]),t._v(" 写在前面")]),n("p",[t._v("在web服务端开发中，字符的编解码几乎每天都要打交道。编解码一旦处理不当，就会出现令人头疼的乱码问题。")]),n("p",[t._v("不少从事node服务端开发的同学，由于对字符编码码相关知识了解不足，遇到问题时，经常会一筹莫展，花大量的时间在排查、解决问题。")]),n("p",[t._v("文本先对字符编解码的基础知识进行简单介绍，然后举例说明如何在node中进行编解码，最后是服务端的代码案例。本文相关代码示例可在"),n("a",{attrs:{href:"https://github.com/chyingp/nodejs-learning-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("找到。")]),n("h2",{attrs:{id:"关于字符编解码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于字符编解码","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于字符编解码")]),n("p",[t._v("在网络通信的过程中，传输的都是二进制的比特位，不管发送的内容是文本还是图片，采用的语言是中文还是英文。")]),n("p",[t._v('举个例子，客户端向服务端发送"你好"。')]),n("blockquote",[n("p",[t._v("客户端 --- 你好 ---\x3e 服务端")])]),n("p",[t._v("这中间包含了两个关键步骤，分别对应的是编码、解码。")]),n("ol",[n("li",[t._v('客户端：将"你好"这个字符串，编码成计算机网络需要的二进制比特位。')]),n("li",[t._v('服务端：将接收到的二进制比特位，解码成"你好"这个字符串。')])]),n("p",[t._v("总结一下：")]),n("ol",[n("li",[t._v("编码：将需要传送的数据，转成对应的二进制比特位。")]),n("li",[t._v("解码：将二进制比特位，转成原始的数据。")])]),n("p",[t._v("上面有些重要的技术细节没有提到，答案在下一小节。")]),n("ul",[n("li",[t._v('客户端怎么知道"你好"这个字符对应的比特位是多少？')]),n("li",[t._v("服务端收到二进制比特位之后，怎么知道对应的字符串是什么？")])]),n("h2",{attrs:{id:"关于字符集和字符编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于字符集和字符编码","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于字符集和字符编码")]),n("p",[t._v("上面提到字符、二进制的转换问题。既然两者可以互相转换，也就是说存在明确的转换规则，可以实现"),n("strong",[t._v("字符<->二进制")]),t._v("的相互转换。")]),n("p",[t._v("这里提到的转换规则，其实就是我们经常听到的字符集&字符编码。")]),n("p",[n("strong",[t._v("字符集")]),t._v("是一系列字符（文字、标点符号等）的集合。字符集有很多，常见的有ASCII、Unicode、GBK等。不同字符集主要的区别在于包含字符个数的不同。")]),n("p",[t._v("了解了字符集的概念后，接下来介绍下字符编码。")]),n("p",[t._v("字符集告诉我们支持哪些字符，但具体字符怎么编码，是由"),n("strong",[t._v("字符编码")]),t._v("决定的。比如Unicode字符集，支持的字符编码有UTF8(常用)、UTF16、UTF32。")]),n("p",[t._v("概括一下：")]),n("ul",[n("li",[t._v("字符集：字符的集合，不同字符集包含的字符数不同。")]),n("li",[t._v("字符编码：字符集中字符的实际编码方式。")]),n("li",[t._v("一个字符集可能有多种字符编码方式。")])]),n("p",[t._v("可以把字符编码看成一个映射表，客户端、服务端就是根据这个映射表，来实现字符跟二进制的编解码转换。")]),n("p",[t._v('举个例子，"你"这个字符，在UTF8编码中，占据三个字节'),n("code",[t._v("0xe4 0xbd 0xa0")]),t._v("，而在GBK编码中，占据两个字节"),n("code",[t._v("0xc4 0xe3")]),t._v("。")]),n("h2",{attrs:{id:"字符编解码例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符编解码例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符编解码例子")]),n("p",[t._v("上面已经提到了字符编解码所需的基础知识。下面我们看一个简单的例子，这里借助了"),n("code",[t._v("icon-lite")]),t._v("这个库来帮助我们实现编解码的操作。")]),n("p",[t._v("可以看到，在字符编码时，我们采用了"),n("code",[t._v("gbk")]),t._v("。在解码时，如果同样采用"),n("code",[t._v("gbk")]),t._v("，可以得到原始的字符。而当我们解码时采用"),n("code",[t._v("utf8")]),t._v("时，则出现了乱码。")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iconv "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'iconv-lite'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oriText "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'你'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodedBuff "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("encode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oriText"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'gbk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedBuff"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// <Buffer c4 e3>")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" decodedText "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedBuff"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'gbk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decodedText"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 你")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wrongText "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedBuff"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'utf8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrongText"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// ��")]),t._v("\n")])]),n("h2",{attrs:{id:"实际例子：服务端编解码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实际例子：服务端编解码","aria-hidden":"true"}},[t._v("#")]),t._v(" 实际例子：服务端编解码")]),n("p",[t._v("通常我们需要处理编解码的场景有文件读写、网络请求处理。这里距网络请求的例子，介绍如何在服务端进行编解码。")]),n("p",[t._v("假设我们运行着如下http服务，监听来自客户端的请求。客户端传输数据时采用了"),n("code",[t._v("gbk")]),t._v("编码，而服务端默认采用的是"),n("code",[t._v("utf8")]),t._v("编码。")]),n("p",[t._v("如果此时采用默认的"),n("code",[t._v("utf8")]),t._v("对请求进行解码，就会出现乱码，因此需要特殊处理。")]),n("p",[t._v("服务端代码如下（为简化代码，这里跳过了请求方法、请求编码的判断）")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iconv "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'iconv-lite'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 假设客户端采用post方法，编码为gbk")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createServer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" chunks "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'data'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunk"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chunks "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 对二进制进行解码")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("decode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'gbk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'HELLO FROM SERVER'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("p",[t._v("对应的客户端代码如下：")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iconv "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'iconv-lite'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" charset "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'gbk'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v('// 对字符"你"进行编码')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reqBuff "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("encode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'你'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" charset"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hostname"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    port"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'3000'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'POST'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    headers"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'Content-Encoding'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'identity'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'Charset'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" charset "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置请求字符集编码")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("request")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reqBuff"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("h2",{attrs:{id:"相关链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关链接")]),n("p",[t._v("Nodejs学习笔记\nhttps://github.com/chyingp/nodejs-learning-guide")]),n("p",[t._v("iconv-lite\nhttps://github.com/ashtuchkin/iconv-lite")])])}],!1,null,null,null);s.default=o.exports}}]);