/**
 * 官方题解：可以直接修改原数组（新数组长度 === 原数组长度）且一一对应
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i))
    }
    return res
};