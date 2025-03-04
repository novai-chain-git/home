<template>
  <div class="Partner-index">
    <section id="select3">
      <div class="partner-title">
        <img src="../../../static/image/news.png" alt="" class="news-logo" />
        {{ $t("partner.title") }}
      </div>
    </section>
    <!-- PC -->
    <div class="partner-list" ref="iconContainer">
      <div class="partner-row">
        <div
          class="partner-box"
          v-for="i in list"
          :key="i.name"
          @click="jump(i)"
        >
          <div class="partner-item">
            <img :src="i.url" alt="" />
          </div>
          <div class="partner-name">{{ i.name }}</div>
        </div>
      </div>
      <div class="partner-row">
        <div
          class="partner-box"
          v-for="i in listtwo"
          :key="i.name"
          @click="jump(i)"
        >
          <div class="partner-item">
            <img :src="i.url" alt="" />
          </div>
          <div class="partner-name">{{ i.name }}</div>
        </div>
      </div>
    </div>
    <!-- 移动端 -->
    <div class="partner-list-mobile" ref="iconContainer">
      <div
        class="partner-box-mobile"
        v-for="i in list"
        :key="i.name"
        @click="jump(i)"
      >
        <div class="partner-item">
          <img :src="i.url" alt="" />
        </div>
        <div class="partner-name">{{ i.name }}</div>
      </div>
      <div
        class="partner-box-mobile"
        v-for="i in listtwo"
        :key="i.name"
        @click="jump(i)"
      >
        <div class="partner-item">
          <img :src="i.url" alt="" />
        </div>
        <div class="partner-name">{{ i.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Partner",
  data() {
    return {
      // 快速连接
      screenSize: "small",
      hover: -1,
      // 投资机构
      list: [
        {
          url: "../../../static/image/Partner/8.png",
          name: "LLama",
          link: "https://www.llama.fi"
        },
        {
          url: "../../../static/image/Partner/7.png",
          name: "DeepSeek",
          link: "https://www.deepseek.com/"
        },
        {
          url: "../../../static/image/Partner/1.png",
          name: "Echoo Wallet",
          link: "https://www.echoo.io"
        },
        {
          url: "../../../static/image/Partner/9.png",
          name: "WOO",
          link: "https://woo.org"
        },
        {
          url: "../../../static/image/Partner/3.png",
          name: "ViaBTC",
          link: "https://www.viabtc.com"
        }

        // {
        // 	url: "../../../static/image/Partner/2.png",
        // 	name: 'WOO'
        // },
        // {
        //   url: "../../../static/image/Partner/4.png",
        //   name: "EastLink"
        // },
        // {
        //   url: "../../../static/image/Partner/5.png",
        //   name: "Hash Capital"
        // },
        // {
        //   url: "../../../static/image/Partner/6.png",
        //   name: "LK Venture"
        // },
      ],
      listtwo: [
        {
          url: "../../../static/image/Partner/15.png",
          name: "fetch.ai",
          link: "https://fetch.ai/"
        },
        {
          url: "../../../static/image/Partner/14.png",
          name: "Gemini",
          link: "https://gemini.google.com/app"
        },
        {
          url: "../../../static/image/Partner/10.png",
          name: "Hugging Face",
          link: "https://huggingface.co/"
        },
        {
          url: "../../../static/image/Partner/11.png",
          name: "NVIDIA",
          link: "https://developer.nvidia.com/tensorrt"
        },
        {
          url: "../../../static/image/Partner/12.png",
          name: "LangChain",
          link: "https://www.langchain.com/"
        },
        {
          url: "../../../static/image/Partner/13.png",
          name: "crewAI",
          link: "https://crewai.com/"
        }

        // {
        // 	url: "../../../static/image/Partner/2.png",
        // 	name: 'WOO'
        // },
        // {
        //   url: "../../../static/image/Partner/4.png",
        //   name: "EastLink"
        // },
        // {
        //   url: "../../../static/image/Partner/5.png",
        //   name: "Hash Capital"
        // },
        // {
        //   url: "../../../static/image/Partner/6.png",
        //   name: "LK Venture"
        // },
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
    },
    jump(i) {
      window.open(i.link);
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .Partner-index {
    width: 100%;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .partner-title {
    display: flex;
    padding-left: 20px;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    font-size: 0.24rem;
    color: #a7ff8c;
    margin: 0.6rem 0 0.2rem 0;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }

  .partner-list {
    display: none;
  }
  .partner-list-mobile {
    width: calc(100% - 0.4rem);
    padding: 0 0.2rem;
    height: 4rem;
    background: url("../../../static/image/mask.png");
    background-size: 100% 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* gap: 0.16rem; */
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }

  .partner-item {
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .partner-item img {
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 50%;
  }

  .partner-box-mobile {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: -0.3rem; */
  }
  /* .partner-box-mobile:nth-child(n + 3) {
    margin-top: 0.2rem;
  } */

  .partner-name {
    font-size: 0.18rem;
    color: white;
    margin-top: 0.24rem;
    font-family: "Outfit-Bold";
    font-weight: bold;
    text-align: center;
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

  .partner-title {
    display: flex;
    padding: 0.84rem 1.8rem 0;
    align-items: center;
    gap: 0.1rem;
    font-size: 0.24rem;
    color: #a7ff8c;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }

  .flex-center {
    display: flex;
    padding: 0 3rem;
    margin-bottom: 0.81rem;
    flex-direction: column;
  }
  .partner-list-mobile {
    display: none;
  }

  .partner-list {
    padding: 0.24rem 1.8rem 0.43rem;
    /* height: 2rem; */
    background: url("../../../static/image/mask.png");
    background-size: 100% 100%;
  }
  .partner-row {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 0.2rem;
  }
  .partner-row:first-child {
    margin-top: 0;
    justify-content: space-around;
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

  .partner-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .partner-item img {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
  }

  .partner-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .partner-box:hover {
    transform: scale(1.1);
  }
  .partner-box:hover .partner-name {
    color: #a7ff8c;
  }
  /* .partner-box:nth-child(n + 6) {
    margin-top: 0.2rem;
  } */

  .partner-name {
    font-size: 0.16rem;
    color: white;
    margin-top: 0.1rem;
    font-weight: bold;
    text-align: center;
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
  }

  .img4 {
    width: 0.16rem;
    height: 0.132rem;
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
}
</style>
