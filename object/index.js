const obj = require('./a')

require('./b')

console.log(obj.a)
// 1000

// 可以看到，node中的模块、对象天然是单例模式
// require('./b') 的时候，这个模块里的代码修改了a模块对象的值
