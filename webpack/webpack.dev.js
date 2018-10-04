const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

const common = require('./../webpack.config');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new EventHooksPlugin({
      watchRun: () => {
        webpack(config).run();
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
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
