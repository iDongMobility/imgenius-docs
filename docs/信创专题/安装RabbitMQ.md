
import useBaseUrl from '@docusaurus/useBaseUrl';

### 安装Erlang环境

* 更新软件包列表

  `sudo apt update`

  <img alt=" " src={useBaseUrl('docimg/linuxmq1.png')} />

* 安装依赖项

  `sudo apt-get install erlang-nox`

  <img alt=" " src={useBaseUrl('docimg/linuxmq2.png')} />

### 安装RabbitMQ

* 希望继续执行输入"Y"，然后等待安装完成

  `sudo apt install rabbitmq-server`

  <img alt=" " src={useBaseUrl('docimg/linuxmq3.png')} />

* 启动Rabbitmq

  `sudo systemctl start rabbitmq-server`

* 将Rabbitmq设置为开机启动

  `sudo systemctl enable rabbitmq-server`

  <img alt=" " src={useBaseUrl('docimg/linuxmq4.png')} />

* 查看服务是否启动，如果一切正常，输出应当如图所示

  `sudo systemctl status rabbitmq-server`

  <img alt=" " src={useBaseUrl('docimg/linuxmq5.png')} />

* 创建rabbitmq管理用户

  `rabbitmqctl add_user 用户名 密码`

* 给创建的用户赋予管理员权限

  `rabbitmqctl set_user_tags 用户名 administrator`

* 给用户开启访问权限

  `rabbitmqctl set_permissions -p / 账户 '.*' '.*' '.*'`

* 开启管理界面(如果不开启则无法通过浏览器访问):默认网页端口15672

  `rabbitmq-plugins enable rabbitmq_management`

* 重启rabbitmq-server服务并查看是否在运行

  `systemctl restart rabbitmq-server.service`
  `systemctl status rabbitmq-server.service`

* 访问网页管理界面

  `http://RabbitMQ服务器IP地址(本机的话就用127.0.0.1或者0.0.0.0):15672/`

  <img alt=" " src={useBaseUrl('docimg/linuxmq6.png')} />
