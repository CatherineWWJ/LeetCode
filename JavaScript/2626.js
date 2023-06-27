/**
 * Array.reduce: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 * Array.slice(start, end):切割数组[start, end)
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length <= 0) { // 空数组
        return init
    }
    return reduce(nums.slice(1,), fn, fn(init, nums[0]))
};

// 官方题解：for循环（减少了空间开销）
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init
    for (const num of nums) {
        res = fn(res, num)
    }
    return res
};