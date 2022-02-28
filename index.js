module.exports = {
  extends: [
    './rules/typescript',
    './rules/html'
  ].map(require.resolve),
  rules: {}
};
