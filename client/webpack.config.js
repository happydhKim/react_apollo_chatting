const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './index.jsx',
  output: {
    path: Path.join(__dirname, './'),
    filename: 'index.bundle.js'
  },
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './')
    },
    extensions: ['.mjs', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Path.resolve('index.html')
    })
  ]
};

module.exports = config;
