<template>
  <div id="app">
    <Top />
    <router-view ref="hometo" />
  </div>
</template>

<script>
import { ethers } from "ethers";
import Top from "./components/public/top";
import web3tools from "./web3/web3tools";
export default {
  name: "App",
  components: {
    Top
  },
  data() {
    return {
      screenSize: "",
      lng: ""
    };
  },
  created() {
    // document.getElementById('load-box').remove();
  },
  mounted() {
    // 监听窗口大小变化
    window.addEventListener("resize", this.handleResize);
    // 初始设置屏幕大小状态
    this.setSize();
    if (this.$route.query.lng) {
      localStorage.setItem("locale", this.$route.query.lng);
    }
  },
  methods: {
    handleResize() {
      // 窗口大小变化时重新设置屏幕大小状态
      this.setSize();
    },
    setSize() {
      const screenWidth =
        window.innerWidth || document.documentElement.clientWidth;
      console.log();
      if (screenWidth >= 768) {
        this.screenSize = "medium";
      } else {
        this.screenSize = "small";
      }
      if (this.screenSize !== sessionStorage.getItem("screenSize")) {
        sessionStorage.setItem("screenSize", this.screenSize);
        window.location.reload();
      }

      this.$store.dispatch("setScreenSize", this.screenSize);
      console.log(this.$store);
    }
  }
};
</script>

<style>
body {
  /* width: 100%; */
  /* height: 100vh; */
  /*background: url(../static/image/BG1.png) !important;*/
  width: 100%;
  min-height: 100vh;
  background-color: #0b0b0b !important;
  /*background-size: 100% 100% !important;*/
  /*background-repeat: no-repeat !important;*/
  /*background-position: center !important;*/
  /* overflow: hidden; */
  font-family: "Outfit";
}

#app {
  width: 100%;
  min-height: 100vh;
  /* background-color: #0B0B0B !important; */
  /*background: url(../static/image/BG1.png) !important;*/
  /*background-size: 100% 100% !important;*/
  /*background-repeat: no-repeat !important;*/
  /*background-position: center !important;*/
  /* overflow: auto; */
}

.preventReClick {
  pointer-events: none;
  background: linear-gradient(#ffffff, #999999) !important;
  /*background: #929292 !important;*/
}

.mint-msgbox {
  /*background-image: url(../static/image/tisBG.png);*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: transparent !important;
  width: 94%;
}

.mint-msgbox-btn {
  background-color: transparent !important;
  width: 1.03rem !important;
  flex: none !important;
  border-radius: 0.18rem !important;
  color: #000000 !important;
  font-size: 0.2rem !important;
  background: linear-gradient(#fffc00, #db7100);
  line-height: 0.36rem !important;
  margin-bottom: 0.34rem !important;
}

.mint-msgbox-btn:first-child {
  margin-left: 0.33rem !important;
}

.mint-msgbox-content {
  border-bottom: 0 !important;
  padding: 0.76rem 0.26rem 0.42rem !important;
}

.mint-msgbox-message {
  color: #ffffff !important;
  font-size: 0.1867rem !important;
  line-height: 0.2518rem !important;
  text-transform: uppercase !important;
}

.mint-msgbox-btns {
  height: auto !important;
  line-height: normal !important;
  padding-bottom: 0.28rem !important;
  justify-content: center !important;
  flex-flow: row-reverse !important;
}

.mint-toast.is-placebottom,
.mint-toast.is-placemiddle {
  width: max-content !important;
}

.load {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}

.nolist {
  color: #ffffff;
  margin-top: 0.2rem;
  text-align: center;
}

.slide-verify {
  background: #ffffff;
}

.slide-verify-slider {
  width: auto !important;
}

.movebutton span {
  display: none;
  z-index: -1;
}

.movebutton:active {
  transform: translateX(6px) translateY(6px);
  position: relative;
  overflow: hidden;
  transition-delay: 0.1s;
}

.movebutton:active span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5) !important;
  z-index: -1;
}
</style>
