<template>
  <div class="Partner-index">
    <div class="foot-bg">
      <video
        ref="videoPlayer1"
        v-if="screenSize != 'small'"
        class="video-box"
        loop
        :autoplay="true"
        playsinline
        :muted="true"
      >
        <source src="../../../static/image/foot-bg.mp4" type="video/mp4" />
      </video>
      <div class="partner-titles">
        <img src="../../../static/image/news.png" alt="" class="news-logo" />
        {{ $t("partner.footTitle") }}
      </div>
      <div class="foot-body">
        <div
          class="foot-body-item"
          v-for="(i, index) in footList.slice(0, 5)"
          :key="index"
          @mouseenter="hover = i.index"
          @mouseleave="hover = -1"
          @click="jump(i)"
        >
          <div class="left-item">
            <img
              :src="i.index == hover ? i.urlActive : i.url"
              alt=""
              :class="i.class"
            />
            {{ i.name }}
          </div>
          <img
            :src="
              hover != i.index
                ? '../../../static/image/Foot/left.png'
                : '../../../static/image/Foot/hover.png'
            "
            alt=""
            class="right-img"
          />
        </div>
        <div class="bottom-item">
          <div
            class="bottom-div"
            v-for="(i, index) in footList.slice(5, 8)"
            @click="jump(i)"
            @mouseenter="hover = i.index"
            @mouseleave="hover = -1"
          >
            <img
              :src="i.index == hover ? i.urlActive : i.url"
              alt=""
              :class="i.class"
            />
          </div>
        </div>
      </div>

      <div class="info">
        <img src="../../../static/image/logo.png" alt="" class="logo-img" />
        <div class="flex-box">
          <div class="partner-info">{{ $t("partner.fontInfo2") }}</div>
          <div class="partner-info">{{ $t("partner.fontInfo3") }}</div>
          <div class="partner-info">{{ $t("partner.fontInfo4") }}</div>
        </div>
      </div>
      <div class="partner-div">{{ $t("partner.footTitle2") }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getWhitePaperLink } from "@/utils/getWhitePaperLink.js";
