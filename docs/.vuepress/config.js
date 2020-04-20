// const { fs, path } = require('vuepress')
const fs = require('fs')
const path = require('path')
module.exports = {
  title: 'Rancho个人主页',
  description: '记录生活，记录成长',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Rancho Life',
      description: '记录生活，记录成长。',
    },
  },
  head: [
    ['link',{rel: 'icon',href: '/img/favicon.ico',}],
    ['script',{ src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',async:'async','data-ad-client':'ca-pub-2789633452670180'}],
    ['script',{ src: 'https://www.googletagmanager.com/gtag/js?id=UA-136059685-1',}],
    ['script',{ src: '/js/ga.ad.js',}],
  ],
  //mac下port未生效
  port: 8080,
  serviceWorker: true,
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-136059685-1',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    //gitc 仓库地址
    repo: 'https://github.com/YaohuiHou/YaohuiHou.github.io',
    //导航栏
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: '技术文档',
        items: [
          {
            text: '前端资源',
            link: '/Html+CSS/',
          },
          {
            text: 'JavaScript',
            link: '/JavaScript/',
          },
          {
            text:'TypeScript',
            link:'https://www.tslang.cn/index.html'
          },
          {
            text:'ES6',
            link: 'http://caibaojian.com/es6/'
          },
          {
            text: 'Node',
            link: '/Node/',
          },
          {
            text: 'SQL',
            link: '/SQL/',
          },
          {
            text: 'Python',
            link: 'https://www.readwithu.com/',
          },
          {
            text:'Flutter',
            link: 'https://flutterchina.club/'
          }
        ],
      },
      {
        text: '秘籍',
        items: [
          {
            text: 'web教程',
            link: '/Web/',
          },
          {
            text: '前端面试复习',
            link: '/offer/',
          },
          {
            text:'前端「壹题」',
            link:'/datum/'
          },
          {
            text:'前端面试每日 3+1',
            link: 'https://github.com/haizlin/fe-interview'
          },
          {
            text:'算法小抄',
            link:'https://labuladong.gitbook.io/algo/'
          },
          {
            text:'免费视频课',
            link:'https://jspang.com/'
          }
        ],
      },
      {
        text: '记录',
        link: '/notes/',
      },
      {
        text: '工具',
        link: '/tool/',
      },
    ],
    sidebar: {
      '/JavaScript/': ['string', 'array', 'object', '遍历', 'regex'],
      '/notes/': [
        '组件',
        '微信分享',
        'js复制到剪贴板',
        'axios',
        'vue-IE',
        'git常用命令',
        'git遇到的问题',
        'mac下xcrun:error',
        'MarkDown编辑高亮',
        '常见前端名词',
        '常见CSS问题',
        'QRCode',
        'css图片滤镜',
        'pagemap',
      ],
      '/Web/': getWebInfo(),
      '/offer/': getOffer('offer'),
      '/Node/': getNode(),
      '/datum/': [
      {
        title: '前端面试题',
        collapsable: false,
        children: ['summary','JavaScript'],
      }
      ]
    },
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: true, // string | boolean
    displayAllHeaders: true,
    // 主题级别的 serviceWorker
    serviceWorker: {
      // Boolean | Object, 默认值是 undefined.
      updatePopup: {
        message: '页面有更新哦~',
        buttonText: '更新',
      },
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    // 自定义项目仓库链接文字
    // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
    repoLabel: '贡献代码！',

    // 以下为可选的 "Edit this page" 链接选项

    // 如果你的文档和项目位于不同仓库：
    docsRepo: 'YaohuiHou/YaohuiHou.github.io',
    // 如果你的文档不在仓库的根目录下：
    docsDir: 'docs',
    // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
    docsBranch: 'master',
    // 默认为 false，设置为 true 来启用
    editLinks: true,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '帮助我们改进页面内容！',
  },
}

function getWebInfo() {
  let officalPluginsChilds = []
  let nameArr = [
    '',
    '前端工具',
    'HTML',
    'CSS基础',
    'CSS进阶',
    'JavaScript基础',
    'JavaScript进阶',
    '前端基本功：CSS+DOM',
    'jQuery',
    '移动端web开发',
    'Ajax',
    'ES6',
    'Node.js和模块化',
    'Vue基础',
    'React基础',
    '前端面试',
    '面试题积累',
    '前端进阶',
    '前端综合',
    '推荐链接',
  ]
  let link = path.resolve(__dirname, '../Web/')

  fs.readdirSync(path.resolve(__dirname, '../Web/')).map((filename, index) => {
    var fname = nameArr[index]
    var stat = fs.lstatSync(`${link}/${filename}`)
    var is_direc = stat.isDirectory() // true || false 判断是不是文件夹
    if (filename.indexOf('.md') == -1 && is_direc) {
      let childs = fs
        .readdirSync(path.resolve(__dirname, '../Web/' + filename + '/'))
        .map((name) => {
          return filename + '/' + name.slice(0, -3)
        })
        .sort()

      let o = {
        title: fname,
        collapsable: false,
        children: childs,
      }
      officalPluginsChilds.push(o)
    }
  })
  return officalPluginsChilds
}

