module.exports = (api) => {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      { libraryName: 'tezign-ui', libraryDirectory: 'lib', style: true },
      'tezign-ui'
    ]
  ];

  return {
    presets,
    plugins
  };
};
