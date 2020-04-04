# QRCode 二维码生成

## 一：arale-qrcode

[arale-qrcode GitHub 路径](https://github.com/aralejs/qrcode)

```bash
npm i arale-qrcode
```

```html
<html>
  <body>
    <div id="share_tools"></div>
    <script src="qrcode.min.js"></script>
  </body>
  <script type="text/javascript">
    var codeFigure = new AraleQRCode({
      render: 'svg', // 生成的类型 'svg' or 'table'
      text: 'https://github.com/soldair/node-qrcode', // 需要生成二维码的链接
      size: 120 // 生成二维码大小
    })
    var share_tools = document.querySelector('#share_tools')
    share_tools.appendChild(codeFigure)
  </script>
</html>
```

## 二：QRCode.js

[GitHub 地址](https://github.com/davidshimjs/qrcodejs)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <div id="qrcode"></div>
    <script type="text/javascript" src="qrcode.js"></script>
    <script type="text/javascript">
      new QRCode(
        document.getElementById('qrcode'),
        'https://github.com/davidshimjs/qrcodejs'
      )
      var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: '生成二维码的方法不止一种',
        width: 128,
        height: 128,
        colorDark: '#f60',
        colorLight: '#ccc',
        correctLevel: 0 // 二维码结构复杂性 0~3
      })
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191104150804462.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FtaWh1aQ==,size_16,color_FFFFFF,t_70)

## 三：QR 码生成器

[api 简介](http://goqr.me/api/)

```bash
<img style="width: 300px;height: 300px;" src="https://api.qrserver.com/v1/create-qr-code?data=http://goqr.me/api/" >
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191104152724477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FtaWh1aQ==,size_16,color_FFFFFF,t_70)
