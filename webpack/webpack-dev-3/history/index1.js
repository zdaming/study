import calc from './test'

// import 在生产环境下 会自动去除掉没用的代码
// tree-shaking 把没用的代码 自动删除掉
// const calc = require('./test')

// scope hosting 作用域提升
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c; // 在webpack中自动省略 一些可以简化的代码
console.log(d);

console.log(calc.sum(1, 2))
