export const getWhitePaperLink = lang => {
  if (lang === "zh_CH" || lang === "zh" || lang === "cht") {
    // 中文链接
    // return "https://novai-1.gitbook.io/novai/";
    return "https://kidds-organization-1.gitbook.io/novai-chain-white-paper/";
  } else if (lang === "jp") {
    // 日语链接
    return "https://kidds-organization-1.gitbook.io/novai-chain-bai-shu/";
  } else if (lang === "ko") {
    // 韩语链接
    return "https://kidds-organization-1.gitbook.io/novai-chain/";
  } else {
    // 其他语言都是英文链接
    return "https://kidds-organization-1.gitbook.io/novai-chain-white-paper/";
  }
};
