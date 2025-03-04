<template>
  <div class="lobby">
    <!-- <div class="light"></div> -->

    <div class="top-main">
      <img
        v-if="screenSize == 'medium'"
        class="light"
        src="/static/image/svg/2.svg"
      />
      <img
        v-if="screenSize == 'small'"
        class="light"
        src="/static/image/svg/3.svg"
      />
      <img class="animationImg" src="/static/image/svg/1.svg" />
    </div>
    <div class="canvas_div">
      <canvas ref="canvas"></canvas>
    </div>
    <!-- 标题 -->
    <div class="home-bg">
      <!-- <div class="bg1"></div> -->
      <!-- <video loop :autoplay="true" playsinline :muted="true"
      class="vedio1">
				<source src="/static/image/1.mov" type="video/mp4">
			</video> -->

      <div class="text-box">
        <div class="home-div">
          <div class="home-title" ref="homeTitle">
            {{ $t("首页标题") }}
          </div>
          <div
            class="home-text "
            style="margin-top: 0;margin-bottom: 0.16rem"
            ref="homeText"
          >
            {{ $t("首页描述") }}
          </div>
        </div>
        <div class="btn-group">
          <div
            class="border-btn"
            v-for="(i, index) in topList"
            :key="index"
            @click="linkUrl(i)"
            @mouseenter="enter(i)"
            @mouseleave="hoverActive = -1"
          >
            {{ i.text }}
            <img
              src="/static/image/up.png"
              alt=""
              class="up-img"
              v-if="i.active == hoverActive"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻 -->
    <News />
    <!--    优势-->
    <advantage />

    <!-- 产品和服务 -->
    <services />
    <!-- 探索产品 -->
    <Products />

    <!-- AI模型支持 -->
    <AIModelSupport />

    <!--    页尾-->
    <Partner />
    <img
      src="../../../static/image/goUp.png"
      alt=""
      class="goUp"
      v-if="screenSize == 'small' && showGoUp"
      @click="scrollToTop"
    />
  </div>
</template>

<script>
import Partner from "../public/Partner";
import advantage from "./components/advantega2";
import News from "./components/News.vue";
import Products from "./components/Products.vue";
import services from "./components/services.vue";
import AIModelSupport from "./components/AIModelSupport.vue";
import { mapState } from "vuex";
import { getWhitePaperLink } from "@/utils/getWhitePaperLink.js";
export default {
  name: "lobby",
  components: {
    Partner,
    advantage,
    News,
    Products,
    services,
    AIModelSupport
  },
  data() {
    return {
      showGoUp: false,
      hoverActive: -1,
      topList: [
        {
          text: this.$t("homeBtn"),
          active: 0,
          link: "https://points.novaichain.com/dailyTasks"
        },
        {
          text: this.$t("WhitePaper"),
          active: 1,
          link: getWhitePaperLink(localStorage.getItem("locale"))
        },
        {
          text: this.$t("download.Npay"),
          active: 2,
          type: true,
          link: "/Download"
        }
      ]
    };
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // 平滑滚动
      });
    },
    handleScroll() {
      this.showGoUp = window.scrollY > 100; // 当滚动距离大于100px时显示“回到顶部”按钮
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition - (window.innerHeight / 2 - element.offsetHeight / 2);

        window.scrollTo({
          top: window.scrollY + offsetPosition,
          behavior: "smooth"
        });
      }
    },
    enter(i) {
      this.hoverActive = i.active;
    },
    linkUrl(i) {
      if (i.type) {
        this.$router.push(i.link);
      } else {
        this.btnLink(i.link);
      }
    },
    btnLink(i) {
      if (i) {
        window.open(i);
      } else {
        this.$toast(this.$t("noOpen"));
      }
    },
    link(i) {
      if (i.link) {
        window.open(i.link);
      } else if (i.router) {
        this.$router.push(i.router);
      }
    },
    isEven(num) {
      num = Number(num);
      return num % 2 === 0; // 判断是否为偶数
    }
  },

  computed: mapState({
    screenSize(state) {
      return state.screenSize;
    }
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.$route.query.point) {
      this.scrollToSection(this.$route.query.point);
    }

    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function Particle(x, y, radius, color, speed) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.speed = speed;
    }

    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    function createRandomParticles(
      radiusRange = {
        min: 1,
        max: 2
      }
    ) {
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius =
          Math.random() * (radiusRange.max - radiusRange.min) + radiusRange.min;
        const color = "white";
        const speed = Math.random() + 0.1;
        particles.push(new Particle(x, y, radius, color, speed));
      }
    }

    function createLeftToRightParticle(
      radiusRange = {
        min: 1,
        max: 2
      }
    ) {
      const x = 0;
      const y = Math.random() * canvas.height;
      const radius =
        Math.random() * (radiusRange.max - radiusRange.min) + radiusRange.min;
      const color = "white";
      const speed = Math.random() + 0.1;
      particles.push(new Particle(x, y, radius, color, speed));
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.draw();
        particle.x += particle.speed;
        if (particle.x > canvas.width) {
          particles.splice(index, 1);
        }
      });
    }

    createRandomParticles();
    animate();

    setInterval(createLeftToRightParticle, 2000); // 每隔一段时间从左边生成新的粒子

    // 是否为ios设备
    const that = this;
    function checkIfIphone() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // 检查 iPhone 设备
      const isIphone = /iPhone/i.test(userAgent) && !/iPad/i.test(userAgent);
      if (isIphone) {
        that.$refs.homeTitle.style.textShadow = "none";
        that.$refs.homeText.style.textShadow = "none";
      }
    }

    checkIfIphone();
  }
};
</script>

