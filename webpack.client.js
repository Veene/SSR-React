const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path');

const config = {
    //Tell webpack the root file of our client application
    entry: './src/client/client.js',

    // Tell webpack where to put the ouput file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
}

module.exports = merge(baseConfig, config)