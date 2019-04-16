var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {

entry: "./src/js/app.js",
output: {
path: path.resolve(__dirname, 'dist'),
filename: "bundle.js",
publicPath: '/dist'
},
module : {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                    {
                        loader: 'babel-loader',
                       
                    }             
                ]   
        },
        {
            test: /\.scss$/,
            use: [       
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    
                
                ]
                
        },
      
        {
            test: /\.(jpg|png|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }
            ]
        },
        {

            
        }, 
        
        
    ]
},

};
 