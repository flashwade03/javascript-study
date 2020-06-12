const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  entry:'./src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../')
    }),
    new CopyWebpackPlugin({
      patterns:[
        {from:path.resolve(__dirname, '../assets/**.png'), to:path.resolve(__dirname, '../dist')}
      ]
    }),
    new ImageminPlugin({pngquant:{quality:'90-100'}}),
    new HtmlWebpackPlugin({
      template:'./index.html',
      inlineSource: '.js$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new webpack.DefinePlugin({
      NETWORK: JSON.stringify("Applovin")
    })
  ]
}
