<template>
  <div class="Ecosystem">
    <div class="Ecosystem_m"></div>
    <video
      ref="videoPlayer1"
      v-if="screenSize != 'small'"
      class="video-box"
      loop
      :autoplay="true"
      webkit-playsinline
      playsinline
      :muted="true"
    >
      <source src="../../../static/image/Product/bg.mp4" type="video/mp4" />
    </video>
    <div class="Ecosystem-box">
      <section id="Ecosystem1">
        <div class="Ecosystem-box-title">
          {{ $t("appTitle") }}
        </div>
      </section>
      <div class="Ecosystem-box1">
        <div
          v-for="(i, index) in list"
          :key="index"
          class=""
          :class="i.title ? '' : 'Ecosystem-item'"
        >
          <div class="Ecosystem-title">
            {{ $t(i.title) }}
          </div>
          <div class="Ecosystem-box-main">
            <a
              v-for="(item, key) in i.list"
              :key="key"
              :href="item.link || 'javascript:void(0)'"
              :class="{ cursor_allowed: !item.link }"
              @contextmenu="handleRightClick(item, $event)"
            >
              <div
                class="Ecosystem-items"
                :class="{ 'Ecosystem-itemf': item.link }"
              >
                <img
                  v-if="item.img"
                  :src="item.img"
                  alt=""
                  class="product-logo"
                />

                <div v-else class="product-logoS"></div>
                <!-- <div class='Ecosystem-info'></div> -->
                <div class="Ecosystem-info">{{ item.text || "--" }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { listLink } from "./listLiink.js";
export default {
  name: "Ecosystem",
  computed: mapState({
    screenSize(state) {
      return state.screenSize;
    }
  }),
  data() {
    return {
      list: listLink
    };
  },
  methods: {
    handleRightClick(item, event) {
      if (!item.link) event.preventDefault();
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style scoped>
@media screen and (max-width: 769px) {
  .Ecosystem {
    position: relative;
    background: #000000;
    min-height: 100vh;
  }

  .Ecosystem-box {
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .Ecosystem-box-title {
    width: 100%;
    display: flex;
    font-family: "Outfit-Bold";
    font-weight: bold;
    align-items: center;
    justify-content: center;
    font-size: 0.22rem;
    margin: 1.23rem 0 0.43rem 0;
    text-transform: uppercase;
  }

  .Ecosystem-box1 {
    padding: 0 0.13rem;
  }

  .Ecosystem-box-main {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.08rem;
  }

  .Ecosystem-title {
    font-size: 0.2rem;
    font-family: "Outfit-Bold";
    color: #ffffff;
    padding: 0.16rem 0;
    /* flex-basis: 100%; */
    /* 设置为占满一行 */
    width: 100%;
    /* 备用方案，确保跨行兼容 */
  }

  .product-logo {
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 50%;
    object-fit: contain;
  }

  .product-logoS {
    width: 0.48rem;
    height: 0.48rem;
    gap: 0px;
    border-radius: 50%;
    background: #000000;
  }

  .Ecosystem-item {
    gap: 0.16rem;
    padding: 0 0 0.16rem 0;
  }

  .Ecosystem-items {
    /* width: 1.68rem; */
    width: 1.2rem;
    height: 1.2rem;
    /* padding: .13rem .16rem; */
    background-image: linear-gradient(
      180deg,
      rgb(25 25 25 / 0.9) 0%,
      rgb(14 14 14 / 0.9) 100%
    );

    border: 1px solid #ffffff29;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .Ecosystem-itemf {
    animation: all 0.5s infinite;
    position: relative;
  }

  .Ecosystem-itemf:hover {
    transform: scale(1.05);
    transform: scale(1.2);
    /* 图片从中心向外扩展 */
    z-index: 3;
  }

  /* .zero {
    width: 0.77rem;
    height: 0.77rem;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: absolute;
    top: -0.1438rem;
    right: -0.26rem;
    display: none;

  } */

  .Ecosystem-info {
    font-size: 0.14rem;
    font-family: "Outfit-Bold";
    color: #ffffff;
    padding-top: 0.08rem;
  }
}

@media screen and (min-width: 769px) {
  .Ecosystem {
    position: relative;
    background: #000000;
    min-height: 100vh;
  }

  .Ecosystem-box {
    width: calc(100% - 3.6rem);
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .Ecosystem-box-title {
    width: 100%;
    display: flex;
    font-family: "Outfit-Bold";
    font-weight: bold;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin: 1.23rem 0 0.8818rem 0;
    gap: 0.16rem;
    text-transform: uppercase;
  }

  .video-box {
    width: 100%;
    height: 9.41rem;
    position: fixed;
    left: 0rem;
    top: -1rem;
    z-index: 0;
    transform: scaleX(-1);
    object-fit: cover;
  }

  .Ecosystem-box1 {
    /* display: grid;
     */
    /* flex-wrap: wrap; */
  }

  .Ecosystem-box-main {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.182rem;
  }

  .Ecosystem-title {
    font-size: 0.2rem;
    font-family: "Outfit-Bold";
    color: #ffffff;
    padding: 0.2482rem 0 0.1631rem;
    /* flex-basis: 100%; */
    /* 设置为占满一行 */
    width: 100%;
    /* grid-column: span 6 / span 6; */
    /* 备用方案，确保跨行兼容 */
  }

  .product-logo {
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    object-fit: contain;
  }

  .product-logoS {
    width: 0.72rem;
    height: 0.72rem;
    gap: 0.18;
    border-radius: 24px;
    background: #000000;
  }

  .Ecosystem-item {
  }

  .Ecosystem-items {
    width: 2.91rem;
    height: 1.04rem;
    padding: 0.13rem 0.16rem;
    background-image: linear-gradient(
      180deg,
      rgb(25 25 25 / 0.9) 0%,
      rgb(14 14 14 / 0.9) 100%
    );
    border: 1px solid #ffffff29;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 0.16rem;
    display: flex;
    align-items: center;
    color: #ffffff;
    transition: transform 0.3s ease;
  }

  .Ecosystem-itemf {
    z-index: 2;
    position: relative;
  }

  .Ecosystem-itemf:hover {
    transform: scale(1.2);
    /* 图片从中心向外扩展 */
    z-index: 3;
  }

  .Ecosystem-prohibit {
  }

  /* .zero {
    width: 0.77rem;
    height: 0.77rem;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: absolute;
    top: -0.1438rem;
    right: -0.26rem;

  } */

  .Ecosystem-info {
    font-size: 0.2rem;
    color: #ffffff;
    padding-left: 0.24rem;
  }
}

.Ecosystem-box-title {
  background-image: linear-gradient(
    rgb(90, 194, 124) 0%,
    rgb(178, 226, 53) 100%
  );
  background-clip: text;
  color: transparent;
  font-family: "Outfit-Bold";
}

.cursor_allowed {
  cursor: not-allowed;
}
.Ecosystem_m {
  position: fixed;
  left: 0rem;
  top: 0rem;
  height: 100vh;
  width: 100vw;
  background: #000000;
  z-index: 0;
}
</style>
