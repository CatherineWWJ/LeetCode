/**
 * instanceof : https://blog.csdn.net/weixin_40013817/article/details/103182967
 * 
 * instanceof只能正确判断引用数据类型，而不能判断基本数据类型:
 * https://blog.csdn.net/qq_46580571/article/details/128075051
 * 
 */

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || !(classFunction instanceof Function)) {
      return false
    }
    return Object(obj) instanceof classFunction
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */