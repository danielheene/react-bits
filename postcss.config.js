/* eslint @typescript-eslint/no-var-requires: "off" */

module.exports = {
  parser: 'postcss-comment', // allows inline comments in css
  plugins: [
    require('postcss-import'), //
    require('precss')({}), // allows a bit of scss/sass code style in normal css
    require('postcss-font-family-system-ui')(), // create a fallback font string for system-ui
    require('postcss-flexbugs-fixes')({}), // solves different bugs with flex boxes
    require('postcss-clean')({ level: 2 }), // cleans css and merges selectors
    require('autoprefixer')({
      supports: true,
      remove: true,
    }),
  ],
};
