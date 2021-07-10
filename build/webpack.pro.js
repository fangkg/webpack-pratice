const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        },
        // 不适用缓存
        version: 'new_version'
    }
})