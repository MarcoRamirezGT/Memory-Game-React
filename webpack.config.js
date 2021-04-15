const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//La configuracion de react fue creado desde 0, para realizarlo utilice el video de la clase y posteriormente instalar el resto de dependencias.

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],

    }),



  ],
  module: {

    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/src/images/[name].[ext]'
            }
          },
        ],
      },







    ],

  },
};