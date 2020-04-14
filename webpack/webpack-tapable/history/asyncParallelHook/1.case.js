class AsyncParallelHook {
  constructor (args) { // args => ['name']
    this.tasks = [];
  }
  tapAsync (name, task) {
    this.tasks.push(task);
  }
  callAsync (...args) {
    let finalCallback = args.pop();
    let index = 0;
    let done = () => { // Promise.all
      index++;
      if (index === this.tasks.length) {
        finalCallback();
      }
    }
    this.tasks.forEach(task => {
      task(...args, done);
    });
  }
}

let hook = new AsyncParallelHook(['name']);

hook.tapAsync('react', (name, callback) => {
  setTimeout(() => {
    console.log('react', name);
    callback();
  }, 1000);
});

hook.tapAsync('node', (name, callback) => {
  setTimeout(() => {
    console.log('node', name);
    callback();
  }, 1000);
});

hook.callAsync('jw', () => {
  console.log('end');
});
