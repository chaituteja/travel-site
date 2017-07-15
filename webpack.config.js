/**
 * Created by CHIDORI on 15-Jul-17.
 */
const path = require('path');
module.exports = {
    entry:"./app/assets/scripts/app.js",
    output: {
        path: path.resolve("./app/temp", 'scripts'),
        filename:"App.js"
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