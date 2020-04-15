(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{240:function(t,e,r){"use strict";r.r(e);var a=r(1),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"常用工具知识总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用工具知识总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具知识总结")]),r("p",[t._v("本部分主要是笔者关于常用工具所做的笔记，如果出现错误，希望大家指出！")]),r("h3",{attrs:{id:"目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录")]),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#常用工具知识总结"}},[t._v("常用工具知识总结")]),r("ul",[r("li",[r("a",{attrs:{href:"#目录"}},[t._v("目录")])]),r("li",[r("a",{attrs:{href:"#git"}},[t._v("GIT")])])])])])]),r("p"),r("h3",{attrs:{id:"git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" GIT")]),r("h4",{attrs:{id:"_1-git-与-svn-的区别在哪里？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-与-svn-的区别在哪里？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. git 与 svn 的区别在哪里？")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git 和 svn 最大的区别在于 git 是分布式的，而 svn 是集中式的。因此我们不能再离线的情况下使用 svn。如果服务器\n出现问题，我们就没有办法使用 svn 来提交我们的代码。\n\nsvn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此 git 的分支创建更加开销更小\n并且分支上的变化不会影响到其他人。svn 的分支变化会影响到所有的人。\n\nsvn 的指令相对于 git 来说要简单一些，比 git 更容易上手。\n")])]),r("p",[t._v("详细资料可以参考：\n"),r("a",{attrs:{href:"https://github.com/geeeeeeeeek/git-recipes/wiki/3.5-%E5%B8%B8%E8%A7%81%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%AF%94%E8%BE%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("《常见工作流比较》")]),r("a",{attrs:{href:"https://juejin.im/post/5bd95bf4f265da392c5307eb",target:"_blank",rel:"noopener noreferrer"}},[t._v("《对比 Git 与 SVN，这篇讲的很易懂》")]),r("a",{attrs:{href:"https://blog.csdn.net/github_33304260/article/details/80171456",target:"_blank",rel:"noopener noreferrer"}},[t._v("《GIT 与 SVN 世纪大战》")]),r("a",{attrs:{href:"https://www.jianshu.com/p/e8ad60710017",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Git 学习小记之分支原理》")])]),r("h4",{attrs:{id:"_2-经常使用的-git-命令？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-经常使用的-git-命令？","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 经常使用的 git 命令？")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git init                     // 新建 git 代码库\ngit add                      // 添加指定文件到暂存区\ngit rm                       // 删除工作区文件，并且将这次删除放入暂存区\ngit commit -m [message]      // 提交暂存区到仓库区\ngit branch                   // 列出所有分支\ngit checkout -b [branch]     // 新建一个分支，并切换到该分支\ngit status                   // 显示有变更的文件\n")])]),r("p",[t._v("详细资料可以参考：\n"),r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《常用 Git 命令清单》")])]),r("h4",{attrs:{id:"_3-git-pull-和-git-fetch-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-pull-和-git-fetch-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. git pull 和 git fetch 的区别")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git fetch 只是将远程仓库的变化下载下来，并没有和本地分支合并。\n\ngit pull 会将远程仓库的变化下载下来，并和当前分支合并。\n")])]),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_41975655/article/details/82887273",target:"_blank",rel:"noopener noreferrer"}},[t._v("《详解 git pull 和 git fetch 的区别》")])]),r("h4",{attrs:{id:"_4-git-rebase-和-git-merge-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-git-rebase-和-git-merge-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. git rebase 和 git merge 的区别")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git merge 和 git rebase 都是用于分支合并，关键在 commit 记录的处理上不同。\n\ngit merge 会新建一个新的 commit 对象，然后两个分支以前的 commit 记录都指向这个新 commit 记录。这种方法会\n保留之前每个分支的 commit 历史。\n\ngit rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后\n将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记\n录了。\n")])]),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/f23f72251abc",target:"_blank",rel:"noopener noreferrer"}},[t._v("《git rebase 和 git merge 的区别》")]),r("a",{attrs:{href:"https://blog.csdn.net/liuxiaoheng1992/article/details/79108233",target:"_blank",rel:"noopener noreferrer"}},[t._v("《git merge 与 git rebase 的区别》")])])])}],!1,null,null,null);e.default=i.exports}}]);