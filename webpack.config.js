const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './scripts/script.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ]
};