<style>
canvas {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.lobby {
  width: 100%;
  float: left;
  position: relative;
  overflow-x: hidden;
  /* margin-bottom: 1rem; */
}

@keyframes anticlockwise {
  from {
    transform: rotate(0deg);
    /* 从0度开始旋转 */
  }

  to {
    transform: rotate(-360deg);
    /* 旋转到360度 */
  }
}

.home-info {
  margin: 0.52rem auto 0;
  font-size: 0.15rem;
  color: #bac3d3;
  text-align: center;
  line-height: 1.5;
  padding: 0 0.13rem;
}

.border-content {
  border-radius: 0.06rem;
  width: calc(100% - 0.02rem);
  height: calc(100% - 0.02rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-logo img {
  margin: 0 0.09rem 0 0;
}

.lobby-info {
  font-size: 0.14rem;
  color: #bac3d3;
}

.under-bg {
  width: 0.56rem;
  height: 0.54rem;
  margin-top: -0.25rem;
  /*margin-left: -0.5rem;*/
}

@media screen and (max-width: 768px) {
  .goUp {
    width: 0.4rem;
    height: 0.4rem;
    position: fixed;
    right: 0.2rem;
    bottom: 2rem;
    z-index: 99;
  }

  .home-bg {
    width: 100%;
    /* height: 2.7rem;
		overflow: hidden;
		position: relative; */
    padding-bottom: 0.47rem;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* position: absolute;
		top: .87rem; */
    width: calc(100vw - 0.4rem) !important;
    padding: 0 0.2rem;
  }

  .home-title {
    font-size: 0.36rem;
    color: white;
    font-family: "Outfit-Bold";
    font-weight: bold;
    text-align: left;
    text-shadow: 0 0 14px #2ec301;
  }

  .home-text {
    font-size: 0.22rem;
    color: white;
    font-family: "Outfit-Bold";
    font-weight: bold;
    text-align: left;
    text-shadow: 0 0 14px #2ec301;
  }

  .vedio1 {
    width: 3.16rem !important;
    height: 3.16rem !important;
    width: 100%;
    object-fit: cover;
    /* 保持视频比例，覆盖整个容器 */
    display: block;
    /* 确保视频元素是块级元素 */
    outline: none;
    /* 移除视频元素的轮廓 */
    position: absolute;
    top: -0.5rem;
    right: -0.9rem;
    animation: rotate 50s linear infinite;
  }

  .light {
    /* width: 11.55rem !important;
    height: 12.61rem !important; */
    width: 100%;
    /* right: -1rem; */
    position: absolute;
    top: 0rem;
    z-index: 1;
  }

  .animationImg {
    /* width: 77vw !important;
		width: 77vw; */
    width: 98vw !important;
    left: 0.15rem;
    /* 移除视频元素的轮廓 */
    position: absolute;
    z-index: 2;
    /* top: -10vw;
    right: -7vw; */
    animation: anticlockwise 50s linear infinite;
  }

  .top-main {
    position: relative;
    height: 3.56rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
      /* 从0度开始旋转 */
    }

    to {
      transform: rotate(-360deg);
      /* 旋转到360度 */
    }
  }

  /* 隐藏播放控件 */
  video::-webkit-media-controls {
    display: none !important;
  }

  video::-webkit-media-controls-enclosure {
    display: none !important;
  }

  video::-webkit-media-controls-panel {
    display: none !important;
  }

  .btn-group {
    display: flex;
  }

  .home-btn {
    width: fit-content;
    text-align: center;
    height: 0.4rem;
    cursor: pointer !important;
    margin-right: 0.16rem;
    margin-top: 0 !important;
    margin-left: 0;
    z-index: 20;
    padding: 0 0.1rem;
    font-size: 0.14rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 0.08rem;
    background-color: #a7ff8c;
    color: #000000 !important;
    font-family: Outfit-Bold;
  }

  .btn-group div:hover {
    background-color: #a7ff8c;
    color: #000000;
    font-family: Outfit-Bold;
  }

  .border-btn {
    width: fit-content;
    text-align: center;
    height: 0.4rem;
    cursor: pointer !important;
    margin-right: 0.16rem;
    margin-top: 0 !important;
    margin-left: 0;
    z-index: 20;
    padding: 0 0.1rem;
    font-size: 0.14rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 0.01rem solid #a7ff8c33;
    border-radius: 0.08rem;
    color: #a7ff8c;
    font-family: Outfit-Bold;
  }

  .title-sort {
    /* width: 70%; */
    padding-right: 1rem;
  }
}

@media screen and (min-width: 769px) {
  .text-box {
    display: flex;
    flex-direction: column;
    width: calc(100% - 1.8rem);
    position: absolute;
    top: 2.16rem;
    padding-left: 1.8rem;
  }

  .home-bg {
    width: 100%;
    height: 7.5rem;
    /* background: url(../../../static/image/PCBG.png) !important; */
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    overflow: hidden;
    position: relative;
  }

  .home-title {
    width: 70%;
    text-align: left;
    font-size: 0.64rem;
    font-family: "Outfit-Bold";
    color: white;
    font-weight: bold;
    text-shadow: 0 0 14px #2ec301;
    /* 设置文字阴影 */
  }

  .home-text {
    width: 70%;
    text-align: left;
    font-size: 0.36rem;
    font-family: "Outfit-Bold";
    color: white;
    font-weight: bold;
    text-shadow: 0 0 14px #2ec301;
  }

  .btn-group {
    display: flex;
    z-index: 20;
    margin-top: 0.1rem;
  }

  .home-btn {
    width: fit-content;
    text-align: center;
    height: 0.4rem;
    cursor: pointer !important;
    margin-right: 0.16rem;
    margin-top: 0 !important;
    margin-left: 0;
    z-index: 20;
    padding: 0 0.2rem;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-group div:hover {
    background-color: #a7ff8c;
    color: #000000;
    font-family: Outfit-Bold;
  }

  .border-btn {
    width: fit-content;
    text-align: center;
    height: 0.4rem;
    cursor: pointer !important;
    margin-right: 0.16rem;
    margin-top: 0 !important;
    margin-left: 0;
    z-index: 20;
    padding: 0 0.17rem;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    box-sizing: border-box;
    border: 0.01rem solid #a7ff8c33;
    border-radius: 0.08rem;
    color: #a7ff8c;
    font-family: Outfit-Bold;
  }

  .up-img {
    width: 0.13rem;
    height: 0.13rem;
  }

  .flex-left {
    width: 100%;
  }

  .light {
    width: 11.55rem !important;
    height: 12.61rem !important;
    right: -1rem;
    position: absolute;
    top: 0rem;
    z-index: 1;
  }

  .animationImg {
    width: 10.8rem !important;
    height: 10.8rem !important;
    width: 100%;
    /* 移除视频元素的轮廓 */
    position: absolute;
    top: -1rem;
    right: -1rem;
    /* top: 0rem;
      right: 0rem; */
    transform: rotate(-27deg);
    z-index: 2;
    animation: anticlockwise 50s linear infinite;
  }

  /* 隐藏播放控件 */
  video::-webkit-media-controls {
    display: none !important;
  }

  video::-webkit-media-controls-enclosure {
    display: none !important;
  }

  video::-webkit-media-controls-panel {
    display: none !important;
  }

  .bg1 {
    width: 9rem;
    height: 9rem;
    background-image: url("../../../static/image/1.png");
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    position: absolute;
    right: 0;
    top: 0;
    animation: rotate 200s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
      /* 从0度开始旋转 */
    }

    to {
      transform: rotate(360deg);
      /* 旋转到360度 */
    }
  }

  @keyframes breathe {
    from {
      transform: scale(1);
      /* 初始大小 */
      opacity: 0.4;
      /* 初始透明度 */
    }

    to {
      transform: scale(1.8);
      /* 放大到1.2倍 */
      opacity: 1;
      /* 透明度降低到0.5 */
    }
  }

  .video-div {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
