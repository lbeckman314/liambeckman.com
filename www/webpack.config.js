const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  entry: './index.js',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};

