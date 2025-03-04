<template>
  <div class="top" :class="scrollType == true ? 'top-bg' : ''">
    <img
      src="../../../static/image/logo.png"
      alt=""
      class="top-logo"
      @click="$router.push('/')"
    />
    <div class="flex-box">
      <div class="top-list" v-if="screenSize !== 'small'">
        <div v-for="(i, index) in menu" :key="index" @click="menuLink(i)">
          {{ $t(i.name) }}
        </div>
      </div>
      <div
        class="select"
        @click.stop="openSelect"
        @mouseenter="enterChange"
        @mouseleave="levelChange"
      >
        <img src="../../../static/image/list/lang.png" alt="" />
        <transition name="slide-right-to-left">
          <div class="select-val" v-if="showDropdown">
            <div
              class="select-div"
              :class="selectedOption == item.name ? 'select-text' : ''"
              v-for="(item, index) in langList"
              :key="index"
              @click.stop="changeDropdown(item)"
            >
              {{ $t(item.text) }}
              <img
                src="../../../static/image/list/success.png"
                alt=""
                v-if="selectedOption == item.name"
              />
            </div>
          </div>
        </transition>
      </div>
      <div v-if="screenSize == 'small'">
        <img
          src="../../../static/image/more.png"
          alt=""
          class="more"
          @click.stop="isShow = !isShow"
        />
        <div class="model" v-if="isShow">
          <div class="menu">
            <div v-for="(i, index) in menu" :key="index" @click="menuLink(i)">
              {{ $t(i.name) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatMobile } from "../../utils/common";
import { mapState } from "vuex";
let _this;
export default {
  computed: mapState({
    screenSize(state) {
      return state.screenSize;
    },
    common(state) {
      return state.common;
    }
  }),
  data() {
    return {
      isInfo: true,
      menu: [
        {
          name: "menu.link",
          link: "https://scan.novaichain.com/novaichain"
        },
        {
          name: "menu.swap",
          link: "https://swap.novaichain.com"
        },
        {
          name: "menu.bridge",
          link: "https://bridge.novaichain.com"
        },
        {
          name: "menu.project",
          router: "/Ecosystem"
        },
        {
          name: "menu.Products",
          point: "products"
        },
        {
          name: "menu.faucets",
          link: "https://faucet.novaichain.com"
        },
        // {
        // 	name: "menu.advantage",
        // 	point: 'select1'
        // },

        // {
        // 	name: "menu.news",
        // 	router: '/NewsInfo'
        // },
        {
          name: "menu.friend",
          link: "https://doc.novaichain.com/"
          // point: 'select3'
        }
        // {
        // 	name: "download.Npay",
        // 	router: '/Download'
        // },
      ],
      selectedOption: "",
      imgLogo: "",
      showDropdown: false,
      langList: [
        {
          name: "en",
          // url: require("../../../static/image/languageImg/en.png"),
          text: "English"
        },
        // {
        //   name: "zh",
        //   // url: require("../../../static/image/languageImg/zh_CH.png"),
        //   text: "简体中文"
        // },
        {
          name: "jp",
          // url: require("../../../static/image/Japan.png"),
          text: "日本語"
        },
        {
          name: "cht",
          // url: require("../../../static/image/China.png"),
          text: "繁體中文"
        },
        {
          // 韩文
          name: "ko",
          // url: require("../../../static/image/SouthKorea.png"),
          text: "한국인"
        },

        {
          // 越南
          name: "vi",
          // url: require("../../../static/image/Spain.png"),
          text: "Việt Nam"
        },
        {
          // 法语
          name: "fr",
          // url: require("../../../static/image/Vietnam.png"),
          text: "Français"
        },
        {
          // 西班牙
          name: "es",
          // url: require("../../../static/image/pt.png"),
          text: "España"
        },
        {
          // 泰语
          name: "th",
          // url: require("../../../static/image/Malaysia.png"),
          text: "ภาษาไทย"
        },
        {
          // 马来西亚
          name: "my",
          // url: require("../../../static/image/Thailand.png"),
          text: "Malaysia"
        },
        {
          // 印尼
          name: "id",
          // url: require("../../../static/image/Thailand.png"),
          text: "Indonesia"
        }
      ],
      isShow: false,
      scrollType: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.selectedOption = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "en";
    console.log(this.selectedOption);
    this.$watch(
      "selectedOption",
      (newValue, oldValue) => {
        location.reload();
      },
      {
        deep: true
      }
    );
    document.addEventListener("click", this.HiddenClick);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.HiddenClick, true);
  },
  methods: {
    noOpen() {
      this.$toast(this.$t("noOpen"));
    },
    formatMobile,
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
    menuLink(i) {
      if (i.link) {
        window.open(i.link);
      } else if (i.router) {
        this.$router.push(i.router);
      } else if (i.point) {
        if (this.$route.path != "/") {
          this.$router.push({
            path: "/",
            query: {
              point: i.point
            }
          });
        }
        this.scrollToSection(i.point);
      } else {
        this.$toast(this.$t("noOpen"));
      }
    },
    openSelect() {
      if (this.screenSize === "small") {
        this.showDropdown = !this.showDropdown;
      }
    },
    enterChange() {
      if (this.screenSize !== "small") {
        this.showDropdown = true;
      }
    },
    levelChange() {
      if (this.screenSize !== "small") {
        this.showDropdown = false;
      }
    },
    changeDropdown(item) {
      this.selectedOption = item.name;
      localStorage.setItem("locale", this.selectedOption);
      this.showDropdown = false;
      this.$forceUpdate();
    },
    isShowdata() {
      this.isShow = !this.isShow;
    },
    HiddenClick: function() {
      this.showDropdown = false;
      this.isShow = false;
    },
    handleScroll() {
      const scrollDistance = window.pageYOffset;
      if (scrollDistance > 0) {
        this.scrollType = true;
      } else {
        this.scrollType = false;
      }
    }
  }
};
</script>

<style scoped>
.top-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
}