function getOffer(getName) {
  let offers = []
  let link = path.resolve(__dirname, `../${getName}/`)

  fs.readdirSync(path.resolve(__dirname, `../${getName}/`)).map((filename) => {
    var stat = fs.lstatSync(`${link}/${filename}`)
    var is_direc = stat.isDirectory() // true || false 判断是不是文件夹
    if (filename.indexOf('.md') == -1 && is_direc) {
      let childs = fs
        .readdirSync(path.resolve(__dirname, `../${getName}/${filename}/`))
        .map((name) => {
          return filename + '/' + name.slice(0, -3)
        })
        .sort()

      let o = {
        title: filename,
        collapsable: false,
        children: childs,
      }
      offers.push(o)
    }
  })
  return offers
}

function getNode() {
  let arr =  [
  ,['资源压缩-zlib',
  '/模块/zlib.md']
  ,['文件系统操作-fs',
  '/模块/fs.md']
  ,['域名解析-dns',
  '/模块/dns.md']
  ,['网络服务-http',
  '/模块/http.md']
  ,['网络服务-http-req',
  '/模块/http.req.md']
  ,['网络服务-http-res',
  '/模块/http.res.md']
  ,['网络服务-http-client',
  '/模块/http.client.md']
  ,['网络服务-http-server',
  '/模块/http.server.md']
  ,['网络服务-https',
  '/模块/https.md']
  ,['网络TCP-net',
  '/模块/net.md']
  ,['网络UDP-dgram',
  '/模块/dgram.md']
  ,['网络地址解析-url',
  '/模块/url.md']
  ,['数据加密-crypto',
  '/模块/crypto.md']
  ,['URL查询字符串-querystring',
  '/模块/querystring.md']
  ,['二进制数据-buffer',
  '/模块/buffer.md']
  ,['子进程-child_process',
  '/模块/child_process.md']
  ,['进程相关-process',
  '/模块/process.md']
  ,['集群-cluster',
  '/模块/cluster.md']
  ,['基础调试-console',
  '/模块/console.md']
  ,['进阶调试-debugger',
  '/模块/debug.md'],
  ,['事件机制-events',
  '/模块/events.md'],
  ,['本地路径处理-path',
  '/模块/path.md']
  ,['逐行读取-readline',
  '/模块/readline.md'],
  ,['实用工具模块-util',
  '/模块/util.md']
  ,['流操作-stream',
  '/模块/stream.md']
  ,['二进制解码-string_decoder',
  '/模块/string_decoder.md'],
  ,['Nodejs进阶：服务端字符编解码&乱码处理',
  '/进阶/charset-enc-dec.md']
  ,['Nodejs进阶：MD5入门介绍及crypto模块的应用',
  '/模块/crypto.md5.md']
  ,['Nodejs 进阶：Express 常用中间件 body-parser 实现解析',
  '/进阶/body-parser.md']
  ,['基于express+muter的文件上传',
  '/进阶/文件上传-multer.md']
  ,['将图片转成datauri嵌入到html',
  '/进阶/图片地址转成datauri.md']
  ,['本地调试远程服务器上的Node代码',
  '/模块/debug.md']
  ,['express+session实现简易身份认证',
  '/进阶/express+session实现简易身份认证.md']
  ,['express+morgan：从入门使用到源码剖析',
  '/进阶/日志模块morgan.md']
  ,['express+cookie-parser：签名机制深入剖析','/进阶/cookie-parser-deep-in.md']
  ,['Nodejs 进阶：log4js入门实例','/进阶/log4js.md']
  ,['调试日志打印：debug模块','/进阶/debug-log.md']
  ,['Nodejs进阶：crypto模块之理论篇','/进阶/crypto-theory.md']
  ,['Nodejs进阶：5分钟入门非对称加密用法','/进阶/asymmetric-enc-dec.md']
]
  let childs = []
  arr.forEach(item=>{
    childs.push(item[1].slice(1, -3))
  })
  return [
      {
        title: '学习',
        collapsable: false,
        children: childs,
      }
    ];
}