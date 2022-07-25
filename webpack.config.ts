import { Configuration } from "webpack";
import path from 'path';

const config: Configuration = {
  context: path.join(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/assets",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        use: "ts-loader",
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
};

export default config;
