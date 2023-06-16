/**
 * 数组索引没有负号
 * 
 * ?? : 空值合并运算符(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
 */

Array.prototype.last = function() {
    return this[this.length-1]??-1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */