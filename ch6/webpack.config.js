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
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["react-refresh/babel"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
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
      publicPath: "/dist/",
    },
    static: {
      directory: path.join(__dirname),
    },
  },
};
