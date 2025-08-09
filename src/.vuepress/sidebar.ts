import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: [
        {
          text: "关于我",
          prefix: "aboutMe",
          children: [
            {
              text: "关于我",
              icon: "user",
              link: "me",
            },
            {
              text: "我的母校",
              icon: "user",
              link: "myschool",
            },
          ],
        },
        {
          text: "日常",
          icon: "sun",
          prefix: "daily/",
          children: [
            { text: "日常1", icon: "pen-to-square", link: "firstPost" },
            { text: "日常2", icon: "pen-to-square", link: "8-9" },
          ],
        },
        {
          text: "好听的歌",
          icon: "music",
          prefix: "music/",
          children: [
            {
              text: "后摇",
              icon: "",
              prefix: "postrock/",
              children: [
                { text: "Flemington", icon: "", link: "Flemington" },
                { text: "Who You Are Is Not Enough", icon: "", link: "WYAINE" },
              ],
            },
          ],
        },
      ],
    },
  ],
});
