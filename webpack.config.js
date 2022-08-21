const path = require("path")

module.exports = {
    entry: "./vue/index.js",
    output: {
        path: path.resolve(__dirname, "source/javascripts"),
        filename: "[name].js"
    }
}