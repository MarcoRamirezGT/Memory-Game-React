const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            options:{
                presets: ['@babel/preset-react']
            }
        } 
    },
    {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader','css-loader','sass-loader']
    },
    {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader']
    }
     
   
   


    ],
    
  },
};