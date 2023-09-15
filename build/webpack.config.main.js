const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: resolve(__dirname, "../src/main/index.ts"),
    preload: resolve(__dirname,"../src/main/preload/index.ts")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: "esbuild-loader",
      },
      
      {
        test: /\.node$/,
        exclude: /node_modules/,
        use: "node-loader",
      },
    ],
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
    path: resolve(__dirname, "../dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "../static"),
          to: resolve(__dirname, "../dist/static"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".node"],
  },
  watch: true,
  watchOptions: {
    poll: 1000, // 每秒询问多少次
    aggregateTimeout: 500, //防抖 多少毫秒后再次触发
    ignored: /node_modules/, //忽略时时监听
  },
  target: "electron-main",
};
