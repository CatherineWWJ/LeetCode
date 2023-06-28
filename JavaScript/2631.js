/**
 * Map转为Object：const obj = Object.fromEntries(map)
 * mdn:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * 
 * Object.prototype.hasOwnProperty():对象自有属性（而不是继承来的属性）中是否具有指定的属性
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let map = new Map()
    for (const num of this) {
        const item = fn(num)
        if (!map.has(item)) {
            map.set(item, [num])
        } else {
            map.get(item).push(num)
        }
    }
    return Object.fromEntries(map)
};

// 官方题解：
Array.prototype.groupBy = function(fn) {
    const res = {} // 直接构造对象，非map
    for(const item of this){
        const key = fn(item);
        if(!res.hasOwnProperty(key)) res[key] = []; // 判断对象的自有属性是否存在？
        res[key].push(item)
    }
    return res
};