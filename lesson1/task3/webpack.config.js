const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + '/review_build'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
      use: ["style-loader", "css-loader"]
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // })
  ]
};
