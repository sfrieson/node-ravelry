var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        compress: {
          ecma: 6,
          warnings: false
        },
        extractComments: true
      }
    })
  ]
};
