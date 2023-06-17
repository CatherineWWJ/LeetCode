/**
 * 异步函数：
 * https://blog.csdn.net/web22050702/article/details/128573389
 * 
 * 异步函数，即一个特殊函数，通过在函数声明前添加 async 关键字标识
 * 在异步函数中，能够使用关键词 await，它期待一个 Promise 值，并等待它决议，
 * 此时会暂停当前的程序并返回，控制权交还给主线程去执行其他任务
 */

/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */