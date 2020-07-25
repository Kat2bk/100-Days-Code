// entry where does our app kickoff? test.js
// where to output the final bundle file (everything our app needs to run)
// which we put in here

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx|mjs)$/,
                include: [
                  /src\/*/,
                  /node_modules\/react-native-/,
                ],
                loader: require.resolve('babel-loader'),
                options: {
                  babelrc: false,
                  cacheDirectory: true
                }
            }
        ]
    }
}