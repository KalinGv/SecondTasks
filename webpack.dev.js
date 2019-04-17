const merge  = require ('webpack-merge');
const config = require('./webpack.config.js');
//const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = merge( config, () => {
    
    return {
        devtool: 'inline-source-map',
        devServer: {
          contentBase: './dist',
          hot: true,
          livereload: true,
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            //new LiveReloadPlugin('dist'),
    ],
        
        mode: 'development',
    
    };

});