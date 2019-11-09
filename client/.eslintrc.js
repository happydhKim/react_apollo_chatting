module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/require-default-props": "off"
  }
};