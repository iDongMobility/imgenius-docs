
import useBaseUrl from '@docusaurus/useBaseUrl';

## 安装Erlang环境

* 运行“otp_win64_21.3.exe”安装Erlang环境。（注：如果自行选择了安装路径，请确保安装路径无中文字符，如果已经安装忽略此步）

  <img alt=" " src={useBaseUrl('docimg/RM1.png')} />

## 安装 RabbitMQ

* 运行“rabbitmq-server-3.7.14.exe”安装RabbitMQ。（注：如果自行选择了安装路径，请确保安装路径无中文字符，如果已经安装忽略此步，已经安装的会有如下图的提示，点击确定继续）

  <img alt=" " src={useBaseUrl('docimg/RM2.png')} />
  
  <img alt=" " src={useBaseUrl('docimg/RM3.png')} />

## 设置RabbitMQ

**(如果已经设置忽略此步)**

**1. 修改缺省用户guest的密码**，在cmd中运行下面语句

"C:\Program Files\RabbitMQ Server\rabbitmq_server-3.7.14\sbin\rabbitmqctl" change_password guest password

**2. 创建用户**，在cmd中分别运行以下命令

"C:\Program Files\RabbitMQ Server\rabbitmq_server-3.7.14\sbin\rabbitmqctl" add_user admin password

"C:\Program Files\RabbitMQ Server\rabbitmq_server-3.7.14\sbin\rabbitmqctl" set_user_tags admin administrator

"C:\Program Files\RabbitMQ Server\rabbitmq_server-3.7.14\sbin\rabbitmqctl" set_permissions -p / admin ".*" ".*" ".*"

**3. 启用Web管理插件**，在cmd中运行下面语句：

"C:\Program Files\RabbitMQ Server\rabbitmq_server-3.7.14\sbin\rabbitmq-plugins" enable rabbitmq_management

:::note 注释
其中“C:\Program Files\RabbitMQ Server”为RabbitMQ安装路径，如果安装时已修改，请改成修改后的；“password”为密码，用户可以设置成自己的密码。
:::note 注释

**4. 验证RabbitMQ**，在IE中输入网址`“http://localhost:15672”`， 在UserName和Password分别输入admin和password，如果登录成功，表示安装成功。（如果已经验证忽略此步）

## 启用MQTT插件

* 启用rabbitmq中的mqtt插件，在开始菜单中以管理员模式启动cmd

  <img alt=" " src={useBaseUrl('docimg/mqtt4202.png')} />

* 分别输入以下命令：

`rabbitmq-plugins enable rabbitmq_mqtt（开启   rabbitmq_mqtt 对应端口 1883）`

  <img alt=" " src={useBaseUrl('docimg/mqtt4203.png')} />

`rabbitmq-plugins enable rabbitmq_web_mqtt（开启   rabbitmq_web_mqtt 对应端口 15675）`

  <img alt=" " src={useBaseUrl('docimg/mqtt4204.png')} />

* 成功之后，在rabbitmq网站里可以看到，mqtt已启用

  <img alt=" " src={useBaseUrl('docimg/mqtt4205.png')} />

**附：**

[安装](安装/安装.md)

[安装 SQLServer](安装/安装SQLServer.md)

[安装 PostgreSQL](安装/安装PostgreSQL.md)

[安装 MongoDB](安装/安装MongoDB.md)