module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'module-resolver',
      {
        alias: {
          'components': './src/components',
          'navigation': './src/navigation',
          'screens': './src/screens',
        },
        root: ['.'],
      },
    ],
  ],
};
