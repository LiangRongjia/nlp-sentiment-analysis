// 该文件导出 “分析评论接口” 控制器，处理分析的网络请求

const pyAnalyze = global.pyAnalyze

module.exports = {
    'POST /analyze': async (ctx, next) => {
        ctx.response.body = await analyzeByPython(ctx.request.body)
    }
}

async function analyzeByPython(commentsString = '[]') {
    const comments = JSON.parse(commentsString)
    let result = []
    for (let i = 0; i < comments.length; i++) {
        result.push(await pyAnalyze(comments[i] + '\n'))
    }
    return { data: result }
}
