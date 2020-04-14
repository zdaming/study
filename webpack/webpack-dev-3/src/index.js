import str from './source';

console.log(str);

if (module.hot) {
  module.hot.accept('./source', () => {
    require('./source')
  })
}
