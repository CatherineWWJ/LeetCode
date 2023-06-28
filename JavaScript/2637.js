/**
 * fn():返回的是一个Promise对象
 * Promise对象的参数是一个回调函数（参数1：resolve方法, 参数2：reject方法）
 * 注意：用到定时器就要注意在结束后清除定时器！！！
 * 
 * 思路：
 * 构建一个超时处理的Promise对象
 * Promise.race():哪个Promise先处理完成就定大局！
 * 
 * mdn：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        let timer;
        const timeoutPromise = new Promise((res, rej) => {
            timer = setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t)
        })
        return Promise.race([timeoutPromise, fn(...args)]).then(res => {
            clearTimeout(timer)
            return res
        })
    }
};