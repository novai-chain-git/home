<template>
  <!-- 探索产品 -->
  <div class="project-content">
    <section id="select2">
      <div class="center-title">
        <img src="../../../../static/image/news.png" alt="" class="news-logo" />
        {{ $t("menu.project") }}
      </div>
      <!-- <div class="product-box">
        <div class="product-item" v-for="(i, index) in list" :class="active == index ? 'hover-css' : ''"
          @mouseenter="active = index" @click="link(i)">
          <div class="zero" v-if="active != index"></div>
          <img v-if="active == index && i.link || active == index && i.router"
            src="../../../../static/image/colorUp.png" alt="" class="color-up">
          <img :src="i.img" alt="" class="product-logo" :class="'logo' + index">
          <div class="product-info">{{ i.text }}</div>
          <div class="product-text" v-if="active == index && i.info">{{ i.info }}</div>
        </div>
      </div> -->
    </section>
    <div class="cart" v-for="(i, index) in lists" :key="index">
      <div class="cart-title">{{ $t(i.title) }}</div>
      <div class="cart-main">
        <a
          v-for="item in i.list.slice(0, 5)"
          :key="item.text"
          :class="{ cursor_allowed: !item.link }"
          :href="item.link || 'javascript:void(0)'"
        >
          <div class="cart_item" :class="{ cart_items: item.link }">
            <img v-if="item.img" :src="item.img" alt="" class="cart-logo" />
            <div v-else class="cart-logoS"></div>
            <div class="cart_item_title">{{ item.text }}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="cart_buttom">
      <router-link to="/Ecosystem">
        <span>{{ buttonText }} </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { listLink } from "@/components/Ecosystem/listLiink";
