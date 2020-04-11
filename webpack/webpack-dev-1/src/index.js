// webpack打包我们的图片
// 1) 在js中创建图片来引入
// file-loader 默认会在内部生成一张图片到build目录下
// 把生成的图片名字返回回来
import logo from './logo.png'; // 把图片引入 返回的结果是一个新的图片地址
let image = new Image();
image.src = logo;
document.body.appendChild(image);
// 2) 在css引入 background('url')
// 3) <img src="" alt="" />

// import $ from 'jquery';

// expose-loader 暴露 全局的loader 内联的loader
// pre 前面执行的loader normal 普通的loader 内联loader 后置 postloader
// console.log(window.$);

// import $ from 'jquery';

// console.log($); // 在每个模块中注入 $对象
// console.log(window.$);

// let str = require('./a.js');

// console.log(str + '1');

require('./index.css');

// let fn = () => {
//   console.log('log');
// };

// fn();

// @log
// class A {
//   a = 1;
// }
// let a = new A();
// console.log(a.a);

// function log (target) {
//   console.log(target, '23')
// }
