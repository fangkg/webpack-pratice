const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            inject: 'body',
            scriptLoading: 'blocking'
        })
    ],
    // 实时更新并预览效果
    devServer: {
        port: "3001", // 默认是8080
        hot: true,
        stats: "errors-only", // 终端仅仅打印error
        compress: true, // 是否启用gzip压缩
        proxy: {
            '/api': {
                target: 'http://0.0.0.0:80',
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    devtool: 'eval-cheap-module-source-map'
}