export default {
  name: "Partner",
  data() {
    return {
      // 快速连接
      screenSize: "small",
      hover: -1,
      footList: [
        {
          url: "../../../static/image/Foot/white.png",
          urlActive: "../../../static/image/Foot/whiteActive.png",
          class: "img1",
          index: 0,
          name: this.$t("partner.footName3"),
          link: getWhitePaperLink(localStorage.getItem("locale"))
        },
        {
          url: "../../../static/image/Foot/mediu.png",
          urlActive: "../../../static/image/Foot/mediuActive.png",
          class: "img2",
          index: 1,
          name: "Medium",
          // name: this.$t("partner.footName2"),
          link:
            localStorage.getItem("locale") == "zh_CH" ||
            localStorage.getItem("locale") == "zh"
              ? "https://medium.com/@novaichinese"
              : "https://medium.com/@novaidao"
        },
        {
          url: "../../../static/image/Foot/tg1.png",
          urlActive: "../../../static/image/Foot/tgActive.png",
          name: this.$t("partner.footName4"),
          index: 2,
          class: "img3",
          link: "https://t.me/NovaiChainOffical"
        },

        // {
        //   url: "../../../static/image/Foot/icon4.png",
        //   name: this.$t("partner.footName5"),
        //   link: "https://t.me/Novai_CH"
        // },
        {
          url: "../../../static/image/Foot/serve.png",
          urlActive: "../../../static/image/Foot/serveActive.png",
          name: this.$t("partner.footName6"),
          index: 3,
          class: "img4",
          link: "https://t.me/NovaiFi"
        },
        {
          url: "../../../static/image/Foot/ecosystem.svg",
          urlActive: "../../../static/image/Foot/ecosystemActive.svg",
          name: this.$t("menu.project"),
          index: 4,
          class: "img3",
          router: "/Ecosystem"
        },
        {
          url: "../../../static/image/Foot/Vector.png",
          urlActive: "../../../static/image/Foot/VectorActive.png",
          name: this.$t("partner.footName7"),
          index: 5,
          class: "img5",
          link: "https://x.com/NovaiChain_"
        },
        {
          url: "../../../static/image/Foot/git.png",
          urlActive: "../../../static/image/Foot/gitActive.png",
          name: this.$t("partner.footName8"),
          class: "img6",
          index: 6,
          link: "https://github.com/NovaiChain7256/Room"
        },
        {
          url: "../../../static/image/Foot/email.png",
          urlActive: "../../../static/image/Foot/emailActive.png",
          name: this.$t("partner.footName9"),
          link: "marketing@novaichain.co",
          index: 7,
          class: "img7",
          type: "email"
        }
      ],

      lng: localStorage.getItem("locale"),
      images: [
        "../../../static/image/2.png",
        "../../../static/image/2.png",
        "../../../static/image/2.png",
        "../../../static/image/2.png"
      ]
    };
  },
  mounted() {
    this.screenSize = sessionStorage.getItem("screenSize");
    this.lng = localStorage.getItem("locale");
    this.startAutoScroll();
    // this.footList[0].link=window.location.origin
  },
  methods: {
    jump(i) {
      if (i.router) {
        this.$router.push(i.router);
      } else if (i.type == "email") {
        this.$copyText(i.link).then(
          e => {
            this.$toast(this.$t("copied"));
          },
          e => {}
        );
      } else if (i.link == "") {
        this.$toast(this.$t("noOpen"));
      } else {
        window.open(i.link);
      }
    },
    startAutoScroll() {
      const container = this.$refs.iconContainer;
      const container2 = this.$refs.iconContainer2;
      let start = null;
      let start2 = null;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const scrollSpeed = 1; // 滚动速度，数字越大滚动越快
        // 计算滚动位置
        container.scrollLeft += scrollSpeed;
        // 当滚动到末尾时回到起始位置
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 2
        ) {
          container.scrollLeft = 0;
        }
        // 继续请求下一帧动画
        requestAnimationFrame(step);
      };
      const step2 = timestamp2 => {
        if (!start2) start2 = timestamp2;
        const progress = timestamp2 - start2;
        const scrollSpeed = 1; // 滚动速度，数字越大滚动越快
        // 计算滚动位置
        container2.scrollLeft += scrollSpeed;
        // 当滚动到末尾时回到起始位置
        if (
          container2.scrollLeft >=
          container2.scrollWidth - container2.clientWidth - 2
        ) {
          container2.scrollLeft = 0;
        }
        // 继续请求下一帧动画
        requestAnimationFrame(step2);
      };
      // 开始动画
      requestAnimationFrame(step);
      requestAnimationFrame(step2);
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .Partner-index {
    width: 100%;

    padding: 0 0.13rem;
    box-sizing: border-box;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .partner-titles {
    gap: 0.1rem;
    font-size: 0.24rem;
    color: #a7ff8c;
    margin: 0.64rem 0 0.25rem 0;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }

  .foot-bg {
    width: 100%;
    height: auto;
    padding-bottom: 0.3rem;
    position: relative;
    overflow: hidden;
  }

  .foot-body {
    width: 100%;
    padding: 0.2rem 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #000;
    box-sizing: border-box;
  }

  .foot-body-item {
    display: flex;
    width: calc(100% - 0.4rem);
    padding: 0 0.2rem;
    height: 0.34rem;
    background: rgba(148, 224, 124, 0.05);
    justify-content: space-between;
    font-family: "Outfit-Bold";
    align-items: center;
    margin-bottom: 0.2rem;
    cursor: pointer;
    transition: height 0.3s ease, transform 0.3s ease;
  }

  .foot-body-item:hover {
    height: 0.52rem;
    background: rgba(148, 224, 124, 1);
  }

  .left-item {
    display: flex;
    gap: 0.2rem;
    font-size: 0.14rem;
    color: #fff;
    font-weight: bold;
    font-family: "Outfit-Bold";
    transition: color 0.3s ease;
    align-items: center;
    /* Add transition for color */
  }

  .foot-body-item:hover .left-item {
    color: #0b0f1a !important;
    font-weight: bold;
    font-family: "Outfit-Bold";
  }

  .right-img {
    width: 0.155rem;
    height: 0.14rem;
  }

  .img1 {
    width: 0.15rem;
    height: 0.16rem;
  }

  .img2 {
    width: 0.16rem;
    height: 0.0917rem;
  }

  .img3 {
    width: 0.16rem;
    height: 0.133rem;
  }

  .img4 {
    width: 0.16rem;
    height: 0.132rem;
  }

  .bottom-item {
    width: 100%;
    height: 0.32rem;
    display: flex;
    justify-content: space-between;
    gap: 0.2rem;
  }

  .bottom-div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(148, 224, 124, 0.05);
    cursor: pointer;
    transition: height 0.3s ease, transform 0.3s ease;
  }

  .bottom-div:hover {
    height: 0.52rem;
    background: rgba(148, 224, 124, 1);
  }

  .img5 {
    width: 0.146rem;
    height: 0.16rem;
  }

  .img6 {
    width: 0.143rem;
    height: 0.16rem;
  }

  .img7 {
    width: 0.227rem;
    height: 0.16rem;
  }

  .info {
    width: calc(100% - 40px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 1rem;
    align-items: center;
  }

  .logo-img {
    width: 0.887rem;
    height: 0.42rem;
  }

  .partner-info {
    width: 100%;
    font-size: 0.14rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.54);
  }

  .partner-div {
    width: calc(100% - 40px);
    padding: 0 20px;
    text-align: center;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
    text-align: center;
    margin-top: 0.3rem;
  }
}

