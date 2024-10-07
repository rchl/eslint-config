import globals from 'globals';
import importPlugin from 'eslint-plugin-import-x';
import stylisticJs from '@stylistic/eslint-plugin-js';
import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        name: 'eslint-config-rchl-base',
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.node,
            },
        },
        plugins: {
            'import-x': /** @type {any} */(importPlugin),
            '@stylistic': stylisticJs,
        },
        rules: {
            '@stylistic/array-bracket-spacing': 'error',
            '@stylistic/brace-style': 'error',
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/comma-spacing': 'error',
            '@stylistic/computed-property-spacing': 'error',
            '@stylistic/eol-last': 'error',
            '@stylistic/func-call-spacing': 'error',
            '@stylistic/indent': [
                'error', 4, {
                    SwitchCase: 1,
                },
            ],
            '@stylistic/key-spacing': 'error',
            '@stylistic/keyword-spacing': 'error',
            '@stylistic/linebreak-style': 'error',
            '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/object-curly-newline': ['error', { consistent: true }],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/one-var-declaration-per-line': ['error', 'always'],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/space-in-parens': 'error',
            '@stylistic/space-infix-ops': 'error',
            'import-x/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        ['sibling', 'parent'],
                        'index',
                    ],
                    pathGroups: [
                        {
                            pattern: '~@*/**',
                            group: 'sibling',
                        },
                        {
                            pattern: '~/**',
                            group: 'sibling',
                        },
                    ],
                    distinctGroup: false,
                    pathGroupsExcludedImportTypes: ['builtin', 'object'],
                },
            ],
            curly: 'error',
            'dot-notation': 'error',
            eqeqeq: 'error',
            'no-console': [
                'error', {
                    allow: ['assert', 'warn', 'error', 'info'],
                },
            ],
            'no-constant-binary-expression': 'error',
            'no-constructor-return': 'error',
            'no-template-curly-in-string': 'error',
            'no-unused-vars': [
                'error', {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
    {
        name: 'eslint-config-rchl-base/test',
        files: [
            '**/*.test.*',
        ],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];
