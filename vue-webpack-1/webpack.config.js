const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ]
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({ // https://webpack.js.org/plugins/define-plugin/
      'env': isDev ? '"development"' : '"production"'
    }),
    new HTMLPlugin(),
    new webpack.HotModuleReplacementPlugin({

    })
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map' //https://webpack.js.org/configuration/devtool/
  config.devServer = {
    port: 8000,
    host: 'localhost',
    open: true,
    hot: true
  }
}

module.exports = config