import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog-vue/",

  lang: "zh-CN",
  title: "D的博客",
  description: "会讲述一些我的故事",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
