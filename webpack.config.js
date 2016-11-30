/**
 * Created by lily on 2016/9/7.
 */
module.exports = {
    context: __dirname + "/source",
    entry: "./js/webpack_gulp_test/webpack_gulp.js",
    output: {
        path: __dirname + "/target/js/webpack_gulp_test",
        filename: "webpack_gulp.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude : /node_modules/,
            loader: 'babel-loader'
        }]
    }
};