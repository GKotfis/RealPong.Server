const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [
  {
    entry: {
      "public/game": "./src/game.ts"
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: [/node_modules/, /server.ts/]
        }
      ]
    },

    node: {
      fs: "empty"
    },

    externals: {
      uws: "uws"
    },

    devtool: "inline-source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist")
    },

    mode: "development",

    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      https: true
    },

    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "index.html"),
          to: path.resolve(__dirname, "dist")
        },
        {
          from: path.resolve(__dirname, "assets", "**", "*"),
          to: path.resolve(__dirname, "dist")
        }
      ]),
      new webpack.DefinePlugin({
        "typeof CANVAS_RENDERER": JSON.stringify(true),
        "typeof WEBGL_RENDERER": JSON.stringify(true)
      })
    ]
  }
];
