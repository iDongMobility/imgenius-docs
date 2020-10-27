
import useBaseUrl from '@docusaurus/useBaseUrl';

## 硬件要求
PDA需要支持OTG功能，部分机型需要手动开启，并且超过一定时间不使用将自动关闭
## 启用功能
* SDC设置中`启用远程指导`功能

   <img alt=" " src={useBaseUrl('docimg/远程指导1.png')} />
* 申请`后台专家`授权，可在SMC中查看已安装授权

    <img alt=" " src={useBaseUrl('docimg/远程指导2.png')} />
* SDC中给指定用户勾上`后台专家`权限

    <img alt=" " src={useBaseUrl('docimg/远程指导3.png')} />
* PDA安装亮亮插件版移动工作站`imMW_LLPlugin.apk`

## 使用步骤
### PDA端
* 启用OTG功能
* 连接AR智能眼镜

    <img alt=" " src={useBaseUrl('docimg/远程指导4.png')} />
* 发起`远程指导`请求

    <img alt=" " src={useBaseUrl('docimg/远程指导5.png')} />

:::warning 注意
注意，作业组执行中发起时，此次远程指导将绑定当前作业组。
:::warning 注意

* 进入`远程指导`页面，等待`后台专家`接入

    <img alt=" " src={useBaseUrl('docimg/远程指导6.jpg')} />
* 点击`开始推流`，语音交流

    <img alt=" " src={useBaseUrl('docimg/远程指导7.jpg')} />
* 可以进行文字聊天

    <img alt=" " src={useBaseUrl('docimg/远程指导8.jpg')} />

### EOC端
* `后台专家`登录EOC后点击图示按钮进入`远程指导`页面

    <img alt=" " src={useBaseUrl('docimg/远程指导9.png')} />
* 加入需要协助的远程指导

    <img alt=" " src={useBaseUrl('docimg/远程指导10.png')} />
* 可以语音，文字交流

    <img alt=" " src={useBaseUrl('docimg/远程指导11.png')} />
* 可以对画面中的物品进行标记，PDA可同时看到此标记

    <img alt=" " src={useBaseUrl('docimg/远程指导12.png')} />

### 远程指导历史查看
* 点击选项卡`远程指导列表`

    <img alt=" " src={useBaseUrl('docimg/远程指导13.png')} />
* 点击眼镜按钮，查看绑定作业组
* 点击放大镜按钮，进入`查看详细会话`，查看远程指导视频和文字记录

    <img alt=" " src={useBaseUrl('docimg/远程指导14.png')} />

:::warning 注意
要使用眼镜远程指导，登录EOC时需要遵循https协议。
:::warning 注意

## 如何在iis上启用https

* 点击iis根目录，找到服务器证书，双击进入后，在右侧操作中选中创建自签名证书，填写信息，确定，就创建了一个服务器证书。

  <img alt=" " src={useBaseUrl('docimg/zs1.png')} />

* 创建完后，选择网站，点击绑定，选择添加，类型选择https，ssl证书选择创建的自签名证书，点击确定即可。

  <img alt=" " src={useBaseUrl('docimg/zs2.png')} />

* 完成后即可通过https的方式来访问EOC，从而使用眼镜远程指导功能了。

  <img alt=" " src={useBaseUrl('docimg/zs3.png')} />

## 如何申请免费SSL证书，在iis上部署启用https

:::warning 注意
必须要拥有一个域名。
:::warning 注意

* 通过阿里云，可以申请到免费的SSL证书。首先要登录到阿里的SSL管理平台，购买免费的云盾证书服务：[云盾牌服务购买地址](https://common-buy.aliyun.com/?spm=5176.7968328.1266638..25d31232mel5kE&commodityCode=cas&aly_as=4Fp1KTg6D#/buy)。注意需要注册并通过实名认证的阿里云账号。然后选择如图：

  <img alt=" " src={useBaseUrl('docimg/zhengshu1.png')} />

* 购买完后，在支付成功页面点击证书控制台进入SSL证书管理控制台，可以看到已购买的证书，点击证书申请，填写相关信息，点击下一步会进入到验证信息页面。

  <img alt=" " src={useBaseUrl('docimg/zhengshu2.png')} />

  <img alt=" " src={useBaseUrl('docimg/zhengshu3.png')} />

* 然后去自己的域名解析平台如`阿里云`、`腾讯云`、`DNS.COM` 等等，在域名解析列表中添加一个记录，将主机记录、记录类型、记录值填写到里面，来证明确实有对当前域名的拥有权，点击保存。在验证信息页面，点击验证，一旦验证通过，那么就可以点击下面的提交审核按钮了。

  <img alt=" " src={useBaseUrl('docimg/zhengshu4.png')} />

* 提交审核后，耐心等待审核通过即可，通过之后，就可以在已签发中看到如图所示的状态。

  <img alt=" " src={useBaseUrl('docimg/zhengshu5.png')} />

* 点击下载就会弹出选项，选择服务器为IIS的证书下载。

  <img alt=" " src={useBaseUrl('docimg/zhengshu6.png')} />

* 关于如何配置到iis中，请参考阿里官方文档：[在IIS服务器上安装SSL证书](https://help.aliyun.com/document_detail/98729.html?spm=a2c4g.11186623.6.589.f9074c07WTOZgN)。
