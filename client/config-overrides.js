const { override, fixBabelImports, addWebpackAlias, addBabelPlugin } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  }),
  addBabelPlugin(["@babel/plugin-proposal-optional-chaining", { "loose": false }])
)