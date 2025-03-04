<template>
  <div class="download">
    <video
      ref="videoPlayer1"
      class="video-box"
      loop
      :autoplay="true"
      playsinline
      :muted="true"
    >
      <source src="../../../static/image/foot-bg.mp4" type="video/mp4" />
    </video>

    <div class="download-box">
      <div class="btn-box">
        <div :class="active ? 'active' : ''" @click="active = 1">
          <img
            src="../../../static/image/download/iosIcon.png"
            alt=""
            class="iosIcon"
          />IOS
        </div>
        <div :class="!active ? 'active' : ''" @click="active = 0">
          <img
            src="../../../static/image/download/androidIcon.png"
            alt=""
            class="androidIcon"
          />Android
        </div>
      </div>
      <div class="content-box">
        <img
          v-if="this.screenSize !== 'small'"
          :src="
            active
              ? '../../../static/image/download/pcIos.png'
              : '../../../static/image/download/pcAndroid.png'
          "
          alt=""
          class="banner-img"
        />
        <img
          v-if="this.screenSize === 'small'"
          :src="
            active
              ? '../../../static/image/download/appIos.png'
              : '../../../static/image/download/appAndroid.png'
          "
          alt=""
          class="banner-img-app"
        />
        <div class="font-box">
          <div class="font-title">
            {{ $t("download.title", { type: active ? "IOS" : "Android" }) }}
          </div>
          <div class="font-info">
            {{ $t("download.info") }}
          </div>
          <div class="ios-box" v-if="active == 1">
            <div class="ios-item">
              <!-- <div>{{$t('download.lng1')}}</div> -->
              <div class="qr" v-if="this.screenSize !== 'small'">
                <img :src="iosImg1" alt="QR Code" />
              </div>
              <div
                class="download-btn"
                :class="active ? 'iosBtn' : ''"
                @click="download2"
              >
                <img
                  v-if="active"
                  src="../../../static/image/download/iosIcon.png"
                  alt=""
                  class="iosIcon"
                />
                <img
                  v-else
                  src="../../../static/image/download/androidIcon.png"
                  alt=""
                  class="androidIcon"
                />
                <div class="btn-text">
                  <div>{{ $t("download.get") }}</div>
                  <div>
                    {{ active ? $t("download.iosBtn") : $t("download.anBtn") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="android-item">
            <div class="qr" v-if="this.screenSize !== 'small' && active == 0">
              <img :src="qrcodeImage" alt="QR Code" />
            </div>

            <div
              class="download-btn"
              v-if="active == 0"
              :class="active ? 'iosBtn' : ''"
              @click="download"
            >
              <img
                v-if="active"
                src="../../../static/image/download/iosIcon.png"
                alt=""
                class="iosIcon"
              />
              <img
                v-else
                src="../../../static/image/download/androidIcon.png"
                alt=""
                class="androidIcon"
              />
              <div class="btn-text">
                <div>{{ $t("download.get") }}</div>
                <div>
                  {{ active ? $t("download.iosBtn") : $t("download.anBtn") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import QRCode from "qrcode";
export default {
  name: "Download",
  data() {
    return {
      screenSize: "",
      active: 0,
      qrcodeImage: "",
      iosImg1: "",
      iosImg2: "",
      apkDownloadUrl: process.env.android,
      ios1: process.env.ios,
      ios2: process.env.iosOverseas,
      iosUrl: "",
      isInMainland: null,
      isChina: false
    };
  },
  methods: {
    async getUrl() {
      try {
        const response = await fetch("https://ipinfo.io/json");
        const data = await response.json();
        const country = await data.country;
        // 判断是否在中国
        console.log(country);
        if (country == "CN") {
          this.isChina = true;
        } else {
          this.isChina = false;
        }
      } catch (error) {
        this.isChina = false;
        console.error("获取IP地理位置失败:", error);
      }
    },
    generateQRCode() {
      const options = {
        color: {
          dark: "#fff", // 二维码颜色
          light: "#0000" // 背景透明
        }
      };
      QRCode.toDataURL(this.apkDownloadUrl, options)
        .then(url => {
          this.qrcodeImage = url;
        })
        .catch(err => {
          console.error(err);
        });

      // if (this.isChina) {
      // 	QRCode.toDataURL(this.ios1, options)
      // 		.then(url => {
      // 			this.iosImg1 = url;
      // 		})
      // 		.catch(err => {
      // 			console.error(err);
      // 		});
      // } else {

      // 	QRCode.toDataURL(this.ios2, options)
      // 		.then(url => {
      // 			this.iosImg1 = url;
      // 		})
      // 		.catch(err => {
      // 			console.error(err);
      // 		});
      // }
      QRCode.toDataURL(this.ios2, options)
        .then(url => {
          this.iosImg1 = url;
        })
        .catch(err => {
          console.error(err);
        });
    },
    download() {
      const link = document.createElement("a");
      link.href = this.apkDownloadUrl;
      link.download = this.apkDownloadUrl; // 替换为你想要的文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    download2() {
      console.log(this.isChina);
      // if (this.isChina) {
      // 	const link = document.createElement('a');
      // 	link.href = this.ios1;
      // 	link.download = this.ios1; // 替换为你想要的文件名
      // 	document.body.appendChild(link);
      // 	link.click();
      // 	document.body.removeChild(link);
      // } else {
      const link = document.createElement("a");
      link.href = this.ios2;
      link.download = this.ios2; // 替换为你想要的文件名
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // }
    }
  },
  watch: {
    active: {
      handler(n) {
        this.qrcodeImage = "";
        this.generateQRCode();
      }
    }
  },
  mounted() {
    this.generateQRCode();
    this.getUrl();
    this.screenSize = sessionStorage.getItem("screenSize");
  }
};
</script>

<style>
.download {
  width: 100%;
  min-height: 100vh;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  position: relative;
  overflow: hidden;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

canvas {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.download-box {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  /* margin-bottom: 1rem !important; */
  z-index: 99;
}

.btn-box {
  width: 3.37rem;
  height: 70px;
  background: RGBA(15, 20, 25, 0.5);
  border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.05rem;
}

.btn-box div {
  width: calc(50% - 0.1rem);
  height: calc(100% - 0.1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.14rem;
  color: #fff;
  border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
  font-family: "Outfit-Bold";
  cursor: pointer;
}

.btn-box img {
  margin-right: 0.13rem;
}

.iosIcon {
  width: 0.26rem;
  height: 0.26rem;
}

.androidIcon {
  width: 0.24rem;
  height: 0.25rem;
}

.active {
  background-color: RGBA(42, 57, 71, 0.5);
}

.content-box {
  display: flex;
  gap: 0.85rem;
}

.banner-img {
  width: 2rem;
  height: 3.94rem;
}

.font-box {
  display: flex;
  flex-direction: column;
  width: 5rem;
}

.font-title {
  font-size: 0.24rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-family: "Outfit-Bold";
}

.font-info {
  font-size: 0.14rem;
  color: #fff;
  line-height: 0.21rem;
  margin-bottom: 0.4rem;
}

.qr {
  width: 1rem;
  height: 1rem;
}

.qr img {
  width: 100%;
  height: 100%;
}

.font-info2 {
  font-size: 0.16rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.12rem;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.55rem;
  width: 1.5rem;
  background: rgba(0, 193, 101, 1);
  border-radius: 0.06rem 0.06rem 0.06rem 0.06rem;
  cursor: pointer;
}

.download-btn img {
  margin-right: 0.12rem;
}

.iosBtn {
  background: #29a7dd;
}

.btn-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-text div:nth-child(1) {
  font-size: 0.12rem;
  color: white;
}

.btn-text div:nth-child(2) {
  font-size: 0.14rem;
  color: white;
  font-weight: bold;
}

.android-item {
  width: fit-content;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 0.1rem;
}

@media screen and (max-width: 768px) {
  .download {
    /* height: auto; */
    position: relative;
  }

  .download-box {
    margin-top: 0.86rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 99;
    gap: 0;
  }

  .btn-box {
    z-index: 100;
  }

  .btn-box div {
    height: 100%;
  }

  .btn-box img {
    margin-right: 0.07rem;
  }

  .btn-box .iosIcon {
    width: 0.2rem;
    height: 0.2rem;
  }

  .btn-box .androidIcon {
    width: 0.18rem;
    height: 0.2rem;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: center;
    margin-top: -0.4rem;
  }

  .banner-img-app {
    width: 3.75rem;
    height: 3.68rem;
  }

  .font-box {
    width: calc(100% - 0.32rem);
    margin: 0.34rem auto;
    display: flex;
    flex-direction: column;
  }

  .font-title {
    font-size: 0.24rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 0.1rem;
  }

  .font-info {
    font-size: 0.14rem;
    color: #fff;
    line-height: 0.16rem;
    margin-bottom: 0.4rem;
  }

  .download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.65rem;
    width: 100%;
    background: rgba(0, 193, 101, 1);
    border-radius: 0.06rem 0.06rem 0.06rem 0.06rem;
    cursor: pointer;
  }

  .download-btn img {
    margin-right: 0.08rem;
  }

  .iosBtn {
    background: #29a7dd;
  }

  .btn-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn-text div:nth-child(1) {
    font-size: 0.12rem;
    color: white;
  }

  .btn-text div:nth-child(2) {
    font-size: 0.14rem;
    color: white;
    font-weight: bold;
  }

  .ios-box {
    width: 100%;
    display: flex;
    gap: 0.2rem;
  }

  .ios-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 0.1rem;
  }

  .ios-item {
    font-size: 0.14rem;
    color: #fff;
  }

  .android-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }
}

.ios-box {
  display: flex;
  gap: 0.2rem;
}

.ios-item {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 0.1rem;
}

.ios-item {
  font-size: 0.14rem;
  color: #fff;
}

.video-box {
  position: fixed;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>
