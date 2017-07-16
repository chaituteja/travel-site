/**
 * Created by CHIDORI on 15-Jul-17.
 */
const path = require('path');
module.exports = {
    entry:{
        App: "./app/assets/scripts/app.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve("./app/temp", 'scripts'),
        filename:"[name].js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude:/node_modules/
            }
        ]
    }
}