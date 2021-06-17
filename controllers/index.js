// 该文件导出 index 控制器，处理应用入口网络请求

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html')
    }
}
