/**
 * 数组遍历的处理速度排序：for > for-of > forEach > filter > map > for-in
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let res = []
    arr.forEach((val, idx) => {
        if (fn(val, idx)) {
            res.push(val)
        }
    })
    return res
};

// 官方题解：推荐for循环遍历
var filter = function(arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i])
        }
    }
    return res
};