/**
 * 我的思路：递归（DFS）
 * 
 * 遍历数组：for...of...
 * 检查数组：Array.isArray()
 * 解构赋值：...arr
 */

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let ans = []
    process(arr, 0, n, ans)
    return ans
};

function process(arr, k, n, ans) {
    // console.log(arr, k, n, ans)
    if (k > n) {
        ans.push(arr)
        return
    }
    for(let i = 0;i<arr.length;i++) {
        if (arr[i] instanceof Array) { // 子元素为数组
            process(arr[i], k+1, n, ans)
        } else {
            ans.push(arr[i])
        }
    }
}

// 官方题解：
 /** 递归写法  */
 var flat = function (arr, n) {
    // return arr.flat(n);
    if(n <= 0) return arr;
    const result = [];
    for(const item of arr){
        result.push(...(Array.isArray(item)?flat(item,n-1):[item]));
    }
    return result;
};
