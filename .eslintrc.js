module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'webextensions': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'import-quotes'
  ],
  'rules': {
    'jsx-quotes': ['warn', 'prefer-single'],
    'quotes': ['warn', 'single'],
    'indent': 'off',
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'import-quotes/import-quotes': [1, 'single'],
    'prefer-arrow-callback': 'warn',
    'no-unused-vars': 'warn',
    'semi': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'no-mixed-spaces-and-tabs': 'off',

    // React rules
    'react/prop-types': ['warn']
  }
}
