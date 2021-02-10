module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-control-statements/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-control-statements', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': [0],
  },
};
