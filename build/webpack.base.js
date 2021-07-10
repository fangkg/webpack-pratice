const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = process.cwd();
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
console.log('root:', rootDir);

module.exports = {
    entry: path.resolve(rootDir, 'src/index.js'),
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: 'bundle.[contenthash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader',
                include: path.resolve(rootDir, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                use: [
                    // 'style-loader',
                    // 打包后抽离css文件
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'module',
                                localIdentName: '[local]__[hash:base64:5]'
                            }
                        }
                    },
                    'less-loader',
                    // css自动添加前缀
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer']
                                ]
                            }
                        }
                    }
                    
                ]
            },
            // 资源加载器
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, 'public/index.html'),
            inject: 'body',
            scriptLoading: 'blocking'
        }),
        new CleanWebpackPlugin(),
        // 复制静态资源到打包目录
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '*.js',
                    context: path.resolve(rootDir, "public/js"),
                    to: path.resolve(rootDir, "dist/js")
                }
            ]
        }),
        // 打包后抽离css文件
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // 压缩打包后的css文件
        new OptimizeCssPlugin()
    ]
}