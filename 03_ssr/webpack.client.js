const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  // tell webpack the root file of our client application
  entry: './src/client/client.js',

  // tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
}

module.exports = merge(baseConfig, config)
