# 图片滤镜使用

[mix-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)混合模式中有一种混合模式名为滤色，单词是 screen，其有一个很有意思的特性表现，那就是黑色和其它元素进行混合的时候表现为透明。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191105182636113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FtaWh1aQ==,size_16,color_FFFFFF,t_70)

```html
<div class="figure">
  <img
    src="https://source.unsplash.com/VW8MUbHyxCU/1920x1080"
    alt=""
    class="image"
  />
  <h1 class="text">Fade-in Text</h1>
</div>
```

```css
.figure {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transform: scale(1.8);
  animation: scaleImage 5s ease-out forwards;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: calc(10px + 8vw);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.05em;
  white-space: nowrap;
  text-transform: uppercase;
  color: #fff;
  background-color: #000;
  mix-blend-mode: multiply;
  opacity: 0;
  margin: 0;
  animation: fadeInText 3s 2s ease-out forwards;
}

@keyframes scaleImage {
  100% {
    transform: scale(1);
  }
}

@keyframes fadeInText {
  100% {
    opacity: 1;
  }
}
```

视频也是也可以直接设置，只要把我们的视频背景色设置为黑色，同时设置如下 CSS 即可：

```css
video {
  mix-blend-mode: screen;
}
```
