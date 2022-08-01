//webpack 就是将众多目标文件 打包压缩成一个文件，然后将它放入index.html中加载之
const path = require('path')

module.exports = {
  //指定入口文件
  entry: './src/index.js',
  //指定出口文件
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'main.bundle.js'
  },
  //开发服务器
  devServer: {
    //指定根目录路径
    static: {
      directory: path.join(__dirname, '.'),
    },
    compress: true,
    //指定本地开发服务器端口号
    port: 10086,
  }
}