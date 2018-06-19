const webpack = require('webpack')
const { parsed: localEnv } = require('dotenv').config()

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv)) // enable dotenv ... note: NO DESTRUCTURING!
    // ENABLE THE FOLLOWING IF BUILD FAILS ON REMOTE SERVER / APP DOESN'T WORK ON IE:
    // config.plugins = config.plugins.filter(plugin => {
    //   if (plugin.name === 'UglifyJsPlugin') {
    //     return false
    //   } else {
    //     return true
    //   }
    // })
    config.node = { fs: 'empty' } // fix bug with fs in dotenv
    return config
  }
}
