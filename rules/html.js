module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  files: [
    '*.html'
  ],
  extends: [
    'plugin:prettier/recommended'
  ],
  rules: {
    '@angular-eslint/template/banana-in-box': 'error',
    '@angular-eslint/template/eqeqeq': 'error',
    '@angular-eslint/template/no-negated-async': 'error'
  },
  excludedFiles: [
    '*inline-template-*.component.html'
  ],
  plugins: [
    '@angular-eslint/eslint-plugin-template'
  ]
};
