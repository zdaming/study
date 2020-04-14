class SyncWaterfallHook { // 钩子是同步的
  constructor (args) { // args => ['name']
    this.tasks = [];
  }
  tap (name, task) {
    this.tasks.push(task);
  }
  call (...args) {
    const [first, ...others] = this.tasks;
    const ret = first(...args);
    others.reduce((prev, next) => {
      return next(prev);
    }, ret);
  }
}

let hook = new SyncWaterfallHook(['name']);

hook.tap('react', (name) => {
  console.log('react', name);
  return 'react ok'
});

hook.tap('node', (name) => {
  console.log('node', name);
  return 'node ok'
});

hook.tap('webpack', (name) => {
  console.log('webpack', name);
});

hook.call('jw');
