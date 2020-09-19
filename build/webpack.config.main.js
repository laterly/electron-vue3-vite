const os = require("os");
const { resolve } =require('path')
const HappyPack = require("happypack");
const HappyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports ={
    entry: {
        main: resolve(__dirname, "../src/main/main.js"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "happypack/loader?id=MainHappyBabel"
            },
            {
                test: /\.node$/,
                exclude: /node_modules/,
                use: "node-loader"
            },
        ],
    },
    output: {
        filename: "[name].js",
        libraryTarget: 'commonjs2',
        path: resolve(__dirname, "../dist"),
    },
    plugins: [
        new HappyPack({
            id: "MainHappyBabel",
            loaders: [
                {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    },
                },
            ],
            threadPool: HappyThreadPool,
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", ".node"],
    },
    watch: true,
    watchOptions: {
      poll: 1000, // 每秒询问多少次
      aggregateTimeout: 500,  //防抖 多少毫秒后再次触发
      ignored: /node_modules/ //忽略时时监听
    },
    target: 'electron-main'
};
