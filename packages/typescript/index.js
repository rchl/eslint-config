/** @type {import('eslint').Linter.Config} */
module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'plugin:@typescript-eslint/strict-type-checked',
                'plugin:@typescript-eslint/stylistic-type-checked',
            ],
            rules: {
                indent: 'off',
                'no-array-constructor': 'off',
                'no-extra-parens': 'off',
                'no-extra-semi': 'off',
                'no-loss-of-precision': 'off',
                'no-undef': 'off',
                'no-unused-vars': 'off',
                quotes: 'off',
                'require-await': 'off',
                semi: 'off',
                '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
                '@typescript-eslint/indent': [
                    'error', 4, {
                        SwitchCase: 1,
                        FunctionDeclaration: { parameters: 'first' },
                        FunctionExpression: { parameters: 'first' },
                        CallExpression: { arguments: 'first' },
                    },
                ],
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-extra-parens': 'error',
                '@typescript-eslint/no-extra-semi': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-unnecessary-qualifier': 'error',
                '@typescript-eslint/no-unused-vars': [
                    'error', {
                        args: 'after-used',
                        argsIgnorePattern: '^_',
                        // caughtErrors: 'all',  // NEXT MAJOR VERSION
                        destructuredArrayIgnorePattern: '^_',
                    },
                ],
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/semi': ['error', 'always'],
                '@typescript-eslint/type-annotation-spacing': 'error',
            },
        },
        {
            files: ['*.vue'],
            parserOptions: {
                parser: {
                    // Override script parser for `<script lang="ts">`
                    ts: '@typescript-eslint/parser',
                },
            },
            rules: {
                'no-undef': 'off',
                'no-unused-vars': 'off',
            },
        },
    ],
};
