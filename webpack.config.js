var path = require('path');
var FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {test: /\.js$/, loader: 'flowtype-loader', enforce: 'pre', exclude: /node_modules/}
    ]
  },
  plugins: [
    new FlowtypePlugin()
  ]
};
