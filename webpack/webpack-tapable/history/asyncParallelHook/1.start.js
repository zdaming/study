let { AsyncParallelHook } = require('tapable');

// 异步的钩子 串行 并行 需要等待所有并发的异步事件执行后再执行回调方法
// 注册方法 分为 tap注册 tapAsync
class Lesson {
  constructor () {
    this.hooks = {
      arch: new AsyncParallelHook(['name'])
    }
  }
  tap () { // 注册监听函数
    this.hooks.arch.tapAsync('node', (name, callback) => {
      setTimeout(() => {
        console.log('node', name);
        callback();
      }, 1000);
    });
    this.hooks.arch.tapAsync('react', (name, callback) => {
      setTimeout(() => {
        console.log('react', name);
        callback();
      }, 1000);
    });
  }
  start () {
    this.hooks.arch.callAsync('jw', () => {
      console.log('end')
    });
  }
}

let l = new Lesson();
l.tap(); // 注册这两个事件
l.start(); // 启动钩子
