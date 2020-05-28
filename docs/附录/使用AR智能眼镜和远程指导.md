
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
要使用眼镜远程指导，请以`https://服务器ip地址`的方式来访问登录EOC。
:::warning 注意

## 如何在iis上配置https

#### 自己生成证书，在iis上配置https

自己生成证书，导入到服务器证书中，具体步骤如下：

* 首先，制作证书需要用到几个工具
  * makecert.exe(证书制作工具)、Cert2Spc.exe(公钥证书格式转换成SPC)、pvk2pfx.exe(将公钥证书和私钥合并成一个PFX格式的证书文件)。
  * 关于makecert.exe，是微软提供的官方工具，通常安装了Visual Studio后在相应的路径可以找到，如果没有，需要去网页搜索下载。Cert2Spc.exe和pvk2pfx.exe一般会被包括在其中，如果操作时有错误提示没有，也需要去下载。

* 制作根证书
  * 根证书就是自签名的证书，在证书链的顶端，自己验证自己。
  * 证书最初生成时是一个自签名证书。自签名证书是其签发者（签名者）与主题（其公共密钥由该证书进行验证的实体）相同的证书。如果拥有者向 CA 发送证书签名请求(CSR)，然后输入响应，自签名证书将被证书链替换。链的底部是由CA发布的、用于验证主题的公共密钥的证书（回复）。链中的下一个证书是验证CA的公共密钥的证书。通常，这是一个自签名证书（即，来自CA、用于验证其自身的公共密钥的证书）并且是链中的最后一个证书。
  * 在开始菜单中，找到VS开发人员命令提示符，用管理员打开，cd到makecert.exe所在路径，然后输入：
  `makecert -n “CN=Root” -r -sv RootIssuer.pvk RootIssuer.cer`

:::warning 注意
服务端和客户端的电脑上都需要先导入根证书。
:::warning 注意

* 制作https数字证书
  * 我们需要使用刚才生成的根证书签发一张https数字证书，输入：
  `makecert -n “CN=服务器绑定的域名或服务器ip地址” -b 05/28/2020 -e 05/28/2021 -eku 1.3.6.1.5.5.7.3.1 -ss my -sr localmachine -sky exchange -sp “Microsoft RSA SChannel Cryptographic Provider” -sy 12 -$ commercial -cy authority -iv RootIssuer.pvk -ic RootIssuer.cer -sv test.pvk test.cer`

  * 完成后会生成text.pvk和test.cer。

* 制作pfx并添加到iis
  * 在iis中导入证书必须为.pfx格式，这里需要用到之前生成的test.pvk和test.cer。
    * 首先生成.spc格式证书(需要使用cert2spc.exe工具)，输入：
    `cert2spc test.cer test.spc`
    * 弹出密码框自行设置密码如‘123456’，后面所有操作弹出框都填写这里设置的密码，.spc 意思是 软件发布者证书（Software Pulisher Cerificate）
  * 将公钥证书和私钥合并成一个PFX格式的证书文件(需要使用pvk2pfx.exe工具)，输入：
    `pvk2pfx -pvk test.pvk -spc lqtest.spc -pfx test.pfx`

* 然后再进入iis导入.pfx证书即可，密码一栏不填

  ![证书](/static/docimg/zs4.png)

* 最后将网站设为https
  ![证书](/static/docimg/zs5.png)

* 完成后即可通过`https://服务器ip地址`的方式来访问到EOC，从而使用眼镜远程指导功能了。

  ![证书](/static/docimg/zs3.png)

#### 其他可用办法

* 首先查看一下iis中有无服务器证书，点击根目录，点击服务器证书，可查看。

  ![证书](/static/docimg/zs.png)

* 当iis中有可选证书时
  * 首先在服务器上打开iis管理器，左侧根目录下点击网站，任意选择一个已部署的网站，在右侧操作栏点击添加网站，如图：

    ![证书](/static/docimg/zs1.png)

  * 在弹出的添加网站窗口中填写选择相关信息，网站名称自定义，应用程序池选择DefaultAppPool，物理路径为`C:\inetpub\wwwroot`,绑定类型选择https，SSL证书选择IIS，点击确定，网站添加成功。

    ![证书](/static/docimg/zs.png)

* 当ssl证书中没有选择项时
  * 可点击iis根目录，找到服务器证书，双击进入后，在右侧操作中选中创建自签名证书，填写信息，确定，就创建了一个服务器证书。
