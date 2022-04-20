const prod = process.env.NODE_ENV === 'production';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './client/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '/build/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    static: {
      publicPath: 'build',
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
