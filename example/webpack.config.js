const path = require('path');

const srcPath = path.join(process.cwd(), '/src');

module.exports = {
  resolve: {
    fallback: srcPath
  },
  entry: {
    'app1': './src/client/app1/index.js',
  },
  output: {
    path: './public/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: [
          'es2015',
          'stage-1',
          'react'
        ]
      }
    }]
  },
  devtool: 'inline-source-map'
};
