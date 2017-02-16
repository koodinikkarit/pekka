
import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import graphQLHTTP from 'express-graphql';

const app = express();

const APP_PORT = 3000;

const compiler = webpack({
    entry: path.resolve(__dirname, 'js', 'app.js'),
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                test: /\.js$/,
            },
        ],
    },
    output: { filename: 'app.js', path: '/' }
});

const webPackApp = new WebpackDevServer(compiler, {
    contentBase: '/public/',
    publicPath: '/js/'
});

webPackApp.use('/', express.static(path.resolve(__dirname, 'public')));


webPackApp.listen(APP_PORT, () => {
    console.log("server running");
});