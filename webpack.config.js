const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, options) => {
  return Object.entries({
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    entry: {
      app: path.resolve(__dirname, './src/js/app.js'),
    },
    serve: process.env.WEBPACK_SERVE ? {
      dev: {
        contentBase: './dist',
        port: 8080,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      hot: {
        hot: true,
        reload: true,
      },
      host: '0.0.0.0',
      port: 8080,
    } : null,
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
             {
               loader: 'babel-loader',
             },
            {
              loader: '@mdx-js/loader',
            },
          ],
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, './src/js'),
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules)/,
          include: [
            path.resolve(__dirname, './src/scss'),
          ],
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer'),
                  require('cssnano'),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      }),
    ],
  }).reduce((c, [key, val]) => {
    if (val) {
      c[key] = val
    }
    return c
  }, {})
}
