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
    ['script',{ src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',}],
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
            text: 'Html+CSS',
            link: '/Html+CSS/',
          },
          {
            text: 'JavaScript',
            link: '/JavaScript/',
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
            link: '/Python/',
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
      '/JavaScript/': ['string', 'array', 'object', '遍历', 'regex', 'Class'],
      '/Html+CSS/': ['canvas'],
      '/Python/': ['基础语法', '数据类型', '函数'],
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
      '/offer/': getOffer(),
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

function getOffer() {
  let offers = []
  let link = path.resolve(__dirname, '../offer/')

  fs.readdirSync(path.resolve(__dirname, '../offer/')).map((filename) => {
    var stat = fs.lstatSync(`${link}/${filename}`)
    var is_direc = stat.isDirectory() // true || false 判断是不是文件夹
    if (filename.indexOf('.md') == -1 && is_direc) {
      let childs = fs
        .readdirSync(path.resolve(__dirname, '../offer/' + filename + '/'))
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
