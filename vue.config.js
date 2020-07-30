const path = require('path');

module.exports = {
    publicPath: '/search/',
    configureWebpack: {
        resolve: {
            alias: {
               'caml-js': path.resolve(__dirname, 'github.com/caml-js'),
            }
        }
    }
};

