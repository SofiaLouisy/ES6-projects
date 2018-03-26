module.exports = {
    entry: ['/home/sofia/web-projects/courseJSandReact/app/index.js','/home/sofia/web-projects/courseJSandReact/app/classes.js'],
    output: {
        path: '/home/sofia/web-projects/courseJSandReact/build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}