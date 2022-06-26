const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const deps = require('../package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: deps['react'],
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
