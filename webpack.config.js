var path = require('path');
const webpack = require('webpack')

module.exports = {
 entry: './main.js',

 output: {
   path: path.resolve(__dirname, 'public'),
   filename: 'index.js'
 },

 devServer: {
   inline: true,
   port: 3333
 },

 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react', 'stage-2']
       }
     },
     {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
   ]
 }
}
