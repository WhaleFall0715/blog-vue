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
          { text: "日常1", icon: "pen-to-square", link: "1" },
          { text: "日常2", icon: "pen-to-square", link: "2" },
        ],
      },
      {
        text: "好听的歌",
        icon: "pen-to-square",
        prefix: "music/",
        children: [

        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
