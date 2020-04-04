# pagemap.js 页面导航

## [pagemap.js](https://larsjung.de/pagemap/)

pagemap.js 是一款基于 canvas 的 web 页面 mini 导航面板插件。该插件可以为 web 页面制作出类似 sublime 编辑器右侧的 mini 导航面板效果。

[pagemap npm](https://www.npmjs.com/package/pagemap) install

```bash
npm i pagemap
```

**html 导入**

```html
<script type="text/javascript" src="/pagemap.min.js"></script>
```

_或者_

```js
import pagemap from 'pagemap'
```

**html 添加一个 canvas 元素，绘制微地图需要。**

```html
<canvas id="map"></canvas>
```

**CSS 样式**

```css
#map {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  z-index: 100;
}
```

**初始化插件**

```js
pagemap(document.querySelector('#map'))

// 样式可以修改
pagemap(document.querySelector('#map'), {
  viewport: null,
  styles: {
    'header,footer,section,article': 'rgba(0,0,0,0.08)',
    'h1,a': 'rgba(0,0,0,0.10)',
    'h2,h3,h4': 'rgba(0,0,0,0.08)'
  },
  back: 'rgba(0,0,0,0.02)',
  view: 'rgba(0,0,0,0.05)',
  drag: 'rgba(0,0,0,0.10)',
  interval: null
})
```

展示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191017171625965.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FtaWh1aQ==,size_16,color_FFFFFF,t_70)

# [DEMO 地址](https://github.com/YaohuiHou/pagemap)
