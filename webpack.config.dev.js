import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true, //  webpack will/will-not display all files its bundling
  entry: [ // Order is important
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/index.js',
  ],
  target: 'web', // Webpack is going to bundle that is compatible to ##node or ##web as options
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
// Start Bootstrap
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
      },
// End Bootstrap
      { test: /\.(jpe?g|png|gif)$/i, loaders: ['file'] },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
    ],
  },
};
