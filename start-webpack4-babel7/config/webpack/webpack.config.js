//const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: '[name].js'
  },
  devServer: {
    before: function(app, server) {
      app.get('/', function(req, res) {
        res.json({ custom: 'response' });
      });
    }
  },
  //plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        loader: "file-loader",
        options: { name: '/static/[hash]' }
      },
      {
        test: /\.(otf|ttf)$/,
        loader: "file-loader",
        options: { name: '/static/[hash]' }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
