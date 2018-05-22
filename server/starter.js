require('ignore-styles');
require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['env', 'es2015', 'react-app']
});
module.exports = require('./index');
