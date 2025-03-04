<template>
  <div class="ai-model-support">
    <div class="title">
      <img src="../../../../static/image/news.png" alt="" class="news-logo" />
      {{ $t("AIModelSupport") }}
    </div>
    <div class="content">
      <div class="ai-model-left">
        <img
          src="../../../../static/image/aimodelsupport/deepseek.svg"
          alt=""
        />
        <span>DeepSeek 70B</span>
      </div>
      <div class="ai-model-right">
        <div class="ai-model-right-top">
          <div class="box">
            <img
              src="../../../../static/image/aimodelsupport/stablediffusion.svg"
              alt=""
            />
            <span>Stable Diffusion</span>
          </div>
          <div class="box">
            <img
              src="../../../../static/image/aimodelsupport/deepseektwo.svg"
              alt=""
            />
            <span>DeepSeek-MOE</span>
          </div>
        </div>
        <div class="ai-model-right-bottom">
          <div class="box">
            <img
              src="../../../../static/image/aimodelsupport/Llama.svg"
              alt=""
            />
            <span>LLama 7B</span>
          </div>
          <div class="box">
            <img
              src="../../../../static/image/aimodelsupport/BERT.svg"
              alt=""
            />
            <span>BERT</span>
          </div>
          <div class="box">
            <img src="../../../../static/image/aimodelsupport/t5.svg" alt="" />
            <span>T5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AIModelSupport",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.ai-model-support {
  padding: 0 1.8rem;
  color: #fff;
}
.ai-model-support .title {
  display: flex;
  align-items: center;
  gap: 0.16rem;
  font-size: 0.24rem;
  color: #a7ff8c;
  margin: 0.64rem 0 0.24rem 0;
  font-family: "Outfit-Bold";
  font-weight: bold;
}

.ai-model-support .news-logo {
  width: 0.34rem;
  height: 0.24rem;
}
.ai-model-support .content {
  height: 4.6rem;
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
  margin-top: 0.4rem;
}
.ai-model-support .content .ai-model-left {
  width: 5.9rem;
  border: 1px solid rgba(90, 194, 124, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.24rem;
  font-weight: bold;
}
.ai-model-support .content .ai-model-left > img {
  width: 1.05rem;
  height: 0.75rem;
  margin-bottom: 0.2rem;
}
.ai-model-support .content .ai-model-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.ai-model-support .content .ai-model-right .ai-model-right-top {
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
}
.ai-model-support .content .ai-model-right .ai-model-right-top .box {
  flex: 1;
  height: 1.56rem;
  border: 1px solid rgba(90, 194, 124, 1);
  padding: 0 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.24rem;
  font-weight: bold;
}
.ai-model-support .content .ai-model-right .ai-model-right-top .box > img {
  width: auto;
  height: 0.45rem;
  margin-bottom: 0.12rem;
}

.ai-model-support .content .ai-model-right .ai-model-right-bottom {
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
}
.ai-model-support .content .ai-model-right .ai-model-right-bottom .box {
  flex: 1;
  height: 2.83rem;
  border: 1px solid rgba(90, 194, 124, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.24rem;
  font-weight: bold;
}
.ai-model-support .content .ai-model-right .ai-model-right-bottom .box > img {
  width: auto;
  height: 0.61rem;
  margin-bottom: 0.1rem;
}

@media screen and (max-width: 768px) {
  .ai-model-support {
    padding: 0 0.13rem;
  }
  .ai-model-support .title {
    width: 100%;
    gap: 0.1rem;
  }

  .ai-model-support .content {
    height: 2rem;
    gap: 0.1rem;
    margin-top: 0.2rem;
  }
  .ai-model-support .content .ai-model-left {
    width: 1rem;
    border: 1px solid rgba(90, 194, 124, 1);
    font-size: 0.12rem;
  }
  .ai-model-support .content .ai-model-left > img {
    width: 0.5rem;
    height: auto;
  }
  .ai-model-support .content .ai-model-right {
    flex: 1;
  }
  .ai-model-support .content .ai-model-right .ai-model-right-top {
    gap: 0.1rem;
  }
  .ai-model-support .content .ai-model-right .ai-model-right-top .box {
    flex: 1;
    height: 0.7rem;
    padding: 0 0.1rem;
    font-size: 0.12rem;
  }
  .ai-model-support .content .ai-model-right .ai-model-right-top .box > img {
    width: auto;
    height: 0.25rem;
    margin-bottom: 0.08rem;
  }

  .ai-model-support .content .ai-model-right .ai-model-right-bottom {
    gap: 0.1rem;
  }
  .ai-model-support .content .ai-model-right .ai-model-right-bottom .box {
    flex: 1;
    height: 1.2rem;
    font-size: 0.12rem;
  }
  .ai-model-support .content .ai-model-right .ai-model-right-bottom .box > img {
    width: auto;
    height: 0.3rem;
    margin-bottom: 0.08rem;
  }
}
</style>
