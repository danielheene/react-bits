module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-high-performance-animation',
  ],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: ['multicolumn'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
  },
};
