
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTexPlugin = require('extract-text-webpack-plugin');
const Obfuscator = require('webpack-obfuscator');

module.exports = {

entry: {
app : "./src/js/app.js",


},
output: {
   
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    publicPath: '/dist'

},


devServer: {
    contentBase: './dist',
    

  },
  mode: 'production',
module : {
    rules: [
        
        {
            include: [path.resolve(__dirname, 'src')],
    

            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                    {
                        loader: 'babel-loader',
                       
                    }             
                ]   
        },
        {
            include: [path.resolve(__dirname, 'src')],
            test: /\.scss$/,
            use: [       
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    
                
                ]          
        },
      
        {
            include: [path.resolve(__dirname, 'src')],
            test: /\.(jpg|png|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        filename: '[name].[ext]',
                    }
                }
            ]
        },

     
        
    ]
},
 plugins: [
    new Obfuscator({
        rotateUnicodeArray: true
    }, [])
] 
};
 