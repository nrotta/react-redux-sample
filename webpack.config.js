'use strict';

module.exports = {
  entry: './app/index.js',
  output: {
    path: 'public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
