const path = require("path");

let config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      }
    ]
  },
  mode: process.env.NODE_ENV
};

module.exports = config;
