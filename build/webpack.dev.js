const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
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
    cache: {
        type: 'memory'
    }
})