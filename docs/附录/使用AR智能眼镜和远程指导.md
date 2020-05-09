
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
