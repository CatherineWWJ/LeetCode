/**
 * 记录键值对：map
 * key可以是任何值
 */

// 示例一：
const item1 = [2,2]
const item2 = [2,2]
const map1 = new Map()
map1.set(item1, 4)
map1.set(item2, 4)
console.log(map1) // 生成2个对象的引用 --- 2个key
// 示例二：
const item3 = [2,2].join(',')
const item4 = [2,2].join(',')
const map2 = new Map()
map2.set(item3, 4)
map2.set(item4, 4)
console.log(map2) // 生成1个基本类型 --- 1个key

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const map = new Map()
    return function(...args) {
        const item = args.join(',') // 注意key值
        if (!map.has(item)) {
            map.set(item, fn(...args))
        }
        return map.get(item)
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
