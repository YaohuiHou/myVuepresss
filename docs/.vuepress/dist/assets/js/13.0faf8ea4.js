(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{715:function(t,r,a){"use strict";a.r(r);var s=a(1),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios","aria-hidden":"true"}},[t._v("#")]),t._v(" axios")]),a("p",[t._v("axios 数据请求是前端开发必不可少的一部分，由于公司业务要求，需要兼容到 IE9+，前后端分离接口跨域处理一般都在用 CORS 通信解决，解决 IE 问题只能使用 jsonp，在这里做一个总结：")]),a("p",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios 地址：https://github.com/axios/axios")])]),a("h2",{attrs:{id:"browser-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-support","aria-hidden":"true"}},[t._v("#")]),t._v(" Browser Support")]),a("table",[a("thead",[a("tr",[a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome"}})]),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox"}})]),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari"}})]),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera"}})]),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"Edge"}})]),a("th",[a("img",{attrs:{src:"https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png",alt:"IE"}})])])]),a("tbody",[a("tr",[a("td",[t._v("Latest ✔")]),a("td",[t._v("Latest ✔")]),a("td",[t._v("Latest ✔")]),a("td",[t._v("Latest ✔")]),a("td",[t._v("Latest ✔")]),a("td",[t._v("8+ ✔")])])])]),a("p",[a("a",{attrs:{href:"https://saucelabs.com/u/axios",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://saucelabs.com/open_sauce/build_matrix/axios.svg",alt:"Browser Matrix"}})])]),a("ul",[a("li",[t._v("npm 安装")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install axios\n")])]),a("p",[t._v("axios 官网说明是兼容到 ie8 的，不过是基于 Promess 实现的，所以 ie 兼容会有问题；")]),a("ul",[a("li",[t._v("1 安装 babel-polyfill "),a("a",{attrs:{href:"https://babeljs.io/docs/usage/polyfill/",target:"_blank",rel:"noopener noreferrer"}},[t._v("polyfill")])])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install babel-polyfill\n")])]),a("ul",[a("li",[t._v("2 修改 build 配置环境 webpack.base.conf.js")])]),a("p",[a("img",{attrs:{src:"https://github.com/YaohuiHou/Frontend-Study/blob/master/vue/axios/img/WechatIMG128.jpeg",alt:""}})]),a("ul",[a("li",[t._v("3 增加 axios 的 jsonp 方法")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install axios-jsonp\n")])]),a("p",[t._v("这是重新启动使用 jsonp 方式请求就可以兼容到 ie8 了,在需要的地方调用")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import axios from 'axios'\nimport jsonpAdapter from 'axios-jsonp'\n")])]),a("p",[t._v("axios 请求：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  axios({\n      url: url,\n      adapter: jsonpAdapter,\n      params: {}\n  })\n  .then()\n  .catch();\n")])]),a("p",[t._v("在这里用到了 babel 解决兼容问题，axios-jsonp 做了 jsonp 请求扩展；")])])}],!1,null,null,null);r.default=e.exports}}]);