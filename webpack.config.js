const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/script.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ]
};
