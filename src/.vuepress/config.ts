import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog-vue/",
  // base: "/",

  lang: "zh-CN",
  title: "D的博客",
  description: "会讲述一些我的故事",

  theme,
  head: [
    [
      "meta",
      {
        name: "referrer",
        content: "no-referrer",
      },
    ],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
