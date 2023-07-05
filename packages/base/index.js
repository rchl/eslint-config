/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2022: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'array-bracket-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'computed-property-spacing': 'error',
        curly: 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: 'error',
        'func-call-spacing': 'error',
        indent: [
            'error', 4, {
                SwitchCase: 1,
            },
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'no-console': [
            'error', {
                allow: ['assert', 'warn', 'error', 'info'],
            },
        ],
        'no-constant-binary-expression': 'error',
        'no-constructor-return': 'error',
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-trailing-spaces': 'error',
        'no-unused-vars': [
            'error', {
                args: 'after-used',
                argsIgnorePattern: '^_',
                // caughtErrors: 'all',  // NEXT MAJOR VERSION
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', { consistent: true }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'one-var-declaration-per-line': ['error', 'always'],
        'prefer-const': 'error',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'padded-blocks': ['error', 'never'],
        semi: ['error', 'always'],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
    },
    overrides: [
        {
            files: [
                '**/*.test.js',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
