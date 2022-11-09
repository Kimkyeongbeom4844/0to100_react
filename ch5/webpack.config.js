const path = require("path");
const reactRefreschWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

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
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new reactRefreschWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
  },
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
