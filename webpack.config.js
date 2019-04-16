var path = require('path');
/* var ExtractTextPlugin = require(extract-text-webpack-plugin);


var extractPlugin = new ExtractTextPlugin({

filename: 'style.css'

});

 */
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
            use: [
                    {
                        loader: 'babel-loader',
                       
                    }             
                ]   
        },
        {
            test: /\.scss$/,
            use: [
                
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                
                
            ]
                
        },
            
             
            
        
    ]
},
/*  plugins: [
    extractPlugin
]  */
};
 