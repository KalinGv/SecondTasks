const merge  = require ('webpack-merge');
const config = require('./webpack.config.js');


module.exports = merge(config, () => {
    return {
      devtool: 'source-map',
      evServer: {
        contentBase: './dist',
    
      },
      plugins: [new CleanWebpackPlugin(['dist'])],
      mode: 'production',
  };

});