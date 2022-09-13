const path = require("path");
const reactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./index.jsx",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [new reactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    devMiddleware: {
      publicPath: "/dist",
    },
    static: {
      directory: path.join(__dirname),
    },
    hot: true,
  },
};