@media screen and (min-width: 769px) {
  .Partner-index {
    /* 	width: calc(100% - 1.98rem);
			padding-left: 1.78rem; */
    /* margin-top: 4.03rem; */
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .partner-titles {
    display: flex;
    padding: 0 1.8rem;
    align-items: center;
    gap: 0.1rem;
    font-size: 0.24rem;
    color: #a7ff8c;
    margin: 1.28rem 0 0.2rem 0;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }
  .partner-titles {
    margin-top: 0.7rem;
  }

  .flex-center {
    display: flex;
    padding: 0 3rem;
    margin-bottom: 0.81rem;
    flex-direction: column;
  }

  .logo-box {
    width: 2.78rem;
    height: 2.78rem;
    margin: 1.4rem auto 0.44rem;
  }

  .foot-title2 {
    font-size: 0.2rem;
  }

  .foot-item {
    width: 1.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.2rem 0;
    margin-right: 0.1rem;
    border-radius: 0.08rem;
  }

  .foot-item:hover {
    background: #0b0f1a;
  }

  .foot-text {
    justify-content: flex-start;
    font-size: 0.15rem;
  }

  .right-icon {
    width: 0.14rem;
    height: 0.1rem;
    margin-right: 0.1rem;
  }

  .sort {
    margin: 0 auto;
    width: 50%;
    margin-bottom: 0.08rem;
  }

  .foot-bg {
    width: 100%;
    height: 8.1rem;
    position: relative;
    overflow: hidden;
  }

  .video-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .foot-body {
    margin-left: 1.78rem;
    width: 7.78rem;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .foot-body-item {
    display: flex;
    width: calc(100% - 0.4rem);
    padding: 0 0.2rem;
    height: 0.47rem;
    background: rgba(148, 224, 124, 0.05);
    justify-content: space-between;
    font-family: "Outfit-Bold";
    align-items: center;
    margin-bottom: 0.2rem;
    cursor: pointer;
    transition: height 0.3s ease, transform 0.3s ease;
  }

  .foot-body-item:hover {
    height: 0.69rem;
    background: rgba(148, 224, 124, 1);
    /* transform: scale(1.1); */
  }

  .left-item {
    display: flex;
    gap: 0.2rem;
    font-size: 0.14rem;
    color: #fff;
    font-weight: bold;
    font-family: "Outfit-Bold";
    transition: color 0.3s ease;
    align-items: center;
    /* Add transition for color */
  }

  .foot-body-item:hover .left-item {
    color: #0b0f1a !important;
    font-weight: bold;
    font-family: "Outfit-Bold";
  }

  .right-img {
    width: 0.155rem;
    height: 0.14rem;
  }

  .img1 {
    width: 0.24rem;
  }

  .img2 {
    width: 0.24rem;
  }

  .img3 {
    width: 0.26rem;
  }

  .img4 {
    width: 0.26rem;
  }

  .bottom-item {
    width: 7.78rem;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    gap: 0.2rem;
  }

  .bottom-div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(148, 224, 124, 0.05);
    cursor: pointer;
    transition: all 0.3s ease; /* 添加过渡效果 */
  }

  .bottom-div:hover {
    /* height: .42rem; */
    /* height: .69rem; */
    background: rgba(148, 224, 124, 1);
    transform: scale(1.15);
  }

  .img5 {
    width: 0.146rem;
    height: 0.16rem;
  }

  .img6 {
    width: 0.143rem;
    height: 0.16rem;
  }

  .img7 {
    width: 0.227rem;
    height: 0.16rem;
  }

  .info {
    display: flex;
    width: calc(100% - 1.78rem);
    padding-left: 1.67rem;
    margin-top: 1.13rem;
    gap: 0.2rem;
  }

  .logo-img {
    width: 0.887rem;
    height: 0.42rem;
  }

  .partner-info {
    width: 100%;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
  }

  .partner-div {
    width: calc(100% - 0.5rem);
    padding-right: 0.5rem;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
    text-align: right;
    margin-top: 0.3rem;
  }
}
</style>
