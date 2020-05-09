
import useBaseUrl from '@docusaurus/useBaseUrl';

**SQL Server以2017为例，在安装组件中如下配置：**

* **点击安装包中的“SETUP.EXE”**，在弹出的安装中心窗口中选择“安装”→“全新SQL Server 独立安装或向现有安装添加功能”，之后在弹出的安装程序窗口中一直下一步（后续无说明的项操作都是下一步），直到安装类型这一步骤里，选择“执行SQL Server2017的全新安装”

  <img alt=" " src={useBaseUrl('docimg/shujuku1.png')} />

  <img alt=" " src={useBaseUrl('docimg/shujuku2.png')} />
  
  <img alt=" " src={useBaseUrl('docimg/shujuku3.png')} />

* **产品密钥**：指定版本为“Developer”勾选“输入产品密钥”，不用输入

  <img alt=" " src={useBaseUrl('docimg/shujuku4.png')} />

* **功能选择**：选择“数据库引擎服务”，实例根目录自行设置或默认

  <img alt=" " src={useBaseUrl('docimg/shujuku5.png')} />

* **实例配置**：勾选“默认实例”

  <img alt=" " src={useBaseUrl('docimg/shujuku6.png')} />

* **数据库引擎配置**：服务器配置下身份验证模式中勾选“混合模式”，密码自行设置，指定SQL Server管理员，点击“添加当前用户”，之后在数据目录中自行设置好各项目录

  <img alt=" " src={useBaseUrl('docimg/shujuku7.png')} />
  <img alt=" " src={useBaseUrl('docimg/shujuku8.png')} />

* **安装完成之后**，如果需要可在官网下载SSMS的安装包，不需要则忽略此步，点击安装即可。

  <img alt=" " src={useBaseUrl('docimg/shujuku9.png')} />

**附：**

[安装](安装/安装.md)

[安装 SQLServer](安装/安装SQLServer.md)

[安装 PostgresSQL](安装/安装PostgresSQL.md)

[安装 RabbitMQ](安装/安装RabbitMQ.md)