const path = require('path');
const assetsPath = path.join(__dirname, "public", "assets");
const serverPath = path.join(__dirname, "server");

module.exports =[
    {
        name:"browser",
        entry: {
            app: [
                __dirname + '/app/entry.js' //唯一入口文件
            ]
        },
        output: {
            path: assetsPath, //打包后的文件存放的地方
            filename: '[name].[chunkhash:8].bundle.js', //打包后输出文件的文件名
            // publicPath:__dirname+'/public',
            chunkFilename: '[name]-[id].[chunkhash:8].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    include: /src/
                },
                {
                    test: /\.(png|jpg)$/,
                    use: 'url-loader?limit=8192&name=src/images/[name].[ext]'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", 'css-loader', 'postcss-loader', 'sass-loader']
                }
            ]
        }
    },
    {
        name:"browser",
        entry: {
            app: [
                __dirname + '/app/entry.js' //唯一入口文件
            ]
        },
        output: {
            path: assetsPath, //打包后的文件存放的地方
            filename: '[name].[chunkhash:8].bundle.js', //打包后输出文件的文件名
            // publicPath:__dirname+'/public',
            chunkFilename: '[name]-[id].[chunkhash:8].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                    include: /src/
                },
                {
                    test: /\.(png|jpg)$/,
                    use: 'url-loader?limit=8192&name=src/images/[name].[ext]'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", 'css-loader', 'postcss-loader', 'sass-loader']
                }
            ]
        }
    }
];