# NLP Sentiment Analysis Backend

这是 NLP Sentiment Analysis 项目的后端代码。

由于模型文件太大，本项目代码中不包含模型文件。

后端由 node.js 部分和 python 部分组成。

node.js 部分实现网络服务，调用 python 脚本为子程序，利用其进行评论分析。

`/static` 文件夹中是 `web-app` 分支打包出的应用，按照目录名称部署。特别的，`index.html` 部署在 `/views` 文件夹中。