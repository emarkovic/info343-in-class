const path = require("path");
const webpack = require("webpack");

const SRC_DIR = path.join(__dirname, "src");
const DIST_DIR = path.join(__dirname, "dist");

module.exports = {
    devtool: "source-map",
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        path.join(SRC_DIR, "index.jsx")
    ],
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["react-hot", "babel"],
                include: path.join(SRC_DIR) 
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
