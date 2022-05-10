---
slug: thinking-docs-opensource
title: 文档编写和管理的新套路
authors:
  - name: 洪志兵    
    url: https://github.com/lkhzb
    image_url: https://avatars1.githubusercontent.com/u/734713?s=460&u=80659284cca37decf26e20589dd1eb39536719f2&v=4
tags: [文档,OpenSource,InnerSource]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

使用开源协作模式来完成文档编写和管理的思考。

<!--truncate-->

## 问题由来

去年，随着更多伙伴的加入，大家对我们的产品文档提出一些意见：

1. 更新不及时
1. 新功能不能快速传递
1. 发现文档错误，没有地方反馈和更新
1. ...

以前，我们的文档基本都是在Word中编写，再通过PDF或chm跟随安装盘一起分发，这种模式弊端显而易见：

1. 多人协作不方便
1. 更改很难及时

## 现在方案

现在很多公司的文档都是基于 **Markdown** + **GitHub** + **文档框架**（如：**Docusaurus**、**Docsify**等或自研）编写和管理，通过CICD自动部署到自家服务或第三方服务（如**GitHub Pages**，**Netlify**等）。

文档向所有人开放，任何人都可以贡献，当然，目前主要贡献还是自家员工，整个过程专注、开放、透明、快速和及时。

**imgenius**新文档就是采用这种模式，从今年1月到5月（实际是从春节后正式开始），8位contributors利用工作空闲时间，534次commits就完成所有文档的编写和部署，整个过程非常快速。且搭建好这个框架后，以后的协作和更新将会更加及时。

* imgenius文档主页
<img alt=" " src={useBaseUrl('blogimg/dochome.png')} />

* imgenius文档内容主页
<img alt=" " src={useBaseUrl('blogimg/doccontent.png')} />

* GitHub Contributors
<img alt=" " src={useBaseUrl('blogimg/gitcommit.png')} />

* [imgenius文档源码](https://github.com/iDongMobility/imgenius-docs)
* [imgenius在线文档](https://userguide.idongmobility.cn/)

## 有待改进

整个过程下来，还有很多需要改进，如：主动贡献、文档质量等。

* 提供完善的贡献指导文档，让贡献者更快找到方向。
* 文档内容自动检测和测试，保证文档质量。
* 不直接提交到master分支，通过pull request，有人负责审核。

## OpenSource & InnerSource & ?

> * 开源是如此的成功，以至于现在用一句时髦的话来形容：“开源软件正在吞噬世界”，一点都不为过。这从侧面反映出，开源的开发方法是有效的，而且可以开发出Linux内核这种既能在超级计算中应用也可以在智能手机上运行的卓越项目。
> * 开源项目的工作流程解释了为何来自世界各地的志愿者们可以如此高效的完成如此巨大的项目。这样就给那些大型的跨国公司带来许多的灵感，和成功的开源项目的社区一样，大型公司的软件工程师们亦是分布在全球各地，而且不在同一个部门，他们并不能够频繁的见面，报告的老板也不一样。为了在企业内部能够增强合作，一些公司开始尝试采用开源项目的工作流程。
> * Tim O’Reilly 首次使用了术语“InnerSource”这个词汇，我们翻译它为”内部开源”。

注：以上内容来自于[创造“生命”之术--InnerSource介绍](https://www.sohu.com/a/143331227_753085)

**开源**和**内部开源**已经被证实是一套可行的方案，在2c和2b企业都有采用，我们也希望采用内部开源的方式，快速和高效地为用户提供高质量、创新型应用。

注：我们所说的内部，不仅仅是我们公司，还包括合作伙伴、最终用户等，欢迎更多伙伴加入我们。

## 延伸阅读

* [超两万技术人员如何减少重复造轮子？腾讯推进内部开源协同](https://cloud.tencent.com/developer/article/1556709)
* [内部开源的未来](https://gitee.com/InnerSource/future)
* [内部开源：如何在企业内部发挥开源的魔力](https://gitee.com/InnerSource/leverage)
* [gitee企业内源治理](https://gitee.com/InnerSource)
