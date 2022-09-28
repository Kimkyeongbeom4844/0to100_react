const path = require("path");
const reactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./app.jsx",
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
  output: {
    path: path.join(__dirname, "dist"),
  },
  plugins: [new reactRefreshWebpackPlugin()],
  devServer: {
    hot: true,
    devMiddleware: {
      publicPath: "/dist",
    },
    static: {
      directory: path.join(__dirname),
    },
  },
};
