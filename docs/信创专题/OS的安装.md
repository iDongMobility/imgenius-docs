
import useBaseUrl from '@docusaurus/useBaseUrl';

## 深度操作系统（Deepin）社区版

* 深度操作系统是基于Linux内核，以桌面应用为主的开源GNU/Linux操作系统。这里主要说明一下如何在虚拟机中安装Deepin系统。

### 下载Deepin系统

* 通过官网[deep最新版官方镜像下载](https://www.deepin.org/zh/download/)下载，点击官方下载即可。

  <img alt=" " src={useBaseUrl('docimg/deepin01.png')} />

### 创建虚拟机

* 通过VMware软件来创建一个新的虚拟机：

  <img alt=" " src={useBaseUrl('docimg/deepin02.png')} />

* 然后可以选择稍后安装操作系统

  <img alt=" " src={useBaseUrl('docimg/deepin03.png')} />

* 客户机操作系统选择Linux，版本号选择Debian 10.x 64位

  <img alt=" " src={useBaseUrl('docimg/deepin04.png')} />

* 虚拟机名称和安装位置都可以自定义，设置完成点击下一步

  <img alt=" " src={useBaseUrl('docimg/deepin05.png')} />

* 最大磁盘大小deepin系统官方建议是128G及以上，选择将虚拟磁盘存储为单个文件，点击下一步

  <img alt=" " src={useBaseUrl('docimg/deepin06.png')} />

* 下图所示就是刚刚所设置的配置，点击完成

  <img alt=" " src={useBaseUrl('docimg/deepin07.png')} />

* 点击编辑虚拟机设置

  <img alt=" " src={useBaseUrl('docimg/deepin08.png')} />

* 内存可以根据个人情况更改，这里设置为8GB

  <img alt=" " src={useBaseUrl('docimg/deepin09.png')} />

* 处理器数量如图更改

  <img alt=" " src={useBaseUrl('docimg/deepin10.png')} />

* 在CD/DVD中选择下载好的虚拟机映像文件，即通过官网下载好的官方镜像文件

  <img alt=" " src={useBaseUrl('docimg/deepin11.png')} />

* 网络适配器，选择桥接模式

  <img alt=" " src={useBaseUrl('docimg/deepin12.png')} />

* 选择打印机，移除

  <img alt=" " src={useBaseUrl('docimg/deepin13.png')} />

* 点击选项-高级-如图设置以下三项，最后点击确定

  <img alt=" " src={useBaseUrl('docimg/deepin14.png')} />

* 点击开启虚拟机

  <img alt=" " src={useBaseUrl('docimg/deepin15.png')} />

* 等待，直到出现以下界面，点击简体中文，勾选我已阅读并同意，点击下一步

  <img alt=" " src={useBaseUrl('docimg/deepin16.png')} />

  <img alt=" " src={useBaseUrl('docimg/deepin17.png')} />

* 这里不需要勾选创建初始化备份，可以节省磁盘空间。因为是虚拟机，即时出错也可以重新安装。取消勾选后点击继续安装

  <img alt=" " src={useBaseUrl('docimg/deepin18.png')} />

* 等待完成，完成后点击立即重启

  <img alt=" " src={useBaseUrl('docimg/deepin19.png')} />

  <img alt=" " src={useBaseUrl('docimg/deepin20.png')} />

* 重启后，以下界面直接点击下一步

  <img alt=" " src={useBaseUrl('docimg/deepin21.png')} />

  <img alt=" " src={useBaseUrl('docimg/deepin22.png')} />

  <img alt=" " src={useBaseUrl('docimg/deepin23.png')} />

* 创建账户这里自定义即可，然后点击下一步，等待优化系统配置完成

  <img alt=" " src={useBaseUrl('docimg/deepin24.png')} />

  <img alt=" " src={useBaseUrl('docimg/deepin25.png')} />

* 完成后，显示登录界面，输入密码直接登录

  <img alt=" " src={useBaseUrl('docimg/deepin26.png')} />

* 根据机器性能自行选择特效模式或普通模式，两种模式在界面风格上不同，功能上并无差异

  <img alt=" " src={useBaseUrl('docimg/deepin27.png')} />

* 选择完模式后，安装就完成了。

  <img alt=" " src={useBaseUrl('docimg/deepin28.png')} />
