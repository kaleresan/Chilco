const path = require('path');

module.exports = (config, env) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
  });

  config.resolve.alias.react = path.resolve('./node_modules/react');
  config.resolve.alias['react-dom'] = path.resolve('./node_modules/react-dom');
  config.resolve.alias['styled-components'] = path.resolve(
    './node_modules/styled-components'
  );
  return config;
};
