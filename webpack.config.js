var webpack = require('webpack');
var path = require('path');

var env = process.env.WEBPACK_ENV;
var libraryName = 'tavutin';
var outputFile;
var plugins = [];

if (env === 'build') {
  outputFile = libraryName + '.min.js';
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    output: {
      comments: false
    },
    compressor: {
      warnings: false
    }
  }));
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    plugins: plugins
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;
