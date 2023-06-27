/**
 * 记录遍历顺序
 * 2种遍历方式：
 * 1.按照二维数组遍历
 * 2.按照原一维数组遍历
 */

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    console.log(this)
    let res = []
    if (rowsCount * colsCount !== this.length) {
        return res
    }
    let ans = Array.from(new Array(rowsCount), () => new Array(colsCount)) // 重要：创建二维数组
    let flag = -1
    let k = 0
    for (let j = 0; j < colsCount; j++) {
        flag = -flag
        for (let i = flag>0?0:rowsCount-1; i < rowsCount&& i>= 0; i = i+flag) { // 循环边界条件想清楚（需要什么？）
            ans[i][j] = this[k++]
        }
    }
    return ans
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */