const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const rimraf = require('rimraf');

const common = require('./../webpack.config');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new EventHooksPlugin({
      watchRun: () => {
        rimraf(path.join(__dirname, '../public/dist'), {}, () => {});
        webpack(config).run();
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    port: '3000',
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: 'index.html' },
      ],
    },
  },
});

module.exports = config;
