---
title: electron构建桌面端应用
date: 2025-09-22
category:
  - 学习博客
tag:
  - 学习文档
  - electron
  - 桌面端应用构建
sticky: false
---

<!-- more -->

## 构建已有项目

### 1.在已有项目安装 electron-vite,electron,electron-core,electron-builder，@electron-toolkit

添加版本配置

```json
//package.json
"dependencies": {
    "@electron-toolkit/preload": "^3.0.2",
    "@electron-toolkit/utils": "^2.0.1",

},
"devDependencies": {
    "electron": "^38.1.2",
    "electron-builder": "^26.0.12",
    "electron-vite": "^4.0.0",
},
"main": "out/main/main.js", --electron-vite打包后输出路径
"build": {
    "productName": "week-check",  --exe打包项目名称
    "electronDownload": {
        "cache": "./electron_cache",
        "mirror": "https://npmmirror.com/mirrors/electron/"
    },
    "directories": {
        "output": "release"  --输出目录
    },
    "files": [
        "out/**/*",
        "dist/**/*",
        "node_modules/**/*"
    ],
    "win": {
        "target": [
            {
                "target": "nsis",
                "arch": [
                    "x64"
                ]
            }
        ]
    },
    "nsis": {
        "oneClick": false,
        "allowToChangeInstallationDirectory": true,
        "createDesktopShortcut": true,
        "createStartMenuShortcut": true
    }
}
```

执行以下脚本

```powershell
pnpm i
```

### 2.package.json 添加打包脚本

```json

"scripts": {
    "electron:dev": "electron-vite dev",   --构建主进程和预加载脚本源代码
    "electron:start": "electron-vite start",  --为渲染器启动一个开发服务器，并启动electron
    "electron:build": "electron-vite build",  --该命令将构建主进程、渲染器和预加载脚本源代码。通常在打包 Electron 应用程序之前，需要执行此命令。
    "electron:preview": "electron-vite preview",  --该命令将构建主进程、渲染器和预加载脚本源代码，并启动 Electron 应用程序进行预览。
    "electron:serve": "vite build & electron . ",  --构建项目代码并且启动electron预览
    "exe-build": "electron-builder",  --打包成exe
    "build:unpack": "npm run build && electron-builder --dir",  --打包成exe的unpack文件
    "build:win": "npm run build && electron-builder --win",  --打包成exe的win系统文件
},
```

### 3.添加 electron.config.json 和 electron.vite.config.ts

```json
//electron.config.json
{
  "files": ["main.js", "preload.js", "./dist"],
  "productName": "test"
}
```

```ts
//electron.vite.config.json
import { resolve } from "path";
import { defineConfig } from "electron-vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: resolve(__dirname, "electron/main.ts"),
      },
    },
  },
  preload: {
    build: {
      rollupOptions: {
        input: resolve(__dirname, "electron/preload/index.ts"),
      },
    },
  },
  renderer: {
    root: ".",
    resolve: {
      alias: {
        "@": resolve("src"),
        "@renderer": resolve("src"),
      },
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: "index.html",
      },
    },
  },
});
```

### 4.在主文件夹下添加 electron 文件夹

```powershell
Get-ChildItem electron -Recurse -Name
preload
main.ts
preload\index.ts
```

### 5.先使用 electron-vite 构建

```
pnpm electron:preview --先查看是否可以构建
pnpm electron:build
```

此时可能会碰到 electron 无法找到的问题，解决方案查看问题收集下的[第一条](#Q1)

### 6.build 成功后执行 exe 打包命令

```
pnpm build:win
```

## 配置列表

### 1.指定构建后输出文件夹

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250920133243.png" alt="image-20250920133240964" style="zoom:50%;" />

## 问题收集

<a id="Q1">### 1.pnpm 以及 npm 安装后报错 electron 依赖没找到</a>

![image-20250920124801113](https://gitee.com/dufei_handsome/mypic/raw/master/20250920124803.png)

解决过程：

① 使用 npm 安装 electron，报错

![image-20250920125013183](https://gitee.com/dufei_handsome/mypic/raw/master/20250920125014.png)

② 现在 tsconfig 内添加 bundler，保证能解析@开头的 ts 依赖

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250920125845.png" alt="image-20250920125842928" style="zoom: 50%;" />

③ 清理依赖，接着再次安装所有依赖

安装成功，并且可以成功执行 build 指令。发现是因为安装 electron 版本与 package 内版本不同，再次使用 pnpm 单独安装 electron

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250920132130.png" alt="	" style="zoom:50%;" /><img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250920132222.png" alt="image-20250920132220812" style="zoom:50%;" />

安装后依然无法启动

④ 排查后发现有 electron 文件夹，但是没有对应的 dist 文件，手动执行`node ./node_modules/electron/install.js`后成功运行 dev
