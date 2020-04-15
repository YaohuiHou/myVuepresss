(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{481:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"vs-code的使用积累"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-code的使用积累","aria-hidden":"true"}},[t._v("#")]),t._v(" VS Code的使用积累")]),s("h2",{attrs:{id:"常见配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见配置")]),s("p",[s("strong",[t._v("自动保存")]),t._v("：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(' "files.autoSave": "onFocusChange"\n')])]),s("p",[t._v("参考链接："),s("a",{attrs:{href:"https://blog.csdn.net/WestLonly/article/details/78048049",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/WestLonly/article/details/78048049")])]),s("p",[s("strong",[t._v("在新的窗口中打开文件")]),t._v("：")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"workbench.editor.enablePreview"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),s("h2",{attrs:{id:"常见操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见操作")]),s("h3",{attrs:{id:"如何查看代码结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何查看代码结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何查看代码结构")]),s("ul",[s("li",[s("p",[t._v("方法一：「Cmd + Shift + O」")])]),s("li",[s("p",[t._v("方法二：安装插件"),s("code",[t._v("Code Outline")])])])]),s("p",[t._v("参考链接："),s("a",{attrs:{href:"https://www.zhihu.com/question/264045094",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/264045094")])]),s("h3",{attrs:{id:"在本地开启服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在本地开启服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 在本地开启服务器")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -g live-server\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 启动")]),t._v("\nlive-server\n")])]),s("p",[t._v("参考链接："),s("a",{attrs:{href:"http://www.cnblogs.com/1zhk/p/5699379.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code + live-server编辑和浏览HTML网页")])]),s("h2",{attrs:{id:"常用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用插件")]),s("p",[t._v("方式一：打开VS Code，左侧有五个按钮，点击最下方的按钮，然后就可以开始安装相应的插件了。")]),s("p",[t._v("方式二：在vscode中输入快捷键「ctrl+shift+P」，弹出指令窗口，输入"),s("code",[t._v("extension:install")]),t._v("，回车，左侧即打开扩展安装的界面。")]),s("h3",{attrs:{id:"sftp：文件传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sftp：文件传输","aria-hidden":"true"}},[t._v("#")]),t._v(" sftp：文件传输")]),s("p",[t._v("输入快捷键「ctrl+shift+P」，弹出指令窗口，输入"),s("code",[t._v("sftp:config")]),t._v("，回车，当前工作工程的"),s("code",[t._v(".vscode")]),t._v("文件夹下就会自动生成一个"),s("code",[t._v("sftp.json")]),t._v("文件，我们需要在这个文件里配置的是：")]),s("ul",[s("li",[s("p",[s("code",[t._v("host")]),t._v("：服务器的IP地址")])]),s("li",[s("p",[s("code",[t._v("username")]),t._v("：工作站自己的用户名")])]),s("li",[s("p",[s("code",[t._v("privateKeyPath")]),t._v("：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是ppk文件）")])]),s("li",[s("p",[s("code",[t._v("remotePath")]),t._v("：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用sftp上传文件之前，要手动在工作站上mkdir生成这个根目录")])]),s("li",[s("p",[s("code",[t._v("ignore")]),t._v("：指定在使用sftp: sync to remote的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号")])])]),s("p",[t._v("举例如下：(注意，其中的注释不能保留)")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"host"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     //服务器ip\n    "),s("span",{attrs:{class:"token property"}},[t._v('"port"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("22")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     //端口，sftp模式是"),s("span",{attrs:{class:"token number"}},[t._v("22")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"username"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" //用户名\n    "),s("span",{attrs:{class:"token property"}},[t._v('"password"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('""')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" //密码\n    "),s("span",{attrs:{class:"token property"}},[t._v('"protocol"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"sftp"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" //模式\n    "),s("span",{attrs:{class:"token property"}},[t._v('"agent"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token null"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"privateKeyPath"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token null"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"passphrase"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token null"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"passive"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"interactiveAuth"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"remotePath"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"/root/node/build/"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  //服务器上的文件地址\n    "),s("span",{attrs:{class:"token property"}},[t._v('"context"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"./server/build"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        //本地的文件地址\n\n    "),s("span",{attrs:{class:"token property"}},[t._v('"uploadOnSave"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   //监听保存并上传\n    "),s("span",{attrs:{class:"token property"}},[t._v('"syncMode"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"update"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"watcher"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("            //监听外部文件\n        "),s("span",{attrs:{class:"token property"}},[t._v('"files"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     //外部文件的绝对路径\n        "),s("span",{attrs:{class:"token property"}},[t._v('"autoUpload"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"autoDelete"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"ignore"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("             //忽略项\n        "),s("span",{attrs:{class:"token string"}},[t._v('"**/.vscode/**"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"**/.git/**"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"**/.DS_Store"')]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h3",{attrs:{id:"sass-formatter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass-formatter","aria-hidden":"true"}},[t._v("#")]),t._v(" Sass Formatter")]),s("p",[t._v("Sass 文件格式化。")]),s("h3",{attrs:{id:"code-outline：显示代码结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-outline：显示代码结构","aria-hidden":"true"}},[t._v("#")]),t._v(" Code Outline：显示代码结构")]),s("p",[t._v("安装好插件「Code Outline」后，可以在左侧的资源管理器中，显示当前文件的代码结构：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180420_0925.png",alt:""}})]),s("p",[t._v("参考链接：")]),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.zhihu.com/question/50273450",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/50273450")])])]),s("li",[s("p",[s("a",{attrs:{href:"http://itopic.org/vscode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://itopic.org/vscode.html")])])]),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/varHarrie/varharrie.github.io/issues/10",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/varHarrie/varharrie.github.io/issues/10")])])])]),s("h3",{attrs:{id:"vscode-fileheader：添加顶部注释模板-签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vscode-fileheader：添加顶部注释模板-签名","aria-hidden":"true"}},[t._v("#")]),t._v(" vscode-fileheader：添加顶部注释模板(签名)")]),s("p",[t._v("（1）安装插件vscode -fileheader，并重启。")]),s("p",[t._v("（2）在首选项-》设置-》中搜索fileheader，找到头部模板修改。")]),s("p",[t._v("默认的快捷键是：「Ctrl + option + I」。")]),s("p",[t._v("参考链接：")]),s("ul",[s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/62385647",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/62385647")])])]),s("h3",{attrs:{id:"express"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express","aria-hidden":"true"}},[t._v("#")]),t._v(" Express")]),s("p",[t._v("在本地开启Node服务器：")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180611_2230.png",alt:""}})]),s("p",[t._v("然后在浏览器的地址栏输入"),s("code",[t._v("http://localhost/")]),t._v(" + 文件的相对路径，就可以通过服务器的形式打开这个文件。")]),s("h3",{attrs:{id:"copy-relative-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-relative-path","aria-hidden":"true"}},[t._v("#")]),t._v(" Copy Relative Path")]),s("blockquote",[s("p",[t._v("这个插件很有用，使用频率很高。")])]),s("p",[t._v("复制文件的相对路径：（相对于根路径而言）")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180611_2235.png",alt:""}})]),s("h3",{attrs:{id:"open-in-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open-in-browser","aria-hidden":"true"}},[t._v("#")]),t._v(" open in browser")]),s("p",[t._v("在浏览器中打开。")]),s("h3",{attrs:{id:"auto-rename-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-rename-tag","aria-hidden":"true"}},[t._v("#")]),t._v(" Auto Rename Tag")]),s("p",[t._v("适用于 JSX、Vue、HTML。在修改标签名时，能在你修改开始（结束）标签的时候修改对应的结束（开始）标签，帮你减少 50% 的击键。")]),s("p",[t._v("###Project Manager")]),s("p",[t._v("项目管理，让我们方便的在命令面板中切换项目文件夹，当然，你也可以直接打开包含多个项目的父级文件夹，但这样可能会让 VSCode 变慢。")]),s("h3",{attrs:{id:"highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】","aria-hidden":"true"}},[t._v("#")]),t._v(" highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】")]),s("p",[t._v("VSCode自带的高亮显示，实在是不够显眼。用插件支持一下吧。")]),s("p",[t._v("所用了这个插件之后，VS Code自带的高亮就可以关掉了：")]),s("p",[t._v("在用户设置里添加"),s("code",[t._v('"editor.selectionHighlight": false')]),t._v("即可。")]),s("p",[t._v("参考链接："),s("a",{attrs:{href:"https://blog.csdn.net/palmer_kai/article/details/79548164",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode 选中后相同内容高亮插件推荐")])]),s("h3",{attrs:{id:"highlight-words：全局高亮（跨文件多色彩）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#highlight-words：全局高亮（跨文件多色彩）","aria-hidden":"true"}},[t._v("#")]),t._v(" highlight-words：全局高亮（跨文件多色彩）")]),s("p",[t._v("参考链接："),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/31163793",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code全局高亮着色插件(跨文件多色彩)经验纪要")])]),s("h3",{attrs:{id:"color-exchange：颜色格式转换【荐】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#color-exchange：颜色格式转换【荐】","aria-hidden":"true"}},[t._v("#")]),t._v(" color-exchange：颜色格式转换【荐】")]),s("p",[t._v("安装完插件后，在css中输入颜色，然后按"),s("code",[t._v("cmd + .")]),t._v("，就能进行颜色的格式转换。")]),s("p",[t._v("20181013_1450.png")]),s("p",[t._v("我在写这一段时，安装的人还不多，赶紧上车。")]),s("h2",{attrs:{id:"vue-相关的插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-相关的插件","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 相关的插件")]),s("h3",{attrs:{id:"vetur：vue-文件的基本语法高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vetur：vue-文件的基本语法高亮","aria-hidden":"true"}},[t._v("#")]),t._v(" vetur：vue 文件的基本语法高亮")]),s("p",[t._v("安装完 vetur 后还需要加上这样一段配置下：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"emmet.syntaxProfiles": {\n  "vue-html": "html",\n  "vue": "html"\n}\n')])]),s("p",[t._v("参考链接：")]),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/")])])]),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/varHarrie/varharrie.github.io/issues/10",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/varHarrie/varharrie.github.io/issues/10")])])])]),s("h3",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考链接")]),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/0724921285d4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/0724921285d4")])])]),s("li",[s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/AmosLee94/p/8338013.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/AmosLee94/p/8338013.html")])])])]),s("h2",{attrs:{id:"常用快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用快捷键","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用快捷键")]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Win快捷键")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Mac快捷键")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("作用")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Shift + Alt + F")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Shift + option + F")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("代码格式化")]),s("td",{staticStyle:{"text-align":"left"}})]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Ctrl + Shift + N")]),s("td",{staticStyle:{"text-align":"left"}}),s("td",{staticStyle:{"text-align":"left"}},[t._v("在当前行上面增加一行并跳至该行")]),s("td",{staticStyle:{"text-align":"left"}})]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("Ctrl + Shift + D")])]),s("td",{staticStyle:{"text-align":"left"}}),s("td",{staticStyle:{"text-align":"left"}},[t._v("复制当前行到下一行")]),s("td",{staticStyle:{"text-align":"left"}})])])]),s("h3",{attrs:{id:"如何同时打开多个窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何同时打开多个窗口","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何同时打开多个窗口")]),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题")]),s("p",[t._v("问题1")]),s("p",[t._v("解决；You can kill the Microsoft.VSCode.Cpp.IntelliSense.Msvc process to save the file successfully. 也就是 IntelliSense 这个进程。")]),s("h2",{attrs:{id:"参考链接-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考链接")]),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30976584",target:"_blank",rel:"noopener noreferrer"}},[t._v("能让你开发效率翻倍的 VSCode 插件配置（上）")])])]),s("h3",{attrs:{id:"某网友的vs-code-插件截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#某网友的vs-code-插件截图","aria-hidden":"true"}},[t._v("#")]),t._v(" 某网友的VS Code 插件截图")]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180611_2255.png",alt:""}})])])}],!1,null,null,null);a.default=r.exports}}]);