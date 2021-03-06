const options = {
    context: __dirname+'/src',
    entry: {
        popup: './Popup/Popup.js',
        background: './Background/Background.js',
        content: './Content/Content.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['es2016', 'react']}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader'
                ]
            }
        ]
    },
};
module.exports = options;
