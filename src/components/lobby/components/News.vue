<template>
  <div class="news" ref="drawerContainer">
    <div class="advantage-box-title" v-if="screenSize != 'small'">
      <div class="left-text">
        <img src="../../../../static/image/news.png" alt="" class="news-logo" />
        {{ $t("menu.news") }}
      </div>
      <div class="right-text" @click="$router.push('/NewsInfo')">
        {{ $t("更多") }}
        <img src="../../../../static/image/moreNews.png" alt="" />
      </div>
    </div>
    <div class="advantage-box-title" v-if="screenSize == 'small'">
      <div class="left-text">
        <img src="../../../../static/image/news.png" alt="" class="news-logo" />
        {{ $t("menu.news") }}
      </div>
      <div class="right-text" @click="$router.push('/NewsInfo')">
        {{ $t("更多") }}
        <img src="../../../../static/image/moreNews.png" alt="" />
      </div>
    </div>
    <div class="news-info">
      <div
        class="news-item"
        v-for="(i, index) in list"
        :key="index"
        @click="jump(index)"
      >
        <div class="news-title">{{ sendTitle(i.info).title }}</div>
        <div class="time">
          <img src="../../../../static/image/time.png" alt="" />
          {{ handleTime(i.time) }}
        </div>
        <!-- <div class="news-msg">
					{{sendTitle(i.info).info.replace(/\\n/g,'') }}
				</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { handleTime } from "../../../utils/tool.js";
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
      lng: localStorage.getItem("locale") || "en",
      list: [
        // {
        // 	title: this.$t('news.news9Title'),
        // 	info: this.$t('news.news9Info'),
        // 	time: this.$t('news.time9')
        // },
        // // {
        // // 	title: this.$t('news.news8Title'),
        // // 	info: this.$t('news.news8Info'),
        // // 	time: this.$t('news.time8')
        // // },
        // {
        // 	title: this.$t('news.news7Title'),
        // 	info: this.$t('news.news7Info'),
        // 	time: this.$t('news.time7')
        // },
        // {
        // 	title: this.$t('news.news6Title'),
        // 	info: this.$t('news.news6Info'),
        // 	time: this.$t('news.time6')
        // },
        // {
        // 	title: this.$t('news.news5Title'),
        // 	info: this.$t('news.news5Info'),
        // 	time: this.$t('news.time6')
        // },
        // {
        // 	title: this.$t('news.news4Title'),
        // 	info: this.$t('news.news4Info'),
        // 	time: '2024-10-1'
        // },
        // {
        // 	title: this.$t('news.news3Title'),
        // 	info: this.$t('news.news3Info'),
        // 	time: '2024-9-29'
        // },
        // {
        // 	title: this.$t('news.news1Title'),
        // 	info: this.$t('news.news1Info'),
        // 	time: '2024-9-25'
        // },
        // {
        // 	title: this.$t('news.news2Title'),
        // 	info: this.$t('news.news2Info'),
        // 	time: '2024-9-25'
        // },
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleTime,
    getList() {
      const params = {
        pageNumber: 1,
        pageSize: 100
      };
      this.$root.api.getNoiceList(params).then(res => {
        this.list = res.result.list.slice(0, 4);
      });
    },
    sendTitle(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].lng == this.lng) {
          console.log(arr[i]);
          return arr[i];
        }
      }
    },
    jump(i) {
      this.$router.push({
        path: "NewsInfo",
        query: {
          active: i
        }
      });
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 769px) {
  .news {
    width: calc(100% - 20px);
    padding-left: 20px;
    z-index: 20;
  }

  .advantage-box-title {
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .left-text {
    display: flex;
    gap: 0.16rem;
    align-items: center;
    font-size: 0.24rem;
    color: rgba(167, 255, 140, 1);
    font-family: Outfit-Bold;
    font-weight: bold;
  }

  .left-text img {
    width: 0.34rem;
    height: 0.24rem;
  }

  .right-text {
    display: flex;
    gap: 0.16rem;
    align-items: center;
    font-family: Outfit-Bold;
    color: rgba(255, 255, 255, 0.54);
  }

  .right-text img {
    width: 0.2rem;
    height: 0.2rem;
  }

  .news-info {
    width: calc(100% - 0.2rem);
    /* overflow-x: auto; */
    display: -webkit-box;
    gap: 0.16rem;
    overflow-y: hidden;
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
  }

  .news-item {
    width: 3.2rem;
    padding: 0.16rem;
    border: 0.01rem solid rgba(90, 194, 124, 0.5);
    cursor: pointer;
    display: flex;
    flex-direction: column;

    z-index: 20;
    position: relative;
    box-sizing: border-box;
  }

  .news-title {
    height: 0.5rem;
    font-size: 0.18rem;
    word-break: break-all;
    color: #fff;
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
    white-space: normal;
    /* 允许换行 */
    display: -webkit-box;
    /* 将元素设置为弹性盒子 */
    -webkit-box-orient: vertical;
    /* 设置子元素的排列方向为垂直 */
    -webkit-line-clamp: 2;
    /* 限制显示的行数为两行 */
  }

  .time {
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    color: rgba(255, 255, 255, 0.6);
    width: 100%;
    margin-top: 0.16rem;
  }

  .time img {
    width: 0.12rem;
    height: 0.12rem;
    margin-right: 0.1rem;
  }

  .news-msg {
    width: 100%;
    height: 0.3rem;
    font-size: 0.16rem;
    word-break: break-all;
    color: #fff;
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
    white-space: normal;
    /* 允许换行 */
    display: -webkit-box;
    /* 将元素设置为弹性盒子 */
    -webkit-box-orient: vertical;
    /* 设置子元素的排列方向为垂直 */
    -webkit-line-clamp: 2;
    /* 限制显示的行数为两行 */
  }
}

@media screen and (min-width: 769px) {
  /* 修改滚动条的样式 */
  .news-info::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    /* 滚动条的宽度 */
  }

  .news-info::-webkit-scrollbar-track {
    background: #888;
    border-radius: 6px;
    /* 滚动条轨道的背景颜色 */
  }

  .news-info::-webkit-scrollbar-thumb {
    background: rgba(90, 194, 124, 1);
    /* 滚动条滑块的背景颜色 */
    border-radius: 6px;
    /* 滚动条滑块的圆角 */
  }

  .news-info::-webkit-scrollbar-thumb:hover {
    background: rgba(90, 194, 124, 0.7);
    cursor: pointer;
    /* 滚动条滑块悬停时的背景颜色 */
  }

  .news {
    width: 100%;
    padding: 0 1.8rem;
    position: relative;
    z-index: 20;
    box-sizing: border-box;
  }

  .news-logo {
    width: 0.34rem;
    height: 0.24rem;
  }

  .advantage-box-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.24rem;
    font-family: "Outfit-Bold";
    font-weight: bold;
  }
  .left-text {
    display: flex;
    gap: 0.16rem;
    align-items: center;
    font-size: 0.24rem;
    font-family: Outfit-Bold;
    color: #a7ff8c;
  }
  .right-text {
    display: flex;
    gap: 0.16rem;
    align-items: center;
    font-size: 0.14rem;
    font-family: Outfit-Bold;
    color: rgba(255, 255, 255, 0.54);
  }

  .right-text img {
    width: 0.2rem;
    height: 0.2rem;
  }
  .news-info {
    display: -webkit-box;
    display: flex;
    justify-content: space-between;
    gap: 0.16rem;
    overflow-y: hidden;
    padding-bottom: 0.2rem;
  }

  .news-item {
    width: 3.6rem;
    padding: 0.16rem;
    border: 0.01rem solid rgba(90, 194, 124, 0.5);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    z-index: 20;
    position: relative;
    box-sizing: border-box;
  }

  .news-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明的黑色蒙版 */
    pointer-events: none;
    /* 允许点击穿透蒙版 */
    transition: opacity 0.3s ease;
    /* 添加过渡效果 */
  }

  .news-item:hover::before {
    opacity: 0;
    /* 鼠标移入时，蒙版透明度变为0 */
  }

  .news-title {
    height: 0.4rem;
    font-size: 0.16rem;
    word-break: break-all;
    color: #fff;
    word-break: break-all;
    color: #fff;
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分显示省略号 */
    white-space: normal;
    /* 允许换行 */
    display: -webkit-box;
    /* 将元素设置为弹性盒子 */
    -webkit-box-orient: vertical;
    /* 设置子元素的排列方向为垂直 */
    -webkit-line-clamp: 2;
    /* 限制显示的行数为两行 */
  }

  .time {
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.09rem;

    width: 100%;
  }

  .time img {
    width: 0.12rem;
    height: 0.12rem;
    margin-right: 0.03rem;
  }

  .news-msg {
    width: 100%;
    height: 0.48rem;
    font-size: 0.18rem;
    /* word-break: break-all; */
    color: #fff;
    overflow: hidden;

    text-overflow: ellipsis;

    white-space: normal;

    display: -webkit-box;

    -webkit-box-orient: vertical;

    -webkit-line-clamp: 2;
  }
}
</style>
