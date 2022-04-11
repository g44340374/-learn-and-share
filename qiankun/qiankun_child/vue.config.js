module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3001,
  },
  configureWebpack: {
    output: {
      library: `vue_child`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    },
  },
};