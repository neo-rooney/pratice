const path = require("path");

const config = {
  entry: {
    main: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "output.js",
    library: "Blocki",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
};

module.exports = config;
