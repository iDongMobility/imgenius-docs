import useBaseUrl from '@docusaurus/useBaseUrl';

## 去掉API说明的显示-公司名称

<img alt=" " src={useBaseUrl('docimg/公司名称.png')} />

## EOC登录显示今日计划获取失败没有授权，API日志中有读取授权出错信息

* 日志错误信息为：

`imgenius - 读取授权出错，错误信息为：The native library 'C:\Windows\Microsoft.NET\Framework\v4.0.30319\wminet_utils.dll' does not have all required functions. Please, update the .NET Framework`

* 解决办法：

  * 首先查看.NET Framework当前最高版本，打开日志中提示的文件，右键-属性-详细信息

  <img alt=" " src={useBaseUrl('docimg/排查指南4401.png')} />

  * 如果低于4.7.X，则需要安装4.7.X及以上，推荐安装.NET Framework4.7.2及以上版本。下载地址为`https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/net472`，下载Developer pack及Language packs语言包，安装后重启系统即可。

  <img alt=" " src={useBaseUrl('docimg/排查指南4402.png')} />

## Web端作业树增加模板显示

### 使用说明：
1.在作业组的属性中添加文件类型的作业组属性，属性名为"$DisplayTemplate"，添加一个模板文件，该文件必须是office excel 2007版以上（即文件后缀必须为.xlsx）或office word 2007版以上（即文件后缀必须为.docx），在作业组显示的处多一种显示方式（可以有多个模板文件）。

2.在模板文件中，可以按照一定规则设置作业组的信息，流程实例的信息，作业/作业项的信息，作业组属性的信息。

3.在使用模板显示查看作业组信息时，会通过通配符去替换单元格信息。

4.当指定的标签不存在时，用户可以替换成指定的字符串
  a.作业组模板替换中可以增加字符串类型的作业组属性“$ValueOnNoExist”，作为指定要替换的字符串。

  b.项目模板替换中可以增加字符串类型的项目属性“$ValueOnNoExist”，作为指定要替换的字符串。

  c.如果不指定该属性“$ValueOnNoExist”的值，则标签不存在时，替换成空字符串【""】。

5.当指定的标签未完成时，用户替换成指定的字符串。
 a.作业组模板替换中可以增加字符串类型的作业组属性“$ValueOnUnCompleted”，作为指定要替换的字符串。

 b.项目模板替换中可以增加字符串类型的项目属性“$ValueOnUnCompleted”，作为指定要替换的字符串。

 c.如果不指定该属性“$ValueOnUnCompleted”的值，则标签未完成时，替换成空字符串【""】


