let button = document.createElement('button');

button.innerHTML = 'hello';

button.addEventListener('click', function () {
  // es6 草案中的语法 jsonp实现动态加载文件
  import('./source.js').then(data => {
    console.log(data.default);
  });
});

document.body.appendChild(button);
