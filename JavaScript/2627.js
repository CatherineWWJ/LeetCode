/**
 * lodash 的 _.debounce() 函数：
 * https://www.lodashjs.com/docs/lodash.debounce
 * 
 * setTimeout(() => {
 *      在此处调用处理函数
 * }, t)
 * 
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let my_time;
    return function(...args) { // 这里是闭包的写法
        console.log(my_time)
        if (my_time) {
            clearTimeout(my_time)
        }
        my_time = setTimeout(() => { // 注意：第一个参数传的是函数，而不是直接调用函数
            fn(...args)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */