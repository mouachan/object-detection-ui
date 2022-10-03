const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

 module.exports = merge(common, {
   mode: 'development',
   devServer: {
     static: './dist',
     port: 3000,
     allowedHosts: ['all'],
     headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
   },
 });
