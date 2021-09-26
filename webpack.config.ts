const PRODUCTION = 'production'
const DEVELOPMENT = 'development'

const isProduction = process.env.NODE_ENV === PRODUCTION

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require("path")

module.exports = {
    mode: isProduction ? PRODUCTION : DEVELOPMENT,
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: "./src",
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json']
                },
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.woff?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: './font/[hash].[ext]',
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.png?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: './image/[hash].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    devtool: isProduction ? undefined : 'source-sample',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}
