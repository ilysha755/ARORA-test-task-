const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode:"production",
  entry: {
    main: path.resolve(__dirname, './src') + '/main.js',
},
output: {
  path: path.resolve(__dirname, '../front'),
  filename: '[name].js',
},
resolve:{
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        images: path.resolve(__dirname, 'src/'),
      }
},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource'
     },
      {
   test: /\.scss$/,
     use: [
       'style-loader',
       'css-loader',
       'sass-loader'
     ]
}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: '../front/index.html'
      }),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    compress: true,
    port: 8080,
  }
}