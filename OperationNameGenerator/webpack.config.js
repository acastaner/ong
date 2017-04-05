const webpack = require("webpack");
const config = require("folke-webpack-config");

config.resolve.alias = {
    "knockout": require.resolve("knockout")
};

module.exports = config;