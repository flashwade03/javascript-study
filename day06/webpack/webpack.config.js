const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false
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
      {
        test: /\.(png|mp3)$/,
        use: [
            { 
                loader: 'url-loader'
            },
            {
                loader: ImageminPlugin.loader,
                options: {
                    bail: false,
                    cache: true,
                    imageminOptions: {
                        plugins: ["pngquant", {quality:[0.6,0.9]}]
                    }
                }
            }
        ]
      },    
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../')
    }),
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
