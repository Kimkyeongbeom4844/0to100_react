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

  //웹팩데브서버 설정하는 곳
  devServer: {
    hot: true,
    devMiddleware: {
      publicPath: "/dist/", //웹팩데브서버가 사용하는 가상경로
    },
    static: path.join(__dirname), //static, index.html가 있는 경로를 표시하면됨
  },
};
