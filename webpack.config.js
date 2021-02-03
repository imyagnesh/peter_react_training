// old javascript way to import data
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// old JS technic to export data
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html',})
  ]
};
