<template>
  <div class="advantage-index" id="products" ref="drawerContainer">
    <div class="advantage-box">
      <!-- <video ref="videoPlayer1" v-if="screenSize!='small'" class="video-box" loop :autoplay="true" playsinline
				:muted="true">
				<source src="../../../../static/image/Product/bg.mp4" type="video/mp4" />
			</video> -->
      <section id="select1">
        <div class="advantage-box-title">
          <img
            src="../../../../static/image/news.png"
            alt=""
            class="news-logo"
          />
          {{ $t("services.title") }}
        </div>
      </section>
    </div>

    <div class="card">
      <!-- <div class="card-Meng"></div> -->
      <div class="card-box">
        <div class="card-item" v-for="i in card" :key="i.title">
          <div class="card-title">{{ i.title }}</div>
          <div class="card-info">{{ i.msg }}</div>
          <img
            class="card-circle"
            src="../../../../static/image/svg/ellipse.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "advantega2",
  computed: mapState({
    screenSize(state) {
      return state.screenSize;
    }
  }),
  data() {
    return {
      card: [
        {
          title: "Novai Chain",
          msg: this.$t("services.textone")
        },
        {
          title: "Novai Bridge",
          msg: this.$t("services.texttwo")
        },
        {
          title: "ORACLE",
          msg: this.$t("services.textthree")
        },
        {
          title: "AI Agent Contact Group",
          msg: this.$t("services.textfour")
        },
        {
          title: "AI Agent Studio",
          msg: this.$t("services.textfive")
        },
        {
          title: "NPay",
          msg: this.$t("services.textsix")
        },
        {
          title: "APIToy",
          msg: this.$t("services.textseven")
        },
        {
          title: "AIAM",
          msg: this.$t("services.texteight")
        }
      ],
      activeIndex: 0,
      lastScrollY: 0,
      n: 0,
      msg: {
        title: this.$t("优势一"),
        msg: this.$t("mk"),
        img: "../../../../static/image/2.png",
        index: 4
      }
    };
  },
  mounted() {},
  methods: {
    change() {
      this.n++;
      if (this.n == 4) {
        this.n = 0;
      }
      this.msg = this.card[this.n];
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 769px) {
  .advantage-index {
    width: calc(100% - 0.48rem);
    padding-left: 0.24rem;
  }

  .advantage-box {
    width: 100%;
    height: 100%;
  }

  .advantage-box-title {
    width: 100%;
    display: flex;
    align-items: center;

    font-size: 0.24rem;
    font-family: Outfit-Bold;
    color: rgba(167, 255, 140, 1);
    margin: 0.3rem 0 0.3rem 0;
    gap: 0.16rem;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .card-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1 0 50%;
    gap: 0.08rem;
  }

  .card-item {
    width: calc(50% - 0.04rem);
    height: auto;
    padding: 0.08rem;
    border-radius: 0.16rem;
    border: 1px solid rgba(90, 194, 124, 1);
    z-index: 20;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: transform 3s;
    background: blur 4px;
    box-sizing: border-box;
    position: relative;
  }

  .card-item:hover {
    animation: hoverUp 1.5s infinite alternate;
  }

  @keyframes hoverUp {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.05);
    }
  }

  .card-title {
    font-size: 0.18rem;
    color: white;
    font-family: Outfit-Bold;
    font-weight: bold;
    margin-bottom: 0.16rem;
  }

  .card-info {
    font-size: 0.12rem;
    color: rgba(255, 255, 255, 0.54);
  }

  .card-item img {
    width: 0.69rem;
    height: 0.55rem;
    position: absolute;
    top: 0;
    right: 0;
  }
}

#select1 {
  overflow-y: hidden;
}

@media screen and (min-width: 769px) {
  .advantage-index {
    margin: 0 auto;
    position: relative;
    padding: 0 1.8rem;
  }

  .advantage-box {
    width: 100%;
    height: 100%;
  }

  .advantage-box-title {
    width: 100%;
    display: flex;
    font-family: "Outfit-Bold";
    font-weight: bold;
    align-items: center;
    font-size: 0.24rem;
    color: rgba(167, 255, 140, 1);
    margin: 0.84rem 0 0.24rem 0;
    gap: 0.16rem;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .card-box {
    width: 100%;

    /* display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr)); */

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1 0 25%;
    /* display: flex;
			flex-direction: row;
			justify-content: start; */
    /* gap: 0.578rem; */
  }
  .card {
    position: relative;
  }

  .card-item {
    width: 3.6rem;
    height: 1.4rem;
    padding: 0 0.3rem;
    padding-top: 0.3rem;
    border-radius: 0.16rem;
    border: 1px solid rgba(90, 194, 124, 1);
    z-index: 20;
    cursor: pointer;
    transition: transform 3s;
    background: blur 4px;
    box-sizing: border-box;
    position: relative;
  }
  .card-item:nth-child(n + 5) {
    margin-top: 0.24rem;
  }

  .card-item:hover {
    animation: hoverUp 1.5s infinite alternate;
  }
  @keyframes hoverUp {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.05);
    }
  }

  .card-title {
    width: 100%;
    text-align: left;
    word-wrap: break-word;
    font-size: 0.2rem;
    color: white;
    margin-bottom: 0.16rem;
    font-family: Outfit-Bold;
    font-weight: bold;
  }

  .card-info {
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.54);
  }

  .card-item img {
    width: 0.69rem;
    height: 0.55rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  .card-item-img {
    display: flex;
    justify-items: center;
  }

  .video-box {
    width: 100%;
    height: 9.43rem;
    position: absolute;
    left: 0;
    top: 4rem;
    z-index: -1;
  }
}
</style>
