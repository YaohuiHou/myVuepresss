# 常见样式问题

## 溢出省略

### 单行溢出省略

`text-overflow` 属性仅是注解，当文本溢出时是否显示省略标记。并不具备其它的样式属性定义。我们想要实现溢出时产生省略号的效果。还必须定义：强制文本在一行内显示（`white-space:nowrap`）及溢出内容为隐藏（`overflow:hidden`）。只有这样才能实现溢出文本显示省略号的效果.

```css
p {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### 多行溢出省略

```css
p {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## list 自动添加数字编号

Ol 中：

```css
ol {
  counter-reset: sort;
}
```

Li 中:

```css
li {
  content: counter(sort);
  counter-increment: sort;
  line-height: 60px;
}
```

## ios 手机端样式

苹果机自带按钮样式的去除：

```css
button {
  appearance: none;
  -webkit-appearance: none;
}
```

苹果机 overflow 卡顿解决：

```css
body {
  -webkit-overflow-scrolling: touch;
}
```

取消字体默认最小 12px 的限制：（ios 字体与实际设置的不同步）

```css
p {
  -webkit-text-size-adjust: none;
}
```

## 文本开头空两格：

```css
.box {
  text-indent: 2em;
}
```

## 字间距：

```css
letter-spacing: 30px;
```

## table 中 td 的合并：

```css
table {
  border-collapse: collapse;
}
```

## textarea 禁止拖动

```css
resize: none;
```

## input 提示语样式：

```css
/* 通用 */
::-webkit-input-placeholder {
  color: #f00;
}
::-moz-placeholder {
  color: #f00;
} /* firefox 19+ */
:-ms-input-placeholder {
  color: #f00;
} /* ie */
input:-moz-placeholder {
  color: #f00;
}
```

## filter

### 毛玻璃效果 blur

给图像设置高斯模糊

```css
img {
  filter: blur(5px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
}
```

### 修改图片的颜色为黑白 grayscale

将图像转换为灰度图像

```css
img {
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%);
}
```

### 调整图像的对比度 contrast / brightness

调整图像的对比度。值是 0%的话，图像会全黑。值是 100%，图像不变。

```css
img {
  filter: brightness(100%);
  /* 或者 */
  filter: contrast(60%);
}
```

### 图片阴影 drop-shadow

drop-shadow(h-shadow v-shadow blur spread color)

```css
img {
  filter: drop-shadow(8px 8px 10px red);
}
```

### 改变图片色相 hue-rotate

"angle"一值设定图像会被调整的色环角度值。值为 0deg，则图像无变化。若值未设置，默认值是 0deg。该值虽然没有最大值，超过 360deg 的值相当于又绕一圈。

```css
img {
  filter: hue-rotate(80deg);
}
```

### 反转输入图像 invert(%)

### 图像的透明度 opacity(%)

### 图像转换为深褐色 sepia(%)

## 混合模式 mix-blend-mode

CSS 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。

```css
img {
  mix-blend-mode: normal; //正常
  mix-blend-mode: multiply; //正片叠底
  mix-blend-mode: screen; //滤色
  mix-blend-mode: overlay; //叠加
  mix-blend-mode: darken; //变暗
  mix-blend-mode: lighten; //变亮
  mix-blend-mode: color-dodge; //颜色减淡
  mix-blend-mode: color-burn; //颜色加深
  mix-blend-mode: hard-light; //强光
  mix-blend-mode: soft-light; //柔光
  mix-blend-mode: difference; //差值
  mix-blend-mode: exclusion; //排除
  mix-blend-mode: hue; //色相
  mix-blend-mode: saturation; //饱和度
  mix-blend-mode: color; //颜色
  mix-blend-mode: luminosity; //亮度

  mix-blend-mode: initial; //初始
  mix-blend-mode: inherit; //继承
  mix-blend-mode: unset; //复原
}
```

[CSS3 mix-blend-mode 混合模式 Demo](http://www.zhangxinxu.com/study/201505/css3-css4-mix-blend-mode.html)

## 渐变

CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。

### 线性渐变 linear-gradient

线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向

#### 从上到下渐变

```css
div {
  background-image: linear-gradient(#e66465, #9198e5);
  /* 或者 */
  background-image: linear-gradient(
    #e66465,
    transparent,
    rgba(255, 0, 0, 1),
    #f19ce0
  );
}
```

#### 从左到右渐变

第一参数 to 方向（top/right/bottom/left）

```css
div {
  background-image: linear-gradient(to right, red, yellow);
}
```

#### 对角渐变

第一参数 to 方向

```css
div {
  background-image: linear-gradient(to bottom right, red, yellow);
}
```

#### 角度渐变

第一参数 角度

```css
div {
  background-image: linear-gradient(-90deg, red, yellow);
}
```

#### 不均匀渐变

颜色结点不均匀分布的渐变：(角度 颜色 , 角度 颜色 , ...)

```css
div {
  background-image: linear-gradient(-90deg, red, yellow);
}
```

### 径向渐变 radial-gradient

径向渐变（Radial Gradients）- 由它们的中心定义

#### 颜色结点均匀分布

```css
div {
  background-image: radial-gradient(red, yellow, green);
}
```

#### 颜色结点不均匀分布

```css
div {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
```

#### 设置形状

shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。

```css
div {
  background-image: radial-gradient(circle, red, yellow, green);
}
```

### 重复性渐变

```css
div {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```
