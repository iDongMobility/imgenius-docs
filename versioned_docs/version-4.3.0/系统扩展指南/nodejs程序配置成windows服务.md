
import useBaseUrl from '@docusaurus/useBaseUrl';

## 工具下载
[nssm](http://www.nssm.cc/download)可以把`nodejs`程序配置成`windows服务`，程序异常时可以自动重新启动
## 使用方法

* 开始安装
    在`nssm.exe`所在目录执行安装命令，弹出安装服务对话框
    ```
    nssm install <servicename>
    ```

    <img alt=" " src={useBaseUrl('docimg/nssm服务1.png')} />
* `Application`选项卡
    * `Path`
        `nodejs`安装目录下`node.exe`，如`C:\Program Files\nodejs\node.exe`
    * `Startup directory`
        `nodejs`程序目录，如`D:\CustomKPI`
    * `Arguments`
        `nodejs`程序主文件，如`app.js`

* `Detail`选项卡
    
    <img alt=" " src={useBaseUrl('docimg/nssm服务2.png')} />
    * `Display name`
        服务显示名，如`iDong CustomKPI Service`
    * `Description`
        服务描述，如`艾动自定义KPI服务`
    * `Startup type`
        启动方式，默认自动
* 完成安装
点击`install service`按钮，`Service name`在点击前可修改


