const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // 👈 main TS entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // 👈 allow imports without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // your HTML shell
    }),
  ],
  devServer: {
    port: 3030,
    historyApiFallback: true, // 👈 allows React Router to work properly
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 👈 handles .ts and .tsx files
        exclude: /node_modules/,
        use: "ts-loader", // 👈 TypeScript loader
      },
      {
        test: /\.(js|jsx)$/, // optional: still handle .js files too
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/, // CSS, SCSS, SASS
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/, // image and font files
        type: "asset", // modern way, replaces url-loader/file-loader
      },
    ],
  },
}
