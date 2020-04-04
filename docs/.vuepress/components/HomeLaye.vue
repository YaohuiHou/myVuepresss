<template>
  <div class="home-laye">
    <main class="resume">
      <section id="introduction">
        <article class="resume-self" id="self">
          <img class="logo" src="../public/img/wo.jpg" />
          <div class="title">侯耀辉 Rancho</div>
          <div class="sub">🌈 前端开发</div>
          <div class="description">
            <ul class="contact-list">
              <li class="contact-list-item">
                <a href="mailto:amihui494@163.com">amihui494@163.com</a>
              </li>
              <li class="contact-list-item">
                <a href="https://github.com/YaohuiHou">GitHub</a>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section id="work">
        <h1 class="title">工作</h1>
        <div class="sub">Work</div>
        <article class="resume-work">
          <img class="logo" src="../public/img/qyer.jpg" />
          <div class="title">前端开发</div>
          <div class="sub">
            <a href="https://www.qyer.com">穷游网</a>
          </div>
          <div class="time">2018.09 -</div>
          <div class="description">
            <p>负责广告平台开发与迭代，栏目、定制化广告专题开发，微信小程序、办公工具类开发</p>
          </div>
        </article>
        <article class="resume-work">
          <img class="logo" src="../public/img/tiejia.jpeg" />
          <div class="title">前端开发</div>
          <div class="sub">
            <a href="https://www.cehome.com/">铁甲网</a>
          </div>
          <div class="time">2018.05 - 2018.09</div>
          <div class="description">
            <p>为公司引入小程序开发，独立开发了二手机小程序后，开始了疯狂的小程序开发：铁甲云租赁(工程方/设备方)、工程机械产品库、挖机小工具、铁甲网、替班班</p>
          </div>
        </article>
        <article class="resume-work">
          <img class="logo" src="../public/img/360che.jpeg" />
          <div class="title">前端开发</div>
          <div class="sub">
            <a href="https://www.360che.com/">卡车之家</a>
          </div>
          <div class="time">2015.12 - 2018.04</div>
          <div class="description">
            <p>卡车之家是卡车资讯类网站平台，作为部门第3位前端开发，见证了公司前端技术由无到盛的变革，也是自己技术成长最快的时期。期间负责过商配专题、车商城、问答论坛等项目组。为新人做技术培训。</p>
          </div>
        </article>
        <article class="resume-work">
          <img class="logo" src="../public/img/hua.jpeg" />
          <div class="title">中央控制员</div>
          <div class="sub">
            <a href="http://www.crc.com.hk/">华润集团</a>
          </div>
          <div class="time">2013 - 2015</div>
          <div class="description">
            <p>大学招聘实习生进入华润，后转正成为一名中控技术员。</p>
          </div>
        </article>
      </section>
      <section id="education">
        <h1 class="title">教育经历</h1>
        <div class="sub">Education</div>
        <article class="resume-education" id="master">
          <img class="logo" src="../public/img/dongbei.jpeg" />
          <div class="title">东北农业大学</div>
          <div class="sub">计算机科学与技术专业</div>
          <div class="time">2017 - 2020</div>
          <div class="description">
            <p>自考本科</p>
          </div>
        </article>
        <article class="resume-education" id="bachelor">
          <img class="logo" src="../public/img/shanxi.jpg" />
          <div class="title">山西职业技术学院</div>
          <div class="sub">材料工程专业</div>
          <div class="time">2011 - 2014</div>
          <div class="description">
            <p>统招大专</p>
          </div>
        </article>
      </section>
    </main>
    <!-- <canvas id="mycanvas" :width="canvasWidth" :height="canvasHeight"></canvas> -->
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

