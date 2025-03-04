import Vue from "vue";
import VueI18n from "vue-i18n";
import cht from "./config/zh";
import en from "./config/en";
import zh from "./config/zh_CN";
import fr_FR from "./config/fr_FR";
import ko_KR from "./config/ko_KR";
import en_my from "./config/en_my";
import ja_JP from "./config/ja_JP";
import en_TH from "./config/en_TH";
import es_ES from "./config/es_ES";
import en_ID from "./config/en_ID";
import vi_VN from "./config/vi_VN";
// zh 中文简体
// en 英语
// cht 中文繁体
// fr_FR 法语
// ko_KR 韩语
// en_my 马来西亚
// ja_JP 日本
// en_TH 泰国
// es_ES 西班牙
// en_ID 印尼
// vi_VN 越南
Vue.use(VueI18n);
const i18n = new VueI18n({
  messages: {
    zh: zh,
    en: en,
    cht: cht,
    fr: fr_FR,
    ko: ko_KR,
    my: en_my,
    jp: ja_JP,
    th: en_TH,
    es: es_ES,
    id: en_ID,
    vi: vi_VN
  },

  locale: localStorage.getItem("locale") || "en"
});

export default i18n;
