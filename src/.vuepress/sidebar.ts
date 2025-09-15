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
            { text: "框架搭建过程", icon: "pen-to-square", link: "firstPost" },
            {
              text: "第三周工作笔记",
              icon: "pen-to-square",
              link: "第三周笔记",
            },
            {
              text: "第四周工作笔记",
              icon: "pen-to-square",
              link: "第四周笔记",
            },
            {
              text: "第五周工作笔记",
              icon: "pen-to-square",
              link: "第五周笔记",
            },
            {
              text: "第六周工作笔记",
              icon: "pen-to-square",
              link: "第六周笔记",
            },
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
            {
              text: "电子音乐",
              icon: "",
              prefix: "postrock/",
              children: [
                {
                  text: "Trance",
                  icon: "",
                  prefix: "postrock/",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          text: "学习文档",
          prefix: "docs/",
          children: [
            {
              text: "本地使用API部署AI",
              icon: "book",
              link: "AI使用文档",
            },
            {
              text: "vue一键部署到服务器",
              icon: "book",
              link: "一键部署到服务器",
            },
          ],
        },
      ],
    },
  ],
});
