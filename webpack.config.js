// https://nodejs.org/api/path.html#path_path_join_paths
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//--------------------------IMPORTS--------------------------------------------

// console.log('__dirname = ', __dirname);
// console.log('path.join() = ', path.join(__dirname, 'public'));

// EXPORTING A FUNCTION...
// https://webpack.js.org/configuration/configuration-types/

module.exports = (env) => {
    const isProduction = env === 'production'; // true or false
    const CSSExtract = new ExtractTextPlugin('styles.css');
    
    console.log('isProduction:', isProduction);
    console.log('env:', env);
    
    
    return {
        entry: './src/app.js',
        //entry: './src/playground/higher-order-component.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract    
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };    
};
