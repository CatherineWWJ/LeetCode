/**
 * 思路：
 * 1.给每一个参数都赋予唯一的id（区别 1 === 1 but {} !== {}
 * 2.给每一组参数都保存计算过的值（key通过map1中的id拼接而成）
 */

/**
 * @param {Function} fn
 */
function memoize(fn) {
    let map1 = new Map()
    let map2 = new Map()
    let id = 0
    return function(...args) {
        let k = ''
        for (const arg of args) {
            if (!map1.has(arg)) {
                map1.set(arg, id++)
            }
            k += map1.get(arg) + '-'
        }
        if (!map2.has(k)) {
            map2.set(k, fn(...args))
        }
        return map2.get(k)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */