const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")


module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,"../webapp-ui/main.js"),
    output: {
        filename:"app.bundle.js",
        path:path.resolve(__dirname,"../webapp-ui/")
    },
    resolve: {
        extensions: [".js",".css",".vue"]
    },
    module: {
        rules:[
            {test:/\.vue/,loader:"vue-loader"},
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.(woff|ttf|svg)/,loader:"url-loader"},
            {test:/\.(png|gif|jpg)/,loader:"url-loader"}
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
