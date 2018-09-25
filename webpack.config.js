const package = require("./package.json");
const tsconfig = require("./tsconfig.json");
const webpack = require("webpack");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV;

const webpackMode = NODE_ENV ? NODE_ENV : "development";
const isProduction = NODE_ENV === "production";

const fileName = isProduction
  ? `${package.name}.production.min.js`
  : `${package.name}.development.js`;
const devTool = isProduction ? "source-map" : "inline-source-map";

const config = {
  mode: webpackMode,
  entry: {
    main: "./src/foo.ts"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: fileName,
    library: "mylibrary",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: require.resolve("./tsconfig.json")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    })
  ],
  devtool: devTool,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};

module.exports = config;
