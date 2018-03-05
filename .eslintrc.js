module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'import', 'react'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['dev.js', 'test/**'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  parser: 'babel-eslint'
};
