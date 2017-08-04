module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      ApiService: 'app/services/index.js',
      AuthService: 'app/services/auth/index.js',
      Login: 'app/components/Login/index.js',
      Header: 'app/components/Header/index.js',
      Footer: 'app/components/Footer/index.js',
      Register: 'app/components/Register/index.js',
      HomePage: 'app/components/HomePage/index.js',
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
