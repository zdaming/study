const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const t = require('@babel/types');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;

// babylon 主要就是把源码 转换成ast
// @babel/traverse
// @babel/types
// @babel/generator
class Compiler {
  constructor (config) {
    // entry output
    this.config = config;
    // 需要保存入口文件的路径
    this.entryId;
    // 需要保存所有的模块依赖
    this.modules = {};
    // 入口路径
    this.entry = config.entry;
    // 工作路径
    this.root = process.cwd();
  }
  // 执行
  run () {
    // 创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true);
    console.log(this.modules, this.entryId);
    // 发射一个文件
    this.emitFile();
  }
  buildModule (modulePath, isEntry) {
    // 拿到模块的内容
    let source = this.getSource(modulePath);
    // 模块id modulePath = modulePath - this.root src/index.js
    let moduleName = './' + path.relative(this.root, modulePath);

    if (isEntry) {
      this.entryId = moduleName; // 保存入口的名字
    }
    // 解析需要把source源码进行改造 返回一个依赖列表
    let { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName)); // ./src
    // 把相对路径和模块中的内容 对应起来
    this.modules[moduleName] = sourceCode;
    // 父模块的加载 递归加载
    dependencies.forEach(dep => {
      this.buildModule(path.join(this.root, dep), false);
    });
  }
  // 发射文件 用数据渲染我们的模板
  emitFile () {
    
  }
  getSource (modulePath) {
    return fs.readFileSync(modulePath, 'utf8');
  }
  // 解析源码 AST解析语法树
  parse (source, parentPath) { 
    let ast = babylon.parse(source);
    let dependencies = []; // 依赖的数组
    traverse(ast, {
      CallExpression (p) { // a() require()
        let node = p.node; // 对应的节点
        if (node.callee.name === 'require') {
          node.callee.name = '__webpack_require__';
          // 取到的就是模块的引用名字
          let moduleName = node.arguments[0].value;
          moduleName = moduleName + (path.extname(moduleName) ? '' : '.js');
          moduleName = './' + path.join(parentPath, moduleName);
          dependencies.push(moduleName);
          node.arguments = [t.stringLiteral(moduleName)];
        }
      }
    });
    let sourceCode = generator(ast).code;
    return { sourceCode, dependencies}
  }
}

module.exports = Compiler
