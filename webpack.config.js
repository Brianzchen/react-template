const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    filename: 'index.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      aphrodite: 'aphrodite/no-important',
    },
    extensions: ['*', '.js', '.jsx', '.css'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
