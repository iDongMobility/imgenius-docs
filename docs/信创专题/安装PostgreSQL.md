
import useBaseUrl from '@docusaurus/useBaseUrl';

### 切换用户

* 由于在linux系统中，有些操作需要有root用户的权限，所以第一步是将用户切换为root。

* 使用Ctrl+Alt+T打开终端，为root用户设置密码，输入：

  `sudo passwd root`

* 失败会有提醒，重新设置密码。成功后输入'su'，切换为root用户

  <img alt=" " src={useBaseUrl('docimg/linuxroot1.png')} />

### 安装步骤

* 更新软件包列表

  `sudo apt update`

  <img alt=" " src={useBaseUrl('docimg/linuxpg1.png')} />

* 安装PostgreSQL数据库，出现希望继续执行时输入"Y"，然后等待安装完成

  `sudo apt install postgresql postgresql-client`

  <img alt=" " src={useBaseUrl('docimg/linuxpg2.png')} />

* cd到root目录下查看pg是否已经启动，如果已经cd到root目录，则不需要输入`cd /root`，输入查看是否启动的命令。如果一切正常，输入应该如图所示

  `sudo systemctl status postgresql`

  <img alt=" " src={useBaseUrl('docimg/linuxpg4.png')} />

* 进入PG命令行，如果没有cd到root目录，由于默认用户的目录权限不够，所以会有权限不够的提醒，如果不能进入命令行则使用`cd /root`，到root目录下即可

  `sudo -u postgres psql`

  <img alt=" " src={useBaseUrl('docimg/linuxpg3.png')} />

* Ctrl+Z退出psql，为pg的管理员用户postgres设置密码。首先在操作系统中创建一个用户，名称为postgres，并为其设置好密码。然后切换使用者为该用户，用该用户登录psql，设置密码，要与操作系统中设置的一致，设置完毕后退出psql即可。

  `passwd postgres`

  `su – postgres`

  `\password`

  `select pg_reload_conf();`

  <img alt=" " src={useBaseUrl('docimg/linuxpg5.png')} />

### 安装pgadmin并使用

* 打开deepin系统中的应用商店，搜索pgadmin，点击安装即可。

  <img alt=" " src={useBaseUrl('docimg/linuxpg6.png')} />

* 安装完毕后，打开pdadmin，点选菜单“文件->添加服务器”来打开添加服务器登记窗口。也可以直接点击添加服务器按钮。

  <img alt=" " src={useBaseUrl('docimg/linuxpg7.png')} />

  <img alt=" " src={useBaseUrl('docimg/linuxpg8.png')} />

* 在“新建服务器登记”窗口中，设置好数据库连接的相关资料

  <img alt=" " src={useBaseUrl('docimg/linuxpg9.png')} />

* 其中，需要输入的有:
  * 名称, 该数据库连接的自定义名称
  * 主机, 要连接的PostgreSQL服务器的网路名，或者填写其IP地址
  * 端口号，PostgreSQL服务器侦听的端口号，默认安装的端口号为5432
  * 维护数据库，与PostgreSQL服务器连接创建时，默认的数据库名
  * 用户名称，登录PostgreSQL服务器的用户名
  * 密码, 登录PostgreSQL服务器的密码
  * 选项“保存”密码，是否由pgAdmin保存此服务器的登录密码，如果勾选则以后连接此PostgreSQL服务器时不再需要输入密码

* 在建立"服务器登记"之后，以后打开pgAdmin就可以直接点击这些建立好的服务器登记，从而建立到数据库的连接。一个服务器登记包括了要连接的目标PostgreSQL服务器，还包括连接目标服务器所使用的账号。