export default {
  data() {
    return {
      active: -1,
      buttonText: `${this.$t("products.ViewAll")} >>`,
      lists: listLink,
      list: [
        {
          text: this.$t("project.title1"),
          info: this.$t("project.info1"),
          link: "https://scan.novaichain.com/novaichain",
          img: "../../../../static/image/Product/1.png"
        },
        {
          text: this.$t("project.title2"),
          info: this.$t("project.info2"),
          img: "../../../../static/image/Product/2.png"
        },
        {
          text: this.$t("download.Npay"),
          info: this.$t("download.info"),
          router: "/Download",
          img: "../../../../static/image/Product/3.png"
        },
        {
          text: this.$t("project.title8"),
          info: this.$t("project.info8"),
          img: "../../../../static/image/Product/4.png"
        },
        {
          text: this.$t("project.title2"),
          info: this.$t("project.info2"),
          img: "../../../../static/image/Product/5.png"
        },
        {
          text: this.$t("project.title9"),
          info: this.$t("project.info9"),
          img: "../../../../static/image/Product/6.png"
        },
        {
          text: this.$t("project.title3"),
          info: this.$t("project.info3"),
          link: "https://swap.novaichain.com",
          img: "../../../../static/image/Product/7.png"
        },
        {
          text: this.$t("project.title6"),
          info: this.$t("project.info6"),
          img: "../../../../static/image/Product/8.png"
        },
        {
          text: this.$t("project.title10"),
          info: this.$t("project.info10"),
          img: "../../../../static/image/Product/9.png"
        },
        {
          text: this.$t("project.title7"),
          info: this.$t("project.info7"),
          img: "../../../../static/image/Product/10.png"
        },
        {
          text: "Dragon Metaverse",
          img: "../../../../static/image/Product/11.png",
          link: "https://dapp.dragmeta.vip"
        },
        {
          text: "WinFi",
          img: "../../../../static/image/Product/12.png",
          link: "https://www.winfi.io"
        },
        {
          text: "Hold`em",
          img: "../../../../static/image/Product/13.png"
        },
        {
          text: "Warcraft",
          img: "../../../../static/image/Product/14.png"
        }
      ]
    };
  },
  methods: {
    link(i) {
      if (i.link) {
        window.open(i.link);
      } else if (i.router) {
        this.$router.push(i.router);
      }
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .project-content {
    width: 100%;
    padding: 0 0.13rem;
    box-sizing: border-box;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .center-title {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    font-size: 0.24rem;
    color: #a7ff8c;
    margin: 0.64rem 0 0.25rem 0;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }

  .product-box {
    width: 100%;
    display: flex;
    gap: 0.15rem;
    flex-wrap: wrap;
    justify-content: start;
  }

  .product-item {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 0.16rem;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid rgba(166, 255, 138, 0.1);
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    cursor: pointer;
    /* margin-bottom: 0rem; */
  }

  .hover-css {
    width: 100%;
    min-height: 1.81rem;
    padding: 0.2rem 0;
    height: auto;
    color: rgba(166, 255, 138, 0.05);
    box-sizing: border-box;
    border-radius: 0.16rem;
    border: 1px solid rgba(166, 255, 138, 1);
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.15rem;
  }

  .zero {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
  }

  .color-up {
    width: 0.21rem;
    height: 0.21rem;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }

  .product-logo {
    margin-top: 0.2rem;
    margin-left: 0.1rem;
  }

  .hover-css .product-logo {
    margin-top: 0rem;
    margin-left: 0.15rem;
  }

  .hover-css .product-info {
    position: unset;
    color: #fff;
    font-family: Outfit-Bold;
    font-weight: bold;
  }

  .hover-css .product-text {
    width: calc(100% - 0.3rem);
    margin-left: 0.15rem;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
  }

  .product-info {
    width: calc(100% - 0.2rem);
    padding: 0 0.1rem;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
    position: absolute;
    bottom: 0.15rem;
  }

  .logo0 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .logo1 {
    width: 0.46rem;
    height: 0.36rem;
  }

  .logo2 {
    width: 0.36rem;
    height: 0.36rem;
  }

  .logo3 {
    width: 0.57rem;
    height: 0.36rem;
  }

  .logo4 {
    width: 0.36rem;
    height: 0.36rem;
  }

  .logo5 {
    width: 0.386rem;
    height: 0.36rem;
  }

  .logo6 {
    width: 0.523rem;
    height: 0.36rem;
  }

  .logo7 {
    width: 0.342rem;
    height: 0.36rem;
  }

  .logo8 {
    width: 0.342rem;
    height: 0.36rem;
  }

  .logo9 {
    width: 0.225rem;
    height: 0.223rem;
  }

  .logo10 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .logo11 {
    width: 0.46rem;
    height: 0.47rem;
  }

  .logo12 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .logo13 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .cart {
    font-family: Outfit-Bold;
    font-weight: 700;
  }

  .cart-title {
    font-size: 0.2rem;
    padding-bottom: 0.16rem;
    color: #ffffff;
  }

  .cart-main {
    /* display: flex;
    align-items: center;

    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.08rem;
  }

  .cart_item {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.24rem;
    border: 1px solid #ffffff29;
    box-sizing: border-box;
    animation: all 0.5s infinite;
    background-image: linear-gradient(
      180deg,
      rgb(25 25 25 / 0.9) 0%,
      rgb(14 14 14 / 0.9) 100%
    );
  }

  .cart_items {
    position: relative;
    z-index: 2;
  }

  .cart_items:hover {
    transform: scale(1.05);
    /* 图片从中心向外扩展 */
    z-index: 3;
  }

  .cart_item_title {
    font-size: 0.12rem;
    padding-top: 0.1rem;
    color: rgba(255, 255, 255, 0.54);
  }

  .cart_buttom {
    background-color: rgba(255, 255, 255, 0.05);

    padding: 10px 0;
    font-size: 0.14rem;
    text-align: center;
    color: rgba(166, 255, 138, 1);
    font-family: Outfit-Bold;
    cursor: pointer;
  }

  .cart-logo {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 50%;
    object-fit: contain;
  }

  .cart-logoS {
    width: 0.42rem;
    height: 0.42rem;
    gap: 0px;
    border-radius: 50%;
    background: #000000;
  }
}

@media screen and (min-width: 769px) {
  .project-content {
    /* width: calc(100% - 1.78rem - 20px); */

    padding: 0 1.8rem;
    background-image: url("/static/image/svg/77575.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0px 2.74rem;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .center-title {
    display: flex;
    align-items: center;
    gap: 0.16rem;
    font-size: 0.24rem;
    color: #a7ff8c;
    margin: 0.64rem 0 0.24rem 0;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }

  .product-box {
    width: 100%;
    display: flex;
    gap: 0.2rem;
    flex-wrap: wrap;
  }

  .product-item {
    width: 1.68rem;
    height: 1.68rem;
    border-radius: 0.16rem;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid rgba(166, 255, 138, 0.1);
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    cursor: pointer;
  }

  .hover-css {
    width: 3.2rem;
    min-height: 1.81rem;
    padding: 0.2rem 0;
    height: auto;
    color: rgba(166, 255, 138, 0.05);
    box-sizing: border-box;
    border-radius: 0.16rem;
    border: 1px solid rgba(166, 255, 138, 1);
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.15rem;
  }

  .zero {
    width: 0.77rem;
    height: 0.77rem;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: absolute;
    top: -0.335rem;
    right: -0.335rem;
  }

  .color-up {
    width: 0.21rem;
    height: 0.21rem;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }

  .product-logo {
    margin-top: 0.6rem;
    margin-left: 0.15rem;
  }

  .hover-css .product-logo {
    margin-top: 0rem;
    margin-left: 0.15rem;
  }

  .hover-css .product-info {
    position: unset;
    color: #fff;
    font-family: Outfit-Bold;
    font-weight: bold;
  }

  .hover-css .product-text {
    width: calc(100% - 0.3rem);
    margin-left: 0.15rem;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
  }

  .product-info {
    width: calc(100% - 0.3rem);
    padding: 0 0.15rem;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
    position: absolute;
    bottom: 0.35rem;
  }

  .logo0 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .logo1 {
    width: 0.46rem;
    height: 0.36rem;
  }

  .logo2 {
    width: 0.36rem;
    height: 0.36rem;
  }

  .logo3 {
    width: 0.57rem;
    height: 0.36rem;
  }

  .logo4 {
    width: 0.36rem;
    height: 0.36rem;
  }

  .logo5 {
    width: 0.386rem;
    height: 0.36rem;
  }

  .logo6 {
    width: 0.523rem;
    height: 0.36rem;
  }

  .logo7 {
    width: 0.342rem;
    height: 0.36rem;
  }

  .logo8 {
    width: 0.342rem;
    height: 0.36rem;
  }

  .logo9 {
    width: 0.225rem;
    height: 0.223rem;
  }

  .logo10 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .logo11 {
    width: 0.46rem;
    height: 0.47rem;
  }

  .logo12 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .logo13 {
    width: 0.46rem;
    height: 0.46rem;
  }

  .cart {
    font-family: Outfit-Bold;
    font-weight: 700;
  }

  .cart-title {
    font-size: 0.2rem;
    padding-bottom: 0.16rem;
    color: #ffffff;
  }

  .cart-main {
    /* display: flex;
    align-items: center;
    gap: .14rem; */
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.182rem;
  }

  .cart_item {
    width: 2.91rem;
    height: 1.04rem;
    border-radius: 0.16rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.24rem;
    border: 1px solid #ffffff29;
    padding: 0 0.16rem;
    box-sizing: border-box;
    transition: transform 0.3s ease;
    background-image: linear-gradient(
      180deg,
      rgb(25 25 25 / 0.9) 0%,
      rgb(14 14 14 / 0.9) 100%
    );
    /* 添加平滑的放大动画 */
    /*transform-origin: center center; */

    /* 设置缩放的中心点 */
  }

  .cart_items {
    position: relative;
    z-index: 2;
  }

  .cart_items:hover {
    transform: scale(1.2);
    /* 图片从中心向外扩展 */
    z-index: 3;
  }

  .cart_item_title {
    font-size: 0.2rem;
    color: #ffffff;
    padding-left: 0.24rem;
  }

  .cart_buttom {
    max-width: 10.24rem;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 10px 0;
    font-size: 0.2rem;
    text-align: center;
    color: rgba(166, 255, 138, 1);
    font-family: Outfit-Bold;
    cursor: pointer;
    margin: 0 auto;
  }

  .cart-logo {
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    object-fit: contain;
  }

  .cart-logoS {
    width: 0.72rem;
    height: 0.72rem;
    gap: 0px;
    border-radius: 50%;
    background: #000000;
  }
}

@keyframes hoverUp {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.05);
  }
}

.cursor_allowed {
  cursor: not-allowed;
}
</style>