export default {
  data() {
    return {
      canvasWidth: "",
      canvasHeight: "",
      tabs: ["年轻有为", "前端开发", "男神", "善良亲和爱你们", "推动人类进步"],
      skillList: [
        {
          name: "VUE",
          progress: 70,
          color: "#409EFF"
        },
        {
          name: "JavaScript",
          progress: 80,
          color: "#409EFF"
        },
        {
          name: "jQuery",
          progress: 80,
          color: "#409EFF"
        },
        {
          name: "HTML",
          progress: 90,
          color: "#409EFF"
        },
        {
          name: "CSS",
          progress: 80,
          color: "#409EFF"
        },
        {
          name: "Python",
          progress: 50,
          color: "#409EFF"
        },
        {
          name: "nodeJs",
          progress: 30,
          color: "#409EFF"
        },
        {
          name: "mySql",
          progress: 10,
          color: "#409EFF"
        }
      ]
    };
  },
  mounted() {
    // this.gatag();
    // document.querySelector(".home").classList.add("home-view-one");
    // this.globule();
  },
  methods: {
    // ga统计
    gatag() {
      var script = document.createElement("script"); //1、创建元素
      script.src = "https://www.googletagmanager.com/gtag/js?id=UA-136059685-1";
      var body = document.querySelector("body"); //2、找到父级元素
      body.appendChild(script);
      setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-136059685-1");
      }, 300);
    },
    globule() {
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
      var mycanvas = document.getElementById("mycanvas");

      var ctx = mycanvas.getContext("2d");
      //圆形类
      function Circle(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        // 颜色的取值范围
        this.color =
          "rgb(" +
          parseInt(Math.random() * 255) +
          "," +
          parseInt(Math.random() * 255) +
          "," +
          parseInt(Math.random() * 255) +
          ")";
        //随机方向
        this.dx = Math.random() * 12 - 7;
        this.dy = Math.random() * 12 - 7;
        //往数组中push自己
        circleArr.push(this);
      }
      //渲染
      Circle.prototype.render = function() {
        //新建一条路径
        ctx.beginPath();
        //创建一个圆
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        //设置样式颜色
        ctx.fillStyle = this.color;
        //通过填充路径的内容区域生成实心的图形
        ctx.fill();
      };
      //更新
      Circle.prototype.update = function() {
        this.x += this.dx / 2;
        this.y += this.dy / 2;
        this.r--;
        if (this.r < 0) {
          for (var i = 0; i < circleArr.length; i++) {
            if (circleArr[i] === this) {
              circleArr.splice(i, 1);
            }
          }
          return false;
        }
        return true;
      };
      //创建一个数组
      var circleArr = [];
      //鼠标移动事件
      mycanvas.onmousemove = function(event) {
        new Circle(event.clientX, event.clientY, 10, "orange");
      };
      //设置定时器每20毫秒更新和渲染
      setInterval(function() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (var i = 0; i < circleArr.length; i++) {
          circleArr[i].update() && circleArr[i].render();
        }
      }, 50);
    }
  }
};
</script>
<style lang="less">
/* BASIC */

:root {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
}

.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 10;
  top: 0;
  left: 0;
  text-align: center;
  padding-top: 30vh;
  transition: all 0.3s;
}

.cover.done {
  opacity: 0;
  z-index: -1;
}

.cover blockquote {
  color: #637282;
  font-style: italic;
}

/* 
 * EN
 */

/* LAYOUT */

.en body {
  margin: 0;
  padding: 0;
}

.en main {
  width: 825px;
  max-width: 100%;
  margin: 2em auto;
  padding: 40px;
}

/* Typography */

.en a {
  color: #0070e0;
  text-decoration: none;
}

/* TIMELINE */

.en .social-link + .social-link {
  margin-left: 1em;
}

.en .timeline {
}

.en .stories {
  list-style: none;
  padding-left: 0;
}

.en .stories .story {
  position: relative;
  margin: 3em 0;
}

.en .story.highlight:after {
  content: "⊙";
  position: absolute;
  left: -1.5em;
  top: -0.25em;
  transition: all 0.3s;
}

.en .story.highlight:hover:after {
  color: #0070e0;
  transform: scale(1.5);
}

.en .story .date {
  font-size: 0.8em;
  color: #637282;
}

.en .story .content {
  color: #1b2733;
}

/* CONTENT */

.en .content {
  font-size: 16px;
  line-height: 1.5em;
}

.en .content strong {
  font-weight: bold;
}

.en .content img {
  max-width: 50%;
}

.en .content ul {
  list-style-type: disc;
  padding-left: 2em;
}

.en .content blockquote {
  position: relative;
  margin: 1em 0;
  padding-left: 1em;
  border-left: 2px solid #637282;
}

/* 
 * CN
 */

/* LAYOUT */

html.cn {
  height: 100%;
}

.cn body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.cn main {
  position: relative;
  margin: 0;
  min-width: 100vw;
  padding-top: 5vh;
  padding-right: 1em;
  height: 80vh;
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
}

.cn main a {
  border: 4px double #ddd;
  border-radius: 2px;
  padding: 0.2rem 0;
  margin: 0.2rem 0;
}

