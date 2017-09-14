const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },

  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8080
  }
  //  plugins: [HtmlWebpackPluginConfig]
};
