class SyncBailHook { // 钩子是同步的
  constructor (args) { // args => ['name']
    this.tasks = [];
  }
  tap (name, task) {
    this.tasks.push(task);
  }
  call (...args) {
    let ret; // 当前这个函数的返回值
    let index = 0; // 当前要先执行一个
    do {
      ret = this.tasks[index++](...args);
    } while (ret === undefined && index < this.tasks.length);
  }
}

let hook = new SyncBailHook(['name']);

hook.tap('react', (name) => {
  console.log('react', name);
  return '停止向下执行'
});

hook.tap('node', (name) => {
  console.log('node', name);
});

hook.call('jw');
