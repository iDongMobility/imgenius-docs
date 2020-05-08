# imgenius 文档

欢迎使用艾动科技imgenius的开源文档，参与开源不仅仅是提供更新，它也让我们知道何时出现问题。请查看此自述文件以了解如何帮助参与撰写本文档。

## 先决条件

参与撰写文档需要一个 GitHub 帐户，如果还没有帐户，请自行创建。 [注册GitHub账户](https://github.com/join)

## 请安装以下工具

* [Git](https://git-scm.com/download)
* [Node.js](https://nodejs.org/zh-cn/download/)（本地开发，可选）
* [Visual Studio Code](https://code.visualstudio.com/Download)（本地开发，可选）

## Installation

``` cmd
yarn install
```

## Local Development

``` cmd
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## 贡献文档注意事项

* 每页文档只有一个一级标题，一级标题名就是文档名，一级标题会自动填充，不用输入。
* 按内容合理规划二级及以后标题，这些标题会自动作为右侧导航目录。
* 如果用Visual Studio Code作为本地编辑器，推荐安装[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)扩展，并尽可能修复由此插件检查出来的不合规范的地方。
* 文档间和文档内部的超链接请使用相对地址，禁止使用绝对地址。
* 文档内部跳转请直接使用标题作为锚点，不要额外创建锚点。
* 除在描述特定步骤时，尽量少用有序列表。
* 文字描述为主，截图或动画为辅，能用文字描述清楚的可不用截图。
* 文档中的图片和附件请分别放到“static\docimg”和“static\docattachment”目录下。
* “versions.json”文件内容，“versioned_sidebars”和“versioned_docs”目录下内容是通过以下命令生成，请不要修改。

    ``` cmd
    yarn run docusaurus docs:version 3.8.2
    ```

* 简要的Markdown的语法参考[StyleGuide](StyleGuide.md)
* You can write JSX and use React components within your Markdown，具体参考[mdx](mdx.md)

## 许可

请参阅 [LICENSE](LICENSE.md)了解许可信息。

## 支持

若有其他任何问题或意见，请联系 [im@idongmobility.com](mailto:im@idongmobility.com)。




