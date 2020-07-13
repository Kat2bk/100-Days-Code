// entry where does our app kickoff? test.js
// where to output the final bundle file (everything our app needs to run)
// which we put in here

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}