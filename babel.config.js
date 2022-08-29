module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        alias: {
          'components': './src/components',
          'navigation': './src/navigation',
          'screens': './src/screens',
          'contexts': './src/contexts',
          'reducers': './src/reducers',
          'assets': './src/assets'
        },
        root: ['.'],
      },
    ],
  ],
};
