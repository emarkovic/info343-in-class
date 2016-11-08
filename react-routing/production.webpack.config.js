const path = require("path");
const webpack = require("webpack");

const SRC_DIR = path.join(__dirname, "src");
const DIST_DIR = path.join(__dirname, "dist");

module.exports = {
    entry: path.join(SRC_DIR, "index.jsx"),
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process": {
                "env": {
                    "NODE_ENV": JSON.stringify("production")
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["babel"],
                include: path.join(SRC_DIR) 
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
