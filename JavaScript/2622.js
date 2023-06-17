/**
 * Map:
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
 * 
 * 定时器：setTimeout
 * https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout
 */

var TimeLimitedCache = function() {
    this.map = new Map() // JS标准内置对象
    this.times = {} // 存储每个key的定时器ID
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const res = this.map.has(key)
    this.map.set(key, value)
    clearTimeout(this.times[key])
    this.times[key] = setTimeout(() => this.map.delete(key), duration)
    return res
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.map.get(key)??-1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */