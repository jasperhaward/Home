const production = process.env.NODE_ENV === "production";

module.exports = {
    mode: production ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
        filename: "main.bundle.js",
        path: __dirname + "/public/static/js/",
        publicPath: "/static/js",
    },
    devtool: production ? "eval-source-map" : false,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            "@components": __dirname + "/src/components",
            "@plugins": __dirname + "/src/plugins",
            "@routes": __dirname + "/src/routes",
            "@styles": __dirname + "/src/styles",
        },
    },
    devServer: {
        static: {
            directory: "./public",
        },
        historyApiFallback: {
            index: "index.html",
        },
    },
};
