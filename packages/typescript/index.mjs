import tsParser from '@typescript-eslint/parser';
import tsEslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

// Cast `tsEslint.config` return type since it defines its own `Config` types that are not compatible with
// standard eslint types.
export default /** @type {import('eslint').Linter.Config[]} */(tsEslint.config(
    // TS config doesn't restrict itself to typescript extensions, overriding vue parser.
    ...tsEslint.configs.recommended.map(config => ({
        ...config,
        files: ['**/*.ts', '**/*.tsx'],
    })),
    {
        name: 'eslint-config-rchl-typescript',
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            '@stylistic/ts': stylisticTs,
        },
        rules: {
            '@stylistic/indent': 'off',
            '@stylistic/no-extra-parens': 'off',
            '@stylistic/no-extra-semi': 'off',
            '@stylistic/quotes': 'off',
            '@stylistic/semi': 'off',
            '@stylistic/ts/indent': [
                'error', 4, {
                    SwitchCase: 1,
                    FunctionDeclaration: { parameters: 'first' },
                    FunctionExpression: { parameters: 'first' },
                    CallExpression: { arguments: 'first' },
                },
            ],
            '@stylistic/ts/member-delimiter-style': 'error',
            '@stylistic/ts/no-extra-parens': 'error',
            '@stylistic/ts/no-extra-semi': 'error',
            '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
            '@stylistic/ts/semi': ['error', 'always'],
            '@stylistic/ts/type-annotation-spacing': 'error',
            '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
            '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error', {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-useless-constructor': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            'no-undef': 'off',
            'no-unused-vars': 'off',
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
    {
        name: 'eslint-config-rchl-typescript/vue',
        files: ['**/*.vue'],
        languageOptions: {
            // https://typescript-eslint.io/troubleshooting/typed-linting
            parserOptions: {
                parser: {
                    // Override script parser for `<script lang="ts">`
                    ts: tsParser,
                },
            },
        },
        rules: {
            'no-undef': 'off',
            'no-unused-vars': 'off',
        },
    },
));
