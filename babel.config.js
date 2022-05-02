module.exports = {
  // presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './components',
          '@public': './public',
          '@lib': './lib',
        },
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    ],
  ],
};
