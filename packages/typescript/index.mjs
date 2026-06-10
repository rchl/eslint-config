import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';

export default defineConfig({
    extends: [tsEslint.configs.recommended],
    name: 'eslint-config-rchl-typescript',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
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
                ts: tsEslint.parser,
            },
        },
    },
    rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
    },
},
);
