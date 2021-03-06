/* 
 * 该文件为将导出一个静态文件处理函数。
 * 用于非生产环境下 index.js 调用。
 */
const path = require('path')
const mime = require('mime')
const fs = require('mz/fs')

function staticFiles(url, dir) {
    return async (ctx, next) => {
        const rpath = ctx.request.path
        if (rpath.startsWith(url)) {
            const fp = path.join(dir, rpath.substring(url.length))
            if (await fs.exists(fp)) {
                ctx.response.type = mime.lookup(rpath)
                ctx.response.body = await fs.readFile(fp)
            } else {
                ctx.response.status = 404
            }
        } else {
            await next()
        }
    }
}

/* 导出静态文件处理函数 */
module.exports = staticFiles