.slide-right-to-left-enter-active,
.slide-right-to-left-leave-active {
  transition: transform 0.3s linear, opacity 0.3s linear;
  /* 设置过渡动画的持续时间和缓动效果 */
}

.slide-right-to-left-enter,
.slide-right-to-left-leave-to {
  transform: scale(0);
  /* 初始状态在容器右侧之外 */
  opacity: 0;
  /* 初始透明度为0，隐藏内容 */
}

.select-text {
  color: #fff !important;
}

.select-val div {
  text-align: left;
  margin-bottom: 0.18rem;
}

.select-val {
  position: absolute;
  width: 1.06rem;
  padding: 0.18rem 0.12rem 0 0.12rem;
  top: 0.5rem;
  right: 0rem;
  color: #ffffff;
  z-index: 100;
  border-radius: 0.06rem;
  text-align: center;
  background-color: #141217;
}

.select div {
  font-size: 0.14rem;
}

.select {
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-right: 10px;
}

.top-logo {
  height: 29px;
}

.model {
  width: 100%;
  height: calc(100vh - 54px);
  position: fixed;
  top: 54px;
  left: 0;
}

.select-div {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
}

@media screen and (max-width: 768px) {
  .top {
    width: calc(100% - 40px);
    height: 78px;
    /* background-color: #000; */
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    z-index: 100;
  }

  .select {
    margin-right: 0;
  }

  .top-logo {
    width: 88.74px;
    height: 42px;
    cursor: pointer;
  }

  .select img {
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  .flex-box {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
    margin-left: 20px;
  }

  .more {
    width: 30px !important;
    height: 28px !important;
    margin-top: 0 !important;
  }

  .menu div {
    margin-top: 0.3rem;
    font-size: 16px;
    padding-left: 0.24rem;
    color: white;
  }

  .menu {
    overflow: hidden;
    width: 2rem;
    /*padding-left: 50%;*/
    height: calc(100vh - 54px);
    position: fixed;
    top: 74px;
    left: 0;
    background: black;
  }

  .wallet {
    filter: brightness(100);
  }

  img {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 769px) {
  .flex-box {
    display: flex;
    align-items: center;
    height: 100%;
    width: calc(100% - 1.77rem);
    justify-content: space-between;
    margin-left: calc(1.77rem - 0.887rem - 30px);
  }

  .top {
    height: 74px;
    /* overflow: hidden; */
    z-index: 100;
    background: none;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: calc(100% - 30px);
    padding: 0 15px;
  }

  .top-logo {
    width: 88.7px;
    height: 42px;
    cursor: pointer;
  }

  .top-list {
    display: flex;
    align-items: center;
    /*width: 5rem;*/
    justify-content: space-between;
    /*margin-right: 2.1rem;*/
    position: relative;
    gap: 14px;
    /* font-size: 0.1rem; */
  }

  .top-list div {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    cursor: pointer;
  }

  .select-div {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
  }

  .select-val div:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  .select-div img {
    width: 0.1rem;
    height: 0.09rem;
    margin: 0 !important;
  }

  .select-val {
    position: absolute;
    width: 1.06rem;
    padding: 0.18rem 0.12rem 0 0.12rem;
    top: 75px;
    right: 0;
    color: #ffffff;
    z-index: 100;
    border-radius: 0.06rem;
    text-align: center;
    background-color: #000;
  }

  .select {
    margin-left: 15px;
    /*width: 1.06rem;*/
    height: 1.5rem;
  }

  .wallet {
    width: 20px !important;
    height: 20px !important;
    cursor: pointer;
    filter: brightness(100);
  }

  .select img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.7;
  }
}
</style>