/* Typography */

.cn a {
  text-decoration: none;
  color: #000;
  transition: color 0.3s, border 0.3s;
}

.cn a:visited {
  color: #666;
}

.cn a:hover,
.cn a:active {
  color: #007fff;
  border-color: #007fff;
}

/* TIMELINE */

.cn .timeline {
}

.cn .stories {
  margin: 0;
  padding: 0;
  list-style: none;
}

.cn .stories .story {
  position: relative;
  margin: 1rem 1rem 0 3rem;
  padding-left: 1rem;
}

.cn .story.highlight:after {
  content: " ";
  position: absolute;
  top: -2rem;
  right: -1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #eaeaea;
  transition: background-color 0.3s, transform 0.3s;
  transform-origin: center center;
}

.cn .story.highlight:hover:after {
  background-color: #007fff;
  transform: scale(1.3);
}

.cn .story .date {
  position: absolute;
  top: 0;
  right: -1.5rem;
  font-size: 0.6rem;
  font-weight: bold;
}

.cn .story .content {
  color: #333;
}

/* CONTENT */

.cn .content::first-letter {
  color: #007fff;
}

.cn .content p {
  line-height: 1.5rem;
}

.cn .content strong {
  font-weight: bold;
}

.cn .content img {
  max-height: 50%;
}

.cn .content ul {
  list-style: none;
  padding-left: 0;
  padding-top: 0;
}

.cn .content ul li {
  position: relative;
  margin: 0 0.5rem;
  padding-top: 1rem;
}

.cn .content ul li:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-top: 2px solid #eaeaea;
  transition: border 0.3s;
}

.cn .content ul li:hover:after {
  border-top-color: #007fff;
}

.cn .content blockquote {
  position: relative;
  margin: 0;
  padding: 1.5rem 0.5rem;
  font-style: italic;
  background-image: linear-gradient(
    to bottom,
    #eaeaea,
    rgba(255, 255, 255, 0) 20%
  );
}

/* COMMENTS */

.comments {
  display: block;
  position: fixed;
  cursor: pointer;
  bottom: 5vh;
  right: 10vw;
  animation: boat 10s infinite alternate;
}

@keyframes boat {
  0% {
    transform: translate3d(0, 0, 0);
  }
  30% {
    transform: translate3d(0.3rem, -0.5rem, 0);
  }
  70% {
    transform: translate3d(-0.4rem, 0.2rem, 0);
  }
  100% {
    transform: translate3d(0.2rem, -0.7rem, 0);
  }
}

/* RESUME */

.resume {
  width: 825px;
  max-width: 100%;
  margin: 1em auto;
  padding: 0 40px 40px;
  color: #333;
}

.resume a {
  color: #0070e0;
  text-decoration: none;
}

.resume blockquote {
  font-family: serif;
  margin: 1em 0;
  padding-left: 1em;
  border-left: 2px solid #637282;
  font-style: italic;
}

.resume > section {
  margin: 4em 0;
}

.resume > section > article {
  margin: 2em 0;
}

.resume .title {
  font-weight: bold;
  color: #000;
  margin-bottom: 0;
}

.resume .sub {
  font-size: 1em;
  color: #637282;
}

.resume .time {
  font-size: 1em;
  color: #637282;
}

.resume .title + .sub,
.resume .sub + .time {
  margin-top: 0.5em;
}

.resume .logo {
  max-width: 70px;
  float: left;
}

.resume .title,
.resume .sub,
.resume .time,
.resume .description {
  margin-left: 100px;
}

.resume .description {
  padding: 0.5em 0;
  font-size: 0.9em;
  line-height: 1.5em;
}

@media screen and (max-width: 600px) {
  .resume {
    padding: 0 20px 20px;
    margin-top: 0;
  }
  .resume .logo {
    max-width: 50px;
  }
  .resume .title,
  .resume .sub,
  .resume .time,
  .resume .description {
    margin-left: 70px;
  }
}

.resume-self .contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.resume-self .contact-list-item {
  display: inline-block;
  margin-right: 0.5em;
}

/* COMMENTS BOX */

.comments-box {
  height: 100%;
  overflow-y: scroll;
  padding-top: 2em;
}

.comments-box .close {
  position: absolute;
  top: 2em;
  right: 2em;
  cursor: pointer;
}
.home-laye {
  canvas {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
</style>


