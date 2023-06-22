/**
 * 数组索引没有负号
 * 
 * ?? : 空值合并运算符(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
 */

// 错误示范
Array.prototype.last = function() {
    return this[this.length-1]??-1 // 当数组为[null]时结果错误！
};

// 正确示范
Array.prototype.last = function() {
    if(this.length > 0) {
        return this[this.length - 1]
    }
    return -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */