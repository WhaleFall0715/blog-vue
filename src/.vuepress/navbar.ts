import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "日常",
        icon: "pen-to-square",
        prefix: "daily/",
        children: [
          { text: "日常1", icon: "pen-to-square", link: "firstPost" },
          { text: "日常2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "好听的歌",
        icon: "pen-to-square",
        prefix: "music/",
        children: [
          { text: "推歌", icon: "pen-to-square", link: "music" },

        ],
      },
    ],
  },
]);
