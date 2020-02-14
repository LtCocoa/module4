const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'myLib'
    },
    mode: 'production',
    watch: true,
    module:{
        rules:[{
            test:/\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }
}