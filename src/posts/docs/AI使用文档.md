---
title: 本地使用API部署AI
date: 2025-08-15
category:
  - 学习博客
tag:
  - 学习文档
  - AI使用
sticky: false
---

> <!-- more -->

## 1.本地部署 API 软件选择

​ 现在比较好用的本地部署 api 的软件就是 chatbox![image-20250815082442667](https://gitee.com/dufei_handsome/mypic/raw/master/20250815082445.png),官方下载链接可以直接下载,不如要使用魔法[下载链接](https://chatboxai.app/zh).下面是软件介绍

### (1)主页面

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250815082811.png" alt="image-20250815082809422" style="zoom: 50%;" />

### (2)对话设置

​ 点击下方的对话设置可以对对话进行调节

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250815083000.png" alt="image-20250815082958401" style="zoom:50%;" />

#### ① 上下文消息

​ 如果想体验完整一些,就可以适当拉高,但是拉高后会在对话时 Token 使用数越来越高,一般对话中,100 条上限后期每一条对话消耗 2wTokens,根据自己财力进行选择

#### ② 温度

​ 温度决定了输出的多样性,温度在大多数 ai 模型都支持,如果觉得 ai 输出的每一条都差不多,可以调高一些,但是调高的后果就是增加奇奇怪怪的输出的可能性.

#### ③Top P

​ 和温度类似,只支持部分模型,如果遇见报错不支持 Top P 参数,将此项拉到 0 即可

#### ④ 最大输出 Token 数

​ 有的模型在对话时,输出的对话越来越长,不仅会增加 token 消耗量,主要的是会增加回复时间,导致对话流畅性降低,多数情况下不需要进行调整,在过长时可以自己进行调整.

#### ⑤ 流式输出

​ 大多数国产的模型和部分国外模型,都会像流水一样输出信息,这一项可以增加用户的使用性,可以不进行关闭.

### (3)软件设置

​ 点击左下角可以进入软件设置

#### ① 模型提供方

​ 在这个设置中选择对话模型提供方和管理模型的显示,具体用法在第二章说

![image-20250815083715549](https://gitee.com/dufei_handsome/mypic/raw/master/20250815083716.png)

#### ② 默认模型

​ 每次新建对话时,会默认使用 chatboxai,在这里面进行修改就行

![image-20250815083818495](https://gitee.com/dufei_handsome/mypic/raw/master/20250815083819.png)

#### ③ 联网搜索

​ 在查资料时提供联网搜索,我觉得不太好用,想用的时候去 deepseek 或者国产平台就行了

![image-20250815083907250](https://gitee.com/dufei_handsome/mypic/raw/master/20250815083908.png)

#### ④MCP

​ 没啥用.我也没用上,懒得介绍了.

#### ⑤ 知识库

​ 可以上传本地文档进行本地知识库的构建,让 ai 对话更偏向你的风格,我也没咋用,具体去百度.

#### ⑥ 对话设置

​ 上半部分设置和对话设置一样,就是提供了一个默认值,下面为下半部分设置

![image-20250815084155077](https://gitee.com/dufei_handsome/mypic/raw/master/20250815084156.png)

​ 显示的时候可以把其他的关掉,token 消耗建议打开,方便监控 token 消耗量,防止不小心用多了.其他的按照自己的需求选择就行.

#### ⑦ 快捷键设置

​ 诗人就会,自己去看.

#### ⑧ 常规设置

​ 主要是备份/恢复这一块,有的时候会两个或多个设备切换,因为 chatbox 所有数据都存在本地,这个功能就显得更加重要,一般四个都勾选,这样换设备也不需要配置令牌.

![image-20250815084448943](https://gitee.com/dufei_handsome/mypic/raw/master/20250815084450.png)

## 2.模型供应商选择

​ 下好软件之后就可以选择供应商了,我自己使用过的供应商有[硅基流动](https://siliconflow.cn/),[火山引擎](https://www.volcengine.com/),[Kouri API](https://api.kourichat.com/register?aff=ypqS),其他的平台要么用起来不方便,要么模型少,基本上这三个就可以用到市面上大多数模型了,Claude 3.7,grok3/4,gpt4 之类的超级模型,可以去官网看看价格,一般比较高没什么性价比,或者可以去 Ollama 进行购买,只不过这个网站已经不开放注册了.

​ 给点我的邀请码,这样你冲的时候我也可以冲 😋

​ 硅基流动:CT7CUbvb

​ 火山引擎:这个没有,你说扯不扯

​ Kouri:点击上面的连接跳转注册就行了

​ 下面是每个供应商的介绍

### 硅基流动:

​ 优点:这个供应商提供稳定的 API 服务,并且一般不会跑路,模型也多,并且提供免费额度,注册和学生认证都会送免费额度

​ 缺点:价格相对于其他两家偏高,r1 是 16/M Tokens,V3 是 8/M Tokens.

### 火山引擎:

​ 优点:可以用满血豆包,模型介绍在第三章.API 服务更加稳定,价格较低.综合起来豆包 1.6 4~6/M Tokens,r112~14/M Tokens,v3 6~8/Tokens.

​ 缺点:配置起来稍微麻烦,模型少,只有国产的一些大模型.

### Kouri API

​ 这个供应商是我现在在用的,便宜量大还有活动.

​ 优点:价格最低,模型最多,可以用国外的一些大模型.综合起来 r1 12~14/M Tokens,v3 4~6/M Tokens.

​ 缺点:API 服务不稳定,有时候输出会断.

### 如何配置 API

#### 硅基流动

​ 硅基流动是 chatbox 支持的 api 供应商,注册之后在左侧的 api 密钥,创建自己的密钥

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250815090306.png" alt="image-20250815090305381" style="zoom:50%;" />

​ 点击复制之后去往 chatbox,模型提供方里面找到硅基流动,把密钥复制到 API 密钥中,然后点击获取模型,就可以使用所有模型了,可以点红色-号,去掉你不想用的模型.

![image-20250815090601769](https://gitee.com/dufei_handsome/mypic/raw/master/20250815090603.png)

#### 火山引擎

​ 火山引擎的配置比较麻烦,先注册好账号,进入控制台,然后在左侧找到在线推理,剩下的看图吧,我懒得敲了

![image-20250815090941474](https://gitee.com/dufei_handsome/mypic/raw/master/20250815090943.png)

![image-20250815091058879](https://gitee.com/dufei_handsome/mypic/raw/master/20250815091100.png)

![image-20250815091246165](https://gitee.com/dufei_handsome/mypic/raw/master/20250815091247.png)

![image-20250815091435711](https://gitee.com/dufei_handsome/mypic/raw/master/20250815091437.png)

创建完成之后需要取得你的令牌,跟着下面图走就行,笨蛋小春都能学会

![image-20250815091535015](https://gitee.com/dufei_handsome/mypic/raw/master/20250815091537.png)

![image-20250815091720191](https://gitee.com/dufei_handsome/mypic/raw/master/20250815091721.png)

​ 创建完成之后,复制密钥,然后回到 chatbox,由于 chatbox 不支持火山默认提供方,点击新建提供方就行,然后**不能**点击获取,要自己新建模型才行.主机名称`https://ark.cn-beijing.volces.com/api/v3`,路径`/chat/completions`

![image-20250815091931034](https://gitee.com/dufei_handsome/mypic/raw/master/20250815091932.png)

​ 去到火山,回到在线推理,拿到模型 ID

![image-20250815092154233](https://gitee.com/dufei_handsome/mypic/raw/master/20250815092155.png)

​ 接下来回到 chatbox

![image-20250815092310851](https://gitee.com/dufei_handsome/mypic/raw/master/20250815092312.png)

​ 然后再点击获取,就可以拿到模型了

#### Kouri API

​ 写死我了,直接上图

![image-20250815092446179](https://gitee.com/dufei_handsome/mypic/raw/master/20250815092447.png)

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250815092604.png" alt="image-20250815092603459" style="zoom:50%;" />

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250815092701.png" alt="image-20250815092700738" style="zoom:50%;" />

​ 创建完之后复制密钥,然后去往 chatbox,然后新建模型提供方就行了,和火山的步骤一样.主机名称`https://api.kourichat.com/`

<img src="https://gitee.com/dufei_handsome/mypic/raw/master/20250815092837.png" alt="image-20250815092836393" style="zoom:50%;" />

到这里就已经配置完了,可以直接玩,或者看我下面的模型推荐

## 3.模型选择

​ 目前按照我用的模型来说,gemini-2.5-pro>豆包 1.6Thinking>deepseekr1/v3.下面说这三个模型的优缺点

### Gemini

​ 优点:文风非常令人舒适,重复率低,像人

​ 缺点:喜欢重复用户的话,例如在你说话的时候他会把你说的话也生成到情景中;文字生成过长,在对话上下文比较多的时候,会生成很多很多文字,输出变慢,还有时候会卡住.**贵**

### 豆包 1.6

​ 优点:网感很强,响应快,正常对话没什么问题.

​ 缺点:**奇怪**的 XP 没办法满足,重复率高,很喜欢用比喻(抖音训练集就是脏).

### Deepseek

​ 这位更是重量级啊

​ 优点:训练集非常丰富,各种 XP 都可以满足,响应快,对话发散思维好

​ 缺点:你到底用的什么训练集 Kora!牛魔的玩着玩着变成克苏鲁了,生怕我 SAN 值太高了是吧!

​ 缺点就和上面说的一样,容易出现奇怪的东西,发散思维太强导致的(擦汗)
