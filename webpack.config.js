const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    codemirror: './codemirror.js'
  },
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, './'),
    filename: '[name].bundle.js',
    publicPath: '/codemirror/dist/'
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    publicPath: '/dist/'
  }
}
