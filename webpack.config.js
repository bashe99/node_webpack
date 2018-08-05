var path = require("path");

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.js|jsx$/, 
                exclude: /(node_modules)/,
                loaders:['babel-loader']
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            }
        ]
    }
}