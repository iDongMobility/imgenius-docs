import useBaseUrl from '@docusaurus/useBaseUrl';
## Web端

### 网站打不开

1. 确定输入地址为服务器IP地址，浏览器为谷歌或者火狐。（不完全支持IE，360，2345等浏览器）

1. 请打开cmd ping 服务器IP地址 -t ，没有响应请联系锦亿机动科部门解决网络问题

1. 如果有回应请远程服务器查看开始-IM系统管理中心-6大服务是否开启。没有开启请右击数据中心-撤销部署-部署，将服务状态改为运行中。

<img alt=" " src={useBaseUrl('docimg/wenti2.png')} />

### 部署完毕后EOC显示异常

部署完毕之后，登录EOC，会有异常显示和错误提示。

异常显示为登录页面显示不完整，登录信息不正确。

**问题分析：** iis安装错误导致

**解决办法：** 重新安装iis

### 还原数据库正常部署后，EOC无法登陆

**现象：** 还原数据库正常部署后，EOC无法登陆，提示：没有部署任何解决方案

**解决办法：** 

1. 用im部署工具重新部署，并重启IIS

1. 重启服务，重启数据库

1. 进入数据库，选中当前数据库，右击，属性，进入到数据库属性界面，选中选项，将Broker 的值修改为 True，如图：

<img alt=" " src={useBaseUrl('docimg/wenti5.png')} />

确定后重启数据库，完成。
## 大屏设备的配置信息
大屏相关配置信息保存在eoc的安装路径下的【imFigure】 文件夹中，每个工程的配置在与其工程名同名的文件夹中保存。

工程的文件夹下有大屏设备列表文件【clientlist.json】与以设备id为名的文件夹。

【clientlist.json】文件需要用工具编辑与保存。

设备id为名的文件夹中保存该设备的配置文件【config.json】，工程实施人员需要手动配置设备对应的文件【config.json】，该文件需要utf-8编码保存。。



【clientlist.json】文件为json字符串，其json为数组，数组元素为对象。工程下设备按照数组中id顺序依次授权，如该工程下有三个设备授权，则配置中前三个id有效。

json格式为

[{"ID":"1"},{"ID":"2"},{"ID":"3"}]。



设备配置文件【config.json】说明：

config.json内容为json字符串。

【LeftNavigation】为大屏中左侧导航信息，其为数组，元素是页面配置信息。

元素为对象：ID为自定义面板ID（ID是系统自动生成，工程人员不可写ID）， DisplayName为大屏菜单显示名称，Icon为菜单图标，PanelName为面板名称（必须写，用名称获取面板信息）。



【IsShowName】大屏导航是否显示名称。

【IsShowIcon】大屏导航是否显示图标。

【LeftWidth】大屏导航宽度。

【DataUpdateTime】数据更新间隔时间，单位为分钟。

【PageSwitchingTime】页面切换间隔时间，单位为秒。



eg:

比如网站部署路径为【C:\wwwroot\】，工程名为【2.0Test项目】

则大屏配置路径为C:\wwwroot\imFigure\。

其中【C:\wwwroot\imFigure\2.0Test项目\】为工程【2.0Test项目】的大屏配置信息路径。

工程【2.0Test项目】的大屏设备列表配置信心为【C:\wwwroot\imFigure\2.0Test项目\clientlist.json】。

工程【2.0Test项目】下id为【1】的设备配置信息为【C:\wwwroot\imFigure\2.0Test项目\1\config.json】。



【clientlist.json】样例：[{"ID":"1"},{"ID":"2"},{"ID":"3"}]。 注意【clientlist.json】的修改需要用小工具【imFigureTool】，工具在附件中。



【config.json】样例：

{

  "LeftNavigation": [

    {

      "ID": "65787420-2c7d-4fe7-b9e5-0ee2f7f75622",

      "DisplayName": "面板一",

      "Icon": "font-idong icon-ServiceProject-idong",

      "PanelName": "面板1"

    },

    {

      "ID": "9c3e96bc-7cf9-4956-94cf-b14ffdbbfd5f",

      "DisplayName": "显示2",

      "Icon": "font-idong icon-ServiceProject-idong",

      "PanelName": "面板二"

    },

    {

      "ID": "21389129-a5a7-4115-abea-eb1d6e024cd9",

      "DisplayName": "显示3",

      "Icon": "font-idong icon-ServiceProject-idong",

      "PanelName": "面板三"

    }

  ],

  "IsShowName": true,

  "IsShowIcon": true,

  "LeftWidth": 100,

  "DataUpdateTime": 2,

  "PageSwitchingTime": 5

}
