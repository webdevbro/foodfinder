const path = require("path");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/js/App.js"],
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "js/bundled-scripts.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new htmlWebpack({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
