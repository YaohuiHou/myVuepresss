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

### 虚线 setLineDash 和 LineDashOffset

用 setLineDash 方法和 lineDashOffset 属性制定虚线样式。

- setLineDash 方法接受一个数组，用来指定线段与间隙的交替
- lineDashOffset 属性设置起始偏移量。

```js
ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.setLineDash([4, 2])
ctx.lineDashOffset = -offset
ctx.strokeRect(10, 10, 100, 100)
```

### 渐变 Gradients

createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。

```js
createLinearGradient(x1, y1, x2, y2)
```

示例：

```js
var lingrad = ctx.createLinearGradient(0, 0, 0, 150)
lingrad.addColorStop(0, '#00ABEB')
lingrad.addColorStop(0.5, '#f60')
lingrad.addColorStop(0.5, '#26C000')
lingrad.addColorStop(1, 'blue')

var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95)
lingrad2.addColorStop(0.5, '#000')
lingrad2.addColorStop(1, 'rgba(0,0,0,0.3)')

// 添加样式
ctx.fillStyle = lingrad
ctx.strokeStyle = lingrad2

// 画框
ctx.fillRect(10, 10, 130, 130)
ctx.strokeRect(50, 50, 50, 50)
```

createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

```js
createRadialGradient(x1, y1, r1, x2, y2, r2)
```

示例：

```js
var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30)
radgrad.addColorStop(0, '#A7D30C')
radgrad.addColorStop(0.9, '#019F62')
radgrad.addColorStop(1, 'rgba(1,159,98,0)')

ctx.fillStyle = radgrad
ctx.fillRect(0, 0, 150, 150)
```

### 图案样式 Patterns

该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。

```js
createPattern(image, type)
```

示例：创建一个图案，赋值给 fillStyle 属性

```js
// 创建新 image 对象，用作图案
var img = new Image()
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png'
img.onload = function() {
  // 创建图案
  var ptrn = ctx.createPattern(img, 'repeat')
  ctx.fillStyle = ptrn
  ctx.fillRect(0, 0, 150, 150)
}
```

### 阴影 shadows

shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

```js
shadowOffsetX = float
```

shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。

```js
shadowOffsetY = float
```

shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。

```js
shadowBlur = float
```

shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。

```js
shadowColor = color
```

文字阴影示例：

```js
ctx.shadowOffsetX = 2
ctx.shadowOffsetY = 2
ctx.shadowBlur = 2
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'

ctx.font = '20px Times New Roman'
ctx.fillStyle = 'Black'
ctx.fillText('Sample String', 5, 30)
```

## 绘制文本

### fillText

在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.

```js
fillText(text, x, y [, maxWidth])
```

### strokeText

在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.

```js
strokeText(text, x, y [, maxWidth])
```

示例：

```js
ctx.font = '48px serif'
ctx.strokeText('Hello world', 10, 50)
```

### font

绘制文本的样式，这个字符串使用和 CSS 的 font 属性相同的语法。

### textAlign

文本对齐，可选值包括：start、end、left、right、center

### textBaseline

基线对齐选项，可选值包括：top、hanging、middle、alphabetic、 ideographic、 bottom

### direction

文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。

## 绘制图片

- 使用相同页面内的图片
- 使用其他域名下的图片：需要图片的服务器允许跨域访问这个图片
- 通过 base64 嵌入图像
- 使用视频帧

### drawImage

其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

```js
drawImage(image, x, y)
```

### 缩放 scaling

drawImage 方法的又一变种是增加两个用于控制图片在 canvas 中的缩放的参数。

```js
// width 和 height，这两个参数用来控制 当向canvas画入时应该缩放的大小
drawImage(image, x, y, width, height)
```

### 切片 slicing

```js
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

- image: 使用的图片、画布或视频
- sx: 可选。开始剪切的 X 坐标位置
- sy: 可选。开始剪切的 Y 坐标位置
- swidth: 可选。剪切的图片宽度
- sheight: 可选。剪切的图片高度
- dx: 在画布上放置图片的 x 坐标
- dy: 在画布上放置图片的 y 坐标
- swidth: 可选。要使用的图像的宽度。（伸展或缩小图像）
- sheight: 可选。要使用的图像的高度。（伸展或缩小图像）

## 状态、变形

### save()

保存画布的所有状态

### restore()

save 和 restore 方法是用来保存和恢复 canvas 状态的，无参数。canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

```js
ctx.fillRect(0, 0, 150, 150) // 使用默认设置绘制一个矩形
ctx.save() // 保存默认状态

ctx.fillStyle = '#09F' // 在原有配置基础上对颜色做改变
ctx.fillRect(15, 15, 120, 120) // 使用新的设置绘制一个矩形

ctx.save() // 保存当前状态
ctx.fillStyle = '#FFF' // 再次改变颜色配置
ctx.globalAlpha = 0.5
ctx.fillRect(30, 30, 90, 90) // 使用新的配置绘制一个矩形

ctx.restore() // 重新加载之前的颜色状态
ctx.fillRect(45, 45, 60, 60) // 使用上一次的配置绘制一个矩形

ctx.restore() // 加载默认颜色配置
ctx.fillRect(60, 60, 30, 30) // 使用加载的配置绘制一个矩形
```

### 移动 translating

用来移动 canvas 和他的原点到一个不同的位置。

```js
translate(x, y)
```

如果不使用 translate 方法，那么所有矩形都将被绘制在相同的位置（0,0）。translate 方法同时让我们可以任意放置这些图案，而不需要在 fillRect() 方法中手工调整坐标值，既好理解也方便使用。

### 旋转 rotating

用于以原点为中心旋转 canvas。

旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate 方法。

```js
// 旋转的角度(angle)
rotate(angle)
```

### 缩放 scaling

scale 方法可以缩放画布的水平和垂直的单位。

两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会比缩放图形， 如果比 1 大会放大图形。默认值为 1， 为实际大小。

```js
scale(x, y)
```

### 变形 transforms

允许对变形矩阵直接修改。

```js
transform(m11, m12, m21, m22, dx, dy)
```

- m11：水平方向的缩放
- m12：水平方向的倾斜偏移
- m21：竖直方向的倾斜偏移
- m22：竖直方向的缩放
- dx：水平方向的移动
- dy：竖直方向的移动

重置当前变形为单位矩阵：

```js
resetTransform()
```

从新设置当前的变形：

```js
setTransform(m11, m12, m21, m22, dx, dy)
```
