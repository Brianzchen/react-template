const merge = require('webpack-merge');

const common = require('./webpack.config');

module.exports = merge(common, {
  output: {
    publicPath: 'dist/',
  },
  devtool: 'inline-source-map',
  devServer: {
  },
});
