const webpack = require("webpack");

const path = require("path");

const DashboardPlugin = require("webpack-dashboard/plugin");

const entries = {
    "index":"./src/app.js",
}

module.exports = {
    entry:entries,
    output:{
        filename:"./js/[name].bundle.js",
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js[x]?$/, loader: "babel-loader?presets[]=es2015" }
        ]
    },
    plugins: [
        new DashboardPlugin()
    ],
    devServer: {
        hot    : true,
        inline : true
    }
}