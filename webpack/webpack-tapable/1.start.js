let { AsyncSeriesWaterfallHook } = require('tapable');

class Lesson {
  constructor () {
    this.hooks = {
      arch: new AsyncSeriesWaterfallHook(['name'])
    }
  }
  tap () { // 注册监听函数
    this.hooks.arch.tapAsync('node', (name, callback) => {
      setTimeout(() => {
        console.log('node', name);
        callback(null, 'result');
      }, 1000);
    });
    this.hooks.arch.tapAsync('react', (data, callback) => {
      setTimeout(() => {
        console.log('react', data);
        callback();
      }, 1000);
    });
  }
  start () {
    this.hooks.arch.callAsync('jw', () => {
      console.log('end');
    });
  }
}

let l = new Lesson();
l.tap(); // 注册这两个事件
l.start(); // 启动钩子
