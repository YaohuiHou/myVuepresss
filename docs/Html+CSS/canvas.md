# canvas

使用 < canvas > 元素不是非常难，但你需要一些基本的 HTML 和 JavaScript 知识。

[canvas MDN 教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

## 创建 canvas

canvas 有部分浏览器(IE 等)不支持

```html
<!-- 用Javascript操作2D画布 -->
<canvas id="myCanvas" width="800px" height="500px"></canvas>

<script>
  var myCanvas = document.querySelector('#myCanvas')
  // 设置上下文，就相当于打开ps之后让你新建画布
  var ctx = myCanvas.getContext('2d')
</script>
```

## 绘制图形

用 Javascript 操作 2D 画布，在画布绘制

### 矩形 rect

rect(x,y,width,height)

绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。

```js
ctx.rect(20, 10, 30, 60)
ctx.stroke()
```

### 填充矩形 fillRect

fillRect(x, y, width, height) 绘制一个填充的矩形

### 空心矩形 strokeRect

strokeRect(x, y, width, height) 绘制一个矩形的边框

### 清除矩形 clearRect

clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。

### 绘制路径

图形的基本元素是路径。
<br>

绘制路径的步骤：

1. 首先，你需要创建路径起始点。
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

#### 开始这条路线 beginPath()

新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。beginPath()

#### 结束这条路线 closePath()

闭合路径之后图形绘制命令又重新指向到上下文中。closePath()

> 当你调用 fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath()函数。但是调用 stroke()时不会自动闭合。

#### 合并线路 stroke()

通过线条来绘制图形轮廓 stroke()

#### 填充线路 fill()

通过填充路径的内容区域生成实心的图形。fill()

### 画笔移动 moveTo(x,y)

moveTo(x, y) 代表将笔触移动到某一坐标；

当 canvas 初始化或者 beginPath()调用后，你通常会使用 moveTo()函数设置起点。我们也能够使用 moveTo()绘制一些不连续的路径

### 绘制直线 lineTo(x,y)

lineTo(x, y) 绘制一条从当前位置到指定 x 以及 y 位置的直线。

```js
// 绘制实心三角
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(100, 50)
ctx.lineTo(100, 0)
ctx.fill()
```

### 绘制圆弧 arc() / arcTo()

> 注意：arc()函数中表示角的单位是弧度，不是角度。角度与弧度的 js 表达式：弧度=(Math.PI/180)\*角度

#### arc(x, y, radius, startAngle, endAngle, anticlockwise)

- 画一个以（x,y）为圆心
- radius 为半径
- 从 startAngle 开始到 endAngle 结束 （半径圆弧度所在点）
- 按照 anticlockwise 给定的方向（默认为顺时针）来生成。（true/false）

#### arcTo(x1, y1, x2, y2, radius)

根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

```js
ctx.beginPath()
ctx.arcTo(400, 50, 300, 30, 80)
ctx.arcTo(350, 100, 50, 20, 50)
ctx.fill()
```

<br>
<br>

[绘制形状的 demo](https://codepen.io/yaohuihou/pen/QWwbvgQ)

<br>
<br>

### 贝塞尔曲线

二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。[贝塞尔曲线在线绘制](https://cubic-bezier.com)

二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。

#### 二次贝塞尔曲线

quadraticCurveTo(cp1x,cp1y,x,y)

[quadraticCurveTo 在线绘制](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)

- cp1x,cp1y 为一个控制点
- x,y 为结束点。

#### 三次贝塞尔曲线

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

[bezierCurveTo 在线绘制](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)

- cp1x,cp1y 为控制点一
- cp2x,cp2y 为控制点二
- x,y 为结束点。

<br>
<br>

[贝塞尔曲线的 demo](https://codepen.io/yaohuihou/pen/MWYwMZw)

<br>
<br>

## 添加样式

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。

### fillStyle 填充色

### strokeStyle 轮廓色

```js
// 这些 fillStyle 的值均为 '橙色'
ctx.fillStyle = 'orange'
ctx.fillStyle = '#FFA500'
ctx.fillStyle = 'rgb(255,165,0)'
ctx.fillStyle = 'rgba(255,165,0,1)'
```

### globalAlpha 透明度

这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。

```js
// 设置透明度值
ctx.globalAlpha = 0.2
```

### 线条宽度 lineWidth

```js
ctx.lineWidth = 10
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(10, 50)
ctx.stroke()
```

### 线条末端样式 lineCap

指定如何绘制每一条线段末端的属性。有 3 个可能的值，分别是：butt, round and square。默认值是 butt。

```js
// 默认 线段末端以方形结束
ctx.lineCap = 'butt'

// 线段末端以圆形结束
ctx.lineCap = 'round'

// 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。
ctx.lineCap = 'square'
```

### 线条间结合样式 lineJoin

设置 2 个长度不为 0 的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为 0 的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

```js
// 默认
ctx.lineJoin = 'miter'

// 菱形
ctx.lineJoin = 'bevel'

// 圆角
ctx.lineJoin = 'round'
```
