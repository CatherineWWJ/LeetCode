/**
 * Array.reverse():将原数组反转
 * 
 * Array.prototype.reduceRight()：
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
 */

// 官方题解
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((target, fn) => fn(target), x)
    }
};

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    functions.reverse()
	return function(x) {
        let res = x
        for (const func of functions) {
            res = func(res)
        }
        return res
    }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */