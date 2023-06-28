/**
 * 理解生成器：生成器可以当成普通的函数，但是可以通过yield中断执行并返回值，调用一次（next()）相当于激活程序，
 * 接着上次yield后面继续执行
 * 
 */

// 优化版本：es6解构赋值
var fibGenerator = function*() {
    let n1 = 0
    let n2 = 1
    while (true) {
        yield n1; // 这里必须加分号！！！
        [n1, n2] = [n2, n1+n2]
    }
};

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let n1 = 0 // F(n-2)
    let n2 = 1 // F(n-1)
    let current
    while (true) {
        current = n1
        n1 = n2
        n2 = current + n1
        yield current
    }
};

// 示例
function* fibonacci() {
    var fn1 = 0;
    var fn2 = 1;
    console.log('wwj');
    while (true) {
      var current = fn1;
      fn1 = fn2;
      fn2 = current + fn1;
      yield current; // 类似于中断
      console.log('czy');
    }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1