module.exports = {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    extends: [
      'airbnb-base',
      'airbnb-typescript/base',
      'eslint-config-airbnb-base',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      './rules/typescript',
      './rules/html',
    ].map(require.resolve),
    rules: {}
  };
