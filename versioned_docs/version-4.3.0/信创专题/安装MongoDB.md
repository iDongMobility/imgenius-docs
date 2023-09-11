
import useBaseUrl from '@docusaurus/useBaseUrl';

### 下载安装包

* 下载地址：https://www.mongodb.com/try/download/community

* 首先，在mongodb官网下载linux系统的安装包直接安装，这里选的debian。

  <img alt=" " src={useBaseUrl('docimg/linuxmongo1.png')} />

### 安装

* 下载完毕后，复制下载好的deb文件，然后在deepin系统中，点击文件管理器，选择数据盘，文档，直接粘贴进去。双击安装包，等待安装完成即可。

  <img alt=" " src={useBaseUrl('docimg/linuxmongo2.png')} />

* 安装完成，启动mongoDB服务

  `sudo systemctl start mongod`

* 将mongoDB服务配置为开机自启动

  `sudo systemctl enable mongod`

* 查看服务是否启动，如果一切正常，会有类似下图中的输出信息

  `sudo systemctl status mongod`

  <img alt=" " src={useBaseUrl('docimg/linuxmongo3.png')} />

### 下载MongoDB Compass并使用

* MongoDB Compass是mongo的可视化工具，在deepin系统中打开应用商店，搜索mongo就可以看到，直接安装后打开即可

  <img alt=" " src={useBaseUrl('docimg/linuxmongo4.png')} />

* 打开后直接点击CONNECT就可以连接上本地的mongo

  <img alt=" " src={useBaseUrl('docimg/linuxmongo5.png')} />

* 允许远程登录的情况下需要修改mongod的启动配置文件，vim /etc/mongod.conf，在127.0.0.1后增加ip地址

  <img alt=" " src={useBaseUrl('docimg/linuxmongo6.png')} />
