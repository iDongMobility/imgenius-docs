
import useBaseUrl from '@docusaurus/useBaseUrl';

**imgenius系统使用MongoDB来承担文件服务器和内容服务器的组件角色， MongoDB是一个基于分布式文件存储的数据库。** 以4.0版本为例，安装如下：

* 运行“mongodb-win32-x86_64-2008plus-ssl-4.0.8-signed.msi”安装MongoDB。（注：如果自行选择了安装路径，请确保安装路径无中文字符）

* Data（数据存盘路径）文件夹和log（日志存盘路径）文件夹会在安装时按照自己配置自动创建。

   <img alt=" " src={useBaseUrl('docimg/mongodb.png')} />

**注：以下内容，非生产环境可忽略。**

###  安装完成后的步骤

1. 首先创建用户管理员和系统管理员管理员身份运行“cmd.exe”。

2. 切换到安装路径的“Server\4.0\bin”下。（如：“C:\Program Files\MongoDB\Server\4.0\bin”）

3. 运行“mongo”进入shell。

4. 运行“use admin”到admin数据库下。

5. 运行
“db.createUser({user:"userAdmin",pwd:"请自行设置",roles:[{role:"userAdminAnyDatabase",db:"admin"}]})”创建用户管理员（注：请自行设置user和pwd，并记住；用户名和密码不要含有“@”符号）

6. 按“Ctrl + C”退出。

7. 运行“mongo.exe --port 27017 -u "userAdmin" -p "请自行设置" --authenticationDatabase "admin"（注：端口与bin文件夹下mongod.cfg内容一致、用户名和密码与自行修改保存一致

8. 运行“use admin”。

9. 运行
“db.createUser({user:"admin",pwd:"请自行设置",roles:[{role:"dbAdminAnyDatabase",db:"admin"},{role:"readWriteAnyDatabase",db:"admin"}]})”创建系统管理员（注：请自行设置user和pwd，并记住；用户名和密码不要含有“@”符号）

10. 查看用户
使用db.system.users.find()命令就可以查看我们刚刚创建的用户了。

### 启用权限认证

1. Mongo安装完成后，是默认未开启权限认证的，所以我们不创建用户，也可以登录和使用，在robomongo中测试时，“Database”，“UserName”和“Password”为空时，点击“Test”测试也会链接成功。在生产环境中，mongodb未开启权限认证会导致数据被窃取。和其它数据库一样，权限的管理都差不多一样。

2. 但不同的是mongodb的用户是跟数据库相关联的，具体的数据库，还是需要有对应的用户，也就是说哪怕是超级管理员也不能操作其他数据库的。

3. mongodb存储所有的用户信息在admin 数据库的集合system.users中，保存用户名、密码和数据库信息。

4. 由于mongodb默认不启用授权认证，只要能连接到该服务器，就可连接到mongod。若要启用安全认证，需要更改配置文件参数--auth。

**设置权限的步骤如下：**

1. 新打开一个cmd，输入net stop MongoDB，停止服务。

   <img alt=" " src={useBaseUrl('docimg/mongodb1.png')} />

2. 打开安装路径bin目录下的“mongod.cfg”文件，将#security:的注释去掉，然后添加authorization: enabled #注意authorization前面要有两个空格，如图：

   <img alt=" " src={useBaseUrl('docimg/mongodb2.png')} />

3. 回到cmd，输入net start MongoDB，启动服务

   <img alt=" " src={useBaseUrl('docimg/mongodb3.png')} />

4. 这时候就需要输入db.auth('admin','admin+iDong')启用auth认证，如图：

   <img alt=" " src={useBaseUrl('docimg/mongodb4.png')} />

   会看到返回的值为1，这就表示启动成功了。

5. 按“Ctrl + C”退出。

### 测试连接和查看是否安装成功

* 查看服务是否启动，如图即安装成功：

  <img alt=" " src={useBaseUrl('docimg/mongodb5.png')} />

### 远程连接MongoDB配置

* 想要在某台机器上连接到服务器的MongoDB，首先需要打开服务器的27017端口，在防火墙高级设置中新建入站规则，规则类型选择端口，特定本地端口中填写27017即可。

* 之后打开MongoDB安装目录的bin文件夹，如“C:\Program Files\MongoDB\Server\4.0\bin”，使用文档编辑程序修改其中的mongod.cfg文件，将服务器ip添加进去，如图：

  <img alt=" " src={useBaseUrl('docimg/mongodblianjie.png')} />

* 之后重启MongoDB服务即可。

**附：**

[安装](安装/安装.md)

[安装 SQLServer](安装/安装SQLServer.md)

[安装 PostgresSQL](安装/安装PostgresSQL.md)

[安装 RabbitMQ](安装/安装RabbitMQ.md)