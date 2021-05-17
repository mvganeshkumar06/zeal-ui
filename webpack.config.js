const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            name: "zeal-ui",
            type: "umd",
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/react"],
                    plugins: [
                        "transform-class-properties",
                        "transform-object-rest-spread",
                        "babel-plugin-styled-components",
                    ],
                },
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    modules: true,
                },
            },
        ],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
        "styled-components": {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
        },
    },
};
