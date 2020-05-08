    RabbitMQ服务拓展开发是基于 Node.js 平台的下的express开发框架搭载的服务。主要用于捕捉流程节点前后的作业组信息，以及对其逻辑的处理及变化

## 程序目录

![item1](/static/docimg/RabbitMQ1.png) 

#

* 在实际项目中，只需要更改和处理目录中 ***app.js*** , ***message.js*** 以及 ***base.js*** 的代码

#

## 配置及开发

### ***app.js***

* app.js为服务启动项

* 更改 ***config*** 的HostName,UserName,Password
* HostName是服务器名
* UserName和Password分别对应rabbitMQ的超管的账号和密码

```js
var fs = require('fs');
var path = require('path');
var IsHavTiming = false;
var configpath = path.resolve('Config/config.json');
var amqp = require('amqp');
var amqplib = require('amqplib/callback_api');
var Vhost = "/";
var cacheConnect = {};
var config = { "Enable": false, "HostName": "localhost", "UserName": "admin", "Password": "iDong@mq" };
var Connection = null;
var xml2js = require('xml2js');
var xmlParser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: true });
var itemData = null;
var isExit = null;
var isProcessMessage = null;
var ImLogWriter = require('./imLogWriter.js');
var imLogWriter = new ImLogWriter();
var CustomHelp = require('./CustomHelp.js');
var customHelp = new CustomHelp();

///读取配置文件
var ReadConfig = function (path, _callback) {
    fs.readFile(path, 'utf-8', function (err, data) {
        if (err) {
            imLogWriter.WriteLog("[" + path + "]读取失败！", "error");
            _callback(null); //读取失败 则不再执行
        }
        else {
            _callback(data);
        }
    });
};
```

### ***base.js***

* base.js是在逻辑代码中用于调用接口的类，因为调用接口需要用到消息服务系统。因此，需要事先配置好账号及密码

* authorization的li和pd分别对应消息服务的账号和密码
* host为服务器ip
* prot是消息服务的端口

```js
    this.http = require('http');
    this.authorization ='Basic '+new Buffer('{\'li\':\'administrator\',\'pd\':\'1234\'}').toString('base64');
    this.host = 'localhost';
    this.port = 8010;
```

### ***message.js***
* message.js是服务的逻辑代码，用于处理某个流程节点前后的逻辑，这个部分经常会调用到接口，下面的示例会示范如何调用接口

* 示例中展示了如何在id为 ***e4e81f3d-9ce5-458b-84b8-36faab6ee817*** 的流程节点在结束后，调用接口 ***Report/GetTaskGroupProperties***，即获取到作业组的所有作业组属性

```js
    var Base = require('./base');
    var base = new Base();
    var request = require('request');

    //获取作业组下的所有作业组属性
    function GetTaskGroupProperties(TGid,callback) { 
    base.process('GET','Report/GetTaskGroupProperties?taskGroupID='+TGid,'',null,function(_data){
       var obj = JSON.parse(_data);
       if (obj.IsOk) {
        callback(obj.Response);
        return;
    }  
    else{
        return;
    }
    });
    }

    //此函数用来判断状态做不同的行为
    function doSomeThing(){
      this.process = function (msg) {          //拿到作业组实例对象       
        var msgObj = JSON.parse(msg.content.toString());  
        console.dir(msgObj);    
        TGid = msgObj.TaskGroupID;
        tgName = msgObj.TaskGroupName;
        if ((msgObj.ActivityEntityID==='e4e81f3d-9ce5-458b-84b8-36faab6ee817')&&(msgObj.ActivityState === 'Done')) 
            {
                GetTaskGroupProperties(TGid,GetTaskGroupProperties=>{
                    console.log("成功");
                    console.log(JSON.stringfy(GetTaskGroupProperties));
                });
            }
        }

    }
    module.exports = doSomeThing;
```

* 流程后函数配置及开发写完后，[将nodejs程序配置成windows服务](系统扩展指南/nodejs程序配置成windows服务.md) 

## 示例效果

* 打开cmd,输入程序路径后，输入node app.js

![item2](/static/docimg/RabbitMQ2.png)

* 成功打开后

![item3](/static/docimg/RabbitMQ3.png)

* 示例中的逻辑是，id为**e4e81f3d-9ce5-458b-84b8-36faab6ee817**且流程名为 **维修保养** 的流程节点结束后，获取作业组的所有属性

![item4](/static/docimg/RabbitMQ4.jpg)

* 终端**维修保养**结束后，完成并同步，看到控制台出现结果

![item4](/static/docimg/RabbitMQ5.png)
