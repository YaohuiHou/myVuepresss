(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{719:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"git-配置-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-配置-ssh","aria-hidden":"true"}},[s._v("#")]),s._v(" git 配置 SSH")]),t("h2",{attrs:{id:"配置-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 SSH")]),t("p",[s._v("如果您还没有 SSH 密钥，则必须生成新的 SSH 密钥。如果您不确定是否已有 SSH 密钥，请检查现有密钥。")]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("# 查看.ssh中的文件")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" ~/.ssh\n"),t("span",{attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("# 查看其中是否有.pub 文件")]),s._v("\nconfig        id_rsa.pub    known_hosts   id_rsa        id_rsa_docker qyer_config\n")])]),t("p",[s._v("如果没有.pub 文件，或者打开.pub 查看是否为：")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ssh-rsa AA2AB3NzaC1yc2EAAAADAQABAAACAQCwe9j6WVE2HsZ1lHgdiy4kphikQx+vqBe/H17Ow9v4t6oCVbiC9aPVRfB1HuaXBpp8Ff95FC3eRGJGJmK599GsoLUahsJ7AVL7u9bZNmvzIjt3KA5OnNMrGdTX0iYGTDZOfM/G5goIsZHUmooUSX/8Um0CaR6yf0ovQfluUadj8TSYrfdck2LJsfVARC3xTl3rNPeJJM3ZIsAB+vTVT0AFoZXfrf1dvFOe70yyRcWIqymGB0zZ2sQqNJ1wOm6MZzXlob+VUs6d+iy392X+F12rkmNxZvyHUNnAY/mrroCQGGZoQkAK3IRS12iCfvQZN60rW6wBTu6SADirIx10NqcCvPfBjcAalkGFSr7wExN39YY0Hovuw2Xi7OolI812jyB2TbPeK2FgBorHQ7s67Uloy5p2Auq/bqKU+8OOqhEmuZ+KF2bFdvHlWqCmFDP4L/X6aluZJIqNoD0Poe3AYp+r927UF3yMZpjdnjmGQY4uZjVDCrVQ8MMXLi2BK2JcVYNQUGo12TBEQWx75coqEDsl2WEEAt3fbN9IgbSbgQcYZqW7zLUOtut659xrsS6SlgD3wNtYb3z2QmVat01ITLTsvn1X920Ru3uQmKuq7PG2cUeeQfe2AXtRoGW+lokT7aqRTUYEcfj+WHqNeA/knGG56a6BHVe7cVGS9QB2aEqA7XwHgEEGtmQ== your_email@example.com\n")])]),t("h2",{attrs:{id:"如果需要新的-ssh-密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果需要新的-ssh-密钥","aria-hidden":"true"}},[s._v("#")]),s._v(" 如果需要新的 SSH 密钥")]),t("ul",[t("li",[s._v("打开终端")]),t("li",[s._v("粘贴下面的文本，替换您的 GitHub 电子邮件地址。")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ssh-keygen -t rsa -b 4096 -C "),t("span",{attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])]),t("p",[s._v("这将使用提供的电子邮件作为标签创建一个新的 ssh 密钥。")]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" Generating public/private rsa key pair.\n")])]),t("ul",[t("li",[s._v("当系统提示您“输入要保存密钥的文件”时，按 Enter 键。这接受默认文件位置。")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter a "),t("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/you/.ssh/id_rsa"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Press enter"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),t("ul",[t("li",[s._v("在提示符下，键入安全密码。")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter passphrase "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),t("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Type a passphrase"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter same passphrase again: "),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Type passphrase again"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),t("h2",{attrs:{id:"将-ssh-密钥添加到-ssh-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-ssh-密钥添加到-ssh-agent","aria-hidden":"true"}},[s._v("#")]),s._v(" 将 SSH 密钥添加到 ssh-agent")]),t("p",[s._v("在将新的 SSH 密钥添加到 ssh-agent 以管理密钥之前，您应该检查现有的 SSH 密钥并生成新的 SSH 密钥。将 SSH 密钥添加到代理时，请使用默认的 macOS ssh-add 命令，而不是 macports，homebrew 或其他外部源安装的应用程序。")]),t("p",[s._v("如果您不想在每次使用 SSH 密钥时重新输入密码，则可以将密钥添加到 SSH 代理，SSH 代理管理您的 SSH 密钥并记住您的密码。")]),t("ul",[t("li",[s._v("在后台启动 ssh-agent。")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("~ "),t("span",{attrs:{class:"token function"}},[s._v("eval")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"'),t("span",{attrs:{class:"token variable"}},[t("span",{attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),t("span",{attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" Agent pid 59566\n")])]),t("ul",[t("li",[s._v("如果您使用的是 macOS Sierra 10.12.2 或更高版本，则需要修改~/.ssh/config 文件以自动将密钥加载到 ssh-agent 中并在密钥链中存储密码。")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Host *\n  AddKeysToAgent "),t("span",{attrs:{class:"token function"}},[s._v("yes")]),s._v("\n  UseKeychain "),t("span",{attrs:{class:"token function"}},[s._v("yes")]),s._v("\n  IdentityFile ~/.ssh/id_rsa\n")])]),t("p",[t("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-configure-custom-connection-options-for-your-ssh-client",target:"_blank",rel:"noopener noreferrer"}},[s._v("config 参数解释：")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Host "),t("span",{attrs:{class:"token comment"}},[s._v("#主机名")]),s._v("\nUser "),t("span",{attrs:{class:"token comment"}},[s._v("#访问账户")]),s._v("\nHostname  "),t("span",{attrs:{class:"token comment"}},[s._v("#ip或域名")]),s._v("\nPort  "),t("span",{attrs:{class:"token comment"}},[s._v("#端口")]),s._v("\nPreferredAuthentications "),t("span",{attrs:{class:"token comment"}},[s._v("#优先认证方式 这里填publickey")]),s._v("\nIdentityFile "),t("span",{attrs:{class:"token comment"}},[s._v("#本地私钥地址")]),s._v("\nUseKeychain "),t("span",{attrs:{class:"token comment"}},[s._v("#是否使用钥匙串")]),s._v("\nAddKeysToAgent "),t("span",{attrs:{class:"token comment"}},[s._v("#是否添加到钥匙串")]),s._v("\n")])]),t("ul",[t("li",[s._v("将 SSH 私钥添加到 ssh-agent 并将密码存储在密钥链中。如果使用其他名称创建密钥，或者要添加具有不同名称的现有密钥，请将命令中的 id_rsa 替换为私钥文件的名称。")])]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("~ ssh-add -K ~/.ssh/id_rsa\n")])])])}],!1,null,null,null);a.default=e.exports}}]);