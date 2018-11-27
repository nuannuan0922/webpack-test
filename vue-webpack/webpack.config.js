const path = require('path')
const VueLoaderPlugin = require('vue-loader')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[contenthash].js' // [hash],[chunkhash],[name],[id],[query],[function]
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}