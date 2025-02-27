module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: ['html', 'prettier', 'react-hooks'],

  // typescript linting
  // overrides: [
  //   // This configuration will apply only to TypeScript files
  //   {
  //     files: ['**/*.ts', '**/*.tsx'],
  //     parser: '@typescript-eslint/parser',
  //     settings: { react: { version: 'detect' } },
  //     env: {
  //       browser: true,
  //       node: true,
  //       es6: true,
  //     },
  //     extends: [
  //       'eslint:recommended',
  //       'plugin:@typescript-eslint/recommended', // TypeScript rules
  //       'plugin:react/recommended', // React rules
  //       'plugin:react-hooks/recommended', // React hooks rules
  //       'plugin:jsx-a11y/recommended', // Accessibility rules
  //       'prettier/@typescript-eslint', // Prettier plugin
  //       'plugin:prettier/recommended', // Prettier recommended rules
  //     ],
  //     rules: {
  //       'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
  //       // We will use TypeScript's types for component props instead
  //       'react/prop-types': 'off',

  //       // No need to import React when using Next.js
  //       'react/react-in-jsx-scope': 'off',

  //       // This rule is not compatible with Next.js's <Link /> components
  //       'jsx-a11y/anchor-is-valid': 'off',

  //       // Why would you want unused vars?
  //       '@typescript-eslint/no-unused-vars': ['error'],

  //       // I suggest this setting for requiring return types on functions only where useful
  //       '@typescript-eslint/explicit-function-return-type': [
  //         'warn',
  //         {
  //           allowExpressions: true,
  //           allowConciseArrowFunctionExpressionsStartingWithVoid: true,
  //         },
  //       ],
  //     },
  //   },
  // ],
}
