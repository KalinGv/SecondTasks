const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTexPlugin = require('extract-text-webpack-plugin');

module.exports = {

entry: {
main : "./src/js/app.js",

},
output: {
   
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",

publicPath: '/dist'
},

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
                    }
                }
            ]
        },
        {

            
        }, 
        
        
    ]
},

};
